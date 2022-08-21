const Contacto = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://placeimg.com/260/400/arch"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="imagen de contacto"
          />
          <div>
            <h1 className="text-5xl font-bold">Todo acerca de nosotros!</h1>
            <p className="py-6">
              Somos una tienda de tecnología especializada en la venta de
              computadores y celulares.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contacto;
