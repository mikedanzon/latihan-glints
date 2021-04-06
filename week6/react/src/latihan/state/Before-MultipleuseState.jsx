import './index.css'

function MultipleStateBefore() {
  return (
    // declare state lebih dari satu
    <div>
      {/* Merubah angka di h2 */}
      <h1>Coffee Maker</h1>
      <span aria-hidden>☕</span>
      <h2>Water : 0 oz</h2>
      <button>Event button Tambah air</button>
      <h2>Coffee : 0 gr</h2>
      <button>Event button Tambah Kopi</button>
    </div>
  );
}

export default MultipleStateBefore

