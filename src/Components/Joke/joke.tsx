import './joke.scss';

interface JokeProps {
    setup: string;
    punchline: string;
}

const Joke: React.FC<JokeProps> = ({ setup, punchline }) => {
    return (
        <div className="joke">
            <div className="joke__body">
            <p className="joke__body__setup">{setup}</p>
            <p className="joke__body__punchline">{`>> ${punchline}`}</p>
            </div>
        </div>
    )
}

export default Joke;