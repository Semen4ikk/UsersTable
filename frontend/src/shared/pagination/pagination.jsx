import style from './pagination.module.css';

export const Pagination = ({ currentPage, totalPages, onPageChange, disabled = false }) => {
    const handlePrevious = () => {
        if (currentPage > 1 && !disabled) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages && !disabled) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className={style.pagination}>
            <button
                onClick={handlePrevious}
                disabled={disabled || currentPage === 1}
                aria-label="Предыдущая страница"
            >
                Предыдущая
            </button>

            <span>
        Страница {currentPage} из {totalPages}
      </span>

            <button
                onClick={handleNext}
                disabled={disabled || currentPage === totalPages}
                aria-label="Следующая страница"
            >
                Следующая
            </button>
        </div>
    );
};
