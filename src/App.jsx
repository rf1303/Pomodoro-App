import ClockTime from "./ClockTime.jsx";
import HeaderOptions from './header.jsx';
import { SetOptions } from './SetOptions.jsx';

function App() {

    return (
        <SetOptions>
            <main className="grid items-center justify-items-center gap-12 mt-8 md:mt-20 xl:mt-12 md:gap-27 xl:gap-9">
                <HeaderOptions />
                <ClockTime />
            </main>
        </SetOptions>
    );
}
export default App


