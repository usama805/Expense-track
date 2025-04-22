import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

const Transcation1 = ({ transcation }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transcation.amount < 0 ? "-" : "+";

    return (
        <>
            <li className={transcation.amount < 0 ? "minus" : "plus"}>
                {transcation.text}{" "}
                <span>
                    {sign} ${Math.abs(transcation.amount)}
                </span>{" "}
                <button
                    onClick={() => deleteTransaction(transcation.id)}
                    className="delete-btn"
                >
                    X
                </button>
            </li>
        </>
    );
};

export default Transcation1;