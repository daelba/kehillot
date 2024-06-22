var zdroje = "<p><b>Osobní data:</b> Státní okresní archiv Přerov, f. Okresní úřad Hranice, sčítací operáty z let 1857 (inv. č. 2160–2161), 1869 (inv. č. 2239–2240), 1880 (inv. č. 2319–2320), 1890 (inv. č. 2403–2404), 1900 (inv. č. 2487), 1910 (inv. č. 2517) a 1921 (inv. č. 2662).</p><p><b>Mapové podklady:</b> Moravský zemský archiv, f. Stabilní katastr – skici [D 9], sign. 808; Ústav archivu zeměměřičství a katastru, Stabilní katastr, jeho obnova a údržba, sign. B2/a/14MS, inv. č. 899.</p>";
var operaty = [
	{
		rok: "1857",
		ofic: "602",
		dohlA: "512",
		dohlR: "80.0"
	},
	{
		rok: "1869",
		ofic: "582",
		dohlA: "505",
		dohlR: "86.8"
	},
	{
		rok: "1880",
		ofic: "522",
		dohlA: "501",
		dohlR: "95.9"
	},
	{
		rok: "1890",
		ofic: "487",
		dohlA: "484",
		dohlR: "99.3"
	},
	{
		rok: "1900",
		ofic: "462",
		dohlA: "420",
		dohlR: "90.9"
	},
	{
		rok: "1910",
		ofic: "356",
		dohlA: "348",
		dohlR: "97.7"
	},
	{
		rok: "1921",
		ofic: "276",
		dohlA: "276",
		dohlR: "100.0"
	},
	{
		rok: "1930",
		ofic: "192",
		dohlA: "0",
		dohlR: "0"
	},
];
var maxPocet = 70;
var obyv = [
	{
		rok: "1857",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "I",
		pocet: "18",
		obyv: [
			{ jm: "Simon Gabriel Stross", arch: "Simon Stross (1811)", q: "" },
			{ jm: "Louise Stross", arch: "Louise Stross (1827)", q: "" },
			{ jm: "Rosara Stross", arch: "Rosa Hoffenreich (1857–1927)", q: "" },
			{ jm: "Gabriel Steiner", arch: "Gabriel Steiner (1793)", q: "" },
			{ jm: "Sara Steiner", arch: "Sara Steiner (1801–1871)", q: "" },
			{ jm: "Juda Steiner", arch: "Juda Steiner (1838)", q: "" },
			{ jm: "Benjamin Steiner", arch: "Benjamin Steiner (1840)", q: "" },
			{ jm: "Josefa Tauber", arch: "Josefa Tauber (1809)", q: "" },
			{ jm: "Hanny Tauber", arch: "Hanny Tauber (1837)", q: "" },
			{ jm: "Katharina Tauber", arch: "Katti Tauber (1838)", q: "" },
			{ jm: "Lea Tauber", arch: "Lea Tauber (1845)", q: "" },
			{ jm: "Saly Tauber", arch: "Saly Tauber (1842–1920)", q: "" },
			{ jm: "Reitzel Grünfeld", arch: "Reitzel Grünfeld (1841)", q: "" },
			{ jm: "Rebeka Tauber", arch: "Rebeka Tauber (1788–1866)", q: "" },
			{ jm: "Simon Baron", arch: "Simon Baron (1806)", q: "" },
			{ jm: "Sara Baron", arch: "Sara Baron (1812)", q: "" },
			{ jm: "Ernestine Baron", arch: "Ernestine Adler (1842)", q: "" },
			{ jm: "Josef Stern", arch: "Josef Stern (xxx4)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "I",
		pocet: "13",
		obyv: [
			{ jm: "Simon Stross", arch: "Simon Stross (1811)", q: "" },
			{ jm: "Luise Stross", arch: "Louise Stross (1827)", q: "" },
			{ jm: "Gustav Stross", arch: "Gustav Stross (1859–1923)", q: "" },
			{ jm: "Rosa Stross", arch: "Rosa Hoffenreich (1857–1927)", q: "" },
			{ jm: "Regina Stross", arch: "Regina Stross (1861)", q: "" },
			{ jm: "Sara Steiner", arch: "Sara Steiner (1801–1871)", q: "" },
			{ jm: "Juda Steiner", arch: "Juda Steiner (1838)", q: "" },
			{ jm: "Josefa Tauber", arch: "Josefa Tauber (1809)", q: "" },
			{ jm: "Michael Tauber", arch: "Michael Tauber (1840)", q: "" },
			{ jm: "Sali Tauber", arch: "Saly Tauber (1842–1920)", q: "" },
			{ jm: "Simon Baron", arch: "Simon Baron (1806)", q: "" },
			{ jm: "Moses Wolf Adler", arch: "Moises Wolf Adler (1840)", q: "" },
			{ jm: "Ernestine Adler", arch: "Ernestine Adler (1842)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "I",
		pocet: "13",
		obyv: [
			{ jm: "Simon Stross", arch: "Simon Stross (1811)", q: "" },
			{ jm: "Louise Stross", arch: "Louise Stross (1827)", q: "" },
			{ jm: "Gustav Stross", arch: "Gustav Stross (1859–1923)", q: "" },
			{ jm: "Juda Steiner", arch: "Juda Steiner (1838)", q: "" },
			{ jm: "Max Mayer", arch: "Max Mayer (1872)", q: "" },
			{ jm: "Sali Tauber", arch: "Saly Tauber (1842–1920)", q: "" },
			{ jm: "Fanny Muller", arch: "Fanny Müller (1843–1928)", q: "" },
			{ jm: "Adolf Müller", arch: "Adolf Müller (1854–1924)", q: "" },
			{ jm: "Johanna Müller", arch: "Johanna Müller (1850–1920)", q: "" },
			{ jm: "Sigfried Müller", arch: "Siegfried Müller (1878)", q: "" },
			{ jm: "Max Müller", arch: "Max Müller (1880)", q: "Q105651102" },
			{ jm: "Carl Müller", arch: "Karl Müller (1884)", q: "" },
			{ jm: "Fanny Müller", arch: "Fanny Müller (1889)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "I",
		pocet: "10",
		obyv: [
			{ jm: "Luisi Stross", arch: "Louise Stross (1827)", q: "" },
			{ jm: "Adele Hoffenreich", arch: "Adele Biro (1884–1939)", q: "" },
			{ jm: "Rosalie Tauber", arch: "Saly Tauber (1842–1920)", q: "" },
			{ jm: "Francisca Müller", arch: "Fanny Müller (1843–1928)", q: "" },
			{ jm: "Sigmund Rindl", arch: "Sigmund Rindl (1858–1920)", q: "" },
			{ jm: "Emilie Rindl", arch: "Emilie Rindl (1861–1924)", q: "" },
			{ jm: "Auguste Rindl", arch: "Auguste Rindl (1889)", q: "" },
			{ jm: "Helene Rindl", arch: "Helene Taussik (1890)", q: "Q105614637" },
			{ jm: "Josef Rindl", arch: "Josef Rindl (1897)", q: "" },
			{ jm: "Bertha Rindl", arch: "Bertha Liebermann (1896)", q: "Q105556842" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "I",
		pocet: "5",
		obyv: [
			{ jm: "Rosa Hoffenreich", arch: "Rosa Hoffenreich (1857–1927)", q: "" },
			{ jm: "Adele Hoffenreich", arch: "Adele Biro (1884–1939)", q: "" },
			{ jm: "Stefanie Hoffenreich", arch: "Stefanie Hoffenreich (1893)", q: "Q104809756" },
			{ jm: "Rosalia Tauber", arch: "Saly Tauber (1842–1920)", q: "" },
			{ jm: "Fanni Müller", arch: "Fanny Müller (1843–1928)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "II",
		pocet: "25",
		obyv: [
			{ jm: "Marie Kafka", arch: "Marie Kafka (1795)", q: "" },
			{ jm: "Anna Kafka", arch: "Anna Kafka (1816)", q: "" },
			{ jm: "Susana Rosenberg", arch: "Susana Rosenberg (1837)", q: "" },
			{ jm: "Isak Beck", arch: "Ignaz Beck (1848–1923)", q: "" },
			{ jm: "Filipp Stross", arch: "Filipp Stross (1817)", q: "" },
			{ jm: "Ernestine Stross", arch: "Ernestine Stross (1820)", q: "" },
			{ jm: "Sigmund Stross", arch: "Sigmund Stross (1836)", q: "" },
			{ jm: "Moises Stross", arch: "Moises Stross (1848)", q: "" },
			{ jm: "Theresia Stross", arch: "Theresia Stross (1844)", q: "" },
			{ jm: "Rosalia Stross", arch: "Rosalia Stross (1852)", q: "" },
			{ jm: "Jakob Meitner", arch: "Jakob Meitner (1811)", q: "" },
			{ jm: "Leni Meitner", arch: "Leni Meitner (1830)", q: "" },
			{ jm: "Aron Stross", arch: "Aron Stross (1780)", q: "" },
			{ jm: "Susana Stross", arch: "Susana Stross (1789)", q: "" },
			{ jm: "Samuel Fischer", arch: "Samuel Fischer (1823)", q: "" },
			{ jm: "Ester Fischer", arch: "Netti Fischer (1825)", q: "" },
			{ jm: "Moises Brauchbar", arch: "Moises Brauchbar (1804–1890)", q: "" },
			{ jm: "Babette Brauchbar", arch: "Babette Brauchbar (1804)", q: "" },
			{ jm: "Israel Brauchbar", arch: "Israel Brauchbar (1825)", q: "" },
			{ jm: "Jakob Brauchbar", arch: "Jakob Brauchbar (1835)", q: "" },
			{ jm: "Wilhelm Brauchbar", arch: "Wilhelm Brauchbar (1841)", q: "" },
			{ jm: "Friedrich Brauchbar", arch: "Friedrich Brauchbar (1843)", q: "" },
			{ jm: "Rosa Brauchbar", arch: "Rosa Brauchbar (1837)", q: "" },
			{ jm: "Leni Brauchbar", arch: "Lina Held (1839)", q: "" },
			{ jm: "Fanni Tauska", arch: "Fanni Tauska (1821)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "II",
		pocet: "21",
		obyv: [
			{ jm: "Salomon Schlesinger", arch: "Salomon Schlesinger (1836–1912)", q: "" },
			{ jm: "Hanni Schlesinger", arch: "Hani Schlesinger (1859)", q: "" },
			{ jm: "Ernestine Schlesinger", arch: "Ernestine Schlesinger (1859)", q: "" },
			{ jm: "Mini Schlesinger", arch: "Hermine Morgenstern (1861)", q: "" },
			{ jm: "Fanni Schlesinger", arch: "Fanny Fischel (1862–1925)", q: "" },
			{ jm: "Gustav Schlesinger", arch: "Gustav Schlesinger (1866)", q: "Q105598403" },
			{ jm: "Ignaz Schlesinger", arch: "Adolf Schlesinger (1868–1931)", q: "" },
			{ jm: "Karl Fischer", arch: "Karl Fischer (1821)", q: "" },
			{ jm: "Babette Fischer", arch: "Betti Fischer (1818)", q: "" },
			{ jm: "Cäcilie Fischer", arch: "Cecilie Fischer (1858)", q: "" },
			{ jm: "Ignatz Schlesinger", arch: "Ignatz Schlesinger (1846)", q: "" },
			{ jm: "Moritz Stross", arch: "Moises Stross (1848)", q: "" },
			{ jm: "Samuel Fischer", arch: "Samuel Fischer (1823)", q: "" },
			{ jm: "Netti Fischer", arch: "Netti Fischer (1825)", q: "" },
			{ jm: "Antonie Fischer", arch: "Antonie Beck (1859)", q: "Q104221038" },
			{ jm: "Isak Bäck", arch: "Ignaz Beck (1848–1923)", q: "" },
			{ jm: "Isak Kohn", arch: "Isak Kohn (1832)", q: "" },
			{ jm: "Pepi Kohn", arch: "Pepi Kohn (1839)", q: "" },
			{ jm: "Antonie Kohn", arch: "Antonie Kohn (1866)", q: "" },
			{ jm: "Isidor Kohn", arch: "Isidor Kohn (1868)", q: "" },
			{ jm: "Debora Bäck", arch: "Debora Bäck (1787)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "II",
		pocet: "14",
		obyv: [
			{ jm: "Salomon Schlesinger", arch: "Salomon Schlesinger (1836–1912)", q: "" },
			{ jm: "Betti Schlesinger", arch: "Betti Schlesinger (1851)", q: "" },
			{ jm: "Gustav Schlesinger", arch: "Gustav Schlesinger (1866)", q: "Q105598403" },
			{ jm: "Ignaz Schlesinger", arch: "Adolf Schlesinger (1868–1931)", q: "" },
			{ jm: "Felix Schlesinger", arch: "Felix Schlesinger (1870)", q: "Q105598381" },
			{ jm: "Hermine Schlesinger", arch: "Hermine Morgenstern (1861)", q: "" },
			{ jm: "Fani Schlesinger", arch: "Fanny Fischel (1862–1925)", q: "" },
			{ jm: "Ernestine Berger", arch: "Ernestine Berger (1859)", q: "" },
			{ jm: "Netti Fischer", arch: "Netti Fischer (1825)", q: "" },
			{ jm: "Antonie Fischer", arch: "Antonie Beck (1859)", q: "Q104221038" },
			{ jm: "Ignaz Beck", arch: "Ignaz Beck (1848–1923)", q: "" },
			{ jm: "Karl Fischer", arch: "Karl Fischer (1821)", q: "" },
			{ jm: "Betti Fischer", arch: "Betti Fischer (1818)", q: "" },
			{ jm: "Cecilie Fischer", arch: "Cecilie Fischer (1858)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "II",
		pocet: "16",
		obyv: [
			{ jm: "Salomon Schlesinger", arch: "Salomon Schlesinger (1836–1912)", q: "" },
			{ jm: "Betti Schlesinger", arch: "Betti Schlesinger (1851)", q: "" },
			{ jm: "Gustav Schlesinger", arch: "Gustav Schlesinger (1866)", q: "Q105598403" },
			{ jm: "Adolf Schlesinger", arch: "Adolf Schlesinger (1868–1931)", q: "" },
			{ jm: "Felix Schlesinger", arch: "Felix Schlesinger (1870)", q: "Q105598381" },
			{ jm: "Gustav Schlesinger", arch: "Gustav Schlesinger (1879)", q: "" },
			{ jm: "Antonie Fischer", arch: "Antonie Beck (1859)", q: "Q104221038" },
			{ jm: "Netti Fischer", arch: "Netti Fischer (1825)", q: "" },
			{ jm: "Ignaz Beck", arch: "Ignaz Beck (1848–1923)", q: "" },
			{ jm: "Eva Lamm", arch: "Eva Lamm (1855–1926)", q: "" },
			{ jm: "Julie Lamm", arch: "Julie Lamm (1857–1926)", q: "" },
			{ jm: "Herrmann Lamm", arch: "Hermann Lamm (1815)", q: "" },
			{ jm: "Hermann Reiniger", arch: "Herrman Reiniger (1824–1897)", q: "" },
			{ jm: "Marie Reiniger", arch: "Marie Reiniger (1830)", q: "" },
			{ jm: "Mina Reiniger", arch: "Minna Reiniger (1861)", q: "" },
			{ jm: "Salomon Reiniger", arch: "Salomon Reiniger (1869)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "II",
		pocet: "11",
		obyv: [
			{ jm: "Salomon Schlesinger", arch: "Salomon Schlesinger (1836–1912)", q: "" },
			{ jm: "Betti Schlesinger", arch: "Betti Schlesinger (1851)", q: "" },
			{ jm: "Felix Schlesinger", arch: "Felix Schlesinger (1882)", q: "" },
			{ jm: "Philipp Kaan", arch: "Philip Kaan (1880)", q: "" },
			{ jm: "Adolf Ignaz Schlesinger", arch: "Adolf Schlesinger (1868–1931)", q: "" },
			{ jm: "Malwine Schlesinger", arch: "Malwine Schlesinger (1879)", q: "Q105598463" },
			{ jm: "Fritz Schlesinger", arch: "Fritz Schlesinger (1900)", q: "Q105597386" },
			{ jm: "Felix Schlesinger", arch: "Felix Schlesinger (1870)", q: "Q105598381" },
			{ jm: "Ernestine Schlesinger", arch: "Ernestine Schlesinger (1876)", q: "Q105598371" },
			{ jm: "Ignaz Beck", arch: "Ignaz Beck (1848–1923)", q: "" },
			{ jm: "Antonie Fischer", arch: "Antonie Beck (1859)", q: "Q104221038" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "II",
		pocet: "10",
		obyv: [
			{ jm: "Salomon Schlesinger", arch: "Salomon Schlesinger (1836–1912)", q: "" },
			{ jm: "Netti Schlesinger", arch: "Netti Schlesinger (1862)", q: "" },
			{ jm: "Felix Schlesinger", arch: "Felix Schlesinger (1870)", q: "Q105598381" },
			{ jm: "Erna Schlesinger", arch: "Ernestine Schlesinger (1876)", q: "Q105598371" },
			{ jm: "Anna Schlesinger", arch: "Anna Beerová (1901)", q: "Q104221811" },
			{ jm: "Edith Schlesinger", arch: "Edith Schlesinger (1902)", q: "" },
			{ jm: "Adolf Schlesinger", arch: "Adolf Schlesinger (1868–1931)", q: "" },
			{ jm: "Malwine Schlesinger geb. Adler", arch: "Malwine Schlesinger (1879)", q: "Q105598463" },
			{ jm: "Fritz Schlesinger", arch: "Fritz Schlesinger (1900)", q: "Q105597386" },
			{ jm: "Kurt Schlesinger", arch: "Kurt Schlesinger (1907)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "III",
		pocet: "22",
		obyv: [
			{ jm: "Bernhard Adler", arch: "Bernard Adler (1821)", q: "" },
			{ jm: "Netti Adler", arch: "Netti Adler (1822–1872)", q: "" },
			{ jm: "Adolf Adler", arch: "Adolf Adler (1848–1913)", q: "" },
			{ jm: "Moritz Adler", arch: "Moritz Adler (1854)", q: "" },
			{ jm: "Julie Adler", arch: "Julie Adler (1847)", q: "" },
			{ jm: "Rosi Adler", arch: "Rosi Adler (1849)", q: "" },
			{ jm: "Marie Adler", arch: "Marie Adler (1856)", q: "" },
			{ jm: "Johanna Grün", arch: "Johanna Grün (1840)", q: "" },
			{ jm: "Jonas Tauber", arch: "Jonas Tauber (1832)", q: "" },
			{ jm: "Fany Tauber", arch: "Fany Tauber (1830)", q: "" },
			{ jm: "Leopold Tauber", arch: "Leopold Tauber (1854)", q: "" },
			{ jm: "Max Tauber", arch: "Max Tauber (1855)", q: "" },
			{ jm: "Moritz Tauber", arch: "Moritz Tauber (1857)", q: "" },
			{ jm: "Marie Pollak", arch: "Marie Pollak (1839)", q: "" },
			{ jm: "Abraham Hausel", arch: "Abraham Hansel (1814)", q: "" },
			{ jm: "Pepi Hausel", arch: "Josefine Hansel (1817)", q: "" },
			{ jm: "Julius Hausel", arch: "Julius Hansel (1847)", q: "" },
			{ jm: "Arnold Hausel", arch: "Arnold Hansel (1849)", q: "" },
			{ jm: "Sigmund Hausel", arch: "Sigmund Hansel (1851)", q: "" },
			{ jm: "Karl Hausel", arch: "Karl Hansel (1856)", q: "" },
			{ jm: "Berdhold Hausel", arch: "Berthold Hansel (1857)", q: "" },
			{ jm: "Mathilde Hausel", arch: "Mathilde Taussig (1853–1926)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "III",
		pocet: "13",
		obyv: [
			{ jm: "Bernard Adler", arch: "Bernard Adler (1821)", q: "" },
			{ jm: "Netti Adler", arch: "Netti Adler (1822–1872)", q: "" },
			{ jm: "Adolf Adler", arch: "Adolf Adler (1848–1913)", q: "" },
			{ jm: "Rosa Adler", arch: "Rosi Adler (1849)", q: "" },
			{ jm: "Moritz Adler", arch: "Moritz Adler (1854)", q: "" },
			{ jm: "Marie Adler", arch: "Marie Adler (1856)", q: "" },
			{ jm: "Moses Hessinger", arch: "Moses Hessinger (1811)", q: "" },
			{ jm: "Fanni Hessinger", arch: "Hani Hessinger (1829)", q: "" },
			{ jm: "Josefine Hessinger", arch: "Josephine Hessinger (1855)", q: "" },
			{ jm: "Emilie Hessinger", arch: "Emma Hessinger (1861)", q: "" },
			{ jm: "Katharina Hessinger", arch: "Katarina Hessinger (1859)", q: "" },
			{ jm: "Friderika Hessinger", arch: "Friderika Hessinger (1863)", q: "" },
			{ jm: "Wilhelm Hessinger", arch: "Wilhelm Hessinger (1865)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "III",
		pocet: "7",
		obyv: [
			{ jm: "Bernhard Adler", arch: "Bernard Adler (1821)", q: "" },
			{ jm: "Marie Adler", arch: "Marie Adler (1856)", q: "" },
			{ jm: "Adolf L. Adler", arch: "Adolf Adler (1848–1913)", q: "" },
			{ jm: "Anna Adler", arch: "Anna Adler (1856)", q: "" },
			{ jm: "Robert Adler", arch: "Robert Adler (1876)", q: "" },
			{ jm: "Eduard Adler", arch: "Eduard Adler (1880)", q: "" },
			{ jm: "Malvine Adler", arch: "Malwine Schlesinger (1879)", q: "Q105598463" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "III",
		pocet: "12",
		obyv: [
			{ jm: "Adolf B. Adler", arch: "Adolf Adler (1848–1913)", q: "" },
			{ jm: "Anna Adler geb. Fried", arch: "Anna Adler (1856)", q: "" },
			{ jm: "Bernhard Adler", arch: "Bernard Adler (1821)", q: "" },
			{ jm: "Robert Adler", arch: "Robert Adler (1876)", q: "" },
			{ jm: "Malvine Adler", arch: "Malwine Schlesinger (1879)", q: "Q105598463" },
			{ jm: "Eduard Adler", arch: "Eduard Adler (1880)", q: "" },
			{ jm: "Olga Adler", arch: "Olga Fried (1883)", q: "" },
			{ jm: "Hugo Adler", arch: "Hugo Adler (1886)", q: "" },
			{ jm: "Irma Adler", arch: "Irma Adler (1889)", q: "" },
			{ jm: "Adele Schindler", arch: "Adele Fanta (1870)", q: "Q104545839" },
			{ jm: "Emma Schindler", arch: "Emma Schindler (1880)", q: "" },
			{ jm: "Otto Schindler", arch: "Otto Schindler (1881)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "III",
		pocet: "9",
		obyv: [
			{ jm: "Adolf B. Adler", arch: "Adolf Adler (1848–1913)", q: "" },
			{ jm: "Anna Adler geb. Fried", arch: "Anna Adler (1856)", q: "" },
			{ jm: "Robert Adler", arch: "Robert Adler (1876)", q: "" },
			{ jm: "Eduard Adler", arch: "Eduard Adler (1880)", q: "" },
			{ jm: "Olga Adler", arch: "Olga Fried (1883)", q: "" },
			{ jm: "Hugo Adler", arch: "Hugo Adler (1886)", q: "" },
			{ jm: "Irma Adler", arch: "Irma Adler (1889)", q: "" },
			{ jm: "Emma Schindler", arch: "Emma Schindler (1880)", q: "" },
			{ jm: "Otto Schindler", arch: "Otto Schindler (1881)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "III",
		pocet: "6",
		obyv: [
			{ jm: "Adolf B. Adler", arch: "Adolf Adler (1848–1913)", q: "" },
			{ jm: "Anna Adler", arch: "Anna Adler (1856)", q: "" },
			{ jm: "Eduard Adler", arch: "Eduard Adler (1880)", q: "" },
			{ jm: "Hugo Adler", arch: "Hugo Adler (1886)", q: "" },
			{ jm: "Irma Adler", arch: "Irma Adler (1889)", q: "" },
			{ jm: "Olga Fried", arch: "Olga Fried (1883)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "IV",
		pocet: "29",
		obyv: [
			{ jm: "Samuel Baron", arch: "Samuel Baron (1802)", q: "" },
			{ jm: "Isak Baron", arch: "Isak Baron (1831)", q: "" },
			{ jm: "Wolf Baron", arch: "Wolf Baron (1842)", q: "" },
			{ jm: "Ernestine Baron", arch: "Ernestine Baron (1835)", q: "" },
			{ jm: "Ewa Baron", arch: "Ewa Baron (1839)", q: "" },
			{ jm: "Jakob Adler", arch: "Jakob Adler (1794)", q: "" },
			{ jm: "Aron Adler", arch: "Adolf Adler (1840–1907)", q: "" },
			{ jm: "Rosalia Adler", arch: "Rosalia Adler (1829)", q: "" },
			{ jm: "Moises Adler", arch: "Moses Adler (1827)", q: "" },
			{ jm: "Judit Adler", arch: "Judith Adler (1824)", q: "" },
			{ jm: "Adolf Adler", arch: "Adolf Adler (1854)", q: "" },
			{ jm: "Berdhold Adler", arch: "Berthold Adler (1856)", q: "" },
			{ jm: "Kathi Adler", arch: "Kathi Adler (1855)", q: "" },
			{ jm: "Markus Kulka", arch: "Markus Kulka (1816)", q: "" },
			{ jm: "Sara Kulka", arch: "Sara Kulka (1817)", q: "" },
			{ jm: "Moises Lebel Kulka", arch: "Moses Kulka (1850)", q: "" },
			{ jm: "Nohe Kulka", arch: "Nohe Kulka (1852)", q: "" },
			{ jm: "Rosa Kulka", arch: "Rosa Frankl (1846)", q: "" },
			{ jm: "Kathi Kulka", arch: "Kati Gessler (1849–1916)", q: "" },
			{ jm: "Katharina Leichter", arch: "Katharina Leichter (1841)", q: "" },
			{ jm: "Abraham Löwy", arch: "Abraham Löwi (1824)", q: "" },
			{ jm: "Julie Löwy", arch: "Julie Löwy (1825)", q: "" },
			{ jm: "Markus Löwy", arch: "Markus Löwy (1850)", q: "" },
			{ jm: "Jakob Löwy", arch: "Jakob Löwy (1852)", q: "" },
			{ jm: "Isaias Löwy", arch: "Isaias Löwy (1857)", q: "" },
			{ jm: "Amalia Löwy", arch: "Amalia Löwy (1855)", q: "" },
			{ jm: "Kathi Weinstein", arch: "Kathi Weinstein (1791)", q: "" },
			{ jm: "Rosalia Langfälder", arch: "Rosalia Langfälder (1840)", q: "" },
			{ jm: "Juda Löl-Löwy", arch: "Juda Löl-Löwy (1804)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "IV",
		pocet: "13",
		obyv: [
			{ jm: "Kati Baron", arch: "Anna Baron (1795)", q: "" },
			{ jm: "Ernestine Baron", arch: "Ernestine Baron (1827)", q: "" },
			{ jm: "Josef Kulka", arch: "Josef Kulka (1826)", q: "" },
			{ jm: "Rosalia Kulka", arch: "Rosalia Kulka (1829–1913)", q: "" },
			{ jm: "Adolf Kulka", arch: "Adolf Kulka (1858)", q: "" },
			{ jm: "Ferdinand Kulka", arch: "Ferdinand Kulka (1861)", q: "" },
			{ jm: "Jakob Kulka", arch: "Jakob Kulka (1869)", q: "" },
			{ jm: "Samuel Baron", arch: "Samuel Baron (1802)", q: "" },
			{ jm: "Markus Kulka", arch: "Markus Kulka (1816)", q: "" },
			{ jm: "Sara Kulka", arch: "Sara Kulka (1817)", q: "" },
			{ jm: "Rosa Kulka", arch: "Rosa Frankl (1846)", q: "" },
			{ jm: "Katti Kulka", arch: "Kati Gessler (1849–1916)", q: "" },
			{ jm: "Noe Kulka", arch: "Nohe Kulka (1852)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "IV",
		pocet: "14",
		obyv: [
			{ jm: "Samuel Baron", arch: "Samuel Baron (1802)", q: "" },
			{ jm: "Ernestine Baron", arch: "Ernestine Baron (1827)", q: "" },
			{ jm: "Josef Kulka", arch: "Josef Kulka (1826)", q: "" },
			{ jm: "Rosalia Kulka", arch: "Rosalia Kulka (1829–1913)", q: "" },
			{ jm: "Max Kulka", arch: "Max Kulka (1872)", q: "" },
			{ jm: "Sara Kulka", arch: "Sara Kulka (1817)", q: "" },
			{ jm: "Filipp Widder", arch: "Filipp Widder (1843–1918)", q: "" },
			{ jm: "Eva Widder", arch: "Eva Widder (1839)", q: "" },
			{ jm: "Moritz Widder", arch: "Moritz Widder (1880)", q: "" },
			{ jm: "Sali Widder", arch: "Sali Widder (1870)", q: "" },
			{ jm: "Betti Widder", arch: "Betti Widder (1871)", q: "" },
			{ jm: "Marie Widder", arch: "Marie Widder (1875)", q: "" },
			{ jm: "Emma Widder", arch: "Emma Widder (1877)", q: "" },
			{ jm: "Jetti Widder", arch: "Henriette Fried (1878)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "IV",
		pocet: "9",
		obyv: [
			{ jm: "Aron Adler", arch: "Aron Adler (1836)", q: "" },
			{ jm: "Johanna Adler", arch: "Hanni Adler (1834)", q: "" },
			{ jm: "Hermine Adler", arch: "Minna Adler (1868)", q: "" },
			{ jm: "Betti Fischer", arch: "Betti Fischer (1818)", q: "" },
			{ jm: "Fanny Morgenstern", arch: "Fanny Morgenstern (1826)", q: "" },
			{ jm: "Anna Weinstein", arch: "Anna Weinstein (1846)", q: "" },
			{ jm: "Josef Kober", arch: "Josef Kober (1824)", q: "" },
			{ jm: "Betti Kober", arch: "Elisabeth Kober (1839)", q: "" },
			{ jm: "Rosa Kober", arch: "Rosa Kober (1876)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "IV",
		pocet: "16",
		obyv: [
			{ jm: "Lotty Widder", arch: "Charlotte Widder (1843–1916)", q: "" },
			{ jm: "Philipp Widder", arch: "Filipp Widder (1843–1918)", q: "" },
			{ jm: "Bertha Widder", arch: "Betti Widder (1871)", q: "" },
			{ jm: "Marie Widder", arch: "Marie Widder (1875)", q: "" },
			{ jm: "Henriette Fried", arch: "Henriette Fried (1878)", q: "" },
			{ jm: "Rosa Fried", arch: "Rosa Fried (1900)", q: "" },
			{ jm: "Josef Kulka", arch: "Josef Kulka (1826)", q: "" },
			{ jm: "Rosa Kulka", arch: "Rosalia Kulka (1829–1913)", q: "" },
			{ jm: "Sara Kulka", arch: "Sara Kulka (1817)", q: "" },
			{ jm: "Jakob Frankl", arch: "Jakob Frankl (1842)", q: "" },
			{ jm: "Rosa Frankl", arch: "Rosa Frankl (1846)", q: "" },
			{ jm: "Noe Frankl", arch: "Noe Frankl (1875)", q: "" },
			{ jm: "Hermann Frankl", arch: "Hermann Frankl (1876)", q: "" },
			{ jm: "Gisela Frankl", arch: "Gisela Frankl (1878)", q: "" },
			{ jm: "Theres Frankl", arch: "Therese Frankl (1878)", q: "" },
			{ jm: "Friedrich Frankl", arch: "Fritz Frankl (1888)", q: "Q104548821" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "IV",
		pocet: "7",
		obyv: [
			{ jm: "Philipp Widder", arch: "Filipp Widder (1843–1918)", q: "" },
			{ jm: "Lotti Widder", arch: "Charlotte Widder (1843–1916)", q: "" },
			{ jm: "Marie Widder", arch: "Marie Widder (1875)", q: "" },
			{ jm: "Rosa Kulka", arch: "Rosalia Kulka (1829–1913)", q: "" },
			{ jm: "Louise Steiner", arch: "Louise Steiner (1856–1936)", q: "" },
			{ jm: "Malvine Steiner", arch: "Malvine Steiner (1886)", q: "" },
			{ jm: "Gottfried Steiner", arch: "Gottfried Steiner (1889)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "IX",
		pocet: "14",
		obyv: [
			{ jm: "Sacharias Orlich", arch: "Zacharias Orlich (1807)", q: "" },
			{ jm: "Katharina Orlich", arch: "Katharina Orlich (1804)", q: "" },
			{ jm: "Josef Orlich", arch: "Joseph Orlich (1839)", q: "" },
			{ jm: "Ewa Orlich", arch: "Ewa Orlich (1838)", q: "" },
			{ jm: "Rebeka Orlich", arch: "Rebeka Orlich (1843)", q: "" },
			{ jm: "Anna Beck", arch: "Anna Beck (1801)", q: "" },
			{ jm: "Moises Beck", arch: "Moses Beck (1839)", q: "" },
			{ jm: "Rachel Beck", arch: "Rachel Beck (1829)", q: "" },
			{ jm: "Isaias Weinstein", arch: "Isaias Weinstein (1820)", q: "" },
			{ jm: "Josefa Weinstein", arch: "Josefa Weinstein (1820)", q: "" },
			{ jm: "Jakob Weinstein", arch: "Jakub Weinstein (1856–1943)", q: "Q105619178" },
			{ jm: "Rosa Weinstein", arch: "Rosa Weinstein (1849)", q: "" },
			{ jm: "Elisabeth Weinstein", arch: "Elisabeth Weinstein (1850)", q: "" },
			{ jm: "Rosalia Rott", arch: "Rosalia Rott (1812)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "IX",
		pocet: "12",
		obyv: [
			{ jm: "Zacharias Orlich", arch: "Zacharias Orlich (1807)", q: "" },
			{ jm: "Kati Orlich", arch: "Katharina Orlich (1804)", q: "" },
			{ jm: "Josef Orlich", arch: "Joseph Orlich (1839)", q: "" },
			{ jm: "Rosa Orlich", arch: "Rebeka Orlich (1843)", q: "" },
			{ jm: "Eduard Wlschek", arch: "Eduard Wlczek (1865–1917)", q: "" },
			{ jm: "Rachel Schreiber", arch: "Rachel Schreiber (1802)", q: "" },
			{ jm: "Samuel Klein", arch: "Samuel Klein (1806)", q: "" },
			{ jm: "Amalia Klein", arch: "Amalia Klein (1809)", q: "" },
			{ jm: "Sali Klein", arch: "Sally Klein (1842)", q: "" },
			{ jm: "Nathan Morgenstern", arch: "Nathan Morgenstern (1824)", q: "" },
			{ jm: "Rosi Morgenstern", arch: "Rosi Morgenstern (1828)", q: "" },
			{ jm: "Adolf Morgenstern", arch: "Adolf Morgenstern (1858)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "IX",
		pocet: "16",
		obyv: [
			{ jm: "Fani Schindler", arch: "Fanny Schindler (1827)", q: "" },
			{ jm: "Resi Beer", arch: "Therese Beer (1857)", q: "" },
			{ jm: "Berthold Beer", arch: "Berthold Beer (1880)", q: "" },
			{ jm: "Maier Rosenthal", arch: "Maier Rosenthal (1853)", q: "" },
			{ jm: "Charlotte Rosenthal", arch: "Charlotte Rosenthal (1856)", q: "" },
			{ jm: "Isidor Rosenthal", arch: "Isidor Rosenthal (1876)", q: "" },
			{ jm: "David Löwin", arch: "David Löwin (1856)", q: "" },
			{ jm: "Moses Hessinger", arch: "Moses Hessinger (1811)", q: "" },
			{ jm: "Hani Hessinger", arch: "Hani Hessinger (1829)", q: "" },
			{ jm: "Jakob Hessinger", arch: "Jakob Hessinger (1874)", q: "" },
			{ jm: "Katarina Hessinger", arch: "Katarina Hessinger (1859)", q: "" },
			{ jm: "Friderika Hessinger", arch: "Friderika Hessinger (1863)", q: "" },
			{ jm: "Nathan Morgenstern", arch: "Nathan Morgenstern (1824)", q: "" },
			{ jm: "Rosi Morgenstern", arch: "Rosi Morgenstern (1828)", q: "" },
			{ jm: "Leopold Winkler", arch: "Leopold Winkler (1866)", q: "" },
			{ jm: "Emil Fanty", arch: "Emil Fanty (1871)", q: "Q104546312" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "IX",
		pocet: "13",
		obyv: [
			{ jm: "David Kaan", arch: "David Kaan (1846)", q: "" },
			{ jm: "Sali Kaan", arch: "Sali Kaan (1846)", q: "" },
			{ jm: "Ignatz Kaan", arch: "Ignatz Kaan (1870)", q: "" },
			{ jm: "Wilhelm Kaan", arch: "Wilhelm Kaan (1874–1944)", q: "Q104812608" },
			{ jm: "Philipp Kaan", arch: "Philip Kaan (1880)", q: "" },
			{ jm: "Leopold Kaan", arch: "Leopold Kaan (1882)", q: "" },
			{ jm: "Gisela Kaan", arch: "Gisela Kaan (1885)", q: "" },
			{ jm: "Alois Kaan", arch: "Alois Kaan (1889)", q: "" },
			{ jm: "Katti Kaan", arch: "Katti Kaan (1847)", q: "" },
			{ jm: "Philipp Schlesinger", arch: "Philipp Schlesinger (1877)", q: "" },
			{ jm: "Nathan Morgenstern", arch: "Nathan Morgenstern (1824)", q: "" },
			{ jm: "Morgenstern", arch: "Rosi Morgenstern (1828)", q: "" },
			{ jm: "Samuel Klein", arch: "Samuel Klein (1879–xxx1)", q: "Q105521280" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "V",
		pocet: "23",
		obyv: [
			{ jm: "Samuel Morgenstern", arch: "Samuel Morgenstern (1807)", q: "" },
			{ jm: "Fanny Winter", arch: "Fanny Winter (1821)", q: "" },
			{ jm: "Wilhelm Winter", arch: "Wilhelm Morgenstern (1847)", q: "" },
			{ jm: "Nathan Morgenstern", arch: "Nathan Morgenstern (1849)", q: "" },
			{ jm: "Jonas Winter", arch: "Jonas Winter (1857)", q: "" },
			{ jm: "Sally Winter", arch: "Sally Winter (1853)", q: "" },
			{ jm: "Katty Winter", arch: "Katty Winter (1854)", q: "" },
			{ jm: "Saly Winter", arch: "Saly Winter (1825)", q: "" },
			{ jm: "Moses Winter", arch: "Moses Winter (1850)", q: "" },
			{ jm: "Simon Sontag", arch: "Simon Sontag (1806)", q: "" },
			{ jm: "Babete Sonntag", arch: "Babette Sonntag (1801)", q: "" },
			{ jm: "Babete Sonntag", arch: "Babete Sonntag (1836)", q: "" },
			{ jm: "Michael Adler", arch: "Michael Adler (1805)", q: "" },
			{ jm: "Mina Adler", arch: "Mina Adler (1806)", q: "" },
			{ jm: "Moises Wolf Adler", arch: "Moises Wolf Adler (1840)", q: "" },
			{ jm: "Maria Adler", arch: "Maria Adler (1833)", q: "" },
			{ jm: "Czilia Adler", arch: "Czilia Adler (1842)", q: "" },
			{ jm: "Betty Adler", arch: "Betty Adler (1848)", q: "" },
			{ jm: "Rosy Adler", arch: "Rosy Adler (1853)", q: "" },
			{ jm: "Nathan Weinstein", arch: "Nathan Weinstein (1822)", q: "" },
			{ jm: "Moises Weinstein", arch: "Moriz Weinstein (1850)", q: "" },
			{ jm: "Anna Weinstein", arch: "Anna Weinstein (1846)", q: "" },
			{ jm: "Marie Weinstein", arch: "Marie Weinstein (1787)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "V",
		pocet: "8",
		obyv: [
			{ jm: "Michael Adler", arch: "Michael Adler (1805)", q: "" },
			{ jm: "Maria Adler", arch: "Maria Adler (1833)", q: "" },
			{ jm: "Cäcilia Adler", arch: "Czilia Adler (1842)", q: "" },
			{ jm: "Lotti Adler", arch: "Betty Adler (1848)", q: "" },
			{ jm: "Rosa Adler", arch: "Rosy Adler (1853)", q: "" },
			{ jm: "Nathan Weinstein", arch: "Nathan Weinstein (1822)", q: "" },
			{ jm: "Simon Sontag", arch: "Simon Sontag (1806)", q: "" },
			{ jm: "Babette Sontag", arch: "Babette Sonntag (1801)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "V",
		pocet: "10",
		obyv: [
			{ jm: "Aron Adler", arch: "Aron Adler (1836)", q: "" },
			{ jm: "Hanni Adler geb. Huss", arch: "Hanni Adler (1834)", q: "" },
			{ jm: "Julius Adler", arch: "Julius Adler (1865–xxx1)", q: "" },
			{ jm: "Minna Adler", arch: "Minna Adler (1868)", q: "" },
			{ jm: "Fanni Widder", arch: "Fanny Widder (1810)", q: "" },
			{ jm: "Simon Sonntag", arch: "Simon Sontag (1806)", q: "" },
			{ jm: "Babette Sonntag", arch: "Babette Sonntag (1801)", q: "" },
			{ jm: "Nathan Weinstein", arch: "Nathan Weinstein (1822)", q: "" },
			{ jm: "Anna Weinstein", arch: "Anna Weinstein (1846)", q: "" },
			{ jm: "Karl Sonnenschein", arch: "Karl Sonnenschein (1872)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "V",
		pocet: "10",
		obyv: [
			{ jm: "Philipp Widder", arch: "Filipp Widder (1843–1918)", q: "" },
			{ jm: "Charlotte Widder", arch: "Charlotte Widder (1843–1916)", q: "" },
			{ jm: "Rosalie Widder", arch: "Sali Widder (1870)", q: "" },
			{ jm: "Bertha Widder", arch: "Betti Widder (1871)", q: "" },
			{ jm: "Marie Widder", arch: "Marie Widder (1875)", q: "" },
			{ jm: "Henriette Widder", arch: "Henriette Fried (1878)", q: "" },
			{ jm: "Joseph Kulka", arch: "Josef Kulka (1826)", q: "" },
			{ jm: "Rosa Kulka", arch: "Rosalia Kulka (1829–1913)", q: "" },
			{ jm: "Max Kulka", arch: "Max Kulka (1872)", q: "" },
			{ jm: "Sara Kulka", arch: "Sara Kulka (1817)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "V",
		pocet: "2",
		obyv: [
			{ jm: "Nathan Morgenstern", arch: "Nathan Morgenstern (1824)", q: "" },
			{ jm: "Rosi Morgenstern", arch: "Rosi Morgenstern (1828)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "V",
		pocet: "6",
		obyv: [
			{ jm: "Karel Baron", arch: "Carl Baron (1861–1921)", q: "" },
			{ jm: "Josefine recte Pepie Baron geb. Lamm", arch: "Josefine Baron (1866–1937)", q: "" },
			{ jm: "Růžena Baron", arch: "Růžena Leschnerová (1896)", q: "Q105556573" },
			{ jm: "Leopold Baron", arch: "Leopold Baron (1898)", q: "Q104219119" },
			{ jm: "Julie Baron", arch: "Julie Baron (1899–1932)", q: "" },
			{ jm: "Josefa Baron", arch: "Pepi Spitzer (1858–1940)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "VI",
		pocet: "32",
		obyv: [
			{ jm: "Juda Morgenstern", arch: "Juda Morgenstern (1787)", q: "" },
			{ jm: "Barbara Bruck", arch: "Barbara Bruck (1790)", q: "" },
			{ jm: "Jakob Sobek", arch: "Jakob Sobek (1790)", q: "" },
			{ jm: "Anna Sobek", arch: "Anna Sobek (1790)", q: "" },
			{ jm: "Abraham Sobek", arch: "Abraham Sobek (1821)", q: "" },
			{ jm: "Gerson Sobek", arch: "Gerson Sobek (1823)", q: "" },
			{ jm: "Salamon Sobek", arch: "Salomon Sobek (1826)", q: "" },
			{ jm: "Jakob Widder", arch: "Jakob Widder (1819)", q: "" },
			{ jm: "Fanny Wider", arch: "Fanny Widder (1818)", q: "" },
			{ jm: "Bernhard Wider", arch: "Bernhard Widder (1853–1914)", q: "" },
			{ jm: "Leopold Wider", arch: "Leopold Widder (1854)", q: "" },
			{ jm: "Abraham Wider", arch: "Adolf Widder (1857–1942)", q: "Q105638634" },
			{ jm: "Hanny Wider", arch: "Hanny Widder (1851)", q: "" },
			{ jm: "Josef Widder", arch: "Joseph Widder (1817)", q: "" },
			{ jm: "Joachim Wider", arch: "Joachim Widder (1836)", q: "" },
			{ jm: "Jakob Wider", arch: "Jakob Widder (1845)", q: "" },
			{ jm: "Anna Wider", arch: "Anna Widder (1847)", q: "" },
			{ jm: "Herrmann Wider", arch: "Hermann Widder (1837–1926)", q: "" },
			{ jm: "Filipp Wider", arch: "Filipp Widder (1843–1918)", q: "" },
			{ jm: "Cylly Wider", arch: "Cilli Widder (1829)", q: "" },
			{ jm: "Antonia Feigel", arch: "Antonia Feigel (1827)", q: "" },
			{ jm: "David Wallfisch", arch: "David Wallfisch (1814)", q: "" },
			{ jm: "Karolina Wallfisch", arch: "Karolina Wallfisch (1810)", q: "" },
			{ jm: "Isak Vogel", arch: "Isak Vogel (1802)", q: "" },
			{ jm: "Kathi Vogel", arch: "Kathi Vogel (1798)", q: "" },
			{ jm: "Salamon Vogel", arch: "Salomon Vogel (1829–1890)", q: "" },
			{ jm: "Markus Vogel", arch: "Markus Vogel (1843)", q: "" },
			{ jm: "Hanny Vogel", arch: "Hanny Vogel (1838)", q: "" },
			{ jm: "Esther Rindl", arch: "Esther Rindl (1791)", q: "" },
			{ jm: "Lea Rindl", arch: "Lea Rindl (1820)", q: "" },
			{ jm: "Hanny Rindl", arch: "Hanny Rindl (1832)", q: "" },
			{ jm: "Löbel Rindl", arch: "Löbel Rindl (1840)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "VI",
		pocet: "26",
		obyv: [
			{ jm: "Filipp Widder", arch: "Filipp Widder (1843–1918)", q: "" },
			{ jm: "Eva Widder", arch: "Eva Widder (1839)", q: "" },
			{ jm: "Jakob Widder", arch: "Jakob Widder (1819)", q: "" },
			{ jm: "Fanny Widder", arch: "Fanny Widder (1818)", q: "" },
			{ jm: "Bernhard Widder", arch: "Bernhard Widder (1853–1914)", q: "" },
			{ jm: "Leopold Widder", arch: "Leopold Widder (1854)", q: "" },
			{ jm: "Paulina Turad", arch: "Paulina Turad (1853)", q: "" },
			{ jm: "Johanna Meisel", arch: "Johanna Meisel (1823)", q: "" },
			{ jm: "Markus Feigel", arch: "Markus Feigel (1822)", q: "" },
			{ jm: "Katti Feigel", arch: "Hani Feigl (1831)", q: "" },
			{ jm: "Hanni Feigel", arch: "Hani Feigl (1859)", q: "" },
			{ jm: "Resi Feigel", arch: "Resi Feigl (1861)", q: "" },
			{ jm: "Lina Feigel", arch: "Lina Feigl (1862)", q: "" },
			{ jm: "Sigmund Feigl", arch: "Sigmund Feigl (1867)", q: "" },
			{ jm: "Samuel Morgenstern", arch: "Samuel Morgenstern (1807)", q: "" },
			{ jm: "Fanni Winter", arch: "Fanny Winter (1821)", q: "" },
			{ jm: "Sali Winter", arch: "Sally Winter (1853)", q: "" },
			{ jm: "Kati Winter", arch: "Katty Winter (1854)", q: "" },
			{ jm: "Jonas Winter", arch: "Jonas Winter (1857)", q: "" },
			{ jm: "Josef Widder", arch: "Joseph Widder (1817)", q: "" },
			{ jm: "Fani Schindler", arch: "Fanny Schindler (1827)", q: "" },
			{ jm: "Theresie Schindler", arch: "Therese Beer (1857)", q: "" },
			{ jm: "Katharina Schindler", arch: "Katarina Schindler (1859)", q: "" },
			{ jm: "Amalie Schindler", arch: "Amalie Schindler (1861)", q: "" },
			{ jm: "Taube Urban", arch: "Theresia Urban (1786)", q: "" },
			{ jm: "Lotti Beck", arch: "Lotty Beck (1832)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "VI",
		pocet: "26",
		obyv: [
			{ jm: "Moritz Kohn", arch: "Moritz Kohn (1841)", q: "" },
			{ jm: "Eleonore Kohn", arch: "Eleonore Kohn (1837–1916)", q: "" },
			{ jm: "Isidor Kohn", arch: "Isidor Kohn (1870)", q: "" },
			{ jm: "Ignaz Kohn", arch: "Ignaz Kohn (1873–xxx1)", q: "" },
			{ jm: "Sigmund Kohn", arch: "Sigmund Kohn (1876)", q: "" },
			{ jm: "Elisabeth Kohn", arch: "Elisabeth Kohn (1875)", q: "" },
			{ jm: "Malvine Kohn", arch: "Malvine Kohn (1879)", q: "" },
			{ jm: "Markus Feigl", arch: "Markus Feigel (1822)", q: "" },
			{ jm: "Hani Feigl", arch: "Hani Feigl (1831)", q: "" },
			{ jm: "Sigmund Feigl", arch: "Sigmund Feigl (1867)", q: "" },
			{ jm: "Hani Feigl", arch: "Hani Feigl (1859)", q: "" },
			{ jm: "Resi Feigl", arch: "Resi Feigl (1861)", q: "" },
			{ jm: "Lina Feigl", arch: "Lina Feigl (1862)", q: "" },
			{ jm: "Fani Winter", arch: "Fanny Winter (1821)", q: "" },
			{ jm: "Kati Winter", arch: "Katty Winter (1854)", q: "" },
			{ jm: "Ferdinand Rindl", arch: "Ferdinand Rindel (1850–1907)", q: "" },
			{ jm: "Jeny Rindl", arch: "Jeny Rindl (1850–1921)", q: "" },
			{ jm: "Adolf Rindl", arch: "Adolf Rindl (1879)", q: "" },
			{ jm: "Ernestine Rindl", arch: "Ernestine Gewürz (1880)", q: "Q104657942" },
			{ jm: "Gustav Rindl", arch: "Gustav Rindl (1875)", q: "Q105472506" },
			{ jm: "Wilhelm Kulka", arch: "Wilhelm Kulka (1828–1914)", q: "" },
			{ jm: "Julie Kulka", arch: "Julie Kulka (1831)", q: "" },
			{ jm: "David Kulka", arch: "David Kulka (1876)", q: "" },
			{ jm: "Beti Kulka", arch: "Berta Kulka (1866)", q: "" },
			{ jm: "Fanni Kulka", arch: "Fanni Plaschkes (1868)", q: "Q105573556" },
			{ jm: "Rosa Kulka", arch: "Rosa Kulka (1874)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "VI",
		pocet: "16",
		obyv: [
			{ jm: "Samuel Vogel", arch: "Samuel Vogel (1836)", q: "" },
			{ jm: "Resi Vogel", arch: "Resi Vogel (1840)", q: "" },
			{ jm: "Adolf Vogel", arch: "Adolf Vogel (1874–xxx1)", q: "" },
			{ jm: "Adelheid Březina", arch: "Adelheid Březina (1866)", q: "" },
			{ jm: "Fanni Widder", arch: "Fanny Widder (1818)", q: "" },
			{ jm: "Bernhard Widder", arch: "Bernhard Widder (1853–1914)", q: "" },
			{ jm: "Marcus Feigl", arch: "Markus Feigel (1822)", q: "" },
			{ jm: "Katharina Feigl", arch: "Hani Feigl (1831)", q: "" },
			{ jm: "Marie Fischer", arch: "Marie Fischer (1842–1920)", q: "" },
			{ jm: "Salomon Fischer", arch: "Salomon Fischer (1855)", q: "" },
			{ jm: "Rosa Fischer", arch: "Resi Fischer (1875)", q: "" },
			{ jm: "Moritz Fischer", arch: "Moritz Fischer (1878–xxx1)", q: "" },
			{ jm: "Jenni Fischer", arch: "Jenni Fischer (1879)", q: "" },
			{ jm: "Arnold Fischer", arch: "Arnold Fischer (1881)", q: "" },
			{ jm: "Jenni Fischer", arch: "Eugenie Liebel (1883)", q: "Q105556781" },
			{ jm: "Robert Fischer", arch: "Robert Fischer (1886)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "VI",
		pocet: "14",
		obyv: [
			{ jm: "Johanna Urban", arch: "Hany Urban (1853–1931)", q: "" },
			{ jm: "Therese Urban", arch: "Resi Urban (1883)", q: "" },
			{ jm: "Bernhard Widder", arch: "Bernhard Widder (1853–1914)", q: "" },
			{ jm: "Julie Winkler", arch: "Julie Winkler (1889)", q: "" },
			{ jm: "Bernhard Winkler", arch: "Bernhard Winkler (1894)", q: "" },
			{ jm: "Markus Feigl", arch: "Markus Feigel (1822)", q: "" },
			{ jm: "Katti Feigel", arch: "Hani Feigl (1831)", q: "" },
			{ jm: "Ernestine Schreier", arch: "Erna Klein (1883)", q: "Q105520755" },
			{ jm: "Marie Fischer geb. Pless", arch: "Marie Fischer (1842–1920)", q: "" },
			{ jm: "Sigmund Fischer", arch: "Sigmund Fischer (1879–xxx1)", q: "" },
			{ jm: "Eugenie Fischer", arch: "Eugenie Liebel (1883)", q: "Q105556781" },
			{ jm: "Robert Fischer", arch: "Robert Fischer (1886)", q: "" },
			{ jm: "Eugenie Adler", arch: "Jeanette Adler (1859)", q: "" },
			{ jm: "Ferdinand Kober", arch: "Ferdinand Kober (1867)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "VII",
		pocet: "5",
		obyv: [
			{ jm: "Abraham Sobek", arch: "Abraham Sobek (1821)", q: "" },
			{ jm: "Julie Sobek", arch: "Julie Sobek (1843)", q: "" },
			{ jm: "Rosa Sobek", arch: "Rosa Kraus (1865–1942)", q: "Q105527619" },
			{ jm: "Jakob Sobek", arch: "Jacob Sobek (1866)", q: "" },
			{ jm: "Albert Sobek", arch: "Bernard Sobek (1868)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "VII",
		pocet: "6",
		obyv: [
			{ jm: "Abraham Sobek", arch: "Abraham Sobek (1821)", q: "" },
			{ jm: "Julie Sobek", arch: "Julie Sobek (1843)", q: "" },
			{ jm: "Jacob Sobek", arch: "Jacob Sobek (1866)", q: "" },
			{ jm: "Bernard Sobek", arch: "Bernard Sobek (1868)", q: "" },
			{ jm: "Rosa Sobek", arch: "Rosa Kraus (1865–1942)", q: "Q105527619" },
			{ jm: "Emilie Fleischmann", arch: "Emilie Fleischmann (1790)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "VII",
		pocet: "2",
		obyv: [
			{ jm: "Abraham Sobek", arch: "Abraham Sobek (1821)", q: "" },
			{ jm: "Julie Sobek", arch: "Julie Sobek (1843)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "VII",
		pocet: "1",
		obyv: [
			{ jm: "Julie Sobek", arch: "Julie Sobek (1843)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "VIII",
		pocet: "6",
		obyv: [
			{ jm: "Isak Meisel", arch: "Isak Meisel (1808)", q: "" },
			{ jm: "Johanna Meisel", arch: "Johanna Meisel (1823)", q: "" },
			{ jm: "Maxmilian Meisel", arch: "Maxmilian Meisel (1841)", q: "" },
			{ jm: "Amalia Meisel", arch: "Amalia Meisel (1838)", q: "" },
			{ jm: "Saly Meisel", arch: "Saly Meisel (1850)", q: "" },
			{ jm: "Fanny Meisel", arch: "Fanny Meisel (1857)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "VIII",
		pocet: "2",
		obyv: [
			{ jm: "Berthold Thorž", arch: "Berthold Thorž (1861–1941)", q: "" },
			{ jm: "Elisabeth Thorž", arch: "Elisabeth Thorž (1867)", q: "Q105615061" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "VIII",
		pocet: "2",
		obyv: [
			{ jm: "Berthold Thorž", arch: "Berthold Thorž (1861–1941)", q: "" },
			{ jm: "Elise Thorž", arch: "Elisabeth Thorž (1867)", q: "Q105615061" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "X",
		pocet: "17",
		obyv: [
			{ jm: "Moises Czech", arch: "Moses Czech (1828)", q: "" },
			{ jm: "Isak Morgenstern", arch: "Isak Morgenstern (1829)", q: "" },
			{ jm: "Hanny Morgenstern", arch: "Hani Morgenstern (1829)", q: "" },
			{ jm: "Alois Morgenstern", arch: "Alois Morgenstern (1857)", q: "Q105469757" },
			{ jm: "Julie Morgenstern", arch: "Julie Perl (1856)", q: "" },
			{ jm: "Israel Kulka", arch: "Israel Kulka (1814–1871)", q: "" },
			{ jm: "Rosa Kulka", arch: "Rosa Kulka (1814)", q: "" },
			{ jm: "Abraham Kulka", arch: "Abraham Kulka (1841)", q: "" },
			{ jm: "Markus Kulka", arch: "Markus Kulka (1843)", q: "" },
			{ jm: "Moritz Kulka", arch: "Moritz Kulka (1846)", q: "" },
			{ jm: "Jakob Kulka", arch: "Jakob Kulka (1854)", q: "" },
			{ jm: "Augustine Kulka", arch: "Augustine Kulka (1851)", q: "" },
			{ jm: "Thesia Steiner", arch: "Resi Steiner (1820)", q: "" },
			{ jm: "Gerson Steiner", arch: "Gerson Steiner (1846–1894)", q: "" },
			{ jm: "David Steiner", arch: "Adolf Steiner (1854)", q: "" },
			{ jm: "Netty Steiner", arch: "Netti Steiner (1851)", q: "" },
			{ jm: "Ernestine Steiner", arch: "Ernestine Steiner (1852–1937)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "X",
		pocet: "17",
		obyv: [
			{ jm: "Moses Vogel", arch: "Moses Vogel (1824)", q: "" },
			{ jm: "Lea Vogel", arch: "Leni Vogel (1822–1911)", q: "" },
			{ jm: "Sali Vogel", arch: "Sali Vogel (1851)", q: "" },
			{ jm: "David Vogel", arch: "David Vogel (1853–1923)", q: "" },
			{ jm: "Rosa Vogel", arch: "Resi Vogel (1854)", q: "" },
			{ jm: "Emanuel Vogel", arch: "Emanuel Vogel (1859)", q: "" },
			{ jm: "Charlotte Vogel", arch: "Charlotte Löschner (1861)", q: "" },
			{ jm: "Rachel Steiner", arch: "Resi Steiner (1820)", q: "" },
			{ jm: "Gerson Steiner", arch: "Gerson Steiner (1846–1894)", q: "" },
			{ jm: "Ernestine Steiner", arch: "Ernestine Steiner (1852–1937)", q: "" },
			{ jm: "David Steiner", arch: "Adolf Steiner (1854)", q: "" },
			{ jm: "Netti Steiner", arch: "Netti Steiner (1851)", q: "" },
			{ jm: "Israel Kulka", arch: "Israel Kulka (1814–1871)", q: "" },
			{ jm: "Rosa Kulka", arch: "Rosa Kulka (1814)", q: "" },
			{ jm: "Augustine Kulka", arch: "Augustine Kulka (1851)", q: "" },
			{ jm: "Jakob Kulka", arch: "Jakob Kulka (1854)", q: "" },
			{ jm: "Isak Kulka", arch: "Ignatz Kulka (1858–1933)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "X",
		pocet: "11",
		obyv: [
			{ jm: "Moses Vogel", arch: "Moses Vogel (1824)", q: "" },
			{ jm: "Leni Vogel", arch: "Leni Vogel (1822–1911)", q: "" },
			{ jm: "David Vogel", arch: "David Vogel (1853–1923)", q: "" },
			{ jm: "Charlotte Vogel", arch: "Charlotte Löschner (1861)", q: "" },
			{ jm: "Salomon Hessinger", arch: "Salomon Hessinger (1820)", q: "" },
			{ jm: "Resi Hessinger geb. Bauer", arch: "Resi Hessinger (1827)", q: "" },
			{ jm: "Isidor Hessinger", arch: "Isidor Hessinger (1866)", q: "" },
			{ jm: "Julie Hessinger", arch: "Julie Hessinger (1861)", q: "" },
			{ jm: "Resi Steiner", arch: "Resi Steiner (1820)", q: "" },
			{ jm: "David Steiner", arch: "Adolf Steiner (1854)", q: "" },
			{ jm: "Ernestine Steiner", arch: "Ernestine Steiner (1852–1937)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "X",
		pocet: "7",
		obyv: [
			{ jm: "Moses Vogel", arch: "Moses Vogel (1824)", q: "" },
			{ jm: "Leni Vogel", arch: "Leni Vogel (1822–1911)", q: "" },
			{ jm: "Charlotte Vogel", arch: "Charlotte Löschner (1861)", q: "" },
			{ jm: "Fanni Schindler", arch: "Fanny Schindler (1827)", q: "" },
			{ jm: "Amalie Schindler", arch: "Amalie Schindler (1861)", q: "" },
			{ jm: "Adolf Steiner", arch: "Adolf Steiner (1854)", q: "" },
			{ jm: "Ernestine Steiner", arch: "Ernestine Steiner (1852–1937)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "X",
		pocet: "8",
		obyv: [
			{ jm: "Moses Vogel", arch: "Moses Vogel (1824)", q: "" },
			{ jm: "Leni Vogel", arch: "Leni Vogel (1822–1911)", q: "" },
			{ jm: "Simon Borger", arch: "Simon Borger (1838)", q: "" },
			{ jm: "Katy Borger", arch: "Kati Borger (1838–1920)", q: "" },
			{ jm: "Fany Borger", arch: "Fani Borger (1875–1932)", q: "" },
			{ jm: "Josef Goldberger", arch: "Josef Goldberger (1889)", q: "" },
			{ jm: "Ernestine Steiner", arch: "Ernestine Steiner (1852–1937)", q: "" },
			{ jm: "Isidor Goldberger", arch: "Isidor Goldberger (1889)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "X",
		pocet: "4",
		obyv: [
			{ jm: "Leni Vogel", arch: "Leni Vogel (1822–1911)", q: "" },
			{ jm: "Ernestine Steiner", arch: "Ernestine Steiner (1852–1937)", q: "" },
			{ jm: "Julie Perl", arch: "Julie Perl (1856)", q: "" },
			{ jm: "Selma Perl", arch: "Selma Perl (1884)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XI",
		pocet: "20",
		obyv: [
			{ jm: "Aron Lichnowsky", arch: "Aron Lichnowsky (1790)", q: "" },
			{ jm: "Marianna Lichnowsky", arch: "Marianna Lichnowsky (1829)", q: "" },
			{ jm: "Jully Lichnowsky", arch: "Julie Lichnofsky (1832)", q: "" },
			{ jm: "Herrmann Reininger", arch: "Herrman Reiniger (1824–1897)", q: "" },
			{ jm: "Moises Vogel", arch: "Moses Vogel (1824)", q: "" },
			{ jm: "Leny Vogel", arch: "Leni Vogel (1822–1911)", q: "" },
			{ jm: "David Vogel", arch: "David Vogel (1853–1923)", q: "" },
			{ jm: "Jakob Vogel", arch: "Jakob Vogel (1857)", q: "" },
			{ jm: "Saly Vogel", arch: "Sali Vogel (1851)", q: "" },
			{ jm: "Resi Vogel", arch: "Resi Vogel (1854)", q: "" },
			{ jm: "Mendel Morgenstern", arch: "Emanuel Mendel Morgenstern (1786)", q: "" },
			{ jm: "Katharina Morgenstern", arch: "Katharina Morgenstern (1827)", q: "" },
			{ jm: "Babete Morgenstern", arch: "Babete Morgenstern (1834)", q: "" },
			{ jm: "Jakob Schindler", arch: "Jakob Schindler (1802)", q: "" },
			{ jm: "Katarina Schindler", arch: "Katarina Schindler (1810)", q: "" },
			{ jm: "Gerson Schindler", arch: "Gerson Schindler (1843)", q: "" },
			{ jm: "Israel Schindler", arch: "Israel Schindler (1845)", q: "" },
			{ jm: "Sara Schindler", arch: "Sara Schindler (1840)", q: "" },
			{ jm: "Marie Schindler", arch: "Marie Schindler (1841)", q: "" },
			{ jm: "Fanny Schindler", arch: "Fani Schindler (1848)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XI",
		pocet: "19",
		obyv: [
			{ jm: "Rosi Urban", arch: "Resi Urban (1827)", q: "" },
			{ jm: "Alois Urban", arch: "Alois Urban (1856)", q: "" },
			{ jm: "Sigmund Urban", arch: "Sigmund Urban (1857–1931)", q: "" },
			{ jm: "Jakob Urban", arch: "Jakob Urban (1861)", q: "" },
			{ jm: "Hanni Urban", arch: "Hani Urban (1866)", q: "" },
			{ jm: "Josefa Vogel", arch: "Josefa Vogel (1813)", q: "" },
			{ jm: "Moritz Lamm", arch: "Moritz Lamm (1859–1942)", q: "Q105641908" },
			{ jm: "Julie Lichnowski", arch: "Julie Lichnofsky (1832)", q: "" },
			{ jm: "Anna Wolf", arch: "Anna Wolf (1806)", q: "" },
			{ jm: "Karolina Wolf", arch: "Karoline Wolf (1846)", q: "" },
			{ jm: "Aron Adler", arch: "Aron Adler (1836)", q: "" },
			{ jm: "Hanni Adler", arch: "Hanni Adler (1834)", q: "" },
			{ jm: "Max Adler", arch: "Max Adler (1863–1943)", q: "" },
			{ jm: "Julius Adler", arch: "Julius Adler (1865–xxx1)", q: "" },
			{ jm: "Mina Adler", arch: "Minna Adler (1868)", q: "" },
			{ jm: "Jakob Schindler", arch: "Jakob Schindler (1802)", q: "" },
			{ jm: "Katarina Schindler", arch: "Katarina Schindler (1810)", q: "" },
			{ jm: "Fanni Schindler", arch: "Fani Schindler (1848)", q: "" },
			{ jm: "Rosa Schüler", arch: "Rosa Schüler (1865)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XI",
		pocet: "12",
		obyv: [
			{ jm: "Isak Morgenstern", arch: "Isak Morgenstern (1829)", q: "" },
			{ jm: "Hani Morgenstern", arch: "Hani Morgenstern (1829)", q: "" },
			{ jm: "Ludwig Morgenstern", arch: "Ludwig Morgenstern (1868)", q: "Q105469783" },
			{ jm: "Jakob Morgenstern", arch: "Jakob Morgenstern (1869)", q: "" },
			{ jm: "Samuel Morgenstern", arch: "Samuel Morgenstern (1878–xxx1)", q: "Q105565230" },
			{ jm: "Sali Morgenstern", arch: "Sali Morgenstern (1862)", q: "" },
			{ jm: "Karoline Morgenstern", arch: "Karoline Morgenstern (1866)", q: "" },
			{ jm: "Rosa Morgenstern", arch: "Rosa Morgenstern (1873)", q: "" },
			{ jm: "Richard Reich", arch: "Richard Reich (1861)", q: "" },
			{ jm: "Jakob Schindler", arch: "Jakob Schindler (1802)", q: "" },
			{ jm: "Katarina Schindler", arch: "Katarina Schindler (1810)", q: "" },
			{ jm: "Fani Schindler", arch: "Fani Schindler (1848)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XI",
		pocet: "9",
		obyv: [
			{ jm: "Isak Morgenstern", arch: "Isak Morgenstern (1829)", q: "" },
			{ jm: "Hany Morgenstern geb. Frisch", arch: "Hani Morgenstern (1829)", q: "" },
			{ jm: "Rosa Morgenstern", arch: "Rosa Morgenstern (1873)", q: "" },
			{ jm: "Samuel Morgenstern", arch: "Samuel Morgenstern (1878–xxx1)", q: "Q105565230" },
			{ jm: "Tobias Buchsbaum", arch: "Tobias Buchsbaum (1851)", q: "Q104422562" },
			{ jm: "Soffi Buchsbaum", arch: "Sofie Buchsbaum (1847–1921)", q: "" },
			{ jm: "Regina Buchsbaum", arch: "Regina Morgenstern (1884)", q: "Q105565226" },
			{ jm: "Hedwig Buchsbaum", arch: "Hedwig Buchsbaum (1887)", q: "" },
			{ jm: "Jacob Schindler", arch: "Jakob Schindler (1802)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XI",
		pocet: "17",
		obyv: [
			{ jm: "Isak Morgenstern", arch: "Isak Morgenstern (1829)", q: "" },
			{ jm: "Hanny Morgenstern", arch: "Hani Morgenstern (1829)", q: "" },
			{ jm: "Julie Perl", arch: "Julie Perl (1856)", q: "" },
			{ jm: "Ida Braun", arch: "Ida Braun (1888–xxx1)", q: "" },
			{ jm: "Adolf Baron", arch: "Adolf Baron (1865–1941)", q: "" },
			{ jm: "Bertha Baron", arch: "Bertha Baron (1869–1907)", q: "" },
			{ jm: "Sigmund Baron", arch: "Sigmund Baron (1883–1903)", q: "" },
			{ jm: "Nathan Baron", arch: "Nathan Baron (1900–1926)", q: "" },
			{ jm: "Leopoldine Hersch", arch: "Leopoldine Schmeidler (1897)", q: "" },
			{ jm: "Sigmund Jellinek", arch: "Sigmund Jellinek (1857)", q: "Q104808538" },
			{ jm: "Berta Jellinek geb. Schafer", arch: "Berta Jellinek (1858)", q: "" },
			{ jm: "Gisela Jellinek", arch: "Gisela Jellinek (1885)", q: "" },
			{ jm: "Hugo Jellinek", arch: "Hugo Jellinek (1888)", q: "Q104811792" },
			{ jm: "Sigfried Jellinek", arch: "Sigfried Jellinek (1891)", q: "" },
			{ jm: "Carl Jellinek", arch: "Carl Jellinek (1894)", q: "" },
			{ jm: "Anna Jellinek", arch: "Anna Jellinek (1898)", q: "" },
			{ jm: "Max Jellinek", arch: "Max Jellinek (1899)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XI",
		pocet: "9",
		obyv: [
			{ jm: "Katti Borger", arch: "Kati Borger (1838–1920)", q: "" },
			{ jm: "Fanni Borger", arch: "Fani Borger (1875–1932)", q: "" },
			{ jm: "Sigmund Urban", arch: "Sigmund Urban (1857–1931)", q: "" },
			{ jm: "Johanna Urban", arch: "Hany Urban (1853–1931)", q: "" },
			{ jm: "Hermann Urban", arch: "Hermann Urban (1905)", q: "" },
			{ jm: "Samuel Urban", arch: "Samuel Urban (1902)", q: "Q105616096" },
			{ jm: "Eduard Urban", arch: "Eduard Urban (1904)", q: "" },
			{ jm: "Theodor Langfelder", arch: "Theodor Langfelder (1896)", q: "" },
			{ jm: "Leopold Goldberger", arch: "Leopold Goldberger (1895–1942)", q: "Q104676989" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XII",
		pocet: "13",
		obyv: [
			{ jm: "Moises Urban", arch: "Moses Urban (1807)", q: "" },
			{ jm: "Louise Urban", arch: "Louise Urban (1812)", q: "" },
			{ jm: "Tobias Urban", arch: "Tobias Urban (1836)", q: "" },
			{ jm: "Karl Urban", arch: "Karl Urban (1846)", q: "" },
			{ jm: "Thekla Urban", arch: "Thekla Urban (1835)", q: "" },
			{ jm: "Babet Urban", arch: "Babeth Urban (1837)", q: "" },
			{ jm: "Fanny Urban", arch: "Fani Steiner (1842–1930)", q: "" },
			{ jm: "Schanet Urban", arch: "Schanet Urban (1848)", q: "" },
			{ jm: "Barbara Morgenstern", arch: "Barbara Morgenstern (1797)", q: "" },
			{ jm: "David Morgenstern", arch: "David Morgenstern (1828–1904)", q: "" },
			{ jm: "Samuel Morgenstern", arch: "Samuel Morgenstern (1831)", q: "" },
			{ jm: "Katty Morgenstern", arch: "Katty Morgenstern (1842)", q: "" },
			{ jm: "Moises Wolf Lippa", arch: "Moises Wolf Lippa (1801)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XII",
		pocet: "13",
		obyv: [
			{ jm: "Louise Urban", arch: "Louise Urban (1812)", q: "" },
			{ jm: "Jouenett Urban", arch: "Schanet Urban (1848)", q: "" },
			{ jm: "Tobias Urban", arch: "Tobias Urban (1836)", q: "" },
			{ jm: "Israel Jakob Altmann", arch: "Israel Jakob Altmann (1850)", q: "" },
			{ jm: "Albert Dawidowitsch", arch: "Albert Dawidowitsch (1852)", q: "" },
			{ jm: "Fanni Morgenstern", arch: "Barbara Morgenstern (1797)", q: "" },
			{ jm: "Samuel Morgenstern", arch: "Samuel Morgenstern (1831)", q: "" },
			{ jm: "Kati Morgenstern", arch: "Katty Morgenstern (1842)", q: "" },
			{ jm: "Lazar Haas", arch: "Lazar Haas (1837)", q: "" },
			{ jm: "David Morgenstern", arch: "David Morgenstern (1828–1904)", q: "" },
			{ jm: "Cäcilie Morgenstern", arch: "Cecilie Morgenstern (1834)", q: "" },
			{ jm: "Adolf Morgenstern", arch: "Abraham Morgenstern (1869)", q: "Q105565113" },
			{ jm: "Josef Hofmann", arch: "Josef Hofmann (1860–xxx1)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XII",
		pocet: "17",
		obyv: [
			{ jm: "Moses Urban", arch: "Moses Urban (1807)", q: "" },
			{ jm: "Louise Urban", arch: "Louise Urban (1812)", q: "" },
			{ jm: "Fani Steiner", arch: "Fani Steiner (1842–1930)", q: "" },
			{ jm: "Alois Steiner", arch: "Alois Steiner (1874)", q: "Q105607594" },
			{ jm: "Samuel Steiner", arch: "Theodor Steiner (1876)", q: "" },
			{ jm: "Simon Borger", arch: "Simon Borger (1838)", q: "" },
			{ jm: "Kati Borger", arch: "Kati Borger (1838–1920)", q: "" },
			{ jm: "Markus Borger", arch: "Markus Borger (1865)", q: "" },
			{ jm: "Marie Borger", arch: "Marie Borger (1870)", q: "" },
			{ jm: "Fani Borger", arch: "Fani Borger (1875–1932)", q: "" },
			{ jm: "Sali Borger", arch: "Sali Borger (1877)", q: "" },
			{ jm: "Charlote Borger", arch: "Charlote Borger (1879)", q: "" },
			{ jm: "David Morgenstern", arch: "David Morgenstern (1828–1904)", q: "" },
			{ jm: "Cecilie Morgenstern", arch: "Cecilie Morgenstern (1834)", q: "" },
			{ jm: "Abraham Morgenstern", arch: "Abraham Morgenstern (1869)", q: "Q105565113" },
			{ jm: "Friederike Morgenstern", arch: "Friederike Morgenstern (1879)", q: "" },
			{ jm: "Adolf Blitz", arch: "Adolf Blitz (1867)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XII",
		pocet: "13",
		obyv: [
			{ jm: "Aloisia Urban", arch: "Louise Urban (1812)", q: "" },
			{ jm: "Chiel Rosenbaum", arch: "Chiel Rosenbaum (1861–1922)", q: "" },
			{ jm: "Perel Rosenbaum", arch: "Perel Rosenbaum (1865–1937)", q: "" },
			{ jm: "David Rosenbaum", arch: "David Rosenbaum (1888)", q: "Q105580319" },
			{ jm: "Szaje Borger", arch: "Simon Borger (1838)", q: "" },
			{ jm: "Katti Borger", arch: "Kati Borger (1838–1920)", q: "" },
			{ jm: "Fani Borger", arch: "Fani Borger (1875–1932)", q: "" },
			{ jm: "Sali Borger", arch: "Sali Borger (1877)", q: "" },
			{ jm: "Jenni Borger", arch: "Jenni Borger (1879)", q: "" },
			{ jm: "David Morgenstern", arch: "David Morgenstern (1828–1904)", q: "" },
			{ jm: "Cili Morgenstern", arch: "Cecilie Morgenstern (1834)", q: "" },
			{ jm: "Friederike Morgenstern", arch: "Friederike Morgenstern (1879)", q: "" },
			{ jm: "Jetti Morgenstern", arch: "Jetti Morgenstern (1879)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XII",
		pocet: "2",
		obyv: [
			{ jm: "David Morgenstern", arch: "David Morgenstern (1828–1904)", q: "" },
			{ jm: "Cäcilie Morgenstern", arch: "Cecilie Morgenstern (1834)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XIII",
		pocet: "19",
		obyv: [
			{ jm: "Josef Neumann", arch: "Josef Neumann (1803)", q: "" },
			{ jm: "Filipp Auerhan", arch: "Filipp Auerhan (1785)", q: "" },
			{ jm: "Resel Auerhan", arch: "Resel Auerhan (1779)", q: "" },
			{ jm: "David Wolf", arch: "David Wolf (1801)", q: "" },
			{ jm: "Hanny Wolf", arch: "Hani Wolf (1810)", q: "" },
			{ jm: "Rebeka Fischer", arch: "Rebeka Fischer (1812)", q: "" },
			{ jm: "Moritz Fischer", arch: "Moritz Fischer (1847)", q: "" },
			{ jm: "Sara Fischer", arch: "Sara Fischer (1845)", q: "" },
			{ jm: "Franziska Mandel", arch: "Franziska Mandel (1833)", q: "" },
			{ jm: "Sally Mandel", arch: "Sally Mandel (1831)", q: "" },
			{ jm: "Theresia Urban", arch: "Theresia Urban (1786)", q: "" },
			{ jm: "Moritz Riesenfeld", arch: "Moritz Riesenfeld (1813)", q: "" },
			{ jm: "Marie Riesenfeld", arch: "Marie Riesenfeld (1819)", q: "" },
			{ jm: "Alois Riesenfeld", arch: "Alois Riesenfeld (1848–1923)", q: "" },
			{ jm: "Leopold Riesenfeld", arch: "Leopold Riesenfeld (1851)", q: "" },
			{ jm: "Sigmund Riesenfeld", arch: "Sigmund Riesenfeld (1852)", q: "" },
			{ jm: "Herrmann Riesenfeld", arch: "Herrmann Riesenfeld (1855)", q: "" },
			{ jm: "Filippine Riesenfeld", arch: "Filippine Riesenfeld (1857)", q: "" },
			{ jm: "Karoline Schwarz", arch: "Karoline Schwarz (1834)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XIII",
		pocet: "11",
		obyv: [
			{ jm: "Josef Neumann", arch: "Josef Neumann (1803)", q: "" },
			{ jm: "David Wolf", arch: "David Wolf (1801)", q: "" },
			{ jm: "Hanni Wolf", arch: "Hani Wolf (1810)", q: "" },
			{ jm: "Emanuel Morgenstern", arch: "Emanuel Morgenstern (1803)", q: "" },
			{ jm: "Debora Morgenstern", arch: "Debora Morgenstern (1819)", q: "" },
			{ jm: "Michael Morgenstern", arch: "Michael Morgenstern (1839)", q: "" },
			{ jm: "Markus Riesenfeld", arch: "Moritz Riesenfeld (1813)", q: "" },
			{ jm: "Marie Riesenfeld", arch: "Marie Riesenfeld (1819)", q: "" },
			{ jm: "Filipine Riesenfeld", arch: "Filippine Riesenfeld (1857)", q: "" },
			{ jm: "Rösi Riesenfeld", arch: "Rösi Riesenfeld (1858)", q: "" },
			{ jm: "Regina Riesenfeld", arch: "Regina Riesenfeld (1861)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XIII",
		pocet: "10",
		obyv: [
			{ jm: "David Wolf", arch: "David Wolf (1801)", q: "" },
			{ jm: "Hani Wolf", arch: "Hani Wolf (1810)", q: "" },
			{ jm: "Josef Neumann", arch: "Josef Neumann (1803)", q: "" },
			{ jm: "Sali Neumann", arch: "Sali Neumann (1835)", q: "" },
			{ jm: "Bertha Hertschka", arch: "Bertha Hertschka (1864)", q: "" },
			{ jm: "Herrman Reiniger", arch: "Herrman Reiniger (1824–1897)", q: "" },
			{ jm: "Marie Reiniger", arch: "Marie Reiniger (1830)", q: "" },
			{ jm: "Salomon Reiniger", arch: "Salomon Reiniger (1869)", q: "" },
			{ jm: "Minna Reiniger", arch: "Minna Reiniger (1861)", q: "" },
			{ jm: "Julie Lichnofsky", arch: "Julie Lichnofsky (1832)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XIII",
		pocet: "4",
		obyv: [
			{ jm: "Fani Steiner geb. Urban", arch: "Fani Steiner (1842–1930)", q: "" },
			{ jm: "Alois Steiner", arch: "Alois Steiner (1874)", q: "Q105607594" },
			{ jm: "Theodor Steiner", arch: "Theodor Steiner (1876)", q: "" },
			{ jm: "Johanna Urban", arch: "Johanna Urban (1870)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XIII",
		pocet: "9",
		obyv: [
			{ jm: "Chiel Rosenbaum", arch: "Chiel Rosenbaum (1861–1922)", q: "" },
			{ jm: "Perl Rosenbaum", arch: "Perel Rosenbaum (1865–1937)", q: "" },
			{ jm: "David Rosenbaum", arch: "David Rosenbaum (1888)", q: "Q105580319" },
			{ jm: "Karl Rosenbaum", arch: "Karl Rosenbaum (1892)", q: "" },
			{ jm: "David Apter", arch: "David Apter (1860)", q: "" },
			{ jm: "Fanny Steiner", arch: "Fani Steiner (1842–1930)", q: "" },
			{ jm: "Alois Steiner", arch: "Alois Steiner (1874)", q: "Q105607594" },
			{ jm: "Samuel Vogel", arch: "Samuel Vogel (1836)", q: "" },
			{ jm: "Resie Vogel", arch: "Resi Vogel (1840)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XIV",
		pocet: "10",
		obyv: [
			{ jm: "Josef Singer", arch: "Josef Singer (1820–1899)", q: "" },
			{ jm: "Lotty Singer", arch: "Lotti Singer (1820–1888)", q: "" },
			{ jm: "Abraham Singer", arch: "Adolf Singer (1854–1891)", q: "" },
			{ jm: "Theresia Singer", arch: "Theresia Singer (1853)", q: "" },
			{ jm: "Ernestine Singer", arch: "Ernestine Singer (1857)", q: "" },
			{ jm: "David Gutwein", arch: "David Gutwein (1822)", q: "" },
			{ jm: "Netti Hirsch", arch: "Netti Hirsch (1839)", q: "" },
			{ jm: "Bernhard Fischer", arch: "Bernhard Fischer (1830)", q: "" },
			{ jm: "Sally Fischer", arch: "Sally Fischer (1829)", q: "" },
			{ jm: "Jetti Wolf", arch: "Pepi Wolf (1799)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XIV",
		pocet: "14",
		obyv: [
			{ jm: "Bernhard Fischer", arch: "Bernhard Fischer (1830)", q: "" },
			{ jm: "Sali Fischer", arch: "Sally Fischer (1829)", q: "" },
			{ jm: "Leopold Fischer", arch: "Leopold Fischer (1858–1919)", q: "" },
			{ jm: "Sigmund Fischer", arch: "Sigmund Fischer (1860)", q: "" },
			{ jm: "Berta Fischer", arch: "Bertha Fischer (1862)", q: "" },
			{ jm: "Peppi Wolf", arch: "Pepi Wolf (1799)", q: "" },
			{ jm: "Josef Singer", arch: "Josef Singer (1820–1899)", q: "" },
			{ jm: "Lotti Singer", arch: "Lotti Singer (1820–1888)", q: "" },
			{ jm: "Theresia Singer", arch: "Theresia Singer (1853)", q: "" },
			{ jm: "Abraham Singer", arch: "Adolf Singer (1854–1891)", q: "" },
			{ jm: "Ernestine Singer", arch: "Ernestine Singer (1857)", q: "" },
			{ jm: "Rosalia Singer", arch: "Rosalia Singer (1858)", q: "" },
			{ jm: "Hanni Singer", arch: "Johanna Bellak (1861)", q: "" },
			{ jm: "Heinrich Singer", arch: "Heinrich Singer (1864)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XIV",
		pocet: "8",
		obyv: [
			{ jm: "Josef Singer", arch: "Josef Singer (1820–1899)", q: "" },
			{ jm: "Lotti Singer", arch: "Lotti Singer (1820–1888)", q: "" },
			{ jm: "Adolf Singer", arch: "Adolf Singer (1854–1891)", q: "" },
			{ jm: "Hani Singer", arch: "Johanna Bellak (1861)", q: "" },
			{ jm: "Leopold Fischer", arch: "Leopold Fischer (1858–1919)", q: "" },
			{ jm: "Sigmund Fischer", arch: "Sigmund Fischer (1860)", q: "" },
			{ jm: "Bertha Fischer", arch: "Bertha Fischer (1862)", q: "" },
			{ jm: "Pepi Wolf", arch: "Pepi Wolf (1799)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XIV",
		pocet: "5",
		obyv: [
			{ jm: "Josef Singer", arch: "Josef Singer (1820–1899)", q: "" },
			{ jm: "Heinrich Singer", arch: "Heinrich Singer (1864)", q: "" },
			{ jm: "Johanna Bellak", arch: "Johanna Bellak (1861)", q: "" },
			{ jm: "Jacob Zwillinger", arch: "Jakob Zwillinger (1875)", q: "" },
			{ jm: "Sigmund Fischer", arch: "Sigmund Fischer (1860)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XIV",
		pocet: "5",
		obyv: [
			{ jm: "Sigmund Fischer", arch: "Sigmund Fischer (1860)", q: "" },
			{ jm: "Tobias Buchsbaum", arch: "Tobias Buchsbaum (1851)", q: "Q104422562" },
			{ jm: "Sofie Buchsbaum", arch: "Sofie Buchsbaum (1847–1921)", q: "" },
			{ jm: "Hedwig Buchsbaum", arch: "Hedwig Buchsbaum (1887)", q: "" },
			{ jm: "Adolf Neubroch", arch: "Adolf Neubroch (1884)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XIV",
		pocet: "6",
		obyv: [
			{ jm: "Tobias Buchsbaum", arch: "Tobias Buchsbaum (1851)", q: "Q104422562" },
			{ jm: "Sophie Buchsbaum", arch: "Sofie Buchsbaum (1847–1921)", q: "" },
			{ jm: "Marton Eibenschütz", arch: "Martin Eibenschütz (1888)", q: "Q104448833" },
			{ jm: "Viktor Lampl", arch: "Viktor Lampl (1887)", q: "" },
			{ jm: "Rudolf Luft", arch: "Rudolf Luft (1883)", q: "" },
			{ jm: "Josef Kulka", arch: "Josef Kulka (1896)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XIX",
		pocet: "6",
		obyv: [
			{ jm: "Jakob Czerkowitsch", arch: "Jakob Zerkowitz (1819)", q: "" },
			{ jm: "David Czerkowitsch", arch: "David Czerkowitsch (1848)", q: "" },
			{ jm: "Emanuel Singer", arch: "Emanuel Singer (1793)", q: "" },
			{ jm: "Amalia Singer", arch: "Amalia Singer (1810)", q: "" },
			{ jm: "Wolf Singer", arch: "Wolf Singer (1829)", q: "" },
			{ jm: "Josef Singer", arch: "Josef Singer (1836–1921)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XIX",
		pocet: "4",
		obyv: [
			{ jm: "Josef Goldstein", arch: "Josef Goldstein (1819)", q: "" },
			{ jm: "Hanni Goldstein", arch: "Hanni Goldstein (1827)", q: "" },
			{ jm: "Karl Goldstein", arch: "Karl Goldstein (1858–1938)", q: "" },
			{ jm: "Charlotti Klein", arch: "Charlotte Klein (1821)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XIX",
		pocet: "4",
		obyv: [
			{ jm: "Josef Goldstein", arch: "Josef Goldstein (1819)", q: "" },
			{ jm: "Hanni Goldstein", arch: "Hanni Goldstein (1827)", q: "" },
			{ jm: "Karl Goldstein", arch: "Karl Goldstein (1858–1938)", q: "" },
			{ jm: "Charlotte Klein", arch: "Charlotte Klein (1821)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XIX",
		pocet: "4",
		obyv: [
			{ jm: "Josef Goldstein", arch: "Josef Goldstein (1819)", q: "" },
			{ jm: "Goldstein", arch: "Hanni Goldstein (1827)", q: "" },
			{ jm: "Karl Goldstein", arch: "Karl Goldstein (1858–1938)", q: "" },
			{ jm: "Charlotte Klein", arch: "Charlotte Klein (1821)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XV",
		pocet: "6",
		obyv: [
			{ jm: "Samuel Klein", arch: "Samuel Klein (1806)", q: "" },
			{ jm: "Amalia Klein", arch: "Amalia Klein (1809)", q: "" },
			{ jm: "Nathan Klein", arch: "Nathan Klein (1838)", q: "" },
			{ jm: "Moises Klein", arch: "Moritz Klein (1840–1916)", q: "" },
			{ jm: "Heinrich Klein", arch: "Heinrich Klein (1850)", q: "" },
			{ jm: "Sally Klein", arch: "Sally Klein (1842)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XV",
		pocet: "6",
		obyv: [
			{ jm: "Dr. Moritz Deutsch", arch: "Moritz Deutsch (1834–1897)", q: "" },
			{ jm: "Karoline Deutsch", arch: "Karoline Deutsch (1845)", q: "" },
			{ jm: "Jakob Deutsch", arch: "Jakob Deutsch (1865)", q: "" },
			{ jm: "Wilhelm Deutsch", arch: "Wilhelm Deutsch (1869)", q: "" },
			{ jm: "Regine Deutsch", arch: "Regine Deutsch (1847)", q: "" },
			{ jm: "Karoline Vogel", arch: "Karoline Vogel (1851)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XV",
		pocet: "4",
		obyv: [
			{ jm: "Moritz Deutsch", arch: "Moritz Deutsch (1834–1897)", q: "" },
			{ jm: "Karoline Deutsch", arch: "Karoline Deutsch (1845)", q: "" },
			{ jm: "Jakob Deutsch", arch: "Jakob Deutsch (1865)", q: "" },
			{ jm: "Selma Deutsch", arch: "Selma Deutsch (1871)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XV",
		pocet: "3",
		obyv: [
			{ jm: "Isaias Stix", arch: "Isaias Stix (1828–1895)", q: "" },
			{ jm: "Lina Stix", arch: "Lina Stix (1854–1922)", q: "" },
			{ jm: "Julius Stix", arch: "Julius Stix (1866–1942)", q: "Q105610310" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XV",
		pocet: "6",
		obyv: [
			{ jm: "Josef Reichmann", arch: "Josef Reichmann (1863–1918)", q: "" },
			{ jm: "Justine Reichmann", arch: "Justine Hindls (1870–1927)", q: "" },
			{ jm: "Richard Bloch", arch: "Richard Erwin Bloch (1882)", q: "" },
			{ jm: "Phil. Dr. Jakob Rabbinowicz", arch: "Jakob Rabbinowicz (1863–1947)", q: "Q61750894" },
			{ jm: "Sara Rabbinowicz", arch: "Sara Rabbinowicz (1866–1933)", q: "" },
			{ jm: "Alexander Rabbinowicz", arch: "Alexander Rabbinowicz (1895)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XV",
		pocet: "4",
		obyv: [
			{ jm: "Sophie Kurz", arch: "Sofie Kurz (1844–1919)", q: "" },
			{ jm: "Dr. Jakob Rabbinowicz", arch: "Jakob Rabbinowicz (1863–1947)", q: "Q61750894" },
			{ jm: "Sara Rabbinowicz geb. Friedmann", arch: "Sara Rabbinowicz (1866–1933)", q: "" },
			{ jm: "Alexander Rabbinowicz", arch: "Alexander Rabbinowicz (1895)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XVI",
		pocet: "9",
		obyv: [
			{ jm: "Josef Berger", arch: "Josef Berger (1804)", q: "" },
			{ jm: "Fanny Berger", arch: "Fanny Berger (1810)", q: "" },
			{ jm: "Samuel Berger", arch: "Samuel Berger (1848–1927)", q: "" },
			{ jm: "Seligmann Berger", arch: "Seligmann Berger (1857)", q: "" },
			{ jm: "Fanny Berger", arch: "Fanny Berger (1850)", q: "" },
			{ jm: "Sara Berger", arch: "Rosalia Frisch (1851)", q: "" },
			{ jm: "Juda Steiner", arch: "Juda Steiner (1811)", q: "" },
			{ jm: "Amalia Hirsch", arch: "Amalia Hirsch (1802)", q: "" },
			{ jm: "Ernestine Hirsch", arch: "Ernestine Hirsch (1842)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XVI",
		pocet: "15",
		obyv: [
			{ jm: "Hermann Reiniger", arch: "Herrman Reiniger (1824–1897)", q: "" },
			{ jm: "Marie Reiniger", arch: "Marie Reiniger (1830)", q: "" },
			{ jm: "Isaias Reiniger", arch: "Isidor Reiniger (1863)", q: "" },
			{ jm: "Anna Reiniger", arch: "Minna Reiniger (1861)", q: "" },
			{ jm: "Adolf Reiniger", arch: "Adolf Reiniger (1865)", q: "" },
			{ jm: "Samuel Reiniger", arch: "Salomon Reiniger (1869)", q: "" },
			{ jm: "Hanni Reiniger", arch: "Hanni Reiniger (1817)", q: "" },
			{ jm: "Isak Morgenstern", arch: "Isak Morgenstern (1829)", q: "" },
			{ jm: "Hanni Morgenstern", arch: "Hani Morgenstern (1829)", q: "" },
			{ jm: "Julie Morgenstern", arch: "Julie Perl (1856)", q: "" },
			{ jm: "Alois Morgenstern", arch: "Alois Morgenstern (1857)", q: "Q105469757" },
			{ jm: "Sali Morgenstern", arch: "Sali Morgenstern (1862)", q: "" },
			{ jm: "Kati Morgenstern", arch: "Karoline Morgenstern (1866)", q: "" },
			{ jm: "Ludwig Morgenstern", arch: "Ludwig Morgenstern (1868)", q: "Q105469783" },
			{ jm: "Jakob Morgenstern", arch: "Jakob Morgenstern (1869)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XVI",
		pocet: "6",
		obyv: [
			{ jm: "Liebmann Urban", arch: "Liebmann Urban (1820)", q: "" },
			{ jm: "Resi Urban", arch: "Resi Urban (1827)", q: "" },
			{ jm: "Isidor Urban", arch: "Isidor Urban (1853)", q: "" },
			{ jm: "Alois Urban", arch: "Alois Urban (1856)", q: "" },
			{ jm: "Sigmund Urban", arch: "Sigmund Urban (1857–1931)", q: "" },
			{ jm: "Hani Urban", arch: "Hani Urban (1866)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XVI",
		pocet: "7",
		obyv: [
			{ jm: "Herman Weiss", arch: "Hermann Weiss (1858)", q: "" },
			{ jm: "Cäcilie Weiss", arch: "Cäcilie Weiss (1859)", q: "" },
			{ jm: "Rosalie Weiss", arch: "Rosalie Weiss (1884)", q: "" },
			{ jm: "Dora Weiss", arch: "Dora Weiss (1885)", q: "" },
			{ jm: "Gisela Weiss", arch: "Gisela Weiss (1886–xxx1)", q: "" },
			{ jm: "Wilhelm Weiss", arch: "Wilhelm Weiss (1888)", q: "" },
			{ jm: "Johanna Urban", arch: "Hani Urban (1866)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XVI",
		pocet: "2",
		obyv: [
			{ jm: "Julie Lamm", arch: "Julie Lamm (1857–1926)", q: "" },
			{ jm: "Eva Lamm", arch: "Eva Lamm (1855–1926)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XVI",
		pocet: "12",
		obyv: [
			{ jm: "Marie Fischer", arch: "Marie Fischer (1842–1920)", q: "" },
			{ jm: "Eugenie Liebel", arch: "Eugenie Liebel (1883)", q: "Q105556781" },
			{ jm: "Berthold Liebel", arch: "Berthold Liebel (1907)", q: "Q106871224" },
			{ jm: "Bernhard Widder", arch: "Bernhard Widder (1853–1914)", q: "" },
			{ jm: "Max Kulka", arch: "Max Kulka (1895)", q: "" },
			{ jm: "David Vogel", arch: "David Vogel (1853–1923)", q: "" },
			{ jm: "Ernestine Vogel", arch: "Ernestine Vogel (1864–1942)", q: "Q105616337" },
			{ jm: "Marie Vogel", arch: "Marie Vogel (1891)", q: "" },
			{ jm: "Stephanie Vogel", arch: "Stephanie Vogel (1901)", q: "" },
			{ jm: "Arthur Vogel", arch: "Arthur Vogel (1906)", q: "" },
			{ jm: "Julie Lamm", arch: "Julie Lamm (1857–1926)", q: "" },
			{ jm: "Eva Lamm", arch: "Eva Lamm (1855–1926)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XVII",
		pocet: "22",
		obyv: [
			{ jm: "Lasar Siebenschein", arch: "Lazar Siebenschein (1808)", q: "" },
			{ jm: "Veronika Reich", arch: "Veronika Reich (1837)", q: "" },
			{ jm: "Pauline Reich", arch: "Pauline Reich (1843)", q: "" },
			{ jm: "Karoline Morgenstern", arch: "Karoline Morgenstern (1813)", q: "" },
			{ jm: "David Morgenstern", arch: "David Morgenstern (1848)", q: "" },
			{ jm: "Sara Morgenstern", arch: "Sara Morgenstern (1834)", q: "" },
			{ jm: "Netty Morgenstern", arch: "Netty Morgenstern (1842)", q: "" },
			{ jm: "Abraham Kober", arch: "Abraham Kober (1794)", q: "" },
			{ jm: "Fanny Kober", arch: "Fanny Kober (1808)", q: "" },
			{ jm: "Josef Kober", arch: "Josef Kober (1824)", q: "" },
			{ jm: "Samuel Kober", arch: "Samuel Kober (1838–1925)", q: "" },
			{ jm: "Simon Kober", arch: "Simon Kober (1840)", q: "" },
			{ jm: "Julie Kober", arch: "Julie Wolf (1842)", q: "" },
			{ jm: "Jakob Pollak", arch: "Jakob Pollak (1801)", q: "" },
			{ jm: "Sara Pollak", arch: "Sara Pollak (1801)", q: "" },
			{ jm: "Nehemias Pollak", arch: "Nehemias Pollak (1840)", q: "" },
			{ jm: "Rosi Pollak", arch: "Rosalia Pollak (1833)", q: "" },
			{ jm: "Rachel Pollak", arch: "Rachel Pollak (1835)", q: "" },
			{ jm: "Betti Pollak", arch: "Betti Pollak (1838)", q: "" },
			{ jm: "Netti Pollak", arch: "Netti Pollak (1840)", q: "" },
			{ jm: "Jakob Knöpfelmacher", arch: "Jakob Knöpfelmacher (1797)", q: "" },
			{ jm: "Fanny Knöpfelmacher", arch: "Fanny Knöpfelmacher (1838)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XVII",
		pocet: "11",
		obyv: [
			{ jm: "Fanni Widder", arch: "Fanny Widder (1810)", q: "" },
			{ jm: "Hanni Widder", arch: "Anna Widder (1847)", q: "" },
			{ jm: "Karoline Morgenstern", arch: "Karoline Morgenstern (1813)", q: "" },
			{ jm: "Wolf Kulka", arch: "Wilhelm Kulka (1828–1914)", q: "" },
			{ jm: "Julie Kulka", arch: "Julie Kulka (1831)", q: "" },
			{ jm: "Rosalia Kulka", arch: "Rosalie Kulka (1858)", q: "" },
			{ jm: "Marie Kulka", arch: "Marie Kulka (1859)", q: "" },
			{ jm: "Moritz Kulka", arch: "Moritz Kulka (1860)", q: "" },
			{ jm: "Ignatz Kulka", arch: "Ignaz Kulka (1861)", q: "" },
			{ jm: "Betti Kulka", arch: "Berta Kulka (1866)", q: "" },
			{ jm: "Fanni Kulka", arch: "Fanni Plaschkes (1868)", q: "Q105573556" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XX",
		pocet: "3",
		obyv: [
			{ jm: "David Kulka", arch: "David Kulka (1822)", q: "" },
			{ jm: "Marie Kulka", arch: "Marie Kulka (1821)", q: "" },
			{ jm: "Anna Strauss", arch: "Anna Strauss (1840)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XX",
		pocet: "3",
		obyv: [
			{ jm: "David Kulka", arch: "David Kulka (1822)", q: "" },
			{ jm: "Marie Kulka", arch: "Marie Kulka (1821)", q: "" },
			{ jm: "Rosi Stross", arch: "Rosalia Stross (1852)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XX",
		pocet: "2",
		obyv: [
			{ jm: "David Kulka", arch: "David Kulka (1822)", q: "" },
			{ jm: "Marie Kulka", arch: "Marie Kulka (1821)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XX",
		pocet: "1",
		obyv: [
			{ jm: "Marie Kulka", arch: "Marie Kulka (1821)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XX",
		pocet: "5",
		obyv: [
			{ jm: "Karl Baron", arch: "Carl Baron (1861–1921)", q: "" },
			{ jm: "Josefine Baron", arch: "Josefine Baron (1866–1937)", q: "" },
			{ jm: "Rosa Baron", arch: "Růžena Leschnerová (1896)", q: "Q105556573" },
			{ jm: "Leopold Baron", arch: "Leopold Baron (1898)", q: "Q104219119" },
			{ jm: "Julie Baron", arch: "Julie Baron (1899–1932)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXI",
		pocet: "4",
		obyv: [
			{ jm: "Salamon Ditl", arch: "Salomon Dittel (1778)", q: "" },
			{ jm: "Adasse Dittl", arch: "Adasse Dittl (1785)", q: "" },
			{ jm: "Filipp Engelsmann", arch: "Filipp Engelsmann (1840)", q: "" },
			{ jm: "Hanny Engelsmann", arch: "Hanny Engelsmann (1844)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXI",
		pocet: "2",
		obyv: [
			{ jm: "Jakob Knöpfelmacher", arch: "Jacob Knöpfelmacher (1808)", q: "" },
			{ jm: "Fanni Knöpfelmacher", arch: "Fani Knöpfelmacher (1807)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXI",
		pocet: "2",
		obyv: [
			{ jm: "Jacob Knöpfelmacher", arch: "Jacob Knöpfelmacher (1808)", q: "" },
			{ jm: "Fani Knöpfelmacher", arch: "Fani Knöpfelmacher (1807)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXII",
		pocet: "12",
		obyv: [
			{ jm: "Salomon Baron", arch: "Salomon Baron (1792)", q: "" },
			{ jm: "Isak Spitzer", arch: "Isak Baron (1828–1906)", q: "" },
			{ jm: "Nathan Spitzer", arch: "Nathan Spitzer (1830)", q: "" },
			{ jm: "Babete Spitzer", arch: "Babette Lamm (1827)", q: "" },
			{ jm: "Sally Spitzer", arch: "Sara Spitzer (1834)", q: "" },
			{ jm: "Löwy Spitzer", arch: "Löwi Spitzer (1824)", q: "" },
			{ jm: "Rosi Spitzer", arch: "Rosi Spitzer (1830)", q: "" },
			{ jm: "Filipp Spitzer", arch: "Filipp Spitzer (1855)", q: "" },
			{ jm: "Anna Baron", arch: "Anna Baron (1795)", q: "" },
			{ jm: "Isak Baron", arch: "Isak Baron (1831–xxx1)", q: "" },
			{ jm: "Rachel Baron", arch: "Rachel Baron (1828)", q: "" },
			{ jm: "Ernestine Baron", arch: "Ernestine Baron (1827)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXII",
		pocet: "5",
		obyv: [
			{ jm: "Löwi Spitzer recte Baron", arch: "Löwi Spitzer (1824)", q: "" },
			{ jm: "Filipp Spitzer", arch: "Filipp Spitzer (1855)", q: "" },
			{ jm: "Peppi Spitzer", arch: "Pepi Spitzer (1858–1940)", q: "" },
			{ jm: "Regina Spitzer", arch: "Regine Spitzer (1860–1932)", q: "" },
			{ jm: "Sali Baron", arch: "Sara Spitzer (1834)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXII",
		pocet: "7",
		obyv: [
			{ jm: "Löwi Spitzer", arch: "Löwi Spitzer (1824)", q: "" },
			{ jm: "Pepi Spitzer", arch: "Pepi Spitzer (1858–1940)", q: "" },
			{ jm: "Regine Spitzer", arch: "Regine Spitzer (1860–1932)", q: "" },
			{ jm: "Barbara Spitzer", arch: "Barbara Spitzer (1826)", q: "" },
			{ jm: "Babette Lamm geb. Spitzer", arch: "Babette Lamm (1827)", q: "" },
			{ jm: "Moritz Lamm", arch: "Moritz Lamm (1863)", q: "" },
			{ jm: "Pepi Lamm", arch: "Josefine Baron (1866–1937)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXII",
		pocet: "6",
		obyv: [
			{ jm: "Leopold Spitzer recte Baron", arch: "Löwi Spitzer (1824)", q: "" },
			{ jm: "Filipp Spitzer recte Baron", arch: "Filipp Spitzer (1855)", q: "" },
			{ jm: "Josefine Spitzer recte Baron", arch: "Pepi Spitzer (1858–1940)", q: "" },
			{ jm: "Regina Spitzer recte Baron", arch: "Regine Spitzer (1860–1932)", q: "" },
			{ jm: "Betti Lamm", arch: "Babette Lamm (1827)", q: "" },
			{ jm: "Josefine Lamm", arch: "Josefine Baron (1866–1937)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXII",
		pocet: "3",
		obyv: [
			{ jm: "Löwi Spitzer recte Baron", arch: "Löwi Spitzer (1824)", q: "" },
			{ jm: "Josefine Spitzer recte Baron", arch: "Pepi Spitzer (1858–1940)", q: "" },
			{ jm: "Betty Lamm", arch: "Babette Lamm (1827)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXIII",
		pocet: "14",
		obyv: [
			{ jm: "Isak Gabriel Baron", arch: "Isak Gabriel Baron (1828–1913)", q: "" },
			{ jm: "Resi Baron", arch: "Resi Baron (1830)", q: "" },
			{ jm: "Eduard Baron", arch: "Eduard Baron (1857)", q: "" },
			{ jm: "Julie Baron", arch: "Julie Baron (1853)", q: "" },
			{ jm: "Julie Buxbaum", arch: "Julie Buxbaum (1840)", q: "" },
			{ jm: "Nathan Baron", arch: "Nathan Baron (1791)", q: "" },
			{ jm: "Elisabeth Baron", arch: "Elisabeth Baron (1792)", q: "" },
			{ jm: "Fanny Baron", arch: "Fanny Baron (1825)", q: "" },
			{ jm: "Elisabeth Baron", arch: "Elisabeth Baron (1831)", q: "" },
			{ jm: "Eleonora Baron", arch: "Eleonore Kohn (1837–1916)", q: "" },
			{ jm: "Juda Neumann", arch: "Juda Neumann (1795)", q: "" },
			{ jm: "Isak Neumann", arch: "Isak Neumann (1838)", q: "" },
			{ jm: "Rosa Fürst", arch: "Rosa Fürst (1827)", q: "" },
			{ jm: "Zipper Fürst", arch: "Zipper Fürst (1830)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXIII",
		pocet: "12",
		obyv: [
			{ jm: "Nathan Baron", arch: "Nathan Baron (1791)", q: "" },
			{ jm: "Moritz Kohn", arch: "Moritz Kohn (1841)", q: "" },
			{ jm: "Eleonore Kohn", arch: "Eleonore Kohn (1837–1916)", q: "" },
			{ jm: "Isak Gabriel Baron", arch: "Isak Gabriel Baron (1828–1913)", q: "" },
			{ jm: "Rosa Baron", arch: "Resi Baron (1830)", q: "" },
			{ jm: "Julie Baron", arch: "Julie Baron (1853)", q: "" },
			{ jm: "Eduard Baron", arch: "Eduard Baron (1857)", q: "" },
			{ jm: "Sigmund Baron", arch: "Sigmund Baron (1860)", q: "" },
			{ jm: "Karl Baron", arch: "Carl Baron (1861–1921)", q: "" },
			{ jm: "Adolf Baron", arch: "Adolf Baron (1865–1941)", q: "" },
			{ jm: "David Baron", arch: "David Baron (1867–1914)", q: "" },
			{ jm: "Moses Löb Rosenzweig", arch: "Moses Löb Rosenzweig (1788)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXIII",
		pocet: "6",
		obyv: [
			{ jm: "Isak Gabriel Baron", arch: "Isak Gabriel Baron (1828–1913)", q: "" },
			{ jm: "Resi Baron", arch: "Resi Baron (1846–1918)", q: "" },
			{ jm: "Sigmund Baron", arch: "Sigmund Baron (1860)", q: "" },
			{ jm: "Carl Baron", arch: "Carl Baron (1861–1921)", q: "" },
			{ jm: "Adolf Baron", arch: "Adolf Baron (1865–1941)", q: "" },
			{ jm: "David Baron", arch: "David Baron (1867–1914)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXIII",
		pocet: "4",
		obyv: [
			{ jm: "Isak Gabriel Baron", arch: "Isak Gabriel Baron (1828–1913)", q: "" },
			{ jm: "Rosa Baron", arch: "Resi Baron (1846–1918)", q: "" },
			{ jm: "Eduard Baron", arch: "Eduard Baron (1857)", q: "" },
			{ jm: "Karl Baron", arch: "Carl Baron (1861–1921)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXIII",
		pocet: "2",
		obyv: [
			{ jm: "Gabriel Baron", arch: "Isak Gabriel Baron (1828–1913)", q: "" },
			{ jm: "Resie Baron", arch: "Resi Baron (1846–1918)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXIII",
		pocet: "2",
		obyv: [
			{ jm: "I. G. Baron", arch: "Isak Gabriel Baron (1828–1913)", q: "" },
			{ jm: "Růžena Baronova", arch: "Resi Baron (1846–1918)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXIV",
		pocet: "2",
		obyv: [
			{ jm: "Josef Vogel", arch: "Josef Vogel (1795)", q: "" },
			{ jm: "Rosi Vogel", arch: "Rosi Vogel (1793)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXIV",
		pocet: "4",
		obyv: [
			{ jm: "Herrmann Widder", arch: "Hermann Widder (1837–1926)", q: "" },
			{ jm: "Mary Widder", arch: "Marie Widder (1837–1923)", q: "" },
			{ jm: "Bertha Widder", arch: "Bertha Widder (1867)", q: "" },
			{ jm: "Cilly Widder", arch: "Cilly Widder (1869)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXIX",
		pocet: "3",
		obyv: [
			{ jm: "Gerson Schlesinger", arch: "Gerson Schlesinger (1802)", q: "" },
			{ jm: "Theresia Schlesinger", arch: "Theresia Schlesinger (1804)", q: "" },
			{ jm: "Abraham Schlesinger", arch: "Abraham Schlesinger (1851)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXIX",
		pocet: "2",
		obyv: [
			{ jm: "Moritz Schindler", arch: "Moses Schindler (1836)", q: "" },
			{ jm: "Amalie Schindler", arch: "Amalie Schindler (1840)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXIX",
		pocet: "3",
		obyv: [
			{ jm: "Moses Schindler", arch: "Moses Schindler (1836)", q: "" },
			{ jm: "Amalie Schindler", arch: "Amalie Schindler (1840)", q: "" },
			{ jm: "Sofie Schindler", arch: "Sofie Schindler (1873)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXIX",
		pocet: "3",
		obyv: [
			{ jm: "Moritz Schindler", arch: "Moses Schindler (1836)", q: "" },
			{ jm: "Amalie Schindler", arch: "Amalie Schindler (1840)", q: "" },
			{ jm: "Sophie Schindler", arch: "Sofie Schindler (1873)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXIX",
		pocet: "7",
		obyv: [
			{ jm: "Jenny Bachrach", arch: "Janette Bachrach (1858–1936)", q: "" },
			{ jm: "Mitzi Bachrach", arch: "Maria Bachrach (1879–1926)", q: "" },
			{ jm: "Sandor Bachrach", arch: "Alexander Bachrach (1886)", q: "" },
			{ jm: "Max Bachrach", arch: "Max Bachrach (1887)", q: "" },
			{ jm: "Fanni Bachrach", arch: "Fanni Bachrach (1891)", q: "Q104211303" },
			{ jm: "Emil Bachrach", arch: "Emil Bachrach (1892)", q: "Q115663268" },
			{ jm: "Leo Bachrach", arch: "Leo Bachrach (1894)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXV",
		pocet: "6",
		obyv: [
			{ jm: "Josef Rindel", arch: "Josef Rindel (1823)", q: "" },
			{ jm: "Augusta Rindel", arch: "Augusta Rindel (1819)", q: "" },
			{ jm: "Friedrich Rindel", arch: "Ferdinand Rindel (1850–1907)", q: "" },
			{ jm: "Berthold Rindel", arch: "Berthold Rindel (1852)", q: "" },
			{ jm: "Jonas Rindl", arch: "Jonas Rindl (1857)", q: "" },
			{ jm: "Julie Rindel", arch: "Julie Gross (1853)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXV",
		pocet: "6",
		obyv: [
			{ jm: "Josef Rindl", arch: "Josef Rindel (1823)", q: "" },
			{ jm: "Ferdinand Rindl", arch: "Ferdinand Rindel (1850–1907)", q: "" },
			{ jm: "Julie Rindl", arch: "Julie Gross (1853)", q: "" },
			{ jm: "Jonas Rindl", arch: "Jonas Rindl (1857)", q: "" },
			{ jm: "Sigmund Rindl", arch: "Sigmund Rindl (1858–1920)", q: "" },
			{ jm: "Sali Rindl", arch: "Sali Rindl (1861)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXV",
		pocet: "5",
		obyv: [
			{ jm: "Josef Rindl", arch: "Josef Rindel (1823)", q: "" },
			{ jm: "Jonas Rindl", arch: "Jonas Rindl (1857)", q: "" },
			{ jm: "Josef Gross", arch: "Josef Gross (1842–1912)", q: "" },
			{ jm: "Julie Gross", arch: "Julie Gross (1853)", q: "" },
			{ jm: "Auguste Gross", arch: "Auguste Gross (1880)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXV",
		pocet: "6",
		obyv: [
			{ jm: "Josef Gross", arch: "Josef Gross (1842–1912)", q: "" },
			{ jm: "Julie Gross", arch: "Julie Gross (1853)", q: "" },
			{ jm: "Hermann Gross", arch: "Hermann Gross (1882)", q: "" },
			{ jm: "Marie Gross", arch: "Marie Gross (1885)", q: "" },
			{ jm: "Bertha Gross", arch: "Bertha Gross (1887)", q: "" },
			{ jm: "Edmund Gross", arch: "Edmund Gross (1889)", q: "Q104678039" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXV",
		pocet: "5",
		obyv: [
			{ jm: "Josef Gross", arch: "Josef Gross (1842–1912)", q: "" },
			{ jm: "Julie Gross", arch: "Julie Gross (1853)", q: "" },
			{ jm: "Marie Gross", arch: "Marie Gross (1885)", q: "" },
			{ jm: "Bertha Gross", arch: "Bertha Gross (1887)", q: "" },
			{ jm: "Edmund Gross", arch: "Edmund Gross (1889)", q: "Q104678039" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXV",
		pocet: "4",
		obyv: [
			{ jm: "Josef Grohs", arch: "Josef Gross (1842–1912)", q: "" },
			{ jm: "Julie Grohs", arch: "Julie Gross (1853)", q: "" },
			{ jm: "Marie Grohs", arch: "Marie Gross (1885)", q: "" },
			{ jm: "Edmund Grohs", arch: "Edmund Gross (1889)", q: "Q104678039" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXVI",
		pocet: "2",
		obyv: [
			{ jm: "Rosalia Meitner", arch: "Rosalia Meitner (1801)", q: "" },
			{ jm: "Rosa Meitner", arch: "Rosa Baron (1833)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXVI",
		pocet: "5",
		obyv: [
			{ jm: "Isak Spitzer recte Baron", arch: "Isak Baron (1828–1906)", q: "" },
			{ jm: "Rosa Spitzer recte Baron", arch: "Rosa Baron (1833)", q: "" },
			{ jm: "Bertha Spitzer recte Baron", arch: "Bertha Pollaková (1866–1925)", q: "" },
			{ jm: "Sigmund Spitzer recte Baron", arch: "Sigmund Baron (1868)", q: "" },
			{ jm: "Rosalia Meitner", arch: "Rosalia Meitner (1801)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXVI",
		pocet: "7",
		obyv: [
			{ jm: "Isak Baron", arch: "Isak Baron (1828–1906)", q: "" },
			{ jm: "Rosa Baron", arch: "Rosa Baron (1833)", q: "" },
			{ jm: "Nathan Baron", arch: "Nathan Baron (1874)", q: "" },
			{ jm: "Isidor Baron", arch: "Isidor Baron (1875–1936)", q: "" },
			{ jm: "Bertha Baron", arch: "Bertha Pollaková (1866–1925)", q: "" },
			{ jm: "Josefine Baron", arch: "Josefine Baron (1870)", q: "" },
			{ jm: "Regina Baron", arch: "Regina Baron (1878)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXVI",
		pocet: "6",
		obyv: [
			{ jm: "Isak Baron", arch: "Isak Baron (1828–1906)", q: "" },
			{ jm: "Bertha Baron", arch: "Bertha Pollaková (1866–1925)", q: "" },
			{ jm: "Josefine Baron", arch: "Josefine Baron (1870)", q: "" },
			{ jm: "Regina Baron", arch: "Regina Baron (1878)", q: "" },
			{ jm: "Nathan Baron", arch: "Nathan Baron (1874)", q: "" },
			{ jm: "Isidor Baron", arch: "Isidor Baron (1875–1936)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXVI",
		pocet: "5",
		obyv: [
			{ jm: "Isak Baron", arch: "Isak Baron (1828–1906)", q: "" },
			{ jm: "Nathan Baron", arch: "Nathan Baron (1874)", q: "" },
			{ jm: "Isidor Baron", arch: "Isidor Baron (1875–1936)", q: "" },
			{ jm: "Bertha Baron", arch: "Bertha Pollaková (1866–1925)", q: "" },
			{ jm: "Regine Baron", arch: "Regina Baron (1878)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXVI",
		pocet: "4",
		obyv: [
			{ jm: "Isidor Baron", arch: "Isidor Baron (1875–1936)", q: "" },
			{ jm: "Emma Baron", arch: "Emma Baron (1876)", q: "Q104219129" },
			{ jm: "Friedrich (Fritz) Reik", arch: "Fritz Reik (1891)", q: "Q108905594" },
			{ jm: "Otto Fischer", arch: "Otto Fischer (1894–xxx1)", q: "Q105516924" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXVII",
		pocet: "6",
		obyv: [
			{ jm: "Gerson Siebenschein", arch: "Gerson Siebenschein (1801)", q: "" },
			{ jm: "Hani Siebenschein", arch: "Hanny Siebenschein (1813)", q: "" },
			{ jm: "Lina Siebenschein", arch: "Lina Siebenschein (1841)", q: "" },
			{ jm: "Gusti Siebenschein", arch: "Gusti Siebenschein (1843)", q: "" },
			{ jm: "Emma Siebenschein", arch: "Emma Siebenschein (1848)", q: "" },
			{ jm: "Fani Siebenschein", arch: "Fani Siebenschein (1851)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXVII",
		pocet: "5",
		obyv: [
			{ jm: "Michael Sobek", arch: "Michael Sobek (1831)", q: "" },
			{ jm: "Lisa (Elisabet) Sobek", arch: "Louise Sobek (1832)", q: "" },
			{ jm: "Berthold Sobek", arch: "Berthold Sobek (1865)", q: "" },
			{ jm: "Mary Sobek", arch: "Marie Sobek (1869)", q: "" },
			{ jm: "Katy Sobek", arch: "Katy Sobek (1804)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXVII",
		pocet: "5",
		obyv: [
			{ jm: "Michael Sobek", arch: "Michael Sobek (1831)", q: "" },
			{ jm: "Louise Sobek geb. Stiasny", arch: "Louise Sobek (1832)", q: "" },
			{ jm: "Berthold Sobek", arch: "Berthold Sobek (1865)", q: "" },
			{ jm: "Marie Sobek", arch: "Marie Sobek (1869)", q: "" },
			{ jm: "Resi Stiasny", arch: "Resi Stiasny (1815)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXVII",
		pocet: "3",
		obyv: [
			{ jm: "Fanni Bachrach", arch: "Fanny Bachrach (1825)", q: "" },
			{ jm: "Regine Bachrach", arch: "Regina Bachrach (1855–1929)", q: "" },
			{ jm: "Sigmund Bachrach", arch: "Sigmund Bachrach (1857–1928)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXVII",
		pocet: "2",
		obyv: [
			{ jm: "Regina Bachrach", arch: "Regina Bachrach (1855–1929)", q: "" },
			{ jm: "Sam Bachrach", arch: "Sigmund Bachrach (1857–1928)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXVIII",
		pocet: "5",
		obyv: [
			{ jm: "Herman Widder", arch: "Hermann Widder (1837–1926)", q: "" },
			{ jm: "Marie Widder geb. Herrmann", arch: "Marie Widder (1837–1923)", q: "" },
			{ jm: "Moritz Widder", arch: "Moritz Widder (1878)", q: "" },
			{ jm: "Marie Widder", arch: "Marie Widder (1877)", q: "" },
			{ jm: "Richard Sonnenschein", arch: "Richard Sonnenschein (1871)", q: "Q105604116" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXX",
		pocet: "4",
		obyv: [
			{ jm: "Adolf (Abraham) Kulka", arch: "Adolf Kulka (1833)", q: "" },
			{ jm: "Johanna Kulka", arch: "Johanna Kulka (1843)", q: "" },
			{ jm: "Tony Kulka", arch: "Tony Kulka (1862)", q: "" },
			{ jm: "Moritz Kulka", arch: "Moritz Kulka (1868)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXX",
		pocet: "6",
		obyv: [
			{ jm: "Moriz Kohn", arch: "Moritz Kohn (1841)", q: "" },
			{ jm: "Lotti Kohn geb. Baron", arch: "Eleonore Kohn (1837–1916)", q: "" },
			{ jm: "Isidor Kohn", arch: "Isidor Kohn (1870)", q: "" },
			{ jm: "Ignaz Kohn", arch: "Ignaz Kohn (1873–xxx1)", q: "" },
			{ jm: "Elisabeth Kohn", arch: "Elisabeth Kohn (1875)", q: "" },
			{ jm: "Malwine Kohn", arch: "Malvine Kohn (1879)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXX",
		pocet: "7",
		obyv: [
			{ jm: "Adolf Beer", arch: "Adolf Beer (1854–1925)", q: "" },
			{ jm: "Bertha Beer", arch: "Bertha Beer (1852)", q: "" },
			{ jm: "Eugen Pless", arch: "Eugen Pless (1889)", q: "" },
			{ jm: "Loise Steiner geb. Brüll", arch: "Louise Steiner (1856–1936)", q: "" },
			{ jm: "Malwine Steiner", arch: "Malvine Steiner (1886)", q: "" },
			{ jm: "Gottfried Steiner", arch: "Gottfried Steiner (1889)", q: "" },
			{ jm: "Emil Fischer", arch: "Emil Fischer (1887)", q: "Q104547328" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXXI",
		pocet: "6",
		obyv: [
			{ jm: "Herrmann Lamm", arch: "Hermann Lamm (1815)", q: "" },
			{ jm: "Rosi Lamm", arch: "Rosi Lamm (1820–1883)", q: "" },
			{ jm: "Sali Lamm", arch: "Sali Lamm (1851)", q: "" },
			{ jm: "Eva Lamm", arch: "Eva Lamm (1855–1926)", q: "" },
			{ jm: "Tony Lamm", arch: "Tony Lamm (1862)", q: "" },
			{ jm: "Maly Lamm", arch: "Amalia Lamm (1801)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXXI",
		pocet: "2",
		obyv: [
			{ jm: "Adolf Beer", arch: "Adolf Beer (1854–1925)", q: "" },
			{ jm: "Bertha Beer", arch: "Bertha Beer (1852)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXXI",
		pocet: "5",
		obyv: [
			{ jm: "Wilhelm Kulka", arch: "Wilhelm Kulka (1828–1914)", q: "" },
			{ jm: "Max Zeidler", arch: "Max Seidler (1853–1929)", q: "" },
			{ jm: "Resi (Therese) Zeidler geb. Kulka", arch: "Therese Seidler (1858–1914)", q: "" },
			{ jm: "Anna Zeidler", arch: "Anna Seidlerová (1892)", q: "Q105601515" },
			{ jm: "Louise Zeidler", arch: "Louisa Friedová (1903)", q: "Q104655722" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXXII",
		pocet: "1",
		obyv: [
			{ jm: "Abraham Reininger", arch: "Abraham Reininger (1825)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXXII",
		pocet: "5",
		obyv: [
			{ jm: "David Fischer", arch: "David Fischer (1824)", q: "" },
			{ jm: "Mary Fischer", arch: "Marie Fischer (1842–1920)", q: "" },
			{ jm: "Salomon (Samuel) Fischer", arch: "Salomon Fischer (1855)", q: "" },
			{ jm: "Sali Fischer", arch: "Sali Fischer (1861)", q: "" },
			{ jm: "Max Fischer", arch: "Markus Fischer (1868)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXXII",
		pocet: "6",
		obyv: [
			{ jm: "Wilhelm Kulka", arch: "Wilhelm Kulka (1828–1914)", q: "" },
			{ jm: "Julie Kulka", arch: "Julie Kulka (1831)", q: "" },
			{ jm: "Rosa Kulka", arch: "Rosa Kulka (1874)", q: "" },
			{ jm: "Leopold Kulka", arch: "Leopold Kulka (1887)", q: "Q105555313" },
			{ jm: "Oskar Kulka", arch: "Oskar Kulka (1888)", q: "Q115858649" },
			{ jm: "Fritz Hersch", arch: "Fritz Hersch (1895)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXXIII",
		pocet: "4",
		obyv: [
			{ jm: "David Fischer", arch: "David Fischer (1824)", q: "" },
			{ jm: "Betti Fischer", arch: "Betti Fischer (1817)", q: "" },
			{ jm: "Salamon Fischer", arch: "Salomon Fischer (1855)", q: "" },
			{ jm: "Jetti Fischer", arch: "Jetti Fischer (1857)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXXIII",
		pocet: "10",
		obyv: [
			{ jm: "David Fischer", arch: "David Fischer (1824)", q: "" },
			{ jm: "Marie Fischer", arch: "Marie Fischer (1842–1920)", q: "" },
			{ jm: "Salomon Fischer", arch: "Salomon Fischer (1855)", q: "" },
			{ jm: "Markus Fischer", arch: "Markus Fischer (1868)", q: "" },
			{ jm: "Hermann Fischer", arch: "Hermann Fischer (1870)", q: "" },
			{ jm: "Moritz Fischer", arch: "Moritz Fischer (1878–xxx1)", q: "" },
			{ jm: "Sigmund Fischer", arch: "Sigmund Fischer (1879–xxx1)", q: "" },
			{ jm: "Sali Fischer", arch: "Sali Fischer (1861)", q: "" },
			{ jm: "Resi Fischer", arch: "Resi Fischer (1875)", q: "" },
			{ jm: "Betti Beer", arch: "Betti Beer (1853)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXXIII",
		pocet: "6",
		obyv: [
			{ jm: "Wilhelm Kulka", arch: "Wilhelm Kulka (1828–1914)", q: "" },
			{ jm: "Julie Kulka", arch: "Julie Kulka (1831)", q: "" },
			{ jm: "Rösi Kulka", arch: "Rosa Kulka (1874)", q: "" },
			{ jm: "David Kulka", arch: "David Kulka (1876)", q: "" },
			{ jm: "Max Siebenschein", arch: "Max Siebenschein (1878)", q: "" },
			{ jm: "Fani Urban", arch: "Fanni Urban (1836)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXXIV",
		pocet: "5",
		obyv: [
			{ jm: "Abraham Hirsch Vogel", arch: "Abraham Hirsch Vogel (1789)", q: "" },
			{ jm: "Susanna Vogel", arch: "Susanna Vogel (1802)", q: "" },
			{ jm: "Dori Vogel", arch: "Dori Vogel (1838)", q: "" },
			{ jm: "Linzi Vogel", arch: "Linzi Vogel (1843)", q: "" },
			{ jm: "Fani Vogel", arch: "Fani Vogel (1844)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Židovská obec Hranice",
		cast: "",
		cp: "XXXV",
		pocet: "5",
		obyv: [
			{ jm: "Michael Ehrenfreund", arch: "Michael Ehrenfreund (1809)", q: "" },
			{ jm: "Rebeka Ehrenfreund geb. Weis", arch: "Rebeka Ehrenfreund (1809)", q: "" },
			{ jm: "Katy Ehrenfreund", arch: "Katy Ehrenfreund (1844)", q: "" },
			{ jm: "Julie Ehrenfreund", arch: "Julie Ehrenfreund (1845)", q: "" },
			{ jm: "Sofie Ehrenfreund", arch: "Sofie Buchsbaum (1847–1921)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Hranice",
		cast: "",
		cp: "1",
		pocet: "9",
		obyv: [
			{ jm: "Seligmann Bachrach", arch: "Seligmann Bachrach (1822–1892)", q: "" },
			{ jm: "Fanny Bachrach", arch: "Fanny Bachrach (1825)", q: "" },
			{ jm: "Heinrich Bachrach", arch: "Heinrich Bachrach (1850–1923)", q: "" },
			{ jm: "Ernestine Bachrach", arch: "Ernestine Adler (1851)", q: "" },
			{ jm: "Regina Bachrach", arch: "Regina Bachrach (1855–1929)", q: "" },
			{ jm: "Lotty Bachrach", arch: "Lotty Bachrach (1856)", q: "" },
			{ jm: "Salomon Bachrach", arch: "Salomon Bachrach (1796)", q: "" },
			{ jm: "Lotty Schlesinger", arch: "Lotty Schlesinger (1844)", q: "" },
			{ jm: "Moritz Fuchs", arch: "Moritz Fuchs (1853)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "1",
		pocet: "7",
		obyv: [
			{ jm: "Seligmann Bachrach", arch: "Seligmann Bachrach (1822–1892)", q: "" },
			{ jm: "Fanny Bachrach", arch: "Fanny Bachrach (1825)", q: "" },
			{ jm: "Samuel Bachrach", arch: "Sigmund Bachrach (1857–1928)", q: "" },
			{ jm: "Eugenie Bachrach", arch: "Regina Bachrach (1855–1929)", q: "" },
			{ jm: "Lotty Bachrach", arch: "Lotty Bachrach (1856)", q: "" },
			{ jm: "Max Rosenfeld", arch: "Max Rosenfeld (1856)", q: "" },
			{ jm: "Julius Haussner", arch: "Julius Hausner (1866)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "1",
		pocet: "9",
		obyv: [
			{ jm: "Seligmann Bachrach", arch: "Seligmann Bachrach (1822–1892)", q: "" },
			{ jm: "Franziska Bachrach", arch: "Fanny Bachrach (1825)", q: "" },
			{ jm: "Regina Bachrach", arch: "Regina Bachrach (1855–1929)", q: "" },
			{ jm: "Sigmund Bachrach", arch: "Sigmund Bachrach (1857–1928)", q: "" },
			{ jm: "Pinkus Schlesinger", arch: "Paul Schlesinger (1876–1943)", q: "Q105598506" },
			{ jm: "Gisela Adler", arch: "Gisela Adler (1874)", q: "Q115663271" },
			{ jm: "Sigmund Neumann", arch: "Sigmund Neumann (1866)", q: "" },
			{ jm: "Ludwig Nasch", arch: "Ludwig Nasch (1872)", q: "" },
			{ jm: "Hermann Scheuer", arch: "Hermann Scheuer (1872)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "10",
		pocet: "8",
		obyv: [
			{ jm: "Aron Friedmann", arch: "Aron Friedmann (1830)", q: "" },
			{ jm: "Lotty Friedmann", arch: "Lotty Friedmann (1841–1908)", q: "" },
			{ jm: "Augustine Friedmann", arch: "Auguste Stern (1865)", q: "" },
			{ jm: "Eduard Friedmann", arch: "Eduard Friedmann (1866)", q: "" },
			{ jm: "Juliana Friedmann", arch: "Juliana Friedmann (1870)", q: "" },
			{ jm: "Otto Friedmann", arch: "Otto Friedmann (1872)", q: "" },
			{ jm: "Leopold Friedmann", arch: "Leopold Friedmann (1874)", q: "" },
			{ jm: "Amalia Friedmann", arch: "Amalia Friedmann (1877)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "100",
		pocet: "8",
		obyv: [
			{ jm: "Sigmund Neumann", arch: "Sigmund Neumann (1866)", q: "" },
			{ jm: "Sofie Neumann geb. Broch", arch: "Sofie Neumann (1866–1939)", q: "" },
			{ jm: "Otto Neumann", arch: "Otto Neumann (1897)", q: "" },
			{ jm: "Marie Neumann", arch: "Marie Neumann (1898)", q: "Q105567170" },
			{ jm: "Elsa Neumann", arch: "Elsa Glück (1900)", q: "Q104658461" },
			{ jm: "Hilda Neumann", arch: "Hilda Neumann (1903)", q: "" },
			{ jm: "Irma Neumann", arch: "Irma Heská (1904)", q: "" },
			{ jm: "Anna Neumann", arch: "Anna Neumann (1909)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "100",
		pocet: "5",
		obyv: [
			{ jm: "Sigmund Neumann", arch: "Sigmund Neumann (1866)", q: "" },
			{ jm: "Sofie Neumann", arch: "Sofie Neumann (1866–1939)", q: "" },
			{ jm: "Elsa Neumann", arch: "Elsa Glück (1900)", q: "Q104658461" },
			{ jm: "Irma Neumann", arch: "Irma Heská (1904)", q: "" },
			{ jm: "Anna Neumann", arch: "Anna Neumann (1909)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Hranice",
		cast: "",
		cp: "101",
		pocet: "6",
		obyv: [
			{ jm: "Moises Haus", arch: "Moses Haus (1826)", q: "" },
			{ jm: "Dorothea Haus", arch: "Veronika Haus (1834)", q: "" },
			{ jm: "Rudolf Haus", arch: "Rudolf Haus (1855–1929)", q: "" },
			{ jm: "Rosalia Haus", arch: "Rosalia Haus (1857)", q: "" },
			{ jm: "Friederika Haus", arch: "Friederika Haus (1858)", q: "" },
			{ jm: "Sigmund Haus", arch: "Sigmund Haus (1867–1943)", q: "Q104705163" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "101",
		pocet: "13",
		obyv: [
			{ jm: "Moses Haus", arch: "Moses Haus (1826)", q: "" },
			{ jm: "Veronika Haus geb. Schindler", arch: "Veronika Haus (1834)", q: "" },
			{ jm: "Rudolf Haus", arch: "Rudolf Haus (1855–1929)", q: "" },
			{ jm: "Friederika Haus", arch: "Friederika Haus (1858)", q: "" },
			{ jm: "Sigmund Haus", arch: "Sigmund Haus (1867–1943)", q: "Q104705163" },
			{ jm: "Emil Kurz", arch: "Emil Kurz (1836–1908)", q: "" },
			{ jm: "Sofie Kurz", arch: "Sofie Kurz (1844–1919)", q: "" },
			{ jm: "Elisabeth Kurz", arch: "Elisabeth Thorž (1867)", q: "Q105615061" },
			{ jm: "Friederike Kurz", arch: "Friederike Knöpfelmacherová (1869–1943)", q: "Q105521876" },
			{ jm: "Max Kurz", arch: "Max Kurz (1871)", q: "" },
			{ jm: "Marie Kurz", arch: "Marie Thoržová (1873–1943)", q: "Q105615064" },
			{ jm: "Emma Kurz", arch: "Emma Kurz (1875)", q: "" },
			{ jm: "Edmund Kurz", arch: "Edmund Kurz (1877)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "101",
		pocet: "9",
		obyv: [
			{ jm: "Emil Kurz", arch: "Emil Kurz (1836–1908)", q: "" },
			{ jm: "Sofie Kurz geb. Wohlmuth", arch: "Sofie Kurz (1844–1919)", q: "" },
			{ jm: "Elisabeth Kurz", arch: "Elisabeth Thorž (1867)", q: "Q105615061" },
			{ jm: "Friederike Kurz", arch: "Friederike Knöpfelmacherová (1869–1943)", q: "Q105521876" },
			{ jm: "Marie Kurz", arch: "Marie Thoržová (1873–1943)", q: "Q105615064" },
			{ jm: "Emma Kurz", arch: "Emma Kurz (1875)", q: "" },
			{ jm: "Edmund Kurz", arch: "Edmund Kurz (1877)", q: "" },
			{ jm: "Moritz Kurz", arch: "Moritz Kurz (1881–1942)", q: "Q105555451" },
			{ jm: "Camila Kurz", arch: "Camila Kurz (1886)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "101",
		pocet: "3",
		obyv: [
			{ jm: "Chiel Rosenbaum", arch: "Chiel Rosenbaum (1861–1922)", q: "" },
			{ jm: "Perl Rosenbaum", arch: "Perel Rosenbaum (1865–1937)", q: "" },
			{ jm: "David Rosenbaum", arch: "David Rosenbaum (1888)", q: "Q105580319" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Hranice",
		cast: "",
		cp: "102",
		pocet: "5",
		obyv: [
			{ jm: "Bernhard Schindler", arch: "Bernard Schindler (1811)", q: "" },
			{ jm: "Fanny Schindler", arch: "Fanny Schindler (1827)", q: "" },
			{ jm: "Fanny Schindler", arch: "Fanny Schindler (1846)", q: "" },
			{ jm: "Filipihne Schindler", arch: "Filipine Schindler (1848)", q: "" },
			{ jm: "Theresia Schindler", arch: "Therese Beer (1857)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Hranice",
		cast: "",
		cp: "102",
		pocet: "2",
		obyv: [
			{ jm: "Moritz Paneth", arch: "Moritz Paneth (1847)", q: "" },
			{ jm: "Rosalia Mandel", arch: "Rosalia Mandel (1851)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "102",
		pocet: "1",
		obyv: [
			{ jm: "Lina Ehrenfreund", arch: "Lina Ehrenfreund (1856)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "102",
		pocet: "7",
		obyv: [
			{ jm: "Moritz Kohn", arch: "Moritz Kohn (1841)", q: "" },
			{ jm: "Lotti Kohn", arch: "Eleonore Kohn (1837–1916)", q: "" },
			{ jm: "Elisabeth Kohn", arch: "Elisabeth Kohn (1875)", q: "" },
			{ jm: "Malvine Kohn", arch: "Malvine Kohn (1879)", q: "" },
			{ jm: "Adolf Müller", arch: "Adolf Müller (1854–1924)", q: "" },
			{ jm: "Johanna Müller", arch: "Johanna Müller (1850–1920)", q: "" },
			{ jm: "Fanni Müller", arch: "Fanny Müller (1889)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "102",
		pocet: "4",
		obyv: [
			{ jm: "Moriz Kohn", arch: "Moritz Kohn (1841)", q: "" },
			{ jm: "Lotti Kohn", arch: "Eleonore Kohn (1837–1916)", q: "" },
			{ jm: "Malvine Kohn", arch: "Malvine Kohn (1879)", q: "" },
			{ jm: "Amalie Schindler", arch: "Amalie Schindler (1840)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "102",
		pocet: "1",
		obyv: [
			{ jm: "Mořič Kohn", arch: "Moritz Kohn (1841)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Hranice",
		cast: "",
		cp: "103",
		pocet: "9",
		obyv: [
			{ jm: "Juda Dittel", arch: "Juda Dittel (1806)", q: "" },
			{ jm: "Gusti Dittel", arch: "Gusti Dittel (1814–1865)", q: "" },
			{ jm: "Abraham Dittel", arch: "Abraham Dittel (1853–1907)", q: "" },
			{ jm: "David Dittel", arch: "David Dittel (1854–1911)", q: "" },
			{ jm: "Ferdinand Dittel", arch: "Ferdinand Dittel (1856)", q: "" },
			{ jm: "Lotty Dittel", arch: "Lotty Friedmann (1841–1908)", q: "" },
			{ jm: "Mally Dittel", arch: "Mally Dittel (1845)", q: "" },
			{ jm: "Filippine Dittel", arch: "Filipine Silbinger (1850–1918)", q: "" },
			{ jm: "Netty Dittel", arch: "Netti Rosenzweig (1849–1926)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Hranice",
		cast: "",
		cp: "103",
		pocet: "12",
		obyv: [
			{ jm: "Juda Dittel", arch: "Juda Dittel (1806)", q: "" },
			{ jm: "Filipine Dittel", arch: "Filipine Silbinger (1850–1918)", q: "" },
			{ jm: "Netty Dittel", arch: "Netti Rosenzweig (1849–1926)", q: "" },
			{ jm: "Abraham Dittel", arch: "Abraham Dittel (1853–1907)", q: "" },
			{ jm: "Ferdinand Dittel", arch: "Ferdinand Dittel (1856)", q: "" },
			{ jm: "Salomon Hessinger", arch: "Salomon Hessinger (1820)", q: "" },
			{ jm: "Hessinger", arch: "Resi Hessinger (1827)", q: "" },
			{ jm: "Julie Hessinger", arch: "Julie Hessinger (1861)", q: "" },
			{ jm: "Isidor Hessinger", arch: "Isidor Hessinger (1866)", q: "" },
			{ jm: "Maria Kafka", arch: "Marie Kafka (1795)", q: "" },
			{ jm: "Anna Kafka", arch: "Anna Kafka (1819)", q: "" },
			{ jm: "Rosa Grünn", arch: "Rosa Grünn (1838)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "103",
		pocet: "13",
		obyv: [
			{ jm: "Abraham Dittel", arch: "Abraham Dittel (1853–1907)", q: "" },
			{ jm: "David Dittel", arch: "David Dittel (1854–1911)", q: "" },
			{ jm: "Ferdinand Dittel", arch: "Ferdinand Dittel (1856)", q: "" },
			{ jm: "Netty Dittel", arch: "Netti Rosenzweig (1849–1926)", q: "" },
			{ jm: "Ernestine Perl", arch: "Ernestine Perl (1810)", q: "" },
			{ jm: "Isidor Samuel", arch: "Isidor Samuel (1863)", q: "" },
			{ jm: "Benjamin Silbinger", arch: "Benjamin Silbinger (1848–1907)", q: "" },
			{ jm: "Filipine Silbinger", arch: "Filipine Silbinger (1850–1918)", q: "" },
			{ jm: "Auguste Silbinger", arch: "Auguste Tauber (1877)", q: "" },
			{ jm: "Hellene Silbinger", arch: "Helene Löwy (1878)", q: "" },
			{ jm: "Isak Goldmann", arch: "Isak Goldmann (1866)", q: "" },
			{ jm: "Marie Kafka", arch: "Marie Kafka (1795)", q: "" },
			{ jm: "Anna Kafka", arch: "Anna Kafka (1816)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "103",
		pocet: "9",
		obyv: [
			{ jm: "Abraham Dittel", arch: "Abraham Dittel (1853–1907)", q: "" },
			{ jm: "Julie Dittel", arch: "Julie Dittel (1863)", q: "" },
			{ jm: "David Dittl", arch: "David Dittel (1854–1911)", q: "" },
			{ jm: "Betty Rosenzweig", arch: "Netti Rosenzweig (1849–1926)", q: "" },
			{ jm: "Benjamin Silbinger", arch: "Benjamin Silbinger (1848–1907)", q: "" },
			{ jm: "Filipine Silbinger geb. Dittel", arch: "Filipine Silbinger (1850–1918)", q: "" },
			{ jm: "Auguste Silbinger", arch: "Auguste Tauber (1877)", q: "" },
			{ jm: "Helene Silbinger", arch: "Helene Löwy (1878)", q: "" },
			{ jm: "David Silbinger", arch: "David Silbinger (1881)", q: "Q115663266" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "103",
		pocet: "12",
		obyv: [
			{ jm: "Abraham Dittel", arch: "Abraham Dittel (1853–1907)", q: "" },
			{ jm: "Julie Dittel", arch: "Julie Dittel (1863)", q: "" },
			{ jm: "Benjamin Silbinger", arch: "Benjamin Silbinger (1848–1907)", q: "" },
			{ jm: "Philipine Silbinger", arch: "Filipine Silbinger (1850–1918)", q: "" },
			{ jm: "David Silbinger", arch: "David Silbinger (1881)", q: "Q115663266" },
			{ jm: "Gusti Silbinger", arch: "Auguste Tauber (1877)", q: "" },
			{ jm: "Helene Silbinger", arch: "Helene Löwy (1878)", q: "" },
			{ jm: "David Vogel", arch: "David Vogel (1853–1923)", q: "" },
			{ jm: "Ernestine Vogel geb. Tauber", arch: "Ernestine Vogel (1864–1942)", q: "Q105616337" },
			{ jm: "Ernst Vogel", arch: "Ernst Vogel (1890)", q: "" },
			{ jm: "Marie Vogel", arch: "Marie Vogel (1891)", q: "" },
			{ jm: "Elsa Vogel", arch: "Elsa Vogel (1893)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "103",
		pocet: "12",
		obyv: [
			{ jm: "(Max) Mendel Hackmann recte Weissbrod", arch: "Max Weissbrod (1875)", q: "Q115663277" },
			{ jm: "Theresie Weissbrod geb. Neumann", arch: "Theresie Weissbrod (1877)", q: "" },
			{ jm: "Leo Weissbrott", arch: "Leo Weissbrott (1900)", q: "" },
			{ jm: "Fritz Weissbrod", arch: "Fritz Weissbrod (1902)", q: "" },
			{ jm: "Ernst Weissbrod", arch: "Arnošt Weissbrod (1903–1945)", q: "Q105637744" },
			{ jm: "Oskar Weissbrod", arch: "Oskar Weissbrod (1905)", q: "Q105637748" },
			{ jm: "Alfred Weissbrod", arch: "Alfred Weissbrod (1907–1936)", q: "" },
			{ jm: "Marie Weissbrod", arch: "Marie Weissbrod (1909)", q: "" },
			{ jm: "Anna Weissbrod", arch: "Anna Weissbrod (1910)", q: "" },
			{ jm: "Izig Moses Drachmann", arch: "Isak Moses Drachmann (1858–1942)", q: "Q104447946" },
			{ jm: "Henriette Drachmann", arch: "Henriette Drachmann (1862–1942)", q: "Q104447945" },
			{ jm: "Johanna Drachmann", arch: "Johanna Drachmann (1880)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Hranice",
		cast: "",
		cp: "104",
		pocet: "4",
		obyv: [
			{ jm: "Moises Löbel Vogel", arch: "Moises Löbel Vogel (1826–1890)", q: "" },
			{ jm: "Marie Vogel", arch: "Marie Vogel (1829)", q: "" },
			{ jm: "Emanuel Vogel", arch: "Emanuel Vogel (1852)", q: "" },
			{ jm: "Salamon Vogel", arch: "Salomon Vogel (1855–1876)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Hranice",
		cast: "",
		cp: "104",
		pocet: "9",
		obyv: [
			{ jm: "Moritz Vogel", arch: "Moises Löbel Vogel (1826–1890)", q: "" },
			{ jm: "Marie Vogel", arch: "Marie Vogel (1829)", q: "" },
			{ jm: "Salomon Vogel", arch: "Salomon Vogel (1855–1876)", q: "" },
			{ jm: "Rosa Vogel", arch: "Rosa Vogel (1859)", q: "" },
			{ jm: "Regina Vogel", arch: "Regina Vogel (1865)", q: "" },
			{ jm: "Kathy Vogel", arch: "Kathy Vogel (1868)", q: "" },
			{ jm: "Leopold Wolf", arch: "Leopold Wolf (1845)", q: "" },
			{ jm: "Karl Kaufmann", arch: "Karl Kaufmann (1854)", q: "" },
			{ jm: "Moritz Klein", arch: "Moritz Klein (1854)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "104",
		pocet: "5",
		obyv: [
			{ jm: "Moritz Vogel", arch: "Moises Löbel Vogel (1826–1890)", q: "" },
			{ jm: "Marie (Mariana) Vogel geb. Vogel", arch: "Marie Vogel (1829)", q: "" },
			{ jm: "Emanuel Vogel", arch: "Emanuel Vogel (1852)", q: "" },
			{ jm: "Kathy Vogel", arch: "Kathy Vogel (1868)", q: "" },
			{ jm: "Josef Vogel", arch: "Josef Vogel (1870)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "104",
		pocet: "4",
		obyv: [
			{ jm: "Salomon Hessinger", arch: "Salomon Hessinger (1820)", q: "" },
			{ jm: "Teresia Hessinger", arch: "Resi Hessinger (1827)", q: "" },
			{ jm: "Julie Hessinger", arch: "Julie Hessinger (1861)", q: "" },
			{ jm: "Richard Mannaberg", arch: "Richard Mannaberg (1879)", q: "Q105469341" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "105",
		pocet: "6",
		obyv: [
			{ jm: "Johanna Luft", arch: "Johanna Luft (1870–1922)", q: "" },
			{ jm: "Ernestine Luft", arch: "Ernestine Luft (1910)", q: "" },
			{ jm: "Konrad Klein", arch: "Konrad Klein (1883)", q: "Q105521097" },
			{ jm: "Berta Klein", arch: "Berta Klein (1885–1920)", q: "" },
			{ jm: "Hédi Klein", arch: "Hédi Klein (1909)", q: "Q105520945" },
			{ jm: "Kurt Klein", arch: "Kurt Klein (1910)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "106",
		pocet: "1",
		obyv: [
			{ jm: "MUDr. Max Kulka", arch: "Max Kulka (1872)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "106",
		pocet: "2",
		obyv: [
			{ jm: "Cilli Morgenstern", arch: "Cecilie Morgenstern (1834)", q: "" },
			{ jm: "Friederike Morgenstern", arch: "Friederike Morgenstern (1879)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "106",
		pocet: "7",
		obyv: [
			{ jm: "Leopold Riesenfeld", arch: "Leopold Riesenfeld (1851)", q: "" },
			{ jm: "Marie Riesenfeld", arch: "Marie Riesenfeld (1855–1923)", q: "" },
			{ jm: "Walter Sax", arch: "Walter Sax (1908)", q: "" },
			{ jm: "Alfred Trost", arch: "Alfred Trost (1881)", q: "" },
			{ jm: "Marie Trost", arch: "Marie Trost (1882)", q: "" },
			{ jm: "Julie Trost", arch: "Julie Friedmannová (1912)", q: "Q104656121" },
			{ jm: "Ernst Trost", arch: "Ernst Trost (1915)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Hranice",
		cast: "",
		cp: "107",
		pocet: "5",
		obyv: [
			{ jm: "David Vogel", arch: "David Vogel (1827)", q: "" },
			{ jm: "Rosa Vogel", arch: "Rosa Vogel (1825)", q: "" },
			{ jm: "Moritz Vogel", arch: "Moritz Vogel (1854)", q: "" },
			{ jm: "Isidor Vogel", arch: "Isidor Vogel (1857)", q: "" },
			{ jm: "Lina Vogel", arch: "Lina Vogel (1856)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Hranice",
		cast: "",
		cp: "107",
		pocet: "3",
		obyv: [
			{ jm: "Sigmund Kraus", arch: "Sigmund Kraus (1840)", q: "" },
			{ jm: "Rosalia Kraus", arch: "Rosalia Kraus (1849)", q: "" },
			{ jm: "Hermine Kraus", arch: "Hermine Kraus (1869)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "107",
		pocet: "9",
		obyv: [
			{ jm: "Josef Fischer", arch: "Josef Fischer (1848–xxx1)", q: "" },
			{ jm: "Rosalia Fischer", arch: "Rosalia Fischer (1851)", q: "" },
			{ jm: "Regina Fischer", arch: "Regina Fischer (1876)", q: "" },
			{ jm: "Sidonie Fischer", arch: "Sidonie Fischer (1878)", q: "" },
			{ jm: "Laura Fischer", arch: "Laura Fischer (1882)", q: "" },
			{ jm: "Karl Fischer", arch: "Karl Fischer (1883)", q: "" },
			{ jm: "Wilhelm Fischer", arch: "Wilhelm Fischer (1884)", q: "" },
			{ jm: "Marie Fischer", arch: "Marie Fischer (1885)", q: "" },
			{ jm: "Martha Fischer", arch: "Martha Fischer (1888)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "107",
		pocet: "10",
		obyv: [
			{ jm: "David Baron", arch: "David Baron (1867–1914)", q: "" },
			{ jm: "Regine Baron geb. Pokorny", arch: "Regina Baronová (1864–1942)", q: "Q104219136" },
			{ jm: "Alfred Baron", arch: "Alfred Baron (1900–1918)", q: "" },
			{ jm: "Selma Baron", arch: "Selma Baron (1902)", q: "Q104219137" },
			{ jm: "Leopold Weintraub", arch: "Leopold Weintraub (1879)", q: "" },
			{ jm: "Charlotte Weintraubova", arch: "Charlotta Weintraubová (1882)", q: "Q105619271" },
			{ jm: "Hugo Weintraub", arch: "Hugo Weintraub (1906)", q: "Q115663273" },
			{ jm: "Otto Weintraub", arch: "Otto Weintraub (1907)", q: "" },
			{ jm: "Berta Weintraubova", arch: "Berta Weintraubová (1908)", q: "" },
			{ jm: "Malvína Weintraubova", arch: "Malvína Weintraubová (1910)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "107",
		pocet: "2",
		obyv: [
			{ jm: "Regina Baronová", arch: "Regina Baronová (1864–1942)", q: "Q104219136" },
			{ jm: "Selma Baronová", arch: "Selma Baron (1902)", q: "Q104219137" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "108",
		pocet: "6",
		obyv: [
			{ jm: "Hermann Lamm", arch: "Hermann Lamm (1815)", q: "" },
			{ jm: "Rosa Lamm", arch: "Rosi Lamm (1820–1883)", q: "" },
			{ jm: "Sali Lamm", arch: "Sali Lamm (1851)", q: "" },
			{ jm: "Eva Lamm", arch: "Eva Lamm (1855–1926)", q: "" },
			{ jm: "Julie Lamm", arch: "Julie Lamm (1857–1926)", q: "" },
			{ jm: "Antonie Lamm", arch: "Tony Lamm (1862)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "108",
		pocet: "4",
		obyv: [
			{ jm: "Jakob Zimmer", arch: "Jakob Zimmer (1841)", q: "" },
			{ jm: "Anna Zimmer", arch: "Anna Zimmer (1839)", q: "" },
			{ jm: "Hugo Zimmer", arch: "Hugo Zimmer (1869–1928)", q: "" },
			{ jm: "Emilie Zimmer", arch: "Emilie Zimmer (1874)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Hranice",
		cast: "",
		cp: "109",
		pocet: "15",
		obyv: [
			{ jm: "Nathan Morgenstern", arch: "Nathan Morgenstern (1824)", q: "" },
			{ jm: "Rosi Morgenstern", arch: "Rosi Morgenstern (1828)", q: "" },
			{ jm: "Franziska Siebenschein", arch: "Veronika Siebenschein (1813)", q: "" },
			{ jm: "Rebeka Siebenschein", arch: "Rebeka Siebenschein (1821)", q: "" },
			{ jm: "Markus Sommer", arch: "Markus Sommer (1820)", q: "" },
			{ jm: "Resi Sommer", arch: "Resi Sommer (1826)", q: "" },
			{ jm: "Rudolf Sommer", arch: "Rudolf Sommer (1853)", q: "" },
			{ jm: "Josef Sommer", arch: "Josef Sommer (1856)", q: "" },
			{ jm: "Linny Sommer", arch: "Linny Sommer (1855)", q: "" },
			{ jm: "Lippmann Urban", arch: "Liebmann Urban (1820)", q: "" },
			{ jm: "Resi Urban", arch: "Resi Urban (1827)", q: "" },
			{ jm: "Isidor Urban", arch: "Isidor Urban (1853)", q: "" },
			{ jm: "Alois Urban", arch: "Alois Urban (1856)", q: "" },
			{ jm: "Sigmund Urban", arch: "Sigmund Urban (1857–1931)", q: "" },
			{ jm: "Jakob Wolf", arch: "Jakob Wolf (1790)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Hranice",
		cast: "",
		cp: "109",
		pocet: "4",
		obyv: [
			{ jm: "Moses Brauchbar", arch: "Moises Brauchbar (1804–1890)", q: "" },
			{ jm: "Maria Brauchbar", arch: "Marie Brauchbar (1821)", q: "" },
			{ jm: "Wilhelm Brauchbar", arch: "Wilhelm Brauchbar (1841)", q: "" },
			{ jm: "Regina Brauchbar", arch: "Regina Brauchbar (1853)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "109",
		pocet: "2",
		obyv: [
			{ jm: "Isaias Stix", arch: "Isaias Stix (1828–1895)", q: "" },
			{ jm: "Lina Stix", arch: "Lina Stix (1854–1922)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Hranice",
		cast: "",
		cp: "110",
		pocet: "3",
		obyv: [
			{ jm: "Filip Held", arch: "Filip Held (1842)", q: "" },
			{ jm: "Lina Held", arch: "Lina Held (1839)", q: "" },
			{ jm: "Berthold Held", arch: "Berthold Held (1868)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "110",
		pocet: "9",
		obyv: [
			{ jm: "Wolf Siebenschein", arch: "Wolf Siebenschein (1810–1882)", q: "" },
			{ jm: "Katharina Siebenschein", arch: "Katti Siebenschein (1812)", q: "" },
			{ jm: "Moses Brauchbar", arch: "Moises Brauchbar (1804–1890)", q: "" },
			{ jm: "Marie Brauchbar", arch: "Marie Brauchbar (1821)", q: "" },
			{ jm: "Filip Kohn", arch: "Philipp Kohn (1848–1918)", q: "" },
			{ jm: "Cölestine Kohn (1850)", arch: "Cälestine Kohn (1850–1920)", q: "" },
			{ jm: "Richard Kohn", arch: "Richard Kohn (1877)", q: "" },
			{ jm: "Max Kohn", arch: "Max Kuntz (1878)", q: "" },
			{ jm: "Emilie Kohn", arch: "Emilie Kohn (1879)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "110",
		pocet: "1",
		obyv: [
			{ jm: "Rosa Schwarz", arch: "Rosa Schwarz (1856–1941)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Hranice",
		cast: "",
		cp: "112",
		pocet: "3",
		obyv: [
			{ jm: "Salamon Hessinger", arch: "Salomon Hessinger (1820)", q: "" },
			{ jm: "Resy Hessinger", arch: "Resi Hessinger (1827)", q: "" },
			{ jm: "Moritz Hessinger", arch: "Moritz Hessinger (1857)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Hranice",
		cast: "",
		cp: "112",
		pocet: "7",
		obyv: [
			{ jm: "Josefine Hansel", arch: "Josefine Hansel (1817)", q: "" },
			{ jm: "Mathilde Hansel", arch: "Mathilde Taussig (1853–1926)", q: "" },
			{ jm: "Betty Lamm", arch: "Babette Lamm (1827)", q: "" },
			{ jm: "Moritz Lamm", arch: "Moritz Lamm (1863)", q: "" },
			{ jm: "Pepi Lamm", arch: "Josefine Baron (1866–1937)", q: "" },
			{ jm: "Johanna Lamm", arch: "Johanna Lamm (1851)", q: "" },
			{ jm: "Wilhelm Lamm", arch: "Wilhelm Lamm (1854)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "112",
		pocet: "6",
		obyv: [
			{ jm: "Leopold Fischer", arch: "Leopold Fischer (1840–1926)", q: "" },
			{ jm: "Johanna Fischer", arch: "Johanna Fischer (1852–1893)", q: "" },
			{ jm: "Karl Fischer", arch: "Karl Fischer (1876)", q: "" },
			{ jm: "Albert Fischer", arch: "Albert Fischer (1880)", q: "" },
			{ jm: "Markus Fischer", arch: "Markus Fischer (1794)", q: "" },
			{ jm: "Abel Weiss", arch: "Abel Weiss (1867)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "112",
		pocet: "3",
		obyv: [
			{ jm: "Gustav Blitz", arch: "Gustav Blitz (1864)", q: "" },
			{ jm: "Ernestine Blitz", arch: "Ernestine Blitz (1862)", q: "" },
			{ jm: "Salomon Ehrlich", arch: "Salomon Ehrlich (1832)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "112",
		pocet: "3",
		obyv: [
			{ jm: "Gustav Stross", arch: "Gustav Stross (1859–1923)", q: "" },
			{ jm: "Auguste Stross", arch: "Auguste Stross (1868)", q: "Q105610908" },
			{ jm: "Theodor Braun", arch: "Theodor Braun (1874)", q: "Q104412094" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "112",
		pocet: "4",
		obyv: [
			{ jm: "Gustav Stross", arch: "Gustav Stross (1859–1923)", q: "" },
			{ jm: "Auguste Stross", arch: "Auguste Stross (1868)", q: "Q105610908" },
			{ jm: "Alice Stross", arch: "Alice Stross (1902)", q: "" },
			{ jm: "Luise Stross", arch: "Luise Stross (1904)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "112",
		pocet: "4",
		obyv: [
			{ jm: "Gustav Stross", arch: "Gustav Stross (1859–1923)", q: "" },
			{ jm: "Auguste Stross", arch: "Auguste Stross (1868)", q: "Q105610908" },
			{ jm: "Alice Stross", arch: "Alice Stross (1902)", q: "" },
			{ jm: "Luise Stross", arch: "Luise Stross (1904)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Hranice",
		cast: "",
		cp: "113",
		pocet: "8",
		obyv: [
			{ jm: "Joachim Wolf", arch: "Joachim Wolf (1833)", q: "" },
			{ jm: "Charlotte Wolf", arch: "Charlotte Wolf (1835)", q: "" },
			{ jm: "Isidor Wolf", arch: "Isidor Wolf (1862–xxx1)", q: "" },
			{ jm: "Ludwig Wolf", arch: "Ludwig Wolf (1863)", q: "" },
			{ jm: "Adolf Wolf", arch: "Adolf Wolf (1864–xxx1)", q: "" },
			{ jm: "Julius Wolf", arch: "Julius Wolf (1865)", q: "" },
			{ jm: "Sigmund Wolf", arch: "Zikmund Wolf (1866–1942)", q: "Q105640041" },
			{ jm: "Wilhelm Wolf", arch: "Wilhelm Wolf (1867)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "113",
		pocet: "4",
		obyv: [
			{ jm: "Sigmund Rindl", arch: "Sigmund Rindl (1858–1920)", q: "" },
			{ jm: "Emilie Rindl", arch: "Emilie Rindl (1861–1924)", q: "" },
			{ jm: "Auguste Rindl", arch: "Auguste Rindl (1889)", q: "" },
			{ jm: "Hellene Rindl", arch: "Helene Taussik (1890)", q: "Q105614637" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Hranice",
		cast: "",
		cp: "114",
		pocet: "9",
		obyv: [
			{ jm: "Moises Benisch", arch: "Moses Benisch (1816–1893)", q: "" },
			{ jm: "Katharina Benisch", arch: "Katharina Benisch (1818–1904)", q: "" },
			{ jm: "Joachim Benisch", arch: "Jakob Benisch (1846–1910)", q: "" },
			{ jm: "Gustav Benisch", arch: "Gustav Benisch (1854–1905)", q: "Q115663272" },
			{ jm: "Sygmund Benisch", arch: "Sigmund Benisch (1857–1941)", q: "" },
			{ jm: "Amalia Benisch", arch: "Amalie Fuchs (1849)", q: "" },
			{ jm: "Susana Benisch", arch: "Susanna Benisch (1850)", q: "" },
			{ jm: "Josefa Benisch", arch: "Josefa Benisch (1852)", q: "" },
			{ jm: "Cäcilia Benisch", arch: "Cäcilie Wolf (1855)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Hranice",
		cast: "",
		cp: "114",
		pocet: "10",
		obyv: [
			{ jm: "Moses Benesch", arch: "Moses Benisch (1816–1893)", q: "" },
			{ jm: "Katharina Benesch", arch: "Katharina Benisch (1818–1904)", q: "" },
			{ jm: "Jakob Benesch", arch: "Jakob Benisch (1846–1910)", q: "" },
			{ jm: "Amalia Benesch", arch: "Amalie Fuchs (1849)", q: "" },
			{ jm: "Susanna Benesch", arch: "Susanna Benisch (1850)", q: "" },
			{ jm: "Josefa Benesch", arch: "Josefa Benisch (1852)", q: "" },
			{ jm: "Cäcilia Benesch", arch: "Cäcilie Wolf (1855)", q: "" },
			{ jm: "Adolf Benisch", arch: "Adolf Benisch (1859)", q: "" },
			{ jm: "Isidor Benisch", arch: "Isidor Benisch (1860)", q: "" },
			{ jm: "Felix Benisch", arch: "Felix Benisch (1865)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "114",
		pocet: "6",
		obyv: [
			{ jm: "Moses Benesch", arch: "Moses Benisch (1816–1893)", q: "" },
			{ jm: "Katharina Benisch geb. Mandl", arch: "Katharina Benisch (1818–1904)", q: "" },
			{ jm: "Sigmund Bensch", arch: "Sigmund Benisch (1857–1941)", q: "" },
			{ jm: "Adolf Benesch", arch: "Adolf Benisch (1859)", q: "" },
			{ jm: "Felix Benisch", arch: "Felix Benisch (1865)", q: "" },
			{ jm: "Selma Fuchs", arch: "Selma Fuchs (1873)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "114",
		pocet: "5",
		obyv: [
			{ jm: "Moses Benisch", arch: "Moses Benisch (1816–1893)", q: "" },
			{ jm: "Katharina Benisch", arch: "Katharina Benisch (1818–1904)", q: "" },
			{ jm: "Sigmund Benisch", arch: "Sigmund Benisch (1857–1941)", q: "" },
			{ jm: "Adolf Benisch", arch: "Adolf Benisch (1859)", q: "" },
			{ jm: "Isidor Benisch", arch: "Isidor Benisch (1860)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "114",
		pocet: "7",
		obyv: [
			{ jm: "Sigmund Benisch", arch: "Sigmund Benisch (1857–1941)", q: "" },
			{ jm: "Henriette Benisch", arch: "Henriette Benisch (1869)", q: "Q104249057" },
			{ jm: "Stella Benisch", arch: "Stella Baar (1892)", q: "" },
			{ jm: "Hertha Benisch", arch: "Hertha Benisch (1895)", q: "Q104249054" },
			{ jm: "Hilda Benisch", arch: "Hilda Baar (1900)", q: "" },
			{ jm: "Katharina Benisch", arch: "Katharina Benisch (1818–1904)", q: "" },
			{ jm: "Emil Tauber", arch: "Emil Tauber (1882)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "114",
		pocet: "6",
		obyv: [
			{ jm: "Sigmund Benisch", arch: "Sigmund Benisch (1857–1941)", q: "" },
			{ jm: "Henriette Benisch", arch: "Henriette Benisch (1869)", q: "Q104249057" },
			{ jm: "Stella Benisch", arch: "Stella Baar (1892)", q: "" },
			{ jm: "Hertha Benisch", arch: "Hertha Benisch (1895)", q: "Q104249054" },
			{ jm: "Hilda Benisch", arch: "Hilda Baar (1900)", q: "" },
			{ jm: "Bruno Benisch", arch: "Bruno Benisch (1906)", q: "Q104249014" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "114",
		pocet: "6",
		obyv: [
			{ jm: "Sigmund Benisch", arch: "Sigmund Benisch (1857–1941)", q: "" },
			{ jm: "Henriette Benisch", arch: "Henriette Benisch (1869)", q: "Q104249057" },
			{ jm: "Stella Benisch", arch: "Stella Baar (1892)", q: "" },
			{ jm: "Herta Benisch", arch: "Hertha Benisch (1895)", q: "Q104249054" },
			{ jm: "Hilda Benisch", arch: "Hilda Baar (1900)", q: "" },
			{ jm: "Bruno Benisch", arch: "Bruno Benisch (1906)", q: "Q104249014" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Hranice",
		cast: "",
		cp: "115",
		pocet: "5",
		obyv: [
			{ jm: "Moises Hessinger", arch: "Moses Hessinger (1811)", q: "" },
			{ jm: "Fanny Hessinger", arch: "Hani Hessinger (1829)", q: "" },
			{ jm: "Josephine Hessinger", arch: "Josephine Hessinger (1855)", q: "" },
			{ jm: "Marie Hessinger", arch: "Marie Hessinger (1857)", q: "" },
			{ jm: "Markus Hessinger", arch: "Markus Hessinger (1807)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Hranice",
		cast: "",
		cp: "115",
		pocet: "2",
		obyv: [
			{ jm: "Emanuel Singer", arch: "Emanuel Singer (1796)", q: "" },
			{ jm: "Marie Singer", arch: "Marie Singer (1801)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "115",
		pocet: "1",
		obyv: [
			{ jm: "Netti Deutsch", arch: "Netti Deutsch (1830)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "116",
		pocet: "14",
		obyv: [
			{ jm: "Moritz Kohn", arch: "Moritz Kohn (1850)", q: "" },
			{ jm: "Julie Kohn", arch: "Julie Kohn (1857)", q: "" },
			{ jm: "Elsa Kohn", arch: "Elsa Kohn (1879)", q: "" },
			{ jm: "Martha Kohn", arch: "Martha Kohn (1883)", q: "Q105524609" },
			{ jm: "Oswald Kohn", arch: "Oswald Kohn (1884)", q: "" },
			{ jm: "Alice Kohn", arch: "Alice Kohn (1885)", q: "Q105523113" },
			{ jm: "Richard Kohn", arch: "Richard Kohn (1886–1942)", q: "Q105642728" },
			{ jm: "Leopold Fischer", arch: "Leopold Fischer (1840–1926)", q: "" },
			{ jm: "Johanna (Hanni) Fischer geb. Winterstein", arch: "Johanna Fischer (1852–1893)", q: "" },
			{ jm: "Albert Fischer", arch: "Albert Fischer (1880)", q: "" },
			{ jm: "Sigfried Fischer", arch: "Sigfried Fischer (1882)", q: "" },
			{ jm: "Max Fischer", arch: "Max Fischer (1884)", q: "" },
			{ jm: "Bruno Fischer", arch: "Bruno Fischer (1885)", q: "" },
			{ jm: "Richard Fischer", arch: "Richard Fischer (1887)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "116",
		pocet: "6",
		obyv: [
			{ jm: "Sigmund Rindl", arch: "Sigmund Rindl (1858–1920)", q: "" },
			{ jm: "Emilie Rindl geb. Brunner", arch: "Emilie Rindl (1861–1924)", q: "" },
			{ jm: "Auguste Rindl", arch: "Auguste Rindl (1889)", q: "" },
			{ jm: "Helene Rindl", arch: "Helene Taussik (1890)", q: "Q105614637" },
			{ jm: "Berta Rindl", arch: "Bertha Liebermann (1896)", q: "Q105556842" },
			{ jm: "Josef Rindl", arch: "Josef Rindl (1897)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "116",
		pocet: "3",
		obyv: [
			{ jm: "Emilie Rindlova", arch: "Emilie Rindl (1861–1924)", q: "" },
			{ jm: "Berta Rindlova", arch: "Bertha Liebermann (1896)", q: "Q105556842" },
			{ jm: "Anton Handke", arch: "Anton Handke (1860)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Hranice",
		cast: "",
		cp: "117",
		pocet: "15",
		obyv: [
			{ jm: "Abraham Wolf", arch: "Abraham Wolf (1803–1865)", q: "" },
			{ jm: "Antonie Wolf", arch: "Antonie Wolf (1826)", q: "" },
			{ jm: "Leopold Wolf", arch: "Leopold Wolf (1833–1902)", q: "Q115663276" },
			{ jm: "Maxmilian Wolf", arch: "Maxmilian Wolf (1840–xxx1)", q: "" },
			{ jm: "Emanuel Wolf", arch: "Emanuel Wolf (1842)", q: "" },
			{ jm: "Bernhard Wolf", arch: "Bernhard Wolf (1841–1903)", q: "" },
			{ jm: "Wilhelm Wolf", arch: "Wilhelm Wolf (1851)", q: "" },
			{ jm: "Sigmund Wolf", arch: "Sigmund Wolf (1856)", q: "Q115663278" },
			{ jm: "Karoline Wolf", arch: "Karoline Wolf (1838)", q: "" },
			{ jm: "Rosalia Wolf", arch: "Rosalia Wolf (1843)", q: "" },
			{ jm: "Anna Wolf", arch: "Anna Wolf (1847)", q: "" },
			{ jm: "Loyse Wolf", arch: "Luise Deutsch (1852)", q: "" },
			{ jm: "Marie Wolf", arch: "Marie Wolf (1853)", q: "" },
			{ jm: "Julie Wolf", arch: "Julie Rein (1856)", q: "" },
			{ jm: "Fanny Engelsberg", arch: "Fanny Engelsberg (1823)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Hranice",
		cast: "",
		cp: "117",
		pocet: "13",
		obyv: [
			{ jm: "Antonia Wolf", arch: "Antonie Wolf (1826)", q: "" },
			{ jm: "Maxmilian Wolf", arch: "Maxmilian Wolf (1840–xxx1)", q: "" },
			{ jm: "Bernhard Wolf", arch: "Bernhard Wolf (1841–1903)", q: "" },
			{ jm: "Emanuel Wolf", arch: "Emanuel Wolf (1842)", q: "" },
			{ jm: "Anna Wolf", arch: "Anna Wolf (1847)", q: "" },
			{ jm: "Luisa Wolf", arch: "Luise Deutsch (1852)", q: "" },
			{ jm: "Marie Wolf", arch: "Marie Wolf (1853)", q: "" },
			{ jm: "Julie Wolf", arch: "Julie Rein (1856)", q: "" },
			{ jm: "Adolf Wolf", arch: "Adolf Wolf (1859)", q: "" },
			{ jm: "Filipine Adler", arch: "Filipine Adler (1860)", q: "" },
			{ jm: "Gustav Gold", arch: "Gustav Gold (1855)", q: "" },
			{ jm: "Leni Linsner", arch: "Leni Linsner (1841)", q: "" },
			{ jm: "Regina Schwarz", arch: "Regina Schwarz (1850)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "117",
		pocet: "4",
		obyv: [
			{ jm: "Antonie Wolf", arch: "Antonie Wolf (1826)", q: "" },
			{ jm: "Wilhelm Wolf", arch: "Wilhelm Wolf (1851)", q: "" },
			{ jm: "Sigmund Wolf", arch: "Sigmund Wolf (1856)", q: "Q115663278" },
			{ jm: "Emilie Brunner", arch: "Emilie Rindl (1861–1924)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "117",
		pocet: "4",
		obyv: [
			{ jm: "Wilhelm Wolf", arch: "Wilhelm Wolf (1851)", q: "" },
			{ jm: "Ernestine Wolf", arch: "Ernestine Wolf (1866)", q: "" },
			{ jm: "Arthur Wolf", arch: "Arthur Wolf (1887)", q: "" },
			{ jm: "Mathilde Manuel", arch: "Mathilde Manuel (1864)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "117",
		pocet: "9",
		obyv: [
			{ jm: "Bernhard Wolf", arch: "Bernhard Wolf (1841–1903)", q: "" },
			{ jm: "Eugenie Wolf geb. Bermann", arch: "Eugenie Goldenberg (1865–1938)", q: "" },
			{ jm: "Alfred Wolf", arch: "Alfred Wolf (1877–1915)", q: "" },
			{ jm: "Oscar Wolf", arch: "Oskar Wolf (1878)", q: "Q105639995" },
			{ jm: "Adele Wolf", arch: "Adele Wolf (1880)", q: "" },
			{ jm: "Olga Wolf", arch: "Olga Schönbeck (1885)", q: "Q105599348" },
			{ jm: "Fritz Wolf", arch: "Fritz Wolf (1887)", q: "" },
			{ jm: "Ernst Wolf", arch: "Ernst Wolf (1890)", q: "Q105639853" },
			{ jm: "Karoline Koselik", arch: "Karoline Koselik (1877)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "117",
		pocet: "4",
		obyv: [
			{ jm: "Alfred Wolf", arch: "Alfred Wolf (1877–1915)", q: "" },
			{ jm: "Oskar Wolf", arch: "Oskar Wolf (1878)", q: "Q105639995" },
			{ jm: "Ernst Wolf", arch: "Ernst Wolf (1890)", q: "Q105639853" },
			{ jm: "Marie Friedmann", arch: "Marie Feuer (1888)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "117",
		pocet: "3",
		obyv: [
			{ jm: "Oskar Wolf", arch: "Oskar Wolf (1878)", q: "Q105639995" },
			{ jm: "Fritzi Wolf", arch: "Fritzi Herz (1912)", q: "" },
			{ jm: "Herta Wolf", arch: "Herta Wolf (1918)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "118",
		pocet: "1",
		obyv: [
			{ jm: "Arnold Baron", arch: "Arnold Baron (1871)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Hranice",
		cast: "",
		cp: "119",
		pocet: "3",
		obyv: [
			{ jm: "Jakob Sommer", arch: "Jakob Sommer (1837–1890)", q: "" },
			{ jm: "Rosa Sommer", arch: "Rosa Sommer (1837)", q: "" },
			{ jm: "Fanny Adler", arch: "Franziska Hoffmann (1863–1942)", q: "Q104810023" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "119",
		pocet: "10",
		obyv: [
			{ jm: "Jakob Sommer", arch: "Jakob Sommer (1837–1890)", q: "" },
			{ jm: "Rosa Sommer", arch: "Rosa Sommer (1837)", q: "" },
			{ jm: "Fanny Adler", arch: "Franziska Hoffmann (1863–1942)", q: "Q104810023" },
			{ jm: "Samuel Kober", arch: "Samuel Kober (1838–1925)", q: "" },
			{ jm: "Katharina Kober", arch: "Katharina Kober (1850–1914)", q: "" },
			{ jm: "Eugenie Kober", arch: "Eugenie Kober (1873–1892)", q: "" },
			{ jm: "Robert Kober", arch: "Robert Kober (1874)", q: "" },
			{ jm: "Hermann Kober", arch: "Heřman Kober (1879–1943)", q: "Q105521937" },
			{ jm: "Fanny Kober", arch: "Fanny Kober (1808)", q: "" },
			{ jm: "Julius Fischer", arch: "Julius Fischer (1862)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "119",
		pocet: "4",
		obyv: [
			{ jm: "Jakob Lustig", arch: "Jakob Lustig (1855)", q: "Q115663274" },
			{ jm: "Antonie Lustig", arch: "Antonie Lustig (1862)", q: "" },
			{ jm: "Elisabeth Lustig", arch: "Elisabeth Lustig (1880)", q: "" },
			{ jm: "Rosa Lustig", arch: "Rosa Lustig (1882)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "12",
		pocet: "8",
		obyv: [
			{ jm: "Sigmund Berl", arch: "Sigmund Berl (1833–1915)", q: "" },
			{ jm: "Rosa Berl", arch: "Rosa Berl (1867)", q: "" },
			{ jm: "Gerson Steiner", arch: "Gerson Steiner (1846–1894)", q: "" },
			{ jm: "Louise Steiner", arch: "Louise Steiner (1856–1936)", q: "" },
			{ jm: "Moritz Steiner", arch: "Moritz Steiner (1884)", q: "Q105608230" },
			{ jm: "Gottfried Steiner", arch: "Gottfried Steiner (1889)", q: "" },
			{ jm: "Many Steiner", arch: "Marie Steiner (1881)", q: "Q105608140" },
			{ jm: "Malvine Steiner", arch: "Malvine Steiner (1886)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "12",
		pocet: "1",
		obyv: [
			{ jm: "Johann Weigl", arch: "Johann Weigl (1895)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "120",
		pocet: "12",
		obyv: [
			{ jm: "Josef Rein", arch: "Josef Rein (1852–1914)", q: "" },
			{ jm: "Julie Rein", arch: "Julie Rein (1856)", q: "" },
			{ jm: "Arthur Rein", arch: "Arthur Rein (1880)", q: "" },
			{ jm: "Isak Baar", arch: "Isak Baar (1839–1908)", q: "" },
			{ jm: "Sara Baar", arch: "Sara Baar (1850)", q: "" },
			{ jm: "Gustav Baar", arch: "Gustav Baar (1872)", q: "" },
			{ jm: "David Baar", arch: "David Baar (1875–1922)", q: "" },
			{ jm: "Josef Baar", arch: "Josef Baar (1877–1942)", q: "Q104211080" },
			{ jm: "Emil Baar", arch: "Emil Baar (1879)", q: "" },
			{ jm: "Anna Baar", arch: "Anna Baar (1882)", q: "" },
			{ jm: "Viktor Baar", arch: "Viktor Baar (1887)", q: "" },
			{ jm: "Bertha Baar", arch: "Bertha Baar (1888)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "122",
		pocet: "10",
		obyv: [
			{ jm: "Josef Fischer", arch: "Josef Fischer (1848–xxx1)", q: "" },
			{ jm: "Rosalia Fischer", arch: "Rosalia Fischer (1851)", q: "" },
			{ jm: "Regina Fischer", arch: "Regina Fischer (1876)", q: "" },
			{ jm: "Sidonie Fischer", arch: "Sidonie Fischer (1878)", q: "" },
			{ jm: "Wilhlem Lipner", arch: "Wilhlem Lipner (1863)", q: "" },
			{ jm: "Joachim Benesch", arch: "Jakob Benisch (1846–1910)", q: "" },
			{ jm: "Charlotte Benesch", arch: "Charlotte Benisch (1854–1941)", q: "" },
			{ jm: "Amalie Benesch", arch: "Amalie Steinberg (1878)", q: "Q105607116" },
			{ jm: "Robert Benesch", arch: "Robert Benisch (1880)", q: "" },
			{ jm: "Klementine Löw", arch: "Klementine Löw (1866)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "122",
		pocet: "6",
		obyv: [
			{ jm: "Emil Kurz", arch: "Emil Kurz (1836–1908)", q: "" },
			{ jm: "Sofie Kurz", arch: "Sofie Kurz (1844–1919)", q: "" },
			{ jm: "Emma Kurz", arch: "Emma Kurz (1875)", q: "" },
			{ jm: "Moriz Kurz", arch: "Moritz Kurz (1881–1942)", q: "Q105555451" },
			{ jm: "Camilla Kurz", arch: "Camila Kurz (1886)", q: "" },
			{ jm: "Rosa Schwarz", arch: "Rosa Schwarz (1856–1941)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "122",
		pocet: "1",
		obyv: [
			{ jm: "Rosa Schwarz", arch: "Rosa Schwarz (1856–1941)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "122",
		pocet: "6",
		obyv: [
			{ jm: "Otto Pless", arch: "Otto Pless (1881)", q: "Q105573707" },
			{ jm: "Ida Pless", arch: "Ida Plessová (1887)", q: "Q105573701" },
			{ jm: "Walter Pless", arch: "Walter Pless (1913)", q: "Q105573710" },
			{ jm: "Ritta Pless", arch: "Rita Fuchsová (1918)", q: "Q104657159" },
			{ jm: "Friedrich Spiegel", arch: "Friedrich Spiegel (1903)", q: "Q105604270" },
			{ jm: "Rosa Schwarz", arch: "Rosa Schwarz (1856–1941)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "123",
		pocet: "1",
		obyv: [
			{ jm: "Heinrich Beck", arch: "Heinrich Beck (1871)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "128",
		pocet: "5",
		obyv: [
			{ jm: "Hugo Fuchs", arch: "Hugo Fuchs (1885)", q: "Q115657922" },
			{ jm: "Ida Fuchs", arch: "Ida Fuchsová (1887–xxx1)", q: "Q104656970" },
			{ jm: "Max Egger", arch: "Max Egger (1879)", q: "" },
			{ jm: "Irene Egger", arch: "Irene Egger (1888)", q: "Q104448654" },
			{ jm: "Lothar Egger", arch: "Lothar Egger (1910)", q: "Q106870461" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "129",
		pocet: "3",
		obyv: [
			{ jm: "Leopold Fischer", arch: "Leopold Fischer (1858–1919)", q: "" },
			{ jm: "Jenny Fischer", arch: "Eugenie Fischer (1862–1942)", q: "Q104544477" },
			{ jm: "Martha Fischer", arch: "Marta Hein (1885)", q: "Q104705519" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "129",
		pocet: "4",
		obyv: [
			{ jm: "Max Brand", arch: "Max Brand (1865)", q: "" },
			{ jm: "Frieda Brand", arch: "Frieda Brand (1878)", q: "" },
			{ jm: "Else Brand", arch: "Else Brand (1905)", q: "" },
			{ jm: "Liselott Brand", arch: "Liselott Brand (1906)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "129",
		pocet: "4",
		obyv: [
			{ jm: "Max Brand", arch: "Max Brand (1865)", q: "" },
			{ jm: "Frieda Brandová", arch: "Frieda Brand (1878)", q: "" },
			{ jm: "Else Brandová", arch: "Else Brand (1905)", q: "" },
			{ jm: "Liselotte Brandová", arch: "Liselott Brand (1906)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Hranice",
		cast: "",
		cp: "13",
		pocet: "7",
		obyv: [
			{ jm: "Anna Wolf", arch: "Anna Wolf (1806)", q: "" },
			{ jm: "Joachim Wolf", arch: "Joachim Wolf (1833)", q: "" },
			{ jm: "Nehemias Wolf", arch: "Nehemias Wolf (1836)", q: "" },
			{ jm: "Katty Wolf", arch: "Katti Wolf (1839)", q: "" },
			{ jm: "Amalia Wolf", arch: "Amalia Wolf (1841)", q: "" },
			{ jm: "Julie Wolf", arch: "Julie Wolf (1843)", q: "" },
			{ jm: "Karoline Wolf", arch: "Karoline Wolf (1846)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "13",
		pocet: "3",
		obyv: [
			{ jm: "Max Adler", arch: "Max Adler (1863–1943)", q: "" },
			{ jm: "Karoline Adler", arch: "Karoline Adler (1863)", q: "" },
			{ jm: "Bruno Adler", arch: "Bruno Adler (1890–1915)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "136",
		pocet: "5",
		obyv: [
			{ jm: "Max Seidler", arch: "Max Seidler (1853–1929)", q: "" },
			{ jm: "Therese Seidler", arch: "Therese Seidler (1858–1914)", q: "" },
			{ jm: "Anna Seidler", arch: "Anna Seidlerová (1892)", q: "Q105601515" },
			{ jm: "Cecilie Seidler", arch: "Cäcilie Guttmann (1894–1942)", q: "Q105517507" },
			{ jm: "Otto Seidler", arch: "Otto Seidler (1896)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Hranice",
		cast: "",
		cp: "139",
		pocet: "1",
		obyv: [
			{ jm: "Emanuel Morgenstern", arch: "Emanuel Morgenstern (1803)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Hranice",
		cast: "",
		cp: "14",
		pocet: "3",
		obyv: [
			{ jm: "Wilhelm Wolf", arch: "Wilhelm Wolf (1829–1896)", q: "" },
			{ jm: "Waleska Wolf", arch: "Valeska Wolf (1835)", q: "" },
			{ jm: "Sigmund Wolf", arch: "Sigmund Wolf (1856–1912)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Hranice",
		cast: "",
		cp: "14",
		pocet: "6",
		obyv: [
			{ jm: "Wilhelm Wolf", arch: "Wilhelm Wolf (1829–1896)", q: "" },
			{ jm: "Valeska Wolf", arch: "Valeska Wolf (1835)", q: "" },
			{ jm: "Sigmund Wolf", arch: "Sigmund Wolf (1856–1912)", q: "" },
			{ jm: "Friederike Wolf", arch: "Friederike Wolf (1869)", q: "" },
			{ jm: "Florentine Freund", arch: "Florentine Freund (1843)", q: "" },
			{ jm: "Rosalia Ekstein", arch: "Rosalia Ekstein (1851)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "14",
		pocet: "6",
		obyv: [
			{ jm: "Gerson Steiner", arch: "Gerson Steiner (1846–1894)", q: "" },
			{ jm: "Louise Steiner", arch: "Louise Steiner (1856–1936)", q: "" },
			{ jm: "Adolf Müller", arch: "Adolf Müller (1854–1924)", q: "" },
			{ jm: "Johanna Müller", arch: "Johanna Müller (1850–1920)", q: "" },
			{ jm: "Siegfried Müller", arch: "Siegfried Müller (1878)", q: "" },
			{ jm: "Max Müller", arch: "Max Müller (1880)", q: "Q105651102" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "14",
		pocet: "4",
		obyv: [
			{ jm: "Isidor Schwarz", arch: "Isidor Schwarz (1853)", q: "" },
			{ jm: "Minna Schwarz", arch: "Minna Schwarz (1862)", q: "" },
			{ jm: "Hilda Schwarz", arch: "Hilda Schwarz (1883)", q: "" },
			{ jm: "Zdenko Mannaberg", arch: "Zdenko Mannaberg (1873)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "140",
		pocet: "11",
		obyv: [
			{ jm: "Leopold Fischer", arch: "Leopold Fischer (1840–1926)", q: "" },
			{ jm: "Albert Fischer", arch: "Albert Fischer (1880)", q: "" },
			{ jm: "Max Fischer", arch: "Max Fischer (1884)", q: "" },
			{ jm: "Bruno Fischer", arch: "Bruno Fischer (1885)", q: "" },
			{ jm: "Richard Fischer", arch: "Richard Fischer (1887)", q: "" },
			{ jm: "Sigmund Neumann", arch: "Sigmund Neumann (1866)", q: "" },
			{ jm: "Sofie Neumann", arch: "Sofie Neumann (1866–1939)", q: "" },
			{ jm: "Gottfried Neumann", arch: "Gottfried Neumann (1895)", q: "" },
			{ jm: "Otto Neumann", arch: "Otto Neumann (1897)", q: "" },
			{ jm: "Marie Neumann", arch: "Marie Neumann (1898)", q: "Q105567170" },
			{ jm: "Elsa Neumann", arch: "Elsa Glück (1900)", q: "Q104658461" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "140",
		pocet: "1",
		obyv: [
			{ jm: "Leopold Fischer", arch: "Leopold Fischer (1840–1926)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "140",
		pocet: "1",
		obyv: [
			{ jm: "Leopold Fischer", arch: "Leopold Fischer (1840–1926)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "15",
		pocet: "1",
		obyv: [
			{ jm: "Manolo Halfon", arch: "Manolo Halfon (1871)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "15",
		pocet: "4",
		obyv: [
			{ jm: "Magon Maues (??)", arch: "Magon Maues (1876)", q: "" },
			{ jm: "Tewel Rosenzweig", arch: "Tewel Rosenzweig (1877)", q: "Q106821656" },
			{ jm: "Jindřich Agular", arch: "Jindřich Agular (1871)", q: "" },
			{ jm: "Leo Süss", arch: "Leo Süss (1884)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "161",
		pocet: "1",
		obyv: [
			{ jm: "Josef Widder", arch: "Joseph Widder (1817)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "17",
		pocet: "1",
		obyv: [
			{ jm: "Jakob Kaiser", arch: "Jakob Kaiser (1825)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Hranice",
		cast: "",
		cp: "174",
		pocet: "6",
		obyv: [
			{ jm: "Markus Rosenfeld", arch: "Markus Rosenfeld (1796)", q: "" },
			{ jm: "Rosalia Rosenfeld", arch: "Rosalia Rosenfeld (1802)", q: "" },
			{ jm: "Josef Donath", arch: "Josef Donath (1830)", q: "" },
			{ jm: "Joachim Donath", arch: "Joachim Rosenfeld (1838)", q: "" },
			{ jm: "Betti Donath", arch: "Betti Donath (1834)", q: "" },
			{ jm: "Minni Donath", arch: "Minni Donath (1845)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "176",
		pocet: "1",
		obyv: [
			{ jm: "Alexander Fuchs", arch: "Alexander Fuchs (1872)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Hranice",
		cast: "",
		cp: "177",
		pocet: "2",
		obyv: [
			{ jm: "Wolf Kulka", arch: "Wilhelm Kulka (1828–1914)", q: "" },
			{ jm: "Cäcilia Kulka", arch: "Cäcilia Kulka (1828)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "18",
		pocet: "1",
		obyv: [
			{ jm: "Sigmund Perl", arch: "Sigmund Perl (1833)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "181",
		pocet: "3",
		obyv: [
			{ jm: "Markus Hoffmann", arch: "Max Hoffmann (1876)", q: "" },
			{ jm: "Mathilde Hoffmann", arch: "Mathilde Hoffmann (1885)", q: "" },
			{ jm: "Gertrude Hoffmann", arch: "Gertrude Hoffmann (1908)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "183",
		pocet: "3",
		obyv: [
			{ jm: "Rosa Sommer", arch: "Rosa Sommer (1837)", q: "" },
			{ jm: "Samuel Hoffmann", arch: "Samuel Hoffmann (1866–1942)", q: "Q104810124" },
			{ jm: "Fanny Adler", arch: "Franziska Hoffmann (1863–1942)", q: "Q104810023" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "183",
		pocet: "6",
		obyv: [
			{ jm: "Samuel Hoffmann", arch: "Samuel Hoffmann (1866–1942)", q: "Q104810124" },
			{ jm: "Franziska Hoffmann", arch: "Franziska Hoffmann (1863–1942)", q: "Q104810023" },
			{ jm: "Alice Hoffmann", arch: "Alice Hoffmann (1894)", q: "" },
			{ jm: "Ottokar Hoffmann", arch: "Ottokar Hoffmann (1892)", q: "" },
			{ jm: "Rosa Sommer", arch: "Rosa Sommer (1837)", q: "" },
			{ jm: "Max Hoffmann", arch: "Max Hoffmann (1876)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "183",
		pocet: "4",
		obyv: [
			{ jm: "Markus Hoffmann", arch: "Max Hoffmann (1876)", q: "" },
			{ jm: "Hilda Hoffmann", arch: "Mathilde Hoffmann (1885)", q: "" },
			{ jm: "Gertrud Hoffmann", arch: "Gertrude Hoffmann (1908)", q: "" },
			{ jm: "Georg Hoffmann", arch: "Georg Hoffmann (1911)", q: "Q106870933" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "186",
		pocet: "3",
		obyv: [
			{ jm: "Max Weissbrott", arch: "Max Weissbrod (1875)", q: "Q115663277" },
			{ jm: "Theresie Weissbrott", arch: "Theresie Weissbrod (1877)", q: "" },
			{ jm: "Leo Weissbrott", arch: "Leo Weissbrott (1900)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Hranice",
		cast: "",
		cp: "187",
		pocet: "7",
		obyv: [
			{ jm: "Adolf Wolf", arch: "Adolf Wolf (1824–1891)", q: "" },
			{ jm: "Ernestine Wolf", arch: "Ernestine Wolf (1835)", q: "" },
			{ jm: "Emil Wolf", arch: "Emil Wolf (1853)", q: "" },
			{ jm: "Sigmund Wolf", arch: "Sigmund Wolf (1857–xxx1)", q: "" },
			{ jm: "Amalia Wolf", arch: "Amalie Glück (1855)", q: "" },
			{ jm: "Marie Wolf", arch: "Marie Wolf (1799–1868)", q: "" },
			{ jm: "Maxmilian Wolf", arch: "Maxmilian Wolf (1840–1886)", q: "Q6795395" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Hranice",
		cast: "",
		cp: "187",
		pocet: "7",
		obyv: [
			{ jm: "Adolf Wolf", arch: "Adolf Wolf (1824–1891)", q: "" },
			{ jm: "Ernestine Wolf", arch: "Ernestine Wolf (1835)", q: "" },
			{ jm: "Amalie Glück", arch: "Amalie Glück (1855)", q: "" },
			{ jm: "Hugo Sigmund Wolf", arch: "Hugo Wolf (1857)", q: "" },
			{ jm: "Adele Spitzer", arch: "Adele Spitzer (1862)", q: "" },
			{ jm: "Hildegard Berliner", arch: "Hildegard Berliner (1843)", q: "" },
			{ jm: "Netti Braun", arch: "Netti Braun (1847)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "187",
		pocet: "6",
		obyv: [
			{ jm: "Leopold Hirschl", arch: "Leopold Hirschl (1863)", q: "" },
			{ jm: "Pauline Hirschl geb. Herschler", arch: "Pauline Hirschl (1866)", q: "Q104703974" },
			{ jm: "Berthold Isidor Hirschl", arch: "Berthold Hirschl (1890)", q: "" },
			{ jm: "Albine Carola Hirschl", arch: "Albine Hirschl (1896)", q: "" },
			{ jm: "Josef Hirschl", arch: "Josef Hirschl (1888)", q: "" },
			{ jm: "Ludwig Bandler", arch: "Ludwig Bandler (1885)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "187",
		pocet: "2",
		obyv: [
			{ jm: "Leopold Fischer jun.", arch: "Leopold Fischer (1858–1919)", q: "" },
			{ jm: "Eugenie Fischer", arch: "Eugenie Fischer (1862–1942)", q: "Q104544477" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "187",
		pocet: "5",
		obyv: [
			{ jm: "Eugenie Fischer", arch: "Eugenie Fischer (1862–1942)", q: "Q104544477" },
			{ jm: "Alfred Hein", arch: "Alfred Hein (1881–1944)", q: "Q104705508" },
			{ jm: "Marta Hein", arch: "Marta Hein (1885)", q: "Q104705519" },
			{ jm: "Walter Hahn", arch: "Walter Hahn (1908)", q: "" },
			{ jm: "Egon Hein", arch: "Egon Hein (1915)", q: "Q104705510" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Hranice",
		cast: "",
		cp: "188",
		pocet: "6",
		obyv: [
			{ jm: "Salamon Ehrlich", arch: "Salomon Ehrlich (1832)", q: "" },
			{ jm: "Henriette Ehrlich", arch: "Henriette Ehrlich (1836)", q: "" },
			{ jm: "Eugen Reich", arch: "Eugen Reich (1855)", q: "" },
			{ jm: "Max Reich", arch: "Max Reich (1858)", q: "" },
			{ jm: "Ferdinand Reich", arch: "Ferdinand Reich (1860)", q: "" },
			{ jm: "Bernhard Löw", arch: "Bernhard Löw (1843)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "188",
		pocet: "1",
		obyv: [
			{ jm: "Salomon Ehrlich", arch: "Salomon Ehrlich (1832)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "188",
		pocet: "5",
		obyv: [
			{ jm: "Samuel Fischel", arch: "Samuel Fischl (1857)", q: "" },
			{ jm: "Fanny Fischel", arch: "Fanny Fischel (1862–1925)", q: "" },
			{ jm: "Erwin Fischel", arch: "Erwin Fischel (1888)", q: "" },
			{ jm: "Hedwig Fischel", arch: "Hedwig Fischel (1885)", q: "" },
			{ jm: "Camilla Fischel", arch: "Camilla Fischel (1886)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "188",
		pocet: "7",
		obyv: [
			{ jm: "Samuel Fischl", arch: "Samuel Fischl (1857)", q: "" },
			{ jm: "Fanni Fischl geb. Schlesinger", arch: "Fanny Fischel (1862–1925)", q: "" },
			{ jm: "Hedwig Fischl", arch: "Hedwig Fischel (1885)", q: "" },
			{ jm: "Camilla Fischl", arch: "Camilla Fischel (1886)", q: "" },
			{ jm: "Erwin Fischl", arch: "Erwin Fischel (1888)", q: "" },
			{ jm: "Robert Fischl", arch: "Robert Fischl (1894)", q: "" },
			{ jm: "Paul Fischl", arch: "Paul Fischl (1900)", q: "Q104543246" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Hranice",
		cast: "",
		cp: "19",
		pocet: "8",
		obyv: [
			{ jm: "Betti Fröhlich", arch: "Barbara Fröhlich (1806)", q: "" },
			{ jm: "Moritz Fröhlich", arch: "Moritz Fröhlich (1824)", q: "" },
			{ jm: "Salamon Fröhlich", arch: "Salomon Fröhlich (1826)", q: "" },
			{ jm: "Benjamin Fröhlich", arch: "Benjamin Fröhlich (1832)", q: "" },
			{ jm: "Marie Fröhlich", arch: "Marie Fröhlich (1828)", q: "" },
			{ jm: "Susana Fröhlich", arch: "Susana Fröhlich (1834)", q: "" },
			{ jm: "Ig. Bruck", arch: "Ignatz Bruck (1846)", q: "" },
			{ jm: "Leopold Bruck", arch: "Leopold Bruck (1847)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "19",
		pocet: "6",
		obyv: [
			{ jm: "Josef Gewürz", arch: "Josef Gewürz (1873–1942)", q: "Q104657947" },
			{ jm: "Arnoštka Gewürzova", arch: "Ernestine Gewürz (1880)", q: "Q104657942" },
			{ jm: "Berthold Gewürz", arch: "Berthold Gewürz (1901)", q: "Q104657944" },
			{ jm: "Otto Gewürz", arch: "Otto Gewürz (1903)", q: "Q104657949" },
			{ jm: "Bohdan Gewürz", arch: "Bohdan Gewürz (1912)", q: "" },
			{ jm: "Jindřich Gewürz", arch: "Jindřich Gewürz (1919)", q: "Q104657946" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "190",
		pocet: "2",
		obyv: [
			{ jm: "Max Hoffmann", arch: "Max Hoffmann (1862)", q: "" },
			{ jm: "Hermine Hoffmann", arch: "Hermine Hoffmann (1865)", q: "Q104810038" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "191",
		pocet: "3",
		obyv: [
			{ jm: "Ludwig Altenstein", arch: "Ludwig Altenstein (1868)", q: "" },
			{ jm: "Frieda Altenstein", arch: "Friederike Altenstein (1877)", q: "Q104209224" },
			{ jm: "Theodor Altenstein", arch: "Theodor Altenstein (1916)", q: "Q104209209" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "192",
		pocet: "5",
		obyv: [
			{ jm: "Jakob Stammberger", arch: "Jakob Stammberger (1854)", q: "" },
			{ jm: "Auguste Stammberger", arch: "Auguste Stammberger (1852)", q: "" },
			{ jm: "Moritz Stammberger", arch: "Moritz Stammberger (1878)", q: "" },
			{ jm: "Ernestine Stammberger", arch: "Ernestine Stammberger (1880)", q: "" },
			{ jm: "Ignaz Weiss", arch: "Ignaz Weiss (1861)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "193",
		pocet: "2",
		obyv: [
			{ jm: "Josef Reichmann", arch: "Josef Reichmann (1863–1918)", q: "" },
			{ jm: "Justine Reichmann", arch: "Justine Hindls (1870–1927)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "196",
		pocet: "1",
		obyv: [
			{ jm: "Jakob Reiss", arch: "Jakob Reiss (1859)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Hranice",
		cast: "",
		cp: "2",
		pocet: "13",
		obyv: [
			{ jm: "Josef Goldstein", arch: "Josef Goldstein (1819)", q: "" },
			{ jm: "Hanny Goldstein", arch: "Hanni Goldstein (1827)", q: "" },
			{ jm: "Salomon Goldstein", arch: "Salomon Goldstein (1851–1925)", q: "" },
			{ jm: "Leopold Goldstein", arch: "Leopold Goldstein (1853)", q: "" },
			{ jm: "Herrman Lamm", arch: "Hermann Lamm (1815)", q: "" },
			{ jm: "Rosi Lamm", arch: "Rosi Lamm (1820–1883)", q: "" },
			{ jm: "Saly Lamm", arch: "Sali Lamm (1851)", q: "" },
			{ jm: "Eva Lamm", arch: "Eva Lamm (1855–1926)", q: "" },
			{ jm: "Julie Lamm", arch: "Julie Lamm (1857–1926)", q: "" },
			{ jm: "Amalia Lamm", arch: "Amalia Lamm (1801)", q: "" },
			{ jm: "Markus Stern", arch: "Markus Stern (1795–1868)", q: "" },
			{ jm: "Judita Stern", arch: "Judita Stern (1794–1867)", q: "" },
			{ jm: "Michal Stern", arch: "Michal Stern (1827)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Hranice",
		cast: "",
		cp: "2",
		pocet: "12",
		obyv: [
			{ jm: "Amalie Eisner", arch: "Amalie Eisner (1830)", q: "" },
			{ jm: "Anna Eisner", arch: "Anna Eisner (1855)", q: "" },
			{ jm: "Netty Eisner", arch: "Netty Eisner (1857)", q: "" },
			{ jm: "Julius Eisner", arch: "Julius Eisner (1861)", q: "" },
			{ jm: "Max Eisner", arch: "Max Eisner (1865)", q: "" },
			{ jm: "Adolf Eisner", arch: "Adolf Eisner (1867–1925)", q: "" },
			{ jm: "Ludwig Eisner", arch: "Ludwig Eisner (1868)", q: "" },
			{ jm: "Isak Baron", arch: "Isak Baron (1832)", q: "" },
			{ jm: "Katty Baron", arch: "Katty Baron (1845)", q: "" },
			{ jm: "Manni Baron", arch: "Emanuel Baron (1860)", q: "" },
			{ jm: "Sally Baron", arch: "Sally Baron (1858)", q: "" },
			{ jm: "Betty Fuchs", arch: "Betty Fuchs (1853)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "2",
		pocet: "17",
		obyv: [
			{ jm: "Karl Eisner", arch: "Karl Eisner (1825–1901)", q: "" },
			{ jm: "Maria Eisner", arch: "Amalie Eisner (1830)", q: "" },
			{ jm: "Netty Eisner", arch: "Netty Eisner (1857)", q: "" },
			{ jm: "Julius Eisner", arch: "Julius Eisner (1861)", q: "" },
			{ jm: "Maxmilian Eisner", arch: "Max Eisner (1865)", q: "" },
			{ jm: "Adolf Eisner", arch: "Adolf Eisner (1867–1925)", q: "" },
			{ jm: "Ludwig Eisner", arch: "Ludwig Eisner (1868)", q: "" },
			{ jm: "Leopold Eisner", arch: "Leopold Eisner (1870)", q: "" },
			{ jm: "Hermann Widder", arch: "Hermann Widder (1837–1926)", q: "" },
			{ jm: "Marie Widder", arch: "Marie Widder (1837–1923)", q: "" },
			{ jm: "Bertha Widder", arch: "Bertha Widder (1867)", q: "" },
			{ jm: "Cilli Widder", arch: "Cilly Widder (1869)", q: "" },
			{ jm: "Max Widder", arch: "Max Widder (1871)", q: "Q105638641" },
			{ jm: "Louis Widder", arch: "Luis Widder (1873)", q: "Q105638640" },
			{ jm: "Marie Widder", arch: "Marie Widder (1877)", q: "" },
			{ jm: "Moritz Widder", arch: "Moritz Widder (1878)", q: "" },
			{ jm: "Adolf Widder", arch: "Adolf Widder (1880)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "2",
		pocet: "2",
		obyv: [
			{ jm: "Amalie Eisner", arch: "Amalie Eisner (1830)", q: "" },
			{ jm: "Josefine Hansel", arch: "Josefine Hansel (1817)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "2",
		pocet: "10",
		obyv: [
			{ jm: "Karl Eisner", arch: "Karl Eisner (1825–1901)", q: "" },
			{ jm: "Amalie Eisner", arch: "Amalie Eisner (1830)", q: "" },
			{ jm: "Max Eisner", arch: "Max Eisner (1865)", q: "" },
			{ jm: "Hermann Widder", arch: "Hermann Widder (1837–1926)", q: "" },
			{ jm: "Marie Widder", arch: "Marie Widder (1837–1923)", q: "" },
			{ jm: "Max Widder", arch: "Max Widder (1871)", q: "Q105638641" },
			{ jm: "Louis Widder", arch: "Luis Widder (1873)", q: "Q105638640" },
			{ jm: "Marie Widder", arch: "Marie Widder (1877)", q: "" },
			{ jm: "Moritz Widder", arch: "Moritz Widder (1878)", q: "" },
			{ jm: "Sigmund Kohn", arch: "Sigmund Kohn (1890)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "2",
		pocet: "6",
		obyv: [
			{ jm: "Adolf Schlesinger", arch: "Adolf Schlesinger (1868–1931)", q: "" },
			{ jm: "Malvine Schlesingrová", arch: "Malwine Schlesinger (1879)", q: "Q105598463" },
			{ jm: "Kurt Schlesinger", arch: "Kurt Schlesinger (1907)", q: "" },
			{ jm: "Felix Schlesinger", arch: "Felix Schlesinger (1870)", q: "Q105598381" },
			{ jm: "Erna Schlesinger", arch: "Ernestine Schlesinger (1876)", q: "Q105598371" },
			{ jm: "Edith Schlesinger", arch: "Edith Schlesinger (1902)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Hranice",
		cast: "",
		cp: "20",
		pocet: "5",
		obyv: [
			{ jm: "Max Wolf", arch: "Maxmilian Wolf (1840–1886)", q: "Q6795395" },
			{ jm: "Rosalie Wolf", arch: "Rosalie Wolf (1841)", q: "" },
			{ jm: "Margareta Wolf", arch: "Margareta Wolf (1867)", q: "" },
			{ jm: "Johannes Wolf", arch: "Johannes Wolf (1868)", q: "" },
			{ jm: "Maria Wolf", arch: "Maria Wolf (1869)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "20",
		pocet: "5",
		obyv: [
			{ jm: "Dr. Wilhelm Bloch", arch: "Wilhelm Bloch (1851–1918)", q: "" },
			{ jm: "Eugenie Bloch", arch: "Eugenie Bloch (1856–1918)", q: "" },
			{ jm: "Else Bloch", arch: "Else Bloch (1881)", q: "" },
			{ jm: "Richard Erwin Bloch", arch: "Richard Erwin Bloch (1882)", q: "" },
			{ jm: "Anna Stefanie Bloch", arch: "Anna Stefanie Bloch (1889)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "20",
		pocet: "3",
		obyv: [
			{ jm: "Theodor Braun", arch: "Theodor Braun (1874)", q: "Q104412094" },
			{ jm: "Marie Braun", arch: "Marie Braun (1876)", q: "Q104412027" },
			{ jm: "Hugo Blumenfeld", arch: "Hugo Blumenfeld (1896)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "20",
		pocet: "2",
		obyv: [
			{ jm: "Theodor Braun", arch: "Theodor Braun (1874)", q: "Q104412094" },
			{ jm: "Marie Braun", arch: "Marie Braun (1876)", q: "Q104412027" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Hranice",
		cast: "",
		cp: "203",
		pocet: "6",
		obyv: [
			{ jm: "Noe Stross", arch: "Noe Stross (1822–1897)", q: "" },
			{ jm: "Josefine Stross", arch: "Josefine Stross (1827–1895)", q: "" },
			{ jm: "Ludwig Stross", arch: "Ludwig Stross (1852)", q: "" },
			{ jm: "Sigmund Stross", arch: "Sigmund Stross (1854)", q: "" },
			{ jm: "Amalia Stross", arch: "Amalia Stross (1853)", q: "" },
			{ jm: "Hermine Stross", arch: "Hermine Stross (1856)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Hranice",
		cast: "",
		cp: "203",
		pocet: "9",
		obyv: [
			{ jm: "Noe Stross", arch: "Noe Stross (1822–1897)", q: "" },
			{ jm: "Josefine Stross", arch: "Josefine Stross (1827–1895)", q: "" },
			{ jm: "Ludwig Stross", arch: "Ludwig Stross (1852)", q: "" },
			{ jm: "Felix Stross", arch: "Felix Stross (1857–1871)", q: "" },
			{ jm: "Sofie Stross", arch: "Sofie Wolf (1861)", q: "" },
			{ jm: "Gustav Stross", arch: "Gustav Stross (1864–1942)", q: "Q105610909" },
			{ jm: "Marie Stross", arch: "Marie Stross (1868)", q: "Q105505804" },
			{ jm: "Mathilde Stein", arch: "Mathilde Stein (1847)", q: "" },
			{ jm: "Louise Steinhardt", arch: "Louise Steinhardt (1843)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "203",
		pocet: "5",
		obyv: [
			{ jm: "Noe Stross", arch: "Noe Stross (1822–1897)", q: "" },
			{ jm: "Josefine Stross", arch: "Josefine Stross (1827–1895)", q: "" },
			{ jm: "Sigmund Stross", arch: "Sigmund Stross (1854)", q: "" },
			{ jm: "Sofie Stross", arch: "Sofie Wolf (1861)", q: "" },
			{ jm: "Marie Stross", arch: "Marie Stross (1868)", q: "Q105505804" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "203",
		pocet: "3",
		obyv: [
			{ jm: "Noe Stross", arch: "Noe Stross (1822–1897)", q: "" },
			{ jm: "Josefine Stross", arch: "Josefine Stross (1827–1895)", q: "" },
			{ jm: "Marie Stross", arch: "Marie Stross (1868)", q: "Q105505804" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "203",
		pocet: "4",
		obyv: [
			{ jm: "David Baron", arch: "David Baron (1867–1914)", q: "" },
			{ jm: "Regine Baron", arch: "Regina Baronová (1864–1942)", q: "Q104219136" },
			{ jm: "Alfred Baron", arch: "Alfred Baron (1900–1918)", q: "" },
			{ jm: "Sali Pokorny", arch: "Rosalie Pokorny (1828)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "203",
		pocet: "4",
		obyv: [
			{ jm: "Dr. Eduard Bass", arch: "Eduard Bass (1855–1921)", q: "" },
			{ jm: "Bedřiška Bassová", arch: "Friederike Bass (1867)", q: "" },
			{ jm: "Hanuška Schärf", arch: "Hanuška Schärf (1917)", q: "" },
			{ jm: "Erika Schärf", arch: "Erika Schärf (1919)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "204",
		pocet: "3",
		obyv: [
			{ jm: "Dr. Stefanie Pollach", arch: "Stefanie Pollach (1882)", q: "Q105574342" },
			{ jm: "Bertha Pollach", arch: "Bertha Pollach (1879)", q: "Q105574334" },
			{ jm: "Minna Löw", arch: "Minna Löw (1841)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "208",
		pocet: "1",
		obyv: [
			{ jm: "Justina Reichmannová", arch: "Justine Hindls (1870–1927)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Hranice",
		cast: "",
		cp: "209",
		pocet: "10",
		obyv: [
			{ jm: "Samuel Wolf", arch: "Samuel Wolf (1831–1909)", q: "" },
			{ jm: "Louise Wolf", arch: "Louise Wolf (1834–1905)", q: "" },
			{ jm: "Eugenie Wolf", arch: "Eugenie Bloch (1856–1918)", q: "" },
			{ jm: "Siegmund Richard Wolf", arch: "Richard Wolf (1857–1938)", q: "Q109413790" },
			{ jm: "Ida Wolf", arch: "Ida Kraus (1859)", q: "" },
			{ jm: "Olga Wolf", arch: "Olga Brüll (1861)", q: "" },
			{ jm: "Laura Wolf", arch: "Laura Meyer (1862)", q: "" },
			{ jm: "Alfred Wolf", arch: "Alfred Wolf (1868)", q: "" },
			{ jm: "Filipine Sington", arch: "Filipine Sington (1843)", q: "" },
			{ jm: "Fanny Braun", arch: "Fanny Braun (1843)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "209",
		pocet: "10",
		obyv: [
			{ jm: "Samuel Wolf", arch: "Samuel Wolf (1831–1909)", q: "" },
			{ jm: "Louise Wolf geb. Skutezki", arch: "Louise Wolf (1834–1905)", q: "" },
			{ jm: "Ida Wolf", arch: "Ida Kraus (1859)", q: "" },
			{ jm: "Olga Wolf", arch: "Olga Brüll (1861)", q: "" },
			{ jm: "Laura Meyer", arch: "Laura Meyer (1862)", q: "" },
			{ jm: "Alfred Wolf", arch: "Alfred Wolf (1868)", q: "" },
			{ jm: "Hubert Wolf", arch: "Hubert Wolf (1870–1942)", q: "Q105639924" },
			{ jm: "Franziska Winkler", arch: "Franziska Winkler (1854)", q: "" },
			{ jm: "Wilhelm Bloch", arch: "Wilhelm Bloch (1851–1918)", q: "" },
			{ jm: "Eugenie Bloch", arch: "Eugenie Bloch (1856–1918)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "209",
		pocet: "8",
		obyv: [
			{ jm: "Jenny Bachrach geb. Roth", arch: "Janette Bachrach (1858–1936)", q: "" },
			{ jm: "Heinrich Bachrach", arch: "Heinrich Bachrach (1850–1923)", q: "" },
			{ jm: "Maria Bachrach", arch: "Maria Bachrach (1879–1926)", q: "" },
			{ jm: "Max Bachrach", arch: "Max Bachrach (1887)", q: "" },
			{ jm: "Fanny Bachrach", arch: "Fanni Bachrach (1891)", q: "Q104211303" },
			{ jm: "Emil Bachrach", arch: "Emil Bachrach (1892)", q: "Q115663268" },
			{ jm: "Leo Bachrach", arch: "Leo Bachrach (1894)", q: "" },
			{ jm: "Edmund Bachrach", arch: "Edmund Bachrach (1882)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "210",
		pocet: "4",
		obyv: [
			{ jm: "Filip Heide", arch: "Filip Heide (1887)", q: "" },
			{ jm: "Sofie Heide", arch: "Sofie Heide (1883)", q: "" },
			{ jm: "Max Heide", arch: "Max Heide (1908)", q: "" },
			{ jm: "Markus Heide", arch: "Markus Heide (1913)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Hranice",
		cast: "",
		cp: "211",
		pocet: "13",
		obyv: [
			{ jm: "Wolf Siebenschein", arch: "Wolf Siebenschein (1810–1882)", q: "" },
			{ jm: "Katty Siebenschein", arch: "Katti Siebenschein (1812)", q: "" },
			{ jm: "Adolf Siebenschein", arch: "Adolf Siebenschein (1846)", q: "" },
			{ jm: "Hanny Siebenschein", arch: "Hanni Siebenschein (1843)", q: "" },
			{ jm: "Augustine Siebenschein", arch: "Augustine Siebenschein (1848)", q: "" },
			{ jm: "Adlheit Siebenschein", arch: "Adelheid Siebenschein (1848)", q: "" },
			{ jm: "Fanny Siebenschein", arch: "Fanny Siebenschein (1850)", q: "" },
			{ jm: "Mathilde Siebenschein", arch: "Mathilde Siebenschein (1851)", q: "" },
			{ jm: "Cäcilia Siebenschein", arch: "Cäcilia Siebenschein (1854)", q: "" },
			{ jm: "Samuel Wolf", arch: "Samuel Wolf (1831–1909)", q: "" },
			{ jm: "Louise Wolf", arch: "Louise Wolf (1834–1905)", q: "" },
			{ jm: "Sigmund Wolf", arch: "Sigmund Wolf (1857)", q: "" },
			{ jm: "Eugenie Wolf", arch: "Eugenie Bloch (1856–1918)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "211",
		pocet: "10",
		obyv: [
			{ jm: "Max Heller", arch: "Max Heller (1829–1899)", q: "" },
			{ jm: "Amalia Heller geb. Marburg", arch: "Amalia Heller (1845–1922)", q: "" },
			{ jm: "Hermine Heller", arch: "Hermine Liemert (1866)", q: "" },
			{ jm: "Paula Heller", arch: "Pauline Mičan (1869)", q: "" },
			{ jm: "Gabriele Heller", arch: "Gabriele Brixy (1870)", q: "" },
			{ jm: "Karl Heller", arch: "Karl Heller (1871)", q: "" },
			{ jm: "Mary Heller", arch: "Marie Heller (1874)", q: "" },
			{ jm: "Friedrich Ludwig Heller", arch: "Friedrich Ludwig Heller (1875–1943)", q: "Q104703660" },
			{ jm: "Marta Heller", arch: "Marta Heller (1879)", q: "" },
			{ jm: "Lina Günsberg", arch: "Lina Günsberg (1855)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "211",
		pocet: "8",
		obyv: [
			{ jm: "Max Heller", arch: "Max Heller (1829–1899)", q: "" },
			{ jm: "Amalia Heller", arch: "Amalia Heller (1845–1922)", q: "" },
			{ jm: "Richard Heller", arch: "Richard Heller (1865–1933)", q: "" },
			{ jm: "Karl Heller", arch: "Karl Heller (1871)", q: "" },
			{ jm: "Fritz (Friedrich) Heller", arch: "Friedrich Ludwig Heller (1875–1943)", q: "Q104703660" },
			{ jm: "Gabrielle Heller", arch: "Gabriele Brixy (1870)", q: "" },
			{ jm: "Mitzi Heller", arch: "Marie Heller (1874)", q: "" },
			{ jm: "Martha Heller", arch: "Marta Heller (1879)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "211",
		pocet: "1",
		obyv: [
			{ jm: "Karl Heller", arch: "Karl Heller (1871)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "212",
		pocet: "5",
		obyv: [
			{ jm: "Alois Riesenfeld", arch: "Alois Riesenfeld (1848–1923)", q: "" },
			{ jm: "Anna Riesenfeld", arch: "Anna Riesenfeld (1854–1924)", q: "" },
			{ jm: "Kammilla Riesenfeld", arch: "Kamila Riesenfeldová (1887)", q: "Q105579722" },
			{ jm: "Elfrida Riesenfeld", arch: "Elfriede Riesenfeld (1890–1924)", q: "" },
			{ jm: "Olga Riesenfeld", arch: "Olga Riesenfeldová (1892)", q: "Q105579732" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "214",
		pocet: "9",
		obyv: [
			{ jm: "Karl Taussik", arch: "Carl Taussik (1851–1943)", q: "Q105614643" },
			{ jm: "Mathilde Taussig geb. Hansel", arch: "Mathilde Taussig (1853–1926)", q: "" },
			{ jm: "Adolf Taussik", arch: "Adolf Taussik (1875–1943)", q: "Q105614220" },
			{ jm: "Arthur Taussik", arch: "Artur Taussik (1879)", q: "Q105614633" },
			{ jm: "Oskar Taussik", arch: "Oskar Taussik (1882)", q: "Q105614648" },
			{ jm: "Sigmund Taussik", arch: "Sigmund Taussik (1883)", q: "" },
			{ jm: "Josef Taussik", arch: "Josef Taussik (1888)", q: "Q105614642" },
			{ jm: "Marie Taussik", arch: "Marie Braun (1876)", q: "Q104412027" },
			{ jm: "Friederike Taussig", arch: "Friederike Altenstein (1877)", q: "Q104209224" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "214",
		pocet: "8",
		obyv: [
			{ jm: "Carl Taussig", arch: "Carl Taussik (1851–1943)", q: "Q105614643" },
			{ jm: "Mathilde Taussig geb. Hansel", arch: "Mathilde Taussig (1853–1926)", q: "" },
			{ jm: "Adolf Taussig", arch: "Adolf Taussik (1875–1943)", q: "Q105614220" },
			{ jm: "Sigmund Taussig", arch: "Sigmund Taussik (1883)", q: "" },
			{ jm: "Josef Taussig", arch: "Josef Taussik (1888)", q: "Q105614642" },
			{ jm: "Marie Taussig", arch: "Marie Braun (1876)", q: "Q104412027" },
			{ jm: "Frida Taussig", arch: "Friederike Altenstein (1877)", q: "Q104209224" },
			{ jm: "Arthur Taussig", arch: "Artur Taussik (1879)", q: "Q105614633" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "214",
		pocet: "5",
		obyv: [
			{ jm: "Carl Taussik", arch: "Carl Taussik (1851–1943)", q: "Q105614643" },
			{ jm: "Mathilde Taussik", arch: "Mathilde Taussig (1853–1926)", q: "" },
			{ jm: "Adolf Taussik", arch: "Adolf Taussik (1875–1943)", q: "Q105614220" },
			{ jm: "Frida Taussik", arch: "Friederike Altenstein (1877)", q: "Q104209224" },
			{ jm: "Josef Taussik", arch: "Josef Taussik (1888)", q: "Q105614642" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "214",
		pocet: "3",
		obyv: [
			{ jm: "Carl Taussik", arch: "Carl Taussik (1851–1943)", q: "Q105614643" },
			{ jm: "Mathilde Taussik", arch: "Mathilde Taussig (1853–1926)", q: "" },
			{ jm: "Adolf Taussik", arch: "Adolf Taussik (1875–1943)", q: "Q105614220" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "215",
		pocet: "9",
		obyv: [
			{ jm: "Carl Taussig", arch: "Carl Taussik (1851–1943)", q: "Q105614643" },
			{ jm: "Mathilde Taussig", arch: "Mathilde Taussig (1853–1926)", q: "" },
			{ jm: "Adolf Taussik", arch: "Adolf Taussik (1875–1943)", q: "Q105614220" },
			{ jm: "Mary Taussig", arch: "Marie Braun (1876)", q: "Q104412027" },
			{ jm: "Friederike Taussig", arch: "Friederike Altenstein (1877)", q: "Q104209224" },
			{ jm: "Arthur Taussig", arch: "Artur Taussik (1879)", q: "Q105614633" },
			{ jm: "Josefine Hansel", arch: "Josefine Hansel (1817)", q: "" },
			{ jm: "Sigmund Hansel", arch: "Sigmund Hansel (1851)", q: "" },
			{ jm: "Berthold Hansel", arch: "Berthold Hansel (1857)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "22",
		pocet: "1",
		obyv: [
			{ jm: "Jindřiška Staňková", arch: "Henriette Mendreková (1888)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Hranice",
		cast: "",
		cp: "221",
		pocet: "5",
		obyv: [
			{ jm: "Gerson Sobek", arch: "Gerson Sobek (1823)", q: "" },
			{ jm: "Mary Sobek", arch: "Amalia Sobek (1838–1889)", q: "" },
			{ jm: "Flora Sobek", arch: "Flora Sobek (1863)", q: "" },
			{ jm: "Hermine Sobek", arch: "Hermine Sobek (1867)", q: "" },
			{ jm: "Sigmund Sobek", arch: "Sigmund Sobek (1868)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "221",
		pocet: "8",
		obyv: [
			{ jm: "Gerson Sobek", arch: "Gerson Sobek (1823)", q: "" },
			{ jm: "Maly Sobek", arch: "Amalia Sobek (1838–1889)", q: "" },
			{ jm: "Laura Sobek", arch: "Flora Sobek (1863)", q: "" },
			{ jm: "Hermine Sobek", arch: "Hermine Sobek (1867)", q: "" },
			{ jm: "Sigmund Sobek", arch: "Sigmund Sobek (1868)", q: "" },
			{ jm: "Julius Sobek", arch: "Julius Sobek (1870)", q: "" },
			{ jm: "Max Sobek", arch: "Max Sobek (1871)", q: "" },
			{ jm: "Ignaz Sobek", arch: "Ignaz Sobek (1874)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "221",
		pocet: "2",
		obyv: [
			{ jm: "Gerson Sobek", arch: "Gerson Sobek (1823)", q: "" },
			{ jm: "Laura Sobek", arch: "Flora Sobek (1863)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "238",
		pocet: "1",
		obyv: [
			{ jm: "Dr. Simon Brandeis", arch: "Simon Brandeis (xxx1)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "238",
		pocet: "1",
		obyv: [
			{ jm: "Emil Frankenstein", arch: "Emil Frankenstein (1874)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "24",
		pocet: "3",
		obyv: [
			{ jm: "David Vogel", arch: "David Vogel (1853–1923)", q: "" },
			{ jm: "Ernestine Vogel", arch: "Ernestine Vogel (1864–1942)", q: "Q105616337" },
			{ jm: "Ernst Vogel", arch: "Ernst Vogel (1890)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "24",
		pocet: "5",
		obyv: [
			{ jm: "Josef Gewürz", arch: "Josef Gewürz (1873–1942)", q: "Q104657947" },
			{ jm: "Ernestine Gewürz geb. Rindl", arch: "Ernestine Gewürz (1880)", q: "Q104657942" },
			{ jm: "Berthold Gewürz", arch: "Berthold Gewürz (1901)", q: "Q104657944" },
			{ jm: "Otto Gewürz", arch: "Otto Gewürz (1903)", q: "Q104657949" },
			{ jm: "Ernst Herrman", arch: "Ernst Herrman (1891)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "253",
		pocet: "1",
		obyv: [
			{ jm: "Michael Goldstein", arch: "Michael Goldstein (1813)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "254",
		pocet: "3",
		obyv: [
			{ jm: "Dr. Johann Schönbek", arch: "Johann Schönbeck (1868–1944)", q: "Q105599346" },
			{ jm: "Olga Schönbeck", arch: "Olga Schönbeck (1885)", q: "Q105599348" },
			{ jm: "Edith Schönbek", arch: "Edith Schlesinger (1907)", q: "Q105597397" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "254",
		pocet: "4",
		obyv: [
			{ jm: "Johann Schönbek", arch: "Johann Schönbeck (1868–1944)", q: "Q105599346" },
			{ jm: "Olga Schönbeck", arch: "Olga Schönbeck (1885)", q: "Q105599348" },
			{ jm: "Edith Schönbek", arch: "Edith Schlesinger (1907)", q: "Q105597397" },
			{ jm: "Ernst Schönbek", arch: "Arnošt Schönbeck (1913)", q: "Q105599344" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Hranice",
		cast: "",
		cp: "256",
		pocet: "3",
		obyv: [
			{ jm: "Markus Fischer", arch: "Markus Fischer (1794)", q: "" },
			{ jm: "Sally Fischer", arch: "Sally Fischer (1808)", q: "" },
			{ jm: "Leopold Fischer", arch: "Leopold Fischer (1840–1926)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Hranice",
		cast: "",
		cp: "256",
		pocet: "3",
		obyv: [
			{ jm: "Markus Fischer", arch: "Markus Fischer (1794)", q: "" },
			{ jm: "Sali Fischer", arch: "Sally Fischer (1808)", q: "" },
			{ jm: "Leopold Fischer", arch: "Leopold Fischer (1840–1926)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "256",
		pocet: "4",
		obyv: [
			{ jm: "Eugenie Beermann", arch: "Eugenie Beermann (1864)", q: "" },
			{ jm: "Sofie Beermann", arch: "Sofie Beermann (1866)", q: "" },
			{ jm: "Friedrich Bermann", arch: "Friedrich Bermann (1867–1943)", q: "Q104250902" },
			{ jm: "Alfred Beermann", arch: "Alfred Bermann (1869–1924)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "256",
		pocet: "3",
		obyv: [
			{ jm: "Ignatz Frankl", arch: "Ignatz Frankl (1864)", q: "" },
			{ jm: "Ernestine Frankl", arch: "Ernestine Frankl (1870)", q: "" },
			{ jm: "Olega Frankl", arch: "Olega Frankl (1890)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "281",
		pocet: "3",
		obyv: [
			{ jm: "Karl Heinrich Taussig", arch: "Karl Taussig (1893)", q: "" },
			{ jm: "Zdenko Leopold Taussig", arch: "Zdenko Taussig (1895)", q: "" },
			{ jm: "Leo Josef Taussig", arch: "Leo Taussig (1897)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "283",
		pocet: "3",
		obyv: [
			{ jm: "Adolf Müller", arch: "Adolf Müller (1854–1924)", q: "" },
			{ jm: "Karl Müller", arch: "Karl Müller (1884)", q: "" },
			{ jm: "Emma Müller", arch: "Emma Müller (1900)", q: "Q105565424" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "284",
		pocet: "1",
		obyv: [
			{ jm: "Amalie Beermann", arch: "Amalie Beermann (1837)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Hranice",
		cast: "",
		cp: "286",
		pocet: "6",
		obyv: [
			{ jm: "Max Heller", arch: "Max Heller (1829–1899)", q: "" },
			{ jm: "Amalia Heller", arch: "Amalia Heller (1845–1922)", q: "" },
			{ jm: "Richard Heller", arch: "Richard Heller (1865–1933)", q: "" },
			{ jm: "Hermine Heller", arch: "Hermine Liemert (1866)", q: "" },
			{ jm: "Pauline Heller", arch: "Pauline Mičan (1869)", q: "" },
			{ jm: "Helene Gumbie", arch: "Helene Gumbie (1850)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "287",
		pocet: "5",
		obyv: [
			{ jm: "Samuel Mandler", arch: "Samuel Mandler (1819)", q: "" },
			{ jm: "Hanny Mandler", arch: "Hanny Mandler (1827)", q: "" },
			{ jm: "Isak Mandler", arch: "Isak Mandler (1850)", q: "" },
			{ jm: "Emanuel Mandler", arch: "Emanuel Mandler (1867)", q: "" },
			{ jm: "Lenny Mandler", arch: "Lenny Mandler (1859)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "287",
		pocet: "6",
		obyv: [
			{ jm: "David Dittel", arch: "David Dittel (1854–1911)", q: "" },
			{ jm: "Ernestine Dittel", arch: "Ernestine Dittel (1869)", q: "" },
			{ jm: "Otto Dittel", arch: "Otto Dittel (1894–1917)", q: "" },
			{ jm: "Auguste Dittel", arch: "Auguste Neumann (1892)", q: "" },
			{ jm: "Else Feiner", arch: "Else Feiner (1885)", q: "" },
			{ jm: "Netti Rosenzweig", arch: "Netti Rosenzweig (1849–1926)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "287",
		pocet: "6",
		obyv: [
			{ jm: "David Dittel", arch: "David Dittel (1854–1911)", q: "" },
			{ jm: "Ernestine Dittel geb.Dittel", arch: "Ernestine Dittel (1869)", q: "" },
			{ jm: "Auguste Dittel", arch: "Auguste Neumann (1892)", q: "" },
			{ jm: "Otto Dittel", arch: "Otto Dittel (1894–1917)", q: "" },
			{ jm: "Erich Dittel", arch: "Erich Dittel (1902)", q: "" },
			{ jm: "Netti Rosenzweig", arch: "Netti Rosenzweig (1849–1926)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "292a",
		pocet: "4",
		obyv: [
			{ jm: "Adolf Müller", arch: "Adolf Müller (1854–1924)", q: "" },
			{ jm: "Johanna Müller", arch: "Johanna Müller (1850–1920)", q: "" },
			{ jm: "Karl Müller", arch: "Karl Müller (1884)", q: "" },
			{ jm: "Fanny Müller", arch: "Fanny Müller (1889)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Hranice",
		cast: "",
		cp: "3",
		pocet: "7",
		obyv: [
			{ jm: "Moritz Adler", arch: "Moses Adler (1827)", q: "" },
			{ jm: "Julie Adler", arch: "Judith Adler (1824)", q: "" },
			{ jm: "Kathy Adler", arch: "Kathi Adler (1855)", q: "" },
			{ jm: "Berthold Adler", arch: "Berthold Adler (1856)", q: "" },
			{ jm: "Jeanette Adler", arch: "Jeanette Adler (1859)", q: "" },
			{ jm: "Mina Adler", arch: "Mina Adler (1863)", q: "" },
			{ jm: "Ernestine Adler", arch: "Ernestine Adler (1866)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "3",
		pocet: "12",
		obyv: [
			{ jm: "Moritz Adler", arch: "Moses Adler (1827)", q: "" },
			{ jm: "Julie Adler", arch: "Judith Adler (1824)", q: "" },
			{ jm: "Katharina Adler", arch: "Kathi Adler (1855)", q: "" },
			{ jm: "Eugenie Adler", arch: "Jeanette Adler (1859)", q: "" },
			{ jm: "Ernestine Adler", arch: "Ernestine Adler (1866)", q: "" },
			{ jm: "Sigmund Herrmann", arch: "Sigmund Herrmann (1866)", q: "" },
			{ jm: "Isak Hirsch Baron", arch: "Isak Baron (1832)", q: "" },
			{ jm: "Julie Baron", arch: "Julie Baron (1845–1916)", q: "" },
			{ jm: "Emanuel Baron", arch: "Emanuel Baron (1860)", q: "" },
			{ jm: "Arnold Baron", arch: "Arnold Baron (1871)", q: "" },
			{ jm: "Paulina Baron", arch: "Paulina Baron (1877)", q: "" },
			{ jm: "Rosalie Baron", arch: "Rosalie Baron (1878)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Hranice",
		cast: "",
		cp: "301",
		pocet: "4",
		obyv: [
			{ jm: "Elias Vogel", arch: "Elias Vogel (1801)", q: "" },
			{ jm: "Katty Vogel", arch: "Katty Vogel (1801)", q: "" },
			{ jm: "Jonas Vogel", arch: "Jonas Vogel (1832)", q: "" },
			{ jm: "Cilly Vogel", arch: "Cilly Vogel (1836)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Hranice",
		cast: "",
		cp: "310",
		pocet: "6",
		obyv: [
			{ jm: "Jonas Vogel", arch: "Jonas Vogel (1832)", q: "" },
			{ jm: "Rosalia Vogel", arch: "Rosalia Vogel (1826)", q: "" },
			{ jm: "Gusti Vogel", arch: "Gusti Vogel (1861)", q: "" },
			{ jm: "Josef Vogel", arch: "Josef Vogel (1862)", q: "" },
			{ jm: "Rosi Vogel", arch: "Rosi Vogel (1867)", q: "" },
			{ jm: "Elias Vogel", arch: "Elias Vogel (1801)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "310",
		pocet: "3",
		obyv: [
			{ jm: "Moritz Schindler", arch: "Moses Schindler (1836)", q: "" },
			{ jm: "Amalie Schindler", arch: "Amalie Schindler (1840)", q: "" },
			{ jm: "Sofie Schindler", arch: "Sofie Schindler (1873)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "313",
		pocet: "4",
		obyv: [
			{ jm: "David Baar", arch: "David Baar (1875–1922)", q: "" },
			{ jm: "Rosa Treusch", arch: "Růžena Baarová (1888)", q: "Q104211091" },
			{ jm: "Leo Baar", arch: "Leopold Baar (1907–1945)", q: "Q104211081" },
			{ jm: "Otto Baar", arch: "Otto Baar (1911)", q: "Q104211085" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "316",
		pocet: "5",
		obyv: [
			{ jm: "Moritz Ehrenfreund", arch: "Moritz Ehrenfreund (1844)", q: "" },
			{ jm: "Julie Ehrenfreund", arch: "Julie Ehrenfreund (1845)", q: "" },
			{ jm: "Michael Ehrenfreund", arch: "Michael Ehrenfreund (1809)", q: "" },
			{ jm: "Sofie Ehrenfreund", arch: "Sofie Buchsbaum (1847–1921)", q: "" },
			{ jm: "Sigmund Siebenschein", arch: "Sigmund Siebenschein (1863)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "316",
		pocet: "6",
		obyv: [
			{ jm: "Moritz Ehrenfreund", arch: "Moritz Ehrenfreund (1844)", q: "" },
			{ jm: "Julie Ehrenfreund", arch: "Julie Ehrenfreund (1845)", q: "" },
			{ jm: "Regina Ehrenfreund", arch: "Regina Ehrenfreund (1882)", q: "" },
			{ jm: "Flora Ehrenfreund", arch: "Flora Ehrenfreund (1885–1941)", q: "" },
			{ jm: "Julie Baron", arch: "Julie Baron (1845–1916)", q: "" },
			{ jm: "Sali Baron", arch: "Rosalie Baron (1878)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "316",
		pocet: "6",
		obyv: [
			{ jm: "Hermann Wolf", arch: "Hermann Wolf (1849–1911)", q: "" },
			{ jm: "Rosa Wolf", arch: "Rosa Wolf (1868)", q: "" },
			{ jm: "Josef Wolf", arch: "Josef Wolf (1892)", q: "Q105639954" },
			{ jm: "Emanuel Wolf", arch: "Emanuel Wolf (1894–1944)", q: "Q105639890" },
			{ jm: "Julie Baron", arch: "Julie Baron (1845–1916)", q: "" },
			{ jm: "Rosa Baron", arch: "Rosalie Baron (1878)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "316",
		pocet: "6",
		obyv: [
			{ jm: "Herrmann Wolf", arch: "Hermann Wolf (1849–1911)", q: "" },
			{ jm: "Rosa Wolf geb. Mandl", arch: "Rosa Wolf (1868)", q: "" },
			{ jm: "Emanuel Wolf", arch: "Emanuel Wolf (1894–1944)", q: "Q105639890" },
			{ jm: "Stella Stössler", arch: "Stella Stössler (1898)", q: "" },
			{ jm: "Julie Baron", arch: "Julie Baron (1845–1916)", q: "" },
			{ jm: "Rosalie Baron", arch: "Rosalie Baron (1878)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "316",
		pocet: "3",
		obyv: [
			{ jm: "Rosa Wolf", arch: "Rosa Wolf (1868)", q: "" },
			{ jm: "Bedřich Hindls", arch: "Friedrich Hindls (1890)", q: "Q104707422" },
			{ jm: "Františka Hindlsová", arch: "Františka Hindlsová (1886)", q: "Q104707424" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "317",
		pocet: "7",
		obyv: [
			{ jm: "Jakob Benisch", arch: "Jakob Benisch (1846–1910)", q: "" },
			{ jm: "Charlotte Benisch geb. Löw", arch: "Charlotte Benisch (1854–1941)", q: "" },
			{ jm: "Robert Benisch", arch: "Robert Benisch (1880)", q: "" },
			{ jm: "Otto Benisch", arch: "Otto Benisch (1884)", q: "Q108900732" },
			{ jm: "Amalie Benisch", arch: "Amalie Steinberg (1878)", q: "Q105607116" },
			{ jm: "Julius Fuchs", arch: "Julius Fuchs (1877)", q: "" },
			{ jm: "Wilhelm Fuchs", arch: "Wilhelm Fuchs (1879)", q: "Q104657223" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "317",
		pocet: "3",
		obyv: [
			{ jm: "Alois Widder", arch: "Luis Widder (1873)", q: "Q105638640" },
			{ jm: "Hermann Widder", arch: "Hermann Widder (1837–1926)", q: "" },
			{ jm: "Marie Widderová", arch: "Marie Widder (1837–1923)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "317",
		pocet: "3",
		obyv: [
			{ jm: "Heinrich Bachrach", arch: "Heinrich Bachrach (1850–1923)", q: "" },
			{ jm: "Jenny Bachrach", arch: "Janette Bachrach (1858–1936)", q: "" },
			{ jm: "Marie Bachrach", arch: "Maria Bachrach (1879–1926)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "321",
		pocet: "8",
		obyv: [
			{ jm: "Ferdinand Rindl", arch: "Ferdinand Rindel (1850–1907)", q: "" },
			{ jm: "Jenny Rindl geb. Kozlowski", arch: "Jeny Rindl (1850–1921)", q: "" },
			{ jm: "Gustav Rindl", arch: "Gustav Rindl (1875)", q: "Q105472506" },
			{ jm: "Adolf Rindl", arch: "Adolf Rindl (1879)", q: "" },
			{ jm: "Ernestine Rindl", arch: "Ernestine Gewürz (1880)", q: "Q104657942" },
			{ jm: "Rosalie Rindl", arch: "Rosalie Rindl (1882)", q: "" },
			{ jm: "Sofie Rindl", arch: "Sofie Rindl (1885)", q: "" },
			{ jm: "Paula Rindl", arch: "Paula Rindl (1886–1903)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "321",
		pocet: "5",
		obyv: [
			{ jm: "Ferdinand Rindl", arch: "Ferdinand Rindel (1850–1907)", q: "" },
			{ jm: "Jeny Rindl", arch: "Jeny Rindl (1850–1921)", q: "" },
			{ jm: "Adolf Rindl", arch: "Adolf Rindl (1879)", q: "" },
			{ jm: "Sofie Rindl", arch: "Sofie Rindl (1885)", q: "" },
			{ jm: "Paula Rindl", arch: "Paula Rindl (1886–1903)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "322",
		pocet: "7",
		obyv: [
			{ jm: "Leopold Singer", arch: "Leopold Singer (1874–1933)", q: "" },
			{ jm: "Antoni Singer", arch: "Antonie Singer (1873)", q: "" },
			{ jm: "Gerta Singer", arch: "Gerta Singer (1902)", q: "" },
			{ jm: "Otto Singer", arch: "Otto Singer (1905–1937)", q: "" },
			{ jm: "Irene Singer", arch: "Irene Gelb (1907)", q: "Q104657664" },
			{ jm: "Josef Singer", arch: "Josef Singer (1836–1921)", q: "" },
			{ jm: "Katharina Singer", arch: "Katharina Singer (1840–1914)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "322",
		pocet: "5",
		obyv: [
			{ jm: "Leopold Singer", arch: "Leopold Singer (1874–1933)", q: "" },
			{ jm: "Antonie Singer", arch: "Antonie Singer (1873)", q: "" },
			{ jm: "Gerta Singer", arch: "Gerta Singer (1902)", q: "" },
			{ jm: "Otto Singer", arch: "Otto Singer (1905–1937)", q: "" },
			{ jm: "Irena Singer", arch: "Irene Gelb (1907)", q: "Q104657664" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "325",
		pocet: "7",
		obyv: [
			{ jm: "Moritz Löw", arch: "Moritz Löw (1836)", q: "" },
			{ jm: "Aloisia Löw", arch: "Aloisia Löw (1840)", q: "" },
			{ jm: "Sigmund Löw", arch: "Sigmund Löw (1865)", q: "" },
			{ jm: "Heinrich Löw", arch: "Heinrich Löw (1871–xxx1)", q: "" },
			{ jm: "Auguste Löw", arch: "Auguste Löw (1873)", q: "" },
			{ jm: "Johanna Löw", arch: "Johanna Löw (1875)", q: "" },
			{ jm: "Olga Löw", arch: "Olga Löw (1879)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "33",
		pocet: "1",
		obyv: [
			{ jm: "Ida Rabi", arch: "Ida Rabi (1896)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Hranice",
		cast: "",
		cp: "339",
		pocet: "6",
		obyv: [
			{ jm: "Michael Ehrenfreund", arch: "Michael Ehrenfreund (1809)", q: "" },
			{ jm: "Rebekka Ehrenfreund", arch: "Rebeka Ehrenfreund (1809)", q: "" },
			{ jm: "Katy Ehrenfreund", arch: "Katy Ehrenfreund (1844)", q: "" },
			{ jm: "Julie Ehrenfreund", arch: "Julie Ehrenfreund (1845)", q: "" },
			{ jm: "Sofie Ehrenfreund", arch: "Sofie Buchsbaum (1847–1921)", q: "" },
			{ jm: "Moritz Ehrenfreund", arch: "Moritz Ehrenfreund (1840)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "355",
		pocet: "4",
		obyv: [
			{ jm: "Netti Vogel", arch: "Netti Vogel (1854)", q: "" },
			{ jm: "Eugen Vogel", arch: "Eugen Vogel (1886)", q: "" },
			{ jm: "Mary Vogel", arch: "Mary Vogel (1886)", q: "" },
			{ jm: "Rosa Vogel", arch: "Rosa Vogel (1889)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "358",
		pocet: "7",
		obyv: [
			{ jm: "David Baar", arch: "David Baar (1875–1922)", q: "" },
			{ jm: "Olga Baar", arch: "Olga Baar (1885–1914)", q: "" },
			{ jm: "Leo Baar", arch: "Leopold Baar (1907–1945)", q: "Q104211081" },
			{ jm: "David Donnebaum", arch: "David Donnebaum (1868–1932)", q: "" },
			{ jm: "Laura Donnebaum geb. Herz", arch: "Laura Donnebaum (1875)", q: "Q104447916" },
			{ jm: "Ernst Donnebaum", arch: "Ernst Donnebaum (1899)", q: "" },
			{ jm: "Otto Donnebaum", arch: "Otto Donnebaum (1900–1945)", q: "Q104447918" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "358",
		pocet: "2",
		obyv: [
			{ jm: "David Donnebaum", arch: "David Donnebaum (1868–1932)", q: "" },
			{ jm: "Laura Donnebaumová", arch: "Laura Donnebaum (1875)", q: "Q104447916" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "363",
		pocet: "6",
		obyv: [
			{ jm: "David Donnebaum", arch: "David Donnebaum (1868–1932)", q: "" },
			{ jm: "Laura Donnebaum", arch: "Laura Donnebaum (1875)", q: "Q104447916" },
			{ jm: "Ernst Donnebaum", arch: "Ernst Donnebaum (1899)", q: "" },
			{ jm: "Otto Donnebaum", arch: "Otto Donnebaum (1900–1945)", q: "Q104447918" },
			{ jm: "Betty Donnebaum", arch: "Betty Donnebaum (1843)", q: "" },
			{ jm: "Rudolf Rokotnitz", arch: "Rudolf Rokotnitz (1884)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Hranice",
		cast: "",
		cp: "366",
		pocet: "2",
		obyv: [
			{ jm: "Bernhard Spitzkopf", arch: "Bernhard Spitzkopf (1829)", q: "" },
			{ jm: "Bernhard Hain", arch: "Bernhard Hain (1855)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "366",
		pocet: "1",
		obyv: [
			{ jm: "Antonia Kulka", arch: "Tony Kulka (1862)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "367",
		pocet: "8",
		obyv: [
			{ jm: "Max Weissbrott", arch: "Max Weissbrod (1875)", q: "Q115663277" },
			{ jm: "Theresie Weissbrott", arch: "Theresie Weissbrod (1877)", q: "" },
			{ jm: "Fritz Weissbrott", arch: "Fritz Weissbrod (1902)", q: "" },
			{ jm: "Ernst Weissbrott", arch: "Arnošt Weissbrod (1903–1945)", q: "Q105637744" },
			{ jm: "Oskar Weissbrott", arch: "Oskar Weissbrod (1905)", q: "Q105637748" },
			{ jm: "Alfred Weissbrott", arch: "Alfred Weissbrod (1907–1936)", q: "" },
			{ jm: "Marie Weissbrott", arch: "Marie Weissbrod (1909)", q: "" },
			{ jm: "Edith Weissbrott", arch: "Edith Weissbrott (1912)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Hranice",
		cast: "",
		cp: "368",
		pocet: "1",
		obyv: [
			{ jm: "Moritz Gorge", arch: "Moritz Gorge (1823)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "370",
		pocet: "4",
		obyv: [
			{ jm: "Rudolf Haus", arch: "Rudolf Haus (1855–1929)", q: "" },
			{ jm: "Friedrika Haus", arch: "Friedrika Haus (1860–1924)", q: "" },
			{ jm: "Richard Haus", arch: "Richard Haus (1888)", q: "" },
			{ jm: "Dorothea Haus", arch: "Veronika Haus (1834)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "370",
		pocet: "5",
		obyv: [
			{ jm: "Rudolf Haus", arch: "Rudolf Haus (1855–1929)", q: "" },
			{ jm: "Friedrika Haus geb. Altmann", arch: "Friedrika Haus (1860–1924)", q: "" },
			{ jm: "Richard Haus", arch: "Richard Haus (1888)", q: "" },
			{ jm: "Moriz Haus", arch: "Moriz Haus (1891)", q: "" },
			{ jm: "Dorothea Haus", arch: "Veronika Haus (1834)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "370",
		pocet: "3",
		obyv: [
			{ jm: "Rudolf Haus", arch: "Rudolf Haus (1855–1929)", q: "" },
			{ jm: "Friedericke Haus geb. Altmann", arch: "Friedrika Haus (1860–1924)", q: "" },
			{ jm: "Moritz Haus", arch: "Moriz Haus (1891)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "370",
		pocet: "3",
		obyv: [
			{ jm: "Otto Freund", arch: "Otto Freund (1889)", q: "Q104653262" },
			{ jm: "Rudolf Haus", arch: "Rudolf Haus (1855–1929)", q: "" },
			{ jm: "Friedrike Haus", arch: "Friedrika Haus (1860–1924)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "372",
		pocet: "3",
		obyv: [
			{ jm: "Joachim recte Jacob Benisch", arch: "Jakob Benisch (1846–1910)", q: "" },
			{ jm: "Charlotte Benisch geb. Löw", arch: "Charlotte Benisch (1854–1941)", q: "" },
			{ jm: "Otto Benisch", arch: "Otto Benisch (1884)", q: "Q108900732" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "372",
		pocet: "1",
		obyv: [
			{ jm: "Charlotte Benisch", arch: "Charlotte Benisch (1854–1941)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "372",
		pocet: "1",
		obyv: [
			{ jm: "Rosa Hoffenreich", arch: "Rosa Hoffenreich (1857–1927)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "384",
		pocet: "6",
		obyv: [
			{ jm: "Isak Moses Drachmann", arch: "Isak Moses Drachmann (1858–1942)", q: "Q104447946" },
			{ jm: "Henriette Drachmann geb. Lewin", arch: "Henriette Drachmann (1862–1942)", q: "Q104447945" },
			{ jm: "Klara Drachmann", arch: "Klara Drachmann (1887)", q: "" },
			{ jm: "Eduard Drachmann", arch: "Eduard Drachmann (1888–1944)", q: "Q104447944" },
			{ jm: "Theresia Drachmann", arch: "Theresia Drachmann (1889)", q: "" },
			{ jm: "Johanna Drachmann", arch: "Johanna Drachmann (1880)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "384",
		pocet: "2",
		obyv: [
			{ jm: "Sigmund Pollak", arch: "Sigmund Pollak (1872–1942)", q: "" },
			{ jm: "Sidonie Pollak", arch: "Sidonie Pollak (1882)", q: "Q105575242" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "385",
		pocet: "4",
		obyv: [
			{ jm: "Josef Kober", arch: "Josef Kober (1824)", q: "" },
			{ jm: "Betti Kober geb. Lipscher", arch: "Elisabeth Kober (1839)", q: "" },
			{ jm: "Adolf Kober", arch: "Adolf Kober (1862)", q: "" },
			{ jm: "Rosa Kober", arch: "Rosa Kober (1876)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "4",
		pocet: "3",
		obyv: [
			{ jm: "Anna Siebenschein", arch: "Hanny Siebenschein (1813)", q: "" },
			{ jm: "Emma Siebenschein", arch: "Emma Siebenschein (1848)", q: "" },
			{ jm: "Jakob Schlesinger", arch: "Jakob Schlesinger (1860)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "4",
		pocet: "6",
		obyv: [
			{ jm: "Emma Siebenschein", arch: "Emma Siebenschein (1848)", q: "" },
			{ jm: "Jakob Haller", arch: "Jakob Haller (1859)", q: "" },
			{ jm: "Bertha Haller", arch: "Bertha Haller (1864)", q: "" },
			{ jm: "Wilhelm Haller", arch: "Wilhelm Haller (1884)", q: "Q1742758" },
			{ jm: "Sigfried Haller", arch: "Sigfried Haller (1885)", q: "" },
			{ jm: "Max Haller", arch: "Max Haller (1888)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "4",
		pocet: "3",
		obyv: [
			{ jm: "Rosa Hoffenreich", arch: "Rosa Hoffenreich (1857–1927)", q: "" },
			{ jm: "Olga Hoffenreich", arch: "Olga Baar (1885–1914)", q: "" },
			{ jm: "Stefani Hoffenreich", arch: "Stefanie Hoffenreich (1893)", q: "Q104809756" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "4",
		pocet: "6",
		obyv: [
			{ jm: "Alois Steiner", arch: "Alois Steiner (1874)", q: "Q105607594" },
			{ jm: "Eugenie Steiner", arch: "Eugenie Steiner (1878–1930)", q: "" },
			{ jm: "Grethe Steiner", arch: "Grethe Steiner (1903)", q: "" },
			{ jm: "Elsa Steiner", arch: "Eliška Čáslavková (1904)", q: "" },
			{ jm: "Irma Steiner", arch: "Irma Steiner (1907)", q: "" },
			{ jm: "Julie Steiner", arch: "Julie Steiner (1908)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "402",
		pocet: "3",
		obyv: [
			{ jm: "Julie Ehrenfreund", arch: "Julie Ehrenfreund (1845)", q: "" },
			{ jm: "Regina Ehrenfreund", arch: "Regina Ehrenfreund (1882)", q: "" },
			{ jm: "Flora Ehrenfreund", arch: "Flora Ehrenfreund (1885–1941)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "402",
		pocet: "1",
		obyv: [
			{ jm: "Regine Ehrenfreund", arch: "Regina Ehrenfreund (1882)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "404",
		pocet: "2",
		obyv: [
			{ jm: "Josef Lustig", arch: "Josef Lustig (1853–1925)", q: "" },
			{ jm: "Rosa Lustig", arch: "Rosa Lustig (1854)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "404",
		pocet: "2",
		obyv: [
			{ jm: "Josef Lustig", arch: "Josef Lustig (1853–1925)", q: "" },
			{ jm: "Rosa Lustig", arch: "Rosa Lustig (1854)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "404",
		pocet: "2",
		obyv: [
			{ jm: "Josef Lustig", arch: "Josef Lustig (1853–1925)", q: "" },
			{ jm: "Rosa Lustig", arch: "Rosa Lustig (1854)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "414",
		pocet: "1",
		obyv: [
			{ jm: "Janette Adler", arch: "Jeanette Adler (1859)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "424",
		pocet: "1",
		obyv: [
			{ jm: "Josef Aufricht", arch: "Josef Aufricht (1903)", q: "Q115663275" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "428",
		pocet: "1",
		obyv: [
			{ jm: "Max Wolf", arch: "Maxmilian Wolf (1840–xxx1)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "428",
		pocet: "5",
		obyv: [
			{ jm: "Alois Morgenstern", arch: "Alois Morgenstern (1857)", q: "Q105469757" },
			{ jm: "Hermine Morgenstern", arch: "Hermine Morgenstern (1861)", q: "" },
			{ jm: "Hugo Morgenstern", arch: "Hugo Morgenstern (1881)", q: "" },
			{ jm: "Max Morgenstern", arch: "Max Morgenstern (1883)", q: "Q109164305" },
			{ jm: "Willibald Morgenstern", arch: "Willibald Morgenstern (1886)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "428",
		pocet: "7",
		obyv: [
			{ jm: "Max Epler", arch: "Max Epler (1862)", q: "" },
			{ jm: "Gabriele Epler", arch: "Gabriele Epler (1871)", q: "" },
			{ jm: "Franz Valentin Epler", arch: "Franz Epler (1894)", q: "" },
			{ jm: "Anna Epler", arch: "Anna Epler (1895)", q: "Q115663265" },
			{ jm: "Edith Epler", arch: "Edith Epler (1897)", q: "" },
			{ jm: "Maria Epler", arch: "Maria Epler (1898)", q: "" },
			{ jm: "Leo Hecht", arch: "Leo Hecht (1871–1938)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "428",
		pocet: "2",
		obyv: [
			{ jm: "Alfred Rosenthal", arch: "Alfred Rosenthal (1871)", q: "" },
			{ jm: "Käthe Rosenthal", arch: "Käthe Rosenthal (1873)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "428",
		pocet: "2",
		obyv: [
			{ jm: "Alfred Rosenthal", arch: "Alfred Rosenthal (1871)", q: "" },
			{ jm: "Käthe Rosenthal", arch: "Käthe Rosenthal (1873)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "429",
		pocet: "2",
		obyv: [
			{ jm: "Katharina Löw", arch: "Katharina Löw (1867)", q: "" },
			{ jm: "Irene Löw", arch: "Irene Löw (1899)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "442",
		pocet: "1",
		obyv: [
			{ jm: "Antonie Kurz", arch: "Antonie Kurz (1870)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "446",
		pocet: "6",
		obyv: [
			{ jm: "Bernhard Wolf", arch: "Bernhard Wolf (1841–1903)", q: "" },
			{ jm: "Cäcilie Wolf", arch: "Cäcilie Wolf (1855)", q: "" },
			{ jm: "Alfred Wolf", arch: "Alfred Wolf (1877–1915)", q: "" },
			{ jm: "Oskar Wolf", arch: "Oskar Wolf (1878)", q: "Q105639995" },
			{ jm: "Adele Wolf", arch: "Adele Wolf (1880)", q: "" },
			{ jm: "Samuel Fischl", arch: "Samuel Fischl (1857)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "446",
		pocet: "9",
		obyv: [
			{ jm: "Bernhard Wolf", arch: "Bernhard Wolf (1841–1903)", q: "" },
			{ jm: "Eugenie Wolf", arch: "Eugenie Goldenberg (1865–1938)", q: "" },
			{ jm: "Oskar Wolf", arch: "Oskar Wolf (1878)", q: "Q105639995" },
			{ jm: "Adele Wolf", arch: "Adele Wolf (1880)", q: "" },
			{ jm: "Olga Wolf", arch: "Olga Schönbeck (1885)", q: "Q105599348" },
			{ jm: "Fritz Wolf", arch: "Fritz Wolf (1887)", q: "" },
			{ jm: "Ernst Wolf", arch: "Ernst Wolf (1890)", q: "Q105639853" },
			{ jm: "Albert Brauner", arch: "Albert Brauner (1866)", q: "" },
			{ jm: "Regine Langer", arch: "Regine Langer (1860)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "446",
		pocet: "1",
		obyv: [
			{ jm: "Julius Scharf", arch: "Julius Scharf (1873)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "446",
		pocet: "1",
		obyv: [
			{ jm: "Zdenka Slabihoudek", arch: "Zdenka Slabihoudek (1882)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "457",
		pocet: "2",
		obyv: [
			{ jm: "Anna Minkus", arch: "Anna Minkus (1842)", q: "" },
			{ jm: "Edmund Minkus", arch: "Edmund Minkus (1881)", q: "Q105650669" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Hranice",
		cast: "",
		cp: "49",
		pocet: "6",
		obyv: [
			{ jm: "Wilhelm Bellak", arch: "Wilhelm Bellak (1821)", q: "" },
			{ jm: "Leopold Bellak", arch: "Leopold Bellak (1852)", q: "" },
			{ jm: "Jakob Bellak", arch: "Jakob Bellak (1859)", q: "" },
			{ jm: "Sigmund Bellak", arch: "Sigmund Bellak (1862)", q: "" },
			{ jm: "Johanna Bellak", arch: "Johanna Bellak (1857)", q: "" },
			{ jm: "Betty Bellak", arch: "Betty Bellak (1869)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "499",
		pocet: "6",
		obyv: [
			{ jm: "Heinrich Mandl", arch: "Heinrich Mandl (1846)", q: "" },
			{ jm: "Auguste Mandl", arch: "Auguste Mandl (1848)", q: "" },
			{ jm: "Rosa Mandl", arch: "Rosa Mandl (1871)", q: "" },
			{ jm: "Hugo Mandl", arch: "Hugo Mandl (1874)", q: "" },
			{ jm: "Arthur Mandl", arch: "Artur Mandel (1876)", q: "Q105562398" },
			{ jm: "Sofie Reichner", arch: "Sofie Reichner (1864)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "499",
		pocet: "3",
		obyv: [
			{ jm: "Alfred Hein", arch: "Alfred Hein (1881–1944)", q: "Q104705508" },
			{ jm: "Marta Hein", arch: "Marta Hein (1885)", q: "Q104705519" },
			{ jm: "Walter Hahn", arch: "Walter Hahn (1908)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "5",
		pocet: "5",
		obyv: [
			{ jm: "Ignatz Berger", arch: "Ignatz Berger (1860)", q: "" },
			{ jm: "Heinrich Bachrach", arch: "Heinrich Bachrach (1850–1923)", q: "" },
			{ jm: "Janette Bachrach", arch: "Janette Bachrach (1858–1936)", q: "" },
			{ jm: "Maria Bachrach", arch: "Maria Bachrach (1879–1926)", q: "" },
			{ jm: "Gottfried Bachrach", arch: "Gottfried Bachrach (1880)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "5",
		pocet: "9",
		obyv: [
			{ jm: "Moses Wolf Adler", arch: "Moises Wolf Adler (1840)", q: "" },
			{ jm: "Charlotte Adler", arch: "Charlotte Adler (1870)", q: "" },
			{ jm: "Heinrich Bachrach", arch: "Heinrich Bachrach (1850–1923)", q: "" },
			{ jm: "Jenny Bachrach", arch: "Janette Bachrach (1858–1936)", q: "" },
			{ jm: "Gottfried Bachrach", arch: "Gottfried Bachrach (1880)", q: "" },
			{ jm: "Edmund Bachrach", arch: "Edmund Bachrach (1882)", q: "" },
			{ jm: "Alexander Bachrach", arch: "Alexander Bachrach (1886)", q: "" },
			{ jm: "Max Bachrach", arch: "Max Bachrach (1887)", q: "" },
			{ jm: "Mary Bachrach", arch: "Maria Bachrach (1879–1926)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "5",
		pocet: "1",
		obyv: [
			{ jm: "Ernestýna Grossmanova", arch: "Ernestina Grossmanová (1891)", q: "Q104678506" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "517",
		pocet: "2",
		obyv: [
			{ jm: "Leo Hecht", arch: "Leo Hecht (1871–1938)", q: "" },
			{ jm: "Ida Hecht", arch: "Ida Hecht (1881)", q: "Q104705346" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "548",
		pocet: "1",
		obyv: [
			{ jm: "Rudolf Baar", arch: "Rudolf Baar (1891)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "566",
		pocet: "7",
		obyv: [
			{ jm: "Leffmann recte Philipp Kohn", arch: "Philipp Kohn (1848–1918)", q: "" },
			{ jm: "Cälestine Kohn geb. Rokotnitz", arch: "Cälestine Kohn (1850–1920)", q: "" },
			{ jm: "Richard Kohn", arch: "Richard Kohn (1877)", q: "" },
			{ jm: "Max Kuntz", arch: "Max Kuntz (1878)", q: "" },
			{ jm: "Emilie Kohn", arch: "Emilie Kohn (1879)", q: "" },
			{ jm: "Olga Kohn", arch: "Olga Kohn (1881)", q: "" },
			{ jm: "Alfred Otta Kohn", arch: "Alfred Kohn (1867)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "566",
		pocet: "4",
		obyv: [
			{ jm: "Philipp Kohn", arch: "Philipp Kohn (1848–1918)", q: "" },
			{ jm: "Cälestine Kohn", arch: "Cälestine Kohn (1850–1920)", q: "" },
			{ jm: "Emilie Kohn", arch: "Emilie Kohn (1879)", q: "" },
			{ jm: "Olga Kohn", arch: "Olga Kohn (1881)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "575",
		pocet: "3",
		obyv: [
			{ jm: "Ladislaus Najer", arch: "Ladislaus Najer (1867)", q: "" },
			{ jm: "Filipp Epstein", arch: "Filipp Epstein (1864)", q: "" },
			{ jm: "Paul Schey", arch: "Paul Schey (1863)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "576",
		pocet: "1",
		obyv: [
			{ jm: "Hugo Geiger", arch: "Hugo Geiger (1875)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "576",
		pocet: "1",
		obyv: [
			{ jm: "Eduard Wieliczker", arch: "Eduard Wieliczker (1893)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "576",
		pocet: "5",
		obyv: [
			{ jm: "Meinhardt Weisz", arch: "Meinhardt Weisz (1898)", q: "" },
			{ jm: "Jindřich Levkovič", arch: "Jindřich Levkovič (1900)", q: "" },
			{ jm: "Jindřich Ježíšek", arch: "Jindřich Ježíšek (1899)", q: "" },
			{ jm: "Josef Vollitzer", arch: "Josef Vollitzer (1900)", q: "" },
			{ jm: "Ludvík Berger", arch: "Ludvík Berger (1899)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "580",
		pocet: "2",
		obyv: [
			{ jm: "Sigmund Pollak", arch: "Sigmund Pollak (1872–1942)", q: "" },
			{ jm: "Sidonie Pollak", arch: "Sidonie Pollak (1882)", q: "Q105575242" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "583",
		pocet: "6",
		obyv: [
			{ jm: "Mathilde Weinmann geb. Bachrach", arch: "Mathilde Weinmann (1861)", q: "" },
			{ jm: "Sofie Weinmann", arch: "Sofie Weinmann (1886)", q: "" },
			{ jm: "Fritz Weinmann", arch: "Fritz Weinmann (1888)", q: "" },
			{ jm: "Moritz Goldschmidt", arch: "Moritz Goldschmidt (1883)", q: "" },
			{ jm: "Hugo Morgenstern", arch: "Hugo Morgenstern (1881)", q: "" },
			{ jm: "Hugo Mandl", arch: "Hugo Mandl (1890)", q: "Q105562609" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "591",
		pocet: "4",
		obyv: [
			{ jm: "Albert Fischer", arch: "Albert Fischer (1880)", q: "" },
			{ jm: "Ludwika Fischer geb. Groag", arch: "Ludwika Fischer (1879)", q: "" },
			{ jm: "Erwin Fischer", arch: "Ervín Fischer (1910)", q: "Q104547342" },
			{ jm: "Amalie Groag", arch: "Amalie Groag (1843)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "596",
		pocet: "5",
		obyv: [
			{ jm: "Leo Hecht", arch: "Leo Hecht (1871–1938)", q: "" },
			{ jm: "Ida Hecht", arch: "Ida Hecht (1881)", q: "Q104705346" },
			{ jm: "Clemens Hecht", arch: "Clemens Hecht (1911)", q: "Q104705374" },
			{ jm: "Alfred Stern", arch: "Alfred Stern (1902)", q: "" },
			{ jm: "Julie Fried", arch: "Julie Fried (1858)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "598",
		pocet: "1",
		obyv: [
			{ jm: "Dr. Alfred Engel", arch: "Alfred Engel (1881–1944)", q: "Q104449482" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "6",
		pocet: "7",
		obyv: [
			{ jm: "Julius Gessler", arch: "Julius Gessler (1850–1928)", q: "" },
			{ jm: "Kati Gessler geb. Kulka", arch: "Kati Gessler (1849–1916)", q: "" },
			{ jm: "Emilie Gessler", arch: "Emilie Roger (1880)", q: "" },
			{ jm: "Hermine Gessler", arch: "Hermine Neugebaum (1881–1923)", q: "" },
			{ jm: "Rudolf Gessler", arch: "Rudolf Gessler (1883–xxx1)", q: "" },
			{ jm: "Elsa Gessler", arch: "Elsa Gessler (1884)", q: "" },
			{ jm: "Ludwig Gessler", arch: "Ludwig Gessler (1889)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "6",
		pocet: "7",
		obyv: [
			{ jm: "Julius Gessler", arch: "Julius Gessler (1850–1928)", q: "" },
			{ jm: "Kathi Gessler", arch: "Kati Gessler (1849–1916)", q: "" },
			{ jm: "Max Gessler", arch: "Max Gessler (1878)", q: "Q104657890" },
			{ jm: "Ludwig Gessler", arch: "Ludwig Gessler (1889)", q: "" },
			{ jm: "Emilie Bester", arch: "Emilie Roger (1880)", q: "" },
			{ jm: "Otto Bester", arch: "Otto Bester (1904)", q: "" },
			{ jm: "Ernst Bester", arch: "Ernst Bester (1905)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "6",
		pocet: "6",
		obyv: [
			{ jm: "Max Gessler", arch: "Max Gessler (1878)", q: "Q104657890" },
			{ jm: "Therese Gessler", arch: "Therese Gessler (1884)", q: "" },
			{ jm: "Ilse Gessler", arch: "Ilse Gessler (1918)", q: "" },
			{ jm: "Julius Gessler", arch: "Julius Gessler (1850–1928)", q: "" },
			{ jm: "Emilie Bester", arch: "Emilie Roger (1880)", q: "" },
			{ jm: "Otto Bester", arch: "Otto Bester (1904)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "647",
		pocet: "1",
		obyv: [
			{ jm: "Michael Beer", arch: "Michael Beer (1874)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "647",
		pocet: "2",
		obyv: [
			{ jm: "Fréda Braun", arch: "Alfred Braun (1870–1924)", q: "" },
			{ jm: "Lotka Braunová", arch: "Charlotte Braun (1882)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "65",
		pocet: "1",
		obyv: [
			{ jm: "Adolf Eisner", arch: "Adolf Eisner (1867–1925)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "652",
		pocet: "3",
		obyv: [
			{ jm: "Moritz Baar", arch: "Moritz Baar (1874)", q: "Q104211084" },
			{ jm: "Zdena Baar", arch: "Zdeněk Baar (1911)", q: "Q104211089" },
			{ jm: "Alexander Baar", arch: "Alexandr Baar (1915)", q: "Q104211075" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "67",
		pocet: "2",
		obyv: [
			{ jm: "Dr. Max Weissmann", arch: "Max Weissmann (1872)", q: "Q105618257" },
			{ jm: "Ella Weissmann", arch: "Elli Weissmann (1907)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "67",
		pocet: "4",
		obyv: [
			{ jm: "Dr. Ludvík Weinberg", arch: "Ludwig Weinberg (1872)", q: "Q105618652" },
			{ jm: "Greta Weinberg", arch: "Gréta Weinbergová (1891)", q: "Q105618638" },
			{ jm: "Kurt Weinberg", arch: "Kurt Weinberg (1914)", q: "Q105618650" },
			{ jm: "Otto Weinberg", arch: "Otta Weinberg (1920–1942)", q: "Q105618659" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "68",
		pocet: "1",
		obyv: [
			{ jm: "Sigmund Schindler", arch: "Sigmund Schindler (1856)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "68",
		pocet: "3",
		obyv: [
			{ jm: "Bernhard Kohn", arch: "Bernhard Kohn (1838)", q: "" },
			{ jm: "Wilhelmine Kohn", arch: "Wilhelmine Kohn (1845)", q: "" },
			{ jm: "Hermine Kohn", arch: "Hermine Kohn (1872)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Hranice",
		cast: "",
		cp: "7",
		pocet: "1",
		obyv: [
			{ jm: "Lazar Flamm", arch: "Lazar Flamm (1800)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Hranice",
		cast: "",
		cp: "7",
		pocet: "5",
		obyv: [
			{ jm: "Wolf Siebenschein", arch: "Wolf Siebenschein (1810–1882)", q: "" },
			{ jm: "Katharina Siebenschein", arch: "Katti Siebenschein (1812)", q: "" },
			{ jm: "Adelle Siebenschein", arch: "Adelheid Siebenschein (1848)", q: "" },
			{ jm: "Mathilde Siebenschein", arch: "Mathilde Siebenschein (1851)", q: "" },
			{ jm: "Cäcilie Siebenschein", arch: "Cäcilia Siebenschein (1854)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "7",
		pocet: "1",
		obyv: [
			{ jm: "Isidor Wolf", arch: "Isidor Wolf (1857–xxx1)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "708",
		pocet: "2",
		obyv: [
			{ jm: "Julie Grohs", arch: "Julie Gross (1853)", q: "" },
			{ jm: "Edmund Grohs", arch: "Edmund Gross (1889)", q: "Q104678039" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "71",
		pocet: "1",
		obyv: [
			{ jm: "Wilhelm Braun", arch: "Wilhelm Braun (1850)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "71",
		pocet: "1",
		obyv: [
			{ jm: "Isidor Stefansky", arch: "Isidor Stefansky (1867)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "71",
		pocet: "5",
		obyv: [
			{ jm: "JUDr. Eduard Bass", arch: "Eduard Bass (1855–1921)", q: "" },
			{ jm: "Friederike Bass geb. Weissbarth", arch: "Friederike Bass (1867)", q: "" },
			{ jm: "Hilda Bass", arch: "Hilda Schärf (1896)", q: "" },
			{ jm: "Grethe Bass", arch: "Grethe Bass (1898)", q: "" },
			{ jm: "Hermann Jakob Bass", arch: "Hermann Bass (1899)", q: "Q104219445" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "72",
		pocet: "1",
		obyv: [
			{ jm: "Alois Morgenstern", arch: "Alois Morgenstern (1857)", q: "Q105469757" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "72",
		pocet: "10",
		obyv: [
			{ jm: "Sigmund Klopper", arch: "Sigmund Klopper (1882)", q: "" },
			{ jm: "Sigmund Berl", arch: "Sigmund Berl (1833–1915)", q: "" },
			{ jm: "Salomon Brada", arch: "Salomon Brada (1840–1922)", q: "" },
			{ jm: "Fanni Brada", arch: "Fanni Brada (1853–1924)", q: "" },
			{ jm: "Dr. Gustav Brada", arch: "Gustav Adolf Brada (1883)", q: "" },
			{ jm: "Bertha Wlczek", arch: "Bertha Wlczek (1879)", q: "Q105639631" },
			{ jm: "Heinrich Wlczek", arch: "Heinrich Wlczek (1869–1931)", q: "" },
			{ jm: "Emanuel Wlczek", arch: "Emanuel Wlczek (1900–1942)", q: "Q105658093" },
			{ jm: "Rudolf Wlczek", arch: "Rudolf Wlczek (1901)", q: "Q105639640" },
			{ jm: "Anna Wlczek", arch: "Anna Wlczek (1908)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "728",
		pocet: "4",
		obyv: [
			{ jm: "Dr. phil. Professor Jakob Rabbinowicz", arch: "Jakob Rabbinowicz (1863–1947)", q: "Q61750894" },
			{ jm: "Sara Rabbinowicz", arch: "Sara Rabbinowicz (1866–1933)", q: "" },
			{ jm: "Moric Kohn", arch: "Moritz Kohn (1886)", q: "" },
			{ jm: "Leopold Kohn", arch: "Leopold Kohn (1891–xxx1)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "729",
		pocet: "6",
		obyv: [
			{ jm: "Jakob Morgenstern", arch: "Jakob Morgenstern (1883)", q: "Q105565177" },
			{ jm: "Regina Morgenstern", arch: "Regina Morgenstern (1884)", q: "Q105565226" },
			{ jm: "Berta Morgenstern", arch: "Berta Morgenstern (1910)", q: "" },
			{ jm: "Gisela Morgenstern", arch: "Gisela Langer (1913)", q: "Q105560911" },
			{ jm: "Tobias Buchsbaum", arch: "Tobias Buchsbaum (1851)", q: "Q104422562" },
			{ jm: "Sofie Buchsbaum", arch: "Sofie Buchsbaum (1847–1921)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "73",
		pocet: "2",
		obyv: [
			{ jm: "Alfred Hein", arch: "Alfred Hein (1881–1944)", q: "Q104705508" },
			{ jm: "Siegfried Grünfeld", arch: "Siegfried Grünfeld (1880)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "730",
		pocet: "6",
		obyv: [
			{ jm: "Jindřich Wlček", arch: "Heinrich Wlczek (1869–1931)", q: "" },
			{ jm: "Berta Wlčková", arch: "Bertha Wlczek (1879)", q: "Q105639631" },
			{ jm: "Anna Wlčková", arch: "Anna Wlczek (1908)", q: "" },
			{ jm: "Salomon Brada", arch: "Salomon Brada (1840–1922)", q: "" },
			{ jm: "Františka Bradová", arch: "Fanni Brada (1853–1924)", q: "" },
			{ jm: "Irma Picková", arch: "Irma Wlczková (1898)", q: "Q105639634" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "731",
		pocet: "10",
		obyv: [
			{ jm: "Charlotte Weintraub", arch: "Charlotta Weintraubová (1882)", q: "Q105619271" },
			{ jm: "Hugo Weintraub", arch: "Hugo Weintraub (1906)", q: "Q115663273" },
			{ jm: "Otto Weintraub", arch: "Otto Weintraub (1907)", q: "" },
			{ jm: "Bertha Weintraub", arch: "Berta Weintraubová (1908)", q: "" },
			{ jm: "Irma Weintraub", arch: "Irma Weintraub (1912)", q: "Q106822231" },
			{ jm: "Netti Kozelik", arch: "Netti Kozelik (1840–1922)", q: "" },
			{ jm: "Jeanette Adler", arch: "Jeanette Adler (1859)", q: "" },
			{ jm: "Sigmund Urban", arch: "Sigmund Urban (1857–1931)", q: "" },
			{ jm: "Hanni Urban", arch: "Hany Urban (1853–1931)", q: "" },
			{ jm: "Franziska Borger", arch: "Fani Borger (1875–1932)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "732",
		pocet: "2",
		obyv: [
			{ jm: "Eugenie Liebel", arch: "Eugenie Liebel (1883)", q: "Q105556781" },
			{ jm: "Berthold Liebel", arch: "Berthold Liebel (1907)", q: "Q106871224" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "733",
		pocet: "2",
		obyv: [
			{ jm: "Berthold Thorž", arch: "Berthold Thorž (1861–1941)", q: "" },
			{ jm: "Elise Thorž", arch: "Elisabeth Thorž (1867)", q: "Q105615061" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "734",
		pocet: "7",
		obyv: [
			{ jm: "Karel Baron", arch: "Carl Baron (1861–1921)", q: "" },
			{ jm: "Josefa Baron", arch: "Josefine Baron (1866–1937)", q: "" },
			{ jm: "Leopold Baron", arch: "Leopold Baron (1898)", q: "Q104219119" },
			{ jm: "Julie Baron", arch: "Julie Baron (1899–1932)", q: "" },
			{ jm: "Peppi Baron", arch: "Pepi Spitzer (1858–1940)", q: "" },
			{ jm: "Regine Baron", arch: "Regine Spitzer (1860–1932)", q: "" },
			{ jm: "Leopolda Hersch", arch: "Leopoldine Schmeidler (1897)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "735",
		pocet: "3",
		obyv: [
			{ jm: "Luise Steiner", arch: "Louise Steiner (1856–1936)", q: "" },
			{ jm: "Marie Steiner", arch: "Marie Steiner (1881)", q: "Q105608140" },
			{ jm: "Malvi Steiner", arch: "Malvine Steiner (1886)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "736",
		pocet: "4",
		obyv: [
			{ jm: "Anna Adler", arch: "Anna Adler (1856)", q: "" },
			{ jm: "Eduard Adler", arch: "Eduard Adler (1880)", q: "" },
			{ jm: "Susi Fried", arch: "Susi Fried (1909)", q: "" },
			{ jm: "Elli Fried", arch: "Elli Fried (1911)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "74",
		pocet: "8",
		obyv: [
			{ jm: "Isak Baar", arch: "Isak Baar (1839–1908)", q: "" },
			{ jm: "Moritz Baar", arch: "Moritz Baar (1874)", q: "Q104211084" },
			{ jm: "David Baar", arch: "David Baar (1875–1922)", q: "" },
			{ jm: "Emil Baar", arch: "Emil Baar (1879)", q: "" },
			{ jm: "Anna Baar", arch: "Anna Baar (1882)", q: "" },
			{ jm: "Victor Baar", arch: "Viktor Baar (1887)", q: "" },
			{ jm: "Berta Baar", arch: "Bertha Baar (1888)", q: "" },
			{ jm: "Rudolf Baar", arch: "Rudolf Baar (1891)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "74",
		pocet: "1",
		obyv: [
			{ jm: "JUDr. Ludwig Weinberg", arch: "Ludwig Weinberg (1872)", q: "Q105618652" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "74",
		pocet: "3",
		obyv: [
			{ jm: "Fanni Mandl", arch: "Fanni Mandl (1850–1928)", q: "" },
			{ jm: "Julie Hessingerová", arch: "Julie Hessinger (1861)", q: "" },
			{ jm: "Ženy Rindlová", arch: "Jeny Rindl (1850–1921)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "740",
		pocet: "8",
		obyv: [
			{ jm: "Eva Lamm", arch: "Eva Lamm (1855–1926)", q: "" },
			{ jm: "Julie Lamm", arch: "Julie Lamm (1857–1926)", q: "" },
			{ jm: "David Vogel", arch: "David Vogel (1853–1923)", q: "" },
			{ jm: "Ernestine Vogel", arch: "Ernestine Vogel (1864–1942)", q: "Q105616337" },
			{ jm: "Mizzi Vogel", arch: "Marie Vogel (1891)", q: "" },
			{ jm: "Steffi Vogel", arch: "Stephanie Vogel (1901)", q: "" },
			{ jm: "Artur Vogel", arch: "Arthur Vogel (1906)", q: "" },
			{ jm: "Fani Steiner", arch: "Fani Steiner (1842–1930)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "741",
		pocet: "3",
		obyv: [
			{ jm: "Fanni Müller", arch: "Fanny Müller (1843–1928)", q: "" },
			{ jm: "Amalie Wollmann", arch: "Amalie Wollmann (1904)", q: "Q105640091" },
			{ jm: "Moritz Kurzweil", arch: "Moritz Kurzweil (1882)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "744",
		pocet: "3",
		obyv: [
			{ jm: "Alois Widder", arch: "Luis Widder (1873)", q: "Q105638640" },
			{ jm: "Hermann Widder", arch: "Hermann Widder (1837–1926)", q: "" },
			{ jm: "Marie Widder", arch: "Marie Widder (1837–1923)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "745",
		pocet: "2",
		obyv: [
			{ jm: "Samuel Bachrach", arch: "Sigmund Bachrach (1857–1928)", q: "" },
			{ jm: "Regine Bachrach", arch: "Regina Bachrach (1855–1929)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "748",
		pocet: "2",
		obyv: [
			{ jm: "Isidor Baron", arch: "Isidor Baron (1875–1936)", q: "" },
			{ jm: "Emma Baronova", arch: "Emma Baron (1876)", q: "Q104219129" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Hranice",
		cast: "",
		cp: "75",
		pocet: "2",
		obyv: [
			{ jm: "Josef Wolf", arch: "Joseph Wolf (1797)", q: "" },
			{ jm: "Josefa Wolf", arch: "Pepi Wolf (1806)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "75",
		pocet: "1",
		obyv: [
			{ jm: "Hermann Wolf", arch: "Hermann Wolf (1849–1911)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "75",
		pocet: "1",
		obyv: [
			{ jm: "Berthold Redisch", arch: "Berthold Redisch (1872)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "753",
		pocet: "4",
		obyv: [
			{ jm: "Max Seidler", arch: "Max Seidler (1853–1929)", q: "" },
			{ jm: "Anna Seidlerová", arch: "Anna Seidlerová (1892)", q: "Q105601515" },
			{ jm: "Cäcilie Guttmann", arch: "Cäcilie Guttmann (1894–1942)", q: "Q105517507" },
			{ jm: "Aloisie Seidlerová", arch: "Louisa Friedová (1903)", q: "Q104655722" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "754",
		pocet: "2",
		obyv: [
			{ jm: "Johanna Luft", arch: "Johanna Luft (1870–1922)", q: "" },
			{ jm: "Ernestine Luft", arch: "Ernestine Luft (1910)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "755",
		pocet: "1",
		obyv: [
			{ jm: "Regine Ehrenfreund", arch: "Regina Ehrenfreund (1882)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "76",
		pocet: "4",
		obyv: [
			{ jm: "Dr. Josef Rein", arch: "Josef Rein (1852–1914)", q: "" },
			{ jm: "Julie Rein", arch: "Julie Rein (1856)", q: "" },
			{ jm: "Arthur Rein", arch: "Arthur Rein (1880)", q: "" },
			{ jm: "Laura Deutsch", arch: "Luise Deutsch (1852)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Hranice",
		cast: "",
		cp: "79",
		pocet: "5",
		obyv: [
			{ jm: "Julie Vogel", arch: "Julie Vogel (1814)", q: "" },
			{ jm: "Leopold Vogel", arch: "Leopold Vogel (1844)", q: "" },
			{ jm: "Hanny Vogel", arch: "Hanny Vogel (1838–xxx1)", q: "" },
			{ jm: "Samuel Vogel", arch: "Samuel Vogel (1836)", q: "" },
			{ jm: "Anna Vogel", arch: "Anna Vogel (1830)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Hranice",
		cast: "",
		cp: "79",
		pocet: "2",
		obyv: [
			{ jm: "Berl Vielfreund", arch: "Berl Vielfreud (1828)", q: "" },
			{ jm: "Anna Vielfreund", arch: "Anna Vielfreund (1830)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Hranice",
		cast: "",
		cp: "8",
		pocet: "3",
		obyv: [
			{ jm: "Samuel Kober", arch: "Samuel Kober (1838–1925)", q: "" },
			{ jm: "Katharina Kober", arch: "Katharina Kober (1850–1914)", q: "" },
			{ jm: "Fanny Kober", arch: "Fanny Kober (1808)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "8",
		pocet: "1",
		obyv: [
			{ jm: "Hermann Heller", arch: "Hermann Heller (1820)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "8",
		pocet: "2",
		obyv: [
			{ jm: "Charlotte Benisch", arch: "Charlotte Benisch (1854–1941)", q: "" },
			{ jm: "Dr. Otto Benisch", arch: "Otto Benisch (1884)", q: "Q108900732" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "80",
		pocet: "2",
		obyv: [
			{ jm: "Gisi Gottlieber", arch: "Gisi Gottlieber (1884)", q: "" },
			{ jm: "Fritz Gottlieber", arch: "Fritz Gottlieber (1910)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Hranice",
		cast: "",
		cp: "84",
		pocet: "5",
		obyv: [
			{ jm: "Sara Schindler", arch: "Sara Schindler (1799)", q: "" },
			{ jm: "Markus Schindler", arch: "Markus Schindler (1827)", q: "" },
			{ jm: "Moises Schindler", arch: "Moses Schindler (1836)", q: "" },
			{ jm: "Veronika Schindler", arch: "Veronika Schindler (1838)", q: "" },
			{ jm: "Rachel (Rosa) Schindler", arch: "Rachel Schindler (1840)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "86",
		pocet: "6",
		obyv: [
			{ jm: "Ferdinand Dittel", arch: "Ferdinand Dittel (1856)", q: "" },
			{ jm: "Charlotte Dittel", arch: "Charlotte Dittel (1857)", q: "" },
			{ jm: "Julius Dittel", arch: "Julius Dittel (1883)", q: "" },
			{ jm: "Ernst Dittel", arch: "Ernst Dittel (1884)", q: "" },
			{ jm: "Fritz Dittel", arch: "Fritz Dittel (1890)", q: "" },
			{ jm: "Emanuel Löschner", arch: "Emanuel Löschner (1877)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "87",
		pocet: "11",
		obyv: [
			{ jm: "Sigmund Kraus", arch: "Sigmund Kraus (1840)", q: "" },
			{ jm: "Rosalia Kraus", arch: "Rosalia Kraus (1849)", q: "" },
			{ jm: "Hermine Kraus", arch: "Hermine Kraus (1869)", q: "" },
			{ jm: "Moritz Kraus", arch: "Moritz Kraus (1871)", q: "" },
			{ jm: "Sami Kraus", arch: "Samuel Kraus (1872)", q: "Q105527633" },
			{ jm: "Resy Kraus", arch: "Resy Kraus (1874)", q: "" },
			{ jm: "Friederika Kraus", arch: "Friederika Kraus (1877)", q: "" },
			{ jm: "Hugo Kraus", arch: "Hugo Kraus (1880)", q: "Q105527332" },
			{ jm: "Josef Lustig", arch: "Josef Lustig (1853–1925)", q: "" },
			{ jm: "Rosa Lustig", arch: "Rosa Lustig (1854)", q: "" },
			{ jm: "Pauline Lustig", arch: "Pauline Lustig (1861)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "87",
		pocet: "9",
		obyv: [
			{ jm: "Sigmund Kraus", arch: "Sigmund Kraus (1840)", q: "" },
			{ jm: "Rosa Kraus geb. Fischer", arch: "Rosalia Kraus (1849)", q: "" },
			{ jm: "Samuel Kraus", arch: "Samuel Kraus (1872)", q: "Q105527633" },
			{ jm: "Resi Kraus", arch: "Resy Kraus (1874)", q: "" },
			{ jm: "Friederike Kraus", arch: "Friederika Kraus (1877)", q: "" },
			{ jm: "Hugo Kraus", arch: "Hugo Kraus (1880)", q: "Q105527332" },
			{ jm: "Oskar Kraus", arch: "Oskar Kraus (1883)", q: "" },
			{ jm: "Hany Urban", arch: "Hany Urban (1853–1931)", q: "" },
			{ jm: "Resi Urban", arch: "Resi Urban (1883)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "87",
		pocet: "10",
		obyv: [
			{ jm: "Sigmund Kraus", arch: "Sigmund Kraus (1840)", q: "" },
			{ jm: "Rosa Kraus geb. Fischer", arch: "Rosalia Kraus (1849)", q: "" },
			{ jm: "Samuel Kraus", arch: "Samuel Kraus (1872)", q: "Q105527633" },
			{ jm: "Frida Kraus", arch: "Friederika Kraus (1877)", q: "" },
			{ jm: "Hugo Kraus", arch: "Hugo Kraus (1880)", q: "Q105527332" },
			{ jm: "Oskar Kraus", arch: "Oskar Kraus (1883)", q: "" },
			{ jm: "Therese Hessinger", arch: "Resi Hessinger (1827)", q: "" },
			{ jm: "Julie Hessinger", arch: "Julie Hessinger (1861)", q: "" },
			{ jm: "David Haas", arch: "David Haas (1884)", q: "" },
			{ jm: "Gustav Kosulik", arch: "Gustav Kosulik (1887)", q: "Q105526666" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "87",
		pocet: "12",
		obyv: [
			{ jm: "Samuel Kraus", arch: "Samuel Kraus (1872)", q: "Q105527633" },
			{ jm: "Johanna Kraus", arch: "Johanna Kraus (1885)", q: "" },
			{ jm: "Lili Kraus", arch: "Lili Kraus (1909)", q: "" },
			{ jm: "Artur Köppl", arch: "Artur Köppl (1891)", q: "" },
			{ jm: "Bruno Köppl", arch: "Bruno Köppl (1894)", q: "" },
			{ jm: "Stefanie Politzer", arch: "Stephanie Pollitzer (1898)", q: "" },
			{ jm: "Julie Hessinger", arch: "Julie Hessinger (1861)", q: "" },
			{ jm: "Leonhardt Steinhardt", arch: "Leonhardt Steinhardt (1893)", q: "" },
			{ jm: "Leopoldine Steinhardt", arch: "Leopoldina Steinhardtová (1897)", q: "" },
			{ jm: "Bernhard Steinhardt", arch: "Bernhard Steinhardt (1898)", q: "Q106871806" },
			{ jm: "Jindřich Schön", arch: "Jindřich Schön (1894)", q: "Q105599226" },
			{ jm: "Fanny Steiner", arch: "Fani Steiner (1842–1930)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "88",
		pocet: "3",
		obyv: [
			{ jm: "Ignatz Manaberg", arch: "Ignatz Mannaberg (1838)", q: "" },
			{ jm: "Fanny Mannaberg", arch: "Fanny Mannaberg (1858)", q: "" },
			{ jm: "Richard Mannaberg", arch: "Richard Mannaberg (1879)", q: "Q105469341" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "88",
		pocet: "5",
		obyv: [
			{ jm: "Carl Goldstein", arch: "Karl Goldstein (1858–1938)", q: "" },
			{ jm: "Eugenie Goldstein", arch: "Eugenie Goldstein (1868–1929)", q: "" },
			{ jm: "Josef Goldstein", arch: "Josef Goldstein (1900)", q: "" },
			{ jm: "Salomon Goldstein", arch: "Salomon Goldstein (1851–1925)", q: "" },
			{ jm: "Karoline Abeles", arch: "Karoline Abeles (1884)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "88",
		pocet: "6",
		obyv: [
			{ jm: "Karl Goldstein", arch: "Karl Goldstein (1858–1938)", q: "" },
			{ jm: "Eugenie Goldstein geb. König", arch: "Eugenie Goldstein (1868–1929)", q: "" },
			{ jm: "Josef Goldstein", arch: "Josef Goldstein (1900)", q: "" },
			{ jm: "Anna Goldstein", arch: "Anna Goldstein (1901)", q: "" },
			{ jm: "Salomon Goldstein", arch: "Salomon Goldstein (1851–1925)", q: "" },
			{ jm: "Regine König", arch: "Regine König (1846–1924)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "88",
		pocet: "5",
		obyv: [
			{ jm: "Karel Goldstein", arch: "Karl Goldstein (1858–1938)", q: "" },
			{ jm: "Eugenie Goldstein", arch: "Eugenie Goldstein (1868–1929)", q: "" },
			{ jm: "Anna Goldstein", arch: "Anna Goldstein (1901)", q: "" },
			{ jm: "Salomon Goldstein", arch: "Salomon Goldstein (1851–1925)", q: "" },
			{ jm: "Regina König", arch: "Regine König (1846–1924)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Hranice",
		cast: "",
		cp: "89",
		pocet: "5",
		obyv: [
			{ jm: "Sigmund Stix", arch: "Isaias Stix (1828–1895)", q: "" },
			{ jm: "Marie Stix", arch: "Marie Stix (1840)", q: "" },
			{ jm: "Julius Stix", arch: "Julius Stix (1866–1942)", q: "Q105610310" },
			{ jm: "Salomon Vogel", arch: "Salomon Vogel (1829–1890)", q: "" },
			{ jm: "Cäcilia Vogel", arch: "Cäcilia Vogel (1831–1919)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "89",
		pocet: "5",
		obyv: [
			{ jm: "Bernard Vielfreud", arch: "Berl Vielfreud (1828)", q: "" },
			{ jm: "Anna Vielfreud", arch: "Anna Vielfreund (1830)", q: "" },
			{ jm: "Ignatz Vogl", arch: "Ignatz Vogl (1868)", q: "" },
			{ jm: "Salomon Vogel", arch: "Salomon Vogel (1829–1890)", q: "" },
			{ jm: "Cilli Vogl", arch: "Cäcilia Vogel (1831–1919)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "89",
		pocet: "21",
		obyv: [
			{ jm: "Leopold Riesenfeld", arch: "Leopold Riesenfeld (1851)", q: "" },
			{ jm: "Marie Riesenfeld geb. Oppenheim", arch: "Marie Riesenfeld (1855–1923)", q: "" },
			{ jm: "Max Riesenfeld", arch: "Max Riesenfeld (1877)", q: "" },
			{ jm: "Hugo Riesenfeld", arch: "Hugo Riesenfeld (1879)", q: "" },
			{ jm: "Anna Riesenfeld", arch: "Anna Riesenfeld (1880)", q: "" },
			{ jm: "Rudolf Riesenfeld", arch: "Rudolf Ruta (1883–1942)", q: "Q105595537" },
			{ jm: "Elsa Riesenfeld", arch: "Elsa Riesenfeld (1885)", q: "" },
			{ jm: "Oskar Riesenfeld", arch: "Oskar Riesenfeld (1887–1911)", q: "" },
			{ jm: "Lotty Friedmann geb. Dittel", arch: "Lotty Friedmann (1841–1908)", q: "" },
			{ jm: "Auguste Friedmann", arch: "Auguste Stern (1865)", q: "" },
			{ jm: "Julie Friedmann", arch: "Juliana Friedmann (1870)", q: "" },
			{ jm: "Leopold Friedmann", arch: "Leopold Friedmann (1874)", q: "" },
			{ jm: "Amalie Friedmann", arch: "Amalia Friedmann (1877)", q: "" },
			{ jm: "Friederike Friedmann", arch: "Friederike Friedmann (1882)", q: "" },
			{ jm: "Cäcilie Vogel", arch: "Cäcilia Vogel (1831–1919)", q: "" },
			{ jm: "Adolf Kulka", arch: "Adolf Kulka (1878)", q: "" },
			{ jm: "Hermann Schulz", arch: "Hermann Schulz (1878)", q: "" },
			{ jm: "Leopold Schulz", arch: "Leopold Schulz (1881)", q: "" },
			{ jm: "Julius Frankl", arch: "Julius Frankl (1872–xxx1)", q: "" },
			{ jm: "Bernhard Vielfreund", arch: "Berl Vielfreud (1828)", q: "" },
			{ jm: "Anna Vielfreund", arch: "Anna Vielfreund (1830)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "89",
		pocet: "4",
		obyv: [
			{ jm: "Zilli Vogel", arch: "Cäcilia Vogel (1831–1919)", q: "" },
			{ jm: "Anna Vielfreund", arch: "Anna Vielfreund (1830)", q: "" },
			{ jm: "(Pinkas) David Wurm", arch: "David Wurm (1881)", q: "" },
			{ jm: "Heinrich Morgenstern", arch: "Heinrich Morgenstern (1883)", q: "Q105565186" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "89",
		pocet: "8",
		obyv: [
			{ jm: "Cecilie Voglová", arch: "Cäcilia Vogel (1831–1919)", q: "" },
			{ jm: "Adolf Baron", arch: "Adolf Baron (1865–1941)", q: "" },
			{ jm: "Róza Baronova", arch: "Rosa Baron (1867)", q: "" },
			{ jm: "Nathan Baron", arch: "Nathan Baron (1900–1926)", q: "" },
			{ jm: "Eduard Baron", arch: "Eduard Baron (1903)", q: "Q104219109" },
			{ jm: "Filip Baron", arch: "Filip Baron (1905)", q: "Q115663269" },
			{ jm: "Ignaz Beck", arch: "Ignaz Beck (1848–1923)", q: "" },
			{ jm: "Antonie Fischer", arch: "Antonie Beck (1859)", q: "Q104221038" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "89",
		pocet: "5",
		obyv: [
			{ jm: "Adolf Baron", arch: "Adolf Baron (1865–1941)", q: "" },
			{ jm: "Růžena Baronová", arch: "Rosa Baron (1867)", q: "" },
			{ jm: "Eduard Baron", arch: "Eduard Baron (1903)", q: "Q104219109" },
			{ jm: "Ignaz Beck", arch: "Ignaz Beck (1848–1923)", q: "" },
			{ jm: "Antonie Beck", arch: "Antonie Beck (1859)", q: "Q104221038" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "90",
		pocet: "11",
		obyv: [
			{ jm: "Moritz Riesenfeld", arch: "Moritz Riesenfeld (1813)", q: "" },
			{ jm: "Marie Riesenfeld", arch: "Marie Riesenfeld (1819)", q: "" },
			{ jm: "Alois Riesenfeld", arch: "Alois Riesenfeld (1848–1923)", q: "" },
			{ jm: "Filipine Riesenfeld", arch: "Filippine Riesenfeld (1857)", q: "" },
			{ jm: "Resi Riesenfeld", arch: "Rösi Riesenfeld (1858)", q: "" },
			{ jm: "Regine Riesenfeld", arch: "Regina Riesenfeld (1861)", q: "" },
			{ jm: "Leopold Riesenfeld", arch: "Leopold Riesenfeld (1851)", q: "" },
			{ jm: "Marie Riesenfeld", arch: "Marie Riesenfeld (1855–1923)", q: "" },
			{ jm: "Max Riesenfeld", arch: "Max Riesenfeld (1877)", q: "" },
			{ jm: "Hugo Riesenfeld", arch: "Hugo Riesenfeld (1879)", q: "" },
			{ jm: "Anna Riesenfeld", arch: "Anna Riesenfeld (1880)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "90",
		pocet: "3",
		obyv: [
			{ jm: "Leopold Fischer", arch: "Leopold Fischer (1858–1919)", q: "" },
			{ jm: "Eugenie Fischer", arch: "Eugenie Fischer (1862–1942)", q: "Q104544477" },
			{ jm: "Martha Fischer", arch: "Marta Hein (1885)", q: "Q104705519" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "90",
		pocet: "4",
		obyv: [
			{ jm: "Ignaz Vogel", arch: "Ignatz Vogl (1868)", q: "" },
			{ jm: "Rosa Vogel", arch: "Rosa Vogel (1871)", q: "" },
			{ jm: "Alfred Vogel", arch: "Alfred Vogel (1898)", q: "" },
			{ jm: "Leo (Moses Leeb) Weinstein-Rosenzweig", arch: "Leo Weinstein-Rosenzweig (1881)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "90",
		pocet: "12",
		obyv: [
			{ jm: "Ignaz Vogel", arch: "Ignatz Vogl (1868)", q: "" },
			{ jm: "Rosa Vogel geb. Blitz", arch: "Rosa Vogel (1871)", q: "" },
			{ jm: "Alfred Vogel", arch: "Alfred Vogel (1898)", q: "" },
			{ jm: "Emil Kohn", arch: "Emil Kohn (1896)", q: "" },
			{ jm: "Adele (Henie) Fränkl geb. Kalwin", arch: "Adele Fränkl (1872)", q: "" },
			{ jm: "Majer Fränkl", arch: "Majer Fränkl (1895)", q: "" },
			{ jm: "Helene Fränkl", arch: "Helene Fränkl (1898)", q: "" },
			{ jm: "Sabine Fränkl", arch: "Sabine Fränkl (1899)", q: "" },
			{ jm: "Anna Fränkl", arch: "Anna Fränkl (1900)", q: "" },
			{ jm: "Jakob Fränkl", arch: "Jakob Fränkl (1902)", q: "" },
			{ jm: "Erna Fränkl", arch: "Erna Fränkl (1905)", q: "" },
			{ jm: "Ida Fränkl", arch: "Ida Fränkl (1907)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "90",
		pocet: "4",
		obyv: [
			{ jm: "Ignaz Vogel", arch: "Ignatz Vogl (1868)", q: "" },
			{ jm: "Rosa Vogel", arch: "Rosa Vogel (1871)", q: "" },
			{ jm: "Alfred Vogel", arch: "Alfred Vogel (1898)", q: "" },
			{ jm: "Alfred Weinstein", arch: "Alfred Weinstein (1903)", q: "Q105619113" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Hranice",
		cast: "",
		cp: "92",
		pocet: "4",
		obyv: [
			{ jm: "Moritz Bek", arch: "Moses Beck (1839)", q: "" },
			{ jm: "Hanny Bek", arch: "Hanny Beck (1841)", q: "" },
			{ jm: "Heinrich Bek", arch: "Heinrich Beck (1867)", q: "" },
			{ jm: "Marie Bek", arch: "Marie Beck (1868)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "92",
		pocet: "7",
		obyv: [
			{ jm: "Moritz Bek", arch: "Moses Beck (1839)", q: "" },
			{ jm: "Sidonie Bek", arch: "Sidonie Beck (1851)", q: "" },
			{ jm: "Heinrich Bek", arch: "Heinrich Beck (1867)", q: "" },
			{ jm: "Marie Bek", arch: "Marie Beck (1868)", q: "" },
			{ jm: "Eugenie Bek", arch: "Eugenie Beck (1870)", q: "" },
			{ jm: "Josef Bek", arch: "Josef Beck (1872)", q: "" },
			{ jm: "Ernestine Bek", arch: "Ernestine Beck (1877)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "92",
		pocet: "10",
		obyv: [
			{ jm: "Moritz Beck", arch: "Moses Beck (1839)", q: "" },
			{ jm: "Sidonie Beck", arch: "Sidonie Beck (1851)", q: "" },
			{ jm: "Heinrich Beck", arch: "Heinrich Beck (1867)", q: "" },
			{ jm: "Ernestine Beck", arch: "Ernestine Beck (1877)", q: "" },
			{ jm: "Rosa Beck", arch: "Rosa Beck (1881)", q: "" },
			{ jm: "Sigfried Beck", arch: "Sigfried Beck (1887)", q: "" },
			{ jm: "Berthold Scharf", arch: "Berthold Scharf (1870)", q: "" },
			{ jm: "Heinrich Klebinder", arch: "Heinrich Klebinder (1871)", q: "" },
			{ jm: "Heinrich Groag", arch: "Heinrich Groag (1874)", q: "" },
			{ jm: "Josef Pretzner", arch: "Josef Pretzner (1877)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "92",
		pocet: "3",
		obyv: [
			{ jm: "Jaques Neuhaus", arch: "Jakob Neuhaus (1865)", q: "" },
			{ jm: "Emilie Neuhaus", arch: "Emilie Neuhaus (1864)", q: "" },
			{ jm: "Eugen Kohn", arch: "Eugen Kohn (1873–1929)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "93",
		pocet: "6",
		obyv: [
			{ jm: "Alois Riesenfeld", arch: "Alois Riesenfeld (1848–1923)", q: "" },
			{ jm: "Anna Riesenfeld", arch: "Anna Riesenfeld (1854–1924)", q: "" },
			{ jm: "Herman Riesenfeld", arch: "Herman Riesenfeld (1885)", q: "" },
			{ jm: "Camila Riesenfeld", arch: "Kamila Riesenfeldová (1887)", q: "Q105579722" },
			{ jm: "Melanie Riesenfeld", arch: "Melanie Riesenfeldová (1889)", q: "Q105579730" },
			{ jm: "Elfriede Riesenfeld", arch: "Elfriede Riesenfeld (1890–1924)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "93",
		pocet: "8",
		obyv: [
			{ jm: "Alois Riesenfeld", arch: "Alois Riesenfeld (1848–1923)", q: "" },
			{ jm: "Anna Riesenfeld", arch: "Anna Riesenfeld (1854–1924)", q: "" },
			{ jm: "Hermann Riesenfeld", arch: "Herman Riesenfeld (1885)", q: "" },
			{ jm: "Cammila Riesenfeld", arch: "Kamila Riesenfeldová (1887)", q: "Q105579722" },
			{ jm: "Melanie Riesenfeld", arch: "Melanie Riesenfeldová (1889)", q: "Q105579730" },
			{ jm: "Elfriede Riesenfeld", arch: "Elfriede Riesenfeld (1890–1924)", q: "" },
			{ jm: "Olga Riesenfeld", arch: "Olga Riesenfeldová (1892)", q: "Q105579732" },
			{ jm: "Eugenie Riesenfeld", arch: "Eugenie Riesenfeldová (1893)", q: "Q105579708" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "93",
		pocet: "6",
		obyv: [
			{ jm: "Alois Riesenfeld", arch: "Alois Riesenfeld (1848–1923)", q: "" },
			{ jm: "Anna Riesenfeld", arch: "Anna Riesenfeld (1854–1924)", q: "" },
			{ jm: "Kamilla Riesenfeld", arch: "Kamila Riesenfeldová (1887)", q: "Q105579722" },
			{ jm: "Elfrida Riesenfeld", arch: "Elfriede Riesenfeld (1890–1924)", q: "" },
			{ jm: "Olga Riesenfeld", arch: "Olga Riesenfeldová (1892)", q: "Q105579732" },
			{ jm: "Eugenie Riesenfeld", arch: "Eugenie Riesenfeldová (1893)", q: "Q105579708" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Hranice",
		cast: "",
		cp: "94",
		pocet: "8",
		obyv: [
			{ jm: "Aron Friedmann", arch: "Aron Friedmann (1830)", q: "" },
			{ jm: "Lotty Friedmann", arch: "Lotty Friedmann (1841–1908)", q: "" },
			{ jm: "Eduard Friedmann", arch: "Eduard Friedmann (1866)", q: "" },
			{ jm: "Augustine Friedmann", arch: "Auguste Stern (1865)", q: "" },
			{ jm: "Emil Kurz", arch: "Emil Kurz (1836–1908)", q: "" },
			{ jm: "Sofie Kurz", arch: "Sofie Kurz (1844–1919)", q: "" },
			{ jm: "Elise Kurz", arch: "Elisabeth Thorž (1867)", q: "Q105615061" },
			{ jm: "Friederika Kurz", arch: "Friederike Knöpfelmacherová (1869–1943)", q: "Q105521876" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "94",
		pocet: "3",
		obyv: [
			{ jm: "Josef Rein", arch: "Josef Rein (1852–1914)", q: "" },
			{ jm: "Julie Rein", arch: "Julie Rein (1856)", q: "" },
			{ jm: "Arthur Rein", arch: "Arthur Rein (1880)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "94",
		pocet: "10",
		obyv: [
			{ jm: "Samuel Kober", arch: "Samuel Kober (1838–1925)", q: "" },
			{ jm: "Katharina Kober geb. Gorge", arch: "Katharina Kober (1850–1914)", q: "" },
			{ jm: "Eugenie Kober", arch: "Eugenie Kober (1873–1892)", q: "" },
			{ jm: "Hermann Kober", arch: "Heřman Kober (1879–1943)", q: "Q105521937" },
			{ jm: "Irma Kober", arch: "Irma Kober (1885)", q: "" },
			{ jm: "Gustav Schübner", arch: "Gustav Schübner (1871)", q: "" },
			{ jm: "Josef Lustig", arch: "Josef Lustig (1853–1925)", q: "" },
			{ jm: "Rosa Lustig", arch: "Rosa Lustig (1854)", q: "" },
			{ jm: "Max Hess", arch: "Max Hess (1877)", q: "Q104700748" },
			{ jm: "Max Wolf", arch: "Franz Max Wolf (1876)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "94",
		pocet: "18",
		obyv: [
			{ jm: "Samuel Kober", arch: "Samuel Kober (1838–1925)", q: "" },
			{ jm: "Katharina Kober", arch: "Katharina Kober (1850–1914)", q: "" },
			{ jm: "Hermann Kober", arch: "Heřman Kober (1879–1943)", q: "Q105521937" },
			{ jm: "Irma Kober", arch: "Irma Kober (1885)", q: "" },
			{ jm: "Leopold Neumann", arch: "Leopold Neumann (1879)", q: "" },
			{ jm: "Leopold Riesenfeld", arch: "Leopold Riesenfeld (1851)", q: "" },
			{ jm: "Marie Riesenfeld geb. Oppenheim", arch: "Marie Riesenfeld (1855–1923)", q: "" },
			{ jm: "Max Riesenfeld", arch: "Max Riesenfeld (1877)", q: "" },
			{ jm: "Rudolf Ruta", arch: "Rudolf Ruta (1883–1942)", q: "Q105595537" },
			{ jm: "Anna Riesenfeld", arch: "Anna Riesenfeld (1880)", q: "" },
			{ jm: "Elsa Riesenfeld", arch: "Elsa Riesenfeld (1885)", q: "" },
			{ jm: "Oskar Riesenfeld", arch: "Oskar Riesenfeld (1887–1911)", q: "" },
			{ jm: "Salomon Brada", arch: "Salomon Brada (1840–1922)", q: "" },
			{ jm: "Fanni Brada geb. Müller", arch: "Fanni Brada (1853–1924)", q: "" },
			{ jm: "Gustav Adolf Brada", arch: "Gustav Adolf Brada (1883)", q: "" },
			{ jm: "Bertha Wlczek geb. Brada", arch: "Bertha Wlczek (1879)", q: "Q105639631" },
			{ jm: "Heinrich Wlczek", arch: "Heinrich Wlczek (1869–1931)", q: "" },
			{ jm: "Emanuel Wlczek", arch: "Emanuel Wlczek (1900–1942)", q: "Q105658093" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "94",
		pocet: "7",
		obyv: [
			{ jm: "Samuel Kober", arch: "Samuel Kober (1838–1925)", q: "" },
			{ jm: "Katharina Kober", arch: "Katharina Kober (1850–1914)", q: "" },
			{ jm: "Leopold Riesenfeld", arch: "Leopold Riesenfeld (1851)", q: "" },
			{ jm: "Marie Riesenfeld", arch: "Marie Riesenfeld (1855–1923)", q: "" },
			{ jm: "Else Riesenfeld", arch: "Elsa Riesenfeld (1885)", q: "" },
			{ jm: "Oskar Riesenfeld", arch: "Oskar Riesenfeld (1887–1911)", q: "" },
			{ jm: "Hugo Sax", arch: "Hugo Sax (1896)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "94",
		pocet: "7",
		obyv: [
			{ jm: "Samuel Kober", arch: "Samuel Kober (1838–1925)", q: "" },
			{ jm: "Konrad Klein", arch: "Konrad Klein (1883)", q: "Q105521097" },
			{ jm: "Helene Klein", arch: "Helena Kleinová (1895)", q: "" },
			{ jm: "Hedwig Klein", arch: "Hédi Klein (1909)", q: "Q105520945" },
			{ jm: "Kurt Klein", arch: "Kurt Klein (1910)", q: "" },
			{ jm: "Erich Klein", arch: "Erich Klein (1911)", q: "" },
			{ jm: "Dr. Ernst Wolf", arch: "Ernst Wolf (1890)", q: "Q105639853" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Hranice",
		cast: "",
		cp: "95",
		pocet: "3",
		obyv: [
			{ jm: "Zacharias Pollak", arch: "Zacharias Pollak (1801)", q: "" },
			{ jm: "Saly Pollak", arch: "Saly Pollak (1803)", q: "" },
			{ jm: "Anton Berg", arch: "Anton Berg (1864)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Hranice",
		cast: "",
		cp: "96",
		pocet: "2",
		obyv: [
			{ jm: "Israel Schindler", arch: "Israel Schindler (1845)", q: "" },
			{ jm: "Henriette Schindler", arch: "Henriette Schindler (1842)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "96",
		pocet: "4",
		obyv: [
			{ jm: "Jakob Lustig", arch: "Jakob Lustig (1855)", q: "Q115663274" },
			{ jm: "Antonie Lustig", arch: "Antonie Lustig (1862)", q: "" },
			{ jm: "Elisabeth Lustig", arch: "Elisabeth Lustig (1880)", q: "" },
			{ jm: "Jakob Kaiser", arch: "Jakob Kaiser (1825)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Hranice",
		cast: "",
		cp: "97",
		pocet: "3",
		obyv: [
			{ jm: "Moses Czech", arch: "Moses Czech (1828)", q: "" },
			{ jm: "Johanna Czech", arch: "Johanna Czech (1832)", q: "" },
			{ jm: "Fanny Pisker", arch: "Fanny Pisker (1834)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Hranice",
		cast: "",
		cp: "97",
		pocet: "2",
		obyv: [
			{ jm: "Moses Czech", arch: "Moses Czech (1828)", q: "" },
			{ jm: "Anna Czech", arch: "Johanna Czech (1832)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "97",
		pocet: "6",
		obyv: [
			{ jm: "Alois Steiner", arch: "Alois Steiner (1874)", q: "Q105607594" },
			{ jm: "Eugenie Steiner", arch: "Eugenie Steiner (1878–1930)", q: "" },
			{ jm: "Grethe Steiner", arch: "Grethe Steiner (1903)", q: "" },
			{ jm: "Elsa Steiner", arch: "Eliška Čáslavková (1904)", q: "" },
			{ jm: "Irma Steiner", arch: "Irma Steiner (1907)", q: "" },
			{ jm: "Julie Steiner", arch: "Julie Steiner (1908)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Hranice",
		cast: "",
		cp: "98",
		pocet: "8",
		obyv: [
			{ jm: "Adolf Singer", arch: "Adolf Singer (1854–1891)", q: "" },
			{ jm: "Regine Singer", arch: "Regine Singer (1861)", q: "Q105603381" },
			{ jm: "Jakob Pollach", arch: "Jakob Pollach (1836–1919)", q: "" },
			{ jm: "Lina Pollach geb. Breitenstein", arch: "Lina Pollach (1849)", q: "" },
			{ jm: "Bertha Pollach", arch: "Bertha Pollach (1879)", q: "Q105574334" },
			{ jm: "Felix Pollach", arch: "Felix Pollach (1880)", q: "Q105574336" },
			{ jm: "Stefanie Pollach", arch: "Stefanie Pollach (1882)", q: "Q105574342" },
			{ jm: "Elsa Pollach", arch: "Elsa Pollach (1886–1893)", q: "Q115663267" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Hranice",
		cast: "",
		cp: "98",
		pocet: "8",
		obyv: [
			{ jm: "Regine Singer", arch: "Regine Singer (1861)", q: "Q105603381" },
			{ jm: "Sidonie Hoffenreich", arch: "Sidonie Pollak (1882)", q: "Q105575242" },
			{ jm: "Alfred Trost", arch: "Alfred Trost (1881)", q: "" },
			{ jm: "Dr. Jakob Pollach", arch: "Jakob Pollach (1836–1919)", q: "" },
			{ jm: "Lina Pollach", arch: "Lina Pollach (1849)", q: "" },
			{ jm: "Bertha Pollach", arch: "Bertha Pollach (1879)", q: "Q105574334" },
			{ jm: "Felix Pollach", arch: "Felix Pollach (1880)", q: "Q105574336" },
			{ jm: "Stefanie Pollach", arch: "Stefanie Pollach (1882)", q: "Q105574342" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Hranice",
		cast: "",
		cp: "98",
		pocet: "6",
		obyv: [
			{ jm: "Regine Singer", arch: "Regine Singer (1861)", q: "Q105603381" },
			{ jm: "Alfred Trost", arch: "Alfred Trost (1881)", q: "" },
			{ jm: "Jakob Pollach", arch: "Jakob Pollach (1836–1919)", q: "" },
			{ jm: "Karoline Pollach", arch: "Lina Pollach (1849)", q: "" },
			{ jm: "Berta Pollach", arch: "Bertha Pollach (1879)", q: "Q105574334" },
			{ jm: "Stefanie Pollach", arch: "Stefanie Pollach (1882)", q: "Q105574342" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Hranice",
		cast: "",
		cp: "98",
		pocet: "3",
		obyv: [
			{ jm: "Regine Singer", arch: "Regine Singer (1861)", q: "Q105603381" },
			{ jm: "Adele Biro", arch: "Adele Biro (1884–1939)", q: "" },
			{ jm: "Serene Biro", arch: "Serene Biro (1913)", q: "" },
			],
		info: ""
	},
];
var mapCenter = [49.5550,17.7325];
var geoJSON = {
"type": "FeatureCollection",
"features": [
{
  "type": "Feature",
  "id": "relation/2686676",
  "properties": {
    "addr:city": "Židovská obec Hranice",
    "addr:conscriptionnumber": "XVI",
    "addr:housenumber": "XVI",
    "addr:street": "Judengasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1918",
    "source": "mza:d9",
    "start_date": "1830",
    "type": "multipolygon",
    "id": "relation/2686676"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7346602,
          49.5491857
        ],
        [
          17.7347392,
          49.5491864
        ],
        [
          17.7347528,
          49.5492683
        ],
        [
          17.7347562,
          49.5493101
        ],
        [
          17.7346328,
          49.5493267
        ],
        [
          17.7346106,
          49.5493306
        ],
        [
          17.7345435,
          49.5492092
        ],
        [
          17.7346602,
          49.5491857
        ]
      ],
      [
        [
          17.7347178,
          49.5492471
        ],
        [
          17.7346771,
          49.5492556
        ],
        [
          17.7346857,
          49.5492772
        ],
        [
          17.7347258,
          49.5492696
        ],
        [
          17.7347178,
          49.5492471
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "relation/2686679",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "1",
    "addr:housenumber": "1",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "type": "multipolygon",
    "wikidata": "Q12020648",
    "id": "relation/2686679"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7350446,
          49.5504019
        ],
        [
          17.7350463,
          49.5506429
        ],
        [
          17.7349175,
          49.5506421
        ],
        [
          17.7349055,
          49.550468
        ],
        [
          17.7345534,
          49.5504902
        ],
        [
          17.734542,
          49.5504336
        ],
        [
          17.7345306,
          49.5503849
        ],
        [
          17.7345074,
          49.5502865
        ],
        [
          17.7345022,
          49.5502641
        ],
        [
          17.7344931,
          49.5502254
        ],
        [
          17.734477,
          49.5501568
        ],
        [
          17.7344584,
          49.5500778
        ],
        [
          17.7344282,
          49.5500746
        ],
        [
          17.734403,
          49.5500617
        ],
        [
          17.7343923,
          49.5500467
        ],
        [
          17.7343929,
          49.5500275
        ],
        [
          17.734409,
          49.5500094
        ],
        [
          17.7344361,
          49.5499992
        ],
        [
          17.7344586,
          49.5499979
        ],
        [
          17.7344796,
          49.5499992
        ],
        [
          17.7345088,
          49.5499976
        ],
        [
          17.7345253,
          49.5500343
        ],
        [
          17.7347798,
          49.5500162
        ],
        [
          17.7348103,
          49.5500141
        ],
        [
          17.7348378,
          49.5500121
        ],
        [
          17.7348968,
          49.5500079
        ],
        [
          17.7350418,
          49.5499976
        ],
        [
          17.7350432,
          49.5501957
        ],
        [
          17.7350434,
          49.5502252
        ],
        [
          17.7350446,
          49.5504019
        ]
      ],
      [
        [
          17.7346668,
          49.5501488
        ],
        [
          17.7346847,
          49.5502452
        ],
        [
          17.734711,
          49.5503863
        ],
        [
          17.7348625,
          49.5503862
        ],
        [
          17.734856,
          49.5502339
        ],
        [
          17.7348518,
          49.5501339
        ],
        [
          17.7348032,
          49.5501378
        ],
        [
          17.7346668,
          49.5501488
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "relation/2686693",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "286",
    "addr:housenumber": "286",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "type": "multipolygon",
    "wikidata": "Q31745553",
    "id": "relation/2686693"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7365121,
          49.5504076
        ],
        [
          17.7366804,
          49.5504349
        ],
        [
          17.7370995,
          49.5505133
        ],
        [
          17.73703,
          49.5506146
        ],
        [
          17.7369966,
          49.5506752
        ],
        [
          17.7368997,
          49.5508108
        ],
        [
          17.7365764,
          49.5507398
        ],
        [
          17.7362184,
          49.5506612
        ],
        [
          17.7362548,
          49.5505575
        ],
        [
          17.7362694,
          49.5504981
        ],
        [
          17.7363045,
          49.550369
        ],
        [
          17.7365121,
          49.5504076
        ]
      ],
      [
        [
          17.7364305,
          49.5504874
        ],
        [
          17.7363754,
          49.5506178
        ],
        [
          17.7367371,
          49.550692
        ],
        [
          17.7367319,
          49.5507076
        ],
        [
          17.7368176,
          49.5507269
        ],
        [
          17.7369466,
          49.5505609
        ],
        [
          17.7368037,
          49.550534
        ],
        [
          17.7367887,
          49.5505523
        ],
        [
          17.7364305,
          49.5504874
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "relation/2686706",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "type": "multipolygon",
    "id": "relation/2686706"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7358284,
          49.5465924
        ],
        [
          17.7358798,
          49.5465604
        ],
        [
          17.7358398,
          49.5465428
        ],
        [
          17.7358701,
          49.5465236
        ],
        [
          17.7360053,
          49.546593
        ],
        [
          17.73597,
          49.5466262
        ],
        [
          17.7359513,
          49.5466459
        ],
        [
          17.7358284,
          49.5465924
        ]
      ],
      [
        [
          17.7359227,
          49.5465627
        ],
        [
          17.7358995,
          49.5465779
        ],
        [
          17.7359549,
          49.5466135
        ],
        [
          17.7359781,
          49.5465983
        ],
        [
          17.7359227,
          49.5465627
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "relation/2686718",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "317",
    "addr:housenumber": "317",
    "addr:street": "Ober Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "type": "multipolygon",
    "id": "relation/2686718"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7356202,
          49.5533071
        ],
        [
          17.736073,
          49.5533738
        ],
        [
          17.7360646,
          49.5534158
        ],
        [
          17.7360463,
          49.5534991
        ],
        [
          17.736028,
          49.5535845
        ],
        [
          17.735914,
          49.5535785
        ],
        [
          17.7359113,
          49.5535942
        ],
        [
          17.7355921,
          49.5535837
        ],
        [
          17.7356202,
          49.5533071
        ]
      ],
      [
        [
          17.7359376,
          49.5534013
        ],
        [
          17.7357223,
          49.5533766
        ],
        [
          17.7356967,
          49.5534802
        ],
        [
          17.7357656,
          49.5534884
        ],
        [
          17.7359167,
          49.5535063
        ],
        [
          17.7359376,
          49.5534013
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "relation/2686933",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "118",
    "addr:housenumber": "118",
    "building": "house",
    "building:material": "brick",
    "source": "cuzk:km",
    "source:start_date": "https://iispp.npu.cz/mis_public/documentPreview.htm?id=379990",
    "start_date": "1944",
    "type": "multipolygon",
    "id": "relation/2686933"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7346567,
          49.5490929
        ],
        [
          17.7348533,
          49.549092
        ],
        [
          17.7348526,
          49.5491443
        ],
        [
          17.7350617,
          49.5491464
        ],
        [
          17.7349833,
          49.5495127
        ],
        [
          17.7348304,
          49.5495171
        ],
        [
          17.7347688,
          49.5495208
        ],
        [
          17.7346683,
          49.5493799
        ],
        [
          17.7346515,
          49.5493615
        ],
        [
          17.7346328,
          49.5493267
        ],
        [
          17.7347562,
          49.5493101
        ],
        [
          17.7347528,
          49.5492683
        ],
        [
          17.7347392,
          49.5491864
        ],
        [
          17.7346602,
          49.5491857
        ],
        [
          17.7346581,
          49.5491229
        ],
        [
          17.7346567,
          49.5490929
        ]
      ],
      [
        [
          17.7347606,
          49.5493308
        ],
        [
          17.7348183,
          49.5494078
        ],
        [
          17.734831,
          49.5493204
        ],
        [
          17.7347606,
          49.5493308
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "relation/2686934",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "68",
    "addr:housenumber": "68",
    "addr:street": "Rathausgasse",
    "building": "house",
    "building:material": "brick",
    "source:start_date": "cuzk:katastr1924",
    "start_date": "1875",
    "type": "multipolygon",
    "id": "relation/2686934"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7343374,
          49.5468739
        ],
        [
          17.734341,
          49.5468079
        ],
        [
          17.7343419,
          49.5467012
        ],
        [
          17.7344881,
          49.5467023
        ],
        [
          17.7345131,
          49.5467039
        ],
        [
          17.7345606,
          49.546705
        ],
        [
          17.7345893,
          49.5467056
        ],
        [
          17.7345905,
          49.5466821
        ],
        [
          17.7345922,
          49.5466511
        ],
        [
          17.7347179,
          49.546654
        ],
        [
          17.7347162,
          49.546686
        ],
        [
          17.7347152,
          49.5467453
        ],
        [
          17.7347095,
          49.5468112
        ],
        [
          17.7347057,
          49.5468822
        ],
        [
          17.7346527,
          49.546881
        ],
        [
          17.7345986,
          49.5468798
        ],
        [
          17.7345394,
          49.5468785
        ],
        [
          17.7344905,
          49.5468774
        ],
        [
          17.7343374,
          49.5468739
        ]
      ],
      [
        [
          17.7346558,
          49.5467333
        ],
        [
          17.7345979,
          49.5467324
        ],
        [
          17.7345932,
          49.5468549
        ],
        [
          17.7346511,
          49.5468558
        ],
        [
          17.7346529,
          49.54681
        ],
        [
          17.7346558,
          49.5467333
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "relation/2686935",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "740",
    "addr:housenumber": "740",
    "addr:street": "Judengasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1919",
    "type": "multipolygon",
    "id": "relation/2686935"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7346602,
          49.5491857
        ],
        [
          17.7347392,
          49.5491864
        ],
        [
          17.7347528,
          49.5492683
        ],
        [
          17.7347562,
          49.5493101
        ],
        [
          17.7346328,
          49.5493267
        ],
        [
          17.7346106,
          49.5493306
        ],
        [
          17.7345435,
          49.5492092
        ],
        [
          17.7346602,
          49.5491857
        ]
      ],
      [
        [
          17.7347178,
          49.5492471
        ],
        [
          17.7346771,
          49.5492556
        ],
        [
          17.7346857,
          49.5492772
        ],
        [
          17.7347258,
          49.5492696
        ],
        [
          17.7347178,
          49.5492471
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "relation/2687016",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "577",
    "addr:housenumber": "577",
    "building": "yes",
    "building:material": "brick",
    "military": "barracks",
    "name": "C. k. kadetní jízdecká škola",
    "source:map": "cuzk:katastr1924",
    "source:start_date": "https://www.mesto-hranice.cz/clanky/kasarna-gen-zahalky",
    "start_date": "1863",
    "type": "multipolygon",
    "id": "relation/2687016"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7206333,
          49.5512748
        ],
        [
          17.7204435,
          49.5513354
        ],
        [
          17.7205057,
          49.5514181
        ],
        [
          17.7206325,
          49.5513779
        ],
        [
          17.7209768,
          49.551835
        ],
        [
          17.7209864,
          49.551832
        ],
        [
          17.7211312,
          49.5520243
        ],
        [
          17.7209336,
          49.5520869
        ],
        [
          17.7209278,
          49.5520791
        ],
        [
          17.7201754,
          49.5523176
        ],
        [
          17.7201834,
          49.5523283
        ],
        [
          17.7199824,
          49.552392
        ],
        [
          17.7198394,
          49.5522022
        ],
        [
          17.719847,
          49.5521998
        ],
        [
          17.7194758,
          49.551707
        ],
        [
          17.7195985,
          49.5516681
        ],
        [
          17.7195624,
          49.5516202
        ],
        [
          17.7193724,
          49.5516804
        ],
        [
          17.7192639,
          49.5515364
        ],
        [
          17.719468,
          49.5514717
        ],
        [
          17.7194712,
          49.551476
        ],
        [
          17.7201356,
          49.5512656
        ],
        [
          17.720325,
          49.5512051
        ],
        [
          17.7203193,
          49.5511975
        ],
        [
          17.7205231,
          49.5511324
        ],
        [
          17.7205886,
          49.5512186
        ],
        [
          17.7206333,
          49.5512748
        ]
      ],
      [
        [
          17.7203814,
          49.5513447
        ],
        [
          17.7201191,
          49.5514285
        ],
        [
          17.7201486,
          49.5514674
        ],
        [
          17.7200477,
          49.5514996
        ],
        [
          17.7200703,
          49.5515294
        ],
        [
          17.7199745,
          49.55156
        ],
        [
          17.7199519,
          49.5515302
        ],
        [
          17.719815,
          49.551574
        ],
        [
          17.7197855,
          49.5515351
        ],
        [
          17.719613,
          49.5515902
        ],
        [
          17.7197701,
          49.5517972
        ],
        [
          17.7198073,
          49.5517853
        ],
        [
          17.7199132,
          49.5519248
        ],
        [
          17.719876,
          49.5519367
        ],
        [
          17.7200358,
          49.5521472
        ],
        [
          17.7208042,
          49.5519017
        ],
        [
          17.7206444,
          49.5516911
        ],
        [
          17.7206091,
          49.5517024
        ],
        [
          17.7205032,
          49.5515629
        ],
        [
          17.7205385,
          49.5515516
        ],
        [
          17.7203814,
          49.5513447
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "relation/2687098",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "286",
    "addr:housenumber": "286",
    "building": "house",
    "building:material": "brick",
    "source:start_date": "cuzk:katastr1924",
    "start_date": "1875",
    "type": "multipolygon",
    "wikidata": "Q31745553",
    "id": "relation/2687098"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7370995,
          49.5505133
        ],
        [
          17.73703,
          49.5506146
        ],
        [
          17.7369966,
          49.5506752
        ],
        [
          17.7368997,
          49.5508108
        ],
        [
          17.7368608,
          49.55087
        ],
        [
          17.736543,
          49.5507995
        ],
        [
          17.7365764,
          49.5507398
        ],
        [
          17.7362184,
          49.5506612
        ],
        [
          17.7362548,
          49.5505575
        ],
        [
          17.7362694,
          49.5504981
        ],
        [
          17.7363045,
          49.550369
        ],
        [
          17.7365121,
          49.5504076
        ],
        [
          17.7366804,
          49.5504349
        ],
        [
          17.7370995,
          49.5505133
        ]
      ],
      [
        [
          17.7364305,
          49.5504874
        ],
        [
          17.7363754,
          49.5506178
        ],
        [
          17.7367371,
          49.550692
        ],
        [
          17.7367319,
          49.5507076
        ],
        [
          17.7368176,
          49.5507269
        ],
        [
          17.7369466,
          49.5505609
        ],
        [
          17.7368037,
          49.550534
        ],
        [
          17.7367887,
          49.5505523
        ],
        [
          17.7364305,
          49.5504874
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "relation/2687099",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "281",
    "addr:housenumber": "281",
    "building": "house",
    "source:start_date": "cuzk:katastr1924",
    "start_date": "1924",
    "type": "multipolygon",
    "id": "relation/2687099"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7369903,
          49.549494
        ],
        [
          17.7367732,
          49.5494484
        ],
        [
          17.7366926,
          49.5494315
        ],
        [
          17.736803,
          49.5492288
        ],
        [
          17.7368739,
          49.5492362
        ],
        [
          17.7369704,
          49.5492464
        ],
        [
          17.7371867,
          49.5492691
        ],
        [
          17.7371196,
          49.5494996
        ],
        [
          17.7370016,
          49.5494822
        ],
        [
          17.7369903,
          49.549494
        ]
      ],
      [
        [
          17.7370982,
          49.5493126
        ],
        [
          17.7369493,
          49.5492899
        ],
        [
          17.7369305,
          49.5493274
        ],
        [
          17.7368888,
          49.5493202
        ],
        [
          17.7368286,
          49.5494179
        ],
        [
          17.7369368,
          49.5494414
        ],
        [
          17.7369453,
          49.5494248
        ],
        [
          17.7370794,
          49.5494387
        ],
        [
          17.7370982,
          49.5493126
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "relation/2687100",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "358",
    "addr:housenumber": "358",
    "building": "house",
    "end_date": "1905",
    "source:end_date": "http://historie.hranet.cz/bartovsky1/priloha1.pdf",
    "source:start_date": "cuzk:katastr1924",
    "start_date": "1875",
    "type": "multipolygon",
    "id": "relation/2687100"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7352194,
          49.5527624
        ],
        [
          17.7352271,
          49.5530122
        ],
        [
          17.7350893,
          49.5530146
        ],
        [
          17.735087,
          49.5529633
        ],
        [
          17.735056,
          49.5529639
        ],
        [
          17.735057,
          49.5529841
        ],
        [
          17.7349753,
          49.5529857
        ],
        [
          17.7349136,
          49.5529869
        ],
        [
          17.7349122,
          49.5529574
        ],
        [
          17.7349101,
          49.5529104
        ],
        [
          17.7349089,
          49.5528848
        ],
        [
          17.7349265,
          49.5528845
        ],
        [
          17.7349211,
          49.5527679
        ],
        [
          17.7349484,
          49.5527674
        ],
        [
          17.735024,
          49.5527659
        ],
        [
          17.7350711,
          49.552765
        ],
        [
          17.7352194,
          49.5527624
        ]
      ],
      [
        [
          17.7350259,
          49.5528973
        ],
        [
          17.735053,
          49.5528974
        ],
        [
          17.735079,
          49.5528969
        ],
        [
          17.7350995,
          49.5528971
        ],
        [
          17.7350991,
          49.5527966
        ],
        [
          17.735051,
          49.552796
        ],
        [
          17.7350255,
          49.5527965
        ],
        [
          17.7350259,
          49.5528973
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "relation/2687101",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "358",
    "addr:housenumber": "358",
    "addr:street": "Ober Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "type": "multipolygon",
    "id": "relation/2687101"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7352194,
          49.5527624
        ],
        [
          17.7352271,
          49.5530122
        ],
        [
          17.7350893,
          49.5530146
        ],
        [
          17.735087,
          49.5529633
        ],
        [
          17.735056,
          49.5529639
        ],
        [
          17.735057,
          49.5529841
        ],
        [
          17.7349753,
          49.5529857
        ],
        [
          17.7349136,
          49.5529869
        ],
        [
          17.7349122,
          49.5529574
        ],
        [
          17.7348446,
          49.5529586
        ],
        [
          17.7348424,
          49.5529116
        ],
        [
          17.7349101,
          49.5529104
        ],
        [
          17.7349273,
          49.5529101
        ],
        [
          17.7349265,
          49.5528845
        ],
        [
          17.7349211,
          49.5527679
        ],
        [
          17.7349484,
          49.5527674
        ],
        [
          17.735024,
          49.5527659
        ],
        [
          17.7350711,
          49.552765
        ],
        [
          17.7352194,
          49.5527624
        ]
      ],
      [
        [
          17.7350259,
          49.5528973
        ],
        [
          17.735053,
          49.5528974
        ],
        [
          17.735079,
          49.5528969
        ],
        [
          17.7350995,
          49.5528971
        ],
        [
          17.7350991,
          49.5527966
        ],
        [
          17.735051,
          49.552796
        ],
        [
          17.7350255,
          49.5527965
        ],
        [
          17.7350259,
          49.5528973
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "relation/2687102",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "372",
    "addr:housenumber": "372",
    "building": "house",
    "source:start_date": "http://historie.hranet.cz/bartovsky1/priloha1.pdf",
    "start_date": "1906",
    "type": "multipolygon",
    "id": "relation/2687102"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.735634,
          49.551431
        ],
        [
          17.7356109,
          49.5514656
        ],
        [
          17.7355866,
          49.5515108
        ],
        [
          17.7354597,
          49.5514925
        ],
        [
          17.735297,
          49.5514098
        ],
        [
          17.7353655,
          49.5513532
        ],
        [
          17.7354144,
          49.5513264
        ],
        [
          17.7356356,
          49.5512571
        ],
        [
          17.7357194,
          49.5512947
        ],
        [
          17.735634,
          49.551431
        ]
      ],
      [
        [
          17.7356452,
          49.5513161
        ],
        [
          17.7356063,
          49.5513089
        ],
        [
          17.7354208,
          49.5513813
        ],
        [
          17.7355281,
          49.5514359
        ],
        [
          17.7355674,
          49.5514533
        ],
        [
          17.7355906,
          49.5514187
        ],
        [
          17.7356452,
          49.5513161
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280546",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280546"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7323993,
          49.5485939
        ],
        [
          17.7324976,
          49.5486031
        ],
        [
          17.732489,
          49.548642
        ],
        [
          17.7323906,
          49.5486328
        ],
        [
          17.7323993,
          49.5485939
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280553",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280553"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7335735,
          49.5494063
        ],
        [
          17.7336322,
          49.5494013
        ],
        [
          17.7336484,
          49.5494747
        ],
        [
          17.7335899,
          49.5494801
        ],
        [
          17.7335735,
          49.5494063
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280554",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "135",
    "addr:housenumber": "135",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280554"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7336065,
          49.5492848
        ],
        [
          17.7336213,
          49.5493518
        ],
        [
          17.7335626,
          49.5493573
        ],
        [
          17.7335735,
          49.5494063
        ],
        [
          17.7335899,
          49.5494801
        ],
        [
          17.7334502,
          49.549493
        ],
        [
          17.7334084,
          49.5493032
        ],
        [
          17.7336065,
          49.5492848
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280555",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "134",
    "addr:housenumber": "134",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280555"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7336491,
          49.5491298
        ],
        [
          17.7336823,
          49.5491851
        ],
        [
          17.7334817,
          49.5492322
        ],
        [
          17.7334524,
          49.5491746
        ],
        [
          17.7336491,
          49.5491298
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280556",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280556"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7340512,
          49.5492577
        ],
        [
          17.7341348,
          49.5492444
        ],
        [
          17.734166,
          49.5492794
        ],
        [
          17.7340709,
          49.549293
        ],
        [
          17.7340512,
          49.5492577
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280562",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280562"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7345523,
          49.5499202
        ],
        [
          17.7345598,
          49.5499401
        ],
        [
          17.7345644,
          49.5499579
        ],
        [
          17.7344993,
          49.5499666
        ],
        [
          17.734471,
          49.5499704
        ],
        [
          17.7344487,
          49.5499372
        ],
        [
          17.7345523,
          49.5499202
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280563",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280563"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7346727,
          49.5499435
        ],
        [
          17.7346623,
          49.5498823
        ],
        [
          17.7347295,
          49.5498732
        ],
        [
          17.7347438,
          49.549934
        ],
        [
          17.7347289,
          49.549936
        ],
        [
          17.7346727,
          49.5499435
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280564",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280564"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7345252,
          49.5498777
        ],
        [
          17.7343173,
          49.5499059
        ],
        [
          17.7342894,
          49.5498653
        ],
        [
          17.7344336,
          49.5498166
        ],
        [
          17.734471,
          49.5498039
        ],
        [
          17.7344824,
          49.5498433
        ],
        [
          17.7345144,
          49.5498405
        ],
        [
          17.7345252,
          49.5498777
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280565",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280565"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7345683,
          49.549834
        ],
        [
          17.734577,
          49.5498711
        ],
        [
          17.7345252,
          49.5498777
        ],
        [
          17.7345144,
          49.5498405
        ],
        [
          17.7345683,
          49.549834
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280566",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280566"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7342445,
          49.5495414
        ],
        [
          17.7342477,
          49.5495675
        ],
        [
          17.73425,
          49.5495866
        ],
        [
          17.7343698,
          49.5495721
        ],
        [
          17.7343754,
          49.5495988
        ],
        [
          17.73436,
          49.5496014
        ],
        [
          17.7342413,
          49.5496202
        ],
        [
          17.7342317,
          49.5495697
        ],
        [
          17.7342269,
          49.5495447
        ],
        [
          17.7342445,
          49.5495414
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280567",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280567"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7342164,
          49.5494919
        ],
        [
          17.7342435,
          49.5494892
        ],
        [
          17.7342479,
          49.5495036
        ],
        [
          17.7342801,
          49.5495012
        ],
        [
          17.7342937,
          49.5495349
        ],
        [
          17.7342445,
          49.5495414
        ],
        [
          17.7342269,
          49.5495447
        ],
        [
          17.7342164,
          49.5494919
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280568",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280568"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7342164,
          49.5494919
        ],
        [
          17.7342269,
          49.5495447
        ],
        [
          17.7341447,
          49.5495532
        ],
        [
          17.7341353,
          49.5495533
        ],
        [
          17.7341243,
          49.5495036
        ],
        [
          17.7342164,
          49.5494919
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280569",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280569"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7342077,
          49.5494482
        ],
        [
          17.7342164,
          49.5494919
        ],
        [
          17.7341243,
          49.5495036
        ],
        [
          17.7341109,
          49.5494329
        ],
        [
          17.7341594,
          49.5494243
        ],
        [
          17.734167,
          49.5494519
        ],
        [
          17.7342077,
          49.5494482
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280570",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1913",
    "source": "mza:d9",
    "source:end_date": "http://historie.hranet.cz/pdf/historie-hranickych-domu-blok.pdf",
    "start_date": "1830",
    "id": "way/198280570"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.734202,
          49.5494197
        ],
        [
          17.7342808,
          49.5494117
        ],
        [
          17.7342922,
          49.549442
        ],
        [
          17.7342569,
          49.5494531
        ],
        [
          17.734267,
          49.5494853
        ],
        [
          17.7342435,
          49.5494892
        ],
        [
          17.7342164,
          49.5494919
        ],
        [
          17.7342077,
          49.5494482
        ],
        [
          17.734202,
          49.5494197
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280571",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280571"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7340083,
          49.5489924
        ],
        [
          17.7340476,
          49.5490351
        ],
        [
          17.7339432,
          49.549039
        ],
        [
          17.7339211,
          49.5490184
        ],
        [
          17.7339144,
          49.5490106
        ],
        [
          17.7340083,
          49.5489924
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280572",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280572"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7339082,
          49.5489313
        ],
        [
          17.7339104,
          49.5489615
        ],
        [
          17.7338695,
          49.5489723
        ],
        [
          17.733832,
          49.5489449
        ],
        [
          17.7338814,
          49.5489337
        ],
        [
          17.7339082,
          49.5489313
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280573",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280573"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7339377,
          49.5489027
        ],
        [
          17.7339446,
          49.5489265
        ],
        [
          17.7339082,
          49.5489313
        ],
        [
          17.7338814,
          49.5489337
        ],
        [
          17.7338762,
          49.5489158
        ],
        [
          17.7339377,
          49.5489027
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280574",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1862",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280574"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7340108,
          49.5487442
        ],
        [
          17.7340424,
          49.5488613
        ],
        [
          17.7339338,
          49.5488738
        ],
        [
          17.7338788,
          49.5488802
        ],
        [
          17.7338471,
          49.5487628
        ],
        [
          17.7338299,
          49.5487652
        ],
        [
          17.7338219,
          49.5487374
        ],
        [
          17.7339063,
          49.5487275
        ],
        [
          17.7339159,
          49.548755
        ],
        [
          17.7340108,
          49.5487442
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280575",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1943",
    "source": "mza:d9",
    "source:end_date": "https://iispp.npu.cz/mis_public/documentPreview.htm?id=379990",
    "start_date": "1830",
    "id": "way/198280575"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7343283,
          49.5489795
        ],
        [
          17.7343443,
          49.5490033
        ],
        [
          17.734299,
          49.5490162
        ],
        [
          17.7342829,
          49.5489924
        ],
        [
          17.7343283,
          49.5489795
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280576",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1943",
    "source": "mza:d9",
    "source:end_date": "https://iispp.npu.cz/mis_public/documentPreview.htm?id=379990",
    "start_date": "1830",
    "id": "way/198280576"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7344619,
          49.5489407
        ],
        [
          17.7344587,
          49.5489543
        ],
        [
          17.7344857,
          49.549052
        ],
        [
          17.7344535,
          49.5490541
        ],
        [
          17.7344318,
          49.5489393
        ],
        [
          17.7344619,
          49.5489407
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280577",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1940",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1941",
    "start_date": "1830",
    "id": "way/198280577"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7343622,
          49.548998
        ],
        [
          17.7344493,
          49.5491254
        ],
        [
          17.734439,
          49.5491284
        ],
        [
          17.7343856,
          49.5491434
        ],
        [
          17.734299,
          49.5490162
        ],
        [
          17.7343443,
          49.5490033
        ],
        [
          17.7343622,
          49.548998
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280578",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1943",
    "source": "mza:d9",
    "source:end_date": "https://iispp.npu.cz/mis_public/documentPreview.htm?id=379990",
    "start_date": "1830",
    "id": "way/198280578"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7346556,
          49.5490672
        ],
        [
          17.7346567,
          49.5490929
        ],
        [
          17.7346581,
          49.5491229
        ],
        [
          17.7346602,
          49.5491857
        ],
        [
          17.7345604,
          49.5491809
        ],
        [
          17.7345616,
          49.5490658
        ],
        [
          17.7346556,
          49.5490672
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280579",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "122",
    "addr:housenumber": "122",
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280579"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7345213,
          49.5486867
        ],
        [
          17.7345178,
          49.5487016
        ],
        [
          17.7344907,
          49.5488175
        ],
        [
          17.734479,
          49.5488676
        ],
        [
          17.7344619,
          49.5489407
        ],
        [
          17.7344318,
          49.5489393
        ],
        [
          17.7342662,
          49.5489319
        ],
        [
          17.734285,
          49.5487925
        ],
        [
          17.734248,
          49.5487886
        ],
        [
          17.7342661,
          49.5487173
        ],
        [
          17.7343021,
          49.5487212
        ],
        [
          17.7343105,
          49.548679
        ],
        [
          17.7343139,
          49.5486649
        ],
        [
          17.7345213,
          49.5486867
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280580",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "121",
    "addr:housenumber": "121",
    "building": "house",
    "building:material": "brick",
    "end_date": "1943",
    "source": "mza:d9",
    "source:end_date": "https://iispp.npu.cz/mis_public/documentPreview.htm?id=379990",
    "start_date": "1830",
    "id": "way/198280580"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7347246,
          49.5487079
        ],
        [
          17.7347212,
          49.5487236
        ],
        [
          17.7347028,
          49.5488093
        ],
        [
          17.7346984,
          49.54883
        ],
        [
          17.7346665,
          49.5489787
        ],
        [
          17.7344587,
          49.5489543
        ],
        [
          17.7344619,
          49.5489407
        ],
        [
          17.734479,
          49.5488676
        ],
        [
          17.7344907,
          49.5488175
        ],
        [
          17.7345178,
          49.5487016
        ],
        [
          17.7345213,
          49.5486867
        ],
        [
          17.7347246,
          49.5487079
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280581",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "119",
    "addr:housenumber": "119",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "source:start_date": "Moravský zemský archiv, D22, sig. 1325",
    "start_date": "1729",
    "wikidata": "Q33423209",
    "id": "way/198280581"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7350874,
          49.5490143
        ],
        [
          17.7349819,
          49.5490086
        ],
        [
          17.7348748,
          49.5490028
        ],
        [
          17.7349145,
          49.5487445
        ],
        [
          17.7349171,
          49.5487281
        ],
        [
          17.7350892,
          49.5487461
        ],
        [
          17.7350898,
          49.5487635
        ],
        [
          17.7350959,
          49.5489376
        ],
        [
          17.7350874,
          49.5490143
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280582",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "120",
    "addr:housenumber": "120",
    "building": "house",
    "building:material": "brick",
    "end_date": "1943",
    "source": "mza:d9",
    "source:end_date": "https://iispp.npu.cz/mis_public/documentPreview.htm?id=379990",
    "start_date": "1830",
    "id": "way/198280582"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7346665,
          49.5489787
        ],
        [
          17.7346984,
          49.54883
        ],
        [
          17.7347028,
          49.5488093
        ],
        [
          17.7347212,
          49.5487236
        ],
        [
          17.7347246,
          49.5487079
        ],
        [
          17.7349171,
          49.5487281
        ],
        [
          17.7349145,
          49.5487445
        ],
        [
          17.7348748,
          49.5490028
        ],
        [
          17.7346665,
          49.5489787
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280583",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280583"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7348526,
          49.5491443
        ],
        [
          17.7348533,
          49.549092
        ],
        [
          17.7350678,
          49.549109
        ],
        [
          17.7350617,
          49.5491464
        ],
        [
          17.7348526,
          49.5491443
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280584",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1943",
    "source": "mza:d9",
    "source:end_date": "https://iispp.npu.cz/mis_public/documentPreview.htm?id=379990",
    "start_date": "1830",
    "id": "way/198280584"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7346581,
          49.5491229
        ],
        [
          17.7346556,
          49.5490672
        ],
        [
          17.7346547,
          49.5490589
        ],
        [
          17.7347426,
          49.5490633
        ],
        [
          17.7347432,
          49.5490793
        ],
        [
          17.7348533,
          49.549092
        ],
        [
          17.7348526,
          49.5491443
        ],
        [
          17.7346581,
          49.5491229
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280585",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280585"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7346106,
          49.5493306
        ],
        [
          17.7346328,
          49.5493267
        ],
        [
          17.7346515,
          49.5493615
        ],
        [
          17.7346263,
          49.5493657
        ],
        [
          17.7346106,
          49.5493306
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280587",
  "properties": {
    "addr:city": "Židovská obec Hranice",
    "addr:conscriptionnumber": "XVII",
    "addr:housenumber": "XVII",
    "addr:street": "Judengasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1889",
    "source": "mza:d9",
    "source:end_date": "http://historie.hranet.cz/pdf/historie-hranickych-domu-blok.pdf",
    "start_date": "1830",
    "id": "way/198280587"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7347474,
          49.5493614
        ],
        [
          17.7348304,
          49.5495171
        ],
        [
          17.7347688,
          49.5495208
        ],
        [
          17.7346683,
          49.5493799
        ],
        [
          17.7347474,
          49.5493614
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280589",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "118",
    "addr:housenumber": "118",
    "addr:street": "Schlossgasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1889",
    "source": "mza:d9",
    "source:end_date": "http://historie.hranet.cz/pdf/historie-hranickych-domu-blok.pdf",
    "start_date": "1830",
    "id": "way/198280589"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7349833,
          49.5495127
        ],
        [
          17.7348304,
          49.5495171
        ],
        [
          17.7347474,
          49.5493614
        ],
        [
          17.7348518,
          49.5493369
        ],
        [
          17.7348251,
          49.5492621
        ],
        [
          17.7347528,
          49.5492683
        ],
        [
          17.7347392,
          49.5491864
        ],
        [
          17.7346602,
          49.5491857
        ],
        [
          17.7346581,
          49.5491229
        ],
        [
          17.7348526,
          49.5491443
        ],
        [
          17.7350617,
          49.5491464
        ],
        [
          17.7349833,
          49.5495127
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280590",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "113",
    "addr:housenumber": "113",
    "addr:street": "Schlossgasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280590"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.735401,
          49.5500987
        ],
        [
          17.735398,
          49.5501314
        ],
        [
          17.7353963,
          49.5501505
        ],
        [
          17.7351726,
          49.5501327
        ],
        [
          17.7351865,
          49.550056
        ],
        [
          17.735401,
          49.5500987
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280591",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280591"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7355836,
          49.5500503
        ],
        [
          17.7355234,
          49.5500343
        ],
        [
          17.7355584,
          49.5499247
        ],
        [
          17.7356568,
          49.5499448
        ],
        [
          17.7356302,
          49.5499832
        ],
        [
          17.7355836,
          49.5500503
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280592",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "112",
    "addr:housenumber": "112",
    "addr:street": "Schlossgasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280592"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7352159,
          49.5499864
        ],
        [
          17.7354175,
          49.550023
        ],
        [
          17.7355234,
          49.5500343
        ],
        [
          17.7355836,
          49.5500503
        ],
        [
          17.7355555,
          49.5501005
        ],
        [
          17.7354103,
          49.550075
        ],
        [
          17.735401,
          49.5500987
        ],
        [
          17.7351865,
          49.550056
        ],
        [
          17.7352002,
          49.5499882
        ],
        [
          17.7352159,
          49.5499864
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280593",
  "properties": {
    "addr:city": "Židovská obec Hranice",
    "addr:conscriptionnumber": "I",
    "addr:housenumber": "I",
    "addr:street": "Schlossgasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1918",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280593"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7352159,
          49.5499864
        ],
        [
          17.7352253,
          49.5499564
        ],
        [
          17.7352153,
          49.5499208
        ],
        [
          17.7352216,
          49.5498823
        ],
        [
          17.7354424,
          49.5499053
        ],
        [
          17.7354175,
          49.550023
        ],
        [
          17.7352159,
          49.5499864
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280594",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280594"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7343971,
          49.5495055
        ],
        [
          17.7343461,
          49.5495122
        ],
        [
          17.7343368,
          49.5494921
        ],
        [
          17.7343886,
          49.5494853
        ],
        [
          17.7343971,
          49.5495055
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280595",
  "properties": {
    "addr:city": "Židovská obec Hranice",
    "addr:conscriptionnumber": "XIV",
    "addr:housenumber": "XIV",
    "addr:street": "Judengasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1918",
    "source:end_date": "http://historie.hranet.cz/pdf/historie-hranickych-domu-blok.pdf",
    "source:start_date": "Moravský zemský archiv, D22, sig. 1325",
    "start_date": "1729",
    "id": "way/198280595"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7341828,
          49.5488506
        ],
        [
          17.7341967,
          49.548898
        ],
        [
          17.7341645,
          49.5489016
        ],
        [
          17.7341445,
          49.5489039
        ],
        [
          17.7339842,
          49.5489221
        ],
        [
          17.7339446,
          49.5489265
        ],
        [
          17.7339377,
          49.5489027
        ],
        [
          17.7339338,
          49.5488738
        ],
        [
          17.7340424,
          49.5488613
        ],
        [
          17.7341579,
          49.5488523
        ],
        [
          17.7341828,
          49.5488506
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280596",
  "properties": {
    "addr:city": "Židovská obec Hranice",
    "addr:conscriptionnumber": "XIII",
    "addr:housenumber": "XIII",
    "addr:street": "Judengasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1919",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "source:start_date": "Moravský zemský archiv, D22, sig. 1325",
    "start_date": "1729",
    "id": "way/198280596"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7341967,
          49.548898
        ],
        [
          17.7342094,
          49.5489366
        ],
        [
          17.7341729,
          49.5489403
        ],
        [
          17.7339984,
          49.5489577
        ],
        [
          17.7339559,
          49.5489619
        ],
        [
          17.7339446,
          49.5489265
        ],
        [
          17.7341645,
          49.5489016
        ],
        [
          17.7341967,
          49.548898
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280597",
  "properties": {
    "addr:city": "Židovská obec Hranice",
    "addr:conscriptionnumber": "XII",
    "addr:housenumber": "XII",
    "addr:street": "Judengasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1919",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280597"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7342094,
          49.5489366
        ],
        [
          17.7342336,
          49.5490151
        ],
        [
          17.734205,
          49.5490184
        ],
        [
          17.7340476,
          49.5490351
        ],
        [
          17.7340083,
          49.5489924
        ],
        [
          17.7339984,
          49.5489577
        ],
        [
          17.7341729,
          49.5489403
        ],
        [
          17.7342094,
          49.5489366
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280598",
  "properties": {
    "addr:city": "Židovská obec Hranice",
    "addr:conscriptionnumber": "XI",
    "addr:housenumber": "XI",
    "addr:street": "Judengasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1919",
    "source:start_date": "mza:d9",
    "start_date": "1830",
    "id": "way/198280598"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7342336,
          49.5490151
        ],
        [
          17.7342464,
          49.5490137
        ],
        [
          17.734294,
          49.5490929
        ],
        [
          17.7342711,
          49.5490942
        ],
        [
          17.7341225,
          49.5491167
        ],
        [
          17.7340476,
          49.5490351
        ],
        [
          17.734205,
          49.5490184
        ],
        [
          17.7342336,
          49.5490151
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280599",
  "properties": {
    "addr:city": "Židovská obec Hranice",
    "addr:conscriptionnumber": "X",
    "addr:housenumber": "X",
    "addr:street": "Judengasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1919",
    "source": "mza:d9",
    "source:start_date": "Moravský zemský archiv, D22, sig. 1325",
    "start_date": "1729",
    "id": "way/198280599"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.734294,
          49.5490929
        ],
        [
          17.7343643,
          49.5491725
        ],
        [
          17.7343424,
          49.5491754
        ],
        [
          17.7343252,
          49.5491777
        ],
        [
          17.7341863,
          49.5491963
        ],
        [
          17.7341225,
          49.5491167
        ],
        [
          17.7342711,
          49.5490942
        ],
        [
          17.734294,
          49.5490929
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280600",
  "properties": {
    "addr:city": "Židovská obec Hranice",
    "addr:conscriptionnumber": "IX",
    "addr:housenumber": "IX",
    "addr:street": "Judengasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1896",
    "source": "mza:d9",
    "source:end_date": "http://historie.hranet.cz/pdf/historie-hranickych-domu-blok.pdf",
    "source:start_date": "Moravský zemský archiv, D22, sig. 1325",
    "start_date": "1729",
    "id": "way/198280600"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7343643,
          49.5491725
        ],
        [
          17.7344287,
          49.5492551
        ],
        [
          17.7344166,
          49.5492562
        ],
        [
          17.7344105,
          49.5492568
        ],
        [
          17.7343988,
          49.5492579
        ],
        [
          17.7342525,
          49.5492714
        ],
        [
          17.7341863,
          49.5491963
        ],
        [
          17.7343424,
          49.5491754
        ],
        [
          17.7343643,
          49.5491725
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280601",
  "properties": {
    "addr:city": "Židovská obec Hranice",
    "addr:conscriptionnumber": "VIII",
    "addr:housenumber": "VIII",
    "addr:street": "Judengasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1868",
    "source": "mza:d9",
    "source:end_date": "http://digi.archives.cz/da/permalink?xid=6b555823-b25f-4415-9d89-fc7093d6718b242978&scan=37&parentType=10054#scan37",
    "source:start_date": "Moravský zemský archiv, D22, sig. 1325",
    "start_date": "1729",
    "id": "way/198280601"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7344287,
          49.5492551
        ],
        [
          17.7344733,
          49.5492834
        ],
        [
          17.7344494,
          49.5492859
        ],
        [
          17.7344412,
          49.5492867
        ],
        [
          17.7342556,
          49.549307
        ],
        [
          17.7342231,
          49.5493094
        ],
        [
          17.7342136,
          49.549275
        ],
        [
          17.7342525,
          49.5492714
        ],
        [
          17.7343988,
          49.5492579
        ],
        [
          17.7344105,
          49.5492568
        ],
        [
          17.7344166,
          49.5492562
        ],
        [
          17.7344287,
          49.5492551
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280602",
  "properties": {
    "addr:city": "Židovská obec Hranice",
    "addr:conscriptionnumber": "VII",
    "addr:housenumber": "VII",
    "addr:street": "Judengasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1913",
    "source": "cuzk:katastr1924",
    "source:end_date": "http://historie.hranet.cz/pdf/historie-hranickych-domu-blok.pdf",
    "source:start_date": "Moravský zemský archiv, D22, sig. 1325",
    "start_date": "1729",
    "id": "way/198280602"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7344733,
          49.5492834
        ],
        [
          17.7345148,
          49.5493206
        ],
        [
          17.7344851,
          49.5493228
        ],
        [
          17.7342715,
          49.5493487
        ],
        [
          17.7342556,
          49.549307
        ],
        [
          17.7344412,
          49.5492867
        ],
        [
          17.7344494,
          49.5492859
        ],
        [
          17.7344733,
          49.5492834
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280603",
  "properties": {
    "addr:city": "Židovská obec Hranice",
    "addr:conscriptionnumber": "VI",
    "addr:housenumber": "VI",
    "addr:street": "Judengasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1913",
    "source": "cuzk:katastr1924",
    "source:end_date": "http://historie.hranet.cz/pdf/historie-hranickych-domu-blok.pdf",
    "source:start_date": "Moravský zemský archiv, D22, sig. 1325",
    "start_date": "1729",
    "id": "way/198280603"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7345148,
          49.5493206
        ],
        [
          17.7345761,
          49.5493817
        ],
        [
          17.7345493,
          49.5493844
        ],
        [
          17.7343038,
          49.5494093
        ],
        [
          17.7342808,
          49.5494117
        ],
        [
          17.734202,
          49.5494197
        ],
        [
          17.7341899,
          49.5493584
        ],
        [
          17.7342715,
          49.5493487
        ],
        [
          17.7344851,
          49.5493228
        ],
        [
          17.7345148,
          49.5493206
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280604",
  "properties": {
    "addr:city": "Židovská obec Hranice",
    "addr:conscriptionnumber": "V",
    "addr:housenumber": "V",
    "addr:street": "Judengasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1913",
    "source": "cuzk:katastr1924",
    "source:end_date": "http://historie.hranet.cz/pdf/historie-hranickych-domu-blok.pdf",
    "source:start_date": "Moravský zemský archiv, D22, sig. 1325",
    "start_date": "1729",
    "id": "way/198280604"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7345761,
          49.5493817
        ],
        [
          17.7346189,
          49.5494366
        ],
        [
          17.734595,
          49.5494424
        ],
        [
          17.7343886,
          49.5494853
        ],
        [
          17.7343038,
          49.5494093
        ],
        [
          17.7345493,
          49.5493844
        ],
        [
          17.7345761,
          49.5493817
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280605",
  "properties": {
    "addr:city": "Židovská obec Hranice",
    "addr:conscriptionnumber": "IV",
    "addr:housenumber": "IV",
    "addr:street": "Judengasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1918",
    "source": "mza:d9",
    "source:end_date": "http://historie.hranet.cz/pdf/historie-hranickych-domu-blok.pdf",
    "source:start_date": "Moravský zemský archiv, D22, sig. 1325",
    "start_date": "1729",
    "id": "way/198280605"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7344098,
          49.5495395
        ],
        [
          17.7343971,
          49.5495055
        ],
        [
          17.7343886,
          49.5494853
        ],
        [
          17.734579,
          49.5494451
        ],
        [
          17.734595,
          49.5494424
        ],
        [
          17.7346189,
          49.5494366
        ],
        [
          17.7346756,
          49.549494
        ],
        [
          17.7346447,
          49.5494981
        ],
        [
          17.7344098,
          49.5495395
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280606",
  "properties": {
    "addr:city": "Židovská obec Hranice",
    "addr:conscriptionnumber": "III",
    "addr:housenumber": "III",
    "addr:street": "Judengasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1918",
    "source": "mza:d9",
    "source:end_date": "http://historie.hranet.cz/pdf/historie-hranickych-domu-blok.pdf",
    "source:start_date": "Moravský zemský archiv, D22, sig. 1325",
    "start_date": "1729",
    "id": "way/198280606"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7346756,
          49.549494
        ],
        [
          17.7347184,
          49.5495566
        ],
        [
          17.7346827,
          49.5495611
        ],
        [
          17.7346573,
          49.5495636
        ],
        [
          17.7344395,
          49.5495901
        ],
        [
          17.7344098,
          49.5495395
        ],
        [
          17.7346447,
          49.5494981
        ],
        [
          17.7346756,
          49.549494
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280607",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "3",
    "addr:housenumber": "3",
    "addr:street": "Judengasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1499",
    "wikidata": "Q33425947",
    "id": "way/198280607"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7344395,
          49.5495901
        ],
        [
          17.7346573,
          49.5495636
        ],
        [
          17.7346827,
          49.5495611
        ],
        [
          17.7347184,
          49.5495566
        ],
        [
          17.7347347,
          49.5496211
        ],
        [
          17.7346988,
          49.549625
        ],
        [
          17.7344567,
          49.5496511
        ],
        [
          17.7344495,
          49.5496255
        ],
        [
          17.7344395,
          49.5495901
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280608",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "2",
    "addr:housenumber": "2",
    "addr:street": "Judengasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "source:start_date": "https://iispp.npu.cz/mis_public/searchDocument.htm?search=44982/8-430",
    "start_date": "1499",
    "id": "way/198280608"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7347347,
          49.5496211
        ],
        [
          17.7347502,
          49.5496824
        ],
        [
          17.734714,
          49.5496858
        ],
        [
          17.7344726,
          49.5497088
        ],
        [
          17.7344567,
          49.5496511
        ],
        [
          17.7346988,
          49.549625
        ],
        [
          17.7347347,
          49.5496211
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280609",
  "properties": {
    "addr:city": "Židovská obec Hranice",
    "addr:conscriptionnumber": "II",
    "addr:housenumber": "II",
    "addr:street": "Judengasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1918",
    "source": "mza:d9",
    "start_date": "1830",
    "wikidata": "Q33425929",
    "id": "way/198280609"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7347502,
          49.5496824
        ],
        [
          17.7347835,
          49.5498139
        ],
        [
          17.7347471,
          49.5498173
        ],
        [
          17.7347141,
          49.5498204
        ],
        [
          17.7346182,
          49.5498293
        ],
        [
          17.7345683,
          49.549834
        ],
        [
          17.7345144,
          49.5498405
        ],
        [
          17.7344824,
          49.5498433
        ],
        [
          17.734471,
          49.5498039
        ],
        [
          17.7344511,
          49.5497339
        ],
        [
          17.7344454,
          49.5497114
        ],
        [
          17.7344726,
          49.5497088
        ],
        [
          17.734714,
          49.5496858
        ],
        [
          17.7347502,
          49.5496824
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280610",
  "properties": {
    "addr:city": "Židovská obec Hranice",
    "addr:conscriptionnumber": "XV",
    "addr:housenumber": "XV",
    "addr:street": "Judengasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1918",
    "source": "mza:d9",
    "source:start_date": "iispp.npu.cz/mis_public/searchDocument.htm?search=35760/8-426",
    "start_date": "1599",
    "id": "way/198280610"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7341921,
          49.5486946
        ],
        [
          17.7341914,
          49.5487013
        ],
        [
          17.7341828,
          49.5488506
        ],
        [
          17.7341579,
          49.5488523
        ],
        [
          17.7340424,
          49.5488613
        ],
        [
          17.7340108,
          49.5487442
        ],
        [
          17.7340063,
          49.548703
        ],
        [
          17.7340056,
          49.5486962
        ],
        [
          17.7341921,
          49.5486946
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280623",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280623"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7338452,
          49.5502353
        ],
        [
          17.7338668,
          49.5503115
        ],
        [
          17.7338233,
          49.5503167
        ],
        [
          17.7338018,
          49.5502405
        ],
        [
          17.7338452,
          49.5502353
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280624",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280624"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7337902,
          49.5499322
        ],
        [
          17.733814,
          49.5500022
        ],
        [
          17.7337637,
          49.5500094
        ],
        [
          17.7337399,
          49.5499394
        ],
        [
          17.7337902,
          49.5499322
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280625",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "137",
    "addr:housenumber": "137",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280625"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7337188,
          49.5497809
        ],
        [
          17.7337711,
          49.5499061
        ],
        [
          17.733668,
          49.549921
        ],
        [
          17.733626,
          49.5498138
        ],
        [
          17.7337188,
          49.5497809
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280627",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "136",
    "addr:housenumber": "136",
    "building": "house",
    "building:material": "brick",
    "end_date": "1941",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1941",
    "start_date": "1830",
    "id": "way/198280627"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.733711,
          49.5495548
        ],
        [
          17.7337222,
          49.5496638
        ],
        [
          17.7335828,
          49.5496699
        ],
        [
          17.7335438,
          49.5496716
        ],
        [
          17.7335326,
          49.5495626
        ],
        [
          17.733711,
          49.5495548
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280633",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280633"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7347141,
          49.5498204
        ],
        [
          17.7347178,
          49.5498441
        ],
        [
          17.7346276,
          49.5498553
        ],
        [
          17.7346182,
          49.5498293
        ],
        [
          17.7347141,
          49.5498204
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280634",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280634"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7344454,
          49.5497114
        ],
        [
          17.7344511,
          49.5497339
        ],
        [
          17.7344341,
          49.549739
        ],
        [
          17.7343652,
          49.5497596
        ],
        [
          17.7343787,
          49.5497855
        ],
        [
          17.7343237,
          49.5498028
        ],
        [
          17.734337,
          49.5498274
        ],
        [
          17.7342797,
          49.5498519
        ],
        [
          17.7342186,
          49.5497881
        ],
        [
          17.7343121,
          49.5497565
        ],
        [
          17.7344454,
          49.5497114
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280635",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280635"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7342846,
          49.549687
        ],
        [
          17.7343121,
          49.5497565
        ],
        [
          17.7342186,
          49.5497881
        ],
        [
          17.7341797,
          49.549716
        ],
        [
          17.7342498,
          49.5496967
        ],
        [
          17.7342846,
          49.549687
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280636",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280636"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7341353,
          49.5495533
        ],
        [
          17.7341447,
          49.5495532
        ],
        [
          17.7341507,
          49.5496289
        ],
        [
          17.7341317,
          49.5496325
        ],
        [
          17.7341441,
          49.549654
        ],
        [
          17.7340755,
          49.5496588
        ],
        [
          17.7340684,
          49.5496597
        ],
        [
          17.7340532,
          49.549621
        ],
        [
          17.7340552,
          49.5495636
        ],
        [
          17.7341353,
          49.5495533
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280637",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280637"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7338596,
          49.5494724
        ],
        [
          17.7338706,
          49.5495122
        ],
        [
          17.7337442,
          49.5495268
        ],
        [
          17.7337435,
          49.5495242
        ],
        [
          17.7337333,
          49.549487
        ],
        [
          17.7338596,
          49.5494724
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280638",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280638"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7324364,
          49.5483704
        ],
        [
          17.7324178,
          49.5484048
        ],
        [
          17.7323502,
          49.5483893
        ],
        [
          17.732368,
          49.5483569
        ],
        [
          17.7324364,
          49.5483704
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280639",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280639"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7323753,
          49.548035
        ],
        [
          17.7323819,
          49.5480863
        ],
        [
          17.7323394,
          49.5480885
        ],
        [
          17.7322924,
          49.5480911
        ],
        [
          17.7322859,
          49.5480363
        ],
        [
          17.7323753,
          49.548035
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280640",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280640"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7322095,
          49.5478067
        ],
        [
          17.7323121,
          49.5478101
        ],
        [
          17.7324386,
          49.5478168
        ],
        [
          17.7324733,
          49.5478187
        ],
        [
          17.7325183,
          49.5478219
        ],
        [
          17.7325637,
          49.5478241
        ],
        [
          17.7325502,
          49.5479052
        ],
        [
          17.7321914,
          49.5478752
        ],
        [
          17.7322095,
          49.5478067
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280645",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "178",
    "addr:housenumber": "178",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280645"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7333099,
          49.5507143
        ],
        [
          17.7333117,
          49.5507607
        ],
        [
          17.733264,
          49.5507615
        ],
        [
          17.733177,
          49.5507629
        ],
        [
          17.7331752,
          49.5507165
        ],
        [
          17.7333099,
          49.5507143
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280646",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280646"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7333661,
          49.5506107
        ],
        [
          17.7333734,
          49.5506728
        ],
        [
          17.7330173,
          49.5506903
        ],
        [
          17.7330101,
          49.5506281
        ],
        [
          17.7333661,
          49.5506107
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280648",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "179",
    "addr:housenumber": "179",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280648"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7329013,
          49.5494315
        ],
        [
          17.7328934,
          49.549357
        ],
        [
          17.7329872,
          49.5493528
        ],
        [
          17.7331014,
          49.5493473
        ],
        [
          17.7331707,
          49.5493448
        ],
        [
          17.7331788,
          49.549419
        ],
        [
          17.7329013,
          49.5494315
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280653",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280653"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7336518,
          49.5486472
        ],
        [
          17.7336547,
          49.5486775
        ],
        [
          17.7336126,
          49.5486801
        ],
        [
          17.7336084,
          49.5486494
        ],
        [
          17.7336518,
          49.5486472
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280654",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280654"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7338292,
          49.5485149
        ],
        [
          17.733862,
          49.548514
        ],
        [
          17.7338766,
          49.5485129
        ],
        [
          17.7338783,
          49.5485326
        ],
        [
          17.7338302,
          49.5485338
        ],
        [
          17.7338292,
          49.5485149
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280655",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280655"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7336477,
          49.5484549
        ],
        [
          17.73371,
          49.5484543
        ],
        [
          17.7337235,
          49.54851
        ],
        [
          17.733655,
          49.5485182
        ],
        [
          17.7336477,
          49.5484549
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280656",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280656"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7335778,
          49.5484568
        ],
        [
          17.7336477,
          49.5484549
        ],
        [
          17.733655,
          49.5485182
        ],
        [
          17.7335889,
          49.5485233
        ],
        [
          17.7335778,
          49.5484568
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280657",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280657"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7335736,
          49.5479748
        ],
        [
          17.7335706,
          49.547956
        ],
        [
          17.7337996,
          49.5479578
        ],
        [
          17.7337958,
          49.5479769
        ],
        [
          17.7335736,
          49.5479748
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280658",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280658"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7337003,
          49.5484001
        ],
        [
          17.7337311,
          49.5483983
        ],
        [
          17.733732,
          49.5484216
        ],
        [
          17.7335706,
          49.5484273
        ],
        [
          17.733569,
          49.5484021
        ],
        [
          17.7336326,
          49.5484012
        ],
        [
          17.7337003,
          49.5484001
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280659",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280659"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7337034,
          49.5483424
        ],
        [
          17.7337003,
          49.5484001
        ],
        [
          17.7336326,
          49.5484012
        ],
        [
          17.7336318,
          49.5483411
        ],
        [
          17.7337034,
          49.5483424
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280660",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1941",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1941",
    "start_date": "1830",
    "id": "way/198280660"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7337094,
          49.5482629
        ],
        [
          17.7337186,
          49.5482885
        ],
        [
          17.7337025,
          49.5482906
        ],
        [
          17.7337034,
          49.5483424
        ],
        [
          17.7336318,
          49.5483411
        ],
        [
          17.7335592,
          49.548341
        ],
        [
          17.7335559,
          49.5482752
        ],
        [
          17.7337094,
          49.5482629
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280661",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280661"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.733707,
          49.548196
        ],
        [
          17.7337088,
          49.5482468
        ],
        [
          17.7337094,
          49.5482629
        ],
        [
          17.7335559,
          49.5482752
        ],
        [
          17.7335349,
          49.5482718
        ],
        [
          17.7335202,
          49.5482602
        ],
        [
          17.7335179,
          49.5482527
        ],
        [
          17.7335199,
          49.5482444
        ],
        [
          17.7335272,
          49.5482364
        ],
        [
          17.733539,
          49.5482309
        ],
        [
          17.7335577,
          49.548229
        ],
        [
          17.733556,
          49.5481941
        ],
        [
          17.733707,
          49.548196
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280662",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280662"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7335525,
          49.5481235
        ],
        [
          17.7336218,
          49.5481232
        ],
        [
          17.7337126,
          49.5481256
        ],
        [
          17.7337111,
          49.5481626
        ],
        [
          17.733707,
          49.548196
        ],
        [
          17.733556,
          49.5481941
        ],
        [
          17.7335525,
          49.5481235
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280663",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280663"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7336057,
          49.5480657
        ],
        [
          17.7336222,
          49.548063
        ],
        [
          17.7337363,
          49.5480558
        ],
        [
          17.7337442,
          49.5480926
        ],
        [
          17.7336159,
          49.5480978
        ],
        [
          17.7336057,
          49.5480657
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280673",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280673"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7335515,
          49.5479016
        ],
        [
          17.7336386,
          49.5479031
        ],
        [
          17.7336427,
          49.5479316
        ],
        [
          17.7335674,
          49.5479347
        ],
        [
          17.7335515,
          49.5479016
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280674",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280674"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7335339,
          49.5478236
        ],
        [
          17.73363,
          49.5478076
        ],
        [
          17.7337941,
          49.5478138
        ],
        [
          17.7337962,
          49.5478597
        ],
        [
          17.7335423,
          49.5478662
        ],
        [
          17.7335339,
          49.5478236
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280675",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280675"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7336203,
          49.5477527
        ],
        [
          17.7336244,
          49.547784
        ],
        [
          17.73363,
          49.5478076
        ],
        [
          17.7335339,
          49.5478236
        ],
        [
          17.7335282,
          49.5477927
        ],
        [
          17.7335199,
          49.5477583
        ],
        [
          17.7336203,
          49.5477527
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280676",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280676"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7335146,
          49.5477103
        ],
        [
          17.7335804,
          49.5477054
        ],
        [
          17.7336365,
          49.5477011
        ],
        [
          17.7336387,
          49.5477308
        ],
        [
          17.7336434,
          49.547754
        ],
        [
          17.7336203,
          49.5477527
        ],
        [
          17.7335199,
          49.5477583
        ],
        [
          17.7335146,
          49.5477103
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280677",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280677"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7337212,
          49.5486024
        ],
        [
          17.7336797,
          49.5486015
        ],
        [
          17.733655,
          49.5485182
        ],
        [
          17.7337235,
          49.54851
        ],
        [
          17.7337459,
          49.5485109
        ],
        [
          17.7337462,
          49.5485365
        ],
        [
          17.7337572,
          49.5485369
        ],
        [
          17.7337571,
          49.548562
        ],
        [
          17.7337157,
          49.5485613
        ],
        [
          17.7337212,
          49.5486024
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280678",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280678"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7336942,
          49.5486985
        ],
        [
          17.7336904,
          49.5486759
        ],
        [
          17.7336797,
          49.5486015
        ],
        [
          17.7337212,
          49.5486024
        ],
        [
          17.7337924,
          49.5486015
        ],
        [
          17.7338929,
          49.5486016
        ],
        [
          17.7338938,
          49.5486329
        ],
        [
          17.7338292,
          49.548633
        ],
        [
          17.733793,
          49.5486331
        ],
        [
          17.7337448,
          49.5486333
        ],
        [
          17.7337517,
          49.5486968
        ],
        [
          17.7336942,
          49.5486985
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280679",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280679"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7336151,
          49.5487032
        ],
        [
          17.7336126,
          49.5486801
        ],
        [
          17.7336547,
          49.5486775
        ],
        [
          17.7336904,
          49.5486759
        ],
        [
          17.7336942,
          49.5486985
        ],
        [
          17.7336504,
          49.5487011
        ],
        [
          17.7336151,
          49.5487032
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280680",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280680"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7333086,
          49.5487461
        ],
        [
          17.7332964,
          49.5485698
        ],
        [
          17.7333348,
          49.5485688
        ],
        [
          17.7333304,
          49.548516
        ],
        [
          17.7332927,
          49.5485169
        ],
        [
          17.7332885,
          49.5484489
        ],
        [
          17.7333246,
          49.548448
        ],
        [
          17.733319,
          49.5483816
        ],
        [
          17.733431,
          49.5483787
        ],
        [
          17.7334483,
          49.5486604
        ],
        [
          17.7334873,
          49.5486594
        ],
        [
          17.7334917,
          49.5487341
        ],
        [
          17.7333086,
          49.5487461
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280681",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280681"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.733825,
          49.5477846
        ],
        [
          17.7338255,
          49.5478123
        ],
        [
          17.7337941,
          49.5478138
        ],
        [
          17.73363,
          49.5478076
        ],
        [
          17.7336244,
          49.547784
        ],
        [
          17.733825,
          49.5477846
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280682",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280682"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7337384,
          49.5477085
        ],
        [
          17.7337382,
          49.5476887
        ],
        [
          17.7337644,
          49.5476886
        ],
        [
          17.7337645,
          49.5477085
        ],
        [
          17.7337384,
          49.5477085
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280683",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280683"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7336434,
          49.547754
        ],
        [
          17.7336387,
          49.5477308
        ],
        [
          17.7337797,
          49.5477272
        ],
        [
          17.733781,
          49.5477539
        ],
        [
          17.7336434,
          49.547754
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280684",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280684"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7334916,
          49.5476266
        ],
        [
          17.7335771,
          49.547624
        ],
        [
          17.7336328,
          49.5476232
        ],
        [
          17.733658,
          49.5476228
        ],
        [
          17.733667,
          49.5476746
        ],
        [
          17.7336276,
          49.5476755
        ],
        [
          17.7336365,
          49.5477011
        ],
        [
          17.7335804,
          49.5477054
        ],
        [
          17.7335146,
          49.5477103
        ],
        [
          17.7334916,
          49.5476266
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280685",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280685"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7337958,
          49.5479769
        ],
        [
          17.7337955,
          49.5480029
        ],
        [
          17.7335269,
          49.5479998
        ],
        [
          17.73352,
          49.5479855
        ],
        [
          17.7335736,
          49.5479748
        ],
        [
          17.7337958,
          49.5479769
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280686",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280686"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7337705,
          49.5480738
        ],
        [
          17.7337682,
          49.5480533
        ],
        [
          17.7337962,
          49.5480516
        ],
        [
          17.7338611,
          49.5480474
        ],
        [
          17.7338603,
          49.5480945
        ],
        [
          17.7338178,
          49.5480943
        ],
        [
          17.7338171,
          49.5480714
        ],
        [
          17.7337705,
          49.5480738
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280687",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280687"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7337369,
          49.5481953
        ],
        [
          17.733707,
          49.548196
        ],
        [
          17.7337111,
          49.5481626
        ],
        [
          17.7338591,
          49.548161
        ],
        [
          17.7338584,
          49.5481968
        ],
        [
          17.7337369,
          49.5481953
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280688",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280688"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7337389,
          49.5482275
        ],
        [
          17.7337369,
          49.5481953
        ],
        [
          17.7338584,
          49.5481968
        ],
        [
          17.7338922,
          49.5481977
        ],
        [
          17.7338929,
          49.5482268
        ],
        [
          17.7337389,
          49.5482275
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280689",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280689"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7337094,
          49.5482629
        ],
        [
          17.7337088,
          49.5482468
        ],
        [
          17.7338318,
          49.5482468
        ],
        [
          17.7338339,
          49.5482632
        ],
        [
          17.7337094,
          49.5482629
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280690",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280690"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7337695,
          49.5484207
        ],
        [
          17.7337687,
          49.5483926
        ],
        [
          17.7338661,
          49.5483936
        ],
        [
          17.7338632,
          49.5484195
        ],
        [
          17.7337695,
          49.5484207
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280691",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280691"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7338629,
          49.5484551
        ],
        [
          17.7338634,
          49.5484735
        ],
        [
          17.7337384,
          49.5484731
        ],
        [
          17.7337385,
          49.5484539
        ],
        [
          17.7338629,
          49.5484551
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280693",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280693"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7336516,
          49.5487097
        ],
        [
          17.7336502,
          49.5487205
        ],
        [
          17.7336341,
          49.5487246
        ],
        [
          17.7336314,
          49.5487326
        ],
        [
          17.7336406,
          49.5487665
        ],
        [
          17.7336261,
          49.548768
        ],
        [
          17.7334963,
          49.5487812
        ],
        [
          17.7334917,
          49.5487341
        ],
        [
          17.7335241,
          49.548732
        ],
        [
          17.7336052,
          49.5487267
        ],
        [
          17.7336003,
          49.5487041
        ],
        [
          17.7336151,
          49.5487032
        ],
        [
          17.7336504,
          49.5487011
        ],
        [
          17.7336516,
          49.5487097
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280694",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280694"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7336406,
          49.5487665
        ],
        [
          17.7336314,
          49.5487326
        ],
        [
          17.7336341,
          49.5487246
        ],
        [
          17.7336502,
          49.5487205
        ],
        [
          17.7337077,
          49.548718
        ],
        [
          17.73372,
          49.5487661
        ],
        [
          17.7336673,
          49.5487664
        ],
        [
          17.7336406,
          49.5487665
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280695",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "18",
    "addr:housenumber": "18",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "source:start_date": "https://iispp.npu.cz/mis_public/searchDocument.htm?search=24034/8-2772",
    "start_date": "1599",
    "wikidata": "Q33422953",
    "id": "way/198280695"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7342319,
          49.5476849
        ],
        [
          17.7342057,
          49.547685
        ],
        [
          17.7338413,
          49.5476876
        ],
        [
          17.733842,
          49.5476208
        ],
        [
          17.7338671,
          49.5476208
        ],
        [
          17.7342093,
          49.5476216
        ],
        [
          17.7342275,
          49.5476217
        ],
        [
          17.7342319,
          49.5476849
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280696",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "17",
    "addr:housenumber": "17",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280696"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7342348,
          49.5477422
        ],
        [
          17.7342028,
          49.5477413
        ],
        [
          17.7338417,
          49.5477472
        ],
        [
          17.7338408,
          49.5477117
        ],
        [
          17.7338413,
          49.5476876
        ],
        [
          17.7342057,
          49.547685
        ],
        [
          17.7342319,
          49.5476849
        ],
        [
          17.7342348,
          49.5477422
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280697",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "16",
    "addr:housenumber": "16",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "source:start_date": "https://iispp.npu.cz/mis_public/searchDocument.htm?search=36622/8-2771",
    "start_date": "1599",
    "id": "way/198280697"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7342325,
          49.5478001
        ],
        [
          17.7342042,
          49.5478014
        ],
        [
          17.7338912,
          49.5478079
        ],
        [
          17.7338521,
          49.5478097
        ],
        [
          17.7338417,
          49.5477472
        ],
        [
          17.7342028,
          49.5477413
        ],
        [
          17.7342348,
          49.5477422
        ],
        [
          17.7342325,
          49.5478001
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280698",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "15",
    "addr:housenumber": "15",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280698"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.733893,
          49.5479033
        ],
        [
          17.7338931,
          49.5478779
        ],
        [
          17.7338912,
          49.5478079
        ],
        [
          17.7342042,
          49.5478014
        ],
        [
          17.7342325,
          49.5478001
        ],
        [
          17.7342407,
          49.5479152
        ],
        [
          17.7342034,
          49.5479143
        ],
        [
          17.733893,
          49.5479033
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280699",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "14",
    "addr:housenumber": "14",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280699"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.733863,
          49.5479771
        ],
        [
          17.7338669,
          49.5479041
        ],
        [
          17.733893,
          49.5479033
        ],
        [
          17.7342034,
          49.5479143
        ],
        [
          17.7342407,
          49.5479152
        ],
        [
          17.7342412,
          49.5479815
        ],
        [
          17.734204,
          49.547981
        ],
        [
          17.733863,
          49.5479771
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280700",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "13",
    "addr:housenumber": "13",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "source:start_date": "https://iispp.npu.cz/mis_public/searchDocument.htm?search=37369/8-2770",
    "start_date": "1599",
    "wikidata": "Q33422919",
    "id": "way/198280700"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7338611,
          49.5480474
        ],
        [
          17.733863,
          49.5479771
        ],
        [
          17.734204,
          49.547981
        ],
        [
          17.7342412,
          49.5479815
        ],
        [
          17.7342393,
          49.5480517
        ],
        [
          17.7342046,
          49.5480513
        ],
        [
          17.7338611,
          49.5480474
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280701",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "12",
    "addr:housenumber": "12",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "source:start_date": "https://iispp.npu.cz/mis_public/searchDocument.htm?search=18125/8-2769",
    "start_date": "1599",
    "wikidata": "Q33422904",
    "id": "way/198280701"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7338598,
          49.5481215
        ],
        [
          17.7338603,
          49.5480945
        ],
        [
          17.7338611,
          49.5480474
        ],
        [
          17.7342046,
          49.5480513
        ],
        [
          17.7342393,
          49.5480517
        ],
        [
          17.7342382,
          49.5481247
        ],
        [
          17.7342052,
          49.5481244
        ],
        [
          17.7338598,
          49.5481215
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280702",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "11",
    "addr:housenumber": "11",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "source:start_date": "https://iispp.npu.cz/mis_public/searchDocument.htm?search=29500/8-2768",
    "start_date": "1599",
    "wikidata": "Q33422886",
    "id": "way/198280702"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7338922,
          49.5481977
        ],
        [
          17.7338584,
          49.5481968
        ],
        [
          17.7338591,
          49.548161
        ],
        [
          17.7338598,
          49.5481215
        ],
        [
          17.7342052,
          49.5481244
        ],
        [
          17.7342382,
          49.5481247
        ],
        [
          17.7342378,
          49.5481958
        ],
        [
          17.7342059,
          49.5481959
        ],
        [
          17.7338922,
          49.5481977
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280703",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "10",
    "addr:housenumber": "10",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280703"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7338938,
          49.5482607
        ],
        [
          17.7338929,
          49.5482268
        ],
        [
          17.7338922,
          49.5481977
        ],
        [
          17.7342059,
          49.5481959
        ],
        [
          17.7342378,
          49.5481958
        ],
        [
          17.7342382,
          49.5482594
        ],
        [
          17.7342064,
          49.5482596
        ],
        [
          17.7338938,
          49.5482607
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280704",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "9",
    "addr:housenumber": "9",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280704"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7338667,
          49.5483264
        ],
        [
          17.7338684,
          49.5482615
        ],
        [
          17.7338938,
          49.5482607
        ],
        [
          17.7342064,
          49.5482596
        ],
        [
          17.7342382,
          49.5482594
        ],
        [
          17.7342373,
          49.5483257
        ],
        [
          17.734207,
          49.5483257
        ],
        [
          17.7338667,
          49.5483264
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280705",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "8",
    "addr:housenumber": "8",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280705"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7338661,
          49.5483936
        ],
        [
          17.7338667,
          49.5483264
        ],
        [
          17.734207,
          49.5483257
        ],
        [
          17.7342373,
          49.5483257
        ],
        [
          17.734238,
          49.5483919
        ],
        [
          17.7342076,
          49.5483918
        ],
        [
          17.7338661,
          49.5483936
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280706",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "7",
    "addr:housenumber": "7",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "source:start_date": "https://iispp.npu.cz/mis_public/searchDocument.htm?search=23069/8-429",
    "start_date": "1599",
    "wikidata": "Q33422981",
    "id": "way/198280706"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7342375,
          49.5484564
        ],
        [
          17.7342082,
          49.5484561
        ],
        [
          17.7338629,
          49.5484551
        ],
        [
          17.7338632,
          49.5484195
        ],
        [
          17.7338661,
          49.5483936
        ],
        [
          17.7342076,
          49.5483918
        ],
        [
          17.734238,
          49.5483919
        ],
        [
          17.7342375,
          49.5484564
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280707",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "6",
    "addr:housenumber": "6",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "source:start_date": "https://iispp.npu.cz/mis_public/searchDocument.htm?search=16333/8-2765",
    "start_date": "1729",
    "wikidata": "Q33423014",
    "id": "way/198280707"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.734241,
          49.5485158
        ],
        [
          17.7342087,
          49.5485154
        ],
        [
          17.7339061,
          49.5485134
        ],
        [
          17.7338766,
          49.5485129
        ],
        [
          17.733862,
          49.548514
        ],
        [
          17.7338634,
          49.5484735
        ],
        [
          17.7338629,
          49.5484551
        ],
        [
          17.7342082,
          49.5484561
        ],
        [
          17.7342375,
          49.5484564
        ],
        [
          17.734241,
          49.5485158
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280708",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "5",
    "addr:housenumber": "5",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "wikidata": "Q31745406",
    "id": "way/198280708"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.73419,
          49.5486024
        ],
        [
          17.7339329,
          49.5486017
        ],
        [
          17.7339095,
          49.5486016
        ],
        [
          17.7339083,
          49.5485551
        ],
        [
          17.7339061,
          49.5485134
        ],
        [
          17.7342087,
          49.5485154
        ],
        [
          17.734241,
          49.5485158
        ],
        [
          17.7342389,
          49.5486026
        ],
        [
          17.73419,
          49.5486024
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280709",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "4",
    "addr:housenumber": "4",
    "building": "house",
    "building:material": "brick",
    "source:start_date": "cuzk:katastr1941",
    "start_date": "1942",
    "id": "way/198280709"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7341921,
          49.5486946
        ],
        [
          17.7340056,
          49.5486962
        ],
        [
          17.7339359,
          49.5486968
        ],
        [
          17.7339329,
          49.5486017
        ],
        [
          17.73419,
          49.5486024
        ],
        [
          17.7341921,
          49.5486946
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280711",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280711"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7320962,
          49.5481541
        ],
        [
          17.7321102,
          49.5481863
        ],
        [
          17.7320444,
          49.5481968
        ],
        [
          17.7320358,
          49.5481622
        ],
        [
          17.7320962,
          49.5481541
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280712",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "133",
    "addr:housenumber": "133",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280712"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7321513,
          49.5483823
        ],
        [
          17.7322217,
          49.5484131
        ],
        [
          17.7322445,
          49.5483911
        ],
        [
          17.7323138,
          49.5484216
        ],
        [
          17.732288,
          49.5484463
        ],
        [
          17.7323555,
          49.5484759
        ],
        [
          17.7322479,
          49.5485774
        ],
        [
          17.7320438,
          49.5484854
        ],
        [
          17.7321513,
          49.5483823
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280714",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "132",
    "addr:housenumber": "132",
    "building": "house",
    "building:material": "brick",
    "end_date": "1869",
    "source": "mza:d9",
    "source:end_date": "http://digi.archives.cz/da/permalink?xid=d203cfa7-e61e-404e-85f9-72dd3eaeb61c242974&scan=133#scan133",
    "start_date": "1830",
    "id": "way/198280714"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7322706,
          49.5482189
        ],
        [
          17.7322971,
          49.5482719
        ],
        [
          17.7322357,
          49.5482848
        ],
        [
          17.7322485,
          49.5483105
        ],
        [
          17.7321951,
          49.5483217
        ],
        [
          17.7321832,
          49.5482981
        ],
        [
          17.7321343,
          49.5483083
        ],
        [
          17.7321472,
          49.5483343
        ],
        [
          17.7320795,
          49.5483486
        ],
        [
          17.7320391,
          49.5482676
        ],
        [
          17.7322706,
          49.5482189
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280715",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "131",
    "addr:housenumber": "131",
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280715"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7320358,
          49.5481622
        ],
        [
          17.7320444,
          49.5481968
        ],
        [
          17.7320523,
          49.5482284
        ],
        [
          17.7318619,
          49.5482484
        ],
        [
          17.7318454,
          49.5481822
        ],
        [
          17.7318974,
          49.5481767
        ],
        [
          17.7320358,
          49.5481622
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280716",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "130",
    "addr:housenumber": "130",
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280716"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7321648,
          49.5480811
        ],
        [
          17.7321826,
          49.5481437
        ],
        [
          17.7320962,
          49.5481541
        ],
        [
          17.7320358,
          49.5481622
        ],
        [
          17.7318974,
          49.5481767
        ],
        [
          17.7318799,
          49.5481152
        ],
        [
          17.7321648,
          49.5480811
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280718",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280718"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7323913,
          49.5477591
        ],
        [
          17.7324448,
          49.5477616
        ],
        [
          17.7324386,
          49.5478168
        ],
        [
          17.7323121,
          49.5478101
        ],
        [
          17.7323157,
          49.5477782
        ],
        [
          17.7323887,
          49.5477818
        ],
        [
          17.7323913,
          49.5477591
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280719",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "129",
    "addr:housenumber": "129",
    "addr:street": "Drahotuscher Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "source:start_date": "https://iispp.npu.cz/mis_public/searchDocument.htm?search=14384/8-2805",
    "start_date": "1825",
    "wikidata": "Q33425993",
    "id": "way/198280719"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7319527,
          49.5478476
        ],
        [
          17.7321234,
          49.5478939
        ],
        [
          17.7319896,
          49.5480561
        ],
        [
          17.7318152,
          49.5480178
        ],
        [
          17.7319527,
          49.5478476
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280720",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "128",
    "addr:housenumber": "128",
    "addr:street": "Drahotuscher Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1905",
    "source": "mza:d9",
    "source:end_date": "https://aleph.nkp.cz/F/?func=direct&doc_number=001041096&local_base=SKC",
    "start_date": "1830",
    "id": "way/198280720"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7323789,
          49.5476432
        ],
        [
          17.7323182,
          49.5477009
        ],
        [
          17.7322681,
          49.5477485
        ],
        [
          17.7322291,
          49.5477856
        ],
        [
          17.7320966,
          49.5477195
        ],
        [
          17.732251,
          49.547585
        ],
        [
          17.7323789,
          49.5476432
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280723",
  "properties": {
    "amenity": "place_of_worship",
    "building": "church",
    "building:material": "brick",
    "denomination": "roman_catholic",
    "name": "Stětí sv. Jana Křtitele",
    "religion": "christian",
    "source": "mza:d9",
    "start_date": "1764",
    "wikidata": "Q29014961",
    "id": "way/198280723"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7346235,
          49.5476505
        ],
        [
          17.7347095,
          49.5476526
        ],
        [
          17.7347098,
          49.5476374
        ],
        [
          17.7347159,
          49.5476239
        ],
        [
          17.7347314,
          49.5476086
        ],
        [
          17.734754,
          49.5475974
        ],
        [
          17.7347905,
          49.5475912
        ],
        [
          17.7348159,
          49.5475932
        ],
        [
          17.7348515,
          49.5476065
        ],
        [
          17.7348706,
          49.5476247
        ],
        [
          17.7348747,
          49.5476589
        ],
        [
          17.7349524,
          49.5476611
        ],
        [
          17.7349421,
          49.5477478
        ],
        [
          17.734917,
          49.547747
        ],
        [
          17.7348981,
          49.5479565
        ],
        [
          17.7348763,
          49.5479581
        ],
        [
          17.7348557,
          49.5479679
        ],
        [
          17.7348469,
          49.5479805
        ],
        [
          17.7348418,
          49.5480282
        ],
        [
          17.7346748,
          49.548024
        ],
        [
          17.7346777,
          49.547977
        ],
        [
          17.734668,
          49.547962
        ],
        [
          17.7346478,
          49.5479501
        ],
        [
          17.7346278,
          49.5479456
        ],
        [
          17.7346449,
          49.5477386
        ],
        [
          17.7346159,
          49.5477377
        ],
        [
          17.7346235,
          49.5476505
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280728",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280728"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7345495,
          49.5509399
        ],
        [
          17.7345707,
          49.5508928
        ],
        [
          17.7346869,
          49.5509106
        ],
        [
          17.7346684,
          49.5509585
        ],
        [
          17.7345495,
          49.5509399
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280729",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280729"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7345707,
          49.5508928
        ],
        [
          17.7345495,
          49.5509399
        ],
        [
          17.7345415,
          49.5509854
        ],
        [
          17.7344129,
          49.5509722
        ],
        [
          17.7344383,
          49.5508821
        ],
        [
          17.7345707,
          49.5508928
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280733",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280733"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7345591,
          49.5505184
        ],
        [
          17.734714,
          49.550501
        ],
        [
          17.7347253,
          49.5505457
        ],
        [
          17.7346222,
          49.5505566
        ],
        [
          17.7346295,
          49.5505857
        ],
        [
          17.734574,
          49.5505927
        ],
        [
          17.7345591,
          49.5505184
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280734",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "117",
    "addr:housenumber": "117",
    "building": "house",
    "building:material": "brick",
    "end_date": "1956",
    "source": "mza:d9",
    "source:end_date": "https://digilib.phil.muni.cz/bitstream/handle/11222.digilib/140137/2_ArchaeologiaHistorica_20-1995-1_21.pdf?sequence=1",
    "start_date": "1830",
    "id": "way/198280734"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.734542,
          49.5504336
        ],
        [
          17.7345534,
          49.5504902
        ],
        [
          17.7345591,
          49.5505184
        ],
        [
          17.734574,
          49.5505927
        ],
        [
          17.7345917,
          49.5506803
        ],
        [
          17.7347043,
          49.5506951
        ],
        [
          17.7346989,
          49.5507569
        ],
        [
          17.7347942,
          49.5507613
        ],
        [
          17.7349256,
          49.5507543
        ],
        [
          17.7350613,
          49.5507498
        ],
        [
          17.7350831,
          49.5509084
        ],
        [
          17.7351013,
          49.5509592
        ],
        [
          17.7350075,
          49.5510506
        ],
        [
          17.734937,
          49.5510372
        ],
        [
          17.7349844,
          49.5509881
        ],
        [
          17.7348518,
          49.5509831
        ],
        [
          17.7348416,
          49.5510191
        ],
        [
          17.7347158,
          49.5510062
        ],
        [
          17.7347361,
          49.5509388
        ],
        [
          17.7347526,
          49.5509144
        ],
        [
          17.7346869,
          49.5509106
        ],
        [
          17.7345707,
          49.5508928
        ],
        [
          17.7344383,
          49.5508821
        ],
        [
          17.734423,
          49.5508826
        ],
        [
          17.7344111,
          49.5508959
        ],
        [
          17.7343907,
          49.5509064
        ],
        [
          17.734363,
          49.5509112
        ],
        [
          17.7343277,
          49.5509059
        ],
        [
          17.7343,
          49.5508872
        ],
        [
          17.7342938,
          49.5508744
        ],
        [
          17.7342947,
          49.550858
        ],
        [
          17.7343146,
          49.5508358
        ],
        [
          17.7343456,
          49.5508254
        ],
        [
          17.7343597,
          49.550649
        ],
        [
          17.7344131,
          49.5505199
        ],
        [
          17.7343837,
          49.550517
        ],
        [
          17.7343665,
          49.5505084
        ],
        [
          17.7343574,
          49.550498
        ],
        [
          17.7343547,
          49.5504842
        ],
        [
          17.7343613,
          49.5504705
        ],
        [
          17.7343714,
          49.5504624
        ],
        [
          17.7343848,
          49.5504567
        ],
        [
          17.7344019,
          49.5504539
        ],
        [
          17.7344232,
          49.5504558
        ],
        [
          17.734428,
          49.5504411
        ],
        [
          17.734542,
          49.5504336
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280736",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280736"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7344019,
          49.5504539
        ],
        [
          17.7343997,
          49.5503905
        ],
        [
          17.7345306,
          49.5503849
        ],
        [
          17.734542,
          49.5504336
        ],
        [
          17.734428,
          49.5504411
        ],
        [
          17.7344232,
          49.5504558
        ],
        [
          17.7344019,
          49.5504539
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280737",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280737"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7344119,
          49.5502305
        ],
        [
          17.7344931,
          49.5502254
        ],
        [
          17.7345022,
          49.5502641
        ],
        [
          17.7345074,
          49.5502865
        ],
        [
          17.7344006,
          49.5502899
        ],
        [
          17.7344119,
          49.5502305
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280738",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280738"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7344584,
          49.5500778
        ],
        [
          17.734477,
          49.5501568
        ],
        [
          17.7344365,
          49.5501597
        ],
        [
          17.7344282,
          49.5500746
        ],
        [
          17.7344584,
          49.5500778
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280739",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280739"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7348968,
          49.5500079
        ],
        [
          17.7348906,
          49.5499765
        ],
        [
          17.7350333,
          49.5499672
        ],
        [
          17.7350418,
          49.5499976
        ],
        [
          17.7348968,
          49.5500079
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280740",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280740"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7349353,
          49.5499264
        ],
        [
          17.7349983,
          49.5499256
        ],
        [
          17.7349991,
          49.5499486
        ],
        [
          17.734936,
          49.5499495
        ],
        [
          17.7349353,
          49.5499264
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280741",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1940",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1941",
    "start_date": "1830",
    "id": "way/198280741"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7345967,
          49.5499536
        ],
        [
          17.7346063,
          49.549985
        ],
        [
          17.7345088,
          49.5499976
        ],
        [
          17.7344993,
          49.5499666
        ],
        [
          17.7345644,
          49.5499579
        ],
        [
          17.7345967,
          49.5499536
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280742",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1940",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1941",
    "start_date": "1830",
    "id": "way/198280742"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7347289,
          49.549936
        ],
        [
          17.7347379,
          49.5499677
        ],
        [
          17.7347412,
          49.5499793
        ],
        [
          17.7346087,
          49.5499951
        ],
        [
          17.7346063,
          49.549985
        ],
        [
          17.7345967,
          49.5499536
        ],
        [
          17.7346529,
          49.5499461
        ],
        [
          17.7346727,
          49.5499435
        ],
        [
          17.7347289,
          49.549936
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280743",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1940",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1941",
    "start_date": "1830",
    "id": "way/198280743"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7346623,
          49.5498823
        ],
        [
          17.7346727,
          49.5499435
        ],
        [
          17.7346529,
          49.5499461
        ],
        [
          17.7345967,
          49.5499536
        ],
        [
          17.7345644,
          49.5499579
        ],
        [
          17.7345598,
          49.5499401
        ],
        [
          17.7346178,
          49.5499307
        ],
        [
          17.7346084,
          49.5498899
        ],
        [
          17.7346623,
          49.5498823
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280744",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280744"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7350432,
          49.5501957
        ],
        [
          17.7350868,
          49.5501959
        ],
        [
          17.7351736,
          49.5501967
        ],
        [
          17.7351726,
          49.5501327
        ],
        [
          17.7353963,
          49.5501505
        ],
        [
          17.7354962,
          49.5501609
        ],
        [
          17.7354298,
          49.5502392
        ],
        [
          17.7353334,
          49.5502479
        ],
        [
          17.7353281,
          49.5502917
        ],
        [
          17.735172,
          49.5502877
        ],
        [
          17.7351758,
          49.5503386
        ],
        [
          17.7352568,
          49.5503384
        ],
        [
          17.7352595,
          49.5503967
        ],
        [
          17.735084,
          49.5504009
        ],
        [
          17.7350446,
          49.5504019
        ],
        [
          17.735044,
          49.5503201
        ],
        [
          17.7350844,
          49.5503197
        ],
        [
          17.7351362,
          49.5503193
        ],
        [
          17.7351335,
          49.5502253
        ],
        [
          17.7350852,
          49.5502253
        ],
        [
          17.7350434,
          49.5502252
        ],
        [
          17.7350432,
          49.5501957
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280747",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280747"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7341025,
          49.5508978
        ],
        [
          17.7342186,
          49.550887
        ],
        [
          17.7342273,
          49.5509201
        ],
        [
          17.7340863,
          49.5509347
        ],
        [
          17.7341025,
          49.5508978
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280748",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280748"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7339179,
          49.5508507
        ],
        [
          17.7339732,
          49.5508478
        ],
        [
          17.7339925,
          49.5509514
        ],
        [
          17.7339524,
          49.5509517
        ],
        [
          17.7339179,
          49.5508507
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280749",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "138",
    "addr:housenumber": "138",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280749"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7341545,
          49.5507796
        ],
        [
          17.7341025,
          49.5508978
        ],
        [
          17.7340863,
          49.5509347
        ],
        [
          17.7340418,
          49.5509343
        ],
        [
          17.7340577,
          49.5508443
        ],
        [
          17.7339732,
          49.5508478
        ],
        [
          17.7339179,
          49.5508507
        ],
        [
          17.7339041,
          49.5507255
        ],
        [
          17.7340164,
          49.5507166
        ],
        [
          17.7340239,
          49.5507839
        ],
        [
          17.7341545,
          49.5507796
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280750",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280750"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7317133,
          49.5476453
        ],
        [
          17.7316616,
          49.547692
        ],
        [
          17.7315596,
          49.5476579
        ],
        [
          17.7315992,
          49.5476091
        ],
        [
          17.7317133,
          49.5476453
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280751",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280751"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7316349,
          49.5477161
        ],
        [
          17.7316071,
          49.5477413
        ],
        [
          17.7315311,
          49.5477095
        ],
        [
          17.731557,
          49.5476835
        ],
        [
          17.7316349,
          49.5477161
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280752",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280752"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7317697,
          49.5477766
        ],
        [
          17.7316349,
          49.5477161
        ],
        [
          17.7316616,
          49.547692
        ],
        [
          17.7317133,
          49.5476453
        ],
        [
          17.7318464,
          49.5477072
        ],
        [
          17.7317697,
          49.5477766
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280753",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "212",
    "addr:housenumber": "212",
    "addr:street": "Drahotuscher Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280753"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7316349,
          49.5477161
        ],
        [
          17.7317697,
          49.5477766
        ],
        [
          17.7316897,
          49.547849
        ],
        [
          17.7315566,
          49.547787
        ],
        [
          17.7316071,
          49.5477413
        ],
        [
          17.7316349,
          49.5477161
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280773",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "34",
    "addr:housenumber": "34",
    "addr:street": "Drahotuscher Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280773"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7335637,
          49.5466466
        ],
        [
          17.7336081,
          49.546708
        ],
        [
          17.7335445,
          49.5467249
        ],
        [
          17.7334577,
          49.5467488
        ],
        [
          17.7334127,
          49.5466883
        ],
        [
          17.7335637,
          49.5466466
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280774",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "33",
    "addr:housenumber": "33",
    "addr:street": "Drahotuscher Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280774"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7342285,
          49.5465804
        ],
        [
          17.7342147,
          49.5465839
        ],
        [
          17.7339577,
          49.5465856
        ],
        [
          17.7339627,
          49.5465382
        ],
        [
          17.7339507,
          49.546502
        ],
        [
          17.7342105,
          49.5465031
        ],
        [
          17.7342302,
          49.5465025
        ],
        [
          17.7342285,
          49.5465804
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280775",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "32",
    "addr:housenumber": "32",
    "addr:street": "Drahotuscher Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280775"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7342317,
          49.5466596
        ],
        [
          17.734215,
          49.5466604
        ],
        [
          17.7339501,
          49.5466566
        ],
        [
          17.7339523,
          49.5466365
        ],
        [
          17.7339577,
          49.5465856
        ],
        [
          17.7342147,
          49.5465839
        ],
        [
          17.7342285,
          49.5465804
        ],
        [
          17.7342317,
          49.5466596
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280776",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "31",
    "addr:housenumber": "31",
    "addr:street": "Drahotuscher Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280776"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7339407,
          49.5467776
        ],
        [
          17.733945,
          49.546705
        ],
        [
          17.733947,
          49.5466862
        ],
        [
          17.7339501,
          49.5466566
        ],
        [
          17.734215,
          49.5466604
        ],
        [
          17.7342317,
          49.5466596
        ],
        [
          17.734224,
          49.5467805
        ],
        [
          17.7342131,
          49.5467805
        ],
        [
          17.7339407,
          49.5467776
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280777",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "30",
    "addr:housenumber": "30",
    "addr:street": "Drahotuscher Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280777"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7338858,
          49.5468368
        ],
        [
          17.7338865,
          49.5468125
        ],
        [
          17.7338889,
          49.5467785
        ],
        [
          17.7339407,
          49.5467776
        ],
        [
          17.7342131,
          49.5467805
        ],
        [
          17.734224,
          49.5467805
        ],
        [
          17.7342239,
          49.5468454
        ],
        [
          17.7342095,
          49.546849
        ],
        [
          17.7338858,
          49.5468368
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280778",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "29",
    "addr:housenumber": "29",
    "addr:street": "Drahotuscher Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280778"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7338871,
          49.5469006
        ],
        [
          17.7338858,
          49.5468368
        ],
        [
          17.7342095,
          49.546849
        ],
        [
          17.7342239,
          49.5468454
        ],
        [
          17.7342232,
          49.5469106
        ],
        [
          17.7342115,
          49.5469094
        ],
        [
          17.7338871,
          49.5469006
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280779",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "28",
    "addr:housenumber": "28",
    "addr:street": "Drahotuscher Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280779"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7342232,
          49.5469682
        ],
        [
          17.7342102,
          49.546968
        ],
        [
          17.7338838,
          49.5469667
        ],
        [
          17.7338871,
          49.5469006
        ],
        [
          17.7342115,
          49.5469094
        ],
        [
          17.7342232,
          49.5469106
        ],
        [
          17.7342232,
          49.5469682
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280780",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "27",
    "addr:housenumber": "27",
    "addr:street": "Drahotuscher Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280780"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7342211,
          49.5470306
        ],
        [
          17.7342103,
          49.5470317
        ],
        [
          17.7339265,
          49.5470266
        ],
        [
          17.7338887,
          49.5470266
        ],
        [
          17.7338862,
          49.5469959
        ],
        [
          17.7338838,
          49.5469667
        ],
        [
          17.7342102,
          49.546968
        ],
        [
          17.7342232,
          49.5469682
        ],
        [
          17.7342211,
          49.5470306
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280781",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "26",
    "addr:housenumber": "26",
    "addr:street": "Drahotuscher Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280781"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7339223,
          49.5470852
        ],
        [
          17.7339265,
          49.5470266
        ],
        [
          17.7342103,
          49.5470317
        ],
        [
          17.7342211,
          49.5470306
        ],
        [
          17.7342232,
          49.5470939
        ],
        [
          17.7342105,
          49.5470926
        ],
        [
          17.7339223,
          49.5470852
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280782",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "25",
    "addr:housenumber": "25",
    "addr:street": "Drahotuscher Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280782"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7342244,
          49.5471601
        ],
        [
          17.7342133,
          49.5471594
        ],
        [
          17.7339133,
          49.5471463
        ],
        [
          17.7338785,
          49.5471454
        ],
        [
          17.7338807,
          49.5470845
        ],
        [
          17.7339223,
          49.5470852
        ],
        [
          17.7342105,
          49.5470926
        ],
        [
          17.7342232,
          49.5470939
        ],
        [
          17.7342244,
          49.5471601
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280783",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "24",
    "addr:housenumber": "24",
    "addr:street": "Drahotuscher Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280783"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7342264,
          49.5472218
        ],
        [
          17.7342134,
          49.547221
        ],
        [
          17.733914,
          49.5472107
        ],
        [
          17.7339133,
          49.5471463
        ],
        [
          17.7342133,
          49.5471594
        ],
        [
          17.7342244,
          49.5471601
        ],
        [
          17.7342264,
          49.5472218
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280784",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "23",
    "addr:housenumber": "23",
    "addr:street": "Drahotuscher Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280784"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7342277,
          49.5472853
        ],
        [
          17.734215,
          49.5472872
        ],
        [
          17.7339149,
          49.5472728
        ],
        [
          17.733914,
          49.5472107
        ],
        [
          17.7342134,
          49.547221
        ],
        [
          17.7342264,
          49.5472218
        ],
        [
          17.7342277,
          49.5472853
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280785",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "22",
    "addr:housenumber": "22",
    "addr:street": "Drahotuscher Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280785"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.734223,
          49.5473457
        ],
        [
          17.7342133,
          49.5473457
        ],
        [
          17.7339122,
          49.5473434
        ],
        [
          17.7339149,
          49.5472728
        ],
        [
          17.734215,
          49.5472872
        ],
        [
          17.7342277,
          49.5472853
        ],
        [
          17.734223,
          49.5473457
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280786",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "21",
    "addr:housenumber": "21",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280786"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7342371,
          49.5474477
        ],
        [
          17.7342089,
          49.5474475
        ],
        [
          17.733849,
          49.5474455
        ],
        [
          17.73381,
          49.5474453
        ],
        [
          17.7338151,
          49.5473427
        ],
        [
          17.7339122,
          49.5473434
        ],
        [
          17.7342133,
          49.5473457
        ],
        [
          17.734223,
          49.5473457
        ],
        [
          17.7342371,
          49.5474477
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280787",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "20",
    "addr:housenumber": "20",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "source:start_date": "https://iispp.npu.cz/mis_public/searchDocument.htm?search=41739/8-428",
    "start_date": "1583",
    "wikidata": "Q31745591",
    "id": "way/198280787"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7342382,
          49.5475755
        ],
        [
          17.7342074,
          49.5475757
        ],
        [
          17.733861,
          49.5475797
        ],
        [
          17.7337071,
          49.5475788
        ],
        [
          17.7337052,
          49.5475289
        ],
        [
          17.7338506,
          49.5475276
        ],
        [
          17.733849,
          49.5474455
        ],
        [
          17.7342089,
          49.5474475
        ],
        [
          17.7342371,
          49.5474477
        ],
        [
          17.7342373,
          49.5474659
        ],
        [
          17.7342382,
          49.5475755
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280788",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "19",
    "addr:housenumber": "19",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "source:start_date": "https://iispp.npu.cz/mis_public/searchDocument.htm?search=36839/8-427",
    "start_date": "1599",
    "wikidata": "Q33422965",
    "id": "way/198280788"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7342275,
          49.5476217
        ],
        [
          17.7342093,
          49.5476216
        ],
        [
          17.7338671,
          49.5476208
        ],
        [
          17.733861,
          49.5475797
        ],
        [
          17.7342074,
          49.5475757
        ],
        [
          17.7342382,
          49.5475755
        ],
        [
          17.7342275,
          49.5476217
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280789",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280789"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7337923,
          49.5469011
        ],
        [
          17.7337923,
          49.5468823
        ],
        [
          17.7338427,
          49.5468823
        ],
        [
          17.7338426,
          49.5469017
        ],
        [
          17.7337923,
          49.5469011
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280790",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280790"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.733738,
          49.5469198
        ],
        [
          17.733738,
          49.5468996
        ],
        [
          17.7337923,
          49.5469011
        ],
        [
          17.7338426,
          49.5469017
        ],
        [
          17.7338749,
          49.5469024
        ],
        [
          17.7338749,
          49.5469232
        ],
        [
          17.733738,
          49.5469198
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280791",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280791"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7336327,
          49.5465878
        ],
        [
          17.7337575,
          49.5465377
        ],
        [
          17.7338603,
          49.5465123
        ],
        [
          17.7338621,
          49.5465871
        ],
        [
          17.7337207,
          49.5465891
        ],
        [
          17.7336327,
          49.5465878
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280792",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280792"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7337086,
          49.5467627
        ],
        [
          17.7337045,
          49.5468273
        ],
        [
          17.7336322,
          49.5468231
        ],
        [
          17.733632,
          49.5467586
        ],
        [
          17.7337086,
          49.5467627
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280793",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280793"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7337092,
          49.5468999
        ],
        [
          17.7336375,
          49.5468987
        ],
        [
          17.7336322,
          49.5468231
        ],
        [
          17.7337045,
          49.5468273
        ],
        [
          17.7337419,
          49.5468277
        ],
        [
          17.7337437,
          49.5468522
        ],
        [
          17.7337122,
          49.5468515
        ],
        [
          17.7337092,
          49.5468999
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280794",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280794"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7336917,
          49.5470823
        ],
        [
          17.7336936,
          49.547061
        ],
        [
          17.7336967,
          49.5470337
        ],
        [
          17.7338104,
          49.5470359
        ],
        [
          17.7338047,
          49.547083
        ],
        [
          17.7337037,
          49.5470811
        ],
        [
          17.7336917,
          49.5470823
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280795",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280795"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7336318,
          49.547032
        ],
        [
          17.7336302,
          49.5470614
        ],
        [
          17.7336293,
          49.5470806
        ],
        [
          17.7336254,
          49.5471116
        ],
        [
          17.7336014,
          49.5471117
        ],
        [
          17.733519,
          49.5471099
        ],
        [
          17.7335017,
          49.5471053
        ],
        [
          17.7334873,
          49.5470969
        ],
        [
          17.73348,
          49.5470857
        ],
        [
          17.7334806,
          49.547073
        ],
        [
          17.7334925,
          49.5470597
        ],
        [
          17.7335103,
          49.5470528
        ],
        [
          17.7335254,
          49.5470515
        ],
        [
          17.7335608,
          49.5470505
        ],
        [
          17.7335664,
          49.5470316
        ],
        [
          17.7335864,
          49.54703
        ],
        [
          17.7336318,
          49.547032
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280796",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280796"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7336032,
          49.54714
        ],
        [
          17.7336025,
          49.5471289
        ],
        [
          17.7336014,
          49.5471117
        ],
        [
          17.7336254,
          49.5471116
        ],
        [
          17.7336293,
          49.5470806
        ],
        [
          17.7336917,
          49.5470823
        ],
        [
          17.7337037,
          49.5470811
        ],
        [
          17.7336874,
          49.5471437
        ],
        [
          17.7336032,
          49.54714
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280797",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280797"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.73358,
          49.5472681
        ],
        [
          17.7335862,
          49.5472391
        ],
        [
          17.7338521,
          49.5472452
        ],
        [
          17.7338438,
          49.5472745
        ],
        [
          17.7337687,
          49.547273
        ],
        [
          17.7336953,
          49.5472715
        ],
        [
          17.73358,
          49.5472681
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280798",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280798"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.733696,
          49.5474446
        ],
        [
          17.733697,
          49.5474066
        ],
        [
          17.7337466,
          49.5474073
        ],
        [
          17.7337455,
          49.5474449
        ],
        [
          17.733696,
          49.5474446
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280799",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280799"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7335803,
          49.5474434
        ],
        [
          17.7335351,
          49.5474388
        ],
        [
          17.7335597,
          49.5473361
        ],
        [
          17.7336371,
          49.5473408
        ],
        [
          17.7336078,
          49.5474441
        ],
        [
          17.7335803,
          49.5474434
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280801",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280801"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7338621,
          49.5465871
        ],
        [
          17.7338603,
          49.5465123
        ],
        [
          17.733905,
          49.5465012
        ],
        [
          17.7339507,
          49.546502
        ],
        [
          17.7339627,
          49.5465382
        ],
        [
          17.7339299,
          49.5465356
        ],
        [
          17.7339311,
          49.546585
        ],
        [
          17.7338819,
          49.5465872
        ],
        [
          17.7338621,
          49.5465871
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280802",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280802"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7337161,
          49.5466653
        ],
        [
          17.7336442,
          49.5466657
        ],
        [
          17.7336327,
          49.5465878
        ],
        [
          17.7337207,
          49.5465891
        ],
        [
          17.7337161,
          49.5466653
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280803",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280803"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7337143,
          49.5466851
        ],
        [
          17.7337161,
          49.5466653
        ],
        [
          17.7339501,
          49.5466566
        ],
        [
          17.733947,
          49.5466862
        ],
        [
          17.7337143,
          49.5466851
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280804",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280804"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7336311,
          49.5467437
        ],
        [
          17.7336287,
          49.5466979
        ],
        [
          17.7337125,
          49.5466995
        ],
        [
          17.7337086,
          49.5467627
        ],
        [
          17.733632,
          49.5467586
        ],
        [
          17.7336311,
          49.5467437
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280805",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280805"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7336311,
          49.5467437
        ],
        [
          17.733632,
          49.5467586
        ],
        [
          17.7336322,
          49.5468231
        ],
        [
          17.7336375,
          49.5468987
        ],
        [
          17.7336356,
          49.5469586
        ],
        [
          17.7336318,
          49.547032
        ],
        [
          17.7335864,
          49.54703
        ],
        [
          17.7335996,
          49.5467442
        ],
        [
          17.7336311,
          49.5467437
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280806",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280806"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7337092,
          49.5468999
        ],
        [
          17.7337056,
          49.5469607
        ],
        [
          17.7336356,
          49.5469586
        ],
        [
          17.7336375,
          49.5468987
        ],
        [
          17.7337092,
          49.5468999
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280807",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280807"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.733785,
          49.5469695
        ],
        [
          17.7338838,
          49.5469667
        ],
        [
          17.7338862,
          49.5469959
        ],
        [
          17.7337837,
          49.5469931
        ],
        [
          17.733785,
          49.5469695
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280808",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280808"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7336936,
          49.547061
        ],
        [
          17.7336917,
          49.5470823
        ],
        [
          17.7336293,
          49.5470806
        ],
        [
          17.7336302,
          49.5470614
        ],
        [
          17.7336936,
          49.547061
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280809",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280809"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7336032,
          49.54714
        ],
        [
          17.7336874,
          49.5471437
        ],
        [
          17.7336803,
          49.5472023
        ],
        [
          17.7335984,
          49.5471955
        ],
        [
          17.7336008,
          49.5471673
        ],
        [
          17.7336032,
          49.54714
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280810",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280810"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7337675,
          49.5472965
        ],
        [
          17.7337687,
          49.547273
        ],
        [
          17.7338438,
          49.5472745
        ],
        [
          17.7338427,
          49.547298
        ],
        [
          17.7337675,
          49.5472965
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280811",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280811"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7335597,
          49.5473361
        ],
        [
          17.73358,
          49.5472681
        ],
        [
          17.7336953,
          49.5472715
        ],
        [
          17.7336942,
          49.547295
        ],
        [
          17.7336849,
          49.5473431
        ],
        [
          17.7336371,
          49.5473408
        ],
        [
          17.7335597,
          49.5473361
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280812",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280812"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7336589,
          49.5475882
        ],
        [
          17.7337077,
          49.5475892
        ],
        [
          17.7337062,
          49.5476225
        ],
        [
          17.733658,
          49.5476228
        ],
        [
          17.7336589,
          49.5475882
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280813",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280813"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7335547,
          49.5475689
        ],
        [
          17.7334989,
          49.5475681
        ],
        [
          17.7335351,
          49.5474388
        ],
        [
          17.7335803,
          49.5474434
        ],
        [
          17.7335547,
          49.5475689
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280814",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198280814"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7335547,
          49.5475689
        ],
        [
          17.7335771,
          49.547624
        ],
        [
          17.7334916,
          49.5476266
        ],
        [
          17.7334891,
          49.5475946
        ],
        [
          17.7334989,
          49.5475681
        ],
        [
          17.7335547,
          49.5475689
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280815",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280815"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7330981,
          49.5472199
        ],
        [
          17.7331245,
          49.5471726
        ],
        [
          17.733239,
          49.5471937
        ],
        [
          17.7332194,
          49.5472415
        ],
        [
          17.7330981,
          49.5472199
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280816",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280816"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7328702,
          49.5472527
        ],
        [
          17.7328911,
          49.547228
        ],
        [
          17.7329116,
          49.5472353
        ],
        [
          17.7329222,
          49.5472229
        ],
        [
          17.7329307,
          49.5472127
        ],
        [
          17.7329645,
          49.5471728
        ],
        [
          17.7330017,
          49.547186
        ],
        [
          17.7329278,
          49.5472732
        ],
        [
          17.7328702,
          49.5472527
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280817",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280817"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7329219,
          49.5474928
        ],
        [
          17.7328429,
          49.5474775
        ],
        [
          17.7327685,
          49.5474482
        ],
        [
          17.7327109,
          49.5474314
        ],
        [
          17.7327377,
          49.5473926
        ],
        [
          17.7328913,
          49.5474372
        ],
        [
          17.7329488,
          49.5474539
        ],
        [
          17.7329219,
          49.5474928
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280818",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280818"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7328215,
          49.5475934
        ],
        [
          17.7328558,
          49.5475289
        ],
        [
          17.7329022,
          49.5475394
        ],
        [
          17.7328684,
          49.5476027
        ],
        [
          17.7328215,
          49.5475934
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280987",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280987"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7307839,
          49.5483977
        ],
        [
          17.7308148,
          49.5484948
        ],
        [
          17.7307384,
          49.5485055
        ],
        [
          17.7307262,
          49.5484671
        ],
        [
          17.7307074,
          49.5484079
        ],
        [
          17.7307839,
          49.5483977
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280988",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1905",
    "source": "mza:d9",
    "source:end_date": "end_date=1874 source:end_date=cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280988"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7310781,
          49.5484494
        ],
        [
          17.7310936,
          49.5484791
        ],
        [
          17.7310052,
          49.5484951
        ],
        [
          17.7309933,
          49.5484635
        ],
        [
          17.7310781,
          49.5484494
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280989",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280989"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7298274,
          49.5479618
        ],
        [
          17.7298515,
          49.5480311
        ],
        [
          17.7298852,
          49.5480255
        ],
        [
          17.7299089,
          49.5480973
        ],
        [
          17.729795,
          49.5481139
        ],
        [
          17.7297801,
          49.5480701
        ],
        [
          17.7297465,
          49.5479736
        ],
        [
          17.7297776,
          49.5479691
        ],
        [
          17.7298274,
          49.5479618
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280990",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280990"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7303653,
          49.5479247
        ],
        [
          17.7303394,
          49.5478512
        ],
        [
          17.7303903,
          49.5478436
        ],
        [
          17.7303854,
          49.5478298
        ],
        [
          17.7305026,
          49.54781
        ],
        [
          17.7305338,
          49.5479058
        ],
        [
          17.7303653,
          49.5479247
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280991",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280991"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7301348,
          49.5478841
        ],
        [
          17.7302464,
          49.5478678
        ],
        [
          17.7302661,
          49.5479237
        ],
        [
          17.7301543,
          49.5479396
        ],
        [
          17.7301348,
          49.5478841
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280992",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280992"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7298617,
          49.5479517
        ],
        [
          17.7298479,
          49.5479025
        ],
        [
          17.729915,
          49.5478946
        ],
        [
          17.7299607,
          49.5478892
        ],
        [
          17.7301284,
          49.5478674
        ],
        [
          17.7301348,
          49.5478841
        ],
        [
          17.7301543,
          49.5479396
        ],
        [
          17.7300122,
          49.5479622
        ],
        [
          17.729974,
          49.5479671
        ],
        [
          17.7299663,
          49.5479394
        ],
        [
          17.7298617,
          49.5479517
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280993",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280993"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7297069,
          49.5478505
        ],
        [
          17.7297261,
          49.5479095
        ],
        [
          17.7296267,
          49.5479224
        ],
        [
          17.7296079,
          49.5478637
        ],
        [
          17.7297069,
          49.5478505
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280994",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280994"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7324002,
          49.5509032
        ],
        [
          17.7324064,
          49.5510137
        ],
        [
          17.7315225,
          49.5510348
        ],
        [
          17.7315163,
          49.5509244
        ],
        [
          17.7324002,
          49.5509032
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280995",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1941",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1941",
    "start_date": "1830",
    "id": "way/198280995"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7328929,
          49.5489164
        ],
        [
          17.7328978,
          49.5489796
        ],
        [
          17.7327742,
          49.5489836
        ],
        [
          17.7327728,
          49.5489651
        ],
        [
          17.7327716,
          49.5489488
        ],
        [
          17.7328409,
          49.5489466
        ],
        [
          17.7328387,
          49.5489181
        ],
        [
          17.7328598,
          49.5489174
        ],
        [
          17.7328929,
          49.5489164
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198280996",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198280996"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7309865,
          49.5490042
        ],
        [
          17.7310265,
          49.5490879
        ],
        [
          17.7310507,
          49.549083
        ],
        [
          17.7310731,
          49.5491299
        ],
        [
          17.7309446,
          49.5491557
        ],
        [
          17.7308823,
          49.5490251
        ],
        [
          17.7309865,
          49.5490042
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281008",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "207",
    "addr:housenumber": "207",
    "addr:street": "Drahotuscher Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281008"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7292425,
          49.5481901
        ],
        [
          17.7292431,
          49.5482064
        ],
        [
          17.7293444,
          49.5482066
        ],
        [
          17.7293517,
          49.5482422
        ],
        [
          17.7293566,
          49.5482659
        ],
        [
          17.7291431,
          49.5482698
        ],
        [
          17.7291422,
          49.5482563
        ],
        [
          17.7291379,
          49.5481927
        ],
        [
          17.7292425,
          49.5481901
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281009",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "208",
    "addr:housenumber": "208",
    "addr:street": "Drahotuscher Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281009"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7295718,
          49.5481225
        ],
        [
          17.7295758,
          49.5481429
        ],
        [
          17.7295784,
          49.5481567
        ],
        [
          17.7296632,
          49.5481498
        ],
        [
          17.7296698,
          49.5481829
        ],
        [
          17.7297344,
          49.5481777
        ],
        [
          17.7297459,
          49.5482373
        ],
        [
          17.7296817,
          49.5482425
        ],
        [
          17.7294494,
          49.5482614
        ],
        [
          17.7294317,
          49.5481696
        ],
        [
          17.7295065,
          49.5481635
        ],
        [
          17.7295038,
          49.5481493
        ],
        [
          17.7294997,
          49.5481284
        ],
        [
          17.7295718,
          49.5481225
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281010",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "209",
    "addr:housenumber": "209",
    "addr:street": "Drahotuscher Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281010"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7299977,
          49.5480845
        ],
        [
          17.7300355,
          49.5481946
        ],
        [
          17.7299517,
          49.5482069
        ],
        [
          17.7298333,
          49.5482242
        ],
        [
          17.729795,
          49.5481139
        ],
        [
          17.7299089,
          49.5480973
        ],
        [
          17.7299977,
          49.5480845
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281011",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "210",
    "addr:housenumber": "210",
    "addr:street": "Drahotuscher Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281011"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.730787,
          49.5479862
        ],
        [
          17.7308067,
          49.5480427
        ],
        [
          17.7308187,
          49.5480919
        ],
        [
          17.7304444,
          49.5481366
        ],
        [
          17.7304097,
          49.5480275
        ],
        [
          17.730787,
          49.5479862
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281012",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "211",
    "addr:housenumber": "211",
    "addr:street": "Drahotuscher Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281012"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7313979,
          49.5476865
        ],
        [
          17.7311463,
          49.5477326
        ],
        [
          17.731147,
          49.5478739
        ],
        [
          17.7311473,
          49.5479447
        ],
        [
          17.7311474,
          49.5479645
        ],
        [
          17.7311487,
          49.5480568
        ],
        [
          17.7309696,
          49.5480765
        ],
        [
          17.7309363,
          49.547949
        ],
        [
          17.7310226,
          49.547942
        ],
        [
          17.7310344,
          49.5477607
        ],
        [
          17.730923,
          49.5477784
        ],
        [
          17.730873,
          49.5476958
        ],
        [
          17.730907,
          49.5476865
        ],
        [
          17.7311468,
          49.5476205
        ],
        [
          17.7311525,
          49.5476421
        ],
        [
          17.7313684,
          49.5476001
        ],
        [
          17.7313979,
          49.5476865
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281013",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "188",
    "addr:housenumber": "188",
    "addr:street": "Drahotuscher Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281013"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7295177,
          49.5483821
        ],
        [
          17.7295176,
          49.5484817
        ],
        [
          17.7294377,
          49.5484816
        ],
        [
          17.7294377,
          49.5485025
        ],
        [
          17.7293905,
          49.5485025
        ],
        [
          17.7293905,
          49.5484832
        ],
        [
          17.7293304,
          49.5484832
        ],
        [
          17.7292921,
          49.548483
        ],
        [
          17.7292901,
          49.5484539
        ],
        [
          17.7292854,
          49.548382
        ],
        [
          17.7295177,
          49.5483821
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281014",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "187",
    "addr:housenumber": "187",
    "addr:street": "Drahotuscher Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281014"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7299495,
          49.5483659
        ],
        [
          17.7299601,
          49.5484522
        ],
        [
          17.7297418,
          49.5484618
        ],
        [
          17.7297513,
          49.5485344
        ],
        [
          17.7297051,
          49.5485366
        ],
        [
          17.729716,
          49.5486161
        ],
        [
          17.7296544,
          49.5486163
        ],
        [
          17.7296198,
          49.548377
        ],
        [
          17.7299495,
          49.5483659
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281015",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "186",
    "addr:housenumber": "186",
    "addr:street": "Drahotuscher Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281015"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7299985,
          49.5483605
        ],
        [
          17.7303465,
          49.548341
        ],
        [
          17.7303606,
          49.5484466
        ],
        [
          17.7301723,
          49.5484576
        ],
        [
          17.730195,
          49.5485806
        ],
        [
          17.7300963,
          49.5485921
        ],
        [
          17.7300522,
          49.5485955
        ],
        [
          17.7300397,
          49.5485526
        ],
        [
          17.7299985,
          49.5483605
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281016",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "185",
    "addr:housenumber": "185",
    "addr:street": "Drahotuscher Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281016"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7309142,
          49.5482769
        ],
        [
          17.7309492,
          49.5483715
        ],
        [
          17.7307839,
          49.5483977
        ],
        [
          17.7307074,
          49.5484079
        ],
        [
          17.7306758,
          49.5483213
        ],
        [
          17.7309142,
          49.5482769
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281017",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "184",
    "addr:housenumber": "184",
    "addr:street": "Drahotuscher Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281017"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7312699,
          49.548214
        ],
        [
          17.7314065,
          49.5481906
        ],
        [
          17.7314273,
          49.5482756
        ],
        [
          17.7314514,
          49.5483741
        ],
        [
          17.7314923,
          49.5485411
        ],
        [
          17.7313991,
          49.5485592
        ],
        [
          17.7313381,
          49.5485717
        ],
        [
          17.7312958,
          49.5485805
        ],
        [
          17.7312752,
          49.5485349
        ],
        [
          17.7313573,
          49.5485152
        ],
        [
          17.7312699,
          49.548214
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281018",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "183",
    "addr:housenumber": "183",
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281018"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7317945,
          49.5486376
        ],
        [
          17.7319478,
          49.5487446
        ],
        [
          17.7318173,
          49.5487879
        ],
        [
          17.7317685,
          49.5487999
        ],
        [
          17.7317599,
          49.5487855
        ],
        [
          17.7315878,
          49.5488332
        ],
        [
          17.7315813,
          49.5488218
        ],
        [
          17.731119,
          49.5489119
        ],
        [
          17.7311093,
          49.5488806
        ],
        [
          17.7311022,
          49.5488579
        ],
        [
          17.7315491,
          49.548781
        ],
        [
          17.7315804,
          49.5487271
        ],
        [
          17.7316598,
          49.5486994
        ],
        [
          17.7317945,
          49.5486376
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281019",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "182",
    "addr:housenumber": "182",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281019"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7321424,
          49.5488331
        ],
        [
          17.7321498,
          49.5488732
        ],
        [
          17.7321795,
          49.5488709
        ],
        [
          17.7321983,
          49.5489716
        ],
        [
          17.7317597,
          49.5490061
        ],
        [
          17.7317441,
          49.5489222
        ],
        [
          17.7317349,
          49.5488728
        ],
        [
          17.7318756,
          49.5488617
        ],
        [
          17.7318899,
          49.5489388
        ],
        [
          17.7320205,
          49.5489286
        ],
        [
          17.7320047,
          49.5488439
        ],
        [
          17.7321424,
          49.5488331
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281020",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "181",
    "addr:housenumber": "181",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281020"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7326174,
          49.548884
        ],
        [
          17.7326183,
          49.5489288
        ],
        [
          17.7326197,
          49.5489999
        ],
        [
          17.7322996,
          49.5490026
        ],
        [
          17.7322988,
          49.5489641
        ],
        [
          17.7322983,
          49.5489402
        ],
        [
          17.7322981,
          49.5489315
        ],
        [
          17.7323568,
          49.548931
        ],
        [
          17.7324845,
          49.5489299
        ],
        [
          17.7324836,
          49.5488852
        ],
        [
          17.7326174,
          49.548884
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281021",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "180",
    "addr:housenumber": "180",
    "building": "house",
    "building:material": "brick",
    "end_date": "1941",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1941",
    "start_date": "1830",
    "id": "way/198281021"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7327626,
          49.5488687
        ],
        [
          17.7327716,
          49.5489488
        ],
        [
          17.7327728,
          49.5489651
        ],
        [
          17.7326463,
          49.5489713
        ],
        [
          17.7326351,
          49.5488749
        ],
        [
          17.7327626,
          49.5488687
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281022",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281022"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.730437,
          49.5486588
        ],
        [
          17.730449,
          49.5486718
        ],
        [
          17.7304684,
          49.5487641
        ],
        [
          17.7301649,
          49.5488086
        ],
        [
          17.7301426,
          49.5487343
        ],
        [
          17.7301308,
          49.5486949
        ],
        [
          17.730437,
          49.5486588
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281023",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281023"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7304684,
          49.5487641
        ],
        [
          17.730449,
          49.5486718
        ],
        [
          17.7306929,
          49.5486349
        ],
        [
          17.7306695,
          49.5485642
        ],
        [
          17.7304798,
          49.5485804
        ],
        [
          17.7304599,
          49.548498
        ],
        [
          17.7305215,
          49.548492
        ],
        [
          17.7307262,
          49.5484671
        ],
        [
          17.7307384,
          49.5485055
        ],
        [
          17.7307505,
          49.5485435
        ],
        [
          17.7308002,
          49.5487157
        ],
        [
          17.7307054,
          49.5487284
        ],
        [
          17.7306843,
          49.5487312
        ],
        [
          17.7305039,
          49.5487663
        ],
        [
          17.7304684,
          49.5487641
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281036",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1941",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1941",
    "source:start_date": "https://iispp.npu.cz/mis_public/searchDocument.htm?search=23496/8-419",
    "start_date": "1599",
    "wikidata": "Q29014834",
    "id": "way/198281036"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7328293,
          49.5507436
        ],
        [
          17.732955,
          49.5508169
        ],
        [
          17.7331401,
          49.5509249
        ],
        [
          17.7332839,
          49.5510088
        ],
        [
          17.7331654,
          49.5510942
        ],
        [
          17.7330221,
          49.5510106
        ],
        [
          17.732837,
          49.5509026
        ],
        [
          17.7327109,
          49.550829
        ],
        [
          17.7328293,
          49.5507436
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281037",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "83",
    "addr:housenumber": "83",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281037"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7353697,
          49.5474926
        ],
        [
          17.7353904,
          49.5474285
        ],
        [
          17.7357329,
          49.5474353
        ],
        [
          17.7357258,
          49.5475154
        ],
        [
          17.7353697,
          49.5474926
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281038",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "84",
    "addr:housenumber": "84",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281038"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7353535,
          49.5475631
        ],
        [
          17.7353697,
          49.5474926
        ],
        [
          17.7357258,
          49.5475154
        ],
        [
          17.735756,
          49.5475169
        ],
        [
          17.7357403,
          49.5475913
        ],
        [
          17.7353535,
          49.5475631
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281039",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "85",
    "addr:housenumber": "85",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281039"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7353253,
          49.5476927
        ],
        [
          17.7353535,
          49.5475631
        ],
        [
          17.7357403,
          49.5475913
        ],
        [
          17.7357332,
          49.5476319
        ],
        [
          17.7357149,
          49.5477196
        ],
        [
          17.7353253,
          49.5476927
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281040",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "86",
    "addr:housenumber": "86",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281040"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.735302,
          49.5478315
        ],
        [
          17.7353253,
          49.5476927
        ],
        [
          17.7357149,
          49.5477196
        ],
        [
          17.7357116,
          49.5477438
        ],
        [
          17.7357062,
          49.5478217
        ],
        [
          17.7357022,
          49.5478519
        ],
        [
          17.735302,
          49.5478315
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281041",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "87",
    "addr:housenumber": "87",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281041"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7352892,
          49.547898
        ],
        [
          17.735302,
          49.5478315
        ],
        [
          17.7357022,
          49.5478519
        ],
        [
          17.7358817,
          49.5478637
        ],
        [
          17.735876,
          49.5479078
        ],
        [
          17.7356643,
          49.5478829
        ],
        [
          17.7356594,
          49.5479197
        ],
        [
          17.7352892,
          49.547898
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281042",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "88",
    "addr:housenumber": "88",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281042"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7352815,
          49.5479656
        ],
        [
          17.7352892,
          49.547898
        ],
        [
          17.7356594,
          49.5479197
        ],
        [
          17.7356543,
          49.5479867
        ],
        [
          17.7352815,
          49.5479656
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281043",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "89",
    "addr:housenumber": "89",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281043"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7352482,
          49.5480883
        ],
        [
          17.7352815,
          49.5479656
        ],
        [
          17.7356543,
          49.5479867
        ],
        [
          17.735669,
          49.5479901
        ],
        [
          17.7356562,
          49.5480539
        ],
        [
          17.735635,
          49.5481205
        ],
        [
          17.7352482,
          49.5480883
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281044",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "90",
    "addr:housenumber": "90",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281044"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7352387,
          49.5481572
        ],
        [
          17.7352482,
          49.5480883
        ],
        [
          17.735635,
          49.5481205
        ],
        [
          17.7356296,
          49.5481579
        ],
        [
          17.7356242,
          49.5481777
        ],
        [
          17.7352387,
          49.5481572
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281045",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "91",
    "addr:housenumber": "91",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281045"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7352285,
          49.5482156
        ],
        [
          17.7352387,
          49.5481572
        ],
        [
          17.7356242,
          49.5481777
        ],
        [
          17.7356069,
          49.5482445
        ],
        [
          17.7352285,
          49.5482156
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281046",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "92",
    "addr:housenumber": "92",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281046"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7352142,
          49.5483521
        ],
        [
          17.7352285,
          49.5482156
        ],
        [
          17.7356069,
          49.5482445
        ],
        [
          17.7355945,
          49.5483243
        ],
        [
          17.735766,
          49.5483339
        ],
        [
          17.7357878,
          49.5482528
        ],
        [
          17.7358409,
          49.5482582
        ],
        [
          17.7358047,
          49.5483676
        ],
        [
          17.7357992,
          49.5483842
        ],
        [
          17.7357249,
          49.5483841
        ],
        [
          17.7356582,
          49.5483821
        ],
        [
          17.7355668,
          49.5483738
        ],
        [
          17.7352142,
          49.5483521
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281047",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "93",
    "addr:housenumber": "93",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281047"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7351979,
          49.5484516
        ],
        [
          17.7352142,
          49.5483521
        ],
        [
          17.7355668,
          49.5483738
        ],
        [
          17.7355612,
          49.5484001
        ],
        [
          17.7355593,
          49.5484297
        ],
        [
          17.7357261,
          49.548433
        ],
        [
          17.7357249,
          49.5483841
        ],
        [
          17.7357992,
          49.5483842
        ],
        [
          17.7357854,
          49.5484914
        ],
        [
          17.7356796,
          49.5484823
        ],
        [
          17.7355594,
          49.548474
        ],
        [
          17.7351979,
          49.5484516
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281048",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "94",
    "addr:housenumber": "94",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281048"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7351818,
          49.5485407
        ],
        [
          17.7351979,
          49.5484516
        ],
        [
          17.7355594,
          49.548474
        ],
        [
          17.7355504,
          49.5485219
        ],
        [
          17.73567,
          49.5485296
        ],
        [
          17.7357758,
          49.5485387
        ],
        [
          17.7357682,
          49.5485666
        ],
        [
          17.7351818,
          49.5485407
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281049",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "95",
    "addr:housenumber": "95",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281049"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7351734,
          49.5485963
        ],
        [
          17.7351818,
          49.5485407
        ],
        [
          17.7357682,
          49.5485666
        ],
        [
          17.735762,
          49.5486023
        ],
        [
          17.7357593,
          49.5486205
        ],
        [
          17.7356199,
          49.5486123
        ],
        [
          17.7356206,
          49.5485882
        ],
        [
          17.7355633,
          49.5485881
        ],
        [
          17.7355632,
          49.5486102
        ],
        [
          17.7355236,
          49.5486095
        ],
        [
          17.7351734,
          49.5485963
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281050",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "96",
    "addr:housenumber": "96",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281050"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7351795,
          49.5487188
        ],
        [
          17.7351734,
          49.5485963
        ],
        [
          17.7355236,
          49.5486095
        ],
        [
          17.735523,
          49.5486251
        ],
        [
          17.7355223,
          49.5486944
        ],
        [
          17.7355218,
          49.5487297
        ],
        [
          17.7352312,
          49.5487214
        ],
        [
          17.7351795,
          49.5487188
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281051",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "97",
    "addr:housenumber": "97",
    "addr:street": "Schlossgasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "source:start_date": "https://iispp.npu.cz/mis_public/searchDocument.htm?search=20531/8-2796",
    "start_date": "1700",
    "wikidata": "Q33423230",
    "id": "way/198281051"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7351878,
          49.5488371
        ],
        [
          17.7351795,
          49.5487188
        ],
        [
          17.7352312,
          49.5487214
        ],
        [
          17.7355218,
          49.5487297
        ],
        [
          17.7355437,
          49.5487318
        ],
        [
          17.7355416,
          49.5488064
        ],
        [
          17.7357998,
          49.5488018
        ],
        [
          17.735808,
          49.5488549
        ],
        [
          17.7357896,
          49.5488544
        ],
        [
          17.7356778,
          49.5488558
        ],
        [
          17.7356024,
          49.5488519
        ],
        [
          17.7355278,
          49.5488508
        ],
        [
          17.7352181,
          49.548838
        ],
        [
          17.7351878,
          49.5488371
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281052",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "98",
    "addr:housenumber": "98",
    "addr:street": "Schlossgasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "source:start_date": "https://iispp.npu.cz/mis_public/searchDocument.htm?search=44881/8-2797",
    "start_date": "1700",
    "wikidata": "Q33423244",
    "id": "way/198281052"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7351811,
          49.5489598
        ],
        [
          17.7351878,
          49.5488371
        ],
        [
          17.7352181,
          49.548838
        ],
        [
          17.7355278,
          49.5488508
        ],
        [
          17.735526,
          49.5489329
        ],
        [
          17.7355254,
          49.548962
        ],
        [
          17.7352046,
          49.5489585
        ],
        [
          17.7351811,
          49.5489598
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281053",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "99",
    "addr:housenumber": "99",
    "addr:street": "Schlossgasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281053"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7351718,
          49.5490265
        ],
        [
          17.7351811,
          49.5489598
        ],
        [
          17.7352046,
          49.5489585
        ],
        [
          17.7355254,
          49.548962
        ],
        [
          17.7355287,
          49.5490396
        ],
        [
          17.7355212,
          49.5490393
        ],
        [
          17.7351969,
          49.5490274
        ],
        [
          17.7351718,
          49.5490265
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281054",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "100",
    "addr:housenumber": "100",
    "addr:street": "Schlossgasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "source:start_date": "https://iispp.npu.cz/mis_public/searchDocument.htm?search=25255/8-2798",
    "start_date": "1700",
    "wikidata": "Q33423124",
    "id": "way/198281054"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7351661,
          49.5490981
        ],
        [
          17.7351718,
          49.5490265
        ],
        [
          17.7351969,
          49.5490274
        ],
        [
          17.7355212,
          49.5490393
        ],
        [
          17.7355244,
          49.5491132
        ],
        [
          17.7351889,
          49.549099
        ],
        [
          17.7351661,
          49.5490981
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281055",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "101",
    "addr:housenumber": "101",
    "addr:street": "Schlossgasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "source:start_date": "Moravský zemský archiv, D22, sig. 1325",
    "start_date": "1729",
    "wikidata": "Q33423141",
    "id": "way/198281055"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7351561,
          49.5491674
        ],
        [
          17.7351661,
          49.5490981
        ],
        [
          17.7351889,
          49.549099
        ],
        [
          17.7355244,
          49.5491132
        ],
        [
          17.7355382,
          49.5491138
        ],
        [
          17.7355311,
          49.5491554
        ],
        [
          17.7355268,
          49.549181
        ],
        [
          17.7355004,
          49.54918
        ],
        [
          17.7351811,
          49.5491683
        ],
        [
          17.7351561,
          49.5491674
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281056",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "102",
    "addr:housenumber": "102",
    "addr:street": "Schlossgasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281056"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7351468,
          49.549232
        ],
        [
          17.7351561,
          49.5491674
        ],
        [
          17.7351811,
          49.5491683
        ],
        [
          17.7355004,
          49.54918
        ],
        [
          17.7354919,
          49.5492451
        ],
        [
          17.735174,
          49.5492314
        ],
        [
          17.7351468,
          49.549232
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281057",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "103",
    "addr:housenumber": "103",
    "addr:street": "Schlossgasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "source:start_date": "Moravský zemský archiv, D22, sig. 1325",
    "start_date": "1729",
    "wikidata": "Q33423310",
    "id": "way/198281057"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7351357,
          49.5493089
        ],
        [
          17.7351468,
          49.549232
        ],
        [
          17.735174,
          49.5492314
        ],
        [
          17.7354919,
          49.5492451
        ],
        [
          17.7354877,
          49.5492894
        ],
        [
          17.7354846,
          49.5493227
        ],
        [
          17.7351652,
          49.5493101
        ],
        [
          17.7351357,
          49.5493089
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281058",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "110",
    "addr:housenumber": "110",
    "addr:street": "Schlossgasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281058"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7354102,
          49.5497541
        ],
        [
          17.735454,
          49.5497576
        ],
        [
          17.7354468,
          49.5497979
        ],
        [
          17.7354405,
          49.5498333
        ],
        [
          17.7351903,
          49.5498145
        ],
        [
          17.735082,
          49.5498064
        ],
        [
          17.7350564,
          49.5498044
        ],
        [
          17.7350699,
          49.5497286
        ],
        [
          17.7350952,
          49.5497305
        ],
        [
          17.7354102,
          49.5497541
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281059",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "104",
    "addr:housenumber": "104",
    "addr:street": "Schlossgasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "source:start_date": "Moravský zemský archiv, D22, sig. 1325",
    "start_date": "1729",
    "wikidata": "Q33423173",
    "id": "way/198281059"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7351207,
          49.5494033
        ],
        [
          17.7351358,
          49.5493326
        ],
        [
          17.7351643,
          49.5493335
        ],
        [
          17.7354724,
          49.5493493
        ],
        [
          17.735473,
          49.5494287
        ],
        [
          17.7351517,
          49.5494056
        ],
        [
          17.7351207,
          49.5494033
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281060",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "105",
    "addr:housenumber": "105",
    "addr:street": "Schlossgasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1941",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1941",
    "source:start_date": "Moravský zemský archiv, D22, sig. 1325",
    "start_date": "1729",
    "wikidata": "Q33423028",
    "id": "way/198281060"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7351054,
          49.5494709
        ],
        [
          17.7351207,
          49.5494033
        ],
        [
          17.7351517,
          49.5494056
        ],
        [
          17.735473,
          49.5494287
        ],
        [
          17.735666,
          49.5494268
        ],
        [
          17.7357028,
          49.5494279
        ],
        [
          17.7359216,
          49.5494344
        ],
        [
          17.7359122,
          49.5495105
        ],
        [
          17.7357881,
          49.5495048
        ],
        [
          17.7357896,
          49.549467
        ],
        [
          17.7357045,
          49.5494646
        ],
        [
          17.7354729,
          49.5494581
        ],
        [
          17.7354739,
          49.5494921
        ],
        [
          17.7351402,
          49.5494729
        ],
        [
          17.7351054,
          49.5494709
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281061",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "106",
    "addr:housenumber": "106",
    "addr:street": "Schlossgasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281061"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7350947,
          49.5495253
        ],
        [
          17.7351054,
          49.5494709
        ],
        [
          17.7351402,
          49.5494729
        ],
        [
          17.7354739,
          49.5494921
        ],
        [
          17.7354499,
          49.5495575
        ],
        [
          17.7351307,
          49.5495265
        ],
        [
          17.7350947,
          49.5495253
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281062",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "107",
    "addr:housenumber": "107",
    "addr:street": "Schlossgasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1941",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1941",
    "start_date": "1830",
    "id": "way/198281062"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7350798,
          49.5495898
        ],
        [
          17.7350947,
          49.5495253
        ],
        [
          17.7351307,
          49.5495265
        ],
        [
          17.7354499,
          49.5495575
        ],
        [
          17.7354365,
          49.549614
        ],
        [
          17.7353991,
          49.5496115
        ],
        [
          17.7351192,
          49.5495924
        ],
        [
          17.7350798,
          49.5495898
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281063",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "108",
    "addr:housenumber": "108",
    "addr:street": "Schlossgasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281063"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7351192,
          49.5495924
        ],
        [
          17.7353991,
          49.5496115
        ],
        [
          17.7353882,
          49.549674
        ],
        [
          17.7351086,
          49.5496534
        ],
        [
          17.7350691,
          49.5496504
        ],
        [
          17.7350798,
          49.5495898
        ],
        [
          17.7351192,
          49.5495924
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281064",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "109",
    "addr:housenumber": "109",
    "addr:street": "Schlossgasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281064"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7350699,
          49.5497286
        ],
        [
          17.7350516,
          49.5497273
        ],
        [
          17.7350691,
          49.5496504
        ],
        [
          17.7351086,
          49.5496534
        ],
        [
          17.7353882,
          49.549674
        ],
        [
          17.7354251,
          49.549677
        ],
        [
          17.7354102,
          49.5497541
        ],
        [
          17.7350952,
          49.5497305
        ],
        [
          17.7350699,
          49.5497286
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281065",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "436",
    "addr:housenumber": "436",
    "addr:street": "Pfarrgasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281065"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7344918,
          49.5464218
        ],
        [
          17.7344693,
          49.5464989
        ],
        [
          17.7344156,
          49.5464962
        ],
        [
          17.7343422,
          49.5464926
        ],
        [
          17.7343414,
          49.5464246
        ],
        [
          17.7344918,
          49.5464218
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281066",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "66",
    "addr:housenumber": "66",
    "addr:street": "Pfarrgasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281066"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7346352,
          49.5464405
        ],
        [
          17.734607,
          49.5465298
        ],
        [
          17.7344693,
          49.5464989
        ],
        [
          17.7344918,
          49.5464218
        ],
        [
          17.7346352,
          49.5464405
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281067",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "65",
    "addr:housenumber": "65",
    "addr:street": "Pfarrgasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281067"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.734821,
          49.5465017
        ],
        [
          17.7347682,
          49.5465847
        ],
        [
          17.734607,
          49.5465298
        ],
        [
          17.7346352,
          49.5464405
        ],
        [
          17.734821,
          49.5465017
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281068",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "64",
    "addr:housenumber": "64",
    "addr:street": "Pfarrgasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281068"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7349458,
          49.546568
        ],
        [
          17.7348881,
          49.5466394
        ],
        [
          17.7348449,
          49.5466256
        ],
        [
          17.7348595,
          49.5466062
        ],
        [
          17.7347682,
          49.5465847
        ],
        [
          17.734821,
          49.5465017
        ],
        [
          17.7349605,
          49.5465559
        ],
        [
          17.7349458,
          49.546568
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281069",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "63",
    "addr:housenumber": "63",
    "addr:street": "Pfarrgasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281069"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7350449,
          49.5465976
        ],
        [
          17.7349825,
          49.5466887
        ],
        [
          17.7349466,
          49.546733
        ],
        [
          17.7348847,
          49.5467177
        ],
        [
          17.7349179,
          49.5466578
        ],
        [
          17.7348825,
          49.5466492
        ],
        [
          17.7348881,
          49.5466394
        ],
        [
          17.7349458,
          49.546568
        ],
        [
          17.7350449,
          49.5465976
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281070",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "62",
    "addr:housenumber": "62",
    "addr:street": "Pfarrgasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281070"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7351376,
          49.5466354
        ],
        [
          17.7350689,
          49.5467503
        ],
        [
          17.7350638,
          49.5467609
        ],
        [
          17.7349865,
          49.546738
        ],
        [
          17.734997,
          49.5467154
        ],
        [
          17.7350435,
          49.5467206
        ],
        [
          17.7350485,
          49.546706
        ],
        [
          17.7349825,
          49.5466887
        ],
        [
          17.7350449,
          49.5465976
        ],
        [
          17.7351376,
          49.5466354
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281071",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "61",
    "addr:housenumber": "61",
    "addr:street": "Pfarrgasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281071"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7352133,
          49.5466737
        ],
        [
          17.7351599,
          49.5467575
        ],
        [
          17.7351554,
          49.5467686
        ],
        [
          17.7350689,
          49.5467503
        ],
        [
          17.7351376,
          49.5466354
        ],
        [
          17.7352144,
          49.546666
        ],
        [
          17.7352133,
          49.5466737
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281072",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "60",
    "addr:housenumber": "60",
    "addr:street": "Pfarrgasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281072"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7352972,
          49.5467036
        ],
        [
          17.7352363,
          49.5467806
        ],
        [
          17.7351599,
          49.5467575
        ],
        [
          17.7352133,
          49.5466737
        ],
        [
          17.7352972,
          49.5467036
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281073",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "59",
    "addr:housenumber": "59",
    "addr:street": "Pfarrgasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281073"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7354002,
          49.5467471
        ],
        [
          17.7353386,
          49.5468165
        ],
        [
          17.7353107,
          49.5468382
        ],
        [
          17.7352222,
          49.5468083
        ],
        [
          17.7352363,
          49.5467806
        ],
        [
          17.7352972,
          49.5467036
        ],
        [
          17.7354002,
          49.5467471
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281074",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "58",
    "addr:housenumber": "58",
    "addr:street": "Pfarrgasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281074"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7355212,
          49.5467949
        ],
        [
          17.7354724,
          49.5468932
        ],
        [
          17.7353954,
          49.5468701
        ],
        [
          17.7354145,
          49.5468349
        ],
        [
          17.7353386,
          49.5468165
        ],
        [
          17.7354002,
          49.5467471
        ],
        [
          17.7354455,
          49.546765
        ],
        [
          17.7355212,
          49.5467949
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281075",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "111",
    "addr:housenumber": "111",
    "addr:street": "Schlossgasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281075"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7351903,
          49.5498145
        ],
        [
          17.7354405,
          49.5498333
        ],
        [
          17.7354424,
          49.5499053
        ],
        [
          17.7352216,
          49.5498823
        ],
        [
          17.7351795,
          49.5498714
        ],
        [
          17.7351903,
          49.5498145
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281111",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "442",
    "addr:housenumber": "442",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281111"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7347163,
          49.5446861
        ],
        [
          17.734784,
          49.5447405
        ],
        [
          17.7346878,
          49.5448084
        ],
        [
          17.7346312,
          49.5447686
        ],
        [
          17.7346032,
          49.544749
        ],
        [
          17.7347163,
          49.5446861
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281112",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281112"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7354297,
          49.5445186
        ],
        [
          17.7356351,
          49.5445105
        ],
        [
          17.7356396,
          49.5445579
        ],
        [
          17.7354342,
          49.544566
        ],
        [
          17.7354297,
          49.5445186
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281113",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281113"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.734594,
          49.5445876
        ],
        [
          17.7346519,
          49.5446342
        ],
        [
          17.734617,
          49.5446522
        ],
        [
          17.7345596,
          49.5446054
        ],
        [
          17.734594,
          49.5445876
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281114",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281114"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7342164,
          49.5447476
        ],
        [
          17.7342848,
          49.544802
        ],
        [
          17.7342338,
          49.5448763
        ],
        [
          17.7341439,
          49.5449243
        ],
        [
          17.7340592,
          49.5448415
        ],
        [
          17.7342164,
          49.5447476
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281151",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281151"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7332487,
          49.5459188
        ],
        [
          17.7329207,
          49.5461468
        ],
        [
          17.7328844,
          49.5461248
        ],
        [
          17.7328368,
          49.5461579
        ],
        [
          17.732768,
          49.5461163
        ],
        [
          17.7331438,
          49.5458552
        ],
        [
          17.7332487,
          49.5459188
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281152",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281152"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7335621,
          49.5462161
        ],
        [
          17.73361,
          49.5462179
        ],
        [
          17.7336096,
          49.5463035
        ],
        [
          17.7335636,
          49.5463046
        ],
        [
          17.7335621,
          49.5462161
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281153",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281153"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7334947,
          49.5463694
        ],
        [
          17.7334947,
          49.5464108
        ],
        [
          17.7333967,
          49.5464107
        ],
        [
          17.7333968,
          49.5463676
        ],
        [
          17.7334947,
          49.5463694
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281154",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281154"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.733274,
          49.5466171
        ],
        [
          17.7332323,
          49.5465531
        ],
        [
          17.7332885,
          49.5465377
        ],
        [
          17.7334234,
          49.5465022
        ],
        [
          17.7334656,
          49.5465694
        ],
        [
          17.733274,
          49.5466171
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281195",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281195"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7339198,
          49.5459338
        ],
        [
          17.7342711,
          49.5459765
        ],
        [
          17.7342591,
          49.5460096
        ],
        [
          17.7342067,
          49.5459999
        ],
        [
          17.7341679,
          49.5460713
        ],
        [
          17.7339104,
          49.5460269
        ],
        [
          17.7339198,
          49.5459338
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281196",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281196"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7336851,
          49.5462306
        ],
        [
          17.7336851,
          49.5462863
        ],
        [
          17.7336341,
          49.5462863
        ],
        [
          17.7336341,
          49.5462306
        ],
        [
          17.7336851,
          49.5462306
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281197",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281197"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7332184,
          49.5466978
        ],
        [
          17.7331656,
          49.5466469
        ],
        [
          17.733274,
          49.5466171
        ],
        [
          17.7332184,
          49.5466978
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281198",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1941",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1941",
    "start_date": "1830",
    "id": "way/198281198"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7328281,
          49.5467401
        ],
        [
          17.7327853,
          49.5466953
        ],
        [
          17.7329462,
          49.5466337
        ],
        [
          17.7329662,
          49.5466545
        ],
        [
          17.733014,
          49.5467045
        ],
        [
          17.7329665,
          49.5467236
        ],
        [
          17.7329394,
          49.5466953
        ],
        [
          17.7328281,
          49.5467401
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281199",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1941",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1941",
    "start_date": "1830",
    "id": "way/198281199"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7330719,
          49.5468001
        ],
        [
          17.733014,
          49.5467608
        ],
        [
          17.7329914,
          49.5467455
        ],
        [
          17.7330355,
          49.5467181
        ],
        [
          17.7331161,
          49.5467726
        ],
        [
          17.7330719,
          49.5468001
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281218",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281218"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.731766,
          49.546523
        ],
        [
          17.7317831,
          49.5465538
        ],
        [
          17.7317295,
          49.546566
        ],
        [
          17.7317119,
          49.5465345
        ],
        [
          17.731766,
          49.546523
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281222",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281222"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7315692,
          49.5466896
        ],
        [
          17.7315311,
          49.546632
        ],
        [
          17.7316125,
          49.5466103
        ],
        [
          17.7316318,
          49.5466407
        ],
        [
          17.7315941,
          49.5466507
        ],
        [
          17.7316118,
          49.5466785
        ],
        [
          17.7315692,
          49.5466896
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281223",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281223"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7312147,
          49.5466264
        ],
        [
          17.7312909,
          49.5466605
        ],
        [
          17.7312631,
          49.5466867
        ],
        [
          17.7311827,
          49.5466565
        ],
        [
          17.7312147,
          49.5466264
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281224",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281224"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7313794,
          49.5466964
        ],
        [
          17.7313872,
          49.5466581
        ],
        [
          17.7314453,
          49.546663
        ],
        [
          17.7314375,
          49.5467014
        ],
        [
          17.7313957,
          49.5466978
        ],
        [
          17.7313794,
          49.5466964
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281225",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281225"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.732326,
          49.5472087
        ],
        [
          17.7322438,
          49.5471967
        ],
        [
          17.7322536,
          49.5471109
        ],
        [
          17.7323224,
          49.5471142
        ],
        [
          17.7323238,
          49.5471508
        ],
        [
          17.732325,
          49.5471825
        ],
        [
          17.732326,
          49.5472087
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281226",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281226"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7320752,
          49.5472951
        ],
        [
          17.7320936,
          49.5472607
        ],
        [
          17.7321493,
          49.5472743
        ],
        [
          17.7321293,
          49.5473085
        ],
        [
          17.7320752,
          49.5472951
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281227",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281227"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7320504,
          49.5472861
        ],
        [
          17.7320752,
          49.5472951
        ],
        [
          17.7321293,
          49.5473085
        ],
        [
          17.7321914,
          49.5473299
        ],
        [
          17.7321538,
          49.5473583
        ],
        [
          17.7320162,
          49.5473151
        ],
        [
          17.7320504,
          49.5472861
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281235",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "393",
    "addr:housenumber": "393",
    "addr:street": "Motoschiner Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281235"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7352161,
          49.5459601
        ],
        [
          17.735419,
          49.5460313
        ],
        [
          17.7354558,
          49.5460453
        ],
        [
          17.7353588,
          49.5461472
        ],
        [
          17.7352897,
          49.5461183
        ],
        [
          17.7353346,
          49.5460698
        ],
        [
          17.7352279,
          49.5460336
        ],
        [
          17.7351838,
          49.5459949
        ],
        [
          17.7352161,
          49.5459601
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281236",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "394",
    "addr:housenumber": "394",
    "building": "house",
    "building:material": "brick",
    "end_date": "1941",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1941",
    "start_date": "1830",
    "id": "way/198281236"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7350947,
          49.5457543
        ],
        [
          17.7352127,
          49.5457983
        ],
        [
          17.7351665,
          49.5458643
        ],
        [
          17.7351076,
          49.5458423
        ],
        [
          17.7351192,
          49.5458292
        ],
        [
          17.7350891,
          49.545818
        ],
        [
          17.7350535,
          49.5458071
        ],
        [
          17.7350947,
          49.5457543
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281237",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "395",
    "addr:housenumber": "395",
    "addr:street": "Motoschiner Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1941",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1941",
    "start_date": "1830",
    "id": "way/198281237"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7339235,
          49.5457598
        ],
        [
          17.7339586,
          49.545853
        ],
        [
          17.7338785,
          49.5458657
        ],
        [
          17.7338598,
          49.5458164
        ],
        [
          17.7337629,
          49.5458318
        ],
        [
          17.7337463,
          49.545788
        ],
        [
          17.7339235,
          49.5457598
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281238",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "396",
    "addr:housenumber": "396",
    "addr:street": "Motoschiner Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1941",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1941",
    "start_date": "1830",
    "id": "way/198281238"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7328924,
          49.5462577
        ],
        [
          17.7329617,
          49.5462832
        ],
        [
          17.7328643,
          49.5463662
        ],
        [
          17.7328018,
          49.5463406
        ],
        [
          17.7328924,
          49.5462577
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281239",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "397",
    "addr:housenumber": "397",
    "addr:street": "Motoschiner Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1905",
    "source": "mza:d9",
    "source:end_date": "http://historie.hranet.cz/bartovsky1/priloha1.pdf",
    "start_date": "1830",
    "id": "way/198281239"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7325432,
          49.5465702
        ],
        [
          17.7326483,
          49.546528
        ],
        [
          17.7327557,
          49.5466404
        ],
        [
          17.7326557,
          49.5466807
        ],
        [
          17.7325432,
          49.5465702
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281240",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "428",
    "addr:housenumber": "428",
    "addr:street": "Motoschiner Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281240"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7323382,
          49.5463531
        ],
        [
          17.7325666,
          49.5462567
        ],
        [
          17.73256,
          49.546206
        ],
        [
          17.7326295,
          49.5461778
        ],
        [
          17.7326956,
          49.5462464
        ],
        [
          17.7326259,
          49.5462729
        ],
        [
          17.7326445,
          49.5463029
        ],
        [
          17.7325215,
          49.5463527
        ],
        [
          17.7326033,
          49.5464377
        ],
        [
          17.7324713,
          49.5464912
        ],
        [
          17.7323382,
          49.5463531
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281241",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "224",
    "addr:housenumber": "224",
    "addr:street": "Motoschiner Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281241"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7320491,
          49.546654
        ],
        [
          17.732014,
          49.546595
        ],
        [
          17.7319812,
          49.54654
        ],
        [
          17.732069,
          49.546518
        ],
        [
          17.7321042,
          49.5465772
        ],
        [
          17.7321479,
          49.5465663
        ],
        [
          17.7321202,
          49.5465197
        ],
        [
          17.7322457,
          49.5464883
        ],
        [
          17.7323046,
          49.5465873
        ],
        [
          17.7320491,
          49.546654
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281242",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "223",
    "addr:housenumber": "223",
    "addr:street": "Motoschiner Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281242"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7318119,
          49.5466435
        ],
        [
          17.7319427,
          49.5466121
        ],
        [
          17.732014,
          49.546595
        ],
        [
          17.7320491,
          49.546654
        ],
        [
          17.7320669,
          49.546684
        ],
        [
          17.731858,
          49.5467245
        ],
        [
          17.7318119,
          49.5466435
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281243",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "222",
    "addr:housenumber": "222",
    "addr:street": "Motoschiner Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281243"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7317386,
          49.5466456
        ],
        [
          17.7317926,
          49.5467331
        ],
        [
          17.7316266,
          49.5467762
        ],
        [
          17.7315854,
          49.546714
        ],
        [
          17.7315692,
          49.5466896
        ],
        [
          17.7316118,
          49.5466785
        ],
        [
          17.7317386,
          49.5466456
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281244",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "221",
    "addr:housenumber": "221",
    "addr:street": "Motoschiner Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281244"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7313957,
          49.5466978
        ],
        [
          17.7314375,
          49.5467014
        ],
        [
          17.7315854,
          49.546714
        ],
        [
          17.7316266,
          49.5467762
        ],
        [
          17.7316406,
          49.5467973
        ],
        [
          17.7313843,
          49.5467752
        ],
        [
          17.7313957,
          49.5466978
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281245",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "220",
    "addr:housenumber": "220",
    "addr:street": "Motoschiner Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281245"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7311827,
          49.5466565
        ],
        [
          17.7312631,
          49.5466867
        ],
        [
          17.7313413,
          49.5467216
        ],
        [
          17.7313009,
          49.5467596
        ],
        [
          17.7311949,
          49.546711
        ],
        [
          17.7311478,
          49.5466894
        ],
        [
          17.7311827,
          49.5466565
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281246",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "219",
    "addr:housenumber": "219",
    "addr:street": "Motoschiner Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281246"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7312512,
          49.5467764
        ],
        [
          17.7313889,
          49.546818
        ],
        [
          17.7313593,
          49.5468611
        ],
        [
          17.7312965,
          49.546843
        ],
        [
          17.7312802,
          49.5468668
        ],
        [
          17.7312042,
          49.5468449
        ],
        [
          17.7312512,
          49.5467764
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281247",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "218",
    "addr:housenumber": "218",
    "addr:street": "Motoschiner Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1905",
    "source": "mza:d9",
    "source:end_date": "http://historie.hranet.cz/bartovsky1/priloha1.pdf",
    "start_date": "1830",
    "id": "way/198281247"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7318088,
          49.5468589
        ],
        [
          17.7317914,
          49.5469282
        ],
        [
          17.7317712,
          49.5469261
        ],
        [
          17.7315893,
          49.5469094
        ],
        [
          17.7316045,
          49.5468403
        ],
        [
          17.7318088,
          49.5468589
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281248",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "217",
    "addr:housenumber": "217",
    "addr:street": "Motoschiner Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1905",
    "source": "mza:d9",
    "source:end_date": "http://historie.hranet.cz/bartovsky1/priloha1.pdf",
    "start_date": "1830",
    "id": "way/198281248"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7319533,
          49.5468742
        ],
        [
          17.7319218,
          49.546999
        ],
        [
          17.7319126,
          49.5470355
        ],
        [
          17.731748,
          49.547018
        ],
        [
          17.7317712,
          49.5469261
        ],
        [
          17.7317914,
          49.5469282
        ],
        [
          17.7318088,
          49.5468589
        ],
        [
          17.7319533,
          49.5468742
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281249",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "216",
    "addr:housenumber": "216",
    "addr:street": "Motoschiner Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1905",
    "source": "mza:d9",
    "source:end_date": "http://historie.hranet.cz/bartovsky1/priloha1.pdf",
    "start_date": "1830",
    "id": "way/198281249"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7321566,
          49.5469673
        ],
        [
          17.7321147,
          49.5471113
        ],
        [
          17.7319502,
          49.5470911
        ],
        [
          17.7319557,
          49.5470721
        ],
        [
          17.7319159,
          49.5470672
        ],
        [
          17.7319348,
          49.5470023
        ],
        [
          17.7319636,
          49.5470058
        ],
        [
          17.7320353,
          49.5470146
        ],
        [
          17.7320652,
          49.5470183
        ],
        [
          17.7320822,
          49.5469598
        ],
        [
          17.7321566,
          49.5469673
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281250",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "398",
    "addr:housenumber": "398",
    "addr:street": "Drahotuscher Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1941",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1941",
    "start_date": "1830",
    "id": "way/198281250"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7328281,
          49.5467401
        ],
        [
          17.7329009,
          49.5468254
        ],
        [
          17.733014,
          49.5467608
        ],
        [
          17.7330719,
          49.5468001
        ],
        [
          17.7328535,
          49.5469086
        ],
        [
          17.7327343,
          49.5467774
        ],
        [
          17.7327956,
          49.5467555
        ],
        [
          17.7328281,
          49.5467401
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281251",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "213",
    "addr:housenumber": "213",
    "addr:street": "Drahotuscher Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281251"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7319321,
          49.5473867
        ],
        [
          17.7321059,
          49.5474969
        ],
        [
          17.7319989,
          49.5475585
        ],
        [
          17.7319306,
          49.5475978
        ],
        [
          17.7318756,
          49.547561
        ],
        [
          17.7319018,
          49.5475438
        ],
        [
          17.731866,
          49.5475209
        ],
        [
          17.731902,
          49.5474975
        ],
        [
          17.7319679,
          49.5474536
        ],
        [
          17.7318848,
          49.5474011
        ],
        [
          17.7319189,
          49.5473783
        ],
        [
          17.7319321,
          49.5473867
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281252",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "433",
    "addr:housenumber": "433",
    "addr:street": "Drahotuscher Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281252"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7323206,
          49.5473654
        ],
        [
          17.7322323,
          49.547424
        ],
        [
          17.7321059,
          49.5474969
        ],
        [
          17.7319321,
          49.5473867
        ],
        [
          17.7319711,
          49.5473533
        ],
        [
          17.7320352,
          49.5473826
        ],
        [
          17.732062,
          49.5473611
        ],
        [
          17.7321125,
          49.5473896
        ],
        [
          17.7321538,
          49.5473583
        ],
        [
          17.7321914,
          49.5473299
        ],
        [
          17.7322083,
          49.5473171
        ],
        [
          17.7323206,
          49.5473654
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281253",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "214",
    "addr:housenumber": "214",
    "addr:street": "Drahotuscher Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281253"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7324423,
          49.5472596
        ],
        [
          17.7323206,
          49.5473654
        ],
        [
          17.7322083,
          49.5473171
        ],
        [
          17.732326,
          49.5472087
        ],
        [
          17.7324423,
          49.5472596
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281254",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "215",
    "addr:housenumber": "215",
    "addr:street": "Drahotuscher Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281254"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7325316,
          49.5469963
        ],
        [
          17.732512,
          49.5471617
        ],
        [
          17.7323319,
          49.5471527
        ],
        [
          17.7323422,
          49.5470659
        ],
        [
          17.7322552,
          49.5470616
        ],
        [
          17.7322632,
          49.5469946
        ],
        [
          17.7323283,
          49.5469979
        ],
        [
          17.7323297,
          49.5469862
        ],
        [
          17.7325316,
          49.5469963
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281256",
  "properties": {
    "building": "yes",
    "building:material": "brick",
    "end_date": "1941",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1941",
    "start_date": "1830",
    "id": "way/198281256"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7325006,
          49.5476178
        ],
        [
          17.7325644,
          49.5476541
        ],
        [
          17.7325156,
          49.5476916
        ],
        [
          17.7324489,
          49.5476569
        ],
        [
          17.7325006,
          49.5476178
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281257",
  "properties": {
    "building": "yes",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281257"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7323751,
          49.5475555
        ],
        [
          17.7324482,
          49.5475918
        ],
        [
          17.7324062,
          49.5476265
        ],
        [
          17.7324008,
          49.5476238
        ],
        [
          17.7323347,
          49.5475906
        ],
        [
          17.7323751,
          49.5475555
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281258",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281258"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7325367,
          49.5475535
        ],
        [
          17.7325622,
          49.5475663
        ],
        [
          17.7325084,
          49.5476112
        ],
        [
          17.7325006,
          49.5476178
        ],
        [
          17.7324755,
          49.5476053
        ],
        [
          17.7325367,
          49.5475535
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281259",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "127",
    "addr:housenumber": "127",
    "addr:street": "Drahotuscher Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281259"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7324796,
          49.547467
        ],
        [
          17.7325799,
          49.5475168
        ],
        [
          17.7325367,
          49.5475535
        ],
        [
          17.7324755,
          49.5476053
        ],
        [
          17.7324482,
          49.5475918
        ],
        [
          17.7323751,
          49.5475555
        ],
        [
          17.7324356,
          49.5475042
        ],
        [
          17.7324796,
          49.547467
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281260",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "126",
    "addr:housenumber": "126",
    "addr:street": "Drahotuscher Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281260"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7325513,
          49.547369
        ],
        [
          17.7325898,
          49.5473835
        ],
        [
          17.7326515,
          49.5474067
        ],
        [
          17.7327109,
          49.5474314
        ],
        [
          17.7327685,
          49.5474482
        ],
        [
          17.7327422,
          49.5474898
        ],
        [
          17.7325059,
          49.5474119
        ],
        [
          17.7325513,
          49.547369
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281261",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "125",
    "addr:housenumber": "125",
    "addr:street": "Drahotuscher Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281261"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7326149,
          49.5472778
        ],
        [
          17.7326407,
          49.5472891
        ],
        [
          17.7327429,
          49.547325
        ],
        [
          17.7327031,
          49.5473605
        ],
        [
          17.7327177,
          49.5473724
        ],
        [
          17.7326923,
          49.5473917
        ],
        [
          17.7326734,
          49.5473851
        ],
        [
          17.7326515,
          49.5474067
        ],
        [
          17.7325898,
          49.5473835
        ],
        [
          17.7325513,
          49.547369
        ],
        [
          17.732527,
          49.5473535
        ],
        [
          17.7326149,
          49.5472778
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281262",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "124",
    "addr:housenumber": "124",
    "addr:street": "Drahotuscher Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281262"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7327973,
          49.5471139
        ],
        [
          17.7329645,
          49.5471728
        ],
        [
          17.7329307,
          49.5472127
        ],
        [
          17.7329222,
          49.5472229
        ],
        [
          17.7327552,
          49.5471648
        ],
        [
          17.7327973,
          49.5471139
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281263",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "123",
    "addr:housenumber": "123",
    "addr:street": "Drahotuscher Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281263"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7329199,
          49.5469877
        ],
        [
          17.7329873,
          49.5470191
        ],
        [
          17.7329462,
          49.5470563
        ],
        [
          17.7329702,
          49.5470674
        ],
        [
          17.732996,
          49.5470795
        ],
        [
          17.7329876,
          49.5470871
        ],
        [
          17.7329628,
          49.5471095
        ],
        [
          17.732916,
          49.5470876
        ],
        [
          17.7328875,
          49.5471134
        ],
        [
          17.732837,
          49.5470899
        ],
        [
          17.7328171,
          49.5470806
        ],
        [
          17.7329199,
          49.5469877
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281264",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "38",
    "addr:housenumber": "38",
    "addr:street": "Drahotuscher Gasse",
    "building": "house",
    "building:material": "brick",
    "denomination": "roman_catholic",
    "office": "parish",
    "religion": "christian",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281264"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7343551,
          49.5460932
        ],
        [
          17.7344872,
          49.5461169
        ],
        [
          17.7343891,
          49.5463375
        ],
        [
          17.7342609,
          49.5463128
        ],
        [
          17.7343551,
          49.5460932
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281265",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "37",
    "addr:housenumber": "37",
    "addr:street": "Drahotuscher Gasse",
    "amenity": "school",
    "building": "house",
    "building:material": "brick",
    "end_date": "1905",
    "name": "Volksschule",
    "source": "mza:d9",
    "source:amenity": "http://digi.archives.cz/da/permalink?xid=308e5eec-dd43-4c72-b288-6c63bd3ea3c5242986&scan=241#scan241",
    "source:end_date": "https://aleph.nkp.cz/F/?func=direct&doc_number=001041096&local_base=SKC",
    "start_date": "1830",
    "id": "way/198281265"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7337633,
          49.5460107
        ],
        [
          17.7338674,
          49.5460222
        ],
        [
          17.7338308,
          49.5462264
        ],
        [
          17.7337088,
          49.5462156
        ],
        [
          17.7337384,
          49.5461017
        ],
        [
          17.7337633,
          49.5460107
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281266",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "36",
    "addr:housenumber": "36",
    "addr:street": "Drahotuscher Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1905",
    "source": "mza:d9",
    "source:end_date": "https://aleph.nkp.cz/F/?func=direct&doc_number=001041096&local_base=SKC",
    "start_date": "1830",
    "id": "way/198281266"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.733755,
          49.5463344
        ],
        [
          17.733749,
          49.5464001
        ],
        [
          17.733564,
          49.5463969
        ],
        [
          17.733563,
          49.5463187
        ],
        [
          17.733756,
          49.5463169
        ],
        [
          17.733755,
          49.5463344
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281267",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "35",
    "addr:housenumber": "35",
    "addr:street": "Drahotuscher Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1905",
    "source": "mza:d9",
    "source:end_date": "https://aleph.nkp.cz/F/?func=direct&doc_number=001041096&local_base=SKC",
    "start_date": "1830",
    "id": "way/198281267"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7340649,
          49.5463426
        ],
        [
          17.7340579,
          49.5464514
        ],
        [
          17.7338264,
          49.5464452
        ],
        [
          17.7337462,
          49.546443
        ],
        [
          17.733749,
          49.5464001
        ],
        [
          17.733755,
          49.5463344
        ],
        [
          17.7338349,
          49.5463364
        ],
        [
          17.7338745,
          49.5463374
        ],
        [
          17.7340649,
          49.5463426
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281273",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281273"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7308142,
          49.5470635
        ],
        [
          17.7308684,
          49.5471653
        ],
        [
          17.730812,
          49.5471779
        ],
        [
          17.7307577,
          49.5470762
        ],
        [
          17.7308142,
          49.5470635
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281274",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281274"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7303095,
          49.5475584
        ],
        [
          17.7303245,
          49.5476348
        ],
        [
          17.7300741,
          49.5476602
        ],
        [
          17.7300578,
          49.5475838
        ],
        [
          17.7303095,
          49.5475584
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281275",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281275"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7307765,
          49.5474224
        ],
        [
          17.7308026,
          49.5474845
        ],
        [
          17.7305911,
          49.5475219
        ],
        [
          17.7305649,
          49.5474598
        ],
        [
          17.7307765,
          49.5474224
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281290",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281290"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7307153,
          49.5477808
        ],
        [
          17.7307308,
          49.5478286
        ],
        [
          17.7307422,
          49.5478636
        ],
        [
          17.730746,
          49.5478753
        ],
        [
          17.7305338,
          49.5479058
        ],
        [
          17.7305026,
          49.54781
        ],
        [
          17.7307153,
          49.5477808
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281291",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281291"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7308182,
          49.5478524
        ],
        [
          17.7308534,
          49.5479523
        ],
        [
          17.7307727,
          49.5479573
        ],
        [
          17.7307566,
          49.5479077
        ],
        [
          17.730746,
          49.5478753
        ],
        [
          17.7307422,
          49.5478636
        ],
        [
          17.7308182,
          49.5478524
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281292",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281292"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7308187,
          49.5480919
        ],
        [
          17.7308067,
          49.5480427
        ],
        [
          17.7309131,
          49.5480319
        ],
        [
          17.7309251,
          49.5480811
        ],
        [
          17.7308187,
          49.5480919
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281293",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281293"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7323889,
          49.548795
        ],
        [
          17.7323813,
          49.5488313
        ],
        [
          17.7322747,
          49.5488219
        ],
        [
          17.7322823,
          49.5487856
        ],
        [
          17.7323889,
          49.548795
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281294",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281294"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7323555,
          49.5489033
        ],
        [
          17.7323568,
          49.548931
        ],
        [
          17.7322981,
          49.5489315
        ],
        [
          17.7322983,
          49.5489402
        ],
        [
          17.7322574,
          49.5489409
        ],
        [
          17.7322557,
          49.5489052
        ],
        [
          17.7323555,
          49.5489033
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281316",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281316"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7310669,
          49.5487258
        ],
        [
          17.7310789,
          49.5487497
        ],
        [
          17.7309227,
          49.5487823
        ],
        [
          17.7309149,
          49.5487576
        ],
        [
          17.7310669,
          49.5487258
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281321",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281321"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7313562,
          49.5486058
        ],
        [
          17.7313862,
          49.5485995
        ],
        [
          17.731397,
          49.5486213
        ],
        [
          17.7314746,
          49.5486051
        ],
        [
          17.7314598,
          49.5485753
        ],
        [
          17.7314121,
          49.5485853
        ],
        [
          17.7313991,
          49.5485592
        ],
        [
          17.7314923,
          49.5485411
        ],
        [
          17.7316175,
          49.5485136
        ],
        [
          17.7316253,
          49.5485293
        ],
        [
          17.7316769,
          49.5485185
        ],
        [
          17.7317098,
          49.5485846
        ],
        [
          17.7316869,
          49.5485894
        ],
        [
          17.7317149,
          49.5486442
        ],
        [
          17.7313978,
          49.5486928
        ],
        [
          17.7313729,
          49.5486395
        ],
        [
          17.7313655,
          49.5486245
        ],
        [
          17.7313562,
          49.5486058
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281322",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281322"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7312752,
          49.5485349
        ],
        [
          17.7312958,
          49.5485805
        ],
        [
          17.7312182,
          49.5485966
        ],
        [
          17.7311828,
          49.5486039
        ],
        [
          17.7311608,
          49.5486085
        ],
        [
          17.7311372,
          49.548563
        ],
        [
          17.7312752,
          49.5485349
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281323",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281323"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7315667,
          49.5483505
        ],
        [
          17.7315849,
          49.5483855
        ],
        [
          17.7317305,
          49.548552
        ],
        [
          17.7317071,
          49.5485515
        ],
        [
          17.7316205,
          49.5484509
        ],
        [
          17.731585,
          49.5484361
        ],
        [
          17.7315591,
          49.5484194
        ],
        [
          17.7315411,
          49.5483954
        ],
        [
          17.7315254,
          49.5483594
        ],
        [
          17.7315667,
          49.5483505
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281339",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281339"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7307054,
          49.5487284
        ],
        [
          17.7307215,
          49.5487743
        ],
        [
          17.7307005,
          49.5487774
        ],
        [
          17.7306843,
          49.5487312
        ],
        [
          17.7307054,
          49.5487284
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281340",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281340"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7308002,
          49.5487157
        ],
        [
          17.7308962,
          49.5487001
        ],
        [
          17.7309042,
          49.548724
        ],
        [
          17.7309075,
          49.5487343
        ],
        [
          17.7309125,
          49.5487502
        ],
        [
          17.7307277,
          49.5487844
        ],
        [
          17.7307215,
          49.5487743
        ],
        [
          17.7307054,
          49.5487284
        ],
        [
          17.7308002,
          49.5487157
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281341",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281341"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7305039,
          49.5487663
        ],
        [
          17.7305093,
          49.5487905
        ],
        [
          17.7304791,
          49.5487949
        ],
        [
          17.7304684,
          49.5487641
        ],
        [
          17.7305039,
          49.5487663
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281342",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281342"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7306843,
          49.5487312
        ],
        [
          17.7307005,
          49.5487774
        ],
        [
          17.7307091,
          49.5487945
        ],
        [
          17.7305211,
          49.5488273
        ],
        [
          17.7305093,
          49.5487905
        ],
        [
          17.7305039,
          49.5487663
        ],
        [
          17.7306843,
          49.5487312
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281347",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281347"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.729613,
          49.5486073
        ],
        [
          17.729619,
          49.5486804
        ],
        [
          17.7293059,
          49.5486914
        ],
        [
          17.729301,
          49.5486182
        ],
        [
          17.729613,
          49.5486073
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281348",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "189",
    "addr:housenumber": "189",
    "addr:street": "Drahotuscher Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281348"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7292854,
          49.548382
        ],
        [
          17.7292901,
          49.5484539
        ],
        [
          17.7290935,
          49.548459
        ],
        [
          17.7290049,
          49.5484613
        ],
        [
          17.7289982,
          49.5483871
        ],
        [
          17.7292854,
          49.548382
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281349",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281349"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7299907,
          49.5485577
        ],
        [
          17.7300397,
          49.5485526
        ],
        [
          17.7300522,
          49.5485955
        ],
        [
          17.7300963,
          49.5485921
        ],
        [
          17.7301308,
          49.5486949
        ],
        [
          17.7301426,
          49.5487343
        ],
        [
          17.7301649,
          49.5488086
        ],
        [
          17.7301167,
          49.5488157
        ],
        [
          17.7300731,
          49.5487264
        ],
        [
          17.7300598,
          49.5486993
        ],
        [
          17.7299907,
          49.5485577
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281350",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281350"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.729231,
          49.5487401
        ],
        [
          17.7292755,
          49.5487403
        ],
        [
          17.7292751,
          49.5487913
        ],
        [
          17.7292333,
          49.5487912
        ],
        [
          17.7291141,
          49.5487908
        ],
        [
          17.7291145,
          49.5487398
        ],
        [
          17.729231,
          49.5487401
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281351",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281351"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7292921,
          49.548483
        ],
        [
          17.7293304,
          49.5484832
        ],
        [
          17.7293343,
          49.5485139
        ],
        [
          17.7293591,
          49.5485126
        ],
        [
          17.7293688,
          49.5485911
        ],
        [
          17.7292995,
          49.5485947
        ],
        [
          17.7292993,
          49.5485757
        ],
        [
          17.729293,
          49.5485132
        ],
        [
          17.7292921,
          49.548483
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281391",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "370",
    "addr:housenumber": "370",
    "addr:street": "Schlossgasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281391"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7353379,
          49.551022
        ],
        [
          17.7352471,
          49.5511375
        ],
        [
          17.735141,
          49.551094
        ],
        [
          17.7352848,
          49.5509742
        ],
        [
          17.7353379,
          49.551022
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281392",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281392"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7353824,
          49.5509514
        ],
        [
          17.7354294,
          49.5510129
        ],
        [
          17.7353379,
          49.551022
        ],
        [
          17.7352848,
          49.5509742
        ],
        [
          17.7353824,
          49.5509514
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281393",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281393"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7354703,
          49.550637
        ],
        [
          17.7354495,
          49.5506355
        ],
        [
          17.7353388,
          49.5506444
        ],
        [
          17.7353402,
          49.5506245
        ],
        [
          17.7354715,
          49.5506133
        ],
        [
          17.7354703,
          49.550637
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281394",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281394"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7354703,
          49.550637
        ],
        [
          17.7354326,
          49.550772
        ],
        [
          17.7354121,
          49.5507696
        ],
        [
          17.7354321,
          49.5507052
        ],
        [
          17.7354495,
          49.5506355
        ],
        [
          17.7354703,
          49.550637
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281395",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281395"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7354495,
          49.5506355
        ],
        [
          17.7354321,
          49.5507052
        ],
        [
          17.7353291,
          49.550693
        ],
        [
          17.7353176,
          49.5506452
        ],
        [
          17.7353388,
          49.5506444
        ],
        [
          17.7354495,
          49.5506355
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281396",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281396"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7354607,
          49.5508377
        ],
        [
          17.7353949,
          49.5508297
        ],
        [
          17.7354121,
          49.5507696
        ],
        [
          17.7354326,
          49.550772
        ],
        [
          17.7354779,
          49.5507775
        ],
        [
          17.7354705,
          49.5508035
        ],
        [
          17.7354607,
          49.5508377
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281397",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "369",
    "addr:housenumber": "369",
    "addr:street": "Schlossgasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281397"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7352848,
          49.5509742
        ],
        [
          17.7352411,
          49.5509263
        ],
        [
          17.7352083,
          49.5508402
        ],
        [
          17.73535,
          49.5508146
        ],
        [
          17.7353654,
          49.5508146
        ],
        [
          17.7354285,
          49.5509044
        ],
        [
          17.7354154,
          49.5509398
        ],
        [
          17.7353824,
          49.5509514
        ],
        [
          17.7352848,
          49.5509742
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281398",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "429",
    "addr:housenumber": "429",
    "addr:street": "Schlossgasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281398"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7353381,
          49.5507833
        ],
        [
          17.73535,
          49.5508146
        ],
        [
          17.7352083,
          49.5508402
        ],
        [
          17.7351877,
          49.5507911
        ],
        [
          17.7353381,
          49.5507833
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281399",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "116",
    "addr:housenumber": "116",
    "addr:street": "Schlossgasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281399"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7351681,
          49.550656
        ],
        [
          17.7353176,
          49.5506452
        ],
        [
          17.7353291,
          49.550693
        ],
        [
          17.7353381,
          49.5507833
        ],
        [
          17.7351877,
          49.5507911
        ],
        [
          17.7351681,
          49.550656
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281400",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "115",
    "addr:housenumber": "115",
    "addr:street": "Schlossgasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281400"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7351817,
          49.5505464
        ],
        [
          17.7354661,
          49.5505287
        ],
        [
          17.7354667,
          49.5505645
        ],
        [
          17.735348,
          49.550569
        ],
        [
          17.7353402,
          49.5506245
        ],
        [
          17.7353388,
          49.5506444
        ],
        [
          17.7353176,
          49.5506452
        ],
        [
          17.7351681,
          49.550656
        ],
        [
          17.7351817,
          49.5505464
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281401",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "114",
    "addr:housenumber": "114",
    "addr:street": "Schlossgasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281401"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7351781,
          49.5504894
        ],
        [
          17.7352674,
          49.5504818
        ],
        [
          17.7352971,
          49.5504792
        ],
        [
          17.7354313,
          49.5504677
        ],
        [
          17.7354653,
          49.5504648
        ],
        [
          17.7354661,
          49.5505287
        ],
        [
          17.7351817,
          49.5505464
        ],
        [
          17.7351781,
          49.5504894
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281412",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281412"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7355268,
          49.549181
        ],
        [
          17.7355311,
          49.5491554
        ],
        [
          17.7358057,
          49.5491566
        ],
        [
          17.7358039,
          49.5491849
        ],
        [
          17.7357526,
          49.5491827
        ],
        [
          17.7356088,
          49.5491816
        ],
        [
          17.7355268,
          49.549181
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281413",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281413"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7357526,
          49.5491827
        ],
        [
          17.7357554,
          49.5492054
        ],
        [
          17.7356104,
          49.5492062
        ],
        [
          17.7356088,
          49.5491816
        ],
        [
          17.7357526,
          49.5491827
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281414",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281414"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7355369,
          49.5493241
        ],
        [
          17.7354846,
          49.5493227
        ],
        [
          17.7354877,
          49.5492894
        ],
        [
          17.7355385,
          49.549289
        ],
        [
          17.7355369,
          49.5493241
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281415",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281415"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.735639,
          49.5493503
        ],
        [
          17.7356387,
          49.5493944
        ],
        [
          17.7355261,
          49.5493941
        ],
        [
          17.7355264,
          49.54935
        ],
        [
          17.735639,
          49.5493503
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281417",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281417"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.735666,
          49.5494268
        ],
        [
          17.7356728,
          49.5493509
        ],
        [
          17.7359319,
          49.5493633
        ],
        [
          17.7359216,
          49.5494344
        ],
        [
          17.7357028,
          49.5494279
        ],
        [
          17.735666,
          49.5494268
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281418",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281418"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7357845,
          49.5493293
        ],
        [
          17.7357881,
          49.5492894
        ],
        [
          17.7358396,
          49.5492906
        ],
        [
          17.7358359,
          49.5493313
        ],
        [
          17.7357845,
          49.5493293
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281419",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281419"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7358039,
          49.5491849
        ],
        [
          17.7359072,
          49.549183
        ],
        [
          17.7360055,
          49.5491806
        ],
        [
          17.7360337,
          49.5492567
        ],
        [
          17.7359926,
          49.5492584
        ],
        [
          17.7358427,
          49.5492553
        ],
        [
          17.7357913,
          49.5492534
        ],
        [
          17.73576,
          49.549253
        ],
        [
          17.7357554,
          49.5492054
        ],
        [
          17.7357526,
          49.5491827
        ],
        [
          17.7358039,
          49.5491849
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281420",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281420"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7358636,
          49.549061
        ],
        [
          17.7358868,
          49.5491021
        ],
        [
          17.7356783,
          49.5491124
        ],
        [
          17.7356783,
          49.549075
        ],
        [
          17.7358636,
          49.549061
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281421",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281421"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7356323,
          49.5490394
        ],
        [
          17.7356294,
          49.5490163
        ],
        [
          17.7358428,
          49.5490049
        ],
        [
          17.7358502,
          49.5490308
        ],
        [
          17.7357978,
          49.5490372
        ],
        [
          17.7357573,
          49.5490377
        ],
        [
          17.7356323,
          49.5490394
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281422",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281422"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7356323,
          49.5490394
        ],
        [
          17.7357573,
          49.5490377
        ],
        [
          17.7357978,
          49.5490372
        ],
        [
          17.7358012,
          49.5490575
        ],
        [
          17.7355782,
          49.5490598
        ],
        [
          17.735579,
          49.54904
        ],
        [
          17.7356323,
          49.5490394
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281423",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281423"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7356778,
          49.5488558
        ],
        [
          17.7356827,
          49.5488871
        ],
        [
          17.7356054,
          49.5488843
        ],
        [
          17.7356024,
          49.5488519
        ],
        [
          17.7356778,
          49.5488558
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281424",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281424"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7356572,
          49.5487409
        ],
        [
          17.7356873,
          49.5487418
        ],
        [
          17.7356827,
          49.5487685
        ],
        [
          17.73559,
          49.548763
        ],
        [
          17.7355948,
          49.5487357
        ],
        [
          17.7356572,
          49.5487409
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281425",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281425"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7355218,
          49.5487297
        ],
        [
          17.7355223,
          49.5486944
        ],
        [
          17.7355862,
          49.5487022
        ],
        [
          17.7355827,
          49.5487183
        ],
        [
          17.7356571,
          49.5487252
        ],
        [
          17.7356572,
          49.5487409
        ],
        [
          17.7355948,
          49.5487357
        ],
        [
          17.7355437,
          49.5487318
        ],
        [
          17.7355218,
          49.5487297
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281426",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281426"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7355236,
          49.5486095
        ],
        [
          17.7355632,
          49.5486102
        ],
        [
          17.7355916,
          49.5486106
        ],
        [
          17.7355907,
          49.5486339
        ],
        [
          17.735572,
          49.5486336
        ],
        [
          17.7355723,
          49.5486259
        ],
        [
          17.735523,
          49.5486251
        ],
        [
          17.7355236,
          49.5486095
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281427",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281427"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7357758,
          49.5485387
        ],
        [
          17.73567,
          49.5485296
        ],
        [
          17.7356796,
          49.5484823
        ],
        [
          17.7357854,
          49.5484914
        ],
        [
          17.7357758,
          49.5485387
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281428",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281428"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7355668,
          49.5483738
        ],
        [
          17.7356582,
          49.5483821
        ],
        [
          17.7356526,
          49.5484083
        ],
        [
          17.7355612,
          49.5484001
        ],
        [
          17.7355668,
          49.5483738
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281429",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281429"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7357878,
          49.5482528
        ],
        [
          17.735737,
          49.5482483
        ],
        [
          17.7357425,
          49.5482131
        ],
        [
          17.7356776,
          49.5482073
        ],
        [
          17.7356812,
          49.5481843
        ],
        [
          17.7357456,
          49.5481917
        ],
        [
          17.7358012,
          49.5481964
        ],
        [
          17.7357878,
          49.5482528
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281430",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281430"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7356296,
          49.5481579
        ],
        [
          17.7357009,
          49.5481662
        ],
        [
          17.7357054,
          49.5481496
        ],
        [
          17.7357556,
          49.5481554
        ],
        [
          17.7357456,
          49.5481917
        ],
        [
          17.7356812,
          49.5481843
        ],
        [
          17.7356242,
          49.5481777
        ],
        [
          17.7356296,
          49.5481579
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281431",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281431"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7356562,
          49.5480539
        ],
        [
          17.735669,
          49.5479901
        ],
        [
          17.7357305,
          49.5479992
        ],
        [
          17.7357885,
          49.5480086
        ],
        [
          17.7358713,
          49.5480236
        ],
        [
          17.7359225,
          49.5480341
        ],
        [
          17.7359055,
          49.5480545
        ],
        [
          17.7357654,
          49.5480352
        ],
        [
          17.7357575,
          49.5480658
        ],
        [
          17.7356562,
          49.5480539
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281432",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1941",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1941",
    "start_date": "1830",
    "id": "way/198281432"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.735675,
          49.549564
        ],
        [
          17.7356731,
          49.5495914
        ],
        [
          17.7355418,
          49.5495876
        ],
        [
          17.7355437,
          49.5495601
        ],
        [
          17.735675,
          49.549564
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281433",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281433"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7355906,
          49.5496914
        ],
        [
          17.7355973,
          49.549653
        ],
        [
          17.7357674,
          49.5496683
        ],
        [
          17.7357469,
          49.5497073
        ],
        [
          17.7356937,
          49.5497012
        ],
        [
          17.7355906,
          49.5496914
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281434",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281434"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.735658,
          49.5497763
        ],
        [
          17.7355693,
          49.5497678
        ],
        [
          17.7355759,
          49.5497423
        ],
        [
          17.7356701,
          49.549751
        ],
        [
          17.735658,
          49.5497763
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281435",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281435"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7356208,
          49.5498546
        ],
        [
          17.7356353,
          49.549824
        ],
        [
          17.735658,
          49.5497763
        ],
        [
          17.7357656,
          49.5497894
        ],
        [
          17.735717,
          49.5498662
        ],
        [
          17.7356208,
          49.5498546
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281436",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281436"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7355211,
          49.5498137
        ],
        [
          17.7356353,
          49.549824
        ],
        [
          17.7356208,
          49.5498546
        ],
        [
          17.7355169,
          49.5498397
        ],
        [
          17.7355211,
          49.5498137
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281437",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281437"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7356568,
          49.5499448
        ],
        [
          17.735731,
          49.5499606
        ],
        [
          17.7357084,
          49.5499994
        ],
        [
          17.7356302,
          49.5499832
        ],
        [
          17.7356568,
          49.5499448
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281438",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281438"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7355836,
          49.5500503
        ],
        [
          17.7356533,
          49.5500683
        ],
        [
          17.7356283,
          49.5501152
        ],
        [
          17.7355555,
          49.5501005
        ],
        [
          17.7355836,
          49.5500503
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281439",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281439"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7355137,
          49.5501632
        ],
        [
          17.7355406,
          49.5501302
        ],
        [
          17.7356073,
          49.5501497
        ],
        [
          17.7355882,
          49.5501708
        ],
        [
          17.7355751,
          49.5501854
        ],
        [
          17.7355137,
          49.5501632
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281440",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281440"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.735401,
          49.5500987
        ],
        [
          17.7354103,
          49.550075
        ],
        [
          17.7355555,
          49.5501005
        ],
        [
          17.7356283,
          49.5501152
        ],
        [
          17.7356073,
          49.5501497
        ],
        [
          17.7355406,
          49.5501302
        ],
        [
          17.735401,
          49.5500987
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281442",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281442"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7357305,
          49.5479992
        ],
        [
          17.7357407,
          49.5479661
        ],
        [
          17.7358003,
          49.5479761
        ],
        [
          17.7357885,
          49.5480086
        ],
        [
          17.7357305,
          49.5479992
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281443",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281443"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7357042,
          49.547938
        ],
        [
          17.7357128,
          49.5479174
        ],
        [
          17.7359081,
          49.5479476
        ],
        [
          17.7359801,
          49.5479623
        ],
        [
          17.7359586,
          49.5480067
        ],
        [
          17.7359433,
          49.5480383
        ],
        [
          17.7359225,
          49.5480341
        ],
        [
          17.7358713,
          49.5480236
        ],
        [
          17.7358964,
          49.5479717
        ],
        [
          17.7357042,
          49.547938
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281444",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281444"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.735635,
          49.5481205
        ],
        [
          17.7356562,
          49.5480539
        ],
        [
          17.7357575,
          49.5480658
        ],
        [
          17.7357438,
          49.5481313
        ],
        [
          17.735635,
          49.5481205
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281445",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281445"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7357593,
          49.5486205
        ],
        [
          17.7357408,
          49.5487411
        ],
        [
          17.7356873,
          49.5487418
        ],
        [
          17.7356572,
          49.5487409
        ],
        [
          17.7356571,
          49.5487252
        ],
        [
          17.7356648,
          49.5486457
        ],
        [
          17.7355888,
          49.5486427
        ],
        [
          17.7355907,
          49.5486339
        ],
        [
          17.7355916,
          49.5486106
        ],
        [
          17.7356199,
          49.5486123
        ],
        [
          17.7357593,
          49.5486205
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281446",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281446"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7356778,
          49.5488558
        ],
        [
          17.7357896,
          49.5488544
        ],
        [
          17.7358225,
          49.5489532
        ],
        [
          17.7357406,
          49.548958
        ],
        [
          17.7356943,
          49.5489607
        ],
        [
          17.7356827,
          49.5488871
        ],
        [
          17.7356778,
          49.5488558
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281447",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281447"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.735658,
          49.5497763
        ],
        [
          17.7356701,
          49.549751
        ],
        [
          17.7356809,
          49.5497283
        ],
        [
          17.7356937,
          49.5497012
        ],
        [
          17.7357469,
          49.5497073
        ],
        [
          17.7358083,
          49.5497142
        ],
        [
          17.7357656,
          49.5497894
        ],
        [
          17.735658,
          49.5497763
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281448",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1941",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1941",
    "start_date": "1830",
    "id": "way/198281448"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7357134,
          49.5496417
        ],
        [
          17.7357363,
          49.549568
        ],
        [
          17.7358769,
          49.549576
        ],
        [
          17.735838,
          49.5496527
        ],
        [
          17.7357803,
          49.5496476
        ],
        [
          17.7357134,
          49.5496417
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281449",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281449"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7355553,
          49.5496896
        ],
        [
          17.7355906,
          49.5496914
        ],
        [
          17.7356937,
          49.5497012
        ],
        [
          17.7356809,
          49.5497283
        ],
        [
          17.7355496,
          49.54972
        ],
        [
          17.7355553,
          49.5496896
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281450",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281450"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7354468,
          49.5497979
        ],
        [
          17.7355228,
          49.5498031
        ],
        [
          17.7355211,
          49.5498137
        ],
        [
          17.7355169,
          49.5498397
        ],
        [
          17.7354405,
          49.5498333
        ],
        [
          17.7354468,
          49.5497979
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281451",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281451"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7355004,
          49.5502683
        ],
        [
          17.735533,
          49.5502891
        ],
        [
          17.7355381,
          49.550308
        ],
        [
          17.7355337,
          49.5503231
        ],
        [
          17.7355189,
          49.5503383
        ],
        [
          17.7354968,
          49.5503481
        ],
        [
          17.7354668,
          49.5503515
        ],
        [
          17.7355004,
          49.5502683
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281456",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281456"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7344643,
          49.5465366
        ],
        [
          17.7344139,
          49.5465358
        ],
        [
          17.7344154,
          49.5465055
        ],
        [
          17.7344646,
          49.5465042
        ],
        [
          17.7344643,
          49.5465366
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281457",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281457"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7344619,
          49.5465738
        ],
        [
          17.7344643,
          49.5465366
        ],
        [
          17.7345175,
          49.5465381
        ],
        [
          17.7345151,
          49.5465752
        ],
        [
          17.7344619,
          49.5465738
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281458",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281458"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7345915,
          49.5466347
        ],
        [
          17.7345922,
          49.5466511
        ],
        [
          17.7345905,
          49.5466821
        ],
        [
          17.7345503,
          49.5466816
        ],
        [
          17.7345512,
          49.5466342
        ],
        [
          17.7345915,
          49.5466347
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281459",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281459"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.734715,
          49.5466378
        ],
        [
          17.7346992,
          49.5466538
        ],
        [
          17.7345922,
          49.5466511
        ],
        [
          17.7345915,
          49.5466347
        ],
        [
          17.734715,
          49.5466378
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281460",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281460"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7347162,
          49.546686
        ],
        [
          17.7347179,
          49.546654
        ],
        [
          17.7347609,
          49.5466536
        ],
        [
          17.7347595,
          49.546687
        ],
        [
          17.7347162,
          49.546686
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281461",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281461"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7345598,
          49.5467315
        ],
        [
          17.7345606,
          49.546705
        ],
        [
          17.7345893,
          49.5467056
        ],
        [
          17.7345905,
          49.5466821
        ],
        [
          17.7345922,
          49.5466511
        ],
        [
          17.7346992,
          49.5466538
        ],
        [
          17.7347179,
          49.546654
        ],
        [
          17.7347162,
          49.546686
        ],
        [
          17.7347152,
          49.5467453
        ],
        [
          17.7347095,
          49.5468112
        ],
        [
          17.7346529,
          49.54681
        ],
        [
          17.7346558,
          49.5467333
        ],
        [
          17.7345979,
          49.5467324
        ],
        [
          17.7345598,
          49.5467315
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281462",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281462"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7347057,
          49.5468822
        ],
        [
          17.7346527,
          49.546881
        ],
        [
          17.7346511,
          49.5468558
        ],
        [
          17.7346529,
          49.54681
        ],
        [
          17.7347095,
          49.5468112
        ],
        [
          17.7347057,
          49.5468822
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281463",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281463"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7345794,
          49.5469987
        ],
        [
          17.7345874,
          49.5469439
        ],
        [
          17.7345905,
          49.546931
        ],
        [
          17.7346265,
          49.5469319
        ],
        [
          17.7346054,
          49.5470303
        ],
        [
          17.7345754,
          49.5470286
        ],
        [
          17.7345794,
          49.5469987
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281464",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281464"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7350945,
          49.5468952
        ],
        [
          17.7351233,
          49.5468993
        ],
        [
          17.7351084,
          49.5469366
        ],
        [
          17.735084,
          49.5469331
        ],
        [
          17.7350945,
          49.5468952
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281465",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281465"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7351999,
          49.5468669
        ],
        [
          17.735286,
          49.5468868
        ],
        [
          17.7354558,
          49.5469261
        ],
        [
          17.7354189,
          49.5470454
        ],
        [
          17.7352569,
          49.5470254
        ],
        [
          17.7351206,
          49.5470086
        ],
        [
          17.7351336,
          49.5469419
        ],
        [
          17.7351506,
          49.5469471
        ],
        [
          17.7351846,
          49.5468966
        ],
        [
          17.7351999,
          49.5468669
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281466",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281466"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7349006,
          49.5467861
        ],
        [
          17.7349554,
          49.5467935
        ],
        [
          17.7349539,
          49.5468085
        ],
        [
          17.7350144,
          49.5468152
        ],
        [
          17.7350082,
          49.546839
        ],
        [
          17.7348963,
          49.5468265
        ],
        [
          17.7349006,
          49.5467861
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281467",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281467"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7349006,
          49.5467861
        ],
        [
          17.7348963,
          49.5468265
        ],
        [
          17.7348829,
          49.5468791
        ],
        [
          17.7347975,
          49.5468732
        ],
        [
          17.734807,
          49.5467688
        ],
        [
          17.7349006,
          49.5467861
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281468",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281468"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7350139,
          49.5469815
        ],
        [
          17.7350242,
          49.5469247
        ],
        [
          17.7350363,
          49.5468547
        ],
        [
          17.735103,
          49.5468627
        ],
        [
          17.7350945,
          49.5468952
        ],
        [
          17.735084,
          49.5469331
        ],
        [
          17.7350667,
          49.5469877
        ],
        [
          17.7350139,
          49.5469815
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281469",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281469"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.734933,
          49.5470436
        ],
        [
          17.734953,
          49.5469181
        ],
        [
          17.7350242,
          49.5469247
        ],
        [
          17.7350139,
          49.5469815
        ],
        [
          17.7350113,
          49.5469982
        ],
        [
          17.7350021,
          49.5470498
        ],
        [
          17.734933,
          49.5470436
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281470",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281470"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7347674,
          49.5470295
        ],
        [
          17.7347795,
          49.5469663
        ],
        [
          17.7347873,
          49.5469396
        ],
        [
          17.7348478,
          49.5469431
        ],
        [
          17.7348382,
          49.5470354
        ],
        [
          17.7347674,
          49.5470295
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281471",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281471"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7345905,
          49.546931
        ],
        [
          17.7345986,
          49.5468798
        ],
        [
          17.7346527,
          49.546881
        ],
        [
          17.7347057,
          49.5468822
        ],
        [
          17.7346831,
          49.5469355
        ],
        [
          17.7346265,
          49.5469319
        ],
        [
          17.7345905,
          49.546931
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281472",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "78",
    "addr:housenumber": "78",
    "addr:street": "Czernotiner Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281472"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7355614,
          49.5470349
        ],
        [
          17.7356176,
          49.5469258
        ],
        [
          17.7357694,
          49.5469617
        ],
        [
          17.7357548,
          49.5470027
        ],
        [
          17.7357329,
          49.5470639
        ],
        [
          17.7355614,
          49.5470349
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281474",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "80",
    "addr:housenumber": "80",
    "addr:street": "Czernotiner Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281474"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7354961,
          49.5472768
        ],
        [
          17.7355247,
          49.5471417
        ],
        [
          17.7357426,
          49.5471641
        ],
        [
          17.7357425,
          49.5472807
        ],
        [
          17.7354961,
          49.5472768
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281475",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "81",
    "addr:housenumber": "81",
    "addr:street": "Czernotiner Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281475"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7354815,
          49.5473225
        ],
        [
          17.7354961,
          49.5472768
        ],
        [
          17.7357425,
          49.5472807
        ],
        [
          17.7357322,
          49.5473324
        ],
        [
          17.735686,
          49.5473312
        ],
        [
          17.7354815,
          49.5473225
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281476",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "82",
    "addr:housenumber": "82",
    "addr:street": "Czernotiner Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281476"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7354593,
          49.5473938
        ],
        [
          17.7354815,
          49.5473225
        ],
        [
          17.735686,
          49.5473312
        ],
        [
          17.7356687,
          49.547402
        ],
        [
          17.7354593,
          49.5473938
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281477",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "77",
    "addr:housenumber": "77",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "source:start_date": "https://iispp.npu.cz/mis_public/searchDocument.htm?search=30893/8-433",
    "start_date": "1599",
    "wikidata": "Q31745777",
    "id": "way/198281477"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7351911,
          49.5473769
        ],
        [
          17.7352353,
          49.5471207
        ],
        [
          17.7353893,
          49.5471362
        ],
        [
          17.7353309,
          49.5473645
        ],
        [
          17.7353157,
          49.5473748
        ],
        [
          17.7352937,
          49.5473807
        ],
        [
          17.7351911,
          49.5473769
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281478",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "76",
    "addr:housenumber": "76",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "source:start_date": "https://iispp.npu.cz/mis_public/searchDocument.htm?search=30893/8-433",
    "start_date": "1599",
    "wikidata": "Q31745777",
    "id": "way/198281478"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7350558,
          49.5473749
        ],
        [
          17.735098,
          49.5471468
        ],
        [
          17.7351749,
          49.5471519
        ],
        [
          17.7351851,
          49.5471183
        ],
        [
          17.7352353,
          49.5471207
        ],
        [
          17.7351911,
          49.5473769
        ],
        [
          17.7350558,
          49.5473749
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281479",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "75",
    "addr:housenumber": "75",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "source:start_date": "https://iispp.npu.cz/mis_public/searchDocument.htm?search=35461/8-2775",
    "start_date": "1599",
    "wikidata": "Q33423360",
    "id": "way/198281479"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.734964,
          49.5473735
        ],
        [
          17.7349665,
          49.5473508
        ],
        [
          17.7349894,
          49.5471397
        ],
        [
          17.7350669,
          49.5471447
        ],
        [
          17.735098,
          49.5471468
        ],
        [
          17.7350558,
          49.5473749
        ],
        [
          17.7350167,
          49.5473743
        ],
        [
          17.734964,
          49.5473735
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281480",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "74",
    "addr:housenumber": "74",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281480"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.734868,
          49.5473721
        ],
        [
          17.7348669,
          49.5473494
        ],
        [
          17.7348553,
          49.5471121
        ],
        [
          17.7348545,
          49.5470962
        ],
        [
          17.7349937,
          49.5471005
        ],
        [
          17.7349894,
          49.5471397
        ],
        [
          17.7349665,
          49.5473508
        ],
        [
          17.734964,
          49.5473735
        ],
        [
          17.734868,
          49.5473721
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281481",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "73",
    "addr:housenumber": "73",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "source:start_date": "https://iispp.npu.cz/mis_public/searchDocument.htm?search=32664/8-2774",
    "start_date": "1599",
    "wikidata": "Q33423343",
    "id": "way/198281481"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7347499,
          49.5473704
        ],
        [
          17.7347508,
          49.5473477
        ],
        [
          17.73476,
          49.5471055
        ],
        [
          17.7348553,
          49.5471121
        ],
        [
          17.7348669,
          49.5473494
        ],
        [
          17.734868,
          49.5473721
        ],
        [
          17.7347499,
          49.5473704
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281482",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "72",
    "addr:housenumber": "72",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "source:start_date": "https://iispp.npu.cz/mis_public/searchDocument.htm?search=41797/8-2773",
    "start_date": "1599",
    "wikidata": "Q33425865",
    "id": "way/198281482"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7345495,
          49.5473675
        ],
        [
          17.73455,
          49.5473447
        ],
        [
          17.7345553,
          49.5471176
        ],
        [
          17.7345589,
          49.5470672
        ],
        [
          17.7346746,
          49.5470706
        ],
        [
          17.7346737,
          49.5471044
        ],
        [
          17.73476,
          49.5471055
        ],
        [
          17.7347508,
          49.5473477
        ],
        [
          17.7347499,
          49.5473704
        ],
        [
          17.7345495,
          49.5473675
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281483",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "71",
    "addr:housenumber": "71",
    "amenity": "townhall",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "source:start_date": "Moravský zemský archiv, D22, sig. 1325",
    "start_date": "1729",
    "wikidata": "Q31745521",
    "id": "way/198281483"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.734333,
          49.5474129
        ],
        [
          17.7343327,
          49.5473923
        ],
        [
          17.7343288,
          49.5471094
        ],
        [
          17.7343381,
          49.546946
        ],
        [
          17.7344874,
          49.5469455
        ],
        [
          17.7345874,
          49.5469439
        ],
        [
          17.7345794,
          49.5469987
        ],
        [
          17.734476,
          49.5470002
        ],
        [
          17.734472,
          49.5471157
        ],
        [
          17.7345553,
          49.5471176
        ],
        [
          17.73455,
          49.5473447
        ],
        [
          17.7345495,
          49.5473675
        ],
        [
          17.7345539,
          49.5474084
        ],
        [
          17.734333,
          49.5474129
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281484",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "67",
    "addr:housenumber": "67",
    "addr:street": "Rathausgasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281484"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7343419,
          49.5467012
        ],
        [
          17.7343439,
          49.5465948
        ],
        [
          17.734467,
          49.5465957
        ],
        [
          17.7345163,
          49.5465961
        ],
        [
          17.734516,
          49.5466138
        ],
        [
          17.7345131,
          49.5467039
        ],
        [
          17.7344881,
          49.5467023
        ],
        [
          17.7343419,
          49.5467012
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281485",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "68",
    "addr:housenumber": "68",
    "addr:street": "Rathausgasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281485"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.734341,
          49.5468079
        ],
        [
          17.7343419,
          49.5467012
        ],
        [
          17.7345131,
          49.5467039
        ],
        [
          17.7345606,
          49.546705
        ],
        [
          17.7345598,
          49.5467315
        ],
        [
          17.7345572,
          49.5468109
        ],
        [
          17.7344896,
          49.54681
        ],
        [
          17.734341,
          49.5468079
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281486",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "69",
    "addr:housenumber": "69",
    "addr:street": "Rathausgasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281486"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7343374,
          49.5468739
        ],
        [
          17.734341,
          49.5468079
        ],
        [
          17.7344896,
          49.54681
        ],
        [
          17.7344905,
          49.5468774
        ],
        [
          17.7343374,
          49.5468739
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281487",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "70",
    "addr:housenumber": "70",
    "addr:street": "Rathausgasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281487"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7343381,
          49.546946
        ],
        [
          17.7343374,
          49.5468739
        ],
        [
          17.7344905,
          49.5468774
        ],
        [
          17.7345394,
          49.5468785
        ],
        [
          17.7345391,
          49.5469153
        ],
        [
          17.7344871,
          49.546916
        ],
        [
          17.7344874,
          49.5469455
        ],
        [
          17.7343381,
          49.546946
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281488",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "225",
    "addr:housenumber": "225",
    "addr:street": "Czernotiner Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281488"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7356344,
          49.5456077
        ],
        [
          17.735685,
          49.5456208
        ],
        [
          17.7357191,
          49.5455663
        ],
        [
          17.7357357,
          49.5455399
        ],
        [
          17.7358369,
          49.5455661
        ],
        [
          17.7357666,
          49.5456803
        ],
        [
          17.7357175,
          49.5457607
        ],
        [
          17.7355648,
          49.5457214
        ],
        [
          17.7355855,
          49.5456875
        ],
        [
          17.7356344,
          49.5456077
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281492",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "47",
    "addr:housenumber": "47",
    "addr:street": "Czernotiner Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281492"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.735696,
          49.5463125
        ],
        [
          17.7356756,
          49.5463046
        ],
        [
          17.7356183,
          49.5462825
        ],
        [
          17.7356878,
          49.5461919
        ],
        [
          17.7357021,
          49.5461733
        ],
        [
          17.7357205,
          49.5461508
        ],
        [
          17.7358778,
          49.5462107
        ],
        [
          17.7358684,
          49.5462223
        ],
        [
          17.7358012,
          49.5463062
        ],
        [
          17.7357215,
          49.5462798
        ],
        [
          17.735696,
          49.5463125
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281498",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281498"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7356374,
          49.5463051
        ],
        [
          17.7356903,
          49.5463246
        ],
        [
          17.7356291,
          49.5463856
        ],
        [
          17.7356165,
          49.5463793
        ],
        [
          17.7355935,
          49.5463678
        ],
        [
          17.7355846,
          49.5463633
        ],
        [
          17.7356374,
          49.5463051
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281499",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281499"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7356233,
          49.5460301
        ],
        [
          17.7356406,
          49.5460107
        ],
        [
          17.7356758,
          49.5460239
        ],
        [
          17.7356975,
          49.5459995
        ],
        [
          17.7357325,
          49.5460129
        ],
        [
          17.7356992,
          49.5460585
        ],
        [
          17.7356233,
          49.5460301
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281500",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281500"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7355615,
          49.5460873
        ],
        [
          17.7356272,
          49.5461135
        ],
        [
          17.7356012,
          49.5461451
        ],
        [
          17.7355357,
          49.5461147
        ],
        [
          17.7355615,
          49.5460873
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281501",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281501"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7353788,
          49.546274
        ],
        [
          17.7354459,
          49.546301
        ],
        [
          17.7354211,
          49.5463294
        ],
        [
          17.7353546,
          49.5463019
        ],
        [
          17.7353788,
          49.546274
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281502",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281502"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7353237,
          49.5462486
        ],
        [
          17.735288,
          49.5462871
        ],
        [
          17.7352093,
          49.5462543
        ],
        [
          17.7352402,
          49.5462211
        ],
        [
          17.7353237,
          49.5462486
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281503",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281503"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7350204,
          49.5461419
        ],
        [
          17.7351606,
          49.5461802
        ],
        [
          17.7351228,
          49.5462192
        ],
        [
          17.7349792,
          49.5461863
        ],
        [
          17.7350204,
          49.5461419
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281504",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281504"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7348241,
          49.546106
        ],
        [
          17.7350204,
          49.5461419
        ],
        [
          17.7349792,
          49.5461863
        ],
        [
          17.7347957,
          49.5461414
        ],
        [
          17.7348241,
          49.546106
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281505",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281505"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7345467,
          49.5463419
        ],
        [
          17.7344602,
          49.5463341
        ],
        [
          17.7344696,
          49.5463036
        ],
        [
          17.7345678,
          49.5463101
        ],
        [
          17.7345467,
          49.5463419
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281507",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "59",
    "addr:housenumber": "59",
    "addr:street": "Czernotiner Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281507"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7356606,
          49.5464025
        ],
        [
          17.7357791,
          49.5464567
        ],
        [
          17.7357352,
          49.5465013
        ],
        [
          17.7356175,
          49.5464478
        ],
        [
          17.7356606,
          49.5464025
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281508",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281508"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7354411,
          49.546384
        ],
        [
          17.7354084,
          49.5464147
        ],
        [
          17.7353608,
          49.5463967
        ],
        [
          17.7353955,
          49.5463581
        ],
        [
          17.7354164,
          49.546366
        ],
        [
          17.7354411,
          49.546384
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281509",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281509"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7355362,
          49.5463442
        ],
        [
          17.7355846,
          49.5463633
        ],
        [
          17.7355935,
          49.5463678
        ],
        [
          17.7355043,
          49.5464507
        ],
        [
          17.7354539,
          49.5464349
        ],
        [
          17.7354925,
          49.5463977
        ],
        [
          17.7355362,
          49.5463442
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281510",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281510"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7354652,
          49.5463124
        ],
        [
          17.7355194,
          49.5463361
        ],
        [
          17.7355362,
          49.5463442
        ],
        [
          17.7354925,
          49.5463977
        ],
        [
          17.7354411,
          49.546384
        ],
        [
          17.7354164,
          49.546366
        ],
        [
          17.7354652,
          49.5463124
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281511",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1905",
    "source": "mza:d9",
    "source:end_date": "http://historie.hranet.cz/bartovsky1/priloha1.pdf",
    "start_date": "1830",
    "id": "way/198281511"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7345378,
          49.5460527
        ],
        [
          17.7347271,
          49.546087
        ],
        [
          17.7348241,
          49.546106
        ],
        [
          17.7347957,
          49.5461414
        ],
        [
          17.7347359,
          49.5462246
        ],
        [
          17.7346443,
          49.546343
        ],
        [
          17.7346372,
          49.5463664
        ],
        [
          17.7345467,
          49.5463419
        ],
        [
          17.7345678,
          49.5463101
        ],
        [
          17.7346922,
          49.546134
        ],
        [
          17.7345152,
          49.5460905
        ],
        [
          17.7345378,
          49.5460527
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281512",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "39",
    "addr:housenumber": "39",
    "addr:street": "Pfarrgasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1851",
    "source": "mza:d9",
    "source:end_date": "https://iispp.npu.cz/mis_public/searchDocument.htm?search=33901/8-2804",
    "start_date": "1830",
    "id": "way/198281512"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7348201,
          49.5464005
        ],
        [
          17.7346688,
          49.546351
        ],
        [
          17.7347259,
          49.5462739
        ],
        [
          17.7347505,
          49.5462816
        ],
        [
          17.7347932,
          49.5462239
        ],
        [
          17.7348687,
          49.5462475
        ],
        [
          17.734837,
          49.5462903
        ],
        [
          17.7348962,
          49.5463089
        ],
        [
          17.7348201,
          49.5464005
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281513",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "40",
    "addr:housenumber": "40",
    "addr:street": "Pfarrgasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281513"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7349604,
          49.5464495
        ],
        [
          17.7348201,
          49.5464005
        ],
        [
          17.7348962,
          49.5463089
        ],
        [
          17.7349115,
          49.5462904
        ],
        [
          17.7349893,
          49.5463175
        ],
        [
          17.7349702,
          49.5463406
        ],
        [
          17.7350327,
          49.5463624
        ],
        [
          17.7349604,
          49.5464495
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281514",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "41",
    "addr:housenumber": "41",
    "addr:street": "Pfarrgasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281514"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7350791,
          49.5465057
        ],
        [
          17.7349604,
          49.5464495
        ],
        [
          17.7350327,
          49.5463624
        ],
        [
          17.7351619,
          49.5464119
        ],
        [
          17.7350791,
          49.5465057
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281515",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "42",
    "addr:housenumber": "42",
    "addr:street": "Pfarrgasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1932",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281515"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7352081,
          49.546559
        ],
        [
          17.7350791,
          49.5465057
        ],
        [
          17.7351619,
          49.5464119
        ],
        [
          17.7351721,
          49.5464003
        ],
        [
          17.7352591,
          49.5464358
        ],
        [
          17.7352059,
          49.5464824
        ],
        [
          17.7352603,
          49.5465065
        ],
        [
          17.7352081,
          49.546559
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281516",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "43",
    "addr:housenumber": "43",
    "addr:street": "Pfarrgasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281516"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7352883,
          49.5466144
        ],
        [
          17.7351934,
          49.5465737
        ],
        [
          17.7352002,
          49.5465669
        ],
        [
          17.7352081,
          49.546559
        ],
        [
          17.7352603,
          49.5465065
        ],
        [
          17.73532,
          49.5464467
        ],
        [
          17.7353623,
          49.5464645
        ],
        [
          17.7353441,
          49.5464827
        ],
        [
          17.7353999,
          49.5465034
        ],
        [
          17.7352953,
          49.5466074
        ],
        [
          17.7352883,
          49.5466144
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281517",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "44",
    "addr:housenumber": "44",
    "addr:street": "Pfarrgasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281517"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7353962,
          49.5466582
        ],
        [
          17.7352883,
          49.5466144
        ],
        [
          17.7352953,
          49.5466074
        ],
        [
          17.7353999,
          49.5465034
        ],
        [
          17.7354516,
          49.5465253
        ],
        [
          17.7354782,
          49.5464988
        ],
        [
          17.7355073,
          49.5465112
        ],
        [
          17.7356291,
          49.5463856
        ],
        [
          17.7356606,
          49.5464025
        ],
        [
          17.7356175,
          49.5464478
        ],
        [
          17.7355642,
          49.5464992
        ],
        [
          17.7354034,
          49.5466514
        ],
        [
          17.7353962,
          49.5466582
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281518",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "45",
    "addr:housenumber": "45",
    "addr:street": "Pfarrgasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281518"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7355177,
          49.5467252
        ],
        [
          17.7353869,
          49.546667
        ],
        [
          17.7353962,
          49.5466582
        ],
        [
          17.7354034,
          49.5466514
        ],
        [
          17.7355642,
          49.5464992
        ],
        [
          17.735695,
          49.5465573
        ],
        [
          17.7355367,
          49.5467072
        ],
        [
          17.7355177,
          49.5467252
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281519",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281519"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7360646,
          49.5499965
        ],
        [
          17.7360852,
          49.5499548
        ],
        [
          17.7362347,
          49.5499812
        ],
        [
          17.7362683,
          49.5499866
        ],
        [
          17.7362537,
          49.5500256
        ],
        [
          17.7362301,
          49.5500219
        ],
        [
          17.7361193,
          49.5500049
        ],
        [
          17.7360646,
          49.5499965
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281520",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281520"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7357579,
          49.5502259
        ],
        [
          17.7358741,
          49.550248
        ],
        [
          17.7358509,
          49.5502994
        ],
        [
          17.7357346,
          49.5502774
        ],
        [
          17.7357579,
          49.5502259
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281524",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "378",
    "addr:housenumber": "378",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281524"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7361212,
          49.5504708
        ],
        [
          17.7360622,
          49.5506044
        ],
        [
          17.7360101,
          49.5505933
        ],
        [
          17.7359468,
          49.5505797
        ],
        [
          17.7359346,
          49.5505776
        ],
        [
          17.7359561,
          49.5505338
        ],
        [
          17.735989,
          49.5505406
        ],
        [
          17.7360322,
          49.5504524
        ],
        [
          17.7361212,
          49.5504708
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281525",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "377",
    "addr:housenumber": "377",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281525"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7360189,
          49.5506895
        ],
        [
          17.7359488,
          49.5506745
        ],
        [
          17.7359035,
          49.5506648
        ],
        [
          17.7359468,
          49.5505797
        ],
        [
          17.7360101,
          49.5505933
        ],
        [
          17.7359928,
          49.5506273
        ],
        [
          17.7360449,
          49.5506385
        ],
        [
          17.7360189,
          49.5506895
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281526",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "376",
    "addr:housenumber": "376",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281526"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7359701,
          49.5507823
        ],
        [
          17.7358704,
          49.5507584
        ],
        [
          17.7358995,
          49.5507179
        ],
        [
          17.7358739,
          49.5507117
        ],
        [
          17.7358902,
          49.5506837
        ],
        [
          17.7359368,
          49.5506951
        ],
        [
          17.7359488,
          49.5506745
        ],
        [
          17.7360189,
          49.5506895
        ],
        [
          17.7359701,
          49.5507823
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281527",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "375",
    "addr:housenumber": "375",
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281527"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7358805,
          49.5508975
        ],
        [
          17.7357941,
          49.5508757
        ],
        [
          17.7358216,
          49.5508274
        ],
        [
          17.735777,
          49.5508167
        ],
        [
          17.7358012,
          49.5507743
        ],
        [
          17.7358541,
          49.550787
        ],
        [
          17.7358704,
          49.5507584
        ],
        [
          17.7359701,
          49.5507823
        ],
        [
          17.7358805,
          49.5508975
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281528",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "278",
    "addr:housenumber": "278",
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281528"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7380906,
          49.549028
        ],
        [
          17.7382892,
          49.549092
        ],
        [
          17.7381775,
          49.549238
        ],
        [
          17.7381139,
          49.5492176
        ],
        [
          17.7381464,
          49.5491752
        ],
        [
          17.7381248,
          49.5491682
        ],
        [
          17.7380725,
          49.5491513
        ],
        [
          17.7380965,
          49.5491199
        ],
        [
          17.7380354,
          49.5491002
        ],
        [
          17.7380906,
          49.549028
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281569",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281569"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7393667,
          49.5488497
        ],
        [
          17.739319,
          49.5488385
        ],
        [
          17.7393416,
          49.548798
        ],
        [
          17.7393893,
          49.5488092
        ],
        [
          17.7393667,
          49.5488497
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281571",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281571"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7372815,
          49.5501869
        ],
        [
          17.7372475,
          49.550255
        ],
        [
          17.7370655,
          49.5502167
        ],
        [
          17.7370995,
          49.5501486
        ],
        [
          17.7371275,
          49.5501545
        ],
        [
          17.7372815,
          49.5501869
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281572",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281572"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7371807,
          49.5482921
        ],
        [
          17.7371989,
          49.5482593
        ],
        [
          17.7373037,
          49.5482836
        ],
        [
          17.7372856,
          49.5483165
        ],
        [
          17.7371807,
          49.5482921
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281573",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281573"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7370241,
          49.5481242
        ],
        [
          17.7370434,
          49.5480886
        ],
        [
          17.7371953,
          49.5481231
        ],
        [
          17.7371761,
          49.5481588
        ],
        [
          17.7371185,
          49.5481457
        ],
        [
          17.7370241,
          49.5481242
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281583",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281583"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7375167,
          49.547606
        ],
        [
          17.7375327,
          49.547561
        ],
        [
          17.737569,
          49.5475665
        ],
        [
          17.7375527,
          49.5476115
        ],
        [
          17.7375167,
          49.547606
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281584",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281584"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7374492,
          49.5475447
        ],
        [
          17.7374629,
          49.547506
        ],
        [
          17.7375477,
          49.5475187
        ],
        [
          17.7375327,
          49.547561
        ],
        [
          17.7375167,
          49.547606
        ],
        [
          17.7374887,
          49.5476848
        ],
        [
          17.7374817,
          49.5477043
        ],
        [
          17.737397,
          49.5476917
        ],
        [
          17.7374039,
          49.5476721
        ],
        [
          17.7374492,
          49.5475447
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281585",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281585"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7377149,
          49.547596
        ],
        [
          17.7377067,
          49.5476183
        ],
        [
          17.7376424,
          49.5476084
        ],
        [
          17.7376642,
          49.547549
        ],
        [
          17.7377285,
          49.547559
        ],
        [
          17.7377149,
          49.547596
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281586",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281586"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7378061,
          49.547573
        ],
        [
          17.7378007,
          49.5475902
        ],
        [
          17.7377707,
          49.5475856
        ],
        [
          17.7377641,
          49.5476036
        ],
        [
          17.7377149,
          49.547596
        ],
        [
          17.7377285,
          49.547559
        ],
        [
          17.7378061,
          49.547573
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281587",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "436",
    "addr:housenumber": "436",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281587"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7378875,
          49.5475792
        ],
        [
          17.7378836,
          49.5475878
        ],
        [
          17.7378061,
          49.547573
        ],
        [
          17.73784,
          49.5474982
        ],
        [
          17.7376958,
          49.5474652
        ],
        [
          17.7377302,
          49.5473929
        ],
        [
          17.7379527,
          49.5474353
        ],
        [
          17.7378875,
          49.5475792
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281588",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "273",
    "addr:housenumber": "273",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281588"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7379663,
          49.5475971
        ],
        [
          17.7378875,
          49.5475792
        ],
        [
          17.7379527,
          49.5474353
        ],
        [
          17.7380331,
          49.5474554
        ],
        [
          17.7379785,
          49.5475739
        ],
        [
          17.7379663,
          49.5475971
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281589",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281589"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7381904,
          49.5474883
        ],
        [
          17.7381587,
          49.5475662
        ],
        [
          17.7381239,
          49.5475602
        ],
        [
          17.7380443,
          49.5475466
        ],
        [
          17.738076,
          49.5474687
        ],
        [
          17.7381904,
          49.5474883
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281590",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281590"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7385323,
          49.5476854
        ],
        [
          17.7385376,
          49.5476739
        ],
        [
          17.7386007,
          49.5476882
        ],
        [
          17.7385762,
          49.5477344
        ],
        [
          17.7384635,
          49.5477091
        ],
        [
          17.738482,
          49.5476743
        ],
        [
          17.7385323,
          49.5476854
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281591",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "271",
    "addr:housenumber": "271",
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281591"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7383988,
          49.5476557
        ],
        [
          17.7384517,
          49.5475564
        ],
        [
          17.738579,
          49.547585
        ],
        [
          17.7385376,
          49.5476739
        ],
        [
          17.7385323,
          49.5476854
        ],
        [
          17.738482,
          49.5476743
        ],
        [
          17.7383988,
          49.5476557
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281592",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "272",
    "addr:housenumber": "272",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281592"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7383988,
          49.5476557
        ],
        [
          17.7383527,
          49.5476475
        ],
        [
          17.7383039,
          49.5477339
        ],
        [
          17.7382509,
          49.5477213
        ],
        [
          17.7382723,
          49.5476835
        ],
        [
          17.7382374,
          49.5476752
        ],
        [
          17.7382717,
          49.5476144
        ],
        [
          17.73831,
          49.5476235
        ],
        [
          17.7383611,
          49.547533
        ],
        [
          17.7384517,
          49.5475564
        ],
        [
          17.7383988,
          49.5476557
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281593",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "275",
    "addr:housenumber": "275",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281593"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7369617,
          49.547812
        ],
        [
          17.7369929,
          49.5477548
        ],
        [
          17.7372193,
          49.5478069
        ],
        [
          17.7371855,
          49.5478635
        ],
        [
          17.737092,
          49.547842
        ],
        [
          17.7369617,
          49.547812
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281594",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "276",
    "addr:housenumber": "276",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281594"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7369597,
          49.5481095
        ],
        [
          17.7370241,
          49.5481242
        ],
        [
          17.7371185,
          49.5481457
        ],
        [
          17.7370937,
          49.5481916
        ],
        [
          17.7370418,
          49.5481798
        ],
        [
          17.7370129,
          49.5482332
        ],
        [
          17.736906,
          49.5482089
        ],
        [
          17.7369597,
          49.5481095
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281595",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281595"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7386165,
          49.5476096
        ],
        [
          17.7387789,
          49.5476378
        ],
        [
          17.7387439,
          49.5477222
        ],
        [
          17.7387099,
          49.5477175
        ],
        [
          17.7386707,
          49.5477066
        ],
        [
          17.7386778,
          49.5476894
        ],
        [
          17.7386325,
          49.5476815
        ],
        [
          17.7386409,
          49.5476611
        ],
        [
          17.7385983,
          49.5476538
        ],
        [
          17.7386165,
          49.5476096
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281596",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281596"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7401014,
          49.5475569
        ],
        [
          17.7401946,
          49.5475472
        ],
        [
          17.7402158,
          49.547633
        ],
        [
          17.7401227,
          49.5476427
        ],
        [
          17.7401014,
          49.5475569
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281597",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281597"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7402569,
          49.549621
        ],
        [
          17.7403531,
          49.5495671
        ],
        [
          17.7404222,
          49.549619
        ],
        [
          17.740326,
          49.5496729
        ],
        [
          17.7402569,
          49.549621
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281598",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281598"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7369903,
          49.549494
        ],
        [
          17.7370086,
          49.5494573
        ],
        [
          17.7370619,
          49.5494685
        ],
        [
          17.7370435,
          49.5495053
        ],
        [
          17.7370234,
          49.5495009
        ],
        [
          17.7369903,
          49.549494
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281599",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281599"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7367288,
          49.5497112
        ],
        [
          17.736742,
          49.5496815
        ],
        [
          17.7368171,
          49.5496956
        ],
        [
          17.7368023,
          49.5497288
        ],
        [
          17.7367272,
          49.5497147
        ],
        [
          17.7367288,
          49.5497112
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281600",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281600"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7365359,
          49.5499007
        ],
        [
          17.7366245,
          49.5499118
        ],
        [
          17.7365969,
          49.5499975
        ],
        [
          17.7365067,
          49.5499853
        ],
        [
          17.7365359,
          49.5499007
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281601",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281601"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7386648,
          49.5486485
        ],
        [
          17.7389328,
          49.5487072
        ],
        [
          17.738881,
          49.548812
        ],
        [
          17.7388158,
          49.5489459
        ],
        [
          17.7386624,
          49.5489183
        ],
        [
          17.7387466,
          49.5487598
        ],
        [
          17.7386212,
          49.5487295
        ],
        [
          17.7386648,
          49.5486485
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281602",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281602"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.738188,
          49.5485983
        ],
        [
          17.7383737,
          49.5486442
        ],
        [
          17.7382815,
          49.5487872
        ],
        [
          17.7383835,
          49.5488177
        ],
        [
          17.7383583,
          49.5488694
        ],
        [
          17.7382381,
          49.5488575
        ],
        [
          17.7380626,
          49.5488148
        ],
        [
          17.738188,
          49.5485983
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281603",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281603"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7394988,
          49.5476071
        ],
        [
          17.7395363,
          49.5476715
        ],
        [
          17.7393396,
          49.5477198
        ],
        [
          17.7393021,
          49.5476554
        ],
        [
          17.7394988,
          49.5476071
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281604",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281604"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7392291,
          49.5478815
        ],
        [
          17.7392972,
          49.5478704
        ],
        [
          17.7393222,
          49.547935
        ],
        [
          17.7392541,
          49.5479461
        ],
        [
          17.7392291,
          49.5478815
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281605",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281605"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7404996,
          49.5482402
        ],
        [
          17.7406623,
          49.5482862
        ],
        [
          17.7406202,
          49.5483489
        ],
        [
          17.7404575,
          49.5483029
        ],
        [
          17.7404996,
          49.5482402
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281606",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281606"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7367439,
          49.549875
        ],
        [
          17.736833,
          49.5498861
        ],
        [
          17.7368778,
          49.5498916
        ],
        [
          17.736863,
          49.5499415
        ],
        [
          17.7368182,
          49.5499359
        ],
        [
          17.7367292,
          49.5499248
        ],
        [
          17.7367439,
          49.549875
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281607",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281607"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7368983,
          49.5483999
        ],
        [
          17.7369238,
          49.5482345
        ],
        [
          17.7371807,
          49.5482921
        ],
        [
          17.7372856,
          49.5483165
        ],
        [
          17.7382234,
          49.5485373
        ],
        [
          17.7381979,
          49.5485813
        ],
        [
          17.7379066,
          49.548502
        ],
        [
          17.7378901,
          49.5485232
        ],
        [
          17.737036,
          49.548322
        ],
        [
          17.737007,
          49.5484102
        ],
        [
          17.7368983,
          49.5483999
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281608",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "277",
    "addr:housenumber": "277",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281608"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7368608,
          49.54862
        ],
        [
          17.7368849,
          49.5484538
        ],
        [
          17.7369762,
          49.5484616
        ],
        [
          17.73696,
          49.5485834
        ],
        [
          17.7377513,
          49.5487618
        ],
        [
          17.7377174,
          49.5488176
        ],
        [
          17.7368608,
          49.54862
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281609",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "279",
    "addr:housenumber": "279",
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281609"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7368841,
          49.548828
        ],
        [
          17.7372016,
          49.54888
        ],
        [
          17.73718,
          49.5489353
        ],
        [
          17.7368625,
          49.5488833
        ],
        [
          17.7368841,
          49.548828
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281610",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281610"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7409523,
          49.5483557
        ],
        [
          17.7411056,
          49.5484039
        ],
        [
          17.7410591,
          49.5484661
        ],
        [
          17.7409058,
          49.5484179
        ],
        [
          17.7409523,
          49.5483557
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281611",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281611"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7390866,
          49.5480572
        ],
        [
          17.7390066,
          49.5481786
        ],
        [
          17.7389498,
          49.5481629
        ],
        [
          17.7390299,
          49.5480415
        ],
        [
          17.7390866,
          49.5480572
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281612",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1905",
    "source": "mza:d9",
    "source:end_date": "http://historie.hranet.cz/bartovsky1/priloha1.pdf",
    "start_date": "1830",
    "id": "way/198281612"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7394509,
          49.548059
        ],
        [
          17.7394165,
          49.5481209
        ],
        [
          17.7394026,
          49.5481495
        ],
        [
          17.7391759,
          49.548082
        ],
        [
          17.7390866,
          49.5480572
        ],
        [
          17.7390299,
          49.5480415
        ],
        [
          17.739077,
          49.5479701
        ],
        [
          17.7392229,
          49.5480106
        ],
        [
          17.7393441,
          49.548034
        ],
        [
          17.7394509,
          49.548059
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281613",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281613"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.736803,
          49.5492288
        ],
        [
          17.7368739,
          49.5492362
        ],
        [
          17.7368395,
          49.5493089
        ],
        [
          17.736771,
          49.5492918
        ],
        [
          17.736803,
          49.5492288
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281614",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281614"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7371705,
          49.5487585
        ],
        [
          17.7372483,
          49.5487721
        ],
        [
          17.7372257,
          49.5488265
        ],
        [
          17.7371479,
          49.5488129
        ],
        [
          17.7371705,
          49.5487585
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281615",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281615"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7369446,
          49.5491055
        ],
        [
          17.7369825,
          49.5491097
        ],
        [
          17.737052,
          49.5491175
        ],
        [
          17.7370409,
          49.5491594
        ],
        [
          17.7369714,
          49.5491517
        ],
        [
          17.736965,
          49.5491761
        ],
        [
          17.7369271,
          49.5491719
        ],
        [
          17.7369446,
          49.5491055
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281616",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "280",
    "addr:housenumber": "280",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281616"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7368263,
          49.5491852
        ],
        [
          17.73685,
          49.549095
        ],
        [
          17.7369446,
          49.5491055
        ],
        [
          17.7369271,
          49.5491719
        ],
        [
          17.736965,
          49.5491761
        ],
        [
          17.7369587,
          49.5491999
        ],
        [
          17.7368263,
          49.5491852
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281617",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "281",
    "addr:housenumber": "281",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281617"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7367732,
          49.5494484
        ],
        [
          17.7368086,
          49.5493775
        ],
        [
          17.7368324,
          49.54933
        ],
        [
          17.7369349,
          49.5493516
        ],
        [
          17.7369201,
          49.5493812
        ],
        [
          17.7369658,
          49.5493908
        ],
        [
          17.7369486,
          49.5494252
        ],
        [
          17.7370174,
          49.5494397
        ],
        [
          17.7370086,
          49.5494573
        ],
        [
          17.7369903,
          49.549494
        ],
        [
          17.7367732,
          49.5494484
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281618",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "282",
    "addr:housenumber": "282",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281618"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7366926,
          49.5494315
        ],
        [
          17.7367732,
          49.5494484
        ],
        [
          17.7369903,
          49.549494
        ],
        [
          17.7370234,
          49.5495009
        ],
        [
          17.7369918,
          49.5495644
        ],
        [
          17.7369784,
          49.5495912
        ],
        [
          17.7368827,
          49.5495712
        ],
        [
          17.7368961,
          49.5495443
        ],
        [
          17.736661,
          49.549495
        ],
        [
          17.7366926,
          49.5494315
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281619",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "283",
    "addr:housenumber": "283",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281619"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7366441,
          49.5495416
        ],
        [
          17.7367426,
          49.54956
        ],
        [
          17.7367348,
          49.5495776
        ],
        [
          17.736784,
          49.5495868
        ],
        [
          17.736742,
          49.5496815
        ],
        [
          17.7367288,
          49.5497112
        ],
        [
          17.736679,
          49.5497019
        ],
        [
          17.7366876,
          49.5496826
        ],
        [
          17.7365897,
          49.5496643
        ],
        [
          17.7366441,
          49.5495416
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281620",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "284",
    "addr:housenumber": "284",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281620"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7365801,
          49.5497517
        ],
        [
          17.7367084,
          49.5497676
        ],
        [
          17.7367048,
          49.5497798
        ],
        [
          17.7367638,
          49.5497872
        ],
        [
          17.736745,
          49.5498507
        ],
        [
          17.7366937,
          49.5498443
        ],
        [
          17.7366868,
          49.5498678
        ],
        [
          17.736672,
          49.5499177
        ],
        [
          17.7366245,
          49.5499118
        ],
        [
          17.7365359,
          49.5499007
        ],
        [
          17.7365801,
          49.5497517
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281639",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "285",
    "addr:housenumber": "285",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281639"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7363534,
          49.5502109
        ],
        [
          17.7364438,
          49.5502236
        ],
        [
          17.7365151,
          49.5502336
        ],
        [
          17.7364835,
          49.5503282
        ],
        [
          17.7365379,
          49.5503359
        ],
        [
          17.7365206,
          49.5503877
        ],
        [
          17.7363045,
          49.5503574
        ],
        [
          17.7363534,
          49.5502109
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281640",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281640"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.736263,
          49.5508169
        ],
        [
          17.7363415,
          49.5508369
        ],
        [
          17.7363089,
          49.5508906
        ],
        [
          17.7362304,
          49.5508705
        ],
        [
          17.736263,
          49.5508169
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281641",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281641"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7363503,
          49.5509428
        ],
        [
          17.7365476,
          49.5509993
        ],
        [
          17.7365255,
          49.5510318
        ],
        [
          17.7363282,
          49.5509753
        ],
        [
          17.7363503,
          49.5509428
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281642",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "289",
    "addr:housenumber": "289",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281642"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7360469,
          49.5509081
        ],
        [
          17.7361252,
          49.5509331
        ],
        [
          17.7361127,
          49.5509495
        ],
        [
          17.7361496,
          49.5509613
        ],
        [
          17.7361234,
          49.5509959
        ],
        [
          17.736165,
          49.5510092
        ],
        [
          17.7361266,
          49.5510596
        ],
        [
          17.7359922,
          49.5510167
        ],
        [
          17.7359698,
          49.5510096
        ],
        [
          17.7360469,
          49.5509081
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281643",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "288",
    "addr:housenumber": "288",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281643"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7361423,
          49.550922
        ],
        [
          17.7361776,
          49.5508701
        ],
        [
          17.7363635,
          49.5509234
        ],
        [
          17.7363503,
          49.5509428
        ],
        [
          17.7363282,
          49.5509753
        ],
        [
          17.7361423,
          49.550922
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281644",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "287",
    "addr:housenumber": "287",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281644"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7361538,
          49.5507102
        ],
        [
          17.7363044,
          49.5507487
        ],
        [
          17.736263,
          49.5508169
        ],
        [
          17.7362304,
          49.5508705
        ],
        [
          17.7360798,
          49.550832
        ],
        [
          17.7361538,
          49.5507102
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281753",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281753"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7370073,
          49.5479221
        ],
        [
          17.7370434,
          49.5479311
        ],
        [
          17.73714,
          49.5479533
        ],
        [
          17.7371273,
          49.5479765
        ],
        [
          17.7370809,
          49.5479655
        ],
        [
          17.7369943,
          49.5479452
        ],
        [
          17.7370073,
          49.5479221
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281754",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281754"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7372513,
          49.5479277
        ],
        [
          17.7372142,
          49.5479189
        ],
        [
          17.7372386,
          49.5478757
        ],
        [
          17.7372751,
          49.5478841
        ],
        [
          17.7372513,
          49.5479277
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281755",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281755"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7372751,
          49.5478841
        ],
        [
          17.7373525,
          49.5478992
        ],
        [
          17.7372881,
          49.5480136
        ],
        [
          17.7372137,
          49.5479965
        ],
        [
          17.7372513,
          49.5479277
        ],
        [
          17.7372751,
          49.5478841
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281756",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281756"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7358293,
          49.5486774
        ],
        [
          17.7358726,
          49.5486726
        ],
        [
          17.7358862,
          49.5487278
        ],
        [
          17.7358409,
          49.5487373
        ],
        [
          17.7358293,
          49.5486774
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281757",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281757"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7363807,
          49.5484964
        ],
        [
          17.7364853,
          49.5484947
        ],
        [
          17.7364892,
          49.5485929
        ],
        [
          17.7364196,
          49.5485941
        ],
        [
          17.7364174,
          49.5485382
        ],
        [
          17.7363824,
          49.5485388
        ],
        [
          17.7363807,
          49.5484964
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281764",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281764"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7370073,
          49.5479221
        ],
        [
          17.7370295,
          49.5478876
        ],
        [
          17.7371627,
          49.5479195
        ],
        [
          17.73714,
          49.5479533
        ],
        [
          17.7370434,
          49.5479311
        ],
        [
          17.7370073,
          49.5479221
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281765",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281765"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7368699,
          49.5479799
        ],
        [
          17.7369009,
          49.5479232
        ],
        [
          17.7369943,
          49.5479452
        ],
        [
          17.7370809,
          49.5479655
        ],
        [
          17.7370418,
          49.5480195
        ],
        [
          17.7370004,
          49.5480099
        ],
        [
          17.7368699,
          49.5479799
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281766",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1905",
    "source": "mza:d9",
    "source:end_date": "http://historie.hranet.cz/bartovsky1/priloha1.pdf",
    "start_date": "1830",
    "id": "way/198281766"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7364778,
          49.5479523
        ],
        [
          17.7365527,
          49.5479615
        ],
        [
          17.7365395,
          49.5480065
        ],
        [
          17.7364646,
          49.5479972
        ],
        [
          17.7364778,
          49.5479523
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281767",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281767"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7359564,
          49.5489797
        ],
        [
          17.7359734,
          49.5489768
        ],
        [
          17.7359819,
          49.548976
        ],
        [
          17.7359905,
          49.548977
        ],
        [
          17.7359961,
          49.5489788
        ],
        [
          17.7360034,
          49.5489833
        ],
        [
          17.7360079,
          49.5489905
        ],
        [
          17.7360058,
          49.5490006
        ],
        [
          17.735999,
          49.5490065
        ],
        [
          17.7359867,
          49.5490103
        ],
        [
          17.7359678,
          49.5490149
        ],
        [
          17.7359562,
          49.5490163
        ],
        [
          17.7359472,
          49.5489813
        ],
        [
          17.7359564,
          49.5489797
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281768",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281768"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7365311,
          49.5489809
        ],
        [
          17.7365318,
          49.5491036
        ],
        [
          17.7364297,
          49.5491039
        ],
        [
          17.7364289,
          49.5489811
        ],
        [
          17.7365311,
          49.5489809
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281769",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281769"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7365302,
          49.5488287
        ],
        [
          17.7365311,
          49.5489809
        ],
        [
          17.7364289,
          49.5489811
        ],
        [
          17.7364287,
          49.5489445
        ],
        [
          17.7364106,
          49.5489446
        ],
        [
          17.7364101,
          49.5488597
        ],
        [
          17.7364299,
          49.5488596
        ],
        [
          17.7364297,
          49.5488289
        ],
        [
          17.7365302,
          49.5488287
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281770",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281770"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7359926,
          49.5492584
        ],
        [
          17.7360337,
          49.5492567
        ],
        [
          17.7360055,
          49.5491806
        ],
        [
          17.7359072,
          49.549183
        ],
        [
          17.735899,
          49.5491257
        ],
        [
          17.736017,
          49.549106
        ],
        [
          17.7361138,
          49.5490828
        ],
        [
          17.7361385,
          49.5491541
        ],
        [
          17.73623,
          49.5493702
        ],
        [
          17.7359955,
          49.5493389
        ],
        [
          17.7359926,
          49.5492584
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281771",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281771"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7358766,
          49.5484229
        ],
        [
          17.7358523,
          49.548419
        ],
        [
          17.7358644,
          49.5483663
        ],
        [
          17.7358841,
          49.548364
        ],
        [
          17.7358947,
          49.5483644
        ],
        [
          17.7359098,
          49.5483677
        ],
        [
          17.7359226,
          49.548374
        ],
        [
          17.7359316,
          49.5483826
        ],
        [
          17.735936,
          49.5483925
        ],
        [
          17.7359353,
          49.5484029
        ],
        [
          17.7359295,
          49.5484126
        ],
        [
          17.7359194,
          49.5484206
        ],
        [
          17.7359093,
          49.5484244
        ],
        [
          17.735893,
          49.5484255
        ],
        [
          17.7358766,
          49.5484229
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281772",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281772"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7362306,
          49.5477664
        ],
        [
          17.7362671,
          49.5476997
        ],
        [
          17.736289,
          49.5477057
        ],
        [
          17.7363045,
          49.5477161
        ],
        [
          17.7363126,
          49.5477297
        ],
        [
          17.7363117,
          49.5477442
        ],
        [
          17.7363022,
          49.5477573
        ],
        [
          17.7362855,
          49.547767
        ],
        [
          17.7362643,
          49.5477716
        ],
        [
          17.736242,
          49.5477705
        ],
        [
          17.7362306,
          49.5477664
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281773",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281773"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.735993,
          49.5477502
        ],
        [
          17.7360486,
          49.5476206
        ],
        [
          17.736169,
          49.5476408
        ],
        [
          17.7361,
          49.547768
        ],
        [
          17.735993,
          49.5477502
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281774",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281774"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.735966,
          49.5477439
        ],
        [
          17.735993,
          49.5477502
        ],
        [
          17.7361,
          49.547768
        ],
        [
          17.7360739,
          49.5478242
        ],
        [
          17.7359337,
          49.5477987
        ],
        [
          17.7359439,
          49.5477758
        ],
        [
          17.735966,
          49.5477439
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281775",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281775"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7360036,
          49.547885
        ],
        [
          17.7360148,
          49.5478516
        ],
        [
          17.7360531,
          49.547857
        ],
        [
          17.7360475,
          49.5478738
        ],
        [
          17.736042,
          49.5478904
        ],
        [
          17.7360036,
          49.547885
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281776",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281776"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7360077,
          49.5479946
        ],
        [
          17.7360883,
          49.5478918
        ],
        [
          17.7361511,
          49.5479101
        ],
        [
          17.7361613,
          49.5479124
        ],
        [
          17.7360832,
          49.5480167
        ],
        [
          17.7360077,
          49.5479946
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281777",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281777"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7358831,
          49.548147
        ],
        [
          17.7358206,
          49.54814
        ],
        [
          17.7357834,
          49.5481366
        ],
        [
          17.7357952,
          49.548103
        ],
        [
          17.7358917,
          49.548115
        ],
        [
          17.7358831,
          49.548147
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281778",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281778"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7358012,
          49.5481964
        ],
        [
          17.7358686,
          49.5482032
        ],
        [
          17.7358552,
          49.5482596
        ],
        [
          17.7358409,
          49.5482582
        ],
        [
          17.7357878,
          49.5482528
        ],
        [
          17.7358012,
          49.5481964
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281779",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281779"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7358012,
          49.5481964
        ],
        [
          17.7358206,
          49.54814
        ],
        [
          17.7358831,
          49.548147
        ],
        [
          17.7359131,
          49.5481487
        ],
        [
          17.7358983,
          49.5482057
        ],
        [
          17.7358686,
          49.5482032
        ],
        [
          17.7358012,
          49.5481964
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281780",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281780"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7359303,
          49.5479076
        ],
        [
          17.7359374,
          49.5478726
        ],
        [
          17.7360036,
          49.547885
        ],
        [
          17.736042,
          49.5478904
        ],
        [
          17.7360366,
          49.5479122
        ],
        [
          17.7359303,
          49.5479076
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281781",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281781"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7358029,
          49.5477262
        ],
        [
          17.7358141,
          49.5476798
        ],
        [
          17.7359757,
          49.5476915
        ],
        [
          17.735966,
          49.5477439
        ],
        [
          17.7359197,
          49.5477389
        ],
        [
          17.7358029,
          49.5477262
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281782",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281782"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7358029,
          49.5477262
        ],
        [
          17.7359197,
          49.5477389
        ],
        [
          17.735966,
          49.5477439
        ],
        [
          17.7359439,
          49.5477758
        ],
        [
          17.7359104,
          49.5477729
        ],
        [
          17.7357747,
          49.5477612
        ],
        [
          17.7357824,
          49.5477245
        ],
        [
          17.7358029,
          49.5477262
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281783",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281783"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7357022,
          49.5478519
        ],
        [
          17.7357062,
          49.5478217
        ],
        [
          17.7358799,
          49.5478343
        ],
        [
          17.7358817,
          49.5478637
        ],
        [
          17.7357022,
          49.5478519
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281787",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281787"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7357606,
          49.5499331
        ],
        [
          17.735801,
          49.5498514
        ],
        [
          17.7359193,
          49.549876
        ],
        [
          17.7358994,
          49.5499161
        ],
        [
          17.7359795,
          49.5499327
        ],
        [
          17.7359589,
          49.5499745
        ],
        [
          17.7357606,
          49.5499331
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281788",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "387",
    "addr:housenumber": "387",
    "building": "house",
    "building:material": "brick",
    "end_date": "1905",
    "source": "mza:d9",
    "source:end_date": "https://aleph.nkp.cz/F/?func=direct&doc_number=001041096&local_base=SKC",
    "start_date": "1830",
    "id": "way/198281788"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7367128,
          49.5474782
        ],
        [
          17.7366433,
          49.5476185
        ],
        [
          17.7365299,
          49.5475949
        ],
        [
          17.7365677,
          49.5475184
        ],
        [
          17.7366118,
          49.5475276
        ],
        [
          17.7366434,
          49.5474638
        ],
        [
          17.7367128,
          49.5474782
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281789",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "386",
    "addr:housenumber": "386",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281789"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7362947,
          49.5478951
        ],
        [
          17.7363424,
          49.5477835
        ],
        [
          17.73647,
          49.5478064
        ],
        [
          17.7364223,
          49.5479181
        ],
        [
          17.7362947,
          49.5478951
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281790",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "385",
    "addr:housenumber": "385",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281790"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7362667,
          49.5479372
        ],
        [
          17.7363541,
          49.5479576
        ],
        [
          17.7363446,
          49.5480028
        ],
        [
          17.7363833,
          49.5480157
        ],
        [
          17.7363701,
          49.5480736
        ],
        [
          17.7362189,
          49.5480568
        ],
        [
          17.7362667,
          49.5479372
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281791",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "384",
    "addr:housenumber": "384",
    "building": "house",
    "building:material": "brick",
    "end_date": "1905",
    "source": "mza:d9",
    "source:end_date": "http://historie.hranet.cz/bartovsky1/priloha1.pdf",
    "start_date": "1830",
    "id": "way/198281791"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7361084,
          49.5482946
        ],
        [
          17.7361758,
          49.5482973
        ],
        [
          17.7361472,
          49.5483879
        ],
        [
          17.7359733,
          49.5483724
        ],
        [
          17.7359887,
          49.5483253
        ],
        [
          17.736089,
          49.5483249
        ],
        [
          17.7361084,
          49.5482946
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281792",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "383",
    "addr:housenumber": "383",
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281792"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7360777,
          49.5485473
        ],
        [
          17.7361527,
          49.5485491
        ],
        [
          17.7361871,
          49.54855
        ],
        [
          17.7361927,
          49.5486177
        ],
        [
          17.7363643,
          49.5486075
        ],
        [
          17.7363684,
          49.548651
        ],
        [
          17.7363459,
          49.5486533
        ],
        [
          17.7360754,
          49.5486816
        ],
        [
          17.7360777,
          49.5485473
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281793",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "382",
    "addr:housenumber": "382",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281793"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7360832,
          49.5488358
        ],
        [
          17.7363475,
          49.5488461
        ],
        [
          17.7363414,
          49.5489116
        ],
        [
          17.7362669,
          49.5489086
        ],
        [
          17.7362599,
          49.5489834
        ],
        [
          17.736165,
          49.5489796
        ],
        [
          17.7361724,
          49.5489012
        ],
        [
          17.7360775,
          49.5488975
        ],
        [
          17.7360832,
          49.5488358
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281794",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "381",
    "addr:housenumber": "381",
    "building": "house",
    "building:material": "brick",
    "end_date": "1941",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1941",
    "start_date": "1830",
    "id": "way/198281794"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7363339,
          49.5491675
        ],
        [
          17.7364109,
          49.54918
        ],
        [
          17.7363647,
          49.5493004
        ],
        [
          17.7362822,
          49.5492871
        ],
        [
          17.7362386,
          49.5492801
        ],
        [
          17.7362524,
          49.5492442
        ],
        [
          17.7362587,
          49.5492276
        ],
        [
          17.7363077,
          49.5492356
        ],
        [
          17.7363312,
          49.5491744
        ],
        [
          17.7363339,
          49.5491675
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281795",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "380",
    "addr:housenumber": "380",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281795"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7360446,
          49.5502478
        ],
        [
          17.7360586,
          49.5502024
        ],
        [
          17.7360279,
          49.5501984
        ],
        [
          17.7360542,
          49.5501128
        ],
        [
          17.7362214,
          49.5501345
        ],
        [
          17.7361811,
          49.5502654
        ],
        [
          17.7360952,
          49.5502543
        ],
        [
          17.7360446,
          49.5502478
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281796",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "379",
    "addr:housenumber": "379",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281796"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7359486,
          49.5503755
        ],
        [
          17.7359901,
          49.5502407
        ],
        [
          17.7360446,
          49.5502478
        ],
        [
          17.7360952,
          49.5502543
        ],
        [
          17.7360537,
          49.5503891
        ],
        [
          17.7359486,
          49.5503755
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281945",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281945"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7377379,
          49.5470868
        ],
        [
          17.7377513,
          49.5470529
        ],
        [
          17.7378364,
          49.547067
        ],
        [
          17.7378229,
          49.547101
        ],
        [
          17.7377379,
          49.5470868
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281946",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281946"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7375942,
          49.5471033
        ],
        [
          17.7376278,
          49.5471434
        ],
        [
          17.7374686,
          49.5472
        ],
        [
          17.7374356,
          49.5471593
        ],
        [
          17.7375942,
          49.5471033
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281947",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281947"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7362836,
          49.5444407
        ],
        [
          17.7363549,
          49.5444548
        ],
        [
          17.7363096,
          49.5445512
        ],
        [
          17.7362382,
          49.5445371
        ],
        [
          17.7362723,
          49.5444646
        ],
        [
          17.7362836,
          49.5444407
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281948",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281948"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7365798,
          49.5451115
        ],
        [
          17.736568,
          49.5451537
        ],
        [
          17.7365013,
          49.5451454
        ],
        [
          17.736514,
          49.5451255
        ],
        [
          17.7365164,
          49.5451041
        ],
        [
          17.7365798,
          49.5451115
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281949",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281949"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7365267,
          49.5451785
        ],
        [
          17.7365811,
          49.5451952
        ],
        [
          17.7365346,
          49.5452581
        ],
        [
          17.7364785,
          49.5452439
        ],
        [
          17.7365267,
          49.5451785
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281950",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281950"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7365463,
          49.545261
        ],
        [
          17.7365167,
          49.5453079
        ],
        [
          17.7365048,
          49.5453224
        ],
        [
          17.7364355,
          49.5453016
        ],
        [
          17.7364785,
          49.5452439
        ],
        [
          17.7365346,
          49.5452581
        ],
        [
          17.7365463,
          49.545261
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281951",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281951"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7364669,
          49.5454058
        ],
        [
          17.7365015,
          49.5453678
        ],
        [
          17.7365297,
          49.5453786
        ],
        [
          17.7365621,
          49.5453911
        ],
        [
          17.7365289,
          49.5454274
        ],
        [
          17.7364669,
          49.5454058
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281952",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281952"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7366495,
          49.5454478
        ],
        [
          17.7366681,
          49.5454637
        ],
        [
          17.7366665,
          49.5454836
        ],
        [
          17.7366456,
          49.5454982
        ],
        [
          17.7366151,
          49.5455007
        ],
        [
          17.7365893,
          49.5454899
        ],
        [
          17.7365802,
          49.5454708
        ],
        [
          17.7365922,
          49.5454524
        ],
        [
          17.7366195,
          49.5454433
        ],
        [
          17.7366495,
          49.5454478
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281953",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281953"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7399791,
          49.5476231
        ],
        [
          17.7398709,
          49.5476375
        ],
        [
          17.7398403,
          49.5475407
        ],
        [
          17.7399486,
          49.5475263
        ],
        [
          17.7399791,
          49.5476231
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281954",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281954"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7408849,
          49.5473656
        ],
        [
          17.7407241,
          49.5473713
        ],
        [
          17.7407215,
          49.5473407
        ],
        [
          17.7408824,
          49.5473351
        ],
        [
          17.7408849,
          49.5473656
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281955",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281955"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7417518,
          49.5471193
        ],
        [
          17.7416992,
          49.5471355
        ],
        [
          17.7416862,
          49.5471396
        ],
        [
          17.7416433,
          49.5470817
        ],
        [
          17.741711,
          49.5470606
        ],
        [
          17.7417518,
          49.5471193
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281956",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281956"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7418172,
          49.5470456
        ],
        [
          17.7418457,
          49.5470925
        ],
        [
          17.7417518,
          49.5471193
        ],
        [
          17.741711,
          49.5470606
        ],
        [
          17.7416831,
          49.5470203
        ],
        [
          17.7417784,
          49.5469925
        ],
        [
          17.7418172,
          49.5470456
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281957",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281957"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7419369,
          49.547015
        ],
        [
          17.7419654,
          49.5470618
        ],
        [
          17.7418457,
          49.5470925
        ],
        [
          17.7418172,
          49.5470456
        ],
        [
          17.7419369,
          49.547015
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281987",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281987"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7420482,
          49.5469394
        ],
        [
          17.7421046,
          49.5470516
        ],
        [
          17.7420187,
          49.5470698
        ],
        [
          17.7419623,
          49.5469576
        ],
        [
          17.7420482,
          49.5469394
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281988",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281988"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7416049,
          49.5467483
        ],
        [
          17.7416686,
          49.546841
        ],
        [
          17.7415648,
          49.5468711
        ],
        [
          17.7415011,
          49.5467783
        ],
        [
          17.7416049,
          49.5467483
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281989",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281989"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7413793,
          49.5468248
        ],
        [
          17.7414506,
          49.5469148
        ],
        [
          17.7413573,
          49.5469459
        ],
        [
          17.7412859,
          49.546856
        ],
        [
          17.7413793,
          49.5468248
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281990",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281990"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7411315,
          49.5468755
        ],
        [
          17.741231,
          49.5470007
        ],
        [
          17.7411249,
          49.5470362
        ],
        [
          17.7410254,
          49.546911
        ],
        [
          17.7411315,
          49.5468755
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281991",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "519",
    "addr:housenumber": "519",
    "building": "house",
    "building:material": "brick",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1875",
    "id": "way/198281991"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7408284,
          49.5470193
        ],
        [
          17.7408686,
          49.5470994
        ],
        [
          17.740638,
          49.5471481
        ],
        [
          17.7405978,
          49.5470681
        ],
        [
          17.7408284,
          49.5470193
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281992",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198281992"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.739509,
          49.5472559
        ],
        [
          17.7395752,
          49.5472602
        ],
        [
          17.7395678,
          49.5473081
        ],
        [
          17.7395016,
          49.5473038
        ],
        [
          17.739509,
          49.5472559
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281993",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281993"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7389474,
          49.547514
        ],
        [
          17.739137,
          49.5475426
        ],
        [
          17.7391146,
          49.5476049
        ],
        [
          17.7389251,
          49.5475763
        ],
        [
          17.7389474,
          49.547514
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281994",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281994"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7386067,
          49.5472598
        ],
        [
          17.7387517,
          49.5472956
        ],
        [
          17.7387355,
          49.5473233
        ],
        [
          17.7386938,
          49.5473943
        ],
        [
          17.7386839,
          49.5473921
        ],
        [
          17.7386284,
          49.5473781
        ],
        [
          17.7386619,
          49.547321
        ],
        [
          17.7385823,
          49.5473013
        ],
        [
          17.7386067,
          49.5472598
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281995",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281995"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.737527,
          49.5470743
        ],
        [
          17.7375038,
          49.5470508
        ],
        [
          17.7375679,
          49.5470279
        ],
        [
          17.7375887,
          49.5470508
        ],
        [
          17.7375561,
          49.5470632
        ],
        [
          17.737527,
          49.5470743
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281996",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281996"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7371301,
          49.5466029
        ],
        [
          17.7371488,
          49.5466273
        ],
        [
          17.7371003,
          49.5466435
        ],
        [
          17.7370801,
          49.5466201
        ],
        [
          17.7371301,
          49.5466029
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281997",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281997"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7371301,
          49.5466029
        ],
        [
          17.7370957,
          49.5465605
        ],
        [
          17.7371299,
          49.5465485
        ],
        [
          17.7371649,
          49.546591
        ],
        [
          17.7371301,
          49.5466029
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281998",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281998"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7370562,
          49.546504
        ],
        [
          17.7370851,
          49.5465386
        ],
        [
          17.7369912,
          49.5465721
        ],
        [
          17.7369619,
          49.5465375
        ],
        [
          17.7370562,
          49.546504
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198281999",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198281999"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7369481,
          49.5463546
        ],
        [
          17.7369881,
          49.5463285
        ],
        [
          17.7370279,
          49.5463816
        ],
        [
          17.7369877,
          49.5464052
        ],
        [
          17.7369481,
          49.5463546
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282000",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282000"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7370375,
          49.5462849
        ],
        [
          17.7370488,
          49.546297
        ],
        [
          17.7370155,
          49.5463097
        ],
        [
          17.7370043,
          49.5462978
        ],
        [
          17.7370375,
          49.5462849
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282001",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282001"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7370792,
          49.5462612
        ],
        [
          17.7371041,
          49.546276
        ],
        [
          17.7370691,
          49.5462893
        ],
        [
          17.7370473,
          49.5462665
        ],
        [
          17.7370792,
          49.5462612
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282002",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282002"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7370176,
          49.5462793
        ],
        [
          17.7369593,
          49.5463043
        ],
        [
          17.7369395,
          49.5462852
        ],
        [
          17.7369975,
          49.5462599
        ],
        [
          17.7370176,
          49.5462793
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282003",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282003"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.737011,
          49.5462221
        ],
        [
          17.7370792,
          49.5462612
        ],
        [
          17.7370473,
          49.5462665
        ],
        [
          17.7370176,
          49.5462793
        ],
        [
          17.7369975,
          49.5462599
        ],
        [
          17.7369783,
          49.5462381
        ],
        [
          17.737011,
          49.5462221
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282004",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282004"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7372127,
          49.546074
        ],
        [
          17.7372808,
          49.5461131
        ],
        [
          17.7371541,
          49.546215
        ],
        [
          17.7370792,
          49.5462612
        ],
        [
          17.737011,
          49.5462221
        ],
        [
          17.7371919,
          49.5460893
        ],
        [
          17.7372127,
          49.546074
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282005",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282005"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7365338,
          49.5461759
        ],
        [
          17.7365882,
          49.5461536
        ],
        [
          17.73663,
          49.5461365
        ],
        [
          17.7367441,
          49.5462424
        ],
        [
          17.7367036,
          49.5462608
        ],
        [
          17.7366095,
          49.5461734
        ],
        [
          17.7365559,
          49.5461978
        ],
        [
          17.7365338,
          49.5461759
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282006",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282006"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7357357,
          49.5455399
        ],
        [
          17.7357191,
          49.5455663
        ],
        [
          17.7356772,
          49.5455554
        ],
        [
          17.7356935,
          49.5455289
        ],
        [
          17.7357357,
          49.5455399
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282007",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282007"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7360205,
          49.5451115
        ],
        [
          17.735958,
          49.5451992
        ],
        [
          17.7359227,
          49.5451884
        ],
        [
          17.7359682,
          49.5451259
        ],
        [
          17.7359863,
          49.545101
        ],
        [
          17.7360205,
          49.5451115
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282008",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282008"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7366019,
          49.544984
        ],
        [
          17.7366119,
          49.5449654
        ],
        [
          17.7366828,
          49.5449779
        ],
        [
          17.7366634,
          49.5450106
        ],
        [
          17.7365971,
          49.544994
        ],
        [
          17.7366019,
          49.544984
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282009",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282009"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7366119,
          49.5449654
        ],
        [
          17.7366019,
          49.544984
        ],
        [
          17.7365461,
          49.5449716
        ],
        [
          17.736559,
          49.5449495
        ],
        [
          17.7366119,
          49.5449654
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282010",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282010"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7366863,
          49.5451722
        ],
        [
          17.7367394,
          49.5451871
        ],
        [
          17.7367183,
          49.5452186
        ],
        [
          17.7366654,
          49.5452037
        ],
        [
          17.7366863,
          49.5451722
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282011",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282011"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7365463,
          49.545261
        ],
        [
          17.7365941,
          49.545273
        ],
        [
          17.736564,
          49.5453206
        ],
        [
          17.7365167,
          49.5453079
        ],
        [
          17.7365463,
          49.545261
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282012",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282012"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7363656,
          49.5453707
        ],
        [
          17.7363847,
          49.5453504
        ],
        [
          17.7363272,
          49.5453318
        ],
        [
          17.7363496,
          49.5453063
        ],
        [
          17.7364605,
          49.5453448
        ],
        [
          17.7364237,
          49.5453907
        ],
        [
          17.7363656,
          49.5453707
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282013",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282013"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7362747,
          49.5455519
        ],
        [
          17.7363279,
          49.5455649
        ],
        [
          17.7362831,
          49.5456414
        ],
        [
          17.73623,
          49.5456283
        ],
        [
          17.7362747,
          49.5455519
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282014",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282014"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7361032,
          49.5448894
        ],
        [
          17.7361747,
          49.5449299
        ],
        [
          17.7361466,
          49.5449594
        ],
        [
          17.736081,
          49.5449279
        ],
        [
          17.7361032,
          49.5448894
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282015",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282015"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7361521,
          49.544831
        ],
        [
          17.73612,
          49.5448692
        ],
        [
          17.7360853,
          49.5448526
        ],
        [
          17.7361217,
          49.5448159
        ],
        [
          17.7361521,
          49.544831
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282016",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282016"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7362847,
          49.5448167
        ],
        [
          17.7362022,
          49.5447712
        ],
        [
          17.7362238,
          49.5447531
        ],
        [
          17.7362801,
          49.5447826
        ],
        [
          17.7363009,
          49.5447731
        ],
        [
          17.736321,
          49.5447891
        ],
        [
          17.7362847,
          49.5448167
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282017",
  "properties": {
    "building": "yes",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282017"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7361474,
          49.5447468
        ],
        [
          17.7361876,
          49.544761
        ],
        [
          17.7361486,
          49.5448077
        ],
        [
          17.7361084,
          49.5447936
        ],
        [
          17.7361474,
          49.5447468
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282018",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282018"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7359237,
          49.5446871
        ],
        [
          17.7359652,
          49.5446559
        ],
        [
          17.7360995,
          49.5447311
        ],
        [
          17.736073,
          49.5447511
        ],
        [
          17.7359647,
          49.5446904
        ],
        [
          17.7359497,
          49.5447017
        ],
        [
          17.7359237,
          49.5446871
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282019",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282019"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.736603,
          49.5442077
        ],
        [
          17.73659,
          49.5442027
        ],
        [
          17.7365572,
          49.5441888
        ],
        [
          17.73663,
          49.544119
        ],
        [
          17.7366718,
          49.5441358
        ],
        [
          17.736603,
          49.5442077
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282020",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282020"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7361478,
          49.5442645
        ],
        [
          17.7361514,
          49.544224
        ],
        [
          17.7362343,
          49.5442271
        ],
        [
          17.7362307,
          49.5442676
        ],
        [
          17.7361478,
          49.5442645
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282021",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282021"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7364553,
          49.5445627
        ],
        [
          17.7363833,
          49.5445391
        ],
        [
          17.7364104,
          49.5445044
        ],
        [
          17.7364823,
          49.5445279
        ],
        [
          17.7364553,
          49.5445627
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282022",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282022"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.736812,
          49.5445803
        ],
        [
          17.7368535,
          49.5445963
        ],
        [
          17.736824,
          49.5446285
        ],
        [
          17.7367825,
          49.5446125
        ],
        [
          17.736812,
          49.5445803
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282024",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282024"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7370807,
          49.5443093
        ],
        [
          17.7370564,
          49.5443281
        ],
        [
          17.7370268,
          49.544312
        ],
        [
          17.7370511,
          49.5442932
        ],
        [
          17.7370807,
          49.5443093
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282025",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282025"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7371048,
          49.5442906
        ],
        [
          17.7371616,
          49.5443215
        ],
        [
          17.7370884,
          49.5443781
        ],
        [
          17.7370316,
          49.5443472
        ],
        [
          17.7370564,
          49.5443281
        ],
        [
          17.7370807,
          49.5443093
        ],
        [
          17.7371048,
          49.5442906
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282026",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282026"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7392414,
          49.5452334
        ],
        [
          17.739349,
          49.5452684
        ],
        [
          17.7392992,
          49.5453305
        ],
        [
          17.7391906,
          49.5452952
        ],
        [
          17.7392414,
          49.5452334
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282027",
  "properties": {
    "addr:city": "Židovská obec Hranice",
    "addr:conscriptionnumber": "XXI",
    "addr:housenumber": "XXI",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282027"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7360003,
          49.5448314
        ],
        [
          17.7358356,
          49.5447673
        ],
        [
          17.7358885,
          49.5447101
        ],
        [
          17.7360532,
          49.5447742
        ],
        [
          17.7360003,
          49.5448314
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282028",
  "properties": {
    "addr:city": "Židovská obec Hranice",
    "addr:conscriptionnumber": "XX",
    "addr:housenumber": "XX",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282028"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7358356,
          49.5447673
        ],
        [
          17.7360003,
          49.5448314
        ],
        [
          17.7359427,
          49.5448882
        ],
        [
          17.7357841,
          49.5448272
        ],
        [
          17.7358356,
          49.5447673
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282029",
  "properties": {
    "addr:city": "Židovská obec Hranice",
    "addr:conscriptionnumber": "XIX",
    "addr:housenumber": "XIX",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282029"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7357254,
          49.5448915
        ],
        [
          17.7357841,
          49.5448272
        ],
        [
          17.7359427,
          49.5448882
        ],
        [
          17.7358839,
          49.5449525
        ],
        [
          17.7357254,
          49.5448915
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282030",
  "properties": {
    "addr:city": "Židovská obec Hranice",
    "addr:conscriptionnumber": "XXIII",
    "addr:housenumber": "XXIII",
    "building": "house",
    "building:material": "brick",
    "end_date": "1919",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282030"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7362841,
          49.544891
        ],
        [
          17.7361521,
          49.544831
        ],
        [
          17.7362022,
          49.5447712
        ],
        [
          17.7362847,
          49.5448167
        ],
        [
          17.7363257,
          49.5448371
        ],
        [
          17.7362841,
          49.544891
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282031",
  "properties": {
    "addr:city": "Židovská obec Hranice",
    "addr:conscriptionnumber": "XXII",
    "addr:housenumber": "XXII",
    "building": "house",
    "building:material": "brick",
    "end_date": "1919",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282031"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7362297,
          49.5449616
        ],
        [
          17.7361747,
          49.5449299
        ],
        [
          17.7361032,
          49.5448894
        ],
        [
          17.73612,
          49.5448692
        ],
        [
          17.7361353,
          49.544851
        ],
        [
          17.7361521,
          49.544831
        ],
        [
          17.7362841,
          49.544891
        ],
        [
          17.7362297,
          49.5449616
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282038",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "274",
    "addr:housenumber": "274",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282038"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7373218,
          49.5474641
        ],
        [
          17.7373681,
          49.5474781
        ],
        [
          17.7373633,
          49.5474896
        ],
        [
          17.7374629,
          49.547506
        ],
        [
          17.7374492,
          49.5475447
        ],
        [
          17.7373361,
          49.5475255
        ],
        [
          17.7372906,
          49.5475764
        ],
        [
          17.7371604,
          49.5475467
        ],
        [
          17.7372083,
          49.5474719
        ],
        [
          17.7372206,
          49.5474526
        ],
        [
          17.7372551,
          49.5473988
        ],
        [
          17.7373225,
          49.5474102
        ],
        [
          17.7373182,
          49.5474235
        ],
        [
          17.7373218,
          49.5474641
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282039",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1905",
    "source": "mza:d9",
    "source:end_date": "http://historie.hranet.cz/bartovsky1/priloha1.pdf",
    "start_date": "1830",
    "id": "way/198282039"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7373218,
          49.5474641
        ],
        [
          17.7373182,
          49.5474235
        ],
        [
          17.7373225,
          49.5474102
        ],
        [
          17.7373349,
          49.5473723
        ],
        [
          17.7373878,
          49.5473726
        ],
        [
          17.7375646,
          49.5473765
        ],
        [
          17.7375564,
          49.5474447
        ],
        [
          17.7375596,
          49.5474695
        ],
        [
          17.7373218,
          49.5474641
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282040",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "270",
    "addr:housenumber": "270",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282040"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7409627,
          49.5474912
        ],
        [
          17.7409108,
          49.5474913
        ],
        [
          17.7406982,
          49.5474921
        ],
        [
          17.7406977,
          49.5474305
        ],
        [
          17.7409622,
          49.5474295
        ],
        [
          17.7409627,
          49.5474912
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282041",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "269",
    "addr:housenumber": "269",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282041"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.741034,
          49.5471884
        ],
        [
          17.7410615,
          49.5472442
        ],
        [
          17.74084,
          49.5472903
        ],
        [
          17.7408125,
          49.5472344
        ],
        [
          17.741034,
          49.5471884
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282042",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "441",
    "addr:housenumber": "441",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282042"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7397494,
          49.5472767
        ],
        [
          17.7398123,
          49.5473559
        ],
        [
          17.7395642,
          49.5474387
        ],
        [
          17.7395518,
          49.5474232
        ],
        [
          17.7395013,
          49.5473596
        ],
        [
          17.7397494,
          49.5472767
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282043",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "414",
    "addr:housenumber": "414",
    "building": "house",
    "building:material": "brick",
    "end_date": "1905",
    "source": "mza:d9",
    "source:end_date": "http://historie.hranet.cz/bartovsky1/priloha1.pdf",
    "start_date": "1830",
    "id": "way/198282043"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7387145,
          49.5474481
        ],
        [
          17.7388092,
          49.5474682
        ],
        [
          17.7388997,
          49.5474869
        ],
        [
          17.7388607,
          49.5475665
        ],
        [
          17.7386753,
          49.5475283
        ],
        [
          17.7386937,
          49.5474907
        ],
        [
          17.7387145,
          49.5474481
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282044",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "268",
    "addr:housenumber": "268",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282044"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7383917,
          49.5473852
        ],
        [
          17.7384596,
          49.5473987
        ],
        [
          17.7384752,
          49.5473656
        ],
        [
          17.738568,
          49.547384
        ],
        [
          17.738553,
          49.5474159
        ],
        [
          17.7387145,
          49.5474481
        ],
        [
          17.7386937,
          49.5474907
        ],
        [
          17.7385781,
          49.5474681
        ],
        [
          17.7384887,
          49.5474506
        ],
        [
          17.7383719,
          49.5474271
        ],
        [
          17.7383917,
          49.5473852
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282045",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "267",
    "addr:housenumber": "267",
    "building": "house",
    "building:material": "brick",
    "end_date": "1905",
    "source": "mza:d9",
    "source:end_date": "http://historie.hranet.cz/bartovsky1/priloha1.pdf",
    "start_date": "1830",
    "id": "way/198282045"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7381621,
          49.5473944
        ],
        [
          17.7382179,
          49.5472653
        ],
        [
          17.7383128,
          49.5472825
        ],
        [
          17.7382862,
          49.5473442
        ],
        [
          17.7382588,
          49.5474119
        ],
        [
          17.7381621,
          49.5473944
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282046",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "266",
    "addr:housenumber": "266",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282046"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7378894,
          49.547354
        ],
        [
          17.7379087,
          49.5473078
        ],
        [
          17.7379818,
          49.5473203
        ],
        [
          17.7379918,
          49.5472955
        ],
        [
          17.7381673,
          49.5473253
        ],
        [
          17.738137,
          49.5473899
        ],
        [
          17.7378894,
          49.547354
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282047",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "265",
    "addr:housenumber": "265",
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "source:start_date": "https://iispp.npu.cz/mis_public/searchDocument.htm?search=34381/8-431",
    "start_date": "1574",
    "wikidata": "Q31745658",
    "id": "way/198282047"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7373099,
          49.5472444
        ],
        [
          17.7373462,
          49.5471949
        ],
        [
          17.7374017,
          49.5471747
        ],
        [
          17.7374686,
          49.5472
        ],
        [
          17.7376156,
          49.5472542
        ],
        [
          17.7375651,
          49.5473231
        ],
        [
          17.7373099,
          49.5472444
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282048",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "264",
    "addr:housenumber": "264",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282048"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7374776,
          49.5470244
        ],
        [
          17.7375038,
          49.5470508
        ],
        [
          17.737527,
          49.5470743
        ],
        [
          17.737443,
          49.5471056
        ],
        [
          17.737328,
          49.5471557
        ],
        [
          17.7372797,
          49.547107
        ],
        [
          17.7374776,
          49.5470244
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282049",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "263",
    "addr:housenumber": "263",
    "building": "house",
    "building:material": "brick",
    "end_date": "1905",
    "source": "mza:d9",
    "source:end_date": "http://historie.hranet.cz/bartovsky1/priloha1.pdf",
    "start_date": "1830",
    "id": "way/198282049"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7371063,
          49.5468404
        ],
        [
          17.7371402,
          49.5468804
        ],
        [
          17.7371689,
          49.5468702
        ],
        [
          17.737186,
          49.5468904
        ],
        [
          17.7371977,
          49.5469041
        ],
        [
          17.7371596,
          49.5469177
        ],
        [
          17.7371825,
          49.5469448
        ],
        [
          17.7370693,
          49.5469852
        ],
        [
          17.7369836,
          49.5468842
        ],
        [
          17.7371063,
          49.5468404
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282050",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "262",
    "addr:housenumber": "262",
    "building": "house",
    "building:material": "brick",
    "end_date": "1905",
    "source": "mza:d9",
    "source:end_date": "http://historie.hranet.cz/bartovsky1/priloha1.pdf",
    "start_date": "1830",
    "id": "way/198282050"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7368378,
          49.5466487
        ],
        [
          17.7369265,
          49.5466195
        ],
        [
          17.7370432,
          49.5465772
        ],
        [
          17.7370957,
          49.5465605
        ],
        [
          17.7371301,
          49.5466029
        ],
        [
          17.7370801,
          49.5466201
        ],
        [
          17.737023,
          49.5466396
        ],
        [
          17.7369618,
          49.5466605
        ],
        [
          17.7369986,
          49.5467032
        ],
        [
          17.7369075,
          49.5467344
        ],
        [
          17.7368378,
          49.5466487
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282051",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "261",
    "addr:housenumber": "261",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282051"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7366429,
          49.5464741
        ],
        [
          17.7367931,
          49.5464207
        ],
        [
          17.7369481,
          49.5463546
        ],
        [
          17.7369877,
          49.5464052
        ],
        [
          17.7367944,
          49.5464738
        ],
        [
          17.7368313,
          49.5465176
        ],
        [
          17.7370131,
          49.546453
        ],
        [
          17.7370318,
          49.5464751
        ],
        [
          17.7370562,
          49.546504
        ],
        [
          17.7369619,
          49.5465375
        ],
        [
          17.7368994,
          49.5465597
        ],
        [
          17.7369241,
          49.546589
        ],
        [
          17.7367824,
          49.5466393
        ],
        [
          17.7366429,
          49.5464741
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282052",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "260",
    "addr:housenumber": "260",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282052"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7367309,
          49.5463516
        ],
        [
          17.7367931,
          49.5464207
        ],
        [
          17.7366429,
          49.5464741
        ],
        [
          17.7365791,
          49.5464029
        ],
        [
          17.7367309,
          49.5463516
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282053",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "259",
    "addr:housenumber": "259",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282053"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7365338,
          49.5461759
        ],
        [
          17.7365559,
          49.5461978
        ],
        [
          17.7366469,
          49.546288
        ],
        [
          17.7365173,
          49.546343
        ],
        [
          17.7364042,
          49.5462309
        ],
        [
          17.7365338,
          49.5461759
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282054",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "439",
    "addr:housenumber": "439",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282054"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7397985,
          49.5449818
        ],
        [
          17.7399403,
          49.5450287
        ],
        [
          17.7398673,
          49.5451216
        ],
        [
          17.7397255,
          49.5450747
        ],
        [
          17.7397985,
          49.5449818
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282055",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "438",
    "addr:housenumber": "438",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282055"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7396565,
          49.5449417
        ],
        [
          17.7397985,
          49.5449818
        ],
        [
          17.7397255,
          49.5450747
        ],
        [
          17.7396379,
          49.5450486
        ],
        [
          17.739586,
          49.5451108
        ],
        [
          17.7395387,
          49.5450939
        ],
        [
          17.7396565,
          49.5449417
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282056",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "451",
    "addr:housenumber": "451",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282056"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7395123,
          49.5448851
        ],
        [
          17.7396565,
          49.5449417
        ],
        [
          17.7395387,
          49.5450939
        ],
        [
          17.7393912,
          49.5450361
        ],
        [
          17.7394435,
          49.544973
        ],
        [
          17.7395123,
          49.5448851
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282057",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "437",
    "addr:housenumber": "437",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282057"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7393896,
          49.5448446
        ],
        [
          17.7395123,
          49.5448851
        ],
        [
          17.7394435,
          49.544973
        ],
        [
          17.7393163,
          49.5449278
        ],
        [
          17.7393896,
          49.5448446
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282058",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "432",
    "addr:housenumber": "432",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282058"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7391653,
          49.5447602
        ],
        [
          17.7393896,
          49.5448446
        ],
        [
          17.7393163,
          49.5449278
        ],
        [
          17.7390961,
          49.5448439
        ],
        [
          17.7391653,
          49.5447602
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282059",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "247",
    "addr:housenumber": "247",
    "building": "house",
    "building:material": "brick",
    "end_date": "1905",
    "source": "mza:d9",
    "source:end_date": "http://historie.hranet.cz/bartovsky1/priloha1.pdf",
    "start_date": "1830",
    "id": "way/198282059"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.738653,
          49.5445571
        ],
        [
          17.738714,
          49.5445809
        ],
        [
          17.7388374,
          49.5446289
        ],
        [
          17.7387721,
          49.5446995
        ],
        [
          17.7387095,
          49.5446751
        ],
        [
          17.7385877,
          49.5446278
        ],
        [
          17.738653,
          49.5445571
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282060",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "248",
    "addr:housenumber": "248",
    "building": "house",
    "building:material": "brick",
    "end_date": "1905",
    "source": "mza:d9",
    "source:end_date": "http://historie.hranet.cz/bartovsky1/priloha1.pdf",
    "start_date": "1830",
    "id": "way/198282060"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7384464,
          49.5444974
        ],
        [
          17.7386328,
          49.5445513
        ],
        [
          17.738653,
          49.5445571
        ],
        [
          17.7385877,
          49.5446278
        ],
        [
          17.738561,
          49.5446565
        ],
        [
          17.7385418,
          49.5446772
        ],
        [
          17.738359,
          49.5446044
        ],
        [
          17.7384027,
          49.5445514
        ],
        [
          17.7384464,
          49.5444974
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282061",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "249",
    "addr:housenumber": "249",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282061"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7382469,
          49.5444287
        ],
        [
          17.7384464,
          49.5444974
        ],
        [
          17.7384027,
          49.5445514
        ],
        [
          17.7383137,
          49.5445199
        ],
        [
          17.7382697,
          49.5445689
        ],
        [
          17.7381549,
          49.5445232
        ],
        [
          17.7382469,
          49.5444287
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282062",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "431",
    "addr:housenumber": "431",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282062"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.737966,
          49.5443428
        ],
        [
          17.7381621,
          49.5444129
        ],
        [
          17.7381098,
          49.5444745
        ],
        [
          17.7379137,
          49.5444044
        ],
        [
          17.737966,
          49.5443428
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282063",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "228",
    "addr:housenumber": "228",
    "building": "house",
    "building:material": "brick",
    "end_date": "1941",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1941",
    "start_date": "1830",
    "id": "way/198282063"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7359721,
          49.5441747
        ],
        [
          17.7360878,
          49.5441851
        ],
        [
          17.7360769,
          49.544236
        ],
        [
          17.7360401,
          49.5442326
        ],
        [
          17.7360137,
          49.5443554
        ],
        [
          17.7359348,
          49.5443482
        ],
        [
          17.7359683,
          49.5441925
        ],
        [
          17.7359721,
          49.5441747
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282064",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "229",
    "addr:housenumber": "229",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282064"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7361468,
          49.5444214
        ],
        [
          17.7360721,
          49.5444127
        ],
        [
          17.7360868,
          49.5443622
        ],
        [
          17.7361692,
          49.5443775
        ],
        [
          17.7361919,
          49.5443475
        ],
        [
          17.736255,
          49.5443627
        ],
        [
          17.7362072,
          49.5444413
        ],
        [
          17.7361468,
          49.5444214
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282065",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "230",
    "addr:housenumber": "230",
    "building": "house",
    "building:material": "brick",
    "end_date": "1941",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1941",
    "start_date": "1830",
    "id": "way/198282065"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7361468,
          49.5444214
        ],
        [
          17.7362072,
          49.5444413
        ],
        [
          17.7362723,
          49.5444646
        ],
        [
          17.7362382,
          49.5445371
        ],
        [
          17.7361599,
          49.5446213
        ],
        [
          17.7360932,
          49.544586
        ],
        [
          17.7361168,
          49.5445671
        ],
        [
          17.7360328,
          49.5445198
        ],
        [
          17.7361468,
          49.5444214
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282066",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "231",
    "addr:housenumber": "231",
    "addr:street": "Czernotiner Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282066"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7363833,
          49.5445391
        ],
        [
          17.7364553,
          49.5445627
        ],
        [
          17.7364857,
          49.5445699
        ],
        [
          17.7364105,
          49.5446801
        ],
        [
          17.7363069,
          49.5446503
        ],
        [
          17.7363833,
          49.5445391
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282067",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "232",
    "addr:housenumber": "232",
    "addr:street": "Czernotiner Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1905",
    "source": "mza:d9",
    "source:end_date": "http://historie.hranet.cz/bartovsky1/priloha1.pdf",
    "start_date": "1830",
    "id": "way/198282067"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7367105,
          49.5441771
        ],
        [
          17.7367821,
          49.5441189
        ],
        [
          17.7368087,
          49.5440973
        ],
        [
          17.736892,
          49.5441404
        ],
        [
          17.7367527,
          49.5442536
        ],
        [
          17.7366694,
          49.5442104
        ],
        [
          17.7367105,
          49.5441771
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282068",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "250",
    "addr:housenumber": "250",
    "addr:street": "Czernotiner Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282068"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7372028,
          49.5441923
        ],
        [
          17.7372766,
          49.5442324
        ],
        [
          17.7371616,
          49.5443215
        ],
        [
          17.7371048,
          49.5442906
        ],
        [
          17.7370543,
          49.5442631
        ],
        [
          17.7371059,
          49.5442231
        ],
        [
          17.7371394,
          49.5442413
        ],
        [
          17.7372028,
          49.5441923
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282069",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "251",
    "addr:housenumber": "251",
    "addr:street": "Czernotiner Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282069"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7367313,
          49.5445001
        ],
        [
          17.7368453,
          49.544544
        ],
        [
          17.736812,
          49.5445803
        ],
        [
          17.7367825,
          49.5446125
        ],
        [
          17.7366685,
          49.5445685
        ],
        [
          17.7367313,
          49.5445001
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282070",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "252",
    "addr:housenumber": "252",
    "addr:street": "Czernotiner Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282070"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7365345,
          49.5447269
        ],
        [
          17.736748,
          49.5447822
        ],
        [
          17.7367333,
          49.5448061
        ],
        [
          17.7367191,
          49.5448291
        ],
        [
          17.7365047,
          49.5447718
        ],
        [
          17.7365345,
          49.5447269
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282071",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "253",
    "addr:housenumber": "253",
    "addr:street": "Czernotiner Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1905",
    "source": "mza:d9",
    "source:end_date": "http://historie.hranet.cz/bartovsky1/priloha1.pdf",
    "start_date": "1830",
    "id": "way/198282071"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7364892,
          49.5447963
        ],
        [
          17.7367034,
          49.544854
        ],
        [
          17.7366791,
          49.544892
        ],
        [
          17.7366703,
          49.5448893
        ],
        [
          17.7364649,
          49.5448345
        ],
        [
          17.7364892,
          49.5447963
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282072",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "254",
    "addr:housenumber": "254",
    "addr:street": "Czernotiner Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1905",
    "source": "mza:d9",
    "source:end_date": "http://historie.hranet.cz/bartovsky1/priloha1.pdf",
    "start_date": "1830",
    "id": "way/198282072"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7364466,
          49.5448725
        ],
        [
          17.7366369,
          49.5449237
        ],
        [
          17.7366119,
          49.5449654
        ],
        [
          17.736559,
          49.5449495
        ],
        [
          17.7364263,
          49.5449096
        ],
        [
          17.7364466,
          49.5448725
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282073",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "255",
    "addr:housenumber": "255",
    "addr:street": "Czernotiner Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282073"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7363862,
          49.545091
        ],
        [
          17.7364019,
          49.5450322
        ],
        [
          17.7366867,
          49.545062
        ],
        [
          17.7366721,
          49.5451208
        ],
        [
          17.7365798,
          49.5451115
        ],
        [
          17.7365164,
          49.5451041
        ],
        [
          17.7363862,
          49.545091
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282074",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "256",
    "addr:housenumber": "256",
    "addr:street": "Czernotiner Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282074"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7363146,
          49.5452027
        ],
        [
          17.7363862,
          49.545091
        ],
        [
          17.736514,
          49.5451255
        ],
        [
          17.7365013,
          49.5451454
        ],
        [
          17.7364693,
          49.5451953
        ],
        [
          17.7364437,
          49.5452352
        ],
        [
          17.7364147,
          49.5452279
        ],
        [
          17.7363146,
          49.5452027
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282075",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "257",
    "addr:housenumber": "257",
    "addr:street": "Czernotiner Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282075"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7362426,
          49.5453031
        ],
        [
          17.7363146,
          49.5452027
        ],
        [
          17.7364147,
          49.5452279
        ],
        [
          17.7363496,
          49.5453063
        ],
        [
          17.7363272,
          49.5453318
        ],
        [
          17.7362426,
          49.5453031
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282076",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "446",
    "addr:housenumber": "446",
    "addr:street": "Czernotiner Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282076"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7362426,
          49.5453031
        ],
        [
          17.7363272,
          49.5453318
        ],
        [
          17.7363847,
          49.5453504
        ],
        [
          17.7363656,
          49.5453707
        ],
        [
          17.7362911,
          49.5454659
        ],
        [
          17.7361554,
          49.5454309
        ],
        [
          17.7362426,
          49.5453031
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282077",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "258",
    "addr:housenumber": "258",
    "addr:street": "Czernotiner Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282077"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7361177,
          49.5454911
        ],
        [
          17.7362288,
          49.5455176
        ],
        [
          17.7361754,
          49.5456119
        ],
        [
          17.7361569,
          49.5456447
        ],
        [
          17.7360458,
          49.5456183
        ],
        [
          17.7361177,
          49.5454911
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282078",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "227",
    "addr:housenumber": "227",
    "addr:street": "Czernotiner Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282078"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7361194,
          49.5451095
        ],
        [
          17.736028,
          49.5452378
        ],
        [
          17.7359472,
          49.5452144
        ],
        [
          17.735958,
          49.5451992
        ],
        [
          17.7360205,
          49.5451115
        ],
        [
          17.7360391,
          49.5450854
        ],
        [
          17.7361194,
          49.5451095
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282079",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "226",
    "addr:housenumber": "226",
    "addr:street": "Czernotiner Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1941",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1941",
    "start_date": "1830",
    "id": "way/198282079"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7359147,
          49.5454124
        ],
        [
          17.7357719,
          49.5453725
        ],
        [
          17.7358212,
          49.5452982
        ],
        [
          17.7358807,
          49.5453148
        ],
        [
          17.7359145,
          49.5452632
        ],
        [
          17.7359264,
          49.5452449
        ],
        [
          17.73601,
          49.545268
        ],
        [
          17.7359429,
          49.5453705
        ],
        [
          17.7359147,
          49.5454124
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282082",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "392",
    "addr:housenumber": "392",
    "addr:street": "Czernotiner Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282082"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7357502,
          49.5459958
        ],
        [
          17.7358651,
          49.5460215
        ],
        [
          17.7358449,
          49.5461603
        ],
        [
          17.7356663,
          49.5461043
        ],
        [
          17.7356992,
          49.5460585
        ],
        [
          17.7357325,
          49.5460129
        ],
        [
          17.7357502,
          49.5459958
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282083",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "391",
    "addr:housenumber": "391",
    "addr:street": "Czernotiner Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282083"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7360179,
          49.5461728
        ],
        [
          17.7359675,
          49.5461364
        ],
        [
          17.735941,
          49.5461172
        ],
        [
          17.7360171,
          49.5460729
        ],
        [
          17.7360318,
          49.5460835
        ],
        [
          17.7360543,
          49.5460997
        ],
        [
          17.7360926,
          49.5460774
        ],
        [
          17.7361324,
          49.5461061
        ],
        [
          17.7360247,
          49.5461688
        ],
        [
          17.7360179,
          49.5461728
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282084",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282084"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7358615,
          49.5451999
        ],
        [
          17.7359387,
          49.5452263
        ],
        [
          17.7359264,
          49.5452449
        ],
        [
          17.7359145,
          49.5452632
        ],
        [
          17.7358114,
          49.5452314
        ],
        [
          17.7358393,
          49.5451931
        ],
        [
          17.7358615,
          49.5451999
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282098",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282098"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7360247,
          49.5461688
        ],
        [
          17.7361324,
          49.5461061
        ],
        [
          17.7362878,
          49.5462631
        ],
        [
          17.7362316,
          49.5462886
        ],
        [
          17.736118,
          49.5461916
        ],
        [
          17.736071,
          49.546208
        ],
        [
          17.7360247,
          49.5461688
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282101",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282101"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7358049,
          49.5465771
        ],
        [
          17.7358284,
          49.5465924
        ],
        [
          17.735806,
          49.5466115
        ],
        [
          17.7357863,
          49.5466018
        ],
        [
          17.7358049,
          49.5465771
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282102",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282102"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7364056,
          49.5468553
        ],
        [
          17.7364344,
          49.5469048
        ],
        [
          17.7363221,
          49.5469447
        ],
        [
          17.7362556,
          49.5468485
        ],
        [
          17.7362227,
          49.5468046
        ],
        [
          17.7363001,
          49.5467842
        ],
        [
          17.7362886,
          49.5467615
        ],
        [
          17.7363335,
          49.5467459
        ],
        [
          17.7363654,
          49.5467821
        ],
        [
          17.7364056,
          49.5468553
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282103",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282103"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7363667,
          49.5471303
        ],
        [
          17.7364869,
          49.5471504
        ],
        [
          17.7364673,
          49.5472084
        ],
        [
          17.7363622,
          49.5471737
        ],
        [
          17.7363667,
          49.5471303
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282104",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "57",
    "addr:housenumber": "57",
    "building": "house",
    "building:material": "brick",
    "end_date": "1905",
    "source": "mza:d9",
    "source:end_date": "https://aleph.nkp.cz/F/?func=direct&doc_number=001041096&local_base=SKC",
    "start_date": "1830",
    "id": "way/198282104"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7360857,
          49.5473987
        ],
        [
          17.7362257,
          49.547413
        ],
        [
          17.7363038,
          49.547421
        ],
        [
          17.7362863,
          49.5474685
        ],
        [
          17.7361997,
          49.5474576
        ],
        [
          17.7361427,
          49.5474518
        ],
        [
          17.7360744,
          49.547445
        ],
        [
          17.7360857,
          49.5473987
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282105",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1905",
    "source": "mza:d9",
    "source:end_date": "https://aleph.nkp.cz/F/?func=direct&doc_number=001041096&local_base=SKC",
    "start_date": "1830",
    "id": "way/198282105"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7362452,
          49.5473174
        ],
        [
          17.736329,
          49.5473258
        ],
        [
          17.7363118,
          49.5473908
        ],
        [
          17.7363038,
          49.547421
        ],
        [
          17.7362257,
          49.547413
        ],
        [
          17.7362452,
          49.5473174
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282106",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "56",
    "addr:housenumber": "56",
    "building": "house",
    "building:material": "brick",
    "end_date": "1905",
    "source": "mza:d9",
    "source:end_date": "https://aleph.nkp.cz/F/?func=direct&doc_number=001041096&local_base=SKC",
    "start_date": "1830",
    "id": "way/198282106"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7361063,
          49.5471817
        ],
        [
          17.7362727,
          49.5472074
        ],
        [
          17.7363402,
          49.5472184
        ],
        [
          17.736329,
          49.5473258
        ],
        [
          17.7362452,
          49.5473174
        ],
        [
          17.7362547,
          49.5472484
        ],
        [
          17.7361018,
          49.5472333
        ],
        [
          17.7361063,
          49.5471817
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282107",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "55",
    "addr:housenumber": "55",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282107"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.736306,
          49.5471248
        ],
        [
          17.7362727,
          49.5472074
        ],
        [
          17.7361063,
          49.5471817
        ],
        [
          17.736134,
          49.5470933
        ],
        [
          17.736306,
          49.5471248
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282108",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "54",
    "addr:housenumber": "54",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282108"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.736134,
          49.5470933
        ],
        [
          17.7361443,
          49.5470591
        ],
        [
          17.7362191,
          49.5470678
        ],
        [
          17.7362329,
          49.5470492
        ],
        [
          17.7363833,
          49.5470682
        ],
        [
          17.7363667,
          49.5471303
        ],
        [
          17.736306,
          49.5471248
        ],
        [
          17.736134,
          49.5470933
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282109",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "388",
    "addr:housenumber": "388",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282109"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7365699,
          49.5472382
        ],
        [
          17.7366814,
          49.5472571
        ],
        [
          17.7366163,
          49.5474188
        ],
        [
          17.7365048,
          49.5473999
        ],
        [
          17.7365699,
          49.5472382
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282110",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "389",
    "addr:housenumber": "389",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282110"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.736641,
          49.5472161
        ],
        [
          17.736624,
          49.5471227
        ],
        [
          17.7366733,
          49.5471197
        ],
        [
          17.7366678,
          49.5470822
        ],
        [
          17.7367348,
          49.5470768
        ],
        [
          17.7367403,
          49.5471141
        ],
        [
          17.7368008,
          49.5471104
        ],
        [
          17.7368099,
          49.547158
        ],
        [
          17.7368182,
          49.5472018
        ],
        [
          17.736641,
          49.5472161
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282111",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "390",
    "addr:housenumber": "390",
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282111"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7365591,
          49.5467738
        ],
        [
          17.7366443,
          49.5469207
        ],
        [
          17.7365323,
          49.5469481
        ],
        [
          17.7365175,
          49.5469226
        ],
        [
          17.7364537,
          49.5469382
        ],
        [
          17.7364344,
          49.5469048
        ],
        [
          17.7364056,
          49.5468553
        ],
        [
          17.7364437,
          49.546846
        ],
        [
          17.736477,
          49.5468379
        ],
        [
          17.7364547,
          49.5467992
        ],
        [
          17.7365591,
          49.5467738
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282112",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "49",
    "addr:housenumber": "49",
    "addr:street": "Czernotiner Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282112"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7359001,
          49.5464143
        ],
        [
          17.73605,
          49.5465075
        ],
        [
          17.7360823,
          49.5465199
        ],
        [
          17.7360053,
          49.546593
        ],
        [
          17.7358701,
          49.5465236
        ],
        [
          17.7358128,
          49.5464952
        ],
        [
          17.7359001,
          49.5464143
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282113",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "48",
    "addr:housenumber": "48",
    "addr:street": "Czernotiner Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282113"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7360122,
          49.5463104
        ],
        [
          17.736022,
          49.546315
        ],
        [
          17.7360403,
          49.5463234
        ],
        [
          17.7361255,
          49.5463656
        ],
        [
          17.736106,
          49.54638
        ],
        [
          17.7361338,
          49.5464015
        ],
        [
          17.7360921,
          49.5464278
        ],
        [
          17.736124,
          49.5464469
        ],
        [
          17.736096,
          49.5464632
        ],
        [
          17.73605,
          49.5465075
        ],
        [
          17.7359001,
          49.5464143
        ],
        [
          17.7359761,
          49.5463438
        ],
        [
          17.7359945,
          49.5463268
        ],
        [
          17.7360122,
          49.5463104
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282114",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "46",
    "addr:housenumber": "46",
    "addr:street": "Czernotiner Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282114"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7358012,
          49.5463062
        ],
        [
          17.73577,
          49.54635
        ],
        [
          17.7358368,
          49.546374
        ],
        [
          17.7357791,
          49.5464567
        ],
        [
          17.7356606,
          49.5464025
        ],
        [
          17.7356291,
          49.5463856
        ],
        [
          17.7356903,
          49.5463246
        ],
        [
          17.735696,
          49.5463125
        ],
        [
          17.7357215,
          49.5462798
        ],
        [
          17.7358012,
          49.5463062
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282115",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282115"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7360179,
          49.5461728
        ],
        [
          17.7360247,
          49.5461688
        ],
        [
          17.736071,
          49.546208
        ],
        [
          17.7360403,
          49.5463234
        ],
        [
          17.7360122,
          49.5463104
        ],
        [
          17.7359945,
          49.5463268
        ],
        [
          17.7360088,
          49.5462246
        ],
        [
          17.7360179,
          49.5461728
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282116",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1905",
    "source": "mza:d9",
    "source:end_date": "https://aleph.nkp.cz/F/?func=direct&doc_number=001041096&local_base=SKC",
    "start_date": "1830",
    "id": "way/198282116"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7361442,
          49.5473197
        ],
        [
          17.7361387,
          49.5473542
        ],
        [
          17.7360865,
          49.5473507
        ],
        [
          17.7360922,
          49.5473162
        ],
        [
          17.7361442,
          49.5473197
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282117",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1905",
    "source": "mza:d9",
    "source:end_date": "http://historie.hranet.cz/bartovsky1/priloha1.pdf",
    "start_date": "1830",
    "id": "way/198282117"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7367041,
          49.5473483
        ],
        [
          17.7367375,
          49.5473571
        ],
        [
          17.7366978,
          49.5474203
        ],
        [
          17.7366644,
          49.5474114
        ],
        [
          17.7367041,
          49.5473483
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282118",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282118"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7367116,
          49.5468427
        ],
        [
          17.7367505,
          49.5468981
        ],
        [
          17.7366815,
          49.5469185
        ],
        [
          17.7366426,
          49.546863
        ],
        [
          17.7367116,
          49.5468427
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282119",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282119"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7363351,
          49.5469772
        ],
        [
          17.7363515,
          49.5470096
        ],
        [
          17.7363175,
          49.5470169
        ],
        [
          17.736301,
          49.5469845
        ],
        [
          17.7363351,
          49.5469772
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282120",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282120"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.736124,
          49.5464469
        ],
        [
          17.7361538,
          49.5464703
        ],
        [
          17.7361274,
          49.5464871
        ],
        [
          17.736096,
          49.5464632
        ],
        [
          17.736124,
          49.5464469
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282121",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282121"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7361821,
          49.5465831
        ],
        [
          17.7362282,
          49.5466242
        ],
        [
          17.7362064,
          49.5466352
        ],
        [
          17.7361608,
          49.5465917
        ],
        [
          17.7361821,
          49.5465831
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282122",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282122"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7363257,
          49.546731
        ],
        [
          17.7362865,
          49.5467433
        ],
        [
          17.7362665,
          49.5467165
        ],
        [
          17.7363057,
          49.5467042
        ],
        [
          17.7363257,
          49.546731
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282123",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282123"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7361669,
          49.5467303
        ],
        [
          17.7361193,
          49.5467551
        ],
        [
          17.7360926,
          49.5467714
        ],
        [
          17.73597,
          49.5466262
        ],
        [
          17.7360053,
          49.546593
        ],
        [
          17.7360477,
          49.5466193
        ],
        [
          17.7360737,
          49.5466433
        ],
        [
          17.7361669,
          49.5467303
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282124",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282124"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7360737,
          49.5466433
        ],
        [
          17.7361157,
          49.546625
        ],
        [
          17.736241,
          49.5467772
        ],
        [
          17.7362087,
          49.546786
        ],
        [
          17.7361669,
          49.5467303
        ],
        [
          17.7360737,
          49.5466433
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282125",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282125"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7361844,
          49.5468489
        ],
        [
          17.7361517,
          49.5468112
        ],
        [
          17.7362087,
          49.546786
        ],
        [
          17.7362182,
          49.546829
        ],
        [
          17.7361844,
          49.5468489
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282126",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282126"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7360613,
          49.5467914
        ],
        [
          17.7360314,
          49.5468105
        ],
        [
          17.7360007,
          49.5467928
        ],
        [
          17.7360286,
          49.5467724
        ],
        [
          17.7360613,
          49.5467914
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282130",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "50",
    "addr:housenumber": "50",
    "building": "house",
    "building:material": "brick",
    "end_date": "1905",
    "source": "mza:d9",
    "source:end_date": "http://historie.hranet.cz/bartovsky1/priloha1.pdf",
    "start_date": "1830",
    "id": "way/198282130"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7357272,
          49.5468636
        ],
        [
          17.7356074,
          49.5468144
        ],
        [
          17.7355928,
          49.5468084
        ],
        [
          17.7357269,
          49.5466691
        ],
        [
          17.7358259,
          49.5467113
        ],
        [
          17.7358822,
          49.5467393
        ],
        [
          17.7358588,
          49.5467567
        ],
        [
          17.7357272,
          49.5468636
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282131",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "51",
    "addr:housenumber": "51",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282131"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7358615,
          49.5469192
        ],
        [
          17.7357272,
          49.5468636
        ],
        [
          17.7358588,
          49.5467567
        ],
        [
          17.735876,
          49.5467665
        ],
        [
          17.7359647,
          49.5468192
        ],
        [
          17.7359176,
          49.5468617
        ],
        [
          17.7359356,
          49.5468718
        ],
        [
          17.7358615,
          49.5469192
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282132",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "52",
    "addr:housenumber": "52",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282132"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7360027,
          49.5469951
        ],
        [
          17.7358413,
          49.5469321
        ],
        [
          17.7358615,
          49.5469192
        ],
        [
          17.7359356,
          49.5468718
        ],
        [
          17.7359557,
          49.546859
        ],
        [
          17.7359992,
          49.5468813
        ],
        [
          17.7360395,
          49.5468998
        ],
        [
          17.7361207,
          49.5468541
        ],
        [
          17.7361699,
          49.5468879
        ],
        [
          17.7360748,
          49.5469487
        ],
        [
          17.7360027,
          49.5469951
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282133",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "53",
    "addr:housenumber": "53",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282133"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7360641,
          49.5470184
        ],
        [
          17.7360027,
          49.5469951
        ],
        [
          17.7360748,
          49.5469487
        ],
        [
          17.736131,
          49.5469846
        ],
        [
          17.7360641,
          49.5470184
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282135",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282135"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7360248,
          49.5471072
        ],
        [
          17.7359973,
          49.5471032
        ],
        [
          17.7360078,
          49.547079
        ],
        [
          17.736035,
          49.5470843
        ],
        [
          17.7360248,
          49.5471072
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282136",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282136"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7357907,
          49.547169
        ],
        [
          17.7359641,
          49.5471868
        ],
        [
          17.735957,
          49.5472041
        ],
        [
          17.7358598,
          49.5471917
        ],
        [
          17.7358557,
          49.5472091
        ],
        [
          17.7357812,
          49.5471978
        ],
        [
          17.7357907,
          49.547169
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282137",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282137"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7358974,
          49.5472318
        ],
        [
          17.7358924,
          49.547281
        ],
        [
          17.7357967,
          49.54728
        ],
        [
          17.7358147,
          49.5472247
        ],
        [
          17.7358974,
          49.5472318
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282138",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282138"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7357979,
          49.547407
        ],
        [
          17.7357097,
          49.5474036
        ],
        [
          17.7357169,
          49.5473653
        ],
        [
          17.7358002,
          49.5473678
        ],
        [
          17.7357979,
          49.547407
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282139",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282139"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7359962,
          49.5473443
        ],
        [
          17.735987,
          49.5474144
        ],
        [
          17.7358161,
          49.5474077
        ],
        [
          17.7358214,
          49.5473671
        ],
        [
          17.7359178,
          49.5473689
        ],
        [
          17.7359185,
          49.547341
        ],
        [
          17.7359962,
          49.5473443
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282140",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282140"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7360067,
          49.5472823
        ],
        [
          17.7359962,
          49.5473443
        ],
        [
          17.7359185,
          49.547341
        ],
        [
          17.7359112,
          49.5473407
        ],
        [
          17.7359107,
          49.5472812
        ],
        [
          17.7360067,
          49.5472823
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282141",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282141"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7358974,
          49.5472318
        ],
        [
          17.7360114,
          49.5472415
        ],
        [
          17.7360067,
          49.5472823
        ],
        [
          17.7359107,
          49.5472812
        ],
        [
          17.7358924,
          49.547281
        ],
        [
          17.7358974,
          49.5472318
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282142",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "79",
    "addr:housenumber": "79",
    "addr:street": "Czernotiner Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282142"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7357426,
          49.5471641
        ],
        [
          17.7355247,
          49.5471417
        ],
        [
          17.7355614,
          49.5470349
        ],
        [
          17.7357329,
          49.5470639
        ],
        [
          17.7357402,
          49.547065
        ],
        [
          17.7357611,
          49.5470681
        ],
        [
          17.7357585,
          49.5470911
        ],
        [
          17.7360414,
          49.547133
        ],
        [
          17.7360267,
          49.5471932
        ],
        [
          17.7359641,
          49.5471868
        ],
        [
          17.7357907,
          49.547169
        ],
        [
          17.7357426,
          49.5471641
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282143",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282143"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7360442,
          49.5470641
        ],
        [
          17.7360712,
          49.5470692
        ],
        [
          17.7360522,
          49.5471113
        ],
        [
          17.7360248,
          49.5471072
        ],
        [
          17.736035,
          49.5470843
        ],
        [
          17.7360442,
          49.5470641
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282144",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282144"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7358089,
          49.5469807
        ],
        [
          17.7359379,
          49.5470251
        ],
        [
          17.7359183,
          49.5470478
        ],
        [
          17.7357918,
          49.547012
        ],
        [
          17.7358089,
          49.5469807
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282147",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282147"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7357526,
          49.5475923
        ],
        [
          17.735757,
          49.5475648
        ],
        [
          17.735969,
          49.5475789
        ],
        [
          17.7359646,
          49.5476066
        ],
        [
          17.735925,
          49.547605
        ],
        [
          17.7357526,
          49.5475923
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282148",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282148"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7361682,
          49.5475216
        ],
        [
          17.7361997,
          49.5474576
        ],
        [
          17.7362863,
          49.5474685
        ],
        [
          17.7362357,
          49.5475429
        ],
        [
          17.7362284,
          49.5475536
        ],
        [
          17.736159,
          49.5475412
        ],
        [
          17.7361682,
          49.5475216
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282149",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282149"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7359155,
          49.5475281
        ],
        [
          17.7359283,
          49.5474433
        ],
        [
          17.735994,
          49.5474474
        ],
        [
          17.7359812,
          49.5475323
        ],
        [
          17.735964,
          49.5475312
        ],
        [
          17.7359155,
          49.5475281
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282150",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282150"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.735964,
          49.5475312
        ],
        [
          17.735961,
          49.5475582
        ],
        [
          17.7358728,
          49.547554
        ],
        [
          17.7358758,
          49.5475268
        ],
        [
          17.7359155,
          49.5475281
        ],
        [
          17.735964,
          49.5475312
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282151",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282151"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7362863,
          49.5474685
        ],
        [
          17.7363553,
          49.5474813
        ],
        [
          17.7363126,
          49.5475584
        ],
        [
          17.7362357,
          49.5475429
        ],
        [
          17.7362863,
          49.5474685
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282152",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282152"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7357772,
          49.5474371
        ],
        [
          17.7358839,
          49.5474415
        ],
        [
          17.7358817,
          49.5474649
        ],
        [
          17.7357749,
          49.5474605
        ],
        [
          17.7357772,
          49.5474371
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282206",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "309",
    "addr:housenumber": "309",
    "addr:street": "Ober Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282206"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7357985,
          49.5518072
        ],
        [
          17.7358961,
          49.5518368
        ],
        [
          17.7360646,
          49.5518899
        ],
        [
          17.7360787,
          49.5518945
        ],
        [
          17.7360406,
          49.5519495
        ],
        [
          17.7358264,
          49.5518942
        ],
        [
          17.7356994,
          49.5518628
        ],
        [
          17.7357008,
          49.5519576
        ],
        [
          17.7358349,
          49.5519794
        ],
        [
          17.7358153,
          49.552028
        ],
        [
          17.7357147,
          49.552009
        ],
        [
          17.7355881,
          49.551988
        ],
        [
          17.7356109,
          49.5518375
        ],
        [
          17.7356414,
          49.5517662
        ],
        [
          17.7356961,
          49.5517787
        ],
        [
          17.7357985,
          49.5518072
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282223",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282223"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.736814,
          49.5549299
        ],
        [
          17.7368669,
          49.5549414
        ],
        [
          17.7368452,
          49.5549832
        ],
        [
          17.7367923,
          49.5549717
        ],
        [
          17.736814,
          49.5549299
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282242",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282242"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7368462,
          49.5532007
        ],
        [
          17.7368174,
          49.5532206
        ],
        [
          17.7367699,
          49.5531916
        ],
        [
          17.7367987,
          49.5531717
        ],
        [
          17.7368462,
          49.5532007
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282243",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282243"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7366023,
          49.5531824
        ],
        [
          17.7366235,
          49.5531954
        ],
        [
          17.7366027,
          49.5532097
        ],
        [
          17.736567,
          49.5531878
        ],
        [
          17.7365877,
          49.5531735
        ],
        [
          17.7366023,
          49.5531824
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282244",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282244"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7379662,
          49.5535403
        ],
        [
          17.7379848,
          49.5534567
        ],
        [
          17.7379888,
          49.553439
        ],
        [
          17.7381334,
          49.5534526
        ],
        [
          17.7381108,
          49.5535539
        ],
        [
          17.7379662,
          49.5535403
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282245",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282245"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7379647,
          49.5534203
        ],
        [
          17.7379877,
          49.553169
        ],
        [
          17.7380907,
          49.553173
        ],
        [
          17.7380846,
          49.5532387
        ],
        [
          17.7380677,
          49.5534243
        ],
        [
          17.7379647,
          49.5534203
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282246",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282246"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7378495,
          49.5527355
        ],
        [
          17.7378348,
          49.5528077
        ],
        [
          17.7378031,
          49.5528046
        ],
        [
          17.7377506,
          49.5527996
        ],
        [
          17.7377072,
          49.5527955
        ],
        [
          17.7377165,
          49.5527544
        ],
        [
          17.7377558,
          49.5527582
        ],
        [
          17.7377621,
          49.5527285
        ],
        [
          17.7378495,
          49.5527355
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282247",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282247"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7378603,
          49.5526821
        ],
        [
          17.7378664,
          49.5526523
        ],
        [
          17.7379362,
          49.5526579
        ],
        [
          17.7379203,
          49.5527412
        ],
        [
          17.7378495,
          49.5527355
        ],
        [
          17.7378603,
          49.5526821
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282248",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282248"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7381183,
          49.5527504
        ],
        [
          17.738109,
          49.5528089
        ],
        [
          17.7380679,
          49.5528062
        ],
        [
          17.7380607,
          49.5528518
        ],
        [
          17.7380223,
          49.5528492
        ],
        [
          17.7380387,
          49.5527451
        ],
        [
          17.7381183,
          49.5527504
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282249",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282249"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7382113,
          49.5527375
        ],
        [
          17.7382045,
          49.5528471
        ],
        [
          17.738199,
          49.5528797
        ],
        [
          17.7381699,
          49.5530537
        ],
        [
          17.7381676,
          49.5530674
        ],
        [
          17.7381219,
          49.5530517
        ],
        [
          17.7381338,
          49.5529226
        ],
        [
          17.7381597,
          49.552732
        ],
        [
          17.7381705,
          49.5527331
        ],
        [
          17.7382113,
          49.5527375
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282250",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282250"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7383136,
          49.5527724
        ],
        [
          17.7383073,
          49.5528509
        ],
        [
          17.7382851,
          49.5528501
        ],
        [
          17.7382539,
          49.5528491
        ],
        [
          17.7382602,
          49.5527706
        ],
        [
          17.7383136,
          49.5527724
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282251",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282251"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7383589,
          49.5527182
        ],
        [
          17.738365,
          49.5527681
        ],
        [
          17.7383369,
          49.5527695
        ],
        [
          17.7383308,
          49.5527196
        ],
        [
          17.7383589,
          49.5527182
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282252",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282252"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7390348,
          49.5527119
        ],
        [
          17.7390178,
          49.5528232
        ],
        [
          17.73898,
          49.5528191
        ],
        [
          17.738918,
          49.5528449
        ],
        [
          17.7389284,
          49.5527092
        ],
        [
          17.7390348,
          49.5527119
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282253",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282253"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.73983,
          49.5528626
        ],
        [
          17.7399398,
          49.552881
        ],
        [
          17.7398977,
          49.5529867
        ],
        [
          17.7397879,
          49.5529683
        ],
        [
          17.73983,
          49.5528626
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282254",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282254"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7391531,
          49.5524367
        ],
        [
          17.7392039,
          49.5523493
        ],
        [
          17.7393147,
          49.5523764
        ],
        [
          17.7392639,
          49.5524638
        ],
        [
          17.7391531,
          49.5524367
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282256",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282256"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7363428,
          49.5548496
        ],
        [
          17.7363525,
          49.5548246
        ],
        [
          17.7363577,
          49.5548112
        ],
        [
          17.7364132,
          49.5548202
        ],
        [
          17.7363984,
          49.5548586
        ],
        [
          17.7363428,
          49.5548496
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282257",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282257"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7359264,
          49.5539853
        ],
        [
          17.7361223,
          49.5540094
        ],
        [
          17.736074,
          49.5541747
        ],
        [
          17.7359447,
          49.5541587
        ],
        [
          17.735984,
          49.5540458
        ],
        [
          17.7359113,
          49.5540368
        ],
        [
          17.7359264,
          49.5539853
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282258",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282258"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7359236,
          49.5532344
        ],
        [
          17.7359595,
          49.5531583
        ],
        [
          17.735991,
          49.5530917
        ],
        [
          17.7360529,
          49.5531049
        ],
        [
          17.736178,
          49.5531279
        ],
        [
          17.7362233,
          49.5531378
        ],
        [
          17.7362024,
          49.5531821
        ],
        [
          17.7361129,
          49.5531643
        ],
        [
          17.7360947,
          49.5532029
        ],
        [
          17.7360337,
          49.5531908
        ],
        [
          17.7360054,
          49.5532507
        ],
        [
          17.7359236,
          49.5532344
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282259",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282259"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7363825,
          49.5525367
        ],
        [
          17.736479,
          49.5525579
        ],
        [
          17.7364064,
          49.5526967
        ],
        [
          17.7363099,
          49.5526755
        ],
        [
          17.7363825,
          49.5525367
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282261",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282261"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7358153,
          49.5522207
        ],
        [
          17.7359397,
          49.5522389
        ],
        [
          17.7359317,
          49.552262
        ],
        [
          17.7358073,
          49.5522437
        ],
        [
          17.7358153,
          49.5522207
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282262",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282262"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7359487,
          49.5521917
        ],
        [
          17.7360456,
          49.5521989
        ],
        [
          17.7360374,
          49.552246
        ],
        [
          17.7359397,
          49.5522389
        ],
        [
          17.7359487,
          49.5521917
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282263",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282263"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7359926,
          49.5521342
        ],
        [
          17.7360087,
          49.5521036
        ],
        [
          17.7360781,
          49.5521173
        ],
        [
          17.7360616,
          49.5521495
        ],
        [
          17.7359926,
          49.5521342
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282264",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282264"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7362143,
          49.5520516
        ],
        [
          17.7362421,
          49.5520145
        ],
        [
          17.736277,
          49.5519601
        ],
        [
          17.7364266,
          49.5520215
        ],
        [
          17.736368,
          49.5521
        ],
        [
          17.7362143,
          49.5520516
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282265",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282265"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.736044,
          49.5513982
        ],
        [
          17.7360435,
          49.5513767
        ],
        [
          17.7360773,
          49.5513764
        ],
        [
          17.7360778,
          49.5513979
        ],
        [
          17.736044,
          49.5513982
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282266",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282266"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.736161,
          49.5511271
        ],
        [
          17.7362288,
          49.5511467
        ],
        [
          17.736204,
          49.5511834
        ],
        [
          17.7361364,
          49.5511648
        ],
        [
          17.736161,
          49.5511271
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282267",
  "properties": {
    "addr:city": "Židovská obec Hranice",
    "addr:conscriptionnumber": "XXXVI",
    "addr:housenumber": "XXXVI",
    "addr:street": "Ober Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1919",
    "source": "mza:d9",
    "source:addr": "http://historie.hranet.cz/bartovsky1/216.htm",
    "start_date": "1830",
    "id": "way/198282267"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7360376,
          49.5547714
        ],
        [
          17.7360361,
          49.5548015
        ],
        [
          17.7360331,
          49.5548619
        ],
        [
          17.7359299,
          49.5548598
        ],
        [
          17.7359344,
          49.5547692
        ],
        [
          17.7360376,
          49.5547714
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282268",
  "properties": {
    "addr:city": "Židovská obec Hranice",
    "addr:conscriptionnumber": "XXXV",
    "addr:housenumber": "XXXV",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "source:addr": "http://historie.hranet.cz/bartovsky1/216.htm",
    "start_date": "1830",
    "id": "way/198282268"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7362185,
          49.5545012
        ],
        [
          17.736212,
          49.5546118
        ],
        [
          17.7362088,
          49.5546661
        ],
        [
          17.7361511,
          49.5546646
        ],
        [
          17.7360994,
          49.5546633
        ],
        [
          17.7360631,
          49.5546623
        ],
        [
          17.7360731,
          49.5544978
        ],
        [
          17.7362185,
          49.5545012
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282269",
  "properties": {
    "addr:city": "Židovská obec Hranice",
    "addr:conscriptionnumber": "XXXIV",
    "addr:housenumber": "XXXIV",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "source:addr": "http://historie.hranet.cz/bartovsky1/216.htm",
    "start_date": "1830",
    "id": "way/198282269"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7359372,
          49.5544946
        ],
        [
          17.7359413,
          49.5544202
        ],
        [
          17.7360692,
          49.5544232
        ],
        [
          17.7362229,
          49.5544268
        ],
        [
          17.7362185,
          49.5545012
        ],
        [
          17.7360731,
          49.5544978
        ],
        [
          17.7359372,
          49.5544946
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282271",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282271"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7357328,
          49.5532519
        ],
        [
          17.7359083,
          49.5532774
        ],
        [
          17.7360396,
          49.5532964
        ],
        [
          17.7360217,
          49.5533483
        ],
        [
          17.7358904,
          49.5533292
        ],
        [
          17.7357149,
          49.5533038
        ],
        [
          17.7357328,
          49.5532519
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282272",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "316",
    "addr:housenumber": "316",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282272"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7357584,
          49.5531322
        ],
        [
          17.7357585,
          49.5531878
        ],
        [
          17.7356532,
          49.5531781
        ],
        [
          17.7356531,
          49.5530573
        ],
        [
          17.7358274,
          49.5530751
        ],
        [
          17.7359795,
          49.5530912
        ],
        [
          17.735991,
          49.5530917
        ],
        [
          17.7359595,
          49.5531583
        ],
        [
          17.7357584,
          49.5531322
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282273",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "31",
    "addr:housenumber": "313",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282273"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7360588,
          49.5526083
        ],
        [
          17.7356146,
          49.5525439
        ],
        [
          17.7356026,
          49.5524813
        ],
        [
          17.7357595,
          49.5525023
        ],
        [
          17.735973,
          49.5525309
        ],
        [
          17.7359969,
          49.5524457
        ],
        [
          17.7360503,
          49.5524555
        ],
        [
          17.7361069,
          49.5524658
        ],
        [
          17.7360927,
          49.5525079
        ],
        [
          17.7360659,
          49.5525872
        ],
        [
          17.7360588,
          49.5526083
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282274",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "312",
    "addr:housenumber": "312",
    "addr:street": "Ober Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282274"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.736061,
          49.5524058
        ],
        [
          17.7360503,
          49.5524555
        ],
        [
          17.7359969,
          49.5524457
        ],
        [
          17.7357755,
          49.5524051
        ],
        [
          17.7356082,
          49.5523744
        ],
        [
          17.7356112,
          49.5522926
        ],
        [
          17.7358031,
          49.552327
        ],
        [
          17.7357946,
          49.5523622
        ],
        [
          17.736061,
          49.5524058
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282275",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282275"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7359252,
          49.5522986
        ],
        [
          17.7359106,
          49.5523431
        ],
        [
          17.7358031,
          49.552327
        ],
        [
          17.7356112,
          49.5522926
        ],
        [
          17.735607,
          49.5522431
        ],
        [
          17.735796,
          49.5522578
        ],
        [
          17.7357839,
          49.5522821
        ],
        [
          17.7359252,
          49.5522986
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282276",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282276"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7359487,
          49.5521917
        ],
        [
          17.7359397,
          49.5522389
        ],
        [
          17.7358153,
          49.5522207
        ],
        [
          17.735825,
          49.552181
        ],
        [
          17.7359487,
          49.5521917
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282277",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282277"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7371902,
          49.5529775
        ],
        [
          17.7372915,
          49.552969
        ],
        [
          17.7373295,
          49.553159
        ],
        [
          17.7372282,
          49.5531676
        ],
        [
          17.7371902,
          49.5529775
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282278",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282278"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7388247,
          49.5530034
        ],
        [
          17.738805,
          49.5529646
        ],
        [
          17.7388693,
          49.5529508
        ],
        [
          17.738889,
          49.5529896
        ],
        [
          17.7388247,
          49.5530034
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282279",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282279"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.73898,
          49.5528191
        ],
        [
          17.7390178,
          49.5528232
        ],
        [
          17.739071,
          49.5528289
        ],
        [
          17.7390342,
          49.5529741
        ],
        [
          17.7389431,
          49.5529644
        ],
        [
          17.73898,
          49.5528191
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282280",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282280"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7378717,
          49.5523141
        ],
        [
          17.7379759,
          49.5523358
        ],
        [
          17.7380697,
          49.5523554
        ],
        [
          17.7380337,
          49.552428
        ],
        [
          17.7378357,
          49.5523867
        ],
        [
          17.7378717,
          49.5523141
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282281",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282281"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7383017,
          49.5518449
        ],
        [
          17.7382988,
          49.5519149
        ],
        [
          17.7381734,
          49.5519127
        ],
        [
          17.7381705,
          49.5519821
        ],
        [
          17.7379881,
          49.5519789
        ],
        [
          17.7379939,
          49.5518395
        ],
        [
          17.7383017,
          49.5518449
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282282",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282282"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7377913,
          49.5520334
        ],
        [
          17.7381808,
          49.5520417
        ],
        [
          17.7381747,
          49.5522104
        ],
        [
          17.7379975,
          49.5522077
        ],
        [
          17.7380013,
          49.5521031
        ],
        [
          17.7377904,
          49.5520949
        ],
        [
          17.7377913,
          49.5520334
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282283",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282283"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7360832,
          49.5515864
        ],
        [
          17.7361431,
          49.5516135
        ],
        [
          17.7360866,
          49.5516661
        ],
        [
          17.7359143,
          49.5515881
        ],
        [
          17.7359469,
          49.5515578
        ],
        [
          17.7360602,
          49.5516081
        ],
        [
          17.7360832,
          49.5515864
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282284",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282284"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7363623,
          49.5511772
        ],
        [
          17.7364553,
          49.5512082
        ],
        [
          17.7363782,
          49.5513054
        ],
        [
          17.7362853,
          49.5512744
        ],
        [
          17.7363623,
          49.5511772
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282285",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282285"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7378839,
          49.5515714
        ],
        [
          17.738024,
          49.5516092
        ],
        [
          17.7379987,
          49.5516486
        ],
        [
          17.7378587,
          49.5516107
        ],
        [
          17.7378839,
          49.5515714
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282286",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "307",
    "addr:housenumber": "307",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282286"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7367797,
          49.5530602
        ],
        [
          17.7368179,
          49.5530835
        ],
        [
          17.7369582,
          49.5531691
        ],
        [
          17.7368813,
          49.5532221
        ],
        [
          17.7368462,
          49.5532007
        ],
        [
          17.7367987,
          49.5531717
        ],
        [
          17.7367762,
          49.553158
        ],
        [
          17.7367253,
          49.553193
        ],
        [
          17.7369046,
          49.5533025
        ],
        [
          17.7370389,
          49.5532099
        ],
        [
          17.7371034,
          49.5532493
        ],
        [
          17.7369195,
          49.5533761
        ],
        [
          17.7366235,
          49.5531954
        ],
        [
          17.7366023,
          49.5531824
        ],
        [
          17.7367217,
          49.5531001
        ],
        [
          17.7367797,
          49.5530602
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282287",
  "properties": {
    "addr:city": "Židovská obec Hranice",
    "addr:conscriptionnumber": "XVIII",
    "addr:housenumber": "XVIII",
    "building": "house",
    "building:material": "wood",
    "end_date": "1857",
    "name": "židovský lazaret",
    "source": "mza:d9",
    "source:end_date": "zao:scitani1857",
    "source:start_date": "http://historie.hranet.cz/pdf/historie-hranickych-domu-blok.pdf",
    "start_date": "1691",
    "id": "way/198282287"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7370531,
          49.5527771
        ],
        [
          17.7372192,
          49.5528151
        ],
        [
          17.7372522,
          49.5528219
        ],
        [
          17.7372207,
          49.5528816
        ],
        [
          17.7370217,
          49.5528375
        ],
        [
          17.7370531,
          49.5527771
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282288",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "306",
    "addr:housenumber": "306",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282288"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7370784,
          49.5527306
        ],
        [
          17.7372453,
          49.5527688
        ],
        [
          17.7372363,
          49.5527878
        ],
        [
          17.7372192,
          49.5528151
        ],
        [
          17.7370531,
          49.5527771
        ],
        [
          17.7370784,
          49.5527306
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282289",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "305",
    "addr:housenumber": "305",
    "building": "house",
    "building:material": "brick",
    "end_date": "1875",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282289"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7371161,
          49.5526937
        ],
        [
          17.7371424,
          49.5526383
        ],
        [
          17.7371823,
          49.5525543
        ],
        [
          17.7372855,
          49.5525749
        ],
        [
          17.7372456,
          49.5526589
        ],
        [
          17.7372313,
          49.552689
        ],
        [
          17.7372193,
          49.5527143
        ],
        [
          17.7371161,
          49.5526937
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282290",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "304",
    "addr:housenumber": "304",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282290"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7378768,
          49.5526011
        ],
        [
          17.7378664,
          49.5526523
        ],
        [
          17.7378603,
          49.5526821
        ],
        [
          17.737773,
          49.5526763
        ],
        [
          17.737788,
          49.5526048
        ],
        [
          17.7376541,
          49.5525958
        ],
        [
          17.737667,
          49.5525154
        ],
        [
          17.7378911,
          49.5525305
        ],
        [
          17.7378768,
          49.5526011
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282291",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "303",
    "addr:housenumber": "303",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282291"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7380585,
          49.5525573
        ],
        [
          17.7380489,
          49.5526399
        ],
        [
          17.7379766,
          49.5526351
        ],
        [
          17.7379809,
          49.5526081
        ],
        [
          17.7378768,
          49.5526011
        ],
        [
          17.7378911,
          49.5525305
        ],
        [
          17.7380603,
          49.5525419
        ],
        [
          17.7380585,
          49.5525573
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282292",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "302",
    "addr:housenumber": "302",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282292"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7382387,
          49.5526083
        ],
        [
          17.7382221,
          49.5526866
        ],
        [
          17.7381785,
          49.5526841
        ],
        [
          17.7381705,
          49.5527331
        ],
        [
          17.7381597,
          49.552732
        ],
        [
          17.7380396,
          49.5527191
        ],
        [
          17.7380489,
          49.5526399
        ],
        [
          17.7380585,
          49.5525573
        ],
        [
          17.7381366,
          49.5525623
        ],
        [
          17.7381345,
          49.5525764
        ],
        [
          17.738244,
          49.5525833
        ],
        [
          17.7382387,
          49.5526083
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282293",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "301",
    "addr:housenumber": "301",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282293"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7382113,
          49.5527375
        ],
        [
          17.7382221,
          49.5526866
        ],
        [
          17.7382387,
          49.5526083
        ],
        [
          17.7383293,
          49.5526178
        ],
        [
          17.7382967,
          49.5527466
        ],
        [
          17.7382113,
          49.5527375
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282294",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "300",
    "addr:housenumber": "300",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282294"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7384561,
          49.5528398
        ],
        [
          17.7383797,
          49.5528428
        ],
        [
          17.738365,
          49.5527681
        ],
        [
          17.7383589,
          49.5527182
        ],
        [
          17.7384324,
          49.5527132
        ],
        [
          17.7384561,
          49.5528398
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282295",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "299",
    "addr:housenumber": "299",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282295"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7384638,
          49.5529223
        ],
        [
          17.7383136,
          49.5529282
        ],
        [
          17.7383015,
          49.5529283
        ],
        [
          17.7383044,
          49.5528894
        ],
        [
          17.7383508,
          49.5528875
        ],
        [
          17.7383468,
          49.5528441
        ],
        [
          17.7383797,
          49.5528428
        ],
        [
          17.7384561,
          49.5528398
        ],
        [
          17.7384638,
          49.5529223
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282296",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "298",
    "addr:housenumber": "298",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282296"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7384758,
          49.5529967
        ],
        [
          17.7383574,
          49.5530039
        ],
        [
          17.7383555,
          49.5529904
        ],
        [
          17.7383227,
          49.5529924
        ],
        [
          17.7383136,
          49.5529282
        ],
        [
          17.7384638,
          49.5529223
        ],
        [
          17.7384758,
          49.5529967
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282297",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "296",
    "addr:housenumber": "296",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282297"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7389284,
          49.5527092
        ],
        [
          17.738918,
          49.5528449
        ],
        [
          17.7387622,
          49.5528399
        ],
        [
          17.7387657,
          49.5527941
        ],
        [
          17.7387213,
          49.5527926
        ],
        [
          17.7387242,
          49.5527546
        ],
        [
          17.7387687,
          49.552756
        ],
        [
          17.7387727,
          49.5527041
        ],
        [
          17.7388111,
          49.5527054
        ],
        [
          17.7389284,
          49.5527092
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282298",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "295",
    "addr:housenumber": "295",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282298"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7389,
          49.5524066
        ],
        [
          17.7389752,
          49.5524335
        ],
        [
          17.7388502,
          49.5525805
        ],
        [
          17.7387751,
          49.5525536
        ],
        [
          17.7389,
          49.5524066
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282299",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "294",
    "addr:housenumber": "294",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282299"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7381726,
          49.5524518
        ],
        [
          17.738266,
          49.5523401
        ],
        [
          17.7383868,
          49.5523826
        ],
        [
          17.7382935,
          49.5524943
        ],
        [
          17.7381726,
          49.5524518
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282300",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "293",
    "addr:housenumber": "293",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282300"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.737508,
          49.552289
        ],
        [
          17.7375488,
          49.552201
        ],
        [
          17.7376162,
          49.5522141
        ],
        [
          17.7377455,
          49.5522406
        ],
        [
          17.7377257,
          49.5522833
        ],
        [
          17.7378054,
          49.5522995
        ],
        [
          17.7377839,
          49.5523441
        ],
        [
          17.7377052,
          49.5523274
        ],
        [
          17.737508,
          49.552289
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282301",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "292",
    "addr:housenumber": "292",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282301"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7359544,
          49.5513888
        ],
        [
          17.7360406,
          49.5514157
        ],
        [
          17.7360699,
          49.5514181
        ],
        [
          17.7360372,
          49.5514568
        ],
        [
          17.7359945,
          49.5514416
        ],
        [
          17.7359468,
          49.5514929
        ],
        [
          17.7358869,
          49.5515734
        ],
        [
          17.7356852,
          49.5515103
        ],
        [
          17.7357709,
          49.5513951
        ],
        [
          17.7358923,
          49.5514331
        ],
        [
          17.7359382,
          49.5513837
        ],
        [
          17.7359544,
          49.5513888
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282302",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "291",
    "addr:housenumber": "291",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282302"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7358492,
          49.5512284
        ],
        [
          17.7359142,
          49.5512487
        ],
        [
          17.7358865,
          49.551286
        ],
        [
          17.7359719,
          49.5513127
        ],
        [
          17.7360033,
          49.5512704
        ],
        [
          17.7360875,
          49.5512968
        ],
        [
          17.7360543,
          49.5513415
        ],
        [
          17.7360315,
          49.5513344
        ],
        [
          17.7360005,
          49.551376
        ],
        [
          17.7359708,
          49.5513667
        ],
        [
          17.7359544,
          49.5513888
        ],
        [
          17.7359382,
          49.5513837
        ],
        [
          17.7358093,
          49.5513434
        ],
        [
          17.7357723,
          49.5513318
        ],
        [
          17.7358492,
          49.5512284
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282303",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "290",
    "addr:housenumber": "290",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282303"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7358492,
          49.5512284
        ],
        [
          17.7359436,
          49.5510881
        ],
        [
          17.7360746,
          49.5511241
        ],
        [
          17.7360861,
          49.5511065
        ],
        [
          17.736161,
          49.5511271
        ],
        [
          17.7361364,
          49.5511648
        ],
        [
          17.7360692,
          49.5511464
        ],
        [
          17.736011,
          49.5512356
        ],
        [
          17.7360763,
          49.5512535
        ],
        [
          17.7360859,
          49.5512387
        ],
        [
          17.7361536,
          49.5512573
        ],
        [
          17.7361226,
          49.5513048
        ],
        [
          17.7360875,
          49.5512968
        ],
        [
          17.7360033,
          49.5512704
        ],
        [
          17.7359142,
          49.5512487
        ],
        [
          17.7358492,
          49.5512284
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282304",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282304"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7364369,
          49.5517459
        ],
        [
          17.7364874,
          49.5517631
        ],
        [
          17.7364527,
          49.551806
        ],
        [
          17.7364021,
          49.5517888
        ],
        [
          17.7364369,
          49.5517459
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282311",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282311"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7380919,
          49.5510438
        ],
        [
          17.7380438,
          49.5511227
        ],
        [
          17.7379762,
          49.5511054
        ],
        [
          17.7380243,
          49.5510265
        ],
        [
          17.7380919,
          49.5510438
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282312",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282312"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7380946,
          49.5510393
        ],
        [
          17.7382228,
          49.5510722
        ],
        [
          17.7381079,
          49.5512606
        ],
        [
          17.7379798,
          49.5512277
        ],
        [
          17.7380438,
          49.5511227
        ],
        [
          17.7380919,
          49.5510438
        ],
        [
          17.7380946,
          49.5510393
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282347",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282347"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7324465,
          49.5532288
        ],
        [
          17.7325015,
          49.5531519
        ],
        [
          17.7326209,
          49.5531739
        ],
        [
          17.7325871,
          49.5532507
        ],
        [
          17.7324465,
          49.5532288
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282365",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282365"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7322311,
          49.5540284
        ],
        [
          17.732142,
          49.554009
        ],
        [
          17.7321102,
          49.5540018
        ],
        [
          17.7320852,
          49.5539961
        ],
        [
          17.732114,
          49.5539426
        ],
        [
          17.7322148,
          49.5539654
        ],
        [
          17.7322588,
          49.5539754
        ],
        [
          17.7322311,
          49.5540284
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282366",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282366"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7313778,
          49.5539737
        ],
        [
          17.7314484,
          49.5539086
        ],
        [
          17.7315407,
          49.5539508
        ],
        [
          17.7315214,
          49.5539685
        ],
        [
          17.731624,
          49.5540154
        ],
        [
          17.7315726,
          49.5540627
        ],
        [
          17.7314212,
          49.5539936
        ],
        [
          17.7314023,
          49.5539849
        ],
        [
          17.7313778,
          49.5539737
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282367",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282367"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7313146,
          49.5540277
        ],
        [
          17.7313778,
          49.5539737
        ],
        [
          17.7314212,
          49.5539936
        ],
        [
          17.7313584,
          49.5540487
        ],
        [
          17.7313146,
          49.5540277
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282368",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282368"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7313414,
          49.5542223
        ],
        [
          17.7313747,
          49.5541593
        ],
        [
          17.7314508,
          49.5541762
        ],
        [
          17.7314783,
          49.5541239
        ],
        [
          17.7315508,
          49.55414
        ],
        [
          17.73149,
          49.5542553
        ],
        [
          17.7313414,
          49.5542223
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282369",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282369"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.729368,
          49.5541485
        ],
        [
          17.7293717,
          49.55406
        ],
        [
          17.7295008,
          49.5540622
        ],
        [
          17.7294988,
          49.5541109
        ],
        [
          17.7294548,
          49.5541101
        ],
        [
          17.7294532,
          49.55415
        ],
        [
          17.729368,
          49.5541485
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282370",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282370"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7296749,
          49.5534431
        ],
        [
          17.7297259,
          49.5534398
        ],
        [
          17.72974,
          49.5535328
        ],
        [
          17.729689,
          49.553536
        ],
        [
          17.7296749,
          49.5534431
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282371",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282371"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7296569,
          49.5533242
        ],
        [
          17.7296749,
          49.5534431
        ],
        [
          17.729689,
          49.553536
        ],
        [
          17.7297078,
          49.5536598
        ],
        [
          17.7296083,
          49.5536662
        ],
        [
          17.7295575,
          49.5533305
        ],
        [
          17.7296569,
          49.5533242
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282372",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1941",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1941",
    "start_date": "1830",
    "id": "way/198282372"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7316491,
          49.5537389
        ],
        [
          17.731691,
          49.553689
        ],
        [
          17.7318025,
          49.5537285
        ],
        [
          17.7317606,
          49.5537784
        ],
        [
          17.7316491,
          49.5537389
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282373",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282373"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7321027,
          49.5534612
        ],
        [
          17.7320302,
          49.5535318
        ],
        [
          17.7320082,
          49.5535219
        ],
        [
          17.731936,
          49.5534895
        ],
        [
          17.7320763,
          49.5533592
        ],
        [
          17.7321645,
          49.5534071
        ],
        [
          17.7321027,
          49.5534612
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282374",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282374"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7324434,
          49.5530364
        ],
        [
          17.7324315,
          49.5530622
        ],
        [
          17.7323823,
          49.5530526
        ],
        [
          17.7323942,
          49.5530268
        ],
        [
          17.7324434,
          49.5530364
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282375",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282375"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7324619,
          49.5531285
        ],
        [
          17.7324554,
          49.5531425
        ],
        [
          17.7323994,
          49.5531316
        ],
        [
          17.7324059,
          49.5531176
        ],
        [
          17.7324619,
          49.5531285
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282376",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282376"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7324693,
          49.5531125
        ],
        [
          17.7324619,
          49.5531285
        ],
        [
          17.7324059,
          49.5531176
        ],
        [
          17.7324315,
          49.5530622
        ],
        [
          17.7324434,
          49.5530364
        ],
        [
          17.7324995,
          49.5530473
        ],
        [
          17.7324693,
          49.5531125
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282377",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282377"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7325088,
          49.5526385
        ],
        [
          17.7324266,
          49.552617
        ],
        [
          17.7324821,
          49.5525275
        ],
        [
          17.7325643,
          49.552549
        ],
        [
          17.7325088,
          49.5526385
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282378",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1905",
    "source": "mza:d9",
    "source:end_date": "http://historie.hranet.cz/bartovsky1/priloha1.pdf",
    "start_date": "1830",
    "id": "way/198282378"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7326197,
          49.5524415
        ],
        [
          17.7326264,
          49.552303
        ],
        [
          17.7327277,
          49.5523051
        ],
        [
          17.732721,
          49.5524423
        ],
        [
          17.7326197,
          49.5524415
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282379",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282379"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7330747,
          49.5523994
        ],
        [
          17.7331233,
          49.5523131
        ],
        [
          17.7331334,
          49.5522952
        ],
        [
          17.7331818,
          49.552295
        ],
        [
          17.7331402,
          49.5523983
        ],
        [
          17.7330747,
          49.5523994
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282384",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282384"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7327949,
          49.552203
        ],
        [
          17.7328179,
          49.5520925
        ],
        [
          17.7329067,
          49.552101
        ],
        [
          17.732885,
          49.5521975
        ],
        [
          17.7328442,
          49.5522077
        ],
        [
          17.7327949,
          49.552203
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282385",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1905",
    "source": "mza:d9",
    "source:end_date": "http://historie.hranet.cz/bartovsky1/priloha1.pdf",
    "start_date": "1830",
    "id": "way/198282385"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7328606,
          49.551888
        ],
        [
          17.7328573,
          49.5518287
        ],
        [
          17.7329125,
          49.5518275
        ],
        [
          17.7329158,
          49.5518867
        ],
        [
          17.7328606,
          49.551888
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282386",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282386"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7333104,
          49.5517072
        ],
        [
          17.7331677,
          49.5517131
        ],
        [
          17.7331608,
          49.5516424
        ],
        [
          17.7331572,
          49.5516062
        ],
        [
          17.7332999,
          49.5516003
        ],
        [
          17.7333035,
          49.5516366
        ],
        [
          17.7333104,
          49.5517072
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282387",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282387"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7328804,
          49.5514982
        ],
        [
          17.7328894,
          49.5513929
        ],
        [
          17.7329904,
          49.5513947
        ],
        [
          17.7329653,
          49.551498
        ],
        [
          17.7328804,
          49.5514982
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282388",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282388"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7339988,
          49.5528481
        ],
        [
          17.7339878,
          49.552722
        ],
        [
          17.7340583,
          49.5527194
        ],
        [
          17.7340728,
          49.5528851
        ],
        [
          17.7340023,
          49.5528877
        ],
        [
          17.7339988,
          49.5528481
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282389",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282389"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7339499,
          49.553004
        ],
        [
          17.7339365,
          49.5528504
        ],
        [
          17.7339988,
          49.5528481
        ],
        [
          17.7340023,
          49.5528877
        ],
        [
          17.7340123,
          49.5530017
        ],
        [
          17.7339499,
          49.553004
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282390",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282390"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7332133,
          49.5534939
        ],
        [
          17.733205,
          49.5534439
        ],
        [
          17.7333656,
          49.5534327
        ],
        [
          17.7333738,
          49.5534827
        ],
        [
          17.7332133,
          49.5534939
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282391",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282391"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7338363,
          49.5532885
        ],
        [
          17.7337906,
          49.553291
        ],
        [
          17.7337716,
          49.5532903
        ],
        [
          17.7337646,
          49.5532014
        ],
        [
          17.7338339,
          49.5532014
        ],
        [
          17.7338363,
          49.5532885
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282392",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282392"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7337957,
          49.5533294
        ],
        [
          17.7337906,
          49.553291
        ],
        [
          17.7338363,
          49.5532885
        ],
        [
          17.733952,
          49.553282
        ],
        [
          17.7339571,
          49.5533204
        ],
        [
          17.7337957,
          49.5533294
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282393",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282393"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7338607,
          49.5536121
        ],
        [
          17.7337765,
          49.5536127
        ],
        [
          17.7337154,
          49.553614
        ],
        [
          17.7336315,
          49.5536127
        ],
        [
          17.7336325,
          49.5535658
        ],
        [
          17.7338599,
          49.5535642
        ],
        [
          17.7338607,
          49.5536121
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282395",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282395"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7331533,
          49.5554374
        ],
        [
          17.7332595,
          49.5554339
        ],
        [
          17.7332683,
          49.5555458
        ],
        [
          17.7331622,
          49.5555493
        ],
        [
          17.7331533,
          49.5554374
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282396",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282396"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7338991,
          49.5557147
        ],
        [
          17.7338964,
          49.5556531
        ],
        [
          17.7339566,
          49.5556519
        ],
        [
          17.7339606,
          49.5557132
        ],
        [
          17.7338991,
          49.5557147
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282397",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282397"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7339313,
          49.5554524
        ],
        [
          17.7339206,
          49.5553911
        ],
        [
          17.7339794,
          49.5553868
        ],
        [
          17.7339901,
          49.5554481
        ],
        [
          17.7339313,
          49.5554524
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282398",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "198",
    "addr:housenumber": "198",
    "addr:street": "Fisch Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282398"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.733728,
          49.5526753
        ],
        [
          17.733789,
          49.5525414
        ],
        [
          17.7339917,
          49.5525858
        ],
        [
          17.7339878,
          49.552722
        ],
        [
          17.7339564,
          49.5527168
        ],
        [
          17.733728,
          49.5526753
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282400",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282400"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.733789,
          49.5525414
        ],
        [
          17.7338001,
          49.5525114
        ],
        [
          17.7339735,
          49.552554
        ],
        [
          17.7339969,
          49.5525766
        ],
        [
          17.734009,
          49.5525882
        ],
        [
          17.7339917,
          49.5525858
        ],
        [
          17.733789,
          49.5525414
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282401",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282401"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7336023,
          49.5534189
        ],
        [
          17.7336717,
          49.5532821
        ],
        [
          17.733745,
          49.5532978
        ],
        [
          17.7336756,
          49.5534346
        ],
        [
          17.7336413,
          49.5534273
        ],
        [
          17.7336023,
          49.5534189
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282402",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282402"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7329494,
          49.5534005
        ],
        [
          17.7330024,
          49.5533514
        ],
        [
          17.7331748,
          49.5534299
        ],
        [
          17.7331217,
          49.5534789
        ],
        [
          17.7330405,
          49.553442
        ],
        [
          17.7329494,
          49.5534005
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282403",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282403"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7315967,
          49.5538957
        ],
        [
          17.7315407,
          49.5539508
        ],
        [
          17.7314484,
          49.5539086
        ],
        [
          17.7315293,
          49.5538356
        ],
        [
          17.7316314,
          49.5538637
        ],
        [
          17.7315967,
          49.5538957
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282404",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282404"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7298486,
          49.5539767
        ],
        [
          17.7299612,
          49.5539948
        ],
        [
          17.7299044,
          49.5541432
        ],
        [
          17.7297919,
          49.5541251
        ],
        [
          17.7298486,
          49.5539767
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282405",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282405"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7330657,
          49.5520888
        ],
        [
          17.7330638,
          49.5521215
        ],
        [
          17.7330082,
          49.5521201
        ],
        [
          17.7330102,
          49.5520874
        ],
        [
          17.7330657,
          49.5520888
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282406",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1941",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1941",
    "start_date": "1830",
    "id": "way/198282406"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7331599,
          49.5518712
        ],
        [
          17.7331537,
          49.5519032
        ],
        [
          17.7334068,
          49.5519238
        ],
        [
          17.7333965,
          49.5519773
        ],
        [
          17.7332643,
          49.5519666
        ],
        [
          17.7330723,
          49.551951
        ],
        [
          17.7330888,
          49.5518654
        ],
        [
          17.7331599,
          49.5518712
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282407",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282407"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7332869,
          49.5517951
        ],
        [
          17.733288,
          49.5518255
        ],
        [
          17.7332525,
          49.5518261
        ],
        [
          17.7332513,
          49.5517956
        ],
        [
          17.7332869,
          49.5517951
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282408",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282408"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7334862,
          49.551629
        ],
        [
          17.7334932,
          49.5516996
        ],
        [
          17.7333104,
          49.5517072
        ],
        [
          17.7333035,
          49.5516366
        ],
        [
          17.7334862,
          49.551629
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282409",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282409"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7334435,
          49.5514443
        ],
        [
          17.7334514,
          49.5514958
        ],
        [
          17.7333186,
          49.5514988
        ],
        [
          17.7331206,
          49.5514977
        ],
        [
          17.7330746,
          49.5514978
        ],
        [
          17.7330716,
          49.551445
        ],
        [
          17.7334435,
          49.5514443
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282410",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282410"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.733266,
          49.5513214
        ],
        [
          17.7332647,
          49.5513823
        ],
        [
          17.7332156,
          49.5513819
        ],
        [
          17.7332169,
          49.551321
        ],
        [
          17.733266,
          49.5513214
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282411",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "177",
    "addr:housenumber": "177",
    "addr:street": "Fisch Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282411"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7333658,
          49.5513034
        ],
        [
          17.7333633,
          49.551413
        ],
        [
          17.733264,
          49.5514121
        ],
        [
          17.7332647,
          49.5513823
        ],
        [
          17.733266,
          49.5513214
        ],
        [
          17.7332665,
          49.5513025
        ],
        [
          17.7333658,
          49.5513034
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282412",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "176",
    "addr:housenumber": "176",
    "addr:street": "Fisch Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282412"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7333202,
          49.5515265
        ],
        [
          17.7334554,
          49.5515226
        ],
        [
          17.733465,
          49.5515852
        ],
        [
          17.7333239,
          49.5515887
        ],
        [
          17.7333202,
          49.5515265
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282413",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "175",
    "addr:housenumber": "175",
    "addr:street": "Fisch Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1941",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1941",
    "start_date": "1830",
    "id": "way/198282413"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7333604,
          49.5517678
        ],
        [
          17.7334956,
          49.5517621
        ],
        [
          17.7335038,
          49.5518442
        ],
        [
          17.7333686,
          49.5518499
        ],
        [
          17.7333604,
          49.5517678
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282414",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "174",
    "addr:housenumber": "174",
    "addr:street": "Fisch Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282414"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7334014,
          49.5520634
        ],
        [
          17.7333474,
          49.5521933
        ],
        [
          17.7331091,
          49.5521516
        ],
        [
          17.733123,
          49.5521181
        ],
        [
          17.7332148,
          49.5521341
        ],
        [
          17.7332316,
          49.5520937
        ],
        [
          17.7331081,
          49.5520721
        ],
        [
          17.7331228,
          49.5520367
        ],
        [
          17.7332465,
          49.5520584
        ],
        [
          17.7332551,
          49.5520378
        ],
        [
          17.7334014,
          49.5520634
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282415",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "173",
    "addr:housenumber": "173",
    "addr:street": "Fisch Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282415"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7331533,
          49.5522599
        ],
        [
          17.7333381,
          49.5522556
        ],
        [
          17.7333061,
          49.5523157
        ],
        [
          17.7332285,
          49.5524498
        ],
        [
          17.7330491,
          49.5524448
        ],
        [
          17.7330648,
          49.5524169
        ],
        [
          17.7330747,
          49.5523994
        ],
        [
          17.7331402,
          49.5523983
        ],
        [
          17.7331866,
          49.5523967
        ],
        [
          17.7332315,
          49.5522941
        ],
        [
          17.7331818,
          49.552295
        ],
        [
          17.7331334,
          49.5522952
        ],
        [
          17.7331533,
          49.5522599
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282416",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "172",
    "addr:housenumber": "172",
    "addr:street": "Fisch Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282416"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7331218,
          49.552478
        ],
        [
          17.7332256,
          49.5525004
        ],
        [
          17.7332066,
          49.5525375
        ],
        [
          17.7331327,
          49.5526819
        ],
        [
          17.7330289,
          49.5526596
        ],
        [
          17.7331218,
          49.552478
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282417",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "171",
    "addr:housenumber": "171",
    "addr:street": "Fisch Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282417"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7327941,
          49.552693
        ],
        [
          17.733021,
          49.5527402
        ],
        [
          17.7329836,
          49.5528158
        ],
        [
          17.7329705,
          49.5528422
        ],
        [
          17.7329319,
          49.5529204
        ],
        [
          17.7328188,
          49.5528968
        ],
        [
          17.7328807,
          49.5527715
        ],
        [
          17.7327669,
          49.5527479
        ],
        [
          17.7327941,
          49.552693
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282418",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "170",
    "addr:housenumber": "170",
    "addr:street": "Fisch Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "source:start_date": "https://iispp.npu.cz/mis_public/searchDocument.htm?search=19371/8-3169",
    "start_date": "1755",
    "id": "way/198282418"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7324693,
          49.5531125
        ],
        [
          17.7324995,
          49.5530473
        ],
        [
          17.732517,
          49.5530095
        ],
        [
          17.7327062,
          49.5530464
        ],
        [
          17.7326585,
          49.5531494
        ],
        [
          17.7324693,
          49.5531125
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282419",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "169",
    "addr:housenumber": "169",
    "addr:street": "Fisch Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282419"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7321027,
          49.5534612
        ],
        [
          17.7321645,
          49.5534071
        ],
        [
          17.7322148,
          49.5534312
        ],
        [
          17.7323136,
          49.5534786
        ],
        [
          17.7322492,
          49.5535361
        ],
        [
          17.7321027,
          49.5534612
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282420",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "168",
    "addr:housenumber": "168",
    "addr:street": "Fisch Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1941",
    "start_date": "1830",
    "id": "way/198282420"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.731936,
          49.5534895
        ],
        [
          17.7320082,
          49.5535219
        ],
        [
          17.7320302,
          49.5535318
        ],
        [
          17.732177,
          49.5535977
        ],
        [
          17.7321369,
          49.5536353
        ],
        [
          17.7320706,
          49.5536975
        ],
        [
          17.731995,
          49.5536636
        ],
        [
          17.7319691,
          49.5536879
        ],
        [
          17.7319148,
          49.5536635
        ],
        [
          17.731944,
          49.5536362
        ],
        [
          17.7318327,
          49.5535863
        ],
        [
          17.731936,
          49.5534895
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282421",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "167",
    "addr:housenumber": "167",
    "addr:street": "Fisch Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282421"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7299758,
          49.5536087
        ],
        [
          17.7300139,
          49.5536516
        ],
        [
          17.7298682,
          49.5537061
        ],
        [
          17.7298301,
          49.5536631
        ],
        [
          17.7299758,
          49.5536087
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282422",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "165",
    "addr:housenumber": "165",
    "addr:street": "Fisch Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282422"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7299656,
          49.5538605
        ],
        [
          17.7299815,
          49.5539135
        ],
        [
          17.7296687,
          49.5539531
        ],
        [
          17.7296527,
          49.5539002
        ],
        [
          17.7298503,
          49.5538752
        ],
        [
          17.7299656,
          49.5538605
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282423",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "164",
    "addr:housenumber": "164",
    "addr:street": "Fisch Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1889",
    "source": "mza:d9",
    "source:end_date": "http://digi.archives.cz/da/permalink?xid=76ac9006-970f-4a89-b069-a8eda4bd8ddb242989&scan=84#scan84",
    "start_date": "1830",
    "id": "way/198282423"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7303849,
          49.553703
        ],
        [
          17.7305067,
          49.553702
        ],
        [
          17.7305102,
          49.5538671
        ],
        [
          17.7303883,
          49.5538682
        ],
        [
          17.7303849,
          49.553703
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282424",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "163",
    "addr:housenumber": "163",
    "addr:street": "Fisch Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282424"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7309721,
          49.5537012
        ],
        [
          17.7310497,
          49.5537077
        ],
        [
          17.73101,
          49.5538474
        ],
        [
          17.7309287,
          49.553839
        ],
        [
          17.7309721,
          49.5537012
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282425",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "162",
    "addr:housenumber": "162",
    "addr:street": "Fisch Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282425"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7318487,
          49.5539124
        ],
        [
          17.731648,
          49.5540972
        ],
        [
          17.7315726,
          49.5540627
        ],
        [
          17.731624,
          49.5540154
        ],
        [
          17.7317018,
          49.5539437
        ],
        [
          17.7315967,
          49.5538957
        ],
        [
          17.7316314,
          49.5538637
        ],
        [
          17.7316682,
          49.5538299
        ],
        [
          17.7318487,
          49.5539124
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282426",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "161",
    "addr:housenumber": "161",
    "addr:street": "Fisch Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282426"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7324267,
          49.5538152
        ],
        [
          17.7325551,
          49.5538443
        ],
        [
          17.7325295,
          49.5538918
        ],
        [
          17.7324913,
          49.5538834
        ],
        [
          17.7324242,
          49.5540116
        ],
        [
          17.7323676,
          49.5539988
        ],
        [
          17.7323315,
          49.5539919
        ],
        [
          17.7324267,
          49.5538152
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282427",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "160",
    "addr:housenumber": "160",
    "addr:street": "Fisch Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282427"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7326274,
          49.5536216
        ],
        [
          17.7327894,
          49.5537105
        ],
        [
          17.7327251,
          49.5537599
        ],
        [
          17.732563,
          49.553671
        ],
        [
          17.7326274,
          49.5536216
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282428",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "159",
    "addr:housenumber": "159",
    "addr:street": "Fisch Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282428"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7329494,
          49.5534005
        ],
        [
          17.7330405,
          49.553442
        ],
        [
          17.73294,
          49.5535349
        ],
        [
          17.7328489,
          49.5534935
        ],
        [
          17.7329494,
          49.5534005
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282429",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "158",
    "addr:housenumber": "158",
    "addr:street": "Fisch Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282429"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7330748,
          49.5533061
        ],
        [
          17.7331194,
          49.5532616
        ],
        [
          17.7333388,
          49.553354
        ],
        [
          17.7333843,
          49.5533732
        ],
        [
          17.7333398,
          49.5534177
        ],
        [
          17.7330748,
          49.5533061
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282430",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "157",
    "addr:housenumber": "157",
    "addr:street": "Fisch Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282430"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7334097,
          49.5529392
        ],
        [
          17.7336866,
          49.5529707
        ],
        [
          17.7336603,
          49.5530311
        ],
        [
          17.7336392,
          49.5530793
        ],
        [
          17.7336016,
          49.5531653
        ],
        [
          17.7332855,
          49.5531318
        ],
        [
          17.7333368,
          49.5530672
        ],
        [
          17.7335302,
          49.5530818
        ],
        [
          17.733541,
          49.5530605
        ],
        [
          17.7335673,
          49.5530086
        ],
        [
          17.7333689,
          49.5529841
        ],
        [
          17.7334097,
          49.5529392
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282431",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "156",
    "addr:housenumber": "156",
    "addr:street": "Fisch Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282431"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7336126,
          49.5527189
        ],
        [
          17.7336918,
          49.5527424
        ],
        [
          17.7336461,
          49.5528007
        ],
        [
          17.7336985,
          49.5528129
        ],
        [
          17.7336301,
          49.5528798
        ],
        [
          17.7335147,
          49.5528338
        ],
        [
          17.7336126,
          49.5527189
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282432",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "155",
    "addr:housenumber": "155",
    "addr:street": "Fisch Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282432"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7339658,
          49.5536114
        ],
        [
          17.7338607,
          49.5536121
        ],
        [
          17.7338599,
          49.5535642
        ],
        [
          17.7338575,
          49.5534222
        ],
        [
          17.7339627,
          49.5534215
        ],
        [
          17.7339658,
          49.5536114
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282433",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "154",
    "addr:housenumber": "154",
    "addr:street": "Fisch Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282433"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7339689,
          49.553746
        ],
        [
          17.7338638,
          49.5537461
        ],
        [
          17.7338625,
          49.5537236
        ],
        [
          17.7338607,
          49.5536121
        ],
        [
          17.7339658,
          49.5536114
        ],
        [
          17.7339689,
          49.553746
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282434",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "153",
    "addr:housenumber": "153",
    "addr:street": "Fisch Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282434"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7338614,
          49.5538558
        ],
        [
          17.733864,
          49.5538207
        ],
        [
          17.7338638,
          49.5537461
        ],
        [
          17.7339689,
          49.553746
        ],
        [
          17.7339732,
          49.5538555
        ],
        [
          17.7338614,
          49.5538558
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282435",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "152",
    "addr:housenumber": "152",
    "addr:street": "Fisch Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282435"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7339756,
          49.5539825
        ],
        [
          17.733879,
          49.5539826
        ],
        [
          17.7338786,
          49.5538859
        ],
        [
          17.7339752,
          49.5538858
        ],
        [
          17.7339756,
          49.5539825
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282436",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "151",
    "addr:housenumber": "151",
    "addr:street": "Fisch Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282436"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.733976,
          49.5541174
        ],
        [
          17.7338794,
          49.5541175
        ],
        [
          17.7338794,
          49.5541096
        ],
        [
          17.7338792,
          49.5540369
        ],
        [
          17.733879,
          49.5539826
        ],
        [
          17.7339756,
          49.5539825
        ],
        [
          17.733976,
          49.5541174
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282437",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "150",
    "addr:housenumber": "150",
    "addr:street": "Fisch Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282437"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7339777,
          49.5542605
        ],
        [
          17.7338791,
          49.55426
        ],
        [
          17.7338794,
          49.5541175
        ],
        [
          17.733976,
          49.5541174
        ],
        [
          17.7339777,
          49.5542605
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282438",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "149",
    "addr:housenumber": "149",
    "addr:street": "Fisch Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282438"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7339791,
          49.5544048
        ],
        [
          17.7338741,
          49.5544052
        ],
        [
          17.7338777,
          49.5543851
        ],
        [
          17.7338788,
          49.5542833
        ],
        [
          17.7338791,
          49.55426
        ],
        [
          17.7339777,
          49.5542605
        ],
        [
          17.7339791,
          49.5544048
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282439",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "148",
    "addr:housenumber": "148",
    "addr:street": "Fisch Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282439"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7338753,
          49.5545474
        ],
        [
          17.7338752,
          49.5545189
        ],
        [
          17.7338744,
          49.5544353
        ],
        [
          17.7338741,
          49.5544052
        ],
        [
          17.7339791,
          49.5544048
        ],
        [
          17.7339802,
          49.5545468
        ],
        [
          17.7338753,
          49.5545474
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282440",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "147",
    "addr:housenumber": "147",
    "addr:street": "Fisch Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282440"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7340346,
          49.5547009
        ],
        [
          17.7339406,
          49.5547015
        ],
        [
          17.7337851,
          49.5547025
        ],
        [
          17.7337284,
          49.5547027
        ],
        [
          17.7337275,
          49.554631
        ],
        [
          17.7338099,
          49.5546306
        ],
        [
          17.7338763,
          49.5546302
        ],
        [
          17.7339813,
          49.5546296
        ],
        [
          17.7340335,
          49.5546293
        ],
        [
          17.7340346,
          49.5547009
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282441",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "146",
    "addr:housenumber": "146",
    "addr:street": "Fisch Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282441"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7340346,
          49.5547009
        ],
        [
          17.7340361,
          49.5547974
        ],
        [
          17.733942,
          49.554798
        ],
        [
          17.7339416,
          49.5547663
        ],
        [
          17.7339406,
          49.5547015
        ],
        [
          17.7340346,
          49.5547009
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282442",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "145",
    "addr:housenumber": "145",
    "addr:street": "Fisch Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282442"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7340642,
          49.5548501
        ],
        [
          17.7340722,
          49.5549832
        ],
        [
          17.733909,
          49.5549874
        ],
        [
          17.7339079,
          49.5549678
        ],
        [
          17.7339036,
          49.5548964
        ],
        [
          17.733901,
          49.5548542
        ],
        [
          17.7340642,
          49.5548501
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282443",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "144",
    "addr:housenumber": "144",
    "addr:street": "Fisch Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282443"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7341072,
          49.5551617
        ],
        [
          17.7340298,
          49.5551639
        ],
        [
          17.7339845,
          49.5551652
        ],
        [
          17.7339732,
          49.5550211
        ],
        [
          17.7340955,
          49.5550171
        ],
        [
          17.7341072,
          49.5551617
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282444",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "143",
    "addr:housenumber": "143",
    "addr:street": "Fisch Gasse",
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282444"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7340392,
          49.555302
        ],
        [
          17.7340298,
          49.5551639
        ],
        [
          17.7341072,
          49.5551617
        ],
        [
          17.7341166,
          49.5553013
        ],
        [
          17.7340392,
          49.555302
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282445",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "142",
    "addr:housenumber": "142",
    "addr:street": "Fisch Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282445"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7339496,
          49.5555576
        ],
        [
          17.7339313,
          49.5554524
        ],
        [
          17.7339901,
          49.5554481
        ],
        [
          17.7341595,
          49.5554357
        ],
        [
          17.7341778,
          49.5555409
        ],
        [
          17.7339496,
          49.5555576
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282446",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "141",
    "addr:housenumber": "141",
    "addr:street": "Fisch Gasse",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282446"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7339969,
          49.5559044
        ],
        [
          17.7339967,
          49.5558274
        ],
        [
          17.734207,
          49.5558214
        ],
        [
          17.7342097,
          49.5558967
        ],
        [
          17.7339969,
          49.5559044
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282500",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282500"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7350522,
          49.5543513
        ],
        [
          17.7350499,
          49.5543001
        ],
        [
          17.7351521,
          49.5542984
        ],
        [
          17.7352298,
          49.5543006
        ],
        [
          17.7352229,
          49.5543456
        ],
        [
          17.7350522,
          49.5543513
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282501",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282501"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7351357,
          49.554499
        ],
        [
          17.7351372,
          49.5544693
        ],
        [
          17.7351395,
          49.5544268
        ],
        [
          17.7352176,
          49.5544285
        ],
        [
          17.7352138,
          49.5545007
        ],
        [
          17.7351357,
          49.554499
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282502",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282502"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7349072,
          49.5554084
        ],
        [
          17.7349072,
          49.5553499
        ],
        [
          17.7351839,
          49.5553499
        ],
        [
          17.7351838,
          49.5554088
        ],
        [
          17.7349967,
          49.555408
        ],
        [
          17.7349072,
          49.5554084
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282503",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282503"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7351872,
          49.5550275
        ],
        [
          17.7351872,
          49.5550822
        ],
        [
          17.7351828,
          49.5551316
        ],
        [
          17.7351092,
          49.5551316
        ],
        [
          17.7351093,
          49.5551013
        ],
        [
          17.734736,
          49.5551009
        ],
        [
          17.7347362,
          49.5550273
        ],
        [
          17.7347993,
          49.5550276
        ],
        [
          17.7351872,
          49.5550275
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282505",
  "properties": {
    "addr:city": "Židovská obec Hranice",
    "addr:conscriptionnumber": "XXXVII",
    "addr:housenumber": "XXXVII",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282505"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7357031,
          49.5549494
        ],
        [
          17.7357049,
          49.5549141
        ],
        [
          17.7357625,
          49.5549153
        ],
        [
          17.7357609,
          49.554948
        ],
        [
          17.7359253,
          49.5549514
        ],
        [
          17.7359228,
          49.5550032
        ],
        [
          17.7357007,
          49.5549986
        ],
        [
          17.7357031,
          49.5549494
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282506",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "329",
    "addr:housenumber": "329",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "source:addr": "http://historie.hranet.cz/bartovsky1/216.htm",
    "start_date": "1830",
    "id": "way/198282506"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7355147,
          49.5549947
        ],
        [
          17.7355206,
          49.5548763
        ],
        [
          17.7356562,
          49.5548791
        ],
        [
          17.7356528,
          49.5549484
        ],
        [
          17.7357031,
          49.5549494
        ],
        [
          17.7357007,
          49.5549986
        ],
        [
          17.735663,
          49.5549978
        ],
        [
          17.7355147,
          49.5549947
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282507",
  "properties": {
    "addr:city": "Židovská obec Hranice",
    "addr:conscriptionnumber": "XXVIII",
    "addr:housenumber": "XXVIII",
    "building": "house",
    "building:material": "brick",
    "end_date": "1919",
    "source": "mza:d9",
    "source:addr": "http://historie.hranet.cz/bartovsky1/216.htm",
    "start_date": "1830",
    "id": "way/198282507"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.735553,
          49.5546088
        ],
        [
          17.7355563,
          49.5545132
        ],
        [
          17.7356772,
          49.5545149
        ],
        [
          17.735676,
          49.5545509
        ],
        [
          17.7356739,
          49.5546105
        ],
        [
          17.735553,
          49.5546088
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282508",
  "properties": {
    "addr:city": "Židovská obec Hranice",
    "addr:conscriptionnumber": "XXIX",
    "addr:housenumber": "XXIX",
    "building": "house",
    "building:material": "brick",
    "end_date": "1919",
    "source": "mza:d9",
    "source:addr": "http://historie.hranet.cz/bartovsky1/216.htm",
    "start_date": "1830",
    "id": "way/198282508"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7355508,
          49.5546743
        ],
        [
          17.735553,
          49.5546088
        ],
        [
          17.7356739,
          49.5546105
        ],
        [
          17.7356717,
          49.5546761
        ],
        [
          17.7355508,
          49.5546743
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282509",
  "properties": {
    "addr:city": "Židovská obec Hranice",
    "addr:conscriptionnumber": "XXVI",
    "addr:housenumber": "XXVI",
    "building": "house",
    "building:material": "brick",
    "end_date": "1919",
    "source": "mza:d9",
    "source:addr": "http://historie.hranet.cz/bartovsky1/216.htm",
    "start_date": "1830",
    "id": "way/198282509"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7355467,
          49.5547948
        ],
        [
          17.7355508,
          49.5546743
        ],
        [
          17.7356717,
          49.5546761
        ],
        [
          17.7356709,
          49.5546983
        ],
        [
          17.7356676,
          49.5547965
        ],
        [
          17.7355467,
          49.5547948
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282510",
  "properties": {
    "addr:city": "Židovská obec Hranice",
    "addr:conscriptionnumber": "XXXIII",
    "addr:housenumber": "XXXIII",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "source:addr": "http://historie.hranet.cz/bartovsky1/216.htm",
    "start_date": "1830",
    "id": "way/198282510"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7358631,
          49.5544166
        ],
        [
          17.7359413,
          49.5544202
        ],
        [
          17.7359372,
          49.5544946
        ],
        [
          17.7358933,
          49.5544936
        ],
        [
          17.7358605,
          49.5544915
        ],
        [
          17.7358631,
          49.5544166
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282511",
  "properties": {
    "addr:city": "Židovská obec Hranice",
    "addr:conscriptionnumber": "XXXII",
    "addr:housenumber": "XXXII",
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "source:addr": "http://historie.hranet.cz/bartovsky1/216.htm",
    "start_date": "1830",
    "id": "way/198282511"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7356807,
          49.5544139
        ],
        [
          17.7357357,
          49.5544147
        ],
        [
          17.7357929,
          49.5544156
        ],
        [
          17.7358631,
          49.5544166
        ],
        [
          17.7358605,
          49.5544915
        ],
        [
          17.7356781,
          49.5544888
        ],
        [
          17.7356807,
          49.5544139
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282512",
  "properties": {
    "addr:city": "Židovská obec Hranice",
    "addr:conscriptionnumber": "XXVII",
    "addr:housenumber": "XXVII",
    "building": "house",
    "building:material": "brick",
    "end_date": "1919",
    "source": "mza:d9",
    "source:addr": "http://historie.hranet.cz/bartovsky1/216.htm",
    "start_date": "1830",
    "id": "way/198282512"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7356807,
          49.5544139
        ],
        [
          17.7356781,
          49.5544888
        ],
        [
          17.7356772,
          49.5545149
        ],
        [
          17.7355563,
          49.5545132
        ],
        [
          17.7355598,
          49.5544122
        ],
        [
          17.7356807,
          49.5544139
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282513",
  "properties": {
    "addr:city": "Židovská obec Hranice",
    "addr:conscriptionnumber": "XXV",
    "addr:housenumber": "XXV",
    "building": "house",
    "building:material": "brick",
    "end_date": "1919",
    "source": "mza:d9",
    "source:addr": "http://historie.hranet.cz/bartovsky1/216.htm",
    "start_date": "1830",
    "id": "way/198282513"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.735707,
          49.5543297
        ],
        [
          17.7357418,
          49.5543307
        ],
        [
          17.7357357,
          49.5544147
        ],
        [
          17.7356807,
          49.5544139
        ],
        [
          17.7355598,
          49.5544122
        ],
        [
          17.7355711,
          49.5543255
        ],
        [
          17.735707,
          49.5543297
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282514",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282514"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7358417,
          49.5539502
        ],
        [
          17.7358644,
          49.5539596
        ],
        [
          17.7358553,
          49.554014
        ],
        [
          17.7357007,
          49.553997
        ],
        [
          17.7355682,
          49.5539825
        ],
        [
          17.7355757,
          49.5539244
        ],
        [
          17.7357117,
          49.5539376
        ],
        [
          17.7358417,
          49.5539502
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282515",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282515"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7358525,
          49.5538827
        ],
        [
          17.7358417,
          49.5539502
        ],
        [
          17.7357117,
          49.5539376
        ],
        [
          17.7355757,
          49.5539244
        ],
        [
          17.7355915,
          49.5538558
        ],
        [
          17.7358096,
          49.5538769
        ],
        [
          17.7358525,
          49.5538827
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282516",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282516"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7359496,
          49.5538417
        ],
        [
          17.7359359,
          49.5538565
        ],
        [
          17.7359265,
          49.5538918
        ],
        [
          17.7358525,
          49.5538827
        ],
        [
          17.7358764,
          49.5538183
        ],
        [
          17.7359496,
          49.5538417
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282517",
  "properties": {
    "building": "house",
    "building:material": "brick",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282517"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7356515,
          49.552891
        ],
        [
          17.7356507,
          49.5528456
        ],
        [
          17.7358023,
          49.5528445
        ],
        [
          17.7358031,
          49.5528899
        ],
        [
          17.7356515,
          49.552891
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282518",
  "properties": {
    "addr:city": "Hranice",
    "addr:conscriptionnumber": "140",
    "addr:housenumber": "140",
    "building": "house",
    "building:material": "brick",
    "end_date": "1923",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282518"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7341326,
          49.5518341
        ],
        [
          17.7342573,
          49.5518627
        ],
        [
          17.7342326,
          49.5519079
        ],
        [
          17.7341079,
          49.5518794
        ],
        [
          17.7341326,
          49.5518341
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282519",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282519"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7340531,
          49.5516147
        ],
        [
          17.7340809,
          49.5516199
        ],
        [
          17.734067,
          49.5516667
        ],
        [
          17.7341056,
          49.5516722
        ],
        [
          17.7340734,
          49.5517157
        ],
        [
          17.7340204,
          49.551719
        ],
        [
          17.7340531,
          49.5516147
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282520",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282520"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7344751,
          49.5515158
        ],
        [
          17.7344739,
          49.5515393
        ],
        [
          17.7344022,
          49.5515377
        ],
        [
          17.7344034,
          49.5515143
        ],
        [
          17.7344751,
          49.5515158
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282521",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282521"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.734082,
          49.552022
        ],
        [
          17.7341733,
          49.5520244
        ],
        [
          17.7341571,
          49.5521717
        ],
        [
          17.7340525,
          49.5521629
        ],
        [
          17.734082,
          49.552022
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282522",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282522"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7347316,
          49.5523057
        ],
        [
          17.7346825,
          49.5523087
        ],
        [
          17.7346583,
          49.552175
        ],
        [
          17.7347117,
          49.5521711
        ],
        [
          17.7347316,
          49.5523057
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282523",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282523"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7346115,
          49.5524072
        ],
        [
          17.7346057,
          49.5523718
        ],
        [
          17.734707,
          49.5523648
        ],
        [
          17.7347116,
          49.5524022
        ],
        [
          17.7346115,
          49.5524072
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282524",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282524"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7349457,
          49.5525646
        ],
        [
          17.7349519,
          49.5526195
        ],
        [
          17.7350056,
          49.5526151
        ],
        [
          17.7350246,
          49.5526591
        ],
        [
          17.7350138,
          49.5526598
        ],
        [
          17.7349331,
          49.5526657
        ],
        [
          17.7348673,
          49.5526705
        ],
        [
          17.7348251,
          49.5525736
        ],
        [
          17.7349457,
          49.5525646
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282525",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282525"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7350138,
          49.5526598
        ],
        [
          17.7350177,
          49.5527007
        ],
        [
          17.735024,
          49.5527659
        ],
        [
          17.7349484,
          49.5527674
        ],
        [
          17.7349331,
          49.5526657
        ],
        [
          17.7350138,
          49.5526598
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282526",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "end_date": "1874",
    "source": "mza:d9",
    "source:end_date": "cuzk:katastr1924",
    "start_date": "1830",
    "id": "way/198282526"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.734423,
          49.5529212
        ],
        [
          17.7344251,
          49.5529861
        ],
        [
          17.7343648,
          49.5529869
        ],
        [
          17.7343627,
          49.5529221
        ],
        [
          17.734423,
          49.5529212
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198282527",
  "properties": {
    "building": "house",
    "building:material": "wood",
    "source": "mza:d9",
    "start_date": "1830",
    "id": "way/198282527"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          17.7349137,
          49.55337
        ],
        [
          17.7349145,
          49.5533931
        ],
        [
          17.7349151,
          49.5534128
        ],
        [
          17.7348613,
          49.5534135
        ],
        [
          17.7348599,
          49.5533707
      ]