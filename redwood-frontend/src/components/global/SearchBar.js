
function SearchBar(){
    return(
        <section className="search_section">
            <div className="search_bar">
                <img src="../icons/loupe.svg" alt="lupa"/>
                <input type="text" name="search_input" placeholder="Szukaj..."/>
            </div>
        </section>
    );
}

export default SearchBar;