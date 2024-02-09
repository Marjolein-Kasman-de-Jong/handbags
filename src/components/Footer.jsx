import Tile from "./Tile";
import brand from '../assets/brand.png';
import our_story from '../assets/our_story.png';

function Footer() {
    return (
        <footer>
            <Tile title="the brand" img="">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt laudantium quod facilis rerum id, laboriosam porro rem error aperiam praesentium ab beatae harum nemo, molestias eos at necessitatibus commodi cupiditate?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis minima ea earum, delectus beatae a dolores repellat aliquid, doloribus repudiandae magnam quos unde reprehenderit incidunt doloremque at est perferendis! Labore?</p>
            </Tile>
            <Tile title="" img={brand} />
            <Tile title="" img={our_story} />
            <Tile title="our story" img="">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ab, voluptatum mollitia ipsum ipsam consectetur nesciunt cupiditate facilis et eum sunt tempora aliquam, fugit incidunt numquam, minus architecto quas necessitatibus!</p>
            </Tile>
        </footer>
    );
}

export default Footer;