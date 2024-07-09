import './nav.css';

function Nav() {

 return(
    <div>
    <nav id="navbar">
        <ul class="menu">
            <li id="logo" title="Made by Johnny Stiwerson">
                <p>Custom Logo</p>
            </li>
            <li id="trigram" tabindex="-1" title="CLICK ME!&#10I WORK WITHOUT JS :)">
                <div>&#9776</div>				
            </li>
            <span id="responsive-menu">
                <ul class="menu">
                    <li class="menu-option">
                        <p>Home</p>
                    </li>
                    <li class="menu-option">
          <p>Products <strong>v</strong></p>
                        <ul id="products">
                            <li>Softwares</li>
                            <li>Hardwares</li>
                            <li>Others</li>
                        </ul>
                    </li>
                    <li class="menu-option">
                        <p>About us</p>
                    </li>
                    <li class="menu-option">
                        <p>Suport</p>
                    </li>
                    <li id="sign-in">
                        <p>Sign in</p>
                    </li>
                    <li id="sign-up">
                        <p>Sign up</p>
                    </li>
                </ul>
            </span>
        </ul>
    </nav>
</div>

 )



  
}

export default Nav;
