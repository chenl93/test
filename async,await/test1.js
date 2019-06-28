// async/await
async getBooksByAuthorWithAwait(authorId) {
  const books = await bookModel.fetchAll();
  return books.filter(b => b.authorId === authorId);
}
// promise
getBooksByAuthorWithPromise(authorId) {
  return bookModel.fetchAll()
    .then(books => books.filter(b => b.authorId === authorId));
}