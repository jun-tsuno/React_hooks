import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Header from "./components/Header";
import { toBeInTheDOM } from "@testing-library/jest-dom/dist/matchers";
import Rout from "./components/Rout";

const items = [
    {
        title: 'What is React?',
        content: 'React is a front-end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers!'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components!'
    },
];

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    }
];

const App = () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            <Header />
            <Rout path="/">
                <Accordion items={items} />
            </Rout>
            <Rout path="/list">
                <Search />
            </Rout>
            <Rout path="/dropdown">
                <Dropdown
                    label="Select a color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Rout>
            <Rout path="/translate">
                <Translate />
            </Rout>
        </div>
    );
};

export default App;
