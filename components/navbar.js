function navbar() {
  return `
    <div id="nav">
        <div>
             <a href="./index.html"><img src="https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27&2"
              alt=""></a>
            <select name="navOption" id="navOption">
                <option value="stays"><a href="./index.html"> Stays</a></option>
                <option value="flights"><a href="./flights.html">Flights</a></option>
                <option value="cars"><a href="./cars.html">Cars</a></option>
                <option value="Packages"><a href="./package.html">Packages</a></option>
                <option value="things">Things to do</option>
            </select>
        </div>
        <div></div>
        <div id="navSide">
            <div id = "languageChange"><i style="font-size:18px" class="fa">&#xf0ac;</i> English</div>
            <div> <a href="https://www.expedia.co.in/service/">Support</a></div>
            <div> <a href=""> Trips</a></div>
            <div id = "login">
              <a href="./login.html">Login</a>
            </div>
        </div>
    </div>`;
}

export default navbar;
