let inputs = document.querySelector("input");
let button = document.querySelector("button");
let todolist = document.querySelector(".todoLists");
let Segments = " ";

button.addEventListener("click", () => {
  let value = inputs.value;
  console.log(value);

  Segments = document.createElement("div");
  Segments.innerHTML = `<header
        class="w-[40vw] h-20 bg-white/40 backdrop-blur-sm pe-5 rounded-md flex items-center  shadow-md  mx-auto mt-20"
      >
        <div
          class="bg-white w-[80%] m-5 h-10 rounded-md p-2 border-b-1 border-stone-400"
        > ${value}</div>
        <button
          class="bg-blue-700 rounded-md p-2 px-6 cursor-pointer text-white font-sans cursor-pointer"
          onclick="removeField(this)"
        >
          <i class="fa-solid fa-trash-can align-middle"></i>
        </button>
      </header>
  `;
  todolist.appendChild(Segments);
});

function removeField(el) {
  const item = el.closest("div");
  if (item) item.remove();
}
