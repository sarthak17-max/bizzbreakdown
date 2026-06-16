export default function Hero() {
  return (
    <section className="flex items-center justify-between">
      <div className="flex-1 pr-2">
        <h2 className="text-base md:text-3xl font-extrabold leading-tight text-gray-900" style={{ fontFamily: 'Sora, sans-serif' }}>
          Understand Any Business in{' '}
          <span className="text-purple-600">5 Minutes</span>
        </h2>
        <p className="text-gray-500 text-[10px] md:text-sm mt-1 md:mt-3">
          Clear insights. Smart comparisons. Better decisions.
        </p>
      </div>
      <div className="text-3xl md:text-6xl select-none">📊</div>
    </section>
  );
}