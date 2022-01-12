import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {QueryClientProvider, QueryClient} from 'react-query'
import { NewLink } from './newlink';
import { Home } from './home';
import { Secret } from './secrets';


const queryClient = new QueryClient({
  retry: 0
})
function App() {
  return (
    <QueryClientProvider client={queryClient}>
       <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/secrets/:id" element={<NewLink/>}/>
          <Route path="/private/:id" element={<Secret/>}/> 
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
