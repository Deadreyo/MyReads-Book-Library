import { useContext, useRef } from "react"
import { ChangeBookShelfContext } from "./App"

export default function Book({ book }) {

    const changeBookShelf = useContext(ChangeBookShelfContext)

    const { shelf, imageLinks, title, authors } = book
    const selectRef = useRef(null)

    function handleShelfChange() {
        const shelfValue = selectRef.current.value
        changeBookShelf(book, shelfValue)
    }

    return (
        <div className="book">
            <div className="book-top">
            <div
                className="book-cover"
                style={{
                width: 128,
                height: 193,
                backgroundImage:
                    `url('${imageLinks && (imageLinks.thumbnail || imageLinks.smallThumbnail)}')`
                }}
            ></div>
            <div className="book-shelf-changer">
                <select ref={selectRef} defaultValue={shelf? shelf : "none"} onChange={handleShelfChange}>
                    <option disabled>
                        Move to...
                    </option>
                    <option value="currentlyReading">
                        Currently Reading
                    </option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors && authors[0]}</div>
        </div>
    )
}