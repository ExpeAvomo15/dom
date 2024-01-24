

        var cadena = "Rincón de la Victoria";
        //longitud de la cadena
        document.writeln(cadena.length);
        //fragmento de cadena
        document.writeln("<br>");
        document.writeln(cadena.substring(0,10));
        //devuelve un caracter
        document.writeln("<br>" + cadena.charAt(5));
        //concatenar 2 cadenas
        var cadena2 = "Málaga y Torremolinos";
        document.writeln("<br>" + cadena.concat(cadena2));
        //indexOf
        document.writeln("<br>" + cadena.indexOf("Rincón", 0));
        //Replace
        document.writeln("<br>"+ cadena.replace("Rincón", "Expe"));
        //To uper case
        document.writeln("<br>"+ cadena.toLocaleUpperCase());
        //split
        document.writeln("<br>"+ cadena.split("a"));
        //ToLowerCase
        

