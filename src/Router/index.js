import {
    useRoutes,
} from 'react-router-dom';
import DesktopHome from './Pages/desktop/Home';
import MobileHome from './Pages/mobile/Home';

function Router() {
    const routes = useRoutes([
        { path: '/desktop/home', element: <DesktopHome /> },   
        { path: '/mobile/home', element: <MobileHome /> },     
        ]);
    return routes;
}
export default Router;  