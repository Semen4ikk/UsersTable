import React from 'react';
import style from './notFoundPage.module.css';

export default function NotFoundPage() {
    function random(x, y) {
        return x + Math.random() * (y - x);
    }

    const stars = [];
    for (let i = 0; i < 100; i++) {
        stars.push(
            <div
                key={i}
                className={style.star}
                style={{
                    top: `${random(0, 100)}%`,
                    left: `${random(0, 100)}%`,
                }}
            />
        );
    }

    return (
        <div className={style.notFound}>
            {stars}
            <h1 className={style.errorMassage}>404 Такой страницы нет(</h1>
        </div>
    );
}