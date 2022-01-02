import logo from './logo.svg';
import './App.css';
import { Text } from "@sssaini/ecommerce-demo.ui.text"
import { NumberInput } from "@sssaini/ecommerce-demo.ui.number-input"
import { Select } from "@sssaini/ecommerce-demo.ui.select"
import { Button } from "@sssaini/ecommerce-demo.ui.button"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


function App() {
  return (
    <div className="App">
      <Text text="H & M" type="d3" align="center"></Text>
      <div className="container">
        <div className="gallery">
          <div style={{ width: "50%", height: "100%", flex: "50%", backgroundImage: `url(https://lp2.hm.com/hmgoepprod?set=source[/0d/7c/0d7c253f8fe6e40c3f579947ec7b4a23c2a659c2.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main])`, backgroundSize: "cover" }}>

          </div>

          <div style={{ width: "50%", height: "100%", flex: "50%", backgroundImage: `url(https://lp2.hm.com/hmgoepprod?set=source[/0d/7c/0d7c253f8fe6e40c3f579947ec7b4a23c2a659c2.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main])`, backgroundSize: "cover" }}>

          </div>         <div style={{ width: "50%", height: "100%", flex: "50%", backgroundImage: `url(https://lp2.hm.com/hmgoepprod?set=source[/0d/7c/0d7c253f8fe6e40c3f579947ec7b4a23c2a659c2.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main])`, backgroundSize: "cover" }}>

          </div>

        </div>

        <div style={{ padding: "4rem", flex: 1, display: "flex", alignItems: "center", width: "33vw" }}>
          <div>
            <Text text="Nike Air Zoom Pegasus 36 Premium Rise" type="d3"></Text>
            <div>
              <Text text="Light Blue - 5575/498" type="l2"></Text>
              <Text text=" Five-pocket skinny jeans with metal zip fly and top button fastening.Five-pocket skinny jeans with metal zip fly and top button fastening.Five-pocket skinny jeans with metal zip fly and top button fastening.Five-pocket skinny jeans with metal zip fly and top button fastening.Five-pocket skinny jeans with metal zip fly and top button fastening." type="p2"></Text>

            </div>

            <div style={{ display: "flex" }}>
              <NumberInput defaultValue={4} label="Quantity" />
              <div style={{ marginLeft: "2rem" }} >
                <Select defaultValue={4} label="Size" />
              </div>
            </div>

            <Text text="Height of model: 189 cm. / 6′ 2″ Size L" type="p4"></Text>
            <br />
            <div style={{ display: "flex", alignItems: "center" }}>
              <div><Text text="$25.00" type="d3"></Text>
              </div>
              <div style={{ marginLeft: "2rem" }} >
                <Button text="Add To Cart" icon={<ShoppingCartIcon />} />
              </div>
              <div style={{ marginLeft: "2rem" }} >
                <Button icon={<ShoppingCartIcon />} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
