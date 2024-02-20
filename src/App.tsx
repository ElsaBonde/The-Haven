import Header from "./Header";

function App() {
  return (
    <div>
      <Header />
      <main>
        {/* <Outlet /> */}
        {/* ska generera innehållet i main-ytan på alla sidor förutom när navbar är utfälld samt headern */}
      </main>
    </div>
  );
}

export default App;
