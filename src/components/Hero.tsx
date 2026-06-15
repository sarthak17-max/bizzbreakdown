export default function Hero() {
  return (
    <section className="flex items-center justify-between">
      <div className="flex-1 pr-2">
        <h2 className="text-base font-extrabold leading-tight text-gray-900" style={{ fontFamily: 'Sora, sans-serif' }}>
          Understand Any Business in{' '}
          <span className="text-purple-600">5 Minutes</span>
        </h2>
        <p className="text-gray-500 text-[10px] mt-1">
          Clear insights. Smart comparisons. Better decisions.
        </p>
      </div>
      <div className="text-3xl select-none">📊</div>
    </section>
  );
}