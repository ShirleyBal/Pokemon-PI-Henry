import style from "./paginate.module.css"

export default function Paginate ({ pokemonsPage, totalPages, paginado, allPokemons ,setCurrentPage, currentPage}) {
    const pageNumbers =  [];
    //paginacion dinamica, redondeo

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
    //Actualizar la pagina y siguiente y anterios
    const onNextPage= () => {
      setCurrentPage(currentPage +1)
    }
    const onPreviusPage = () => {
        setCurrentPage(currentPage -1)
    }
    

        return (
          <div className={style.Paginate}>
            <button onClick={onPreviusPage} disabled={currentPage === 1}>Last</button>
            <div>
            {
                pageNumbers.map(number => (
                    <button key={number}>
                        <a className={style.cont} onClick={() => paginado(number)}>
                            {number}
                        </a>
                    </button>
                )) 
            }
            </div>
            <button onClick={onNextPage} disabled={pageNumbers[pageNumbers.length-1]===currentPage}>Next</button>
          </div>
        );
}
      