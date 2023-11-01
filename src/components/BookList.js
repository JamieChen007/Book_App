import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBook, fetchBooks } from "../redux/bookSlice";

const BookList = (props) => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      <h3>Books </h3>
      {books && books.length > 0 ? (
        <ul>
          {books.map((book, i) => (
            <li key={`${i}-${book.id}`}>
              {book.title}-{book.description}
              <button
                onClick={() => {
                  dispatch(deleteBook({ id: book.id }));
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default BookList;
