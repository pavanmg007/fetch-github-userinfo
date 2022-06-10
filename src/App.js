import DetailCard from "./components/DetailCard";
import SearchBar from "./components/SearchBar";
import { useUserContext } from "./userContext";
function App() {
const{userData}=useUserContext()
  return (
      <div className="p-2">
      <SearchBar />
      {userData.name ? <DetailCard/> : null}
      </div>

  );
}
export default App;
