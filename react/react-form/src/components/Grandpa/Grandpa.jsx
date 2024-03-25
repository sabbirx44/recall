import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'

export const AssetContext = createContext('gold');
export const MoneyContext = createContext(1000);

const Grandpa = () => {
    const asset = 'Ring';
    const [money, setMoney] = useState(1000);

    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <p>Net Money: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value="gold">
                    <section className="flex">
                        <Dad asset={asset} />
                        <Uncle asset={asset} />
                        <Aunty />
                    </section>
                </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;

/**
 * 1. Create a context and export.
 * 2. Add provider for the context with a value (anything).
 * 3. useContext to access value in the context API.
*/