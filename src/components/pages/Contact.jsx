const Contact = () => {
    return (
      <div className="p-10 text-center">
        <h2 className="text-3xl font-bold">Susisiekime</h2>
        <p className="text-lg text-gray-600 mt-2">Parašyk man žinutę arba susisiek per socialinius tinklus!</p>
  
        <form className="mt-6 max-w-lg mx-auto">
          <input type="text" placeholder="Vardas" className="w-full p-2 border rounded mb-3" />
          <input type="email" placeholder="El. paštas" className="w-full p-2 border rounded mb-3" />
          <textarea placeholder="Žinutė" className="w-full p-2 border rounded mb-3 h-32"></textarea>
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Siųsti</button>
        </form>
  
        <div className="mt-6">
          <a href="https://linkedin.com" className="text-blue-500 hover:underline mx-2">LinkedIn</a>
          <a href="https://github.com" className="text-blue-500 hover:underline mx-2">GitHub</a>
        </div>
      </div>
    );
  };
  
  export default Contact;
  