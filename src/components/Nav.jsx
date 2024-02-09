import Button from './Button';

function Nav() {
    return (
        <nav>
            <Button disabled={false}>to the collection</Button>
            <Button disabled={false}>shop all bags</Button>
            <Button disabled={true}>pre-orders</Button>
        </nav>
    );
}

export default Nav;