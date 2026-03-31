import AccountFields from "./components/AccountFields";
import BackButton from "./components/BackButton";
import Birthday from "./components/Birthday";
import Header from "./components/Header";
import NameFields from "./components/NameFields";
import Submit from "./components/Submit";
import Terms from "./components/Terms";

export default function App (){
return(
<>
<Header/>
<NameFields/>
<AccountFields/>
<Birthday/>
<Terms/>
<Submit/>
<BackButton/>
</>
);
}