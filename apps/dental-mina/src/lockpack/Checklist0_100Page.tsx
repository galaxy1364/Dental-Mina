import React, { useEffect, useMemo, useState } from "react";

type Item = { id: number; title: string; done: boolean };

const DB_NAME = "dental-mina";
const DB_VER  = 1;
const STORE   = "lockpack";
const KEY     = "checklist_0_100_v1";

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VER);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE);
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function dbGet<T>(key: string): Promise<T | null> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readonly");
    const st = tx.objectStore(STORE);
    const r  = st.get(key);
    r.onsuccess = () => resolve((r.result ?? null) as T | null);
    r.onerror = () => reject(r.error);
  });
}

async function dbSet<T>(key: string, val: T): Promise<void> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    const st = tx.objectStore(STORE);
    const r  = st.put(val as any, key);
    r.onsuccess = () => resolve();
    r.onerror = () => reject(r.error);
  });
}

function defaultItems(): Item[] {
  // 0..100 (101 آیتم) — ساده و قابل توسعه
  return Array.from({ length: 101 }, (_, i) => ({
    id: i,
    title: `بند ${i}`,
    done: false,
  }));
}

export function Checklist0_100Page() {
  const [items, setItems] = useState<Item[]>([]);
  const doneCount = useMemo(() => items.filter(x => x.done).length, [items]);

  useEffect(() => {
    (async () => {
      const saved = await dbGet<Item[]>(KEY);
      setItems(saved && Array.isArray(saved) ? saved : defaultItems());
    })().catch(() => setItems(defaultItems()));
  }, []);

  useEffect(() => {
    if (items.length > 0) dbSet(KEY, items).catch(() => {});
  }, [items]);

  const toggle = (id: number) => {
    setItems(prev => prev.map(x => (x.id === id ? { ...x, done: !x.done } : x)));
  };

  const reset = () => setItems(defaultItems());

  return (
    <div style={{ padding: 16, maxWidth: 720, margin: "0 auto", fontFamily: "system-ui" }}>
      <h2 style={{ margin: 0 }}>چک‌لیست 0 تا 100 (LOCKPACK)</h2>
      <p style={{ marginTop: 8, opacity: 0.8 }}>
        پیشرفت: {doneCount} / {items.length}
      </p>

      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <button onClick={reset} style={{ padding: "10px 12px", borderRadius: 10 }}>
          ریست
        </button>
      </div>

      <div style={{ border: "1px solid rgba(0,0,0,0.12)", borderRadius: 14, overflow: "hidden" }}>
        {items.map((it) => (
          <label key={it.id} style={{ display: "flex", gap: 10, padding: 12, borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
            <input type="checkbox" checked={it.done} onChange={() => toggle(it.id)} />
            <div style={{ display: "flex", gap: 10, alignItems: "center", width: "100%" }}>
              <div style={{ width: 42, opacity: 0.7 }}>{it.id}</div>
              <div style={{ flex: 1 }}>{it.title}</div>
              <div style={{ opacity: 0.6 }}>{it.done ? "✓" : ""}</div>
            </div>
          </label>
        ))}
      </div>

      <p style={{ marginTop: 12, opacity: 0.7 }}>
        ذخیره‌سازی: IndexedDB (پایدار، چت‌پروف)
      </p>
    </div>
  );
}

export default Checklist0_100Page;