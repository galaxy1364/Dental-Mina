import './App.css'

function Tile(props: { title: string; subtitle: string; accent: string }) {
  const { title, subtitle, accent } = props
  return (
    <div className='rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-sm p-4 active:scale-[0.99] transition'>
      <div className={'text-sm font-semibold ' + accent}>{title}</div>
      <div className='text-xs text-white/70 mt-1'>{subtitle}</div>
    </div>
  )
}

export default function App() {
  return (
    <div dir='rtl' className='min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white'>
      <header className='sticky top-0 z-10 border-b border-white/10 bg-white/5 backdrop-blur-2xl'>
        <div className='max-w-md mx-auto px-4 py-4'>
          <div className='text-lg font-bold text-emerald-300'>Dental-Mina</div>
          <div className='text-xs text-white/70 mt-1'>Ø¯Ù…Ø³Ø¨ÙˆØ±Ø¯ - UI Foundation (Liquid Glass)</div>
        </div>
      </header>

      <main className='max-w-md mx-auto px-4 py-5 space-y-4'>
        <div className='grid grid-cols-2 gap-3'>
          <Tile title='Ù†ÙˆØ¨ØªØ£Ø¯Ù…)áˆˆÝX]OIö+¶,v)ö,vaö)È6iöav,vb6,ˆ
È6*¶`¶b6b¶aIÈXØÙ[IÝ^Y[Y\˜[LÌ	ÈÏ‚ˆ[H]OIöav)öa7)‰ÈÝX]OIöcç6,v)ö+¶*¶b´&vcÈ
È9«,v)ö+¶b6`v+vcÉÈXØÙ[IÝ^]X[LÌ	ÈÏ‚ˆ[H]OIö*6)¶)ö,v)öa‰ÈÝX]OIö/ž,vb6a¶+öaö)ö 
È6+6,v+v+ÉÈXØÙ[IÝ^\ÚÞKLÌ	ÈÏ‚ˆ[H]OIöa6)ö*6,v)ö*6)öb6,IÈÝX]OIö)ö,vlö)ö`Kö+ö,vc6)ö`‰ÈXØÙ[IÝ^Z[™YÛËLÌ	ÈÏ‚ˆÙ]‚‚ˆ]ˆÛ\ÜÓ˜[YOIÜ›Ý[™YLž›Ü™\ˆ›Ü™\‹]Ú]KÌL™Ë]Ú]KÍH˜XÚÙ›ÜX›\‹^M	Ï‚ˆ]ˆÛ\ÜÓ˜[YOIÝ^\ÛH›Û\Ù[ZX›Û^]Ú]IÏ¶b6h¶.v*6*¶b6)öa6)öa³ÂöF—cà¢ÆF—b6Æ74æÖSÒwFW‡B×‡2FW‡B×v†—FRós×BÓ"síŠ}˜]Šý˜‹˜‚‹-‹MŠ}˜m˜rˆ‚‹]Š}˜=‰òŠÍŠÍ‹Š}ŠòŠý˜]‹-Šò˜Š}‹ŠòŠý˜-Š}˜-˜m˜r‹½Š­˜-˜˜­˜R˜M‹-Š}˜˜rˆ-Šý˜MŠ}˜2˜]Š}‹Šò˜mŠ­˜ŠòãÂöF—cà¢ÂöF—cà¢ÂöÖ–ãà ¢Ææb6Æ74æÖSÒvf—†VB&÷GFöÒÓÆVgBÓ&–v‡BÓ&÷&FW"×B&÷&FW"×v†—FRó&r×v†—FRóR&6¶G&÷Ö&ÇW"Ó'†Âsà¢ÆF—b6Æ74æÖSÒvÖ‚×rÖÖB×‚ÖWFò‚ÓB’Ó2w&–Bw&–BÖ6öÇ2ÓBFW‡B×‡2FW‡B×v†—FRóƒsà¢ÆF—b6Æ74æÖSÒwFW‡BÖ6VçFW"síŠíŠ}˜m˜sÂöF—cà¢ÆF—b6Æ74æÖSÒwFW‡BÖ6VçFW"sí˜m˜ŠŠ­ˆÃÀ½‘¥Øø(€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ôÑ•áÐµ•¹Ñ•Èœûb£bÇb·b¼¸ð½‘¥Øø(€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ôÑ•áÐµ•¹Ñ•ÈœûbŸfb¿f#bÇf ð/div>
        </div>
      </nav>

      <div className='h-16' />
    </div>
  )
}
