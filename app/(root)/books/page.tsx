async function Page() {
  const response = await fetch("http://localhost:3000/api/books");
  const books = await response.json();

  return (
    <div>
      <h2 className="text-3xl font-bold  mb-8 text-center">My DataBase</h2>
      <code>{JSON.stringify(books, null, 2)}</code>
    </div>
  );
}

export default Page;
