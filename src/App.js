import "./index.css";
import { useSpring, animated } from "react-spring";

function App() {
    const [props, set] = useSpring(() => ({
        transform: "rotate(0deg)",
        config: { mass: 1, tension: 400, friction: 18 },
    }));

    const handleMouseEnter = () => {
        set({ transform: "rotate(180deg)" });
    };

    return (
        <div className='bg-cream h-screen'>
            <header className='text-left  border-b-0 w-[80%] ml-[10%]'>
                <div
                    className='inline-block'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={() => set({ transform: "rotate(0deg)" })}
                >
                    <animated.div
                        className='font-logo text-headerBlack p-8 text-6xl lg:text-8xl'
                        style={props}
                    >
                        <div>RB</div>
                    </animated.div>
                </div>
            </header>
        </div>
    );
}

export default App;
