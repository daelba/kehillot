var operaty = [
	{
		rok: "1857",
		ofic: "458",
		dohlA: "349",
		dohlR: "76.2"
	},
	{
		rok: "1869",
		ofic: "284",
		dohlA: "310",
		dohlR: "109.2"
	},
	{
		rok: "1880",
		ofic: "280",
		dohlA: "279",
		dohlR: "99.6"
	},
	{
		rok: "1890",
		ofic: "180",
		dohlA: "181",
		dohlR: "100.5"
	},
	{
		rok: "1900",
		ofic: "115",
		dohlA: "113",
		dohlR: "98.2"
	},
	{
		rok: "1910",
		ofic: "93",
		dohlA: "93",
		dohlR: "100.0"
	},
	{
		rok: "1921",
		ofic: "75",
		dohlA: "75",
		dohlR: "100.0"
	},
	{
		rok: "1930",
		ofic: "55",
		dohlA: "0",
		dohlR: "0"
	},
];
var zdroje = "<p><b>Osobní data:</b> Státní okresní archiv Kolín, f. Archiv města Kolín, sčítací operáty z let 1857 a 1869 (neinventarizováno); f. Okresní úřad Kolín I, sčítací operáty z let 1880, 1900 a 1921 (neinventarizováno).</p><p><b>Mapové podklady:</b> Národní archiv, Stabilní katastr [SK], Kolín; Ústav archivu zeměměřičství a katastru, Stabilní katastr, jeho obnova a údržba, sign. B2/a/4C, inv. č. 3003; sign. B2/a/14C, inv. č. 3283.</p>";
var maxPocet = 70;
var obyv = [
	{
		rok: "1857",
		obec: "Loštice",
		cast: "",
		cp: "I",
		pocet: "2",
		obyv: [
			{ jm: "Salomon Hersch", arch: "Salomon Hersch (1790–1860)", q: "" },
			{ jm: "Cecilie Hersch", arch: "Cecilia Hersch (1843)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "I",
		pocet: "8",
		obyv: [
			{ jm: "Moritz Aufrichtig", arch: "Moritz Aufrichtig (1831–1884)", q: "" },
			{ jm: "Therese Aufrichtig", arch: "Therese Aufrichtig (1847)", q: "" },
			{ jm: "Sali Aufrichtig", arch: "Sali Milch (1860)", q: "" },
			{ jm: "Fany Aufrichtig", arch: "Fany Aufrichtig (1862)", q: "" },
			{ jm: "Sali Rischavý", arch: "Sali Rischavý (1840)", q: "" },
			{ jm: "Heinrich Knödl", arch: "Heinrich Knödl (1855)", q: "" },
			{ jm: "Alois Blum", arch: "Alois Blum (1854)", q: "" },
			{ jm: "Cecilia Hersch", arch: "Cecilia Hersch (1843)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "I",
		pocet: "8",
		obyv: [
			{ jm: "Ignatz Käufler", arch: "Ignatz Käufler (1844–1893)", q: "" },
			{ jm: "Julie Käufler geb. Lindner", arch: "Julie Käufler (1845)", q: "" },
			{ jm: "Max Käufler", arch: "Max Käufler (1870)", q: "" },
			{ jm: "Albert Käufler", arch: "Albert Käufler (1872)", q: "" },
			{ jm: "Ludwig Käufler", arch: "Ludwig Käufler (1875)", q: "" },
			{ jm: "Genie Käufler", arch: "Eugenie Steiner (1878–1930)", q: "" },
			{ jm: "Rosa Käufler", arch: "Rosa Käufler (1880)", q: "" },
			{ jm: "Jetti Lindner", arch: "Jetti Lindner (1835–1894)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Loštice",
		cast: "",
		cp: "I",
		pocet: "7",
		obyv: [
			{ jm: "Juli Käufler geb. Lindner", arch: "Julie Käufler (1845)", q: "" },
			{ jm: "Jennie Käufler", arch: "Eugenie Steiner (1878–1930)", q: "" },
			{ jm: "Rosa Käufler", arch: "Rosa Käufler (1880)", q: "" },
			{ jm: "Arthur Käufler", arch: "Arthur Käufler (1882)", q: "" },
			{ jm: "Olga Käufler", arch: "Olga Günstlingová (1884)", q: "Q105517230" },
			{ jm: "Paula Käufler", arch: "Paula Käufler (1886)", q: "" },
			{ jm: "Jetti Lindner", arch: "Jetti Lindner (1835–1894)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Loštice",
		cast: "",
		cp: "IIa",
		pocet: "9",
		obyv: [
			{ jm: "Samuel Treu", arch: "Samuel Treu (1796)", q: "" },
			{ jm: "Juditha Treu", arch: "Juditha Treu (1836)", q: "" },
			{ jm: "Juditha Treu", arch: "Juditha Treu (1772–1861)", q: "" },
			{ jm: "David Käufler", arch: "David Kaufler (1808–1894)", q: "" },
			{ jm: "Marie Käufler", arch: "Maria Käufler (1808–1878)", q: "" },
			{ jm: "Emanuel Käufler", arch: "Emanuel Käufler (1841)", q: "" },
			{ jm: "Katti Käufler", arch: "Katharina Eckstein (1839–1885)", q: "" },
			{ jm: "Babette Käufler", arch: "Babette Brand (1847)", q: "" },
			{ jm: "Abraham Lindner", arch: "Abraham Lindner (1794)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "IIa",
		pocet: "5",
		obyv: [
			{ jm: "Salomon Hersch", arch: "Salomon Hersch (1806–1877)", q: "" },
			{ jm: "Elias Hersch", arch: "Elias Hersch (1845–1873)", q: "" },
			{ jm: "Markus Hersch", arch: "Markus Hersch (1847–1873)", q: "" },
			{ jm: "Isak Hersch", arch: "Isak Hersch (1849–1883)", q: "" },
			{ jm: "Leopold Hersch", arch: "Leopold Hirsch (1851)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "IIa",
		pocet: "5",
		obyv: [
			{ jm: "Salomon Hirsch", arch: "Salomon Hirsch (1827–1888)", q: "" },
			{ jm: "Betti Hirsch geb. Wolf", arch: "Betti Hirsch (1828–1882)", q: "" },
			{ jm: "Jakob Hirsch", arch: "Jakob Hirsch (1857)", q: "" },
			{ jm: "Rosi Hirsch", arch: "Rosa Adler (1868)", q: "" },
			{ jm: "Sigfried Hirsch", arch: "Sigfried Hirsch (1871)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Loštice",
		cast: "",
		cp: "IIb",
		pocet: "6",
		obyv: [
			{ jm: "Salomon Hersch", arch: "Salomon Hersch (1806–1877)", q: "" },
			{ jm: "Fanni Hersch", arch: "Fanni Hersch (1822–1858)", q: "" },
			{ jm: "Elias Hersch", arch: "Elias Hersch (1845–1873)", q: "" },
			{ jm: "Markus Hersch", arch: "Markus Hersch (1847–1873)", q: "" },
			{ jm: "Isak Hersch", arch: "Isak Hersch (1849–1883)", q: "" },
			{ jm: "Leopold Hersch", arch: "Leopold Hirsch (1851)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "IIb",
		pocet: "10",
		obyv: [
			{ jm: "Moritz Frisch", arch: "Moritz Frisch (1823–1898)", q: "" },
			{ jm: "Rosa Frisch geb. Aufrichtig", arch: "Rosa Frisch (1827)", q: "" },
			{ jm: "Samuel Frisch", arch: "Samuel Frisch (1850–1917)", q: "" },
			{ jm: "Betti Frisch", arch: "Betti Braun (1852)", q: "" },
			{ jm: "Fani Frisch", arch: "Fani Goldberger (1856)", q: "" },
			{ jm: "Alois Frisch", arch: "Alois Frisch (1858)", q: "" },
			{ jm: "Ernestine Frisch", arch: "Ernestine Brechner (1868)", q: "" },
			{ jm: "Babetti Frisch", arch: "Babetti Frisch (1800)", q: "" },
			{ jm: "Dawid Käufler", arch: "David Kaufler (1808–1894)", q: "" },
			{ jm: "Maria Käufler", arch: "Maria Käufler (1808–1878)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "IIb",
		pocet: "4",
		obyv: [
			{ jm: "Isak Hirsch", arch: "Isak Hersch (1849–1883)", q: "" },
			{ jm: "Netti Hirsch", arch: "Netti Hirsch (1856)", q: "" },
			{ jm: "Emil Hirsch", arch: "Emil Hirsch (1875)", q: "" },
			{ jm: "Leopold Hirsch", arch: "Leopold Hirsch (1851)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Loštice",
		cast: "",
		cp: "IIb",
		pocet: "3",
		obyv: [
			{ jm: "Netty Hirsch", arch: "Netti Hirsch (1856)", q: "" },
			{ jm: "Fanny Hirsch", arch: "Fanni Hirsch (1881)", q: "" },
			{ jm: "Leopold Hirsch", arch: "Leopold Hirsch (1851)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Loštice",
		cast: "",
		cp: "IIb",
		pocet: "3",
		obyv: [
			{ jm: "Netti Hirsch", arch: "Netti Hirsch (1856)", q: "" },
			{ jm: "Fanni Hirsch", arch: "Fanni Hirsch (1881)", q: "" },
			{ jm: "Leopold Hirsch", arch: "Leopold Hirsch (1851)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Loštice",
		cast: "",
		cp: "III",
		pocet: "3",
		obyv: [
			{ jm: "Moritz Klein", arch: "Moritz Klein (1865)", q: "" },
			{ jm: "Sali Klein", arch: "Sali Klein (1867)", q: "" },
			{ jm: "Ella Klein", arch: "Ella Klein (1896)", q: "Q105520830" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Loštice",
		cast: "",
		cp: "IIIa",
		pocet: "8",
		obyv: [
			{ jm: "Abraham Kling", arch: "Abraham Kling (1808–1881)", q: "" },
			{ jm: "Saly Kling", arch: "Sali Kling (1813–1897)", q: "" },
			{ jm: "Alois Kling", arch: "Alois Kling (1848)", q: "" },
			{ jm: "Rosy Kling", arch: "Rosa Knöpfelmacher (1844)", q: "" },
			{ jm: "Hanni Kling", arch: "Johanna Eckstein (1854–1924)", q: "" },
			{ jm: "Cecilie Kling", arch: "Cecilie Ulmer (1855)", q: "" },
			{ jm: "Samuel Jarolim", arch: "Samuel Jarolim (1825–1892)", q: "" },
			{ jm: "Fanni Jarolim", arch: "Fani Jarolim (1827)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "IIIa",
		pocet: "6",
		obyv: [
			{ jm: "Abraham Kling", arch: "Abraham Kling (1808–1881)", q: "" },
			{ jm: "Sali Kling", arch: "Sali Kling (1813–1897)", q: "" },
			{ jm: "Hani Kling", arch: "Johanna Eckstein (1854–1924)", q: "" },
			{ jm: "Cilli Kling", arch: "Cecilie Ulmer (1855)", q: "" },
			{ jm: "Sigmund Knöpfelmacher", arch: "Siegmund Knöpfelmacher (1846)", q: "" },
			{ jm: "Rosa Knöpfelmacher", arch: "Rosa Knöpfelmacher (1844)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "IIIa",
		pocet: "11",
		obyv: [
			{ jm: "Eva Ehrenfest", arch: "Eva Ehrenfest (1786–1883)", q: "" },
			{ jm: "Karoline Ehrenfest", arch: "Karoline Ehrenfest (1811–1885)", q: "" },
			{ jm: "Theresie Ehrenfest", arch: "Theresie Ehrenfest (1846)", q: "" },
			{ jm: "Anna Ehrenfest", arch: "Anna Ehrenfest (1848–1897)", q: "" },
			{ jm: "Abraham Kling", arch: "Abraham Kling (1808–1881)", q: "" },
			{ jm: "Sali Kling", arch: "Sali Kling (1813–1897)", q: "" },
			{ jm: "Cheila Kling", arch: "Cecilie Ulmer (1855)", q: "" },
			{ jm: "Bernard Löwi", arch: "Bernard Löwi (1830)", q: "" },
			{ jm: "Resi Löwi", arch: "Resi Löwi (1832)", q: "" },
			{ jm: "Rosa Löwi", arch: "Rosa Löwi (1863)", q: "" },
			{ jm: "Loisi Löwi", arch: "Loisi Löwi (1870)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Loštice",
		cast: "",
		cp: "IIIb",
		pocet: "11",
		obyv: [
			{ jm: "Samuel Bruckmann", arch: "Samuel Bruckmann (1826–1873)", q: "" },
			{ jm: "Leny Bruckmann", arch: "Leny Bruckmann (1830)", q: "" },
			{ jm: "Albert Bruckmann", arch: "Albert Bruckmann (1851)", q: "" },
			{ jm: "Betti Bruckmann", arch: "Betti Bruckmann (1854)", q: "" },
			{ jm: "Mathilde Bruckmann", arch: "Mathilde Steiner (1857)", q: "" },
			{ jm: "Jos. (Pinkas) Ehrenfest", arch: "Josef Ehrenfest (1800–1868)", q: "" },
			{ jm: "Lotti (Karolina) Ehrenfest", arch: "Karoline Ehrenfest (1811–1885)", q: "" },
			{ jm: "Hermann (Herschel) Ehrenfest", arch: "Hermann Ehrenfest (1841)", q: "" },
			{ jm: "Betti Ehrenfest", arch: "Betti Ehrenfest (1843)", q: "" },
			{ jm: "Netti Ehrenfest", arch: "Anna Ehrenfest (1848–1897)", q: "" },
			{ jm: "Resy Ehrenfest", arch: "Theresie Ehrenfest (1846)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "IIIb",
		pocet: "3",
		obyv: [
			{ jm: "Lotti Ehrenfest", arch: "Karoline Ehrenfest (1811–1885)", q: "" },
			{ jm: "Hermann Ehrenfest", arch: "Hermann Ehrenfest (1841)", q: "" },
			{ jm: "Therese Ehrenfest", arch: "Theresie Ehrenfest (1846)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "IIIb",
		pocet: "3",
		obyv: [
			{ jm: "Alois Kling", arch: "Alois Kling (1848)", q: "" },
			{ jm: "Berta Kling", arch: "Berta Kling (1856)", q: "" },
			{ jm: "Alfred Kling", arch: "Alfred Kling (1877)", q: "Q108902321" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Loštice",
		cast: "",
		cp: "IIIb",
		pocet: "6",
		obyv: [
			{ jm: "Max Hirsch", arch: "Max Hirsch (1846)", q: "" },
			{ jm: "Karolina Hirsch", arch: "Karolina Hirsch (1871)", q: "" },
			{ jm: "Berta Hirsch", arch: "Berta Weiss (1872)", q: "" },
			{ jm: "Ida Hirsch", arch: "Ida Hirsch (1876)", q: "" },
			{ jm: "Erna Hirsch", arch: "Erna Hirsch (1875)", q: "" },
			{ jm: "Gisela Hirsch", arch: "Gisela Hirsch (1877)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Loštice",
		cast: "",
		cp: "IIIc",
		pocet: "5",
		obyv: [
			{ jm: "Lazar Moller", arch: "Lazar Moller (1821–1888)", q: "" },
			{ jm: "Rosi Moller", arch: "Rosalie Moller (1824–1889)", q: "" },
			{ jm: "Jakob Moller", arch: "Jakob Moller (1851)", q: "" },
			{ jm: "Albert Moller", arch: "Albert Moller (1854)", q: "" },
			{ jm: "July Moller", arch: "Julie Moller (1852)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Loštice",
		cast: "",
		cp: "IIIc",
		pocet: "3",
		obyv: [
			{ jm: "Isak Fuchs", arch: "Isak Fuchs (1831)", q: "" },
			{ jm: "Jetti Fuchs", arch: "Jetti Fuchs (1841–1894)", q: "" },
			{ jm: "Scheni Fuchs", arch: "Genie Fuchs (1870)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Loštice",
		cast: "",
		cp: "IV",
		pocet: "3",
		obyv: [
			{ jm: "Julius Skopal", arch: "Julius Skopal (1868)", q: "" },
			{ jm: "Rosa Skopal", arch: "Rosa Skopal (1873)", q: "" },
			{ jm: "Arnošt Skopal", arch: "Ernst Skopal (1898)", q: "Q108900721" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Loštice",
		cast: "",
		cp: "IV",
		pocet: "1",
		obyv: [
			{ jm: "Samuel Lindner", arch: "Samuel Lindner (1843)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Loštice",
		cast: "",
		cp: "IVa",
		pocet: "2",
		obyv: [
			{ jm: "Wilhelm Tauber", arch: "Wilhelm Tauber (1843)", q: "" },
			{ jm: "Rebeka Ehrenfest", arch: "Rebeka Ehrenfest (1797)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "IVa",
		pocet: "2",
		obyv: [
			{ jm: "Leopold Hecht", arch: "Leopold Hecht (1826)", q: "" },
			{ jm: "Therese Hecht", arch: "Therese Hecht (1827)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Loštice",
		cast: "",
		cp: "IVb",
		pocet: "8",
		obyv: [
			{ jm: "Moritz Bermann", arch: "Moritz Bermann (1810–1870)", q: "" },
			{ jm: "Theresie Bermann", arch: "Theresie Bermann (1806–1858)", q: "" },
			{ jm: "Eduard Bermann", arch: "Eduard Bermann (1840–1883)", q: "" },
			{ jm: "Rosalia Bermann", arch: "Rosalia Bermann (1836)", q: "" },
			{ jm: "Thers. Bermann", arch: "Theresie Bermann (1835)", q: "" },
			{ jm: "Hanni Bermann", arch: "Hanni Winter (1843)", q: "" },
			{ jm: "Fanni Bermann", arch: "Fanni Bermann (1844–1861)", q: "" },
			{ jm: "Karol. Müller", arch: "Karolina Müller (1836)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "IVb",
		pocet: "3",
		obyv: [
			{ jm: "Moritz Bermann", arch: "Moritz Bermann (1810–1870)", q: "" },
			{ jm: "Eduard Bermann", arch: "Eduard Bermann (1840–1883)", q: "" },
			{ jm: "Jetti Fischer", arch: "Jetti Fischer (1840)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "IVb",
		pocet: "3",
		obyv: [
			{ jm: "Eduard Bermann", arch: "Eduard Bermann (1840–1883)", q: "" },
			{ jm: "Barbara Bermann", arch: "Betti Bermann (1851–1920)", q: "" },
			{ jm: "Marie Bermann", arch: "Marie Bermann (1876)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Loštice",
		cast: "",
		cp: "IX",
		pocet: "7",
		obyv: [
			{ jm: "Herschl Ehrlich", arch: "Herschl Ehrlich (1808–1884)", q: "" },
			{ jm: "Jetti Ehrlich", arch: "Jetti Ehrlich (1800–1875)", q: "" },
			{ jm: "Jetti Ehrlich", arch: "Jetti Ehrlich (1777–1863)", q: "" },
			{ jm: "Herschl Lindner", arch: "Herschl Lindner (1808–1877)", q: "" },
			{ jm: "Babette Lindner", arch: "Betty Lindner (1812–1887)", q: "" },
			{ jm: "Katharina Lindner", arch: "Karolina Gärtner (1836)", q: "" },
			{ jm: "Amalia Lindner", arch: "Amalie Hirsch (1838)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "IX",
		pocet: "4",
		obyv: [
			{ jm: "Herschl Ehrlich", arch: "Herschl Ehrlich (1808–1884)", q: "" },
			{ jm: "Jetti Ehrlich", arch: "Jetti Ehrlich (1800–1875)", q: "" },
			{ jm: "Herschl Lindner", arch: "Herschl Lindner (1808–1877)", q: "" },
			{ jm: "Betti Lindner", arch: "Betty Lindner (1812–1887)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "IX",
		pocet: "6",
		obyv: [
			{ jm: "Herschl Ehrlich", arch: "Herschl Ehrlich (1808–1884)", q: "" },
			{ jm: "Sali Weiss", arch: "Sali Weissová (1825)", q: "" },
			{ jm: "Selig Jarolim", arch: "Selig Jarolim (1822)", q: "" },
			{ jm: "Therese Jarolim", arch: "Therese Lindner (1854)", q: "" },
			{ jm: "Mauritz Jarolim", arch: "Moritz Jarolim (1857)", q: "" },
			{ jm: "Julie Jarolim", arch: "Julie Jarolim (1869)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Loštice",
		cast: "",
		cp: "IX",
		pocet: "2",
		obyv: [
			{ jm: "Juli Weiss", arch: "Sali Weissová (1825)", q: "" },
			{ jm: "Herman Weis", arch: "Hermann Weiss (1850)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "V",
		pocet: "19",
		obyv: [
			{ jm: "Salomon Ehrenfest", arch: "Salomon Ehrenfest (1826–1898)", q: "" },
			{ jm: "Resi Ehrenfest geb. Jellenik", arch: "Resi Ehrenfest (1824–1898)", q: "" },
			{ jm: "Sigmund Schlesinger", arch: "Sigmund Schlesinger (1859)", q: "" },
			{ jm: "Josef Gottlieb", arch: "Josef Gottlieb (1846)", q: "" },
			{ jm: "Sali Gottlieb", arch: "Sali Gottlieb (1844–1877)", q: "" },
			{ jm: "Resi Tauber", arch: "Resi Tauber (1816–1889)", q: "" },
			{ jm: "Katti Tauber", arch: "Kathi Lindner (1847–1892)", q: "" },
			{ jm: "Hani Tauber", arch: "Johana Goldscheider (1852)", q: "" },
			{ jm: "Isak (Sekel) Hirsch", arch: "Isak Hirsch (1799–1882)", q: "" },
			{ jm: "Netti Hirsch geb. Fiedler", arch: "Netti Hirsch (1823–1874)", q: "" },
			{ jm: "Markus Hirsch", arch: "Markus Hirsch (1852)", q: "" },
			{ jm: "Betti Hirsch", arch: "Betti Hirsch (1853)", q: "" },
			{ jm: "David Hirsch", arch: "David Hirsch (1859)", q: "" },
			{ jm: "Pepi Löwy", arch: "Pepi Löwy (1798–1874)", q: "" },
			{ jm: "Sali Eckstein", arch: "Sali Ekstein (1830)", q: "" },
			{ jm: "Rachl Ekstein", arch: "Rosa Bettelheim (1856)", q: "" },
			{ jm: "Netti Ekstein", arch: "Netti Eckstein (1857)", q: "" },
			{ jm: "Lotti Ekstein", arch: "Lotty Baumgarten (1860)", q: "" },
			{ jm: "Sofie Ekstein", arch: "Sofie Hirsch (1862)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Loštice",
		cast: "",
		cp: "V",
		pocet: "2",
		obyv: [
			{ jm: "Salomon Ehrenfest", arch: "Salomon Ehrenfest (1826–1898)", q: "" },
			{ jm: "Rezi Ehrenfest", arch: "Resi Ehrenfest (1824–1898)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Loštice",
		cast: "",
		cp: "Va",
		pocet: "6",
		obyv: [
			{ jm: "Salomon Ehrenfest", arch: "Salomon Ehrenfest (1826–1898)", q: "" },
			{ jm: "Resi Ehrenfest", arch: "Resi Ehrenfest (1824–1898)", q: "" },
			{ jm: "Albert Ehrenfest", arch: "Albert Ehrenfest (1854)", q: "Q115661688" },
			{ jm: "Abraham Skopal", arch: "Abraham Skopal (1832–1895)", q: "" },
			{ jm: "Kathi Skopal", arch: "Kathi Skopal (1836)", q: "" },
			{ jm: "Rösi Skopal", arch: "Therese Schüller (1858)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "Va",
		pocet: "10",
		obyv: [
			{ jm: "Salomon Ehrenfest", arch: "Salomon Ehrenfest (1826–1898)", q: "" },
			{ jm: "Resi Ehrenfest", arch: "Resi Ehrenfest (1824–1898)", q: "" },
			{ jm: "Resi Tauber", arch: "Resi Tauber (1816–1889)", q: "" },
			{ jm: "Isak Hirsch", arch: "Isak Hirsch (1799–1882)", q: "" },
			{ jm: "Aron Ehrenfreund", arch: "Aron Ehrenfreund (1831)", q: "" },
			{ jm: "Leni Gross", arch: "Leni Gross (1829–1893)", q: "" },
			{ jm: "Moises Lang", arch: "Moises Lang (1806–1883)", q: "" },
			{ jm: "Julie Lang", arch: "Julie Lang (1816)", q: "" },
			{ jm: "Bernard Lang", arch: "Bernard Lang (1851)", q: "" },
			{ jm: "Netti Lang", arch: "Netti Lang (1856)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Loštice",
		cast: "",
		cp: "Vb",
		pocet: "7",
		obyv: [
			{ jm: "Joachim Tauber", arch: "Joachim Tauber (1813–1861)", q: "" },
			{ jm: "Rösi Tauber geb. Tschiassny", arch: "Resi Tauber (1816–1889)", q: "" },
			{ jm: "Betti Tauber", arch: "Betty Eckstein (1846)", q: "" },
			{ jm: "Kathi Tauber", arch: "Kathi Lindner (1847–1892)", q: "" },
			{ jm: "Hanni Tauber", arch: "Johana Goldscheider (1852)", q: "" },
			{ jm: "Ester Jarolim", arch: "Ester Jarolim (1797–1859)", q: "" },
			{ jm: "Juditha Jarolim", arch: "Juditha Skopal (1827)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Loštice",
		cast: "",
		cp: "Vc",
		pocet: "8",
		obyv: [
			{ jm: "Kathi Jarolim", arch: "Kathi Jarolim (1790–1864)", q: "" },
			{ jm: "Abraham Lindner", arch: "Abraham Lindner (1793–1872)", q: "" },
			{ jm: "Jetti Lindner", arch: "Jetti Lindner (1835–1894)", q: "" },
			{ jm: "Moritz Lindner", arch: "Moritz Lindner (1836)", q: "" },
			{ jm: "Samuel Lindner", arch: "Samuel Lindner (1843)", q: "" },
			{ jm: "Israel Lindner", arch: "Isidor Lindner (1847–1915)", q: "" },
			{ jm: "Resi Lindner", arch: "Resi Lindner (1839)", q: "" },
			{ jm: "July Lindner", arch: "Julie Käufler (1845)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Loštice",
		cast: "",
		cp: "Vd",
		pocet: "6",
		obyv: [
			{ jm: "Samuel Ehrenfest", arch: "Samuel Ehrenfest (1798)", q: "" },
			{ jm: "Sara Ehrenfest", arch: "Sara Ehrenfest (1814)", q: "" },
			{ jm: "Veronika Neuesfeld (?)", arch: "Veronika Neuesfeld (1812)", q: "" },
			{ jm: "Moses Aron Gällst (?)", arch: "Moses Aron Gällst (1796)", q: "" },
			{ jm: "Anna Gällst (?)", arch: "Anna Gällst (1810)", q: "" },
			{ jm: "Debora Skopal", arch: "Debora Skopal (1789)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Loštice",
		cast: "",
		cp: "Vd",
		pocet: "3",
		obyv: [
			{ jm: "Karel Hirsch", arch: "Karel Hirsch (1874)", q: "Q104707603" },
			{ jm: "Emilie Hirschová", arch: "Emilie Hirschová (1878)", q: "" },
			{ jm: "Irma Hirschová", arch: "Irma Hirschová (1900)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Loštice",
		cast: "",
		cp: "VI",
		pocet: "4",
		obyv: [
			{ jm: "Markus Moller", arch: "Markus Moller (1797–1859)", q: "" },
			{ jm: "Rosalia Moller", arch: "Rosalia Moller (1792)", q: "" },
			{ jm: "Leni Moller", arch: "Leni Hoffmann (1829)", q: "" },
			{ jm: "Rosa Moller", arch: "Rosa Moller (1832)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "VI",
		pocet: "2",
		obyv: [
			{ jm: "Abraham Hersch", arch: "Abraham Hirsch (1840)", q: "" },
			{ jm: "Julie Hirsch", arch: "Julie Hirsch (1850)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "VI",
		pocet: "6",
		obyv: [
			{ jm: "Abraham Hirsch", arch: "Abraham Hirsch (1840)", q: "" },
			{ jm: "Julie Hirsch geb. Käufler", arch: "Julie Hirsch (1850)", q: "" },
			{ jm: "Theodor Hirsch", arch: "Theodor Hirsch (1870)", q: "" },
			{ jm: "Antonie Hirsch", arch: "Antonie Gottlieb (1874)", q: "" },
			{ jm: "Paula Hirsch", arch: "Paula Hirschová (1877)", q: "" },
			{ jm: "Julius Hirsch", arch: "Julius Hirsch (1879)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Loštice",
		cast: "",
		cp: "VI",
		pocet: "6",
		obyv: [
			{ jm: "Abrahám Hirsch", arch: "Abraham Hirsch (1840)", q: "" },
			{ jm: "Julie Hirsch geb. Käufler", arch: "Julie Hirsch (1850)", q: "" },
			{ jm: "Julius Hirsch", arch: "Julius Hirsch (1879)", q: "" },
			{ jm: "Antonie Hirsch", arch: "Antonie Gottlieb (1874)", q: "" },
			{ jm: "Paula Hirsch", arch: "Paula Hirschová (1877)", q: "" },
			{ jm: "Rosa Hirsch", arch: "Rosa Hirsch (1889)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Loštice",
		cast: "",
		cp: "VI",
		pocet: "3",
		obyv: [
			{ jm: "Abraham Hirsch", arch: "Abraham Hirsch (1840)", q: "" },
			{ jm: "Julie Hirschová", arch: "Julie Hirsch (1850)", q: "" },
			{ jm: "Paula Hirschová", arch: "Paula Hirschová (1877)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Loštice",
		cast: "",
		cp: "VI",
		pocet: "2",
		obyv: [
			{ jm: "Abraham Hirsch", arch: "Abraham Hirsch (1840)", q: "" },
			{ jm: "Julie Hirsch", arch: "Julie Hirsch (1850)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Loštice",
		cast: "",
		cp: "VI",
		pocet: "4",
		obyv: [
			{ jm: "Victor Weiss", arch: "Viktor Weiss (1881)", q: "Q105637636" },
			{ jm: "Ida Weiss", arch: "Ida Weiss (1878)", q: "Q105619711" },
			{ jm: "Grete Weiss", arch: "Grete Weiss (1912)", q: "Q105619665" },
			{ jm: "Lina Hirsch", arch: "Lina Hirsch (1870)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Loštice",
		cast: "",
		cp: "VII",
		pocet: "4",
		obyv: [
			{ jm: "Abraham Eckstein", arch: "Abraham Eckstein (1813)", q: "" },
			{ jm: "Rosa Eckstein", arch: "Rosa Eckstein (1823–1859)", q: "" },
			{ jm: "Simon Eckstein", arch: "Salomon Ekstein (1851)", q: "" },
			{ jm: "Maxmilian Eckstein", arch: "Max Ekstein (1856)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "VII",
		pocet: "14",
		obyv: [
			{ jm: "Isak Ekstein", arch: "Isak Eckstein (1817–1883)", q: "" },
			{ jm: "Hani Ekstein", arch: "Hanni Eckstein (1808–1891)", q: "" },
			{ jm: "Simon Ekstein", arch: "Simon Ekstein (1844)", q: "" },
			{ jm: "Salomon Ekstein", arch: "Salomon Ekstein (1848–1917)", q: "" },
			{ jm: "Markus Ekstein", arch: "Max Eckstein (1851)", q: "" },
			{ jm: "Abraham Ekstein", arch: "Abraham Eckstein (1813)", q: "" },
			{ jm: "Sali Ekstein", arch: "Sali Ekstein (1834–1880)", q: "" },
			{ jm: "Bernhart Ekstein", arch: "Bernhard Eckstein (1864–1877)", q: "" },
			{ jm: "Juli Ekstein", arch: "Julie Eckstein (1867–1878)", q: "" },
			{ jm: "Isak Fuchs", arch: "Isak Fuchs (1831)", q: "" },
			{ jm: "Jetti Fuchs", arch: "Jetti Fuchs (1841–1894)", q: "" },
			{ jm: "Sofie Fuchs", arch: "Sofie Lindner (1861)", q: "" },
			{ jm: "Sali Fuchs", arch: "Sali Klein (1867)", q: "" },
			{ jm: "Judita Fuchs", arch: "Judita Fuchs (1800–1879)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "VII",
		pocet: "12",
		obyv: [
			{ jm: "Isak Fuchs", arch: "Isak Fuchs (1831)", q: "" },
			{ jm: "Jetti Fuchs", arch: "Jetti Fuchs (1841–1894)", q: "" },
			{ jm: "Sofie Fuchs", arch: "Sofie Lindner (1861)", q: "" },
			{ jm: "Sali Fuchs", arch: "Sali Klein (1867)", q: "" },
			{ jm: "Genie Fuchs", arch: "Genie Fuchs (1870)", q: "" },
			{ jm: "Salomon Eckstein", arch: "Salomon Ekstein (1848–1917)", q: "" },
			{ jm: "Johanna Eckstein", arch: "Johanna Eckstein (1854–1924)", q: "" },
			{ jm: "Lina Eckstein", arch: "Lina Eckstein (1874)", q: "" },
			{ jm: "Anna Eckstein", arch: "Julie Politzer (1877)", q: "" },
			{ jm: "Berthold Eckstein", arch: "Berthold Ekstein (1879)", q: "" },
			{ jm: "Isak Eckstein", arch: "Isak Eckstein (1817–1883)", q: "" },
			{ jm: "Hanni Eckstein", arch: "Hanni Eckstein (1808–1891)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Loštice",
		cast: "",
		cp: "VII",
		pocet: "10",
		obyv: [
			{ jm: "Hani Eckstein", arch: "Hanni Eckstein (1808–1891)", q: "" },
			{ jm: "Jakob Eckstein", arch: "Jakob Eckstein (1839)", q: "" },
			{ jm: "Betty Eckstein", arch: "Betty Eckstein (1846)", q: "" },
			{ jm: "Richard Ekstein", arch: "Richard Ekstein (1882)", q: "Q104449355" },
			{ jm: "Loise Eckstein", arch: "Luisa Ekstein (1872)", q: "" },
			{ jm: "Ida Eckstein", arch: "Ida Kohn (1873–xxx1)", q: "" },
			{ jm: "Paula Eckstein", arch: "Paula Eckstein (1874)", q: "" },
			{ jm: "Juliana Eckstein", arch: "Julie Weiss (1876)", q: "" },
			{ jm: "Rosa Eckstein", arch: "Rosa Ekstein (1884–1891)", q: "" },
			{ jm: "Marie Eckstein", arch: "Marie Ekstein (1880)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Loštice",
		cast: "",
		cp: "VII",
		pocet: "4",
		obyv: [
			{ jm: "Jakub Eckstein", arch: "Jakob Eckstein (1839)", q: "" },
			{ jm: "Betty Eckstein", arch: "Betty Eckstein (1846)", q: "" },
			{ jm: "Julie Eckstein", arch: "Julie Weiss (1876)", q: "" },
			{ jm: "Marie Eckstein", arch: "Marie Ekstein (1880)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Loštice",
		cast: "",
		cp: "VII",
		pocet: "1",
		obyv: [
			{ jm: "Gabriele Wiener", arch: "Gabriele Wiener (1870)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Loštice",
		cast: "",
		cp: "VIIb",
		pocet: "12",
		obyv: [
			{ jm: "Isak Eckstein", arch: "Isak Eckstein (1817–1883)", q: "" },
			{ jm: "Johanna Eckstein geb. Goldman", arch: "Hanni Eckstein (1808–1891)", q: "" },
			{ jm: "Jakob Eckstein", arch: "Jakob Eckstein (1839)", q: "" },
			{ jm: "Joseph Eckstein", arch: "Josef Ekstein (1843)", q: "" },
			{ jm: "Simon Ekstein", arch: "Simon Ekstein (1844)", q: "" },
			{ jm: "Salomon Ekstein", arch: "Salomon Ekstein (1848–1917)", q: "" },
			{ jm: "Markus Ekstein", arch: "Max Eckstein (1851)", q: "" },
			{ jm: "Jetti Eckstein", arch: "Jetti Fuchs (1841–1894)", q: "" },
			{ jm: "Herschl Eckstein", arch: "Herschl Eckstein (1790–1869)", q: "" },
			{ jm: "Sali Eckstein", arch: "Rosalia Eckstein (1829–1885)", q: "" },
			{ jm: "Emilie Eckstein", arch: "Emilie Kellner (1854)", q: "" },
			{ jm: "Rosy Eckstein", arch: "Therese Eckstein (1856)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Loštice",
		cast: "",
		cp: "VIII",
		pocet: "11",
		obyv: [
			{ jm: "Isak Moller", arch: "Isak Moller (1783–1858)", q: "" },
			{ jm: "Rosalia Reichmann", arch: "Rosalia Reichmann (1808–1888)", q: "" },
			{ jm: "Abrah. Moller", arch: "Abraham Moller (1815–1879)", q: "" },
			{ jm: "Veronika Moller geb. Hersch", arch: "Fanny Moller (1813–1904)", q: "" },
			{ jm: "Jakob Moller", arch: "Jakob Moller (1843–1906)", q: "" },
			{ jm: "Moritz Moller", arch: "Moritz Moller (1844)", q: "" },
			{ jm: "Albert Moller", arch: "Albert Moller (1855–1920)", q: "" },
			{ jm: "Cecilia Moller", arch: "Cilli Ehrenfest (1846)", q: "" },
			{ jm: "Rebeka Moller", arch: "Theresia Brüll (1847)", q: "" },
			{ jm: "Eleonora Moller", arch: "Eleonora Werner (1848)", q: "" },
			{ jm: "Jetti Moller", arch: "Jetti Moller (1857)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "VIII",
		pocet: "7",
		obyv: [
			{ jm: "Selig Jarolim", arch: "Selig Jarolim (1822)", q: "" },
			{ jm: "Hani Jarolim", arch: "Johanna Eckstein (1852)", q: "" },
			{ jm: "Katti Jarolim", arch: "Katharina Eckstein (1854)", q: "" },
			{ jm: "Resi Jarolim", arch: "Therese Lindner (1854)", q: "" },
			{ jm: "Moritz Jarolim", arch: "Moritz Jarolim (1857)", q: "" },
			{ jm: "Juli Jarolim", arch: "Julie Jarolim (1869)", q: "" },
			{ jm: "Rosalia Reichmann", arch: "Rosalia Reichmann (1808–1888)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "VIII",
		pocet: "2",
		obyv: [
			{ jm: "Fanni Moller", arch: "Fanny Moller (1813–1904)", q: "" },
			{ jm: "Rosalie Reichmann", arch: "Rosalia Reichmann (1808–1888)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Loštice",
		cast: "",
		cp: "VIII",
		pocet: "2",
		obyv: [
			{ jm: "Fani Moller", arch: "Fanny Moller (1813–1904)", q: "" },
			{ jm: "Rosa Hirsch", arch: "Rosa Adler (1868)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Loštice",
		cast: "",
		cp: "VIII",
		pocet: "2",
		obyv: [
			{ jm: "Fanny Moller", arch: "Fanny Moller (1813–1904)", q: "" },
			{ jm: "Lina Horner", arch: "Lina Horner (1848)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Loštice",
		cast: "",
		cp: "VIII",
		pocet: "1",
		obyv: [
			{ jm: "Lina Horner", arch: "Lina Horner (1848)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "X",
		pocet: "11",
		obyv: [
			{ jm: "Juda Lindner", arch: "Juda Lindner (1820–1888)", q: "" },
			{ jm: "Resi Lindner", arch: "Therese Lindner (1823–1892)", q: "" },
			{ jm: "Wilhelm Lindner", arch: "Wilhelm Lindner (1854)", q: "" },
			{ jm: "Sami Lindner", arch: "Samuel Lindner (1855)", q: "" },
			{ jm: "Moritz Lindner", arch: "Moritz Lindner (1857)", q: "" },
			{ jm: "Leopold Lindner", arch: "Leopold Lindner (1858)", q: "" },
			{ jm: "Josef Lindner", arch: "Josef Lindner (1860)", q: "" },
			{ jm: "Wolf Lang", arch: "Wolf Lang (1809–1870)", q: "" },
			{ jm: "Isak Lindner", arch: "Isak Lindner (1797–1872)", q: "" },
			{ jm: "Loise Lindner", arch: "Loise Lindner (1800–1886)", q: "" },
			{ jm: "Lois Wolf", arch: "Lois Wolf (1850)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "X",
		pocet: "6",
		obyv: [
			{ jm: "Pinkus Lindner", arch: "Pinkus Lindner (1811–1886)", q: "" },
			{ jm: "Juda Lindner", arch: "Juda Lindner (1820–1888)", q: "" },
			{ jm: "Therese Lindner", arch: "Therese Lindner (1823–1892)", q: "" },
			{ jm: "Wilhelm Lindner", arch: "Wilhelm Lindner (1854)", q: "" },
			{ jm: "Elisabeth Lindner", arch: "Loise Lindner (1800–1886)", q: "" },
			{ jm: "Resi Wolf", arch: "Resi Wolf (1848)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Loštice",
		cast: "",
		cp: "X",
		pocet: "5",
		obyv: [
			{ jm: "Selik Jarolim", arch: "Selig Jarolim (1822)", q: "" },
			{ jm: "Moric Jarolim", arch: "Moritz Jarolim (1857)", q: "" },
			{ jm: "Julie Jarolim", arch: "Julie Jarolim (1869)", q: "" },
			{ jm: "Sali Eckstein", arch: "Sali Ekstein (1830)", q: "" },
			{ jm: "Netty Eckstein", arch: "Netti Eckstein (1857)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Loštice",
		cast: "",
		cp: "Xa",
		pocet: "4",
		obyv: [
			{ jm: "Salomon Hirsch", arch: "Salomon Hirsch (1827–1888)", q: "" },
			{ jm: "Betti Hirsch", arch: "Betti Hirsch (1828–1882)", q: "" },
			{ jm: "Jakob Hirsch", arch: "Jakob Hirsch (1857)", q: "" },
			{ jm: "Netti Hirsch", arch: "Netti Hirsch (1856)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Loštice",
		cast: "",
		cp: "Xb",
		pocet: "9",
		obyv: [
			{ jm: "Isak Hirsch", arch: "Isak Hirsch (1807)", q: "" },
			{ jm: "Netti Hirsch", arch: "Netti Hirsch (1822)", q: "" },
			{ jm: "Meier Hirsch", arch: "Meier Hirsch (1851)", q: "" },
			{ jm: "Betti Hirsch", arch: "Betti Hirsch (1853)", q: "" },
			{ jm: "Rachel Fleischer", arch: "Rachel Fleischer (1804)", q: "" },
			{ jm: "Isak Lindner", arch: "Isak Lindner (1797–1872)", q: "" },
			{ jm: "Loise Lindner", arch: "Loise Lindner (1800–1886)", q: "" },
			{ jm: "Moritz Lindner", arch: "Moritz Lindner (1831)", q: "" },
			{ jm: "Markus Braun", arch: "Markus Braun (1781–1860)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Loštice",
		cast: "",
		cp: "XI",
		pocet: "22",
		obyv: [
			{ jm: "Aron Käufler", arch: "Aron Käufler (1816)", q: "" },
			{ jm: "Katti Käufler", arch: "Kateřina Käuflerová (1820)", q: "" },
			{ jm: "Isak Käufler", arch: "Ignatz Käufler (1851)", q: "" },
			{ jm: "Abraham Käufler", arch: "Adolf Käufler (1853)", q: "" },
			{ jm: "Simon Käufler", arch: "Sigmund Käufler (1855)", q: "" },
			{ jm: "Anna Käufler", arch: "Antonia Moller (xxx1–1870)", q: "" },
			{ jm: "July Käufler", arch: "Julie Hirsch (1850)", q: "" },
			{ jm: "Rosy Käufler", arch: "Rosy Käufler (1856–1858)", q: "" },
			{ jm: "David Eckstein", arch: "David Eckstein (1795–1886)", q: "" },
			{ jm: "Sara Eckstein", arch: "Sara Eckstein (1798–1860)", q: "" },
			{ jm: "Markus Klein", arch: "Markus Klein (1794–1873)", q: "" },
			{ jm: "Amalie Klein", arch: "Amalie Klein (1831–1895)", q: "" },
			{ jm: "Hanny Klein", arch: "Hani Klein (1852)", q: "" },
			{ jm: "Ester Klein", arch: "Ester Klein (1854)", q: "" },
			{ jm: "Bernhard Klein", arch: "Bernhard Klein (1792–1871)", q: "" },
			{ jm: "Joseph Langer", arch: "Josef Langer (1815–1879)", q: "" },
			{ jm: "Julie Langer", arch: "Julie Langer (1824–1874)", q: "" },
			{ jm: "Adolf Langer", arch: "Adolf Langer (1852)", q: "" },
			{ jm: "Hermann Langer", arch: "Heřmann Langer (1855)", q: "" },
			{ jm: "Rosalia Langer", arch: "Rosi Langer (1847)", q: "" },
			{ jm: "Anna Langer", arch: "Hanny Langer (1854)", q: "" },
			{ jm: "Netti Langer", arch: "Netti Polnauer (1856)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "XI",
		pocet: "19",
		obyv: [
			{ jm: "Aron Kaufler", arch: "Aron Käufler (1816)", q: "" },
			{ jm: "Katti Kaufler geb. Ekstein", arch: "Kateřina Käuflerová (1820)", q: "" },
			{ jm: "Abraham (Adolf) Käufler", arch: "Adolf Käufler (1853)", q: "" },
			{ jm: "Fani Käufler", arch: "Fanny Mannaberg (1858)", q: "" },
			{ jm: "Markus Klein", arch: "Markus Klein (1794–1873)", q: "" },
			{ jm: "Mali Klein", arch: "Amalie Klein (1831–1895)", q: "" },
			{ jm: "Hani Klein", arch: "Hani Klein (1852)", q: "" },
			{ jm: "Ernestine Klein", arch: "Tini Klein (1858–1896)", q: "" },
			{ jm: "Bernhart Klein", arch: "Bernhard Klein (1792–1871)", q: "" },
			{ jm: "Abraham Ehrenreich", arch: "Abraham Ehrenreich (1830)", q: "" },
			{ jm: "Hermann Hirsch", arch: "Hermann Hirsch (1824)", q: "" },
			{ jm: "Mali Hirsch", arch: "Amalie Hirsch (1835)", q: "" },
			{ jm: "Markus Hirsch", arch: "Markus Hirsch (1854–1879)", q: "" },
			{ jm: "David Hirsch", arch: "David Hirsch (1858)", q: "" },
			{ jm: "Maria Hirsch", arch: "Maria Hirsch (1864–1877)", q: "" },
			{ jm: "Philipp Lang", arch: "Philipp Lang (1808–1871)", q: "" },
			{ jm: "Edl Braun", arch: "Edel Lang (1810–1885)", q: "" },
			{ jm: "Josef Braun", arch: "Josef Braun (1862)", q: "" },
			{ jm: "Sigmund Braun", arch: "Sigmund Braun (1864)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Loštice",
		cast: "",
		cp: "XI",
		pocet: "3",
		obyv: [
			{ jm: "Julie Hirsch", arch: "Julie Hirsch (1850)", q: "" },
			{ jm: "Johanna Langer", arch: "Johanna Langer (1846)", q: "" },
			{ jm: "Julius Langer", arch: "Julius Langer (1882)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "XIa",
		pocet: "3",
		obyv: [
			{ jm: "Aron Käufler", arch: "Aron Käufler (1816)", q: "" },
			{ jm: "Kathi Käufler", arch: "Kateřina Käuflerová (1820)", q: "" },
			{ jm: "Sigmund Käufler", arch: "Sigmund Käufler (1855)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Loštice",
		cast: "",
		cp: "XIa",
		pocet: "2",
		obyv: [
			{ jm: "Aron Käufler", arch: "Aron Käufler (1816)", q: "" },
			{ jm: "Katti Käufler", arch: "Kateřina Käuflerová (1820)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Loštice",
		cast: "",
		cp: "XIa",
		pocet: "2",
		obyv: [
			{ jm: "Aron Käufler", arch: "Aron Käufler (1816)", q: "" },
			{ jm: "Kateřina Käuflerová", arch: "Kateřina Käuflerová (1820)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "XIb",
		pocet: "9",
		obyv: [
			{ jm: "Hermann Hirsch", arch: "Hermann Hirsch (1824)", q: "" },
			{ jm: "Amalie Hirsch geb. Lang", arch: "Amalie Hirsch (1835)", q: "" },
			{ jm: "Heinrich Hirsch", arch: "Heinrich Hirsch (1871)", q: "" },
			{ jm: "Adolf Hirsch", arch: "Adolf Hirsch (1873–xxx1)", q: "" },
			{ jm: "Karl Hirsch", arch: "Karel Hirsch (1874)", q: "Q104707603" },
			{ jm: "Edel Braun", arch: "Edel Lang (1810–1885)", q: "" },
			{ jm: "Amalie Klein", arch: "Amalie Klein (1831–1895)", q: "" },
			{ jm: "Tini Klein", arch: "Tini Klein (1858–1896)", q: "" },
			{ jm: "Abraham Ehrenreich", arch: "Abraham Ehrenreich (1830)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Loštice",
		cast: "",
		cp: "XIb",
		pocet: "7",
		obyv: [
			{ jm: "Amalia Klein", arch: "Amalie Klein (1831–1895)", q: "" },
			{ jm: "Karoline (pravo Esther) Klein", arch: "Tini Klein (1858–1896)", q: "" },
			{ jm: "Herman Hirsch", arch: "Hermann Hirsch (1824)", q: "" },
			{ jm: "Amalie Hirsch geb. Lang/Braun", arch: "Amalie Hirsch (1835)", q: "" },
			{ jm: "Karel Hirsch", arch: "Karel Hirsch (1874)", q: "Q104707603" },
			{ jm: "Ida Hirsch", arch: "Ida Hirsch (1882)", q: "" },
			{ jm: "Rosa Hirsch", arch: "Rosa Hirsch (1884)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Loštice",
		cast: "",
		cp: "XIb",
		pocet: "1",
		obyv: [
			{ jm: "Sali Weissová", arch: "Sali Weissová (1825)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Loštice",
		cast: "",
		cp: "XIc",
		pocet: "4",
		obyv: [
			{ jm: "Heřmann Hirsch", arch: "Hermann Hirsch (1824)", q: "" },
			{ jm: "Amalie Hirschová", arch: "Amalie Hirsch (1835)", q: "" },
			{ jm: "Ida Hirschová", arch: "Ida Hirsch (1882)", q: "" },
			{ jm: "Rosa Hirschová", arch: "Rosa Hirsch (1884)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "XII",
		pocet: "9",
		obyv: [
			{ jm: "Abraham Lindner", arch: "Abraham Lindner (1793–1872)", q: "" },
			{ jm: "Jetti Lindner", arch: "Jetti Lindner (1835–1894)", q: "" },
			{ jm: "Samuel Lindner", arch: "Samuel Lindner (1843)", q: "" },
			{ jm: "Moses Brod", arch: "Moses Brod (1827–1896)", q: "" },
			{ jm: "Cilli Brod geb. Goldman", arch: "Cecilie Brod (1815)", q: "" },
			{ jm: "Isak Gross", arch: "Isak Gross (1815–1885)", q: "" },
			{ jm: "Jetti Gross", arch: "Juditha Gross (1815–1885)", q: "" },
			{ jm: "Juli Gross", arch: "Julie Gross (1830)", q: "" },
			{ jm: "Rebeka Ehrenfest", arch: "Rebeka Ehrenfest (1778–1877)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "XII",
		pocet: "9",
		obyv: [
			{ jm: "Moses Brod", arch: "Moses Brod (1827–1896)", q: "" },
			{ jm: "Cilli Brod", arch: "Cecilie Brod (1815)", q: "" },
			{ jm: "Adelheid Weiss", arch: "Adelheid Weiss (1815–1887)", q: "" },
			{ jm: "Max Eckstein", arch: "Max Eckstein (1851)", q: "" },
			{ jm: "Fanni Eckstein", arch: "Fany Eckstein (1848)", q: "" },
			{ jm: "Sigfried Eckstein", arch: "Siegfried Eckstein (1879)", q: "" },
			{ jm: "Isak Gross", arch: "Isak Gross (1815–1885)", q: "" },
			{ jm: "Juditha Gross", arch: "Juditha Gross (1815–1885)", q: "" },
			{ jm: "Julie Goldmann", arch: "Julie Gross (1830)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Loštice",
		cast: "",
		cp: "XII",
		pocet: "5",
		obyv: [
			{ jm: "Fani Eckstein geb. Gross", arch: "Fany Eckstein (1848)", q: "" },
			{ jm: "Siegfried Eckstein", arch: "Siegfried Eckstein (1879)", q: "" },
			{ jm: "Irma Eckstein", arch: "Irma Wischnitzerová (1886)", q: "Q105639503" },
			{ jm: "Juli Goldmann richtig Gross", arch: "Julie Gross (1830)", q: "" },
			{ jm: "Cili Brod", arch: "Cecilie Brod (1815)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Loštice",
		cast: "",
		cp: "XII",
		pocet: "5",
		obyv: [
			{ jm: "Max Eckstein", arch: "Max Eckstein (1851)", q: "" },
			{ jm: "Fany Eckstein", arch: "Fany Eckstein (1848)", q: "" },
			{ jm: "Ernst Eckstein", arch: "Arnošt Eckstein (1895)", q: "Q104449337" },
			{ jm: "Irma Wischnitzer", arch: "Irma Wischnitzerová (1886)", q: "Q105639503" },
			{ jm: "Kurt Wischnitzer", arch: "Kurt Wischnitzer (1916)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Loštice",
		cast: "",
		cp: "XIIa",
		pocet: "14",
		obyv: [
			{ jm: "Wolf Lang", arch: "Wolf Lang (1809–1870)", q: "" },
			{ jm: "Rosy Lang", arch: "Hanna Lang (1829)", q: "" },
			{ jm: "Rosy Lang", arch: "Rosy Lang (1857)", q: "" },
			{ jm: "Selig Gross", arch: "Selig Gross (1822–1858)", q: "" },
			{ jm: "Julie Gross", arch: "Julie Gross (1830)", q: "" },
			{ jm: "Fanni Gross", arch: "Fany Eckstein (1848)", q: "" },
			{ jm: "Moises Gross", arch: "Moises Gross (1784–1858)", q: "" },
			{ jm: "Hilmann Lang", arch: "Hilmann Lang (1803)", q: "" },
			{ jm: "Anna Braun", arch: "Edel Lang (1810–1885)", q: "" },
			{ jm: "Simon Braun", arch: "Simon Braun (1831)", q: "" },
			{ jm: "Amalia Braun", arch: "Amalie Hirsch (1835)", q: "" },
			{ jm: "Moritz Braun", arch: "Moritz Braun (1854)", q: "" },
			{ jm: "Betti Braun", arch: "Betti Braun (1856)", q: "" },
			{ jm: "Saly Braun", arch: "Sali Gottlieb (1844–1877)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Loštice",
		cast: "",
		cp: "XIIa",
		pocet: "4",
		obyv: [
			{ jm: "Františka Eksteinová", arch: "Fany Eckstein (1848)", q: "" },
			{ jm: "Siegfried Ekstein", arch: "Siegfried Eckstein (1879)", q: "" },
			{ jm: "Irma Ekstein", arch: "Irma Wischnitzerová (1886)", q: "Q105639503" },
			{ jm: "Arnošt Ekstein", arch: "Arnošt Eckstein (1895)", q: "Q104449337" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Loštice",
		cast: "",
		cp: "XIIa",
		pocet: "4",
		obyv: [
			{ jm: "Max Ekstein", arch: "Max Eckstein (1851)", q: "" },
			{ jm: "Fanni Ekstein geb. Gross", arch: "Fany Eckstein (1848)", q: "" },
			{ jm: "Irma Ekstein", arch: "Irma Wischnitzerová (1886)", q: "Q105639503" },
			{ jm: "Ernst Ekstein", arch: "Arnošt Eckstein (1895)", q: "Q104449337" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Loštice",
		cast: "",
		cp: "XIIb",
		pocet: "6",
		obyv: [
			{ jm: "Moses Kraus", arch: "Moses Kraus (1816–1894)", q: "" },
			{ jm: "Zilly Kraus", arch: "Cilli Kraus (1821–1882)", q: "" },
			{ jm: "Josef Kraus", arch: "Josef Kraus (1850)", q: "" },
			{ jm: "Moses Brod", arch: "Moses Brod (1827–1896)", q: "" },
			{ jm: "Zilli Brod", arch: "Cecilie Brod (1815)", q: "" },
			{ jm: "Jakob Brod", arch: "Jakob Brod (1851)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Loštice",
		cast: "",
		cp: "XIIb",
		pocet: "1",
		obyv: [
			{ jm: "Cecilie Brod", arch: "Cecilie Brod (1815)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Loštice",
		cast: "",
		cp: "XIIb",
		pocet: "3",
		obyv: [
			{ jm: "Max Hirsch", arch: "Max Hirsch (1846)", q: "" },
			{ jm: "Lina Hirsch", arch: "Karolina Hirsch (1871)", q: "" },
			{ jm: "Ida Hirsch", arch: "Ida Hirsch (1876)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Loštice",
		cast: "",
		cp: "XIIc",
		pocet: "3",
		obyv: [
			{ jm: "Anna Käufler", arch: "Anna Käufler (1821)", q: "" },
			{ jm: "Salomon Kornitzer", arch: "Salomon Kornitzer (1817–1898)", q: "" },
			{ jm: "Netti Kornitzer", arch: "Netti Kornitzer (1827)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "XIII",
		pocet: "2",
		obyv: [
			{ jm: "Philip Skopal", arch: "Philip Skopal (1802–1877)", q: "" },
			{ jm: "Sali Skopal", arch: "Sali Skopal (1802–1877)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Loštice",
		cast: "",
		cp: "XIII",
		pocet: "6",
		obyv: [
			{ jm: "Salomon Weiss", arch: "Salomon Weiss (1866)", q: "Q105638143" },
			{ jm: "Berta Weiss", arch: "Berta Weiss (1872)", q: "" },
			{ jm: "Adolf Weiss", arch: "Adolf Weiss (1908)", q: "Q105641894" },
			{ jm: "Rosa Weiss", arch: "Rosa Weiss (1909)", q: "" },
			{ jm: "Paula Weiss", arch: "Paula Weiss (1911)", q: "Q105619928" },
			{ jm: "Max Weiss", arch: "Max Weiss (1913)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Loštice",
		cast: "",
		cp: "XIIIa",
		pocet: "12",
		obyv: [
			{ jm: "Philipp Skopal", arch: "Philip Skopal (1802–1877)", q: "" },
			{ jm: "Sara Skopal", arch: "Sali Skopal (1802–1877)", q: "" },
			{ jm: "Pauline Skopal", arch: "Josefine Weiss (1836)", q: "" },
			{ jm: "Rosalia Wasservogel", arch: "Rosalia Wasservogel (1790–1860)", q: "" },
			{ jm: "Juditha Gross", arch: "Juditha Gross (1815–1885)", q: "" },
			{ jm: "Nathan Gross", arch: "Nathan Gross (1846)", q: "" },
			{ jm: "Rachel Gross", arch: "Resi Gross (1848)", q: "" },
			{ jm: "Abrah. Jarolim", arch: "Abraham Jarolim (1815–1876)", q: "" },
			{ jm: "Karolina Jarolim", arch: "Karolina Jarolim (1825)", q: "" },
			{ jm: "Moritz Jarolim", arch: "Moritz Jarolim (1854–1874)", q: "" },
			{ jm: "Markus Jarolim", arch: "Markus Jarolim (1857)", q: "" },
			{ jm: "Resi Jarolim", arch: "Resi Fischer (1852)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "XIIIa",
		pocet: "6",
		obyv: [
			{ jm: "Adolf Weiss", arch: "Adolf Weiss (1838–1893)", q: "" },
			{ jm: "Josefa Weiss", arch: "Josefine Weiss (1836)", q: "" },
			{ jm: "Salomon Weiss", arch: "Salomon Weiss (1866)", q: "Q105638143" },
			{ jm: "Hermine Weiss", arch: "Hermine Weiss (1868)", q: "" },
			{ jm: "Regine Weiss", arch: "Regine Weiss (1875)", q: "" },
			{ jm: "Jakob Weiss", arch: "Jakob Weiss (1876–xxx1)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Loštice",
		cast: "",
		cp: "XIIIa",
		pocet: "7",
		obyv: [
			{ jm: "Adolf Weiss", arch: "Adolf Weiss (1838–1893)", q: "" },
			{ jm: "Pepi Weiss", arch: "Josefine Weiss (1836)", q: "" },
			{ jm: "Salamon Weiss", arch: "Salomon Weiss (1866)", q: "Q105638143" },
			{ jm: "Jacob Weiss", arch: "Jakob Weiss (1876–xxx1)", q: "" },
			{ jm: "Viktor Weiss", arch: "Viktor Weiss (1881)", q: "Q105637636" },
			{ jm: "Regine Weiss", arch: "Regine Weiss (1875)", q: "" },
			{ jm: "Leni Gross", arch: "Leni Gross (1829–1893)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Loštice",
		cast: "",
		cp: "XIIIa",
		pocet: "3",
		obyv: [
			{ jm: "Sali Ekstein", arch: "Sali Ekstein (1830)", q: "" },
			{ jm: "Netti Weiss", arch: "Netti Weiss (1857)", q: "" },
			{ jm: "Resie Weiss", arch: "Resie Weiss (1902)", q: "Q105642427" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Loštice",
		cast: "",
		cp: "XIIIb",
		pocet: "5",
		obyv: [
			{ jm: "Isak Skopal", arch: "Isak Skopal (1790–1865)", q: "" },
			{ jm: "Veronika Skopal", arch: "Veronika Skopal (1796–1877)", q: "" },
			{ jm: "Michel Skopal", arch: "Michel Skopal (1837)", q: "" },
			{ jm: "Susanna Skopal", arch: "Sali Löwi (1834)", q: "" },
			{ jm: "Markus Morgenstern", arch: "Markus Morgenstern (1853)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "XIIIb",
		pocet: "5",
		obyv: [
			{ jm: "Moses Kraus", arch: "Moses Kraus (1816–1894)", q: "" },
			{ jm: "Cilli Kraus", arch: "Cilli Kraus (1821–1882)", q: "" },
			{ jm: "Kathi Ehrenfest", arch: "Kathi Ehrenfest (1873)", q: "" },
			{ jm: "Salomon Kornitzer", arch: "Salomon Kornitzer (1817–1898)", q: "" },
			{ jm: "Netti Kornitzer", arch: "Netti Kornitzer (1827)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Loštice",
		cast: "",
		cp: "XIIIb",
		pocet: "3",
		obyv: [
			{ jm: "Hermann Weiss", arch: "Hermann Weiss (1850)", q: "" },
			{ jm: "Netty Weissová", arch: "Netti Weiss (1857)", q: "" },
			{ jm: "Sali Eckstein", arch: "Sali Ekstein (1830)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Loštice",
		cast: "",
		cp: "XIIIb",
		pocet: "5",
		obyv: [
			{ jm: "Salomon Weiss", arch: "Salomon Weiss (1866)", q: "Q105638143" },
			{ jm: "Berta Weiss", arch: "Berta Weiss (1872)", q: "" },
			{ jm: "Adolf Weiss", arch: "Adolf Weiss (1908)", q: "Q105641894" },
			{ jm: "Rosa Weiss", arch: "Rosa Weiss (1909)", q: "" },
			{ jm: "Victor Weiss", arch: "Viktor Weiss (1881)", q: "Q105637636" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Loštice",
		cast: "",
		cp: "XIIIc",
		pocet: "3",
		obyv: [
			{ jm: "Josefine Weiss", arch: "Josefine Weiss (1836)", q: "" },
			{ jm: "Salomon Weiss", arch: "Salomon Weiss (1866)", q: "Q105638143" },
			{ jm: "Regine Weiss", arch: "Regine Weiss (1875)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Loštice",
		cast: "",
		cp: "XIV",
		pocet: "7",
		obyv: [
			{ jm: "Michael Goldschmied", arch: "Michael Goldschmied (1812–1883)", q: "" },
			{ jm: "Netti Goldschmied", arch: "Netti Goldschmied (1823–1888)", q: "" },
			{ jm: "Eduard Goldschmied", arch: "Eduard Goldschmied (1847–1923)", q: "" },
			{ jm: "Rebeka Goldschmied", arch: "Rosa Bandmacher (1843)", q: "" },
			{ jm: "Saly Goldschmied", arch: "Sali Kraus (1849)", q: "" },
			{ jm: "Marie Goldschmied", arch: "Mari Goldschmied (1850)", q: "" },
			{ jm: "Julius Neuda", arch: "Julius Neuda (1845)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "XIV",
		pocet: "11",
		obyv: [
			{ jm: "Michael Goldschmied", arch: "Michael Goldschmied (1812–1883)", q: "" },
			{ jm: "Netti Goldschmied", arch: "Netti Goldschmied (1823–1888)", q: "" },
			{ jm: "Eduard Goldschmied", arch: "Eduard Goldschmied (1847–1923)", q: "" },
			{ jm: "Sali Goldschmied", arch: "Sali Kraus (1849)", q: "" },
			{ jm: "Mari Goldschmied", arch: "Mari Goldschmied (1850)", q: "" },
			{ jm: "Elias Karpelles", arch: "Elias Karpelles (1822)", q: "Q55844336" },
			{ jm: "Josefine Karpelles geb. Buchheim", arch: "Josefine Karpelles (1828)", q: "" },
			{ jm: "Charlotte Karpelles", arch: "Charlotte Groag (1851)", q: "" },
			{ jm: "Ludwig Karpelles", arch: "Ludwig Karpelles (1858)", q: "Q60815329" },
			{ jm: "Emilie Karpelles", arch: "Emil Karell (1867)", q: "Q105464811" },
			{ jm: "Paulina Buchheim", arch: "Paulina Buchheim (1812–1874)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "XIV",
		pocet: "8",
		obyv: [
			{ jm: "Sigmund Grünwald", arch: "Sigmund Grünwald (1846–1914)", q: "" },
			{ jm: "Hellena Grünwald", arch: "Helena Grünwald (1846)", q: "" },
			{ jm: "Genie Grünwald", arch: "Genie Grünwald (1872)", q: "" },
			{ jm: "Klotilde Grünwald", arch: "Klotilde Grünwald (1873–1912)", q: "" },
			{ jm: "Irma Grünwald", arch: "Irma Grünwald (1874)", q: "" },
			{ jm: "Leopoldine Grünwald", arch: "Leopoldine Grünwald (1875)", q: "" },
			{ jm: "Kamilla Grünwald", arch: "Kamilla Grünwald (1877–1896)", q: "" },
			{ jm: "Malwine Grünwald", arch: "Malwine Grünwald (1878)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Loštice",
		cast: "",
		cp: "XIV",
		pocet: "11",
		obyv: [
			{ jm: "Markus Eisner", arch: "Markus Eisner (1842–1909)", q: "" },
			{ jm: "Bettie Eisner geb. Beran", arch: "Bettie Eisner (1848)", q: "" },
			{ jm: "Emilie Eisner", arch: "Emilie Eisner (1874)", q: "" },
			{ jm: "Gabriele Eisner", arch: "Gabriela Eisner (1875)", q: "" },
			{ jm: "Wilma Eisner", arch: "Wilma Eisner (1877)", q: "Q104449312" },
			{ jm: "Frieda Eisner", arch: "Frieda Eisner (1880)", q: "" },
			{ jm: "Stephanie Eisner", arch: "Stefanie Eisner (1885)", q: "" },
			{ jm: "Karl Eisner", arch: "Karl Eisner (1888)", q: "Q104446762" },
			{ jm: "Moritz Klein", arch: "Moritz Klein (1865)", q: "" },
			{ jm: "Sali Klein", arch: "Sali Klein (1867)", q: "" },
			{ jm: "Hermine Klein", arch: "Hermine Klein (1890)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Loštice",
		cast: "",
		cp: "XIV",
		pocet: "12",
		obyv: [
			{ jm: "Mořic recte Mojžíš Klein", arch: "Moritz Klein (1865)", q: "" },
			{ jm: "Sali Klein", arch: "Sali Klein (1867)", q: "" },
			{ jm: "Karel Klein", arch: "Karl Klein (1891)", q: "Q105521070" },
			{ jm: "Hermina Kleinová", arch: "Hermine Klein (1890)", q: "" },
			{ jm: "Alfred Klein", arch: "Alfred Klein (1894)", q: "" },
			{ jm: "Ela Klein", arch: "Ella Klein (1896)", q: "Q105520830" },
			{ jm: "Julie Klein", arch: "Juli Klein (1899)", q: "" },
			{ jm: "Dr. Israel Günzig", arch: "Israel Günzig (1868)", q: "Q23060822" },
			{ jm: "Amalie Günzig", arch: "Amalie Günzig (1873)", q: "" },
			{ jm: "Moritz Schreiber", arch: "Moritz Schreiber (1876)", q: "" },
			{ jm: "Simon Schreiber", arch: "Simon Schreiber (1885)", q: "" },
			{ jm: "Regina Günzig", arch: "Regina Günzig (1898)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Loštice",
		cast: "",
		cp: "XIV",
		pocet: "15",
		obyv: [
			{ jm: "Dr. Israel Günzig", arch: "Israel Günzig (1868)", q: "Q23060822" },
			{ jm: "Amalie Günzig", arch: "Amalie Günzig (1873)", q: "" },
			{ jm: "Regina Günzig", arch: "Regina Günzig (1898)", q: "" },
			{ jm: "Sabine Günzig", arch: "Sabine Günzig (1901)", q: "" },
			{ jm: "Jacques Günzig", arch: "Jacques Günzig (1904)", q: "" },
			{ jm: "Hilda Günzig", arch: "Hilda Günzig (1910)", q: "" },
			{ jm: "Isak Juwiler", arch: "Isak Juwiler (1847)", q: "" },
			{ jm: "Fani Juwiler geb. Schreiber", arch: "Fani Juwiler (1858)", q: "" },
			{ jm: "Adam Juwiler", arch: "Adam Juwiler (1898)", q: "" },
			{ jm: "Moses (Moritz) Klein", arch: "Moritz Klein (1865)", q: "" },
			{ jm: "Sali Klein geb. Fuchs", arch: "Sali Klein (1867)", q: "" },
			{ jm: "Hermine Klein", arch: "Hermine Klein (1890)", q: "" },
			{ jm: "Alfred Klein", arch: "Alfred Klein (1894)", q: "" },
			{ jm: "Ella Klein", arch: "Ella Klein (1896)", q: "Q105520830" },
			{ jm: "Juli Klein", arch: "Juli Klein (1899)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Loštice",
		cast: "",
		cp: "XIV",
		pocet: "10",
		obyv: [
			{ jm: "Leopold Fuchs", arch: "Leopold Fuchs (1882)", q: "Q104657060" },
			{ jm: "Paula Fuchs", arch: "Paula Fuchs (1910)", q: "" },
			{ jm: "Berta Fuchs", arch: "Berta Fuchs (1911)", q: "" },
			{ jm: "Netty Grün", arch: "Netty Grün (1858)", q: "" },
			{ jm: "Adolf Müller", arch: "Adolf Müller (1843)", q: "" },
			{ jm: "Laura Morgensternová", arch: "Laura Morgenstern (1880)", q: "Q105565197" },
			{ jm: "Richard Morgenstern", arch: "Richard Morgenstern (1910)", q: "" },
			{ jm: "Eliška Morgensternová", arch: "Eliška Morgensternová (1911)", q: "" },
			{ jm: "Bernard Morgenstern", arch: "Bernard Morgenstern (1914)", q: "" },
			{ jm: "Renata Morgensternová", arch: "Renata Morgensternová (1917)", q: "Q105651099" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Loštice",
		cast: "",
		cp: "XIXa",
		pocet: "10",
		obyv: [
			{ jm: "Alois Brukmann", arch: "Alois Brukmann (1820–1881)", q: "" },
			{ jm: "Josephine Brukmann", arch: "Josefine Brukmann (1829–1864)", q: "" },
			{ jm: "Bertha Bruckmann", arch: "Berta Käufler (1855–1887)", q: "" },
			{ jm: "Therese Bruckmann", arch: "Therese Fischer (1856)", q: "Q104545017" },
			{ jm: "Eva Ehrenfest", arch: "Eva Ehrenfest (1786–1883)", q: "" },
			{ jm: "Ferdinand Ehrenfest", arch: "Ferdinand Ehrenfest (1809–1878)", q: "" },
			{ jm: "July Ehrenfest", arch: "Julie Ehrenfest (1811)", q: "" },
			{ jm: "Salomon Ehrenfest", arch: "Salomon Ehrenfest (1847–1920)", q: "" },
			{ jm: "David Ehrenfest", arch: "David Ehrenfest (1848)", q: "" },
			{ jm: "Rosi Ehrenfest", arch: "Rosi Ehrenfest (1846)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "XIXa",
		pocet: "9",
		obyv: [
			{ jm: "Heinrich Ehrenfest", arch: "Heinrich Ehrenfest (1845)", q: "" },
			{ jm: "Cilli Ehrenfest", arch: "Cilli Ehrenfest (1846)", q: "" },
			{ jm: "Josefine Ehrenfest", arch: "Josefine Ehrenfest (1868)", q: "" },
			{ jm: "Fritz Ehrenfest", arch: "Fritz Ehrenfest (1869)", q: "" },
			{ jm: "Eva Ehrenfest", arch: "Eva Ehrenfest (1786–1883)", q: "" },
			{ jm: "Resi Werner", arch: "Resi Werner (1818)", q: "" },
			{ jm: "Katti Werner", arch: "Katti Werner (1854)", q: "" },
			{ jm: "Rosalia Ekstein", arch: "Rosalia Eckstein (1829–1885)", q: "" },
			{ jm: "Therese Ekstein", arch: "Therese Eckstein (1856)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "XIXa",
		pocet: "12",
		obyv: [
			{ jm: "Josef Spitz", arch: "Josef Spitz (1835–1891)", q: "" },
			{ jm: "Anna Spitz", arch: "Anna Spitz (1845)", q: "" },
			{ jm: "Malwine Spitz", arch: "Malwine Spitz (1869)", q: "" },
			{ jm: "Lotty Spitz", arch: "Lotty Spitz (1873)", q: "" },
			{ jm: "Ignatz Spitz", arch: "Ignatz Spitz (1876)", q: "" },
			{ jm: "Moses Hautler", arch: "Moses Häutler (1803–1883)", q: "" },
			{ jm: "Paulina Hautler", arch: "Paulina Hautler (1815–1889)", q: "" },
			{ jm: "Mauritz Eckstein", arch: "Moritz Eckstein (1839)", q: "" },
			{ jm: "Fanni Eckstein", arch: "Fanni Eckstein (1843)", q: "" },
			{ jm: "David Kappelmacher", arch: "David Kappelmacher (1847)", q: "" },
			{ jm: "Netti Kappelmacher", arch: "Betty Kappelmacher (1848)", q: "" },
			{ jm: "Josef Kappelmacher", arch: "Josef Kappelmacher (1880)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Loštice",
		cast: "",
		cp: "XIXa",
		pocet: "13",
		obyv: [
			{ jm: "Josef Gross", arch: "Josef Gross (1855)", q: "" },
			{ jm: "Emilie Gross", arch: "Emilie Gross (1855)", q: "" },
			{ jm: "Ella Gross", arch: "Ella Grossová (1881)", q: "" },
			{ jm: "Franziska Gross", arch: "Fany Gross (1882)", q: "" },
			{ jm: "Laura Gross", arch: "Laura Gross (1884)", q: "" },
			{ jm: "Adela Gross", arch: "Adela Gross (1890–1891)", q: "" },
			{ jm: "Moses Kraus", arch: "Moses Kraus (1816–1894)", q: "" },
			{ jm: "Karolina Horner", arch: "Lina Horner (1848)", q: "" },
			{ jm: "Josefa Horner", arch: "Josefa Horner (1879)", q: "" },
			{ jm: "Samuel Lintner", arch: "Samuel Lindner (1855)", q: "" },
			{ jm: "Žofie Lintner", arch: "Sofie Lindner (1861)", q: "" },
			{ jm: "Elsa Lindner", arch: "Elsa Lindner (1886)", q: "" },
			{ jm: "Rosa Lindner", arch: "Rosa Lindner (1890)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Loštice",
		cast: "",
		cp: "XIXa",
		pocet: "2",
		obyv: [
			{ jm: "Moses Stern", arch: "Moses Stern (1839)", q: "" },
			{ jm: "Amalie Stern", arch: "Amalie Stern (1848)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Loštice",
		cast: "",
		cp: "XIXa",
		pocet: "3",
		obyv: [
			{ jm: "Siegfried Ekstein", arch: "Siegfried Eckstein (1879)", q: "" },
			{ jm: "Olga Ekstein", arch: "Olga Eckstein (1883)", q: "" },
			{ jm: "Walter Ekstein", arch: "Walter Eckstein (1909)", q: "Q104448569" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Loštice",
		cast: "",
		cp: "XIXa",
		pocet: "5",
		obyv: [
			{ jm: "Siegfried Eckstein", arch: "Siegfried Eckstein (1879)", q: "" },
			{ jm: "Olga Eckstein", arch: "Olga Eckstein (1883)", q: "" },
			{ jm: "Walter Eckstein", arch: "Walter Eckstein (1909)", q: "Q104448569" },
			{ jm: "Kurt Eckstein", arch: "Kurt Eckstein (1913)", q: "Q104448524" },
			{ jm: "Gräthe Eckstein", arch: "Greta Ecksteinová (1914)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Loštice",
		cast: "",
		cp: "XIXb",
		pocet: "13",
		obyv: [
			{ jm: "Bernhard Jellinek", arch: "Bernhard Jellinek (1817)", q: "" },
			{ jm: "Sophie Jellinek", arch: "Sofie Jellinek (1825)", q: "" },
			{ jm: "Emanuel Jellinek", arch: "Emanuel Jellinek (1845)", q: "" },
			{ jm: "Sigmund Jellinek", arch: "Sigmund Jellinek (1855)", q: "" },
			{ jm: "Hanni Jellinek", arch: "Johanna Ehrenfest (1844)", q: "" },
			{ jm: "Lina Jellinek", arch: "Lina Jellinek (1852)", q: "" },
			{ jm: "Betti Jellinek", arch: "Betti Jellinek (1854)", q: "" },
			{ jm: "Mathilde Jellinek", arch: "Mathilde Jellinek (1857)", q: "" },
			{ jm: "Herschl Jellinek", arch: "Herschl Jellinek (1790–1866)", q: "" },
			{ jm: "Saly Jelinek", arch: "Sali Jelinek (1795–1873)", q: "" },
			{ jm: "Salomon Kraus", arch: "Salomon Kraus (1810–1887)", q: "" },
			{ jm: "Marie Kraus", arch: "Maria Kraus (1815–1878)", q: "" },
			{ jm: "Amalie Kraus", arch: "Amalie Stern (1848)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "XIXb",
		pocet: "5",
		obyv: [
			{ jm: "Isak Frischmann", arch: "Isak Frischmann (1794)", q: "" },
			{ jm: "Moses Kraus", arch: "Moses Kraus (1816–1894)", q: "" },
			{ jm: "Cilli Kraus geb. Weiss", arch: "Cilli Kraus (1821–1882)", q: "" },
			{ jm: "Moses Hautler", arch: "Moses Häutler (1803–1883)", q: "" },
			{ jm: "Paulina Hautler", arch: "Paulina Hautler (1815–1889)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "XIXb",
		pocet: "7",
		obyv: [
			{ jm: "Josef Eckstein", arch: "Josef Ekstein (1843)", q: "" },
			{ jm: "Rosa Eckstein geb. Grünwald", arch: "Rosa Ekstein (1845)", q: "" },
			{ jm: "Lotti Eckstein", arch: "Charlotte Moller (1867)", q: "" },
			{ jm: "Heinrich Eckstein", arch: "Heinrich Eckstein (1869)", q: "" },
			{ jm: "Josefa Eckstein", arch: "Josefa Wilheim (1871)", q: "" },
			{ jm: "Anna Eckstein", arch: "Anna Freud (1877)", q: "Q104654795" },
			{ jm: "Sali Eckstein", arch: "Sali Ekstein (1830)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Loštice",
		cast: "",
		cp: "XIXc",
		pocet: "5",
		obyv: [
			{ jm: "Isak Grünwald", arch: "Isak Grünwald (1812–1889)", q: "" },
			{ jm: "Anna Grünwald", arch: "Johana Grünwald (1811–1875)", q: "" },
			{ jm: "Rösi Grünwald", arch: "Rosa Ekstein (1845)", q: "" },
			{ jm: "Babett Grünwald", arch: "Betty Kappelmacher (1848)", q: "" },
			{ jm: "Eleonora Kraus", arch: "Eleonora Kraus (1781–1864)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "XIXc",
		pocet: "3",
		obyv: [
			{ jm: "Salomon Kraus", arch: "Salomon Kraus (1810–1887)", q: "" },
			{ jm: "Maria Kraus", arch: "Maria Kraus (1815–1878)", q: "" },
			{ jm: "Mali Kraus", arch: "Amalie Stern (1848)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "XIXc",
		pocet: "12",
		obyv: [
			{ jm: "Moritz Stern", arch: "Moses Stern (1839)", q: "" },
			{ jm: "Amalie Stern", arch: "Amalie Stern (1848)", q: "" },
			{ jm: "Salomon Kraus", arch: "Salomon Kraus (1810–1887)", q: "" },
			{ jm: "Karl Eckstein", arch: "Karl Ekstein (1827)", q: "" },
			{ jm: "Johanna Eckstein geb. Rosenzweig", arch: "Johanna Ekstein (1830–1917)", q: "" },
			{ jm: "Albert Eckstein", arch: "Albert Ekstein (1860)", q: "" },
			{ jm: "Max Eckstein", arch: "Max Eckstein (1861–1913)", q: "" },
			{ jm: "Rosalie Eckstein", arch: "Rosa Lindner (1863)", q: "" },
			{ jm: "Mauritz Eckstein", arch: "Moritz Eckstein (1865)", q: "" },
			{ jm: "Salomon Eckstein", arch: "Salomon Eckstein (1867)", q: "" },
			{ jm: "Beata Eckstein", arch: "Berta Bratmann (1876)", q: "Q104409328" },
			{ jm: "Isak Grünwald", arch: "Isak Grünwald (1812–1889)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Loštice",
		cast: "",
		cp: "XIXc",
		pocet: "10",
		obyv: [
			{ jm: "Julie Lang", arch: "Julie Lang (1816)", q: "" },
			{ jm: "Moses Stern", arch: "Moses Stern (1839)", q: "" },
			{ jm: "Amalie Stern", arch: "Amalie Stern (1848)", q: "" },
			{ jm: "Karl Ekstein", arch: "Karl Ekstein (1827)", q: "" },
			{ jm: "Johanna Ekstein", arch: "Johanna Ekstein (1830–1917)", q: "" },
			{ jm: "Rosa Ekstein", arch: "Rosa Lindner (1863)", q: "" },
			{ jm: "Berta Ekstein", arch: "Berta Bratmann (1876)", q: "Q104409328" },
			{ jm: "Moric Ekstein", arch: "Moritz Eckstein (1839)", q: "" },
			{ jm: "Fani Ekstein", arch: "Fanni Eckstein (1843)", q: "" },
			{ jm: "Klara Ekstein", arch: "Klara Eckstein (1876)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Loštice",
		cast: "",
		cp: "XIXc",
		pocet: "3",
		obyv: [
			{ jm: "Karel Eckstein", arch: "Karl Ekstein (1827)", q: "" },
			{ jm: "Johana Ecksteinová", arch: "Johanna Ekstein (1830–1917)", q: "" },
			{ jm: "Selma Lindner", arch: "Selma Lindner (1894)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Loštice",
		cast: "",
		cp: "XIXc",
		pocet: "2",
		obyv: [
			{ jm: "Moses Stern", arch: "Moses Stern (1839)", q: "" },
			{ jm: "Jetti Stern", arch: "Jetti Stern (1863)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Loštice",
		cast: "",
		cp: "XIXd",
		pocet: "3",
		obyv: [
			{ jm: "Joseph Eckstein", arch: "Josef Eckstein (1807–1862)", q: "" },
			{ jm: "Saly Eckstein", arch: "Sali Ekstein (1830)", q: "" },
			{ jm: "Rosi Eckstein", arch: "Rosa Bettelheim (1856)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "XIXd",
		pocet: "9",
		obyv: [
			{ jm: "Karl Ekstein", arch: "Karl Ekstein (1827)", q: "" },
			{ jm: "Johanna Ekstein geb. Rosenzweig", arch: "Johanna Ekstein (1830–1917)", q: "" },
			{ jm: "Albert Ekstein", arch: "Albert Ekstein (1860)", q: "" },
			{ jm: "Max Ekstein", arch: "Max Eckstein (1861–1913)", q: "" },
			{ jm: "Sali Ekstein", arch: "Rosa Lindner (1863)", q: "" },
			{ jm: "Moritz Ekstein", arch: "Moritz Eckstein (1865)", q: "" },
			{ jm: "Sami Ekstein", arch: "Salomon Eckstein (1867)", q: "" },
			{ jm: "Cilli Ekstein", arch: "Cilli Ekstein (1869–1871)", q: "" },
			{ jm: "Fani Rosenzweig", arch: "Fani Rosenzweig (1850)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Loštice",
		cast: "",
		cp: "XIXd",
		pocet: "7",
		obyv: [
			{ jm: "Josef Gross", arch: "Josef Gross (1855)", q: "" },
			{ jm: "Emilie Grossová", arch: "Emilie Gross (1855)", q: "" },
			{ jm: "Ella Grossová", arch: "Ella Grossová (1881)", q: "" },
			{ jm: "Františka Grossová", arch: "Fany Gross (1882)", q: "" },
			{ jm: "Laura Gross", arch: "Laura Gross (1884)", q: "" },
			{ jm: "Ernst Gross", arch: "Ernst Gross (1892)", q: "" },
			{ jm: "Abraham Eckstein", arch: "Abraham Eckstein (1813)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Loštice",
		cast: "",
		cp: "XIXd",
		pocet: "2",
		obyv: [
			{ jm: "Karl Ekstein", arch: "Karl Ekstein (1827)", q: "" },
			{ jm: "Johanna Ekstein", arch: "Johanna Ekstein (1830–1917)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Loštice",
		cast: "",
		cp: "XIXe",
		pocet: "18",
		obyv: [
			{ jm: "Jakob Kling", arch: "Jakob Kling (1804–1869)", q: "" },
			{ jm: "Leontina Kling", arch: "Leontina Kling (1812)", q: "" },
			{ jm: "Adolf Kling", arch: "Adolf Kling (1837–1899)", q: "Q115661687" },
			{ jm: "Sara Kling", arch: "Sara Kling (1840)", q: "" },
			{ jm: "Hani Kling", arch: "Hani Kling (1843)", q: "" },
			{ jm: "Isak Friedmann", arch: "Isak Friedmann (1796–1879)", q: "" },
			{ jm: "Anna Friedmann", arch: "Anna Friedmann (1797–1867)", q: "" },
			{ jm: "Isak Friedmann", arch: "Isak Friedmann (1833)", q: "" },
			{ jm: "Bernard Friedmann", arch: "Bernard Friedmann (1836)", q: "" },
			{ jm: "Rebeka Lang", arch: "Resi Lang (1816)", q: "" },
			{ jm: "Abraham Lang", arch: "Abraham Lang (1844)", q: "" },
			{ jm: "Leopold Bruckmann", arch: "Leopold Bruckmann (1790–1870)", q: "" },
			{ jm: "Katharina Bruckmann", arch: "Katti Bruckmann (1800–1873)", q: "" },
			{ jm: "Henriette Bruckmann", arch: "Henriette Schaffer (1837)", q: "" },
			{ jm: "Moses Häutler", arch: "Moses Häutler (1803–1883)", q: "" },
			{ jm: "Paulina Häutler", arch: "Paulina Hautler (1815–1889)", q: "" },
			{ jm: "Salomon Häutler", arch: "Salomon Häutler (1840)", q: "" },
			{ jm: "Fanni Häutler", arch: "Fanni Eckstein (1843)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "XIXe",
		pocet: "2",
		obyv: [
			{ jm: "Sali Jelinek", arch: "Sali Jelinek (1795–1873)", q: "" },
			{ jm: "Jetti Fleischer", arch: "Jetti Fleischer (1820–1874)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Loštice",
		cast: "",
		cp: "XV",
		pocet: "4",
		obyv: [
			{ jm: "Simon Wolf", arch: "Simon Wolf (1801–1886)", q: "" },
			{ jm: "Eva Wolf", arch: "Eva Wolf (1803–1886)", q: "" },
			{ jm: "Amalie Wolf", arch: "Amalie Nowak (1841)", q: "" },
			{ jm: "Jetti Jellinek", arch: "Jetti Jellinek (1816)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "XV",
		pocet: "2",
		obyv: [
			{ jm: "Simon Wolf", arch: "Simon Wolf (1801–1886)", q: "" },
			{ jm: "Eva Wolf", arch: "Eva Wolf (1803–1886)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "XV",
		pocet: "2",
		obyv: [
			{ jm: "Simon Wolf", arch: "Simon Wolf (1801–1886)", q: "" },
			{ jm: "Eva Wolf", arch: "Eva Wolf (1803–1886)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Loštice",
		cast: "",
		cp: "XVI",
		pocet: "15",
		obyv: [
			{ jm: "Samuel Käufler", arch: "Samuel Käufler (1806–1875)", q: "" },
			{ jm: "Amalia Käufler", arch: "Amalia Käufler (1811–1871)", q: "" },
			{ jm: "Jakob Käufler", arch: "Jakob Käufler (1851)", q: "" },
			{ jm: "Netti Käufler", arch: "Netti Weiss (1837)", q: "" },
			{ jm: "Fanni Käufler", arch: "Fanni Herz (1840)", q: "" },
			{ jm: "Laura Käufler", arch: "Laura Käufler (1844–1865)", q: "" },
			{ jm: "Hanni Käufler", arch: "Johanna Langer (1846)", q: "" },
			{ jm: "Saly Käufler", arch: "Rosalia Friedmann (1848)", q: "" },
			{ jm: "Cecilie Käufler", arch: "Cäcilie Tauber (1857)", q: "" },
			{ jm: "Marie Blumenfeld", arch: "Marie Blumenfeld (1792–1869)", q: "" },
			{ jm: "Moses Ehrenfest", arch: "Moses Ehrenfest (1795–1878)", q: "" },
			{ jm: "Fanni Ehrenfest", arch: "Fanni Ehrenfest (1821–1873)", q: "" },
			{ jm: "Isak Ehrenfest", arch: "Ignatz Ehrenfest (1840)", q: "" },
			{ jm: "Hermann Ehrenfest", arch: "Hermann Ehrenfest (1855)", q: "" },
			{ jm: "Marie Ehrenfest", arch: "Marie Siegl (1846)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "XVI",
		pocet: "10",
		obyv: [
			{ jm: "Samuel Käufler", arch: "Samuel Käufler (1806–1875)", q: "" },
			{ jm: "Amalia Käufler", arch: "Amalia Käufler (1811–1871)", q: "" },
			{ jm: "Hani Käufler", arch: "Johanna Langer (1846)", q: "" },
			{ jm: "Saly Käufler", arch: "Rosalia Friedmann (1848)", q: "" },
			{ jm: "Cecilia Käufler", arch: "Cäcilie Tauber (1857)", q: "" },
			{ jm: "Moses Ehrenfest", arch: "Moses Ehrenfest (1795–1878)", q: "" },
			{ jm: "Hani Ehrenfest geb. Käufler", arch: "Fanni Ehrenfest (1821–1873)", q: "" },
			{ jm: "Hermann Ehrenfest", arch: "Hermann Ehrenfest (1855)", q: "" },
			{ jm: "Jakob Ekstein", arch: "Jakob Eckstein (1839)", q: "" },
			{ jm: "Betti Ekstein", arch: "Betty Eckstein (1846)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "XVI",
		pocet: "12",
		obyv: [
			{ jm: "Jakob Eckstein", arch: "Jakob Eckstein (1839)", q: "" },
			{ jm: "Betti Eckstein", arch: "Betty Eckstein (1846)", q: "" },
			{ jm: "Aloisie Eckstein", arch: "Luisa Ekstein (1872)", q: "" },
			{ jm: "Ida Eckstein", arch: "Ida Kohn (1873–xxx1)", q: "" },
			{ jm: "Paula Eckstein", arch: "Paula Eckstein (1874)", q: "" },
			{ jm: "Julie Eckstein", arch: "Julie Weiss (1876)", q: "" },
			{ jm: "Marie Ekstein", arch: "Marie Ekstein (1880)", q: "" },
			{ jm: "Hermann Langer", arch: "Heřmann Langer (1855)", q: "" },
			{ jm: "Hanni Langer", arch: "Johanna Langer (1846)", q: "" },
			{ jm: "Emil Langer", arch: "Emil Langer (1877)", q: "Q105560887" },
			{ jm: "Heinrich Langer", arch: "Jindřich Langer (1878–xxx1)", q: "" },
			{ jm: "Gusti Langer", arch: "Gusti Langer (1858)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "XVII",
		pocet: "12",
		obyv: [
			{ jm: "Hani Käufler", arch: "Hani Käufler (1823)", q: "" },
			{ jm: "Fani Madersfeld", arch: "Fanni Madersfeld (1805–1889)", q: "" },
			{ jm: "Abraham Dreiangl", arch: "Abraham Dreiangl (1810–1879)", q: "" },
			{ jm: "Adelheid Dreiangl", arch: "Adelheid Dreiangl (1815–1889)", q: "" },
			{ jm: "Josef Gross", arch: "Josef Gross (1855)", q: "" },
			{ jm: "Josef Hirsch", arch: "Josef Hirsch (1814–1892)", q: "" },
			{ jm: "Mali Hirsch", arch: "Malli Hirsch (1814–1882)", q: "" },
			{ jm: "Jetti Käufler", arch: "Jetti Käufler (1809)", q: "" },
			{ jm: "Jakob Kraus", arch: "Jakob Kraus (1838)", q: "" },
			{ jm: "Adelle Kraus", arch: "Adele Kraus (1811)", q: "" },
			{ jm: "Johanna Spitz", arch: "Anna Spitz (1845)", q: "" },
			{ jm: "Malwine Spitz", arch: "Malwine Spitz (1869)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Loštice",
		cast: "",
		cp: "XVIIa",
		pocet: "16",
		obyv: [
			{ jm: "Salomon Käufler", arch: "Salomon Käufler (1808–1858)", q: "" },
			{ jm: "Nanni Käufler", arch: "Hani Käufler (1823)", q: "" },
			{ jm: "Ignatz Käufler", arch: "Ignatz Käufler (1844–1893)", q: "" },
			{ jm: "Bernard Käufler", arch: "Bernhard Käufler (1848)", q: "" },
			{ jm: "Cecilie Käufler", arch: "Cäcilie Baderle (1852)", q: "" },
			{ jm: "Adel Kraus", arch: "Adele Kraus (1811)", q: "" },
			{ jm: "Leopold Kraus", arch: "Leopold Kraus (1844)", q: "" },
			{ jm: "Hanni Kraus", arch: "Hanni Kraus (1845)", q: "" },
			{ jm: "Selig Jarolim", arch: "Selig Jarolim (1822)", q: "" },
			{ jm: "Saly Jarolim", arch: "Saly Jarolim (1829–1869)", q: "" },
			{ jm: "Hani Jarolim", arch: "Johanna Eckstein (1852)", q: "" },
			{ jm: "Katti Jarolim", arch: "Katharina Eckstein (1854)", q: "" },
			{ jm: "Rosi Jarolim", arch: "Therese Lindner (1854)", q: "" },
			{ jm: "Marie Käufler", arch: "Marie Käufler (1811)", q: "" },
			{ jm: "Moritz Käufler", arch: "Moritz Käufler (1848)", q: "" },
			{ jm: "Fanni Käufler", arch: "Fanni Käufler (1844)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "XVIIa",
		pocet: "7",
		obyv: [
			{ jm: "Josef Gross", arch: "Josef Gross (1855)", q: "" },
			{ jm: "Emilie Gross", arch: "Emilie Gross (1855)", q: "" },
			{ jm: "Adelheid Dreiangl", arch: "Adelheid Dreiangl (1815–1889)", q: "" },
			{ jm: "Bertold Drucker", arch: "Bertold Drucker (1853)", q: "" },
			{ jm: "Bertha Drucker", arch: "Berta Drucker (1855)", q: "" },
			{ jm: "Olga Drucker", arch: "Olga Drucker (1878)", q: "" },
			{ jm: "Otto Drucker", arch: "Otto Drucker (1879)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Loštice",
		cast: "",
		cp: "XVIIa",
		pocet: "3",
		obyv: [
			{ jm: "Cäcilie Baderle", arch: "Cäcilie Baderle (1852)", q: "" },
			{ jm: "Helene Baderle", arch: "Helene Baderle (1881)", q: "" },
			{ jm: "Irma Baderle", arch: "Irma Hirschová (1886)", q: "Q104707570" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Loštice",
		cast: "",
		cp: "XVIIb",
		pocet: "20",
		obyv: [
			{ jm: "Rosalia Käufler", arch: "Rosalia Käufler (1822–1906)", q: "" },
			{ jm: "Isak Ehrenreich", arch: "Ignaz Ehrenreich (1821)", q: "" },
			{ jm: "Resy Ehrenreich", arch: "Resy Ehrenreich (1826)", q: "" },
			{ jm: "Adelheid Ehrenreich", arch: "Adelheid Ehrenreich (1852)", q: "" },
			{ jm: "Netti Ehrenreich", arch: "Netti Ehrenreich (1854)", q: "" },
			{ jm: "Tini Ehrenreich", arch: "Ernestine Ehrenreich (1856)", q: "" },
			{ jm: "Josi Hirsch", arch: "Josef Hirsch (1814–1892)", q: "" },
			{ jm: "Maly Hirsch geb. Käufler", arch: "Malli Hirsch (1814–1882)", q: "" },
			{ jm: "Sara Käufler", arch: "Sara Käufler (1786–1865)", q: "" },
			{ jm: "Viktoria Hersch", arch: "Viktoria Hersch (1784–1867)", q: "" },
			{ jm: "Herschl Hersch", arch: "Hermann Hirsch (1824)", q: "" },
			{ jm: "Kallmann Hersch", arch: "Kallmann Hersch (1818)", q: "" },
			{ jm: "Ester Hersch", arch: "Ester Hersch (1822)", q: "" },
			{ jm: "Rosi Hersch", arch: "Rosi Hersch (1849)", q: "" },
			{ jm: "Babette Hersch", arch: "Babette Hersch (1851)", q: "" },
			{ jm: "July Hersch", arch: "Julie Römer (1853)", q: "" },
			{ jm: "Marie Hersch", arch: "Marie Hersch (1856)", q: "" },
			{ jm: "Juditha Bruckmann", arch: "Juditha Bruckmann (1794–1874)", q: "" },
			{ jm: "Joachim Winter", arch: "Joachim Winter (1823)", q: "" },
			{ jm: "Resy Winter", arch: "Resy Winter (1833)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "XVIIb",
		pocet: "4",
		obyv: [
			{ jm: "Nenni Kaufler", arch: "Nenni Kaufler (1824)", q: "" },
			{ jm: "Fanni Madersfeld", arch: "Fanni Madersfeld (1805–1889)", q: "" },
			{ jm: "Josef Hirsch", arch: "Josef Hirsch (1814–1892)", q: "" },
			{ jm: "Malli Hirsch", arch: "Malli Hirsch (1814–1882)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Loštice",
		cast: "",
		cp: "XVIIb",
		pocet: "9",
		obyv: [
			{ jm: "Cäcilie Baderle geb. Käufler", arch: "Cäcilie Baderle (1852)", q: "" },
			{ jm: "Elise Baderle", arch: "Elise Baderle (1880)", q: "" },
			{ jm: "Helene Baderle", arch: "Helene Baderle (1881)", q: "" },
			{ jm: "Max Baderle", arch: "Max Baderle (1882)", q: "" },
			{ jm: "Irma Baderle", arch: "Irma Hirschová (1886)", q: "Q104707570" },
			{ jm: "Berta Drucker geb. Käufler", arch: "Berta Drucker (1855)", q: "" },
			{ jm: "Otto Drucker", arch: "Otto Drucker (1879)", q: "" },
			{ jm: "Olga Drucker", arch: "Olga Drucker (1878)", q: "" },
			{ jm: "Josef Hirsch", arch: "Josef Hirsch (1814–1892)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Loštice",
		cast: "",
		cp: "XVIIb",
		pocet: "1",
		obyv: [
			{ jm: "Berta Drucker", arch: "Berta Drucker (1855)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Loštice",
		cast: "",
		cp: "XVIIc",
		pocet: "3",
		obyv: [
			{ jm: "Cecilie Baderle (1852)", arch: "Cäcilie Baderle (1852)", q: "" },
			{ jm: "Elise Baderle", arch: "Elise Baderle (1880)", q: "" },
			{ jm: "Irma Baderle", arch: "Irma Hirschová (1886)", q: "Q104707570" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Loštice",
		cast: "",
		cp: "XVIIe",
		pocet: "1",
		obyv: [
			{ jm: "Aron Ehrenfreund", arch: "Aron Ehrenfreund (1831)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Loštice",
		cast: "",
		cp: "XVIIe",
		pocet: "2",
		obyv: [
			{ jm: "Bertold Drucker", arch: "Bertold Drucker (1853)", q: "" },
			{ jm: "Berta Drucker", arch: "Berta Drucker (1855)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Loštice",
		cast: "",
		cp: "XVIII",
		pocet: "15",
		obyv: [
			{ jm: "Wolfgang Wolf", arch: "Wolfgang Wolf (1784–1868)", q: "" },
			{ jm: "Maly Wolf", arch: "Mali Wolf (1810–1874)", q: "" },
			{ jm: "Jakob Wolf", arch: "Jakob Wolf (1849)", q: "" },
			{ jm: "Resi Wolf", arch: "Resi Wolf (1846)", q: "" },
			{ jm: "Betti Wolf", arch: "Betti Wolf (1848)", q: "" },
			{ jm: "Seligmann Wolf", arch: "Seligmann Wolf (1803–1871)", q: "" },
			{ jm: "Rosalia Wolf", arch: "Rosa Wolf (1815)", q: "" },
			{ jm: "Moritz Wolf", arch: "Moritz Wolf (1847)", q: "" },
			{ jm: "David Wolf", arch: "David Wolf (1849)", q: "" },
			{ jm: "Amalia Wolf", arch: "Amalia Skopal (1843–1868)", q: "" },
			{ jm: "Rösi Langer", arch: "Rösi Langer (1795–1868)", q: "" },
			{ jm: "Moses Lang", arch: "Moises Lang (1806–1883)", q: "" },
			{ jm: "Julie Lang", arch: "Julie Lang (1816)", q: "" },
			{ jm: "Bernhard Lang", arch: "Bernard Lang (1851)", q: "" },
			{ jm: "Öster recte Netti Lang", arch: "Netti Lang (1856)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "XVIII",
		pocet: "7",
		obyv: [
			{ jm: "Seligmann Wolf", arch: "Seligmann Wolf (1803–1871)", q: "" },
			{ jm: "Rosa Wolf", arch: "Rosa Wolf (1815)", q: "" },
			{ jm: "Mali Wolf", arch: "Mali Wolf (1810–1874)", q: "" },
			{ jm: "Resi Wolf", arch: "Resi Wolf (1846)", q: "" },
			{ jm: "Betti Wolf", arch: "Betti Wolf (1848)", q: "" },
			{ jm: "Moses Gross", arch: "Moses Gross (1796–1873)", q: "" },
			{ jm: "Karoline Gross", arch: "Leni Gross (1829–1893)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Loštice",
		cast: "",
		cp: "XX",
		pocet: "8",
		obyv: [
			{ jm: "Anna (Hanna) Ehrlich geb. Stark", arch: "Anna Ehrlich (1807)", q: "" },
			{ jm: "Kalman Ehrlich", arch: "Karel Ehrlich (1838–1904)", q: "" },
			{ jm: "Paulina Ehrlich", arch: "Josefine Friedmann (1837)", q: "" },
			{ jm: "Rebeka Ehrlich", arch: "Resi Siegl (1842)", q: "" },
			{ jm: "Markus Käufler", arch: "Markus Käufler (1797–1868)", q: "" },
			{ jm: "Sara Käufler", arch: "Saly Käufler (1800–1876)", q: "" },
			{ jm: "Hermann Wolf", arch: "Hermann Wolf (1830)", q: "" },
			{ jm: "Franziska Wolf", arch: "Veronika Wolf (1832)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "XX",
		pocet: "7",
		obyv: [
			{ jm: "Emanuel Siegl", arch: "Emanuel Siegl (1833)", q: "" },
			{ jm: "Theres Siegl", arch: "Resi Siegl (1842)", q: "" },
			{ jm: "Albert Siegl", arch: "Albert Siegl (1863)", q: "" },
			{ jm: "Julius Siegl", arch: "Julius Siegl (1865)", q: "" },
			{ jm: "Ernestine Siegl", arch: "Ernestine Siegl (1867–1871)", q: "" },
			{ jm: "Moritz Siegl", arch: "Moritz Siegel (1868)", q: "Q105504117" },
			{ jm: "Anna Ehrlich", arch: "Anna Ehrlich (1807)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "XX",
		pocet: "8",
		obyv: [
			{ jm: "Emanuel Siegl", arch: "Emanuel Siegl (1833)", q: "" },
			{ jm: "Resi Siegl geb. Ehrlich", arch: "Resi Siegl (1842)", q: "" },
			{ jm: "Albert Siegl", arch: "Albert Siegl (1863)", q: "" },
			{ jm: "Berta Siegl", arch: "Berta Siegl (1870)", q: "" },
			{ jm: "Rosa Siegl", arch: "Rosa Siegl (1872)", q: "" },
			{ jm: "Siegfried Siegl", arch: "Siegfried Siegl (1874)", q: "" },
			{ jm: "Viktorie Siegl", arch: "Viktorie Solé (1878)", q: "" },
			{ jm: "Anna Ehrlich", arch: "Anna Ehrlich (1807)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Loštice",
		cast: "",
		cp: "XX",
		pocet: "2",
		obyv: [
			{ jm: "Karel Ehrlich", arch: "Karel Ehrlich (1838–1904)", q: "" },
			{ jm: "Karolina Ehrlichová", arch: "Karoline Ehrlich (1846)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Loštice",
		cast: "",
		cp: "XX",
		pocet: "3",
		obyv: [
			{ jm: "Emil Langer", arch: "Emil Langer (1877)", q: "Q105560887" },
			{ jm: "Flora Langer", arch: "Flora Langerová (1882)", q: "Q105560898" },
			{ jm: "Erna Langer", arch: "Erna Langrová (1908)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Loštice",
		cast: "",
		cp: "XXI",
		pocet: "12",
		obyv: [
			{ jm: "Pinkus (Abraham Hirsch) Moller", arch: "Pinkus Moller (1799)", q: "" },
			{ jm: "Rosalia Moller geb. Goldschmied", arch: "Rosalia Moller (1816–1870)", q: "" },
			{ jm: "Bernard Moller", arch: "Bernhard Moller (1841–1887)", q: "" },
			{ jm: "Moses Moller", arch: "Moses Moller (1843–1897)", q: "" },
			{ jm: "Cilli Moller", arch: "Cilli Moller (1838)", q: "" },
			{ jm: "Marie Moller", arch: "Marie Goldreich (1852–1892)", q: "" },
			{ jm: "Salomon Eckstein", arch: "Salomon Ekstein (1815–1877)", q: "" },
			{ jm: "Amalie Eckstein geb. Kling", arch: "Maly Ekstein (1811)", q: "" },
			{ jm: "Adolph Eckstein", arch: "Adolf Eckstein (1850–1932)", q: "" },
			{ jm: "Juditha Fuchs", arch: "Judita Fuchs (1800–1879)", q: "" },
			{ jm: "Isak Fuchs", arch: "Isak Fuchs (1831)", q: "" },
			{ jm: "Lazar Ehrenfest", arch: "Lazar Ehrenfest (1797–1869)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "XXI",
		pocet: "8",
		obyv: [
			{ jm: "Leopold Bruckmann", arch: "Leopold Bruckmann (1790–1870)", q: "" },
			{ jm: "Katti Bruckmann", arch: "Katti Bruckmann (1800–1873)", q: "" },
			{ jm: "Salomon Ekstein", arch: "Salomon Ekstein (1815–1877)", q: "" },
			{ jm: "Resi Lang", arch: "Resi Lang (1816)", q: "" },
			{ jm: "Salomon Hirsch", arch: "Salomon Hirsch (1827–1888)", q: "" },
			{ jm: "Betti Hirsch geb. Fleischer", arch: "Betti Hirsch (1828–1882)", q: "" },
			{ jm: "Netti Hirsch", arch: "Netti Hirsch (1856)", q: "" },
			{ jm: "Rosa Hirsch", arch: "Rosa Adler (1868)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Loštice",
		cast: "",
		cp: "XXI",
		pocet: "2",
		obyv: [
			{ jm: "Samuel Lindner", arch: "Samuel Lindner (1843)", q: "" },
			{ jm: "Paula Lindner", arch: "Paula Donath (1880–1938)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "XXIa",
		pocet: "7",
		obyv: [
			{ jm: "Sigmund Knöpfelmacher", arch: "Siegmund Knöpfelmacher (1846)", q: "" },
			{ jm: "Rosa Knöpfelmacher geb. Kling", arch: "Rosa Knöpfelmacher (1844)", q: "" },
			{ jm: "Anna Knöpfelmacher", arch: "Anna Glasová (1870)", q: "Q104658054" },
			{ jm: "Berthold Knöpfelmacher", arch: "Berthold Knöpfelmacher (1871)", q: "" },
			{ jm: "Lina Knöpfelmacher", arch: "Lina Kellnerová (1873–1942)", q: "Q105520051" },
			{ jm: "Edmund Knöpfelmacher", arch: "Edmund Knöpflmacher (1876)", q: "Q105521909" },
			{ jm: "Resi Knöpfelmacher", arch: "Resi Knöpfelmacher (1880–1883)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "XXII",
		pocet: "7",
		obyv: [
			{ jm: "Karl Hirsch", arch: "Karl Hirsch (1830)", q: "" },
			{ jm: "Josefine Hirsch geb. Weiss", arch: "Josefine Hirsch (1837)", q: "" },
			{ jm: "Josef Hirsch", arch: "Josef Hirsch (1861)", q: "Q115661690" },
			{ jm: "Berta Hirsch", arch: "Berta Hirsch (1873)", q: "" },
			{ jm: "Anna Hirsch", arch: "Anna Mayer (1868)", q: "" },
			{ jm: "Mathilde Hirsch", arch: "Mathilde Hirsch (1871–xxx1)", q: "" },
			{ jm: "Rosi Langer", arch: "Rosi Langer (1847)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Loštice",
		cast: "",
		cp: "XXII",
		pocet: "6",
		obyv: [
			{ jm: "Karl Hirsch", arch: "Karl Hirsch (1830)", q: "" },
			{ jm: "Josefine Hirsch", arch: "Josefine Hirsch (1837)", q: "" },
			{ jm: "Josef Hirsch", arch: "Josef Hirsch (1861)", q: "Q115661690" },
			{ jm: "Anna Hirsch", arch: "Anna Mayer (1868)", q: "" },
			{ jm: "Matilda Hirsch", arch: "Mathilde Hirsch (1871–xxx1)", q: "" },
			{ jm: "Leopold Ehrlich", arch: "Leopold Ehrlich (1875–1942)", q: "Q104448765" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Loštice",
		cast: "",
		cp: "XXII",
		pocet: "4",
		obyv: [
			{ jm: "Moriz Ehrlich", arch: "Moriz Ehrlich (1869)", q: "" },
			{ jm: "Wilma Ehrlich", arch: "Wilma Ehrlich (1873)", q: "" },
			{ jm: "Leopold Ehrlich", arch: "Leopold Ehrlich (1875–1942)", q: "Q104448765" },
			{ jm: "Rosa Ehrlich", arch: "Rosa Ehrlich (1879)", q: "Q104448793" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Loštice",
		cast: "",
		cp: "XXII",
		pocet: "6",
		obyv: [
			{ jm: "Moriz Ehrlich", arch: "Moriz Ehrlich (1869)", q: "" },
			{ jm: "Wilma Ehrlich", arch: "Wilma Ehrlich (1873)", q: "" },
			{ jm: "Leopold Ehrlich", arch: "Leopold Ehrlich (1875–1942)", q: "Q104448765" },
			{ jm: "Rosa Ehrlich", arch: "Rosa Ehrlich (1879)", q: "Q104448793" },
			{ jm: "Julie Ehrlich", arch: "Julie Spitzerová (1901)", q: "Q105606021" },
			{ jm: "Hermann Ehrlich", arch: "Heřman Ehrlich (1903)", q: "Q104448734" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Loštice",
		cast: "",
		cp: "XXII",
		pocet: "4",
		obyv: [
			{ jm: "Leopold Ehrlich", arch: "Leopold Ehrlich (1875–1942)", q: "Q104448765" },
			{ jm: "Rosa Ehrlich", arch: "Rosa Ehrlich (1879)", q: "Q104448793" },
			{ jm: "Julie Ehrlich", arch: "Julie Spitzerová (1901)", q: "Q105606021" },
			{ jm: "Hermann Ehrlich", arch: "Heřman Ehrlich (1903)", q: "Q104448734" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Loštice",
		cast: "",
		cp: "100",
		pocet: "2",
		obyv: [
			{ jm: "Karel Hirsch", arch: "Karel Hirsch (1874)", q: "Q104707603" },
			{ jm: "Irma Hirschová", arch: "Irma Hirschová (1886)", q: "Q104707570" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "105",
		pocet: "13",
		obyv: [
			{ jm: "Peter Hirsch", arch: "Peter Hirsch (1833–1883)", q: "" },
			{ jm: "Marie Hirsch", arch: "Amalie Hirsch (1838)", q: "" },
			{ jm: "Resi Hirsch", arch: "Resi Jellinek (1860)", q: "" },
			{ jm: "David Hirsch", arch: "David Hirsch (1861–1921)", q: "" },
			{ jm: "Bernad Hirsch", arch: "Bernhard Hirsch (1865)", q: "" },
			{ jm: "Elisabeth Hirsch", arch: "Elisabeth Gartner (1866)", q: "" },
			{ jm: "Betti Hirsch", arch: "Berta Grünwald (1868)", q: "" },
			{ jm: "Karl Hirsch", arch: "Karl Hirsch (1830)", q: "" },
			{ jm: "Josefa Hirsch", arch: "Josefine Hirsch (1837)", q: "" },
			{ jm: "Resi Hirsch", arch: "Therese Fried (1860–1887)", q: "" },
			{ jm: "Josef Hirsch", arch: "Josef Hirsch (1861)", q: "Q115661690" },
			{ jm: "Betti Hirsch", arch: "Bertha Kaplmacher (1864)", q: "" },
			{ jm: "Anna Hirsch", arch: "Anna Mayer (1868)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "105",
		pocet: "7",
		obyv: [
			{ jm: "Peter Hirsch", arch: "Peter Hirsch (1833–1883)", q: "" },
			{ jm: "Marie (Maly) Hirsch geb. Lindner", arch: "Amalie Hirsch (1838)", q: "" },
			{ jm: "David Hirsch", arch: "David Hirsch (1861–1921)", q: "" },
			{ jm: "Elisabeth Hirsch", arch: "Elisabeth Gartner (1866)", q: "" },
			{ jm: "Betty Hirsch", arch: "Berta Grünwald (1868)", q: "" },
			{ jm: "Saly Hirsch", arch: "Saly Hirsch (1871)", q: "" },
			{ jm: "Betty Lindner", arch: "Betty Lindner (1812–1887)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Loštice",
		cast: "",
		cp: "105",
		pocet: "5",
		obyv: [
			{ jm: "Bernhard Hirsch", arch: "Bernhard Hirsch (1865)", q: "" },
			{ jm: "David Hirsch", arch: "David Hirsch (1861–1921)", q: "" },
			{ jm: "Amalie Hirsch", arch: "Amalie Hirsch (1838)", q: "" },
			{ jm: "Berta Hirsch", arch: "Berta Grünwald (1868)", q: "" },
			{ jm: "Sali Hirsch", arch: "Saly Hirsch (1871)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Loštice",
		cast: "",
		cp: "105",
		pocet: "5",
		obyv: [
			{ jm: "Bernhard Hirsch", arch: "Bernhard Hirsch (1865)", q: "" },
			{ jm: "Johanna Hirsch", arch: "Johanna Hirsch (1867–1933)", q: "" },
			{ jm: "David Hirsch", arch: "David Hirsch (1861–1921)", q: "" },
			{ jm: "Amalie Hirsch", arch: "Amalie Hirsch (1838)", q: "" },
			{ jm: "Elsa Hirsch", arch: "Elsa Hirsch (1893)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Loštice",
		cast: "",
		cp: "105",
		pocet: "5",
		obyv: [
			{ jm: "Bernhard Hirsch", arch: "Bernhard Hirsch (1865)", q: "" },
			{ jm: "Ida Hirsch", arch: "Ida Hirschová (1882)", q: "Q104707557" },
			{ jm: "Lilly Hirsch", arch: "Lilly Hirsch (1906)", q: "" },
			{ jm: "Josef Hirsch", arch: "Josef Hirsch (1910)", q: "" },
			{ jm: "Amalie Hirsch", arch: "Amalie Hirsch (1838)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Loštice",
		cast: "",
		cp: "105",
		pocet: "6",
		obyv: [
			{ jm: "Bernhard Hirsch", arch: "Bernhard Hirsch (1865)", q: "" },
			{ jm: "Ida Hirsch", arch: "Ida Hirschová (1882)", q: "Q104707557" },
			{ jm: "Josef Hirsch", arch: "Josef Hirsch (1910)", q: "" },
			{ jm: "Frieda Hirsch", arch: "Frieda Hirsch (1916)", q: "" },
			{ jm: "Rosa Brüll", arch: "Rosa Brüll (1893)", q: "" },
			{ jm: "Magnus Michalovsky", arch: "Magnus Michalovsky (1896)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "109",
		pocet: "8",
		obyv: [
			{ jm: "Markus Eisner", arch: "Markus Eisner (1842–1909)", q: "" },
			{ jm: "Betti Eisner", arch: "Bettie Eisner (1848)", q: "" },
			{ jm: "Hermine Eisner", arch: "Hermine Eisner (1873)", q: "" },
			{ jm: "Emilie Eisner", arch: "Emilie Eisner (1874)", q: "" },
			{ jm: "Gabriela Eisner", arch: "Gabriela Eisner (1875)", q: "" },
			{ jm: "Wilma Eisner", arch: "Wilma Eisner (1877)", q: "Q104449312" },
			{ jm: "Richard Eisner", arch: "Richard Eisner (1878)", q: "" },
			{ jm: "Friederika Eisner", arch: "Frieda Eisner (1880)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Loštice",
		cast: "",
		cp: "109",
		pocet: "5",
		obyv: [
			{ jm: "Johanna Langer", arch: "Johanna Langer (1846)", q: "" },
			{ jm: "Julius Langer", arch: "Julius Langer (1882)", q: "" },
			{ jm: "Karel Hirsch", arch: "Karel Hirsch (1874)", q: "Q104707603" },
			{ jm: "Eliška Hirsch", arch: "Eliška Hirsch (1879)", q: "" },
			{ jm: "Amálie Hirsch", arch: "Amálie Hirsch (1906)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "11",
		pocet: "6",
		obyv: [
			{ jm: "Jakob Schreier", arch: "Jakob Schreier (1838)", q: "" },
			{ jm: "Rosi Schreier", arch: "Rosi Schreier (1836)", q: "" },
			{ jm: "Regina Schreier", arch: "Regine Morvay (1867)", q: "" },
			{ jm: "Emma Schreier", arch: "Emma Feiwel (1870)", q: "" },
			{ jm: "Anna Schreier", arch: "Anna Schreier (1873)", q: "" },
			{ jm: "Albert Schreier", arch: "Albert Schreier (1875)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Loštice",
		cast: "",
		cp: "111",
		pocet: "4",
		obyv: [
			{ jm: "Adolf Müller", arch: "Adolf Müller (1843)", q: "" },
			{ jm: "Karolina Müller", arch: "Karolina Müller (1870)", q: "" },
			{ jm: "Erwin Müller", arch: "Erwin Müller (1905–xxx1)", q: "" },
			{ jm: "Elsa Müller", arch: "Elsa Müller (1908)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "115",
		pocet: "3",
		obyv: [
			{ jm: "Moses Lang", arch: "Moises Lang (1806–1883)", q: "" },
			{ jm: "Julie Lang geb. Winter", arch: "Julie Lang (1816)", q: "" },
			{ jm: "Netti Lang", arch: "Netti Lang (1856)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Loštice",
		cast: "",
		cp: "115",
		pocet: "8",
		obyv: [
			{ jm: "Josef Ekstein", arch: "Josef Ekstein (1843)", q: "" },
			{ jm: "Rosa Ekstein geb. Grünwald", arch: "Rosa Ekstein (1845)", q: "" },
			{ jm: "Charlotte Ekstein", arch: "Charlotte Moller (1867)", q: "" },
			{ jm: "Heinrich Ekstein", arch: "Heinrich Eckstein (1869)", q: "" },
			{ jm: "Josefine Ekstein", arch: "Josefa Wilheim (1871)", q: "" },
			{ jm: "Anna Ekstein", arch: "Anna Freud (1877)", q: "Q104654795" },
			{ jm: "Jonas Ekstein", arch: "Jonas Eckstein (1881)", q: "" },
			{ jm: "Irma Ekstein", arch: "Irma Eckstein (1889)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Loštice",
		cast: "",
		cp: "115",
		pocet: "2",
		obyv: [
			{ jm: "Rosa Eckstein", arch: "Rosa Ekstein (1845)", q: "" },
			{ jm: "Irma Eckstein", arch: "Irma Eckstein (1889)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "117",
		pocet: "4",
		obyv: [
			{ jm: "Moritz Eckstein", arch: "Moritz Eckstein (1839)", q: "" },
			{ jm: "Fanni Eckstein", arch: "Fanni Eckstein (1843)", q: "" },
			{ jm: "Amalia Eckstein", arch: "Amalia Eckstein (1869–1877)", q: "" },
			{ jm: "Phillipine Geist", arch: "Phillipine Geist (1856)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "117",
		pocet: "7",
		obyv: [
			{ jm: "Israel Fischer", arch: "Israel Fischer (1843)", q: "" },
			{ jm: "Resi Fischer", arch: "Rosa Fischer (1852)", q: "" },
			{ jm: "Anna Fischer", arch: "Anna Czech (1871)", q: "" },
			{ jm: "Emma Fischer", arch: "Emma Fischer (1873)", q: "" },
			{ jm: "Antonie Fischer", arch: "Ernestine Eichenbaum (1875)", q: "" },
			{ jm: "Genie Fischer", arch: "Eugenie Fischer (1877)", q: "" },
			{ jm: "Bruno Fischer", arch: "Bruno Fischer (1879)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Loštice",
		cast: "",
		cp: "118",
		pocet: "7",
		obyv: [
			{ jm: "Michael Müller", arch: "Michael Müller (1804–1883)", q: "" },
			{ jm: "Amalia Müller geb. Samek", arch: "Amalia Müller (1810–1870)", q: "" },
			{ jm: "Samuel Löbel Müller", arch: "Samuel Müller (1840)", q: "" },
			{ jm: "Abraham Müller", arch: "Adolf Müller (1843)", q: "" },
			{ jm: "Leopold Müller", arch: "Leopold Müller (1850)", q: "" },
			{ jm: "July Müller", arch: "Julie Müller (1845)", q: "" },
			{ jm: "Rosy Müller", arch: "Rosalia Kohn (1847)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "118",
		pocet: "7",
		obyv: [
			{ jm: "Michael Müller", arch: "Michael Müller (1804–1883)", q: "" },
			{ jm: "Amalia Müller geb. Samek", arch: "Amalia Müller (1810–1870)", q: "" },
			{ jm: "Adolf Müller", arch: "Adolf Müller (1843)", q: "" },
			{ jm: "Rosalia Müller", arch: "Rosalia Kohn (1847)", q: "" },
			{ jm: "Ignatz Käufler", arch: "Ignatz Käufler (1844–1893)", q: "" },
			{ jm: "Julie Käufler", arch: "Julie Käufler (1845)", q: "" },
			{ jm: "Salomon Käufler", arch: "Salomon Käufler (1869–1877)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "118",
		pocet: "3",
		obyv: [
			{ jm: "Adolf Müller", arch: "Adolf Müller (1843)", q: "" },
			{ jm: "Rosalia Müller", arch: "Rosalia Müller (1848–1900)", q: "" },
			{ jm: "Michael Müller", arch: "Michael Müller (1804–1883)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Loštice",
		cast: "",
		cp: "118",
		pocet: "4",
		obyv: [
			{ jm: "Adolf Müller", arch: "Adolf Müller (1843)", q: "" },
			{ jm: "Rosalie Müller", arch: "Rosalia Müller (1848–1900)", q: "" },
			{ jm: "Julius Müller", arch: "Julius Müller (1884–1891)", q: "" },
			{ jm: "Emil Müller", arch: "Emil Müller (1886)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "120",
		pocet: "3",
		obyv: [
			{ jm: "Joachim Winter", arch: "Joachim Winter (1814–1889)", q: "" },
			{ jm: "Resi Winter", arch: "Resi Winter (1824–1887)", q: "" },
			{ jm: "Leni Huss", arch: "Leni Huss (1800)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "121",
		pocet: "7",
		obyv: [
			{ jm: "Alois Brukmann", arch: "Alois Brukmann (1820–1881)", q: "" },
			{ jm: "Berta Brukmann", arch: "Berta Käufler (1855–1887)", q: "" },
			{ jm: "Theresia Brukmann", arch: "Therese Fischer (1856)", q: "Q104545017" },
			{ jm: "Max Brukmann", arch: "Maxmilian Brukmann (1860–1895)", q: "" },
			{ jm: "Emma Brukmann", arch: "Emma Reif (1862)", q: "" },
			{ jm: "Juditha Bruckmann", arch: "Juditha Bruckmann (1794–1874)", q: "" },
			{ jm: "Ignatz Brukmann", arch: "Ignatz Bruckmann (1858–1900)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Loštice",
		cast: "",
		cp: "121",
		pocet: "5",
		obyv: [
			{ jm: "Jakob Moller", arch: "Jakob Moller (1851)", q: "" },
			{ jm: "Marie Moller", arch: "Marie Moller (1852)", q: "" },
			{ jm: "Viktor Moller", arch: "Viktor Moller (1882)", q: "" },
			{ jm: "Elsa Moller", arch: "Else Bernfeld (1884)", q: "" },
			{ jm: "Leo Moller", arch: "Leo Moller (1889)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "174",
		pocet: "11",
		obyv: [
			{ jm: "Josef Langer", arch: "Josef Langer (1815–1879)", q: "" },
			{ jm: "Julie (Jetti) Langer geb. Süssmandel", arch: "Julie Langer (1824–1874)", q: "" },
			{ jm: "Rosi Langer", arch: "Rosi Langer (1847)", q: "" },
			{ jm: "Adolf (Wolf) Langer", arch: "Adolf Langer (1852)", q: "" },
			{ jm: "Hanny Langer", arch: "Hanny Langer (1854)", q: "" },
			{ jm: "Hermann Langer", arch: "Heřmann Langer (1855)", q: "" },
			{ jm: "Netti Langer", arch: "Netti Polnauer (1856)", q: "" },
			{ jm: "Gusti Langer", arch: "Gusti Langer (1858)", q: "" },
			{ jm: "Ignatz Langer", arch: "Ignatz Langer (1861)", q: "" },
			{ jm: "Theodor Langer", arch: "Theodor Langer (1863)", q: "" },
			{ jm: "Rosi Langer", arch: "Rosi Langer (1869)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "193",
		pocet: "2",
		obyv: [
			{ jm: "Alexander Ascher", arch: "Alexander Ascher (1814–1887)", q: "" },
			{ jm: "Rosi Ascher", arch: "Rosi Ascher (1824)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "193",
		pocet: "3",
		obyv: [
			{ jm: "Alexander Ascher", arch: "Alexander Ascher (1814–1887)", q: "" },
			{ jm: "Rosi Ascher", arch: "Rosi Ascher (1824)", q: "" },
			{ jm: "Betti Schaffer", arch: "Betti Schaffer (1864)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Loštice",
		cast: "",
		cp: "196",
		pocet: "1",
		obyv: [
			{ jm: "Richard Grätzer", arch: "Richard Grätzer (1889)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Loštice",
		cast: "",
		cp: "216",
		pocet: "7",
		obyv: [
			{ jm: "Emil Langer", arch: "Emil Langer (1877)", q: "Q105560887" },
			{ jm: "Flora Langrová", arch: "Flora Langerová (1882)", q: "Q105560898" },
			{ jm: "Erna Langrová", arch: "Erna Langrová (1908)", q: "" },
			{ jm: "Ruda Langrová", arch: "Ruda Langrová (1911)", q: "" },
			{ jm: "Grete Langrová", arch: "Greta Langerová (1913)", q: "Q105560912" },
			{ jm: "Frida Langrová", arch: "Frida Langrová (1915)", q: "" },
			{ jm: "Gerta Langrová", arch: "Gerta Langrová (1920)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Loštice",
		cast: "",
		cp: "247",
		pocet: "8",
		obyv: [
			{ jm: "Israel Fischer", arch: "Israel Fischer (1843)", q: "" },
			{ jm: "Rosa Fischer geb. Heller", arch: "Rosa Fischer (1852)", q: "" },
			{ jm: "Bruno Fischer", arch: "Bruno Fischer (1879)", q: "" },
			{ jm: "Emil Fischer", arch: "Emil Fischer (1881)", q: "" },
			{ jm: "Anna Fischer", arch: "Anna Czech (1871)", q: "" },
			{ jm: "Emma Fischer", arch: "Emma Fischer (1873)", q: "" },
			{ jm: "Ernestine Fischer", arch: "Ernestine Eichenbaum (1875)", q: "" },
			{ jm: "Eugenie Fischer", arch: "Eugenie Fischer (1877)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Loštice",
		cast: "",
		cp: "247",
		pocet: "6",
		obyv: [
			{ jm: "Israel Fischer", arch: "Israel Fischer (1843)", q: "" },
			{ jm: "Rosa Fischer geb. Heller", arch: "Rosa Fischer (1852)", q: "" },
			{ jm: "Ernestine Fischer", arch: "Ernestine Eichenbaum (1875)", q: "" },
			{ jm: "Eugenie Fischer", arch: "Eugenie Fischer (1877)", q: "" },
			{ jm: "Bruno Firscher", arch: "Bruno Fischer (1879)", q: "" },
			{ jm: "Emil Fischer", arch: "Emil Fischer (1881)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Loštice",
		cast: "",
		cp: "247",
		pocet: "2",
		obyv: [
			{ jm: "Emil Fischer", arch: "Emil Fischer (1881)", q: "" },
			{ jm: "Camilla Reich", arch: "Camilla Reich (1891)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Loštice",
		cast: "",
		cp: "247",
		pocet: "4",
		obyv: [
			{ jm: "Emil Fischer", arch: "Emil Fischer (1881)", q: "" },
			{ jm: "Israel Fischer", arch: "Israel Fischer (1843)", q: "" },
			{ jm: "Eliška Čechová", arch: "Eliška Čechová (1904)", q: "" },
			{ jm: "Alfred Glässner", arch: "Alfred Glässner (1898)", q: "Q104658000" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Loštice",
		cast: "",
		cp: "255",
		pocet: "6",
		obyv: [
			{ jm: "Herrman Langer", arch: "Heřmann Langer (1855)", q: "" },
			{ jm: "Johanna Langer geb. Käufler", arch: "Johanna Langer (1846)", q: "" },
			{ jm: "Emil Langer", arch: "Emil Langer (1877)", q: "Q105560887" },
			{ jm: "Heinrich Langer", arch: "Jindřich Langer (1878–xxx1)", q: "" },
			{ jm: "Julius Langer", arch: "Julius Langer (1882)", q: "" },
			{ jm: "Max Langer", arch: "Max Langer (1885)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Loštice",
		cast: "",
		cp: "255",
		pocet: "7",
		obyv: [
			{ jm: "Heřmann Langer", arch: "Heřmann Langer (1855)", q: "" },
			{ jm: "Johanna Langerová", arch: "Johanna Langer (1846)", q: "" },
			{ jm: "Jindřich Langer", arch: "Jindřich Langer (1878–xxx1)", q: "" },
			{ jm: "Julius Langer", arch: "Julius Langer (1882)", q: "" },
			{ jm: "Max Langer", arch: "Max Langer (1885)", q: "" },
			{ jm: "Artur Langer", arch: "Artur Langer (1894)", q: "" },
			{ jm: "Elsa Langerová", arch: "Elsa Langerová (1885)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Loštice",
		cast: "",
		cp: "255",
		pocet: "1",
		obyv: [
			{ jm: "Max Langer", arch: "Max Langer (1885)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Loštice",
		cast: "",
		cp: "255",
		pocet: "2",
		obyv: [
			{ jm: "Max Langer", arch: "Max Langer (1885)", q: "" },
			{ jm: "Žofie Langrová", arch: "Žofie Langrová (1894)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Loštice",
		cast: "",
		cp: "322",
		pocet: "1",
		obyv: [
			{ jm: "Aron Ehrenfreund", arch: "Aron Ehrenfreund (1831)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Loštice",
		cast: "",
		cp: "334",
		pocet: "2",
		obyv: [
			{ jm: "Heinrich Langer", arch: "Jindřich Langer (1878–xxx1)", q: "" },
			{ jm: "Markus Elechnowics", arch: "Markus Elechnowics (1880)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Loštice",
		cast: "",
		cp: "347",
		pocet: "1",
		obyv: [
			{ jm: "Karoline Ehrlich", arch: "Karoline Ehrlich (1846)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "50",
		pocet: "8",
		obyv: [
			{ jm: "Bernard Friedmann", arch: "Bernard Friedmann (1836)", q: "" },
			{ jm: "Ernestine Friedmann", arch: "Josefine Friedmann (1837)", q: "" },
			{ jm: "Ernestine Friedmann", arch: "Ernestine Chitz (1860–xxx1)", q: "" },
			{ jm: "Lazar Moller", arch: "Lazar Moller (1821–1888)", q: "" },
			{ jm: "Rachel (Rosalie) Moller geb. Ekstein", arch: "Rosalie Moller (1824–1889)", q: "" },
			{ jm: "Jakob Moller", arch: "Jakob Moller (1851)", q: "" },
			{ jm: "Julie Moller", arch: "Julie Moller (1852)", q: "" },
			{ jm: "Mauritz Moller", arch: "Moritz Moller (1844)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "50",
		pocet: "3",
		obyv: [
			{ jm: "Lazar Moller", arch: "Lazar Moller (1821–1888)", q: "" },
			{ jm: "Rosalie Moller", arch: "Rosalie Moller (1824–1889)", q: "" },
			{ jm: "Albert Moller", arch: "Albert Moller (1854)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "54",
		pocet: "8",
		obyv: [
			{ jm: "Mauritz Moller", arch: "Moritz Moller (1844)", q: "" },
			{ jm: "Julie Moller", arch: "Julie Moller (1852)", q: "" },
			{ jm: "Theodor Moller", arch: "Theodor Moller (1873)", q: "" },
			{ jm: "Emil Moller", arch: "Emil Moller (1875)", q: "" },
			{ jm: "Alfred Moller", arch: "Alfred Moller (1876)", q: "" },
			{ jm: "Arthur Moller", arch: "Arthur Moller (1880)", q: "" },
			{ jm: "Abraham Eckstein", arch: "Abraham Eckstein (1813)", q: "" },
			{ jm: "Hugo Eckstein", arch: "Hugo Eckstein (1874–1895)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Loštice",
		cast: "",
		cp: "54",
		pocet: "4",
		obyv: [
			{ jm: "Salomon Ekstein", arch: "Salomon Ekstein (1848–1917)", q: "" },
			{ jm: "Johanna Ekstein", arch: "Johanna Eckstein (1854–1924)", q: "" },
			{ jm: "Julie Ekstein", arch: "Julie Politzer (1877)", q: "" },
			{ jm: "Berthold Ekstein", arch: "Berthold Ekstein (1879)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Loštice",
		cast: "",
		cp: "54",
		pocet: "2",
		obyv: [
			{ jm: "Salomon Ekstein", arch: "Salomon Ekstein (1848–1917)", q: "" },
			{ jm: "Johana Ekstein", arch: "Johanna Eckstein (1854–1924)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Loštice",
		cast: "",
		cp: "54",
		pocet: "2",
		obyv: [
			{ jm: "Johanna Ekstein", arch: "Johanna Eckstein (1854–1924)", q: "" },
			{ jm: "Julie Politzer", arch: "Julie Politzer (1877)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "55",
		pocet: "2",
		obyv: [
			{ jm: "Michael Goldschmied", arch: "Michael Goldschmied (1812–1883)", q: "" },
			{ jm: "Netti Goldschmied", arch: "Netti Goldschmied (1823–1888)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Loštice",
		cast: "",
		cp: "55",
		pocet: "4",
		obyv: [
			{ jm: "Salomon Ekstein", arch: "Salomon Ekstein (1848–1917)", q: "" },
			{ jm: "Johanna Ekstein geb. Kling", arch: "Johanna Eckstein (1854–1924)", q: "" },
			{ jm: "Lina Eckstein", arch: "Lina Eckstein (1874)", q: "" },
			{ jm: "Julie Ekstein", arch: "Julie Politzer (1877)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Loštice",
		cast: "",
		cp: "56",
		pocet: "4",
		obyv: [
			{ jm: "Markus Eisner", arch: "Markus Eisner (1842–1909)", q: "" },
			{ jm: "Bettie Eisner geb. Beran", arch: "Bettie Eisner (1848)", q: "" },
			{ jm: "Wilma Eisner", arch: "Wilma Eisner (1877)", q: "Q104449312" },
			{ jm: "Karl Eisner", arch: "Karl Eisner (1888)", q: "Q104446762" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "57",
		pocet: "8",
		obyv: [
			{ jm: "Hermann Wolf", arch: "Hermann Wolf (1830)", q: "" },
			{ jm: "Veronika Wolf", arch: "Veronika Wolf (1832)", q: "" },
			{ jm: "Jetty Wolf", arch: "Henriette Schneider (1858)", q: "" },
			{ jm: "Jakop Wolf", arch: "Jakob Wolf (1859–1916)", q: "" },
			{ jm: "Hany Wolf", arch: "Johanna Steiner (1862–xxx2)", q: "" },
			{ jm: "Viktoria Wolf", arch: "Viktoria Konstandt (1866)", q: "" },
			{ jm: "Fany Wolf", arch: "Fany Brand (1856)", q: "" },
			{ jm: "Saly Käufler", arch: "Saly Käufler (1800–1876)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "57",
		pocet: "5",
		obyv: [
			{ jm: "Hermann Wolf", arch: "Hermann Wolf (1830)", q: "" },
			{ jm: "Veronika Wolf", arch: "Veronika Wolf (1832)", q: "" },
			{ jm: "Jakob Wolf", arch: "Jakob Wolf (1859–1916)", q: "" },
			{ jm: "Johanna Wolf", arch: "Johanna Steiner (1862–xxx2)", q: "" },
			{ jm: "Viktorie Wolf", arch: "Viktoria Konstandt (1866)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Loštice",
		cast: "",
		cp: "57",
		pocet: "4",
		obyv: [
			{ jm: "Hermann Wolf", arch: "Hermann Wolf (1830)", q: "" },
			{ jm: "Fany Wolf", arch: "Veronika Wolf (1832)", q: "" },
			{ jm: "Jacob Wolf", arch: "Jakob Wolf (1859–1916)", q: "" },
			{ jm: "Victoria Wolf", arch: "Viktoria Konstandt (1866)", q: "" },
			],
		info: ""
	},
	{
		rok: "1857",
		obec: "Loštice",
		cast: "",
		cp: "58",
		pocet: "8",
		obyv: [
			{ jm: "David Hersch", arch: "David Hersch (1793–1858)", q: "" },
			{ jm: "Rachl Hersch", arch: "Rosa Hirsch (1809–1883)", q: "" },
			{ jm: "Karl Hersch", arch: "Karl Hirsch (1830)", q: "" },
			{ jm: "Peter Hersch", arch: "Peter Hirsch (1833–1883)", q: "" },
			{ jm: "Abraham Hersch", arch: "Abraham Hirsch (1840)", q: "" },
			{ jm: "Markus Hersch", arch: "Markus Hirsch (1844–1885)", q: "" },
			{ jm: "Moritz Hersch", arch: "Moritz Hersch (1846)", q: "" },
			{ jm: "Katti Hersch", arch: "Katti Hersch (1817)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "58",
		pocet: "2",
		obyv: [
			{ jm: "Rosa Hirsch", arch: "Rosa Hirsch (1809–1883)", q: "" },
			{ jm: "Markus Hirsch", arch: "Markus Hirsch (1844–1885)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "58",
		pocet: "2",
		obyv: [
			{ jm: "Rosa Hirsch", arch: "Rosa Hirsch (1809–1883)", q: "" },
			{ jm: "Markus Hirsch", arch: "Markus Hirsch (1844–1885)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "59",
		pocet: "4",
		obyv: [
			{ jm: "Ignaz Siegel", arch: "Ignatz Siegl (1840–1918)", q: "" },
			{ jm: "Maria Siegel", arch: "Marie Siegl (1846)", q: "" },
			{ jm: "Bertha Siegel", arch: "Berta Ehrenfest (1867)", q: "" },
			{ jm: "Josefy Siegel", arch: "Josefa Siegel (1869)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "59",
		pocet: "7",
		obyv: [
			{ jm: "Ignatz Siegl", arch: "Ignatz Siegl (1840–1918)", q: "" },
			{ jm: "Marie Siegl geb. Ehrenfest", arch: "Marie Siegl (1846)", q: "" },
			{ jm: "Berta Siegl", arch: "Berta Ehrenfest (1867)", q: "" },
			{ jm: "Julius Siegl", arch: "Julius Siegl (1871)", q: "" },
			{ jm: "Hugo Siegl", arch: "Hugo Siegl (1873)", q: "" },
			{ jm: "Otto Siegl", arch: "Otto Siegl (1876)", q: "Q105601915" },
			{ jm: "Robert Siegl", arch: "Robert Siegl (1877)", q: "Q105601919" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Loštice",
		cast: "",
		cp: "59",
		pocet: "6",
		obyv: [
			{ jm: "Ignatz Siegl", arch: "Ignatz Siegl (1840–1918)", q: "" },
			{ jm: "Marie Siegl geb. Ehrenfest", arch: "Marie Siegl (1846)", q: "" },
			{ jm: "Julius Siegl", arch: "Julius Siegl (1871)", q: "" },
			{ jm: "Robert Siegl", arch: "Robert Siegl (1877)", q: "Q105601919" },
			{ jm: "Olga Siegl", arch: "Olga Hlawatsch (1880)", q: "" },
			{ jm: "Hermine Siegl", arch: "Hermína Kornblühová (1881)", q: "Q105526409" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "60",
		pocet: "4",
		obyv: [
			{ jm: "Carl Hirsch", arch: "Carl Hirsch (1815–1887)", q: "" },
			{ jm: "Kathy (Rebeka) Hirsch geb. Flamm", arch: "Kathy Hirsch (1825)", q: "" },
			{ jm: "Albert Hirsch", arch: "Albert Hirsch (1852)", q: "" },
			{ jm: "Lazar Flam", arch: "Lazar Flam (1800–1879)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "60",
		pocet: "2",
		obyv: [
			{ jm: "Bernard Friedmann", arch: "Bernard Friedmann (1836)", q: "" },
			{ jm: "Josefine Friedmann", arch: "Josefine Friedmann (1837)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "61",
		pocet: "5",
		obyv: [
			{ jm: "Samuel Jarolim", arch: "Samuel Jarolim (1825–1892)", q: "" },
			{ jm: "Fany Jarolim geb. Tauber", arch: "Fani Jarolim (1827)", q: "" },
			{ jm: "Alois Jarolim", arch: "Alois Jarolim (1857–1930)", q: "" },
			{ jm: "Hany Jarolim", arch: "Hani Jarolim (1859)", q: "" },
			{ jm: "Lina Jarolim", arch: "Lina Jarolim (1865)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "61",
		pocet: "4",
		obyv: [
			{ jm: "Samuel Jarolim", arch: "Samuel Jarolim (1825–1892)", q: "" },
			{ jm: "Fani Jarolim", arch: "Fani Jarolim (1827)", q: "" },
			{ jm: "Hani Jarolim", arch: "Hani Jarolim (1859)", q: "" },
			{ jm: "Lina Jarolim", arch: "Lina Jarolim (1865)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "62",
		pocet: "1",
		obyv: [
			{ jm: "Jakob Moller", arch: "Jakob Moller (1851)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "63",
		pocet: "4",
		obyv: [
			{ jm: "Samuel Lindner", arch: "Samuel Lindner (1843)", q: "" },
			{ jm: "Kathi Lindner", arch: "Kathi Lindner (1847–1892)", q: "" },
			{ jm: "Rosa Lindner", arch: "Rosa Skopal (1873)", q: "" },
			{ jm: "Paula Lindner", arch: "Paula Donath (1880–1938)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Loštice",
		cast: "",
		cp: "63",
		pocet: "9",
		obyv: [
			{ jm: "Sigmund Knöpfelmacher", arch: "Siegmund Knöpfelmacher (1846)", q: "" },
			{ jm: "Rosa Knöpfelmacher geb. Kling", arch: "Rosa Knöpfelmacher (1844)", q: "" },
			{ jm: "Anna Knöpfelmacher", arch: "Anna Glasová (1870)", q: "Q104658054" },
			{ jm: "Berthold Knöpfelmacher", arch: "Berthold Knöpfelmacher (1871)", q: "" },
			{ jm: "Lina Knöpfelmacher", arch: "Lina Kellnerová (1873–1942)", q: "Q105520051" },
			{ jm: "Edmund Knöpflmacher", arch: "Edmund Knöpflmacher (1876)", q: "Q105521909" },
			{ jm: "Arnold Knöpfelmacher", arch: "Arnold Knöpfelmacher (1882–1944)", q: "Q105521855" },
			{ jm: "Gisela Knöpfelmacher", arch: "Gisela Alterová (1886)", q: "Q104209260" },
			{ jm: "Sali Kling", arch: "Sali Kling (1813–1897)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Loštice",
		cast: "",
		cp: "63",
		pocet: "4",
		obyv: [
			{ jm: "Siegmund Knöpfelmacher", arch: "Siegmund Knöpfelmacher (1846)", q: "" },
			{ jm: "Rosa Knöpfelmacher", arch: "Rosa Knöpfelmacher (1844)", q: "" },
			{ jm: "Edmund Knöpfelmacher", arch: "Edmund Knöpflmacher (1876)", q: "Q105521909" },
			{ jm: "Gisela Knöpfelmacher", arch: "Gisela Alterová (1886)", q: "Q104209260" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Loštice",
		cast: "",
		cp: "63",
		pocet: "9",
		obyv: [
			{ jm: "Edmund Knöpflmacher", arch: "Edmund Knöpflmacher (1876)", q: "Q105521909" },
			{ jm: "Lotte Knöpfelmacher", arch: "Charlotta Knöpflmacherová (1884)", q: "Q105521910" },
			{ jm: "Sigmund Knöpfelmacher", arch: "Sigmund Knöpfelmacher (1906)", q: "Q106820842" },
			{ jm: "Rosa Knöpfelmacher", arch: "Rosa Knöpfelmacher (1844)", q: "" },
			{ jm: "Melanie Mandl", arch: "Melanie Mandl (1885)", q: "" },
			{ jm: "Samuel Duschinský", arch: "Samuel Duschinský (1876)", q: "" },
			{ jm: "Gisela Duschinsky", arch: "Gisela Alterová (1886)", q: "Q104209260" },
			{ jm: "Walter Duschinsky", arch: "Walter Duschinsky (1910)", q: "" },
			{ jm: "Arnold Traube", arch: "Arnold Traube (1877)", q: "Q105615446" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Loštice",
		cast: "",
		cp: "63",
		pocet: "3",
		obyv: [
			{ jm: "Edmund Knöpflmacher", arch: "Edmund Knöpflmacher (1876)", q: "Q105521909" },
			{ jm: "Lotte Knöpfelmacher", arch: "Charlotta Knöpflmacherová (1884)", q: "Q105521910" },
			{ jm: "Rosa Knöpfelmacher", arch: "Rosa Knöpfelmacher (1844)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "64",
		pocet: "7",
		obyv: [
			{ jm: "Adolf Kaufler", arch: "Adolf Käufler (1853)", q: "" },
			{ jm: "Berta Kaufler", arch: "Berta Käufler (1855–1887)", q: "" },
			{ jm: "Paula Kaufler", arch: "Paula Kaufler (1879)", q: "" },
			{ jm: "Elsa Kaufler", arch: "Elsa Käufler (1880)", q: "" },
			{ jm: "Alois Brukmann", arch: "Alois Brukmann (1820–1881)", q: "" },
			{ jm: "Teres Brukmann", arch: "Therese Fischer (1856)", q: "Q104545017" },
			{ jm: "Ema Bruckmann", arch: "Emma Reif (1862)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Loštice",
		cast: "",
		cp: "64",
		pocet: "3",
		obyv: [
			{ jm: "Jindřich Langer", arch: "Jindřich Langer (1878–xxx1)", q: "" },
			{ jm: "Růžena Langrová", arch: "Růžena Langerová (1888)", q: "Q105560978" },
			{ jm: "Herta Langrová", arch: "Herta Langerová (1914)", q: "Q105560923" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "65",
		pocet: "4",
		obyv: [
			{ jm: "Bernhart Lövy", arch: "Bernard Löwi (1830)", q: "" },
			{ jm: "Resy Lövy", arch: "Resi Löwi (1832)", q: "" },
			{ jm: "Saly Löwy", arch: "Rosa Löwi (1863)", q: "" },
			{ jm: "Dawid Ekstein", arch: "David Eckstein (1795–1886)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "65",
		pocet: "1",
		obyv: [
			{ jm: "David Kaufler", arch: "David Kaufler (1808–1894)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Loštice",
		cast: "",
		cp: "65",
		pocet: "7",
		obyv: [
			{ jm: "Samuel Lindner", arch: "Samuel Lindner (1843)", q: "" },
			{ jm: "Katty Lindner", arch: "Kathi Lindner (1847–1892)", q: "" },
			{ jm: "Alfred Lindner", arch: "Alfred Lindner (1888–1891)", q: "" },
			{ jm: "Theodor Lindner", arch: "Theodor Lindner (1889–1891)", q: "" },
			{ jm: "Rosa Lindner", arch: "Rosa Skopal (1873)", q: "" },
			{ jm: "Paula Lindner", arch: "Paula Donath (1880–1938)", q: "" },
			{ jm: "David Käufler", arch: "David Kaufler (1808–1894)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "70",
		pocet: "5",
		obyv: [
			{ jm: "Isak Grünwald", arch: "Isak Grünwald (1812–1889)", q: "" },
			{ jm: "Johana Grünwald", arch: "Johana Grünwald (1811–1875)", q: "" },
			{ jm: "Betty Grünwald", arch: "Betty Kappelmacher (1848)", q: "" },
			{ jm: "Saly Ehrenfest", arch: "Saly Ehrenfest (1809–1873)", q: "" },
			{ jm: "Simon Schild", arch: "Simon Schild (1800–1871)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Loštice",
		cast: "",
		cp: "70",
		pocet: "1",
		obyv: [
			{ jm: "Anna Käuflerová", arch: "Anna Käufler (1821)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "71",
		pocet: "4",
		obyv: [
			{ jm: "Josef Ekstein", arch: "Josef Ekstein (1843)", q: "" },
			{ jm: "Rosy Ekstein", arch: "Rosa Ekstein (1845)", q: "" },
			{ jm: "Lotty Ekstein", arch: "Charlotte Moller (1867)", q: "" },
			{ jm: "Heinrich Ekstein", arch: "Heinrich Eckstein (1869)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "71",
		pocet: "2",
		obyv: [
			{ jm: "Joachim Winter", arch: "Joachim Winter (1814–1889)", q: "" },
			{ jm: "Resi Winter", arch: "Resi Winter (1824–1887)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "72",
		pocet: "4",
		obyv: [
			{ jm: "Salomon Heller", arch: "Salomon Heller (1809–1895)", q: "" },
			{ jm: "Rosy Heller", arch: "Resi Heller (1829–1890)", q: "" },
			{ jm: "Rosaly Heller", arch: "Rosa Fischer (1852)", q: "" },
			{ jm: "Ida Heller", arch: "Ida Lampel (1862–1936)", q: "" },
			],
		info: ""
	},
	{
		rok: "1880",
		obec: "Loštice",
		cast: "",
		cp: "72",
		pocet: "3",
		obyv: [
			{ jm: "Salomon Heller", arch: "Salomon Heller (1809–1895)", q: "" },
			{ jm: "Resi Heller", arch: "Resi Heller (1829–1890)", q: "" },
			{ jm: "Ida Heller", arch: "Ida Lampel (1862–1936)", q: "" },
			],
		info: ""
	},
	{
		rok: "1890",
		obec: "Loštice",
		cast: "",
		cp: "72",
		pocet: "1",
		obyv: [
			{ jm: "Salomon Heller", arch: "Salomon Heller (1809–1895)", q: "" },
			],
		info: ""
	},
	{
		rok: "1900",
		obec: "Loštice",
		cast: "",
		cp: "72",
		pocet: "1",
		obyv: [
			{ jm: "Adolf Müller", arch: "Adolf Müller (1843)", q: "" },
			],
		info: ""
	},
	{
		rok: "1910",
		obec: "Loštice",
		cast: "",
		cp: "72",
		pocet: "7",
		obyv: [
			{ jm: "Josef Gross", arch: "Josef Gross (1855)", q: "" },
			{ jm: "Emilie Gross geb. Eisler", arch: "Emilie Gross (1855)", q: "" },
			{ jm: "Fany Gross", arch: "Fany Gross (1882)", q: "" },
			{ jm: "Laura Gross", arch: "Laura Gross (1884)", q: "" },
			{ jm: "Ernst Gross", arch: "Ernst Gross (1892)", q: "" },
			{ jm: "Caroline Ehrlich", arch: "Karoline Ehrlich (1846)", q: "" },
			{ jm: "Erna Beneš", arch: "Erna Beneš (1887)", q: "" },
			],
		info: ""
	},
	{
		rok: "1921",
		obec: "Loštice",
		cast: "",
		cp: "72",
		pocet: "4",
		obyv: [
			{ jm: "Josef Gross", arch: "Josef Gross (1855)", q: "" },
			{ jm: "Emilie Gross", arch: "Emilie Gross (1855)", q: "" },
			{ jm: "Josef Ekstein", arch: "Josef Ekstein (1843)", q: "" },
			{ jm: "Rosa Ekstein", arch: "Rosa Ekstein (1845)", q: "" },
			],
		info: ""
	},
	{
		rok: "1869",
		obec: "Loštice",
		cast: "",
		cp: "74",
		pocet: "3",
		obyv: [
			{ jm: "Adolf Kling", arch: "Adolf Kling (1837–1899)", q: "Q115661687" },
			{ jm: "Rachel Kling", arch: "Rachel Kling (1844)", q: "" },
			{ jm: "Anna Kling", arch: "Anna Kling (1869–1897)", q: "Q115661689" },
			],
		info: ""
	},
];
var mapCenter = [49.7435,16.9280];
var geoJSON = {
"type": "FeatureCollection",
"features": [
{
  "type": "Feature",
  "id": "relation/2687409",
  "properties": {
    "building": "yes",
    "source:start_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "start_date": "1937",
    "type": "multipolygon",
    "id": "relation/2687409"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9273812,
          49.7457437
        ],
        [
          16.9274494,
          49.7457111
        ],
        [
          16.9276964,
          49.7456017
        ],
        [
          16.927723,
          49.7456348
        ],
        [
          16.9277825,
          49.745709
        ],
        [
          16.9279672,
          49.7458953
        ],
        [
          16.9282432,
          49.7462349
        ],
        [
          16.9277158,
          49.7464349
        ],
        [
          16.9275078,
          49.7462361
        ],
        [
          16.9274171,
          49.7461327
        ],
        [
          16.9276162,
          49.7460557
        ],
        [
          16.9275716,
          49.7460003
        ],
        [
          16.9275243,
          49.7459453
        ],
        [
          16.9273812,
          49.7457437
        ]
      ],
      [
        [
          16.9277262,
          49.7457516
        ],
        [
          16.927551,
          49.7458402
        ],
        [
          16.9276683,
          49.7459591
        ],
        [
          16.9278383,
          49.7458959
        ],
        [
          16.9277262,
          49.7457516
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "relation/2687412",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "IV",
    "addr:housenumber": "IV",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://iispp.npu.cz/mis_public/documentDetail.htm?id=1140995",
    "start_date": "1856",
    "type": "multipolygon",
    "wikidata": "Q37466450",
    "id": "relation/2687412"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9260617,
          49.7461759
        ],
        [
          16.9259987,
          49.7461193
        ],
        [
          16.9260996,
          49.7460736
        ],
        [
          16.9261262,
          49.746098
        ],
        [
          16.92619,
          49.746069
        ],
        [
          16.9261426,
          49.7460131
        ],
        [
          16.9261655,
          49.7460045
        ],
        [
          16.926098,
          49.7459299
        ],
        [
          16.9259962,
          49.7459683
        ],
        [
          16.9260484,
          49.7460261
        ],
        [
          16.9260177,
          49.7460386
        ],
        [
          16.9259357,
          49.7460676
        ],
        [
          16.9259009,
          49.7460279
        ],
        [
          16.9258371,
          49.7459552
        ],
        [
          16.9259967,
          49.7458902
        ],
        [
          16.9261429,
          49.7458442
        ],
        [
          16.9263195,
          49.7460578
        ],
        [
          16.9262263,
          49.7461022
        ],
        [
          16.9260617,
          49.7461759
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "relation/2687413",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "II",
    "addr:housenumber": "II",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "type": "multipolygon",
    "id": "relation/2687413"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9259401,
          49.7465576
        ],
        [
          16.925853,
          49.7464817
        ],
        [
          16.9259802,
          49.7464208
        ],
        [
          16.9262544,
          49.7462895
        ],
        [
          16.9263416,
          49.7463656
        ],
        [
          16.9262327,
          49.7464176
        ],
        [
          16.9262535,
          49.7464358
        ],
        [
          16.9262113,
          49.746456
        ],
        [
          16.9261905,
          49.7464378
        ],
        [
          16.9260673,
          49.7464967
        ],
        [
          16.9259401,
          49.7465576
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "relation/2687414",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "XIII",
    "addr:housenumber": "XIII",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "type": "multipolygon",
    "id": "relation/2687414"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9252928,
          49.7444805
        ],
        [
          16.9253128,
          49.7445425
        ],
        [
          16.9253022,
          49.7445439
        ],
        [
          16.9253202,
          49.7445995
        ],
        [
          16.925343,
          49.7445965
        ],
        [
          16.9253728,
          49.7446888
        ],
        [
          16.9251821,
          49.7447145
        ],
        [
          16.9251523,
          49.7446222
        ],
        [
          16.9251343,
          49.7445666
        ],
        [
          16.925114,
          49.7445036
        ],
        [
          16.9252928,
          49.7444805
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "relation/2687418",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "type": "multipolygon",
    "id": "relation/2687418"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9272783,
          49.7415493
        ],
        [
          16.9272633,
          49.7414974
        ],
        [
          16.9272911,
          49.7414925
        ],
        [
          16.9272097,
          49.7412479
        ],
        [
          16.9275206,
          49.741189
        ],
        [
          16.9275234,
          49.7413181
        ],
        [
          16.927526,
          49.7414343
        ],
        [
          16.9273955,
          49.7414949
        ],
        [
          16.9273064,
          49.7415363
        ],
        [
          16.9272783,
          49.7415493
        ]
      ],
      [
        [
          16.9273668,
          49.7414122
        ],
        [
          16.9274329,
          49.741403
        ],
        [
          16.9273923,
          49.741283
        ],
        [
          16.9273279,
          49.7412959
        ],
        [
          16.9273668,
          49.7414122
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "relation/2687419",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "type": "multipolygon",
    "id": "relation/2687419"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9281156,
          49.7423766
        ],
        [
          16.9282081,
          49.7423917
        ],
        [
          16.9284716,
          49.7424348
        ],
        [
          16.9286174,
          49.7424736
        ],
        [
          16.9285944,
          49.7424925
        ],
        [
          16.9285176,
          49.7425555
        ],
        [
          16.9284223,
          49.7426337
        ],
        [
          16.9283773,
          49.7426706
        ],
        [
          16.9283553,
          49.7426845
        ],
        [
          16.9282963,
          49.7427217
        ],
        [
          16.9282089,
          49.7427528
        ],
        [
          16.9281071,
          49.7427508
        ],
        [
          16.9281147,
          49.7427065
        ],
        [
          16.9281266,
          49.7426372
        ],
        [
          16.9280427,
          49.7426302
        ],
        [
          16.9281156,
          49.7423766
        ]
      ],
      [
        [
          16.9282071,
          49.742644
        ],
        [
          16.928299,
          49.7426517
        ],
        [
          16.9283648,
          49.7426006
        ],
        [
          16.928448,
          49.742536
        ],
        [
          16.9284266,
          49.7425221
        ],
        [
          16.9282647,
          49.7424944
        ],
        [
          16.9282071,
          49.742644
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "relation/2687420",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "type": "multipolygon",
    "id": "relation/2687420"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9272196,
          49.742799
        ],
        [
          16.9272146,
          49.7427379
        ],
        [
          16.9272149,
          49.7426909
        ],
        [
          16.9272153,
          49.7426328
        ],
        [
          16.9272172,
          49.742342
        ],
        [
          16.9279248,
          49.7423475
        ],
        [
          16.9279282,
          49.7424298
        ],
        [
          16.9279268,
          49.7424788
        ],
        [
          16.9279355,
          49.7427715
        ],
        [
          16.9277523,
          49.7427806
        ],
        [
          16.9272196,
          49.742799
        ]
      ],
      [
        [
          16.9273909,
          49.7426759
        ],
        [
          16.9275109,
          49.7426745
        ],
        [
          16.9275217,
          49.7425221
        ],
        [
          16.9277425,
          49.7425249
        ],
        [
          16.9277361,
          49.7424833
        ],
        [
          16.9273909,
          49.7424805
        ],
        [
          16.9273909,
          49.7426759
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "relation/2687423",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "127",
    "addr:housenumber": "127",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "type": "multipolygon",
    "id": "relation/2687423"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9312487,
          49.744382
        ],
        [
          16.9312298,
          49.7442984
        ],
        [
          16.9312111,
          49.7442206
        ],
        [
          16.931431,
          49.7441512
        ],
        [
          16.9316201,
          49.7441547
        ],
        [
          16.9315517,
          49.7443791
        ],
        [
          16.9313666,
          49.7443809
        ],
        [
          16.9313411,
          49.7443811
        ],
        [
          16.9312487,
          49.744382
        ]
      ],
      [
        [
          16.9313197,
          49.7443219
        ],
        [
          16.9314364,
          49.7443141
        ],
        [
          16.9314203,
          49.7442093
        ],
        [
          16.9312996,
          49.7442353
        ],
        [
          16.9313197,
          49.7443219
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "relation/2687424",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "type": "multipolygon",
    "id": "relation/2687424"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9312487,
          49.744382
        ],
        [
          16.9312298,
          49.7442984
        ],
        [
          16.9312111,
          49.7442206
        ],
        [
          16.931431,
          49.7441512
        ],
        [
          16.9316201,
          49.7441547
        ],
        [
          16.9315517,
          49.7443791
        ],
        [
          16.9313666,
          49.7443809
        ],
        [
          16.9313425,
          49.7444424
        ],
        [
          16.931313,
          49.7444424
        ],
        [
          16.9313411,
          49.7443811
        ],
        [
          16.9312487,
          49.744382
        ]
      ],
      [
        [
          16.9313197,
          49.7443219
        ],
        [
          16.9314364,
          49.7443141
        ],
        [
          16.9314203,
          49.7442093
        ],
        [
          16.9312996,
          49.7442353
        ],
        [
          16.9313197,
          49.7443219
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198305961",
  "properties": {
    "building": "yes",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198305961"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9289155,
          49.7454131
        ],
        [
          16.9289796,
          49.7454821
        ],
        [
          16.9289282,
          49.7455021
        ],
        [
          16.9288641,
          49.745433
        ],
        [
          16.9289155,
          49.7454131
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198305962",
  "properties": {
    "building": "yes",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198305962"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9288301,
          49.7453212
        ],
        [
          16.9288964,
          49.7453925
        ],
        [
          16.9288473,
          49.7454115
        ],
        [
          16.9287811,
          49.7453402
        ],
        [
          16.9288301,
          49.7453212
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198305963",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "51",
    "addr:housenumber": "51",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198305963"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.928666,
          49.7451611
        ],
        [
          16.9288121,
          49.745101
        ],
        [
          16.9289281,
          49.7452188
        ],
        [
          16.9288758,
          49.7452403
        ],
        [
          16.9289478,
          49.7453134
        ],
        [
          16.9289185,
          49.7453255
        ],
        [
          16.9290727,
          49.745482
        ],
        [
          16.9290052,
          49.7455097
        ],
        [
          16.9289796,
          49.7454821
        ],
        [
          16.9289155,
          49.7454131
        ],
        [
          16.9288964,
          49.7453925
        ],
        [
          16.9288301,
          49.7453212
        ],
        [
          16.9287728,
          49.7452696
        ],
        [
          16.928666,
          49.7451611
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198305964",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "52",
    "addr:housenumber": "52",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198305964"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9285728,
          49.7451899
        ],
        [
          16.928666,
          49.7451611
        ],
        [
          16.9287728,
          49.7452696
        ],
        [
          16.9286898,
          49.7453041
        ],
        [
          16.9285728,
          49.7451899
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198305965",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198305965"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9285728,
          49.7451899
        ],
        [
          16.9286898,
          49.7453041
        ],
        [
          16.9287097,
          49.7453234
        ],
        [
          16.928567,
          49.7453844
        ],
        [
          16.9288014,
          49.7456132
        ],
        [
          16.9288381,
          49.7456489
        ],
        [
          16.9288095,
          49.7456611
        ],
        [
          16.9288895,
          49.7457392
        ],
        [
          16.9288358,
          49.7457621
        ],
        [
          16.9288096,
          49.7457366
        ],
        [
          16.9287846,
          49.7457111
        ],
        [
          16.9287193,
          49.7456496
        ],
        [
          16.928596,
          49.7455284
        ],
        [
          16.928502,
          49.7454366
        ],
        [
          16.9284695,
          49.7454047
        ],
        [
          16.9283548,
          49.7452781
        ],
        [
          16.9285728,
          49.7451899
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198305966",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198305966"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9283548,
          49.7452781
        ],
        [
          16.9284695,
          49.7454047
        ],
        [
          16.9282914,
          49.745464
        ],
        [
          16.9285412,
          49.7457278
        ],
        [
          16.9286472,
          49.7456802
        ],
        [
          16.9285249,
          49.7455588
        ],
        [
          16.9284308,
          49.745467
        ],
        [
          16.928502,
          49.7454366
        ],
        [
          16.928596,
          49.7455284
        ],
        [
          16.9287193,
          49.7456496
        ],
        [
          16.9287846,
          49.7457111
        ],
        [
          16.9288096,
          49.7457366
        ],
        [
          16.9287055,
          49.7457805
        ],
        [
          16.9286399,
          49.7458095
        ],
        [
          16.9285601,
          49.745843
        ],
        [
          16.9285429,
          49.7458226
        ],
        [
          16.9285243,
          49.7458051
        ],
        [
          16.9284739,
          49.7457576
        ],
        [
          16.9284214,
          49.7456978
        ],
        [
          16.9282871,
          49.745545
        ],
        [
          16.9282433,
          49.7455014
        ],
        [
          16.9281154,
          49.7453707
        ],
        [
          16.9283548,
          49.7452781
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198305967",
  "properties": {
    "building": "yes",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198305967"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9285601,
          49.745843
        ],
        [
          16.9286431,
          49.7459261
        ],
        [
          16.9284252,
          49.7460139
        ],
        [
          16.928345,
          49.7459272
        ],
        [
          16.9285601,
          49.745843
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198305968",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198305968"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9282871,
          49.745545
        ],
        [
          16.9284214,
          49.7456978
        ],
        [
          16.9284739,
          49.7457576
        ],
        [
          16.9285243,
          49.7458051
        ],
        [
          16.9284817,
          49.7458213
        ],
        [
          16.9284335,
          49.745768
        ],
        [
          16.9284096,
          49.745777
        ],
        [
          16.9283586,
          49.7457206
        ],
        [
          16.9282221,
          49.7455695
        ],
        [
          16.9282871,
          49.745545
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198305969",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198305969"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9280246,
          49.7455801
        ],
        [
          16.9279041,
          49.7454517
        ],
        [
          16.9281154,
          49.7453707
        ],
        [
          16.9282433,
          49.7455014
        ],
        [
          16.9281808,
          49.7455247
        ],
        [
          16.9280866,
          49.7455597
        ],
        [
          16.9280246,
          49.7455801
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198305970",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198305970"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9280386,
          49.7455936
        ],
        [
          16.9280961,
          49.7455735
        ],
        [
          16.9281753,
          49.745674
        ],
        [
          16.9282444,
          49.7457613
        ],
        [
          16.9282271,
          49.7457664
        ],
        [
          16.928333,
          49.7458553
        ],
        [
          16.9282611,
          49.7458814
        ],
        [
          16.9281782,
          49.7457862
        ],
        [
          16.9281424,
          49.745745
        ],
        [
          16.9281034,
          49.7457002
        ],
        [
          16.9280386,
          49.7455936
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198305971",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198305971"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9281041,
          49.7458154
        ],
        [
          16.9280656,
          49.7457711
        ],
        [
          16.9279546,
          49.7456432
        ],
        [
          16.9277825,
          49.745709
        ],
        [
          16.927723,
          49.7456348
        ],
        [
          16.9276964,
          49.7456017
        ],
        [
          16.9277589,
          49.7455673
        ],
        [
          16.9277404,
          49.7455471
        ],
        [
          16.9278311,
          49.7455124
        ],
        [
          16.9278081,
          49.7454873
        ],
        [
          16.9279041,
          49.7454517
        ],
        [
          16.9280246,
          49.7455801
        ],
        [
          16.9280386,
          49.7455936
        ],
        [
          16.9281034,
          49.7457002
        ],
        [
          16.9281424,
          49.745745
        ],
        [
          16.9281782,
          49.7457862
        ],
        [
          16.9281041,
          49.7458154
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198305972",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198305972"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9279672,
          49.7458953
        ],
        [
          16.9280445,
          49.7458649
        ],
        [
          16.9283891,
          49.7462615
        ],
        [
          16.9282958,
          49.7462953
        ],
        [
          16.9282432,
          49.7462349
        ],
        [
          16.9279672,
          49.7458953
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198305975",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198305975"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.927168,
          49.7458401
        ],
        [
          16.9272302,
          49.745817
        ],
        [
          16.9272636,
          49.7458013
        ],
        [
          16.9273849,
          49.7459413
        ],
        [
          16.9273603,
          49.7459501
        ],
        [
          16.9273958,
          49.7459914
        ],
        [
          16.9275243,
          49.7459453
        ],
        [
          16.9275716,
          49.7460003
        ],
        [
          16.9274269,
          49.7460522
        ],
        [
          16.9274072,
          49.7460293
        ],
        [
          16.9273486,
          49.7460503
        ],
        [
          16.9273165,
          49.7460129
        ],
        [
          16.9272388,
          49.7459224
        ],
        [
          16.927168,
          49.7458401
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198305976",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198305976"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9269744,
          49.7459247
        ],
        [
          16.927049,
          49.7458921
        ],
        [
          16.9271228,
          49.7458598
        ],
        [
          16.927168,
          49.7458401
        ],
        [
          16.9272388,
          49.7459224
        ],
        [
          16.9270934,
          49.7459776
        ],
        [
          16.9271699,
          49.7460615
        ],
        [
          16.9273165,
          49.7460129
        ],
        [
          16.9273486,
          49.7460503
        ],
        [
          16.9273584,
          49.7460649
        ],
        [
          16.9271571,
          49.746131
        ],
        [
          16.9269744,
          49.7459247
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198305977",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198305977"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.926797,
          49.7459971
        ],
        [
          16.9268777,
          49.7459641
        ],
        [
          16.9269744,
          49.7459247
        ],
        [
          16.9271571,
          49.746131
        ],
        [
          16.9270965,
          49.7461533
        ],
        [
          16.927047,
          49.7460972
        ],
        [
          16.9269774,
          49.7461229
        ],
        [
          16.9270213,
          49.7461726
        ],
        [
          16.9269302,
          49.7462063
        ],
        [
          16.9269075,
          49.7461806
        ],
        [
          16.9268772,
          49.7461919
        ],
        [
          16.9268471,
          49.7461579
        ],
        [
          16.9269164,
          49.7461323
        ],
        [
          16.926797,
          49.7459971
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198305978",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198305978"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9266049,
          49.7460888
        ],
        [
          16.9266668,
          49.7460616
        ],
        [
          16.9266919,
          49.746052
        ],
        [
          16.9267621,
          49.7461201
        ],
        [
          16.9266706,
          49.7461593
        ],
        [
          16.9266049,
          49.7460888
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198305979",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198305979"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9264879,
          49.7461344
        ],
        [
          16.9266049,
          49.7460888
        ],
        [
          16.9266706,
          49.7461593
        ],
        [
          16.9266851,
          49.7461748
        ],
        [
          16.9267003,
          49.7461956
        ],
        [
          16.926583,
          49.7462407
        ],
        [
          16.9265681,
          49.7462204
        ],
        [
          16.9264879,
          49.7461344
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198305980",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198305980"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9269031,
          49.7467061
        ],
        [
          16.9269565,
          49.7467601
        ],
        [
          16.9268604,
          49.7468084
        ],
        [
          16.9268889,
          49.7468429
        ],
        [
          16.9267235,
          49.7469244
        ],
        [
          16.9266613,
          49.7468693
        ],
        [
          16.9267822,
          49.7468072
        ],
        [
          16.9267608,
          49.7467578
        ],
        [
          16.9269031,
          49.7467061
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198305981",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198305981"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9267923,
          49.746576
        ],
        [
          16.9268476,
          49.7466375
        ],
        [
          16.9265996,
          49.7467305
        ],
        [
          16.9265443,
          49.746669
        ],
        [
          16.9267923,
          49.746576
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198305982",
  "properties": {
    "building": "yes",
    "source:start_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "start_date": "1937",
    "id": "way/198305982"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9264813,
          49.7464025
        ],
        [
          16.9264184,
          49.7464326
        ],
        [
          16.9263698,
          49.7463902
        ],
        [
          16.9263416,
          49.7463656
        ],
        [
          16.9262544,
          49.7462895
        ],
        [
          16.9263736,
          49.7462325
        ],
        [
          16.9263992,
          49.7462203
        ],
        [
          16.9264901,
          49.7462996
        ],
        [
          16.9264083,
          49.7463387
        ],
        [
          16.9264228,
          49.7463513
        ],
        [
          16.9264813,
          49.7464025
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198305983",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198305983"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9264184,
          49.7464326
        ],
        [
          16.9264813,
          49.7464025
        ],
        [
          16.9265086,
          49.7464262
        ],
        [
          16.9265317,
          49.7464464
        ],
        [
          16.9266044,
          49.7464117
        ],
        [
          16.9266216,
          49.7464267
        ],
        [
          16.926486,
          49.7464916
        ],
        [
          16.9264457,
          49.7464564
        ],
        [
          16.9264184,
          49.7464326
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198305984",
  "properties": {
    "building": "yes",
    "material": "wood",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198305984"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9262862,
          49.7465281
        ],
        [
          16.9263249,
          49.7465615
        ],
        [
          16.9262565,
          49.7465945
        ],
        [
          16.9262178,
          49.7465611
        ],
        [
          16.9262862,
          49.7465281
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198305985",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "IIa",
    "addr:housenumber": "IIa",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198305985"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9259802,
          49.7464208
        ],
        [
          16.9262544,
          49.7462895
        ],
        [
          16.9263416,
          49.7463656
        ],
        [
          16.9262327,
          49.7464176
        ],
        [
          16.9262535,
          49.7464358
        ],
        [
          16.9262113,
          49.746456
        ],
        [
          16.9261905,
          49.7464378
        ],
        [
          16.9260673,
          49.7464967
        ],
        [
          16.9259802,
          49.7464208
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198305986",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198305986"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.925853,
          49.7464817
        ],
        [
          16.9259802,
          49.7464208
        ],
        [
          16.9260673,
          49.7464967
        ],
        [
          16.9261303,
          49.7465517
        ],
        [
          16.926003,
          49.7466126
        ],
        [
          16.9259401,
          49.7465576
        ],
        [
          16.925853,
          49.7464817
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198305987",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198305987"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9247269,
          49.7463235
        ],
        [
          16.9247719,
          49.7463792
        ],
        [
          16.9247184,
          49.7463969
        ],
        [
          16.9246791,
          49.7463441
        ],
        [
          16.9247269,
          49.7463235
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198305988",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198305988"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9250449,
          49.7463676
        ],
        [
          16.9251281,
          49.7464803
        ],
        [
          16.9248632,
          49.746562
        ],
        [
          16.9248214,
          49.7465053
        ],
        [
          16.9247957,
          49.7465132
        ],
        [
          16.9247311,
          49.7464257
        ],
        [
          16.9248339,
          49.746394
        ],
        [
          16.9248572,
          49.7464255
        ],
        [
          16.9250449,
          49.7463676
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198305989",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198305989"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.924753,
          49.746002
        ],
        [
          16.9248062,
          49.7460549
        ],
        [
          16.9247659,
          49.7460718
        ],
        [
          16.9247776,
          49.7460834
        ],
        [
          16.9247511,
          49.7460945
        ],
        [
          16.9247408,
          49.7460843
        ],
        [
          16.9247009,
          49.7461011
        ],
        [
          16.9246463,
          49.7460468
        ],
        [
          16.924753,
          49.746002
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306068",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306068"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.924495,
          49.7459843
        ],
        [
          16.9246285,
          49.7459282
        ],
        [
          16.9246432,
          49.7459428
        ],
        [
          16.9246951,
          49.7459215
        ],
        [
          16.9247165,
          49.7459163
        ],
        [
          16.9247352,
          49.7459225
        ],
        [
          16.9247413,
          49.745936
        ],
        [
          16.9247237,
          49.7459501
        ],
        [
          16.9246774,
          49.7459697
        ],
        [
          16.9246932,
          49.7459854
        ],
        [
          16.9245757,
          49.7460348
        ],
        [
          16.9245469,
          49.7460061
        ],
        [
          16.9245259,
          49.746015
        ],
        [
          16.924495,
          49.7459843
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306069",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306069"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9245217,
          49.7458352
        ],
        [
          16.9245362,
          49.7458481
        ],
        [
          16.9245704,
          49.7458321
        ],
        [
          16.924611,
          49.7458682
        ],
        [
          16.9245745,
          49.7458854
        ],
        [
          16.9245906,
          49.7458997
        ],
        [
          16.9245171,
          49.7459342
        ],
        [
          16.9245027,
          49.7459214
        ],
        [
          16.9244476,
          49.7459472
        ],
        [
          16.9244037,
          49.7459082
        ],
        [
          16.9244636,
          49.7458801
        ],
        [
          16.9244506,
          49.7458686
        ],
        [
          16.9245217,
          49.7458352
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306070",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306070"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9244492,
          49.7457138
        ],
        [
          16.9245125,
          49.7457728
        ],
        [
          16.9244073,
          49.7458199
        ],
        [
          16.9243441,
          49.7457608
        ],
        [
          16.9244492,
          49.7457138
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306071",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "343",
    "addr:housenumber": "343",
    "building": "house",
    "source:shape": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://iispp.npu.cz/mis_public/documentDetail.htm?id=1141022",
    "start_date": "1911",
    "wikidata": "Q30730450",
    "id": "way/198306071"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.925653,
          49.7463645
        ],
        [
          16.9254958,
          49.7464311
        ],
        [
          16.9254002,
          49.7463369
        ],
        [
          16.9255106,
          49.7462901
        ],
        [
          16.9254979,
          49.7462776
        ],
        [
          16.9255447,
          49.7462578
        ],
        [
          16.9255902,
          49.7463026
        ],
        [
          16.925653,
          49.7463645
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306072",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306072"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9257034,
          49.7459899
        ],
        [
          16.9257507,
          49.746044
        ],
        [
          16.9256713,
          49.746073
        ],
        [
          16.9255948,
          49.746101
        ],
        [
          16.9255774,
          49.7460811
        ],
        [
          16.9255475,
          49.746047
        ],
        [
          16.925624,
          49.746019
        ],
        [
          16.9257034,
          49.7459899
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306073",
  "properties": {
    "building": "yes",
    "source:start_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "start_date": "1937",
    "id": "way/198306073"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9254304,
          49.7461399
        ],
        [
          16.9255196,
          49.7462223
        ],
        [
          16.9254726,
          49.7462424
        ],
        [
          16.925386,
          49.7461608
        ],
        [
          16.9254304,
          49.7461399
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306074",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "III",
    "addr:housenumber": "III",
    "building": "house",
    "source:start_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "start_date": "1920",
    "id": "way/198306074"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9259474,
          49.7462298
        ],
        [
          16.9258011,
          49.7462955
        ],
        [
          16.925653,
          49.7463645
        ],
        [
          16.9255902,
          49.7463026
        ],
        [
          16.9257368,
          49.7462357
        ],
        [
          16.9258091,
          49.7462033
        ],
        [
          16.9257903,
          49.7461857
        ],
        [
          16.9258324,
          49.7461669
        ],
        [
          16.9258532,
          49.7461862
        ],
        [
          16.9258852,
          49.7461719
        ],
        [
          16.9259474,
          49.7462298
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306075",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "IIIc",
    "addr:housenumber": "IIIc",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306075"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9260617,
          49.7461759
        ],
        [
          16.9259474,
          49.7462298
        ],
        [
          16.9258852,
          49.7461719
        ],
        [
          16.9259987,
          49.7461193
        ],
        [
          16.9260617,
          49.7461759
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306076",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "IVa",
    "addr:housenumber": "IVa",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306076"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.92619,
          49.746069
        ],
        [
          16.9262263,
          49.7461022
        ],
        [
          16.9260617,
          49.7461759
        ],
        [
          16.9259987,
          49.7461193
        ],
        [
          16.9260996,
          49.7460736
        ],
        [
          16.9261262,
          49.746098
        ],
        [
          16.92619,
          49.746069
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306077",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "IVb",
    "addr:housenumber": "IVb",
    "building": "house",
    "source:shape": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "source:start_date": "https://iispp.npu.cz/mis_public/documentDetail.htm?id=1140995",
    "start_date": "1856",
    "wikidata": "Q37466450",
    "id": "way/198306077"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9261429,
          49.7458442
        ],
        [
          16.9263195,
          49.7460578
        ],
        [
          16.9262263,
          49.7461022
        ],
        [
          16.92619,
          49.746069
        ],
        [
          16.9261426,
          49.7460131
        ],
        [
          16.9261655,
          49.7460045
        ],
        [
          16.926098,
          49.7459299
        ],
        [
          16.9259962,
          49.7459683
        ],
        [
          16.9260484,
          49.7460261
        ],
        [
          16.9260177,
          49.7460386
        ],
        [
          16.9259357,
          49.7460676
        ],
        [
          16.9259009,
          49.7460279
        ],
        [
          16.9258371,
          49.7459552
        ],
        [
          16.9259967,
          49.7458902
        ],
        [
          16.9261429,
          49.7458442
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306078",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "Vb",
    "addr:housenumber": "Vb",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306078"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9261074,
          49.7457971
        ],
        [
          16.9261429,
          49.7458442
        ],
        [
          16.9259967,
          49.7458902
        ],
        [
          16.9259904,
          49.7458818
        ],
        [
          16.9258759,
          49.7459232
        ],
        [
          16.9258601,
          49.7459052
        ],
        [
          16.9259667,
          49.7458504
        ],
        [
          16.9261074,
          49.7457971
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306079",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306079"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9260922,
          49.7457769
        ],
        [
          16.9261074,
          49.7457971
        ],
        [
          16.9259667,
          49.7458504
        ],
        [
          16.9259535,
          49.7458329
        ],
        [
          16.9260922,
          49.7457769
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306080",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "Vc",
    "addr:housenumber": "Vc",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306080"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9260409,
          49.7457088
        ],
        [
          16.9260922,
          49.7457769
        ],
        [
          16.9259535,
          49.7458329
        ],
        [
          16.9257998,
          49.7458932
        ],
        [
          16.9257721,
          49.745864
        ],
        [
          16.9258428,
          49.745836
        ],
        [
          16.9258571,
          49.745851
        ],
        [
          16.9259413,
          49.7458167
        ],
        [
          16.9259012,
          49.7457634
        ],
        [
          16.9260409,
          49.7457088
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306081",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "Vd",
    "addr:housenumber": "Vd",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306081"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9259986,
          49.7456527
        ],
        [
          16.9260409,
          49.7457088
        ],
        [
          16.9259012,
          49.7457634
        ],
        [
          16.9258524,
          49.7456987
        ],
        [
          16.9258981,
          49.7456853
        ],
        [
          16.9259986,
          49.7456527
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306082",
  "properties": {
    "building": "yes",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306082"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9255849,
          49.7456238
        ],
        [
          16.9256037,
          49.7456466
        ],
        [
          16.9256289,
          49.7456784
        ],
        [
          16.9254897,
          49.7457261
        ],
        [
          16.9254451,
          49.7456712
        ],
        [
          16.9255849,
          49.7456238
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306083",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "VI",
    "addr:housenumber": "VI",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306083"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9259398,
          49.7455546
        ],
        [
          16.9260095,
          49.7456438
        ],
        [
          16.9259986,
          49.7456527
        ],
        [
          16.9258981,
          49.7456853
        ],
        [
          16.9258279,
          49.7456028
        ],
        [
          16.9258201,
          49.7455942
        ],
        [
          16.9259398,
          49.7455546
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306084",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306084"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9258147,
          49.7455078
        ],
        [
          16.9258844,
          49.7454847
        ],
        [
          16.9259398,
          49.7455546
        ],
        [
          16.9258201,
          49.7455942
        ],
        [
          16.9258279,
          49.7456028
        ],
        [
          16.9257774,
          49.7456224
        ],
        [
          16.9257557,
          49.7455962
        ],
        [
          16.925721,
          49.7456077
        ],
        [
          16.9257081,
          49.7455866
        ],
        [
          16.925779,
          49.7455568
        ],
        [
          16.9258381,
          49.7455372
        ],
        [
          16.9258147,
          49.7455078
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306085",
  "properties": {
    "building": "yes",
    "material": "brick",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306085"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9255209,
          49.7454712
        ],
        [
          16.9255427,
          49.7455022
        ],
        [
          16.9254194,
          49.7455385
        ],
        [
          16.9254013,
          49.7455127
        ],
        [
          16.9254424,
          49.7455007
        ],
        [
          16.9254237,
          49.7454742
        ],
        [
          16.9254674,
          49.7454613
        ],
        [
          16.9254824,
          49.7454825
        ],
        [
          16.9255209,
          49.7454712
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306086",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306086"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9257189,
          49.7452658
        ],
        [
          16.9258359,
          49.7454128
        ],
        [
          16.9257308,
          49.7454477
        ],
        [
          16.9256747,
          49.7453772
        ],
        [
          16.9256342,
          49.7453909
        ],
        [
          16.9256014,
          49.7453508
        ],
        [
          16.9256425,
          49.7453367
        ],
        [
          16.9256138,
          49.7453007
        ],
        [
          16.9257189,
          49.7452658
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306087",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306087"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9256202,
          49.7451275
        ],
        [
          16.9256815,
          49.7451942
        ],
        [
          16.9255829,
          49.745232
        ],
        [
          16.9255582,
          49.7452415
        ],
        [
          16.9255445,
          49.7452266
        ],
        [
          16.9254969,
          49.7451747
        ],
        [
          16.9256202,
          49.7451275
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306088",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306088"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9255769,
          49.7450503
        ],
        [
          16.9256202,
          49.7451275
        ],
        [
          16.9254969,
          49.7451747
        ],
        [
          16.9254765,
          49.745183
        ],
        [
          16.9254437,
          49.7451488
        ],
        [
          16.9253971,
          49.7451674
        ],
        [
          16.92541,
          49.7451809
        ],
        [
          16.9253605,
          49.7452007
        ],
        [
          16.9253452,
          49.7451847
        ],
        [
          16.9252896,
          49.7452069
        ],
        [
          16.9252623,
          49.7451784
        ],
        [
          16.9254163,
          49.7451168
        ],
        [
          16.9254523,
          49.7451016
        ],
        [
          16.9255769,
          49.7450503
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306090",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "XIb",
    "addr:housenumber": "XIb",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306090"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9252302,
          49.7449929
        ],
        [
          16.9252619,
          49.7450353
        ],
        [
          16.9252039,
          49.7450527
        ],
        [
          16.925224,
          49.7450805
        ],
        [
          16.9251115,
          49.7451144
        ],
        [
          16.9250863,
          49.7450795
        ],
        [
          16.9250607,
          49.745044
        ],
        [
          16.9252302,
          49.7449929
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306091",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "XIa",
    "addr:housenumber": "XIa",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306091"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9254843,
          49.7449164
        ],
        [
          16.9255327,
          49.7449834
        ],
        [
          16.9252795,
          49.7450597
        ],
        [
          16.9252619,
          49.7450353
        ],
        [
          16.9252302,
          49.7449929
        ],
        [
          16.9254843,
          49.7449164
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306092",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "61",
    "addr:housenumber": "61",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306092"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9270287,
          49.7457882
        ],
        [
          16.9269485,
          49.7457056
        ],
        [
          16.9269592,
          49.7457013
        ],
        [
          16.9269049,
          49.7456453
        ],
        [
          16.9270086,
          49.7456032
        ],
        [
          16.9270618,
          49.7456579
        ],
        [
          16.9270477,
          49.7456636
        ],
        [
          16.9271292,
          49.7457475
        ],
        [
          16.9270287,
          49.7457882
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306093",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "XXIa",
    "addr:housenumber": "XXIa",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306093"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9263036,
          49.7458996
        ],
        [
          16.9264399,
          49.7458444
        ],
        [
          16.926465,
          49.7458727
        ],
        [
          16.9265556,
          49.7458394
        ],
        [
          16.926636,
          49.7459403
        ],
        [
          16.9264361,
          49.7460342
        ],
        [
          16.9263499,
          49.74596
        ],
        [
          16.9263036,
          49.7458996
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306094",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "XXIb",
    "addr:housenumber": "XXIb",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306094"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9264518,
          49.7457258
        ],
        [
          16.9264871,
          49.7457623
        ],
        [
          16.9264245,
          49.7457877
        ],
        [
          16.9264453,
          49.7458092
        ],
        [
          16.9264169,
          49.7458207
        ],
        [
          16.9264399,
          49.7458444
        ],
        [
          16.9263036,
          49.7458996
        ],
        [
          16.926235,
          49.7458156
        ],
        [
          16.9264518,
          49.7457258
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306095",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "60",
    "addr:housenumber": "60",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306095"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9266433,
          49.7457084
        ],
        [
          16.9268102,
          49.7458832
        ],
        [
          16.9266807,
          49.7459423
        ],
        [
          16.9266311,
          49.745886
        ],
        [
          16.9266742,
          49.7458665
        ],
        [
          16.9265899,
          49.7457809
        ],
        [
          16.9265517,
          49.7457446
        ],
        [
          16.9266433,
          49.7457084
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306096",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306096"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9266728,
          49.7455263
        ],
        [
          16.9267227,
          49.7455705
        ],
        [
          16.9265522,
          49.7456278
        ],
        [
          16.9266058,
          49.7456706
        ],
        [
          16.9266433,
          49.7457084
        ],
        [
          16.9265517,
          49.7457446
        ],
        [
          16.9264203,
          49.7456089
        ],
        [
          16.9266728,
          49.7455263
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306097",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306097"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9268153,
          49.7453303
        ],
        [
          16.9268651,
          49.7453841
        ],
        [
          16.9268223,
          49.745395
        ],
        [
          16.9267752,
          49.7453455
        ],
        [
          16.9268153,
          49.7453303
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306098",
  "properties": {
    "building": "yes",
    "material": "wood",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306098"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9267707,
          49.7452606
        ],
        [
          16.9268153,
          49.7453303
        ],
        [
          16.9267752,
          49.7453455
        ],
        [
          16.9267367,
          49.7453588
        ],
        [
          16.9267148,
          49.7453663
        ],
        [
          16.9265726,
          49.7452088
        ],
        [
          16.926698,
          49.7451752
        ],
        [
          16.9267707,
          49.7452606
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306099",
  "properties": {
    "building": "yes",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306099"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9268526,
          49.7454716
        ],
        [
          16.9269108,
          49.745535
        ],
        [
          16.9268468,
          49.7455595
        ],
        [
          16.9267886,
          49.745496
        ],
        [
          16.9268245,
          49.7454823
        ],
        [
          16.9268526,
          49.7454716
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306100",
  "properties": {
    "building": "yes",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306100"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9270356,
          49.7455225
        ],
        [
          16.9270687,
          49.745553
        ],
        [
          16.9270173,
          49.7455763
        ],
        [
          16.9269842,
          49.7455458
        ],
        [
          16.9270356,
          49.7455225
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306101",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306101"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9272776,
          49.7455952
        ],
        [
          16.927334,
          49.7456526
        ],
        [
          16.9272394,
          49.7456914
        ],
        [
          16.9271814,
          49.7456323
        ],
        [
          16.9271542,
          49.7456046
        ],
        [
          16.9271896,
          49.7455901
        ],
        [
          16.9272488,
          49.7455658
        ],
        [
          16.9272776,
          49.7455952
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306102",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306102"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.927492,
          49.7455058
        ],
        [
          16.9275416,
          49.7455569
        ],
        [
          16.927467,
          49.745591
        ],
        [
          16.927334,
          49.7456526
        ],
        [
          16.9272776,
          49.7455952
        ],
        [
          16.9274153,
          49.7455378
        ],
        [
          16.927492,
          49.7455058
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306103",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306103"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9275145,
          49.745366
        ],
        [
          16.9273621,
          49.7454294
        ],
        [
          16.9273291,
          49.7454431
        ],
        [
          16.9272893,
          49.7453985
        ],
        [
          16.9274713,
          49.7453227
        ],
        [
          16.9275145,
          49.745366
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306104",
  "properties": {
    "building": "yes",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306104"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9273611,
          49.7452373
        ],
        [
          16.9273876,
          49.7452618
        ],
        [
          16.9272069,
          49.7453352
        ],
        [
          16.9271763,
          49.7453037
        ],
        [
          16.9273611,
          49.7452373
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306105",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306105"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.92775,
          49.745282
        ],
        [
          16.9278619,
          49.7454014
        ],
        [
          16.9275416,
          49.7455569
        ],
        [
          16.927492,
          49.7455058
        ],
        [
          16.9275574,
          49.7454819
        ],
        [
          16.927581,
          49.745505
        ],
        [
          16.9276883,
          49.7454567
        ],
        [
          16.9276153,
          49.7453816
        ],
        [
          16.9273989,
          49.7454685
        ],
        [
          16.9272315,
          49.7455357
        ],
        [
          16.9271904,
          49.7455009
        ],
        [
          16.9273291,
          49.7454431
        ],
        [
          16.9273621,
          49.7454294
        ],
        [
          16.9275145,
          49.745366
        ],
        [
          16.9276074,
          49.745337
        ],
        [
          16.92775,
          49.745282
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306106",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "63",
    "addr:housenumber": "63",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306106"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9276501,
          49.7451486
        ],
        [
          16.92775,
          49.745282
        ],
        [
          16.9276074,
          49.745337
        ],
        [
          16.9275128,
          49.7451962
        ],
        [
          16.9276501,
          49.7451486
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306107",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306107"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9259792,
          49.7453848
        ],
        [
          16.9260148,
          49.7454347
        ],
        [
          16.9259504,
          49.7454539
        ],
        [
          16.9259147,
          49.745404
        ],
        [
          16.9259792,
          49.7453848
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306108",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306108"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9258547,
          49.74532
        ],
        [
          16.9259564,
          49.7452896
        ],
        [
          16.9260165,
          49.7453737
        ],
        [
          16.9259792,
          49.7453848
        ],
        [
          16.9259147,
          49.745404
        ],
        [
          16.9258547,
          49.74532
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306109",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306109"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9258034,
          49.7452483
        ],
        [
          16.9259134,
          49.7452155
        ],
        [
          16.9259646,
          49.7452872
        ],
        [
          16.9259564,
          49.7452896
        ],
        [
          16.9258547,
          49.74532
        ],
        [
          16.9258034,
          49.7452483
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306110",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "64",
    "addr:housenumber": "64",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306110"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9273138,
          49.7450463
        ],
        [
          16.9275416,
          49.744987
        ],
        [
          16.9276501,
          49.7451486
        ],
        [
          16.9275128,
          49.7451962
        ],
        [
          16.9273611,
          49.7452373
        ],
        [
          16.9271763,
          49.7453037
        ],
        [
          16.9270303,
          49.7453437
        ],
        [
          16.9269445,
          49.7453671
        ],
        [
          16.9268651,
          49.7453841
        ],
        [
          16.9268153,
          49.7453303
        ],
        [
          16.9267707,
          49.7452606
        ],
        [
          16.9268259,
          49.7452465
        ],
        [
          16.9268703,
          49.7453072
        ],
        [
          16.9272037,
          49.7452088
        ],
        [
          16.9273856,
          49.7451636
        ],
        [
          16.9273138,
          49.7450463
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306111",
  "properties": {
    "building": "yes",
    "material": "wood",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306111"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9269944,
          49.7451418
        ],
        [
          16.9271989,
          49.7450832
        ],
        [
          16.9272373,
          49.7450721
        ],
        [
          16.9272698,
          49.7451186
        ],
        [
          16.9270264,
          49.7451884
        ],
        [
          16.9269944,
          49.7451418
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306112",
  "properties": {
    "building": "yes",
    "material": "wood",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306112"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9269022,
          49.7451783
        ],
        [
          16.9267874,
          49.7450079
        ],
        [
          16.9268388,
          49.7449894
        ],
        [
          16.9270129,
          49.7449416
        ],
        [
          16.9270199,
          49.744956
        ],
        [
          16.9270393,
          49.7449853
        ],
        [
          16.926919,
          49.7450154
        ],
        [
          16.9269944,
          49.7451418
        ],
        [
          16.9269022,
          49.7451783
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306113",
  "properties": {
    "building": "yes",
    "material": "wood",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306113"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9261901,
          49.7450082
        ],
        [
          16.926243,
          49.7449987
        ],
        [
          16.9262989,
          49.7451118
        ],
        [
          16.9261517,
          49.7451483
        ],
        [
          16.9261317,
          49.745103
        ],
        [
          16.9262243,
          49.745086
        ],
        [
          16.9261901,
          49.7450082
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306114",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306114"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9260628,
          49.7451668
        ],
        [
          16.9260209,
          49.7450797
        ],
        [
          16.9260398,
          49.7450759
        ],
        [
          16.9260786,
          49.7450681
        ],
        [
          16.9261109,
          49.7450616
        ],
        [
          16.9261317,
          49.745103
        ],
        [
          16.9261517,
          49.7451483
        ],
        [
          16.9260628,
          49.7451668
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306115",
  "properties": {
    "building": "yes",
    "material": "wood",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306115"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9258736,
          49.745008
        ],
        [
          16.9259183,
          49.7450838
        ],
        [
          16.9258645,
          49.745097
        ],
        [
          16.9258198,
          49.7450212
        ],
        [
          16.9258736,
          49.745008
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306116",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "XX",
    "addr:housenumber": "XX",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306116"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9256582,
          49.7450599
        ],
        [
          16.9257538,
          49.7450344
        ],
        [
          16.925877,
          49.7452076
        ],
        [
          16.9257987,
          49.7452272
        ],
        [
          16.9256582,
          49.7450599
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306117",
  "properties": {
    "building": "yes",
    "material": "wood",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306117"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9259375,
          49.7449269
        ],
        [
          16.9259278,
          49.7449074
        ],
        [
          16.9259632,
          49.7449001
        ],
        [
          16.9259922,
          49.744894
        ],
        [
          16.9260786,
          49.7450681
        ],
        [
          16.9260398,
          49.7450759
        ],
        [
          16.926025,
          49.745046
        ],
        [
          16.9259993,
          49.7450514
        ],
        [
          16.9259717,
          49.7449957
        ],
        [
          16.9259375,
          49.7449269
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306118",
  "properties": {
    "building": "yes",
    "material": "wood",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306118"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9258406,
          49.7449475
        ],
        [
          16.9259375,
          49.7449269
        ],
        [
          16.9259717,
          49.7449957
        ],
        [
          16.9259098,
          49.7450088
        ],
        [
          16.9259019,
          49.7449934
        ],
        [
          16.9258678,
          49.7450007
        ],
        [
          16.9258406,
          49.7449475
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306119",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "XIXb",
    "addr:housenumber": "XIXb",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306119"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9257739,
          49.7449233
        ],
        [
          16.9257915,
          49.7449579
        ],
        [
          16.9258406,
          49.7449475
        ],
        [
          16.9258678,
          49.7450007
        ],
        [
          16.9258736,
          49.745008
        ],
        [
          16.9258198,
          49.7450212
        ],
        [
          16.9257538,
          49.7450344
        ],
        [
          16.9256582,
          49.7450599
        ],
        [
          16.9256051,
          49.7449582
        ],
        [
          16.9257739,
          49.7449233
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306120",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "XIXa",
    "addr:housenumber": "XIXa",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306120"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.925722,
          49.7448281
        ],
        [
          16.9257489,
          49.7448832
        ],
        [
          16.9257981,
          49.7448732
        ],
        [
          16.9258182,
          49.7449143
        ],
        [
          16.9257739,
          49.7449233
        ],
        [
          16.9256051,
          49.7449582
        ],
        [
          16.9255661,
          49.7448603
        ],
        [
          16.925722,
          49.7448281
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306121",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "XIXd",
    "addr:housenumber": "XIXd",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306121"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.925937,
          49.7448338
        ],
        [
          16.9258588,
          49.7448468
        ],
        [
          16.9258092,
          49.744855
        ],
        [
          16.9257923,
          49.7448122
        ],
        [
          16.9259201,
          49.744791
        ],
        [
          16.925937,
          49.7448338
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306122",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "XIXc",
    "addr:housenumber": "XIXc",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306122"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9259632,
          49.7449001
        ],
        [
          16.9259278,
          49.7449074
        ],
        [
          16.9258851,
          49.7449132
        ],
        [
          16.9258588,
          49.7448468
        ],
        [
          16.925937,
          49.7448338
        ],
        [
          16.9259632,
          49.7449001
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306123",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "XVIII",
    "addr:housenumber": "XVIII",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306123"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9261366,
          49.7448709
        ],
        [
          16.9261901,
          49.7450082
        ],
        [
          16.926158,
          49.7450111
        ],
        [
          16.9261669,
          49.7450548
        ],
        [
          16.9261109,
          49.7450616
        ],
        [
          16.9260316,
          49.7448879
        ],
        [
          16.9261366,
          49.7448709
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306124",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "XIXe",
    "addr:housenumber": "XIXe",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306124"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9261084,
          49.7447802
        ],
        [
          16.9261366,
          49.7448709
        ],
        [
          16.9260316,
          49.7448879
        ],
        [
          16.9259922,
          49.744894
        ],
        [
          16.9259632,
          49.7449001
        ],
        [
          16.925937,
          49.7448338
        ],
        [
          16.9259201,
          49.744791
        ],
        [
          16.9261084,
          49.7447802
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306125",
  "properties": {
    "building": "yes",
    "material": "wood",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306125"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9263528,
          49.7449222
        ],
        [
          16.9263703,
          49.7449834
        ],
        [
          16.926243,
          49.7449987
        ],
        [
          16.9262221,
          49.7449398
        ],
        [
          16.9263218,
          49.7449276
        ],
        [
          16.9263528,
          49.7449222
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306126",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "280",
    "addr:housenumber": "280",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306126"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9263204,
          49.7447686
        ],
        [
          16.9263343,
          49.7448433
        ],
        [
          16.9263001,
          49.7448465
        ],
        [
          16.9261671,
          49.7448559
        ],
        [
          16.9261483,
          49.7447786
        ],
        [
          16.9263204,
          49.7447686
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306127",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "68",
    "addr:housenumber": "68",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306127"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.926456,
          49.7447573
        ],
        [
          16.9264637,
          49.7448324
        ],
        [
          16.9264095,
          49.7448355
        ],
        [
          16.9264199,
          49.7449092
        ],
        [
          16.9263528,
          49.7449222
        ],
        [
          16.9263218,
          49.7449276
        ],
        [
          16.9263001,
          49.7448465
        ],
        [
          16.9263343,
          49.7448433
        ],
        [
          16.9263204,
          49.7447686
        ],
        [
          16.926456,
          49.7447573
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306128",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306128"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9267078,
          49.7447388
        ],
        [
          16.9267395,
          49.7448498
        ],
        [
          16.9267505,
          49.7448836
        ],
        [
          16.9267156,
          49.7448919
        ],
        [
          16.9266607,
          49.7449051
        ],
        [
          16.9266381,
          49.744869
        ],
        [
          16.926667,
          49.7448584
        ],
        [
          16.9266539,
          49.7448126
        ],
        [
          16.9265887,
          49.7448173
        ],
        [
          16.9265757,
          49.7447493
        ],
        [
          16.9266353,
          49.7447474
        ],
        [
          16.9267078,
          49.7447388
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306129",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306129"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9268935,
          49.7447265
        ],
        [
          16.9269158,
          49.7448108
        ],
        [
          16.9269282,
          49.7448577
        ],
        [
          16.9268511,
          49.7448662
        ],
        [
          16.9268402,
          49.7448253
        ],
        [
          16.9267742,
          49.7448337
        ],
        [
          16.9268388,
          49.7449894
        ],
        [
          16.9267874,
          49.7450079
        ],
        [
          16.9267156,
          49.7448919
        ],
        [
          16.9267505,
          49.7448836
        ],
        [
          16.9267395,
          49.7448498
        ],
        [
          16.9267078,
          49.7447388
        ],
        [
          16.9268163,
          49.7447351
        ],
        [
          16.9268935,
          49.7447265
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306130",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306130"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9274348,
          49.7448273
        ],
        [
          16.9275416,
          49.744987
        ],
        [
          16.9273138,
          49.7450463
        ],
        [
          16.9272717,
          49.7450625
        ],
        [
          16.9272373,
          49.7450721
        ],
        [
          16.9271989,
          49.7450832
        ],
        [
          16.9271734,
          49.7450422
        ],
        [
          16.9272093,
          49.7450301
        ],
        [
          16.9272437,
          49.7450205
        ],
        [
          16.9273477,
          49.744987
        ],
        [
          16.9272908,
          49.7448997
        ],
        [
          16.9271171,
          49.7449362
        ],
        [
          16.9270199,
          49.744956
        ],
        [
          16.9270129,
          49.7449416
        ],
        [
          16.9269977,
          49.7449104
        ],
        [
          16.9270949,
          49.7448907
        ],
        [
          16.927193,
          49.7448732
        ],
        [
          16.9274348,
          49.7448273
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306131",
  "properties": {
    "building": "yes",
    "source:start_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "start_date": "1937",
    "id": "way/198306131"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9273513,
          49.744679
        ],
        [
          16.9274348,
          49.7448273
        ],
        [
          16.927193,
          49.7448732
        ],
        [
          16.9271539,
          49.7447813
        ],
        [
          16.9270435,
          49.744796
        ],
        [
          16.9270052,
          49.7447999
        ],
        [
          16.9269158,
          49.7448108
        ],
        [
          16.9268935,
          49.7447265
        ],
        [
          16.9270177,
          49.7447148
        ],
        [
          16.9273513,
          49.744679
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306132",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306132"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9267603,
          49.7435162
        ],
        [
          16.926735,
          49.7434478
        ],
        [
          16.9267929,
          49.7434389
        ],
        [
          16.9268427,
          49.7434311
        ],
        [
          16.9268901,
          49.7434247
        ],
        [
          16.9270704,
          49.7433984
        ],
        [
          16.9270768,
          49.7434747
        ],
        [
          16.926868,
          49.7434995
        ],
        [
          16.9267603,
          49.7435162
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306133",
  "properties": {
    "building": "yes",
    "material": "wood",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306133"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.926483,
          49.7434697
        ],
        [
          16.9265111,
          49.743543
        ],
        [
          16.926527,
          49.7435948
        ],
        [
          16.9264203,
          49.7436063
        ],
        [
          16.9263856,
          49.7434775
        ],
        [
          16.926483,
          49.7434697
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306134",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306134"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9271127,
          49.7436605
        ],
        [
          16.9269835,
          49.7436755
        ],
        [
          16.9267398,
          49.7437081
        ],
        [
          16.9267001,
          49.7435862
        ],
        [
          16.9266831,
          49.7435254
        ],
        [
          16.9266826,
          49.7435236
        ],
        [
          16.9267603,
          49.7435162
        ],
        [
          16.9267818,
          49.7435767
        ],
        [
          16.9267995,
          49.7436402
        ],
        [
          16.9269728,
          49.74362
        ],
        [
          16.926956,
          49.7435597
        ],
        [
          16.9269481,
          49.7435315
        ],
        [
          16.9270069,
          49.7435247
        ],
        [
          16.9270727,
          49.743517
        ],
        [
          16.9271127,
          49.7436605
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306135",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306135"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9269847,
          49.7437854
        ],
        [
          16.9269625,
          49.7437125
        ],
        [
          16.9269945,
          49.7437073
        ],
        [
          16.9269835,
          49.7436755
        ],
        [
          16.9271127,
          49.7436605
        ],
        [
          16.927127,
          49.7437771
        ],
        [
          16.9270221,
          49.7437874
        ],
        [
          16.9269847,
          49.7437854
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306136",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "73",
    "addr:housenumber": "73",
    "building": "house",
    "material": "brick",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306136"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9268533,
          49.7440125
        ],
        [
          16.926831,
          49.7439453
        ],
        [
          16.9270491,
          49.7439151
        ],
        [
          16.9270301,
          49.7438213
        ],
        [
          16.927135,
          49.7438109
        ],
        [
          16.9271746,
          49.7439681
        ],
        [
          16.9268533,
          49.7440125
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306137",
  "properties": {
    "building": "yes",
    "material": "wood",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306137"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9266218,
          49.7440446
        ],
        [
          16.9265784,
          49.743907
        ],
        [
          16.9267496,
          49.7438845
        ],
        [
          16.926793,
          49.744022
        ],
        [
          16.9266218,
          49.7440446
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306138",
  "properties": {
    "building": "yes",
    "material": "wood",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306138"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9259536,
          49.7442335
        ],
        [
          16.9259271,
          49.7441642
        ],
        [
          16.926145,
          49.7441295
        ],
        [
          16.9261714,
          49.7441987
        ],
        [
          16.9259536,
          49.7442335
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306139",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306139"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9267418,
          49.7442818
        ],
        [
          16.9267159,
          49.7442422
        ],
        [
          16.9268722,
          49.7441996
        ],
        [
          16.9269211,
          49.7442691
        ],
        [
          16.926869,
          49.7442834
        ],
        [
          16.9269793,
          49.7444483
        ],
        [
          16.926938,
          49.74446
        ],
        [
          16.9268702,
          49.7444785
        ],
        [
          16.9268138,
          49.7443922
        ],
        [
          16.9267884,
          49.7443532
        ],
        [
          16.9267618,
          49.7443126
        ],
        [
          16.9267418,
          49.7442818
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306140",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306140"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9272546,
          49.7441254
        ],
        [
          16.9273095,
          49.7442218
        ],
        [
          16.9273614,
          49.7443092
        ],
        [
          16.9273213,
          49.744319
        ],
        [
          16.9272992,
          49.7442812
        ],
        [
          16.9272606,
          49.7442906
        ],
        [
          16.9272312,
          49.7442404
        ],
        [
          16.9271733,
          49.7442542
        ],
        [
          16.9272151,
          49.7443256
        ],
        [
          16.9270868,
          49.7443544
        ],
        [
          16.9270409,
          49.7442855
        ],
        [
          16.9270133,
          49.744244
        ],
        [
          16.9269782,
          49.7441912
        ],
        [
          16.9272546,
          49.7441254
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306141",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "72",
    "addr:housenumber": "72",
    "building": "house",
    "material": "brick",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306141"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9273041,
          49.7446376
        ],
        [
          16.9272592,
          49.7445803
        ],
        [
          16.9273557,
          49.7445578
        ],
        [
          16.9273111,
          49.7444726
        ],
        [
          16.9273024,
          49.7444561
        ],
        [
          16.927434,
          49.7444205
        ],
        [
          16.9275513,
          49.7446204
        ],
        [
          16.9274073,
          49.7446497
        ],
        [
          16.9273913,
          49.7446164
        ],
        [
          16.9273041,
          49.7446376
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306142",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306142"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9269877,
          49.7446523
        ],
        [
          16.926936,
          49.744566
        ],
        [
          16.9269172,
          49.7445348
        ],
        [
          16.9271137,
          49.7444856
        ],
        [
          16.9271628,
          49.7445674
        ],
        [
          16.9272357,
          49.7445503
        ],
        [
          16.9272592,
          49.7445803
        ],
        [
          16.9273041,
          49.7446376
        ],
        [
          16.9272064,
          49.7446344
        ],
        [
          16.9269952,
          49.7446678
        ],
        [
          16.9269877,
          49.7446523
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306143",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306143"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9266613,
          49.7446744
        ],
        [
          16.9266022,
          49.7445728
        ],
        [
          16.9265089,
          49.7444164
        ],
        [
          16.9264696,
          49.7443409
        ],
        [
          16.9267418,
          49.7442818
        ],
        [
          16.9267618,
          49.7443126
        ],
        [
          16.9267884,
          49.7443532
        ],
        [
          16.9268138,
          49.7443922
        ],
        [
          16.9267278,
          49.7444038
        ],
        [
          16.9267082,
          49.7443747
        ],
        [
          16.9265708,
          49.744403
        ],
        [
          16.9266862,
          49.7445888
        ],
        [
          16.9268434,
          49.7445753
        ],
        [
          16.926936,
          49.744566
        ],
        [
          16.9269877,
          49.7446523
        ],
        [
          16.9266613,
          49.7446744
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306144",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "69",
    "addr:housenumber": "69",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306144"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.926254,
          49.7447049
        ],
        [
          16.9261366,
          49.7444986
        ],
        [
          16.9262042,
          49.7444785
        ],
        [
          16.9263029,
          49.7446376
        ],
        [
          16.9264007,
          49.7446187
        ],
        [
          16.9264016,
          49.7445773
        ],
        [
          16.9264719,
          49.7445727
        ],
        [
          16.9264825,
          49.7446055
        ],
        [
          16.9265039,
          49.744602
        ],
        [
          16.926535,
          49.7446871
        ],
        [
          16.926254,
          49.7447049
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306145",
  "properties": {
    "building": "yes",
    "material": "wood",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306145"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9257035,
          49.7444492
        ],
        [
          16.9257278,
          49.7445095
        ],
        [
          16.9257546,
          49.7445889
        ],
        [
          16.9256974,
          49.7445946
        ],
        [
          16.9256447,
          49.7444563
        ],
        [
          16.9257035,
          49.7444492
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306146",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306146"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9257035,
          49.7444492
        ],
        [
          16.9257526,
          49.7444433
        ],
        [
          16.9257731,
          49.7445031
        ],
        [
          16.925814,
          49.7444973
        ],
        [
          16.9258318,
          49.7445502
        ],
        [
          16.9257922,
          49.7445558
        ],
        [
          16.9258011,
          49.7445824
        ],
        [
          16.9257546,
          49.7445889
        ],
        [
          16.9257278,
          49.7445095
        ],
        [
          16.9257035,
          49.7444492
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306147",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306147"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9259362,
          49.7444938
        ],
        [
          16.9259501,
          49.7445337
        ],
        [
          16.9258318,
          49.7445502
        ],
        [
          16.925814,
          49.7444973
        ],
        [
          16.9257731,
          49.7445031
        ],
        [
          16.9257526,
          49.7444433
        ],
        [
          16.9258337,
          49.7444335
        ],
        [
          16.9259133,
          49.744424
        ],
        [
          16.9259248,
          49.7444648
        ],
        [
          16.9259362,
          49.7444938
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306148",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306148"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9260714,
          49.7444751
        ],
        [
          16.9259362,
          49.7444938
        ],
        [
          16.9259248,
          49.7444648
        ],
        [
          16.9259133,
          49.744424
        ],
        [
          16.9259823,
          49.7444158
        ],
        [
          16.9260363,
          49.7444094
        ],
        [
          16.9260714,
          49.7444751
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306149",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306149"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9259798,
          49.7446238
        ],
        [
          16.9259501,
          49.7445337
        ],
        [
          16.9259362,
          49.7444938
        ],
        [
          16.9260714,
          49.7444751
        ],
        [
          16.9261402,
          49.7445928
        ],
        [
          16.9261064,
          49.7445951
        ],
        [
          16.9261066,
          49.7446077
        ],
        [
          16.9259798,
          49.7446238
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306150",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306150"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9259798,
          49.7446238
        ],
        [
          16.9261066,
          49.7446077
        ],
        [
          16.9261295,
          49.744706
        ],
        [
          16.9260101,
          49.7447153
        ],
        [
          16.9259798,
          49.7446238
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306151",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "XVIIb",
    "addr:housenumber": "XVIIb",
    "building": "house",
    "material": "brick",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306151"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9258617,
          49.7446376
        ],
        [
          16.9258318,
          49.7445502
        ],
        [
          16.9259501,
          49.7445337
        ],
        [
          16.9259798,
          49.7446238
        ],
        [
          16.9258617,
          49.7446376
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306152",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306152"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.925892,
          49.7447264
        ],
        [
          16.9258617,
          49.7446376
        ],
        [
          16.9259798,
          49.7446238
        ],
        [
          16.9260101,
          49.7447153
        ],
        [
          16.925892,
          49.7447264
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306153",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306153"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9257058,
          49.7447199
        ],
        [
          16.9256982,
          49.7446824
        ],
        [
          16.925749,
          49.7446781
        ],
        [
          16.9257376,
          49.7446216
        ],
        [
          16.9258003,
          49.7446163
        ],
        [
          16.9258235,
          49.7447314
        ],
        [
          16.92571,
          49.744741
        ],
        [
          16.9257058,
          49.7447199
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306154",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "XVI",
    "addr:housenumber": "XVI",
    "building": "house",
    "material": "brick",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306154"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9255974,
          49.7446353
        ],
        [
          16.9256872,
          49.7446278
        ],
        [
          16.9256982,
          49.7446824
        ],
        [
          16.9257058,
          49.7447199
        ],
        [
          16.9254974,
          49.7447362
        ],
        [
          16.9254674,
          49.7446463
        ],
        [
          16.9255974,
          49.7446353
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306155",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "XV",
    "addr:housenumber": "XV",
    "building": "house",
    "material": "brick",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306155"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9254882,
          49.7444753
        ],
        [
          16.9255288,
          49.7444704
        ],
        [
          16.9255974,
          49.7446353
        ],
        [
          16.9254674,
          49.7446463
        ],
        [
          16.9254048,
          49.7444854
        ],
        [
          16.9254882,
          49.7444753
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306156",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306156"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9254316,
          49.7443516
        ],
        [
          16.9255674,
          49.7443286
        ],
        [
          16.9255978,
          49.744417
        ],
        [
          16.9256992,
          49.7444044
        ],
        [
          16.9256658,
          49.7443191
        ],
        [
          16.9257891,
          49.7442995
        ],
        [
          16.9258337,
          49.7444335
        ],
        [
          16.9257526,
          49.7444433
        ],
        [
          16.9257035,
          49.7444492
        ],
        [
          16.9256447,
          49.7444563
        ],
        [
          16.9255288,
          49.7444704
        ],
        [
          16.9254882,
          49.7444753
        ],
        [
          16.9254316,
          49.7443516
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306157",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306157"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9255179,
          49.7442065
        ],
        [
          16.9255674,
          49.7443286
        ],
        [
          16.9254316,
          49.7443516
        ],
        [
          16.9253821,
          49.7442295
        ],
        [
          16.9255179,
          49.7442065
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306158",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306158"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9254642,
          49.744074
        ],
        [
          16.9255179,
          49.7442065
        ],
        [
          16.9253821,
          49.7442295
        ],
        [
          16.9253283,
          49.744097
        ],
        [
          16.9254642,
          49.744074
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306159",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306159"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9253283,
          49.744097
        ],
        [
          16.9252715,
          49.7439568
        ],
        [
          16.9254093,
          49.7439341
        ],
        [
          16.925436,
          49.7440085
        ],
        [
          16.9254642,
          49.744074
        ],
        [
          16.9253283,
          49.744097
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306160",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "346",
    "addr:housenumber": "346",
    "building": "house",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1880",
    "id": "way/198306160"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9241382,
          49.744795
        ],
        [
          16.9241158,
          49.7447039
        ],
        [
          16.92421,
          49.7446942
        ],
        [
          16.924204,
          49.7446699
        ],
        [
          16.9242612,
          49.744664
        ],
        [
          16.9242506,
          49.7446213
        ],
        [
          16.9243247,
          49.7446137
        ],
        [
          16.9243346,
          49.7446536
        ],
        [
          16.9243585,
          49.7447508
        ],
        [
          16.9242537,
          49.7447616
        ],
        [
          16.9242589,
          49.7447826
        ],
        [
          16.9241382,
          49.744795
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306161",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "347",
    "addr:housenumber": "347",
    "building": "house",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1880",
    "id": "way/198306161"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9244703,
          49.7446388
        ],
        [
          16.9244961,
          49.7447468
        ],
        [
          16.9243858,
          49.7447595
        ],
        [
          16.9243585,
          49.7447508
        ],
        [
          16.9243346,
          49.7446536
        ],
        [
          16.9244703,
          49.7446388
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306162",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "341",
    "addr:housenumber": "341",
    "building": "house",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1880",
    "id": "way/198306162"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9246313,
          49.7447623
        ],
        [
          16.9246115,
          49.7446837
        ],
        [
          16.9248317,
          49.7446606
        ],
        [
          16.9248363,
          49.7446792
        ],
        [
          16.9248718,
          49.7446755
        ],
        [
          16.9248798,
          49.7447073
        ],
        [
          16.9248433,
          49.7447111
        ],
        [
          16.9248504,
          49.7447392
        ],
        [
          16.9246313,
          49.7447623
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306163",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "XIIIa",
    "addr:housenumber": "XIIIa",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306163"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9253202,
          49.7445995
        ],
        [
          16.925343,
          49.7445965
        ],
        [
          16.9253728,
          49.7446888
        ],
        [
          16.9251821,
          49.7447145
        ],
        [
          16.9251523,
          49.7446222
        ],
        [
          16.9253202,
          49.7445995
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306164",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "XIIIb",
    "addr:housenumber": "XIIIb",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306164"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9253022,
          49.7445439
        ],
        [
          16.9253202,
          49.7445995
        ],
        [
          16.9251523,
          49.7446222
        ],
        [
          16.9251343,
          49.7445666
        ],
        [
          16.9253022,
          49.7445439
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306165",
  "properties": {
    "building": "yes",
    "source:start_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "start_date": "1937",
    "id": "way/198306165"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9253128,
          49.7445425
        ],
        [
          16.9253022,
          49.7445439
        ],
        [
          16.9251343,
          49.7445666
        ],
        [
          16.925114,
          49.7445036
        ],
        [
          16.9250962,
          49.7444486
        ],
        [
          16.9252747,
          49.7444246
        ],
        [
          16.9252928,
          49.7444805
        ],
        [
          16.9253128,
          49.7445425
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306166",
  "properties": {
    "building": "yes",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306166"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9252758,
          49.7443123
        ],
        [
          16.9252982,
          49.7443609
        ],
        [
          16.925168,
          49.7443869
        ],
        [
          16.9251441,
          49.7443371
        ],
        [
          16.9252758,
          49.7443123
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306167",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "XIV",
    "addr:housenumber": "XIV",
    "amenity": "place_of_worship",
    "building": "synagogue",
    "religion": "jewish",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "wikidata": "Q17335204",
    "id": "way/198306167"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9250509,
          49.7443545
        ],
        [
          16.9249904,
          49.7442198
        ],
        [
          16.9252152,
          49.7441776
        ],
        [
          16.9252758,
          49.7443123
        ],
        [
          16.9251441,
          49.7443371
        ],
        [
          16.9250509,
          49.7443545
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306172",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306172"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9320799,
          49.7466093
        ],
        [
          16.9320044,
          49.7465365
        ],
        [
          16.9319474,
          49.7465612
        ],
        [
          16.9318814,
          49.7464975
        ],
        [
          16.9320044,
          49.7464442
        ],
        [
          16.932146,
          49.7465807
        ],
        [
          16.9321052,
          49.7465983
        ],
        [
          16.9320799,
          49.7466093
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306173",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306173"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9318737,
          49.7468129
        ],
        [
          16.9319638,
          49.7469744
        ],
        [
          16.9318849,
          49.7469928
        ],
        [
          16.9317948,
          49.7468313
        ],
        [
          16.9318737,
          49.7468129
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306174",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306174"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9320478,
          49.7466217
        ],
        [
          16.9320761,
          49.7466469
        ],
        [
          16.9320196,
          49.7466734
        ],
        [
          16.9320556,
          49.7467055
        ],
        [
          16.9321668,
          49.7466534
        ],
        [
          16.9321052,
          49.7465983
        ],
        [
          16.932146,
          49.7465807
        ],
        [
          16.9321703,
          49.7465714
        ],
        [
          16.9322667,
          49.7466573
        ],
        [
          16.9322236,
          49.7466783
        ],
        [
          16.9319828,
          49.7467956
        ],
        [
          16.9319007,
          49.7466867
        ],
        [
          16.9320478,
          49.7466217
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306175",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306175"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9318299,
          49.7466104
        ],
        [
          16.9319154,
          49.7465734
        ],
        [
          16.9319459,
          49.7466027
        ],
        [
          16.9319976,
          49.7465803
        ],
        [
          16.9320478,
          49.7466217
        ],
        [
          16.9319007,
          49.7466867
        ],
        [
          16.9318299,
          49.7466104
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306176",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306176"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9316975,
          49.7466149
        ],
        [
          16.9318204,
          49.7467273
        ],
        [
          16.9317751,
          49.7467479
        ],
        [
          16.9317118,
          49.7466901
        ],
        [
          16.9316363,
          49.7467246
        ],
        [
          16.9315767,
          49.7466701
        ],
        [
          16.9316441,
          49.7466393
        ],
        [
          16.9316975,
          49.7466149
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306177",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306177"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9316304,
          49.7465345
        ],
        [
          16.9316975,
          49.7466149
        ],
        [
          16.9316441,
          49.7466393
        ],
        [
          16.9316071,
          49.7465977
        ],
        [
          16.9315864,
          49.7466052
        ],
        [
          16.9315502,
          49.7465635
        ],
        [
          16.9316304,
          49.7465345
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306178",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306178"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9314364,
          49.7464391
        ],
        [
          16.9315047,
          49.7465157
        ],
        [
          16.9315305,
          49.7465447
        ],
        [
          16.9313599,
          49.7466082
        ],
        [
          16.9312712,
          49.7465561
        ],
        [
          16.9313293,
          49.7465152
        ],
        [
          16.9314108,
          49.746491
        ],
        [
          16.9313825,
          49.7464592
        ],
        [
          16.9314364,
          49.7464391
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306179",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306179"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9314724,
          49.7463649
        ],
        [
          16.9315814,
          49.7464871
        ],
        [
          16.9315047,
          49.7465157
        ],
        [
          16.9314364,
          49.7464391
        ],
        [
          16.9313957,
          49.7463935
        ],
        [
          16.9314724,
          49.7463649
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306180",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306180"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9316699,
          49.7464065
        ],
        [
          16.93174,
          49.7463844
        ],
        [
          16.9317606,
          49.7464117
        ],
        [
          16.931842,
          49.746386
        ],
        [
          16.9318126,
          49.7463471
        ],
        [
          16.931871,
          49.7463287
        ],
        [
          16.9319415,
          49.7464223
        ],
        [
          16.9317317,
          49.7464884
        ],
        [
          16.9316699,
          49.7464065
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306181",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306181"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9314265,
          49.7461651
        ],
        [
          16.9315513,
          49.7461093
        ],
        [
          16.9317278,
          49.7462741
        ],
        [
          16.9316029,
          49.7463299
        ],
        [
          16.9314265,
          49.7461651
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306182",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306182"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9312749,
          49.7463541
        ],
        [
          16.9313504,
          49.7463988
        ],
        [
          16.931251,
          49.7464688
        ],
        [
          16.9313293,
          49.7465152
        ],
        [
          16.9312712,
          49.7465561
        ],
        [
          16.9311175,
          49.7464649
        ],
        [
          16.9312749,
          49.7463541
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306183",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306183"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9313949,
          49.7467361
        ],
        [
          16.9314943,
          49.7468166
        ],
        [
          16.9311445,
          49.7469969
        ],
        [
          16.9310451,
          49.7469163
        ],
        [
          16.9313949,
          49.7467361
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306184",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306184"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9313159,
          49.745625
        ],
        [
          16.9313844,
          49.7456967
        ],
        [
          16.9312655,
          49.7457441
        ],
        [
          16.9312887,
          49.7457684
        ],
        [
          16.9311905,
          49.7458076
        ],
        [
          16.93117,
          49.7457861
        ],
        [
          16.9311012,
          49.7458136
        ],
        [
          16.9310299,
          49.745739
        ],
        [
          16.9313159,
          49.745625
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306185",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306185"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9315008,
          49.7457622
        ],
        [
          16.9315868,
          49.7457256
        ],
        [
          16.9318113,
          49.7459455
        ],
        [
          16.9317071,
          49.7459899
        ],
        [
          16.9316722,
          49.7459557
        ],
        [
          16.931593,
          49.7458782
        ],
        [
          16.9316113,
          49.7458704
        ],
        [
          16.9315008,
          49.7457622
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306186",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306186"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9291076,
          49.7449852
        ],
        [
          16.9293148,
          49.7449192
        ],
        [
          16.9293778,
          49.7449066
        ],
        [
          16.9294379,
          49.7449124
        ],
        [
          16.9294692,
          49.7449311
        ],
        [
          16.929519,
          49.7449809
        ],
        [
          16.9295906,
          49.7450525
        ],
        [
          16.9296482,
          49.7451087
        ],
        [
          16.9295846,
          49.7451381
        ],
        [
          16.9295255,
          49.7450797
        ],
        [
          16.9293986,
          49.7449495
        ],
        [
          16.9292727,
          49.7449823
        ],
        [
          16.9292577,
          49.7450366
        ],
        [
          16.9293921,
          49.7451375
        ],
        [
          16.9294439,
          49.7451763
        ],
        [
          16.9293853,
          49.7452132
        ],
        [
          16.9291346,
          49.7450182
        ],
        [
          16.9291076,
          49.7449852
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306187",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306187"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9296482,
          49.7451087
        ],
        [
          16.9297213,
          49.7451745
        ],
        [
          16.9297803,
          49.745224
        ],
        [
          16.9298039,
          49.7452439
        ],
        [
          16.9297188,
          49.7452862
        ],
        [
          16.9296634,
          49.7453161
        ],
        [
          16.9295945,
          49.7453556
        ],
        [
          16.9294215,
          49.7452297
        ],
        [
          16.9294904,
          49.7451902
        ],
        [
          16.9295218,
          49.7451761
        ],
        [
          16.9295609,
          49.7452066
        ],
        [
          16.9295333,
          49.7452214
        ],
        [
          16.9295995,
          49.7452695
        ],
        [
          16.9296625,
          49.7452359
        ],
        [
          16.929601,
          49.7451878
        ],
        [
          16.9296254,
          49.745175
        ],
        [
          16.9295846,
          49.7451381
        ],
        [
          16.9296482,
          49.7451087
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306188",
  "properties": {
    "building": "yes",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306188"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9298039,
          49.7452439
        ],
        [
          16.9298699,
          49.7452925
        ],
        [
          16.9297994,
          49.7453381
        ],
        [
          16.9297188,
          49.7452862
        ],
        [
          16.9298039,
          49.7452439
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306189",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "243",
    "addr:housenumber": "243",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306189"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9296634,
          49.7453161
        ],
        [
          16.9297711,
          49.7453917
        ],
        [
          16.9297145,
          49.7454367
        ],
        [
          16.9295945,
          49.7453556
        ],
        [
          16.9296634,
          49.7453161
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306190",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "16",
    "addr:housenumber": "16",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306190"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9297992,
          49.7453694
        ],
        [
          16.9300396,
          49.7454957
        ],
        [
          16.929955,
          49.745563
        ],
        [
          16.9297145,
          49.7454367
        ],
        [
          16.9297711,
          49.7453917
        ],
        [
          16.9297992,
          49.7453694
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306191",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306191"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.930702,
          49.745175
        ],
        [
          16.9308553,
          49.7451802
        ],
        [
          16.9308531,
          49.7452563
        ],
        [
          16.9308486,
          49.7454089
        ],
        [
          16.9306803,
          49.7454862
        ],
        [
          16.9304869,
          49.745575
        ],
        [
          16.9302817,
          49.7456692
        ],
        [
          16.9302138,
          49.7456026
        ],
        [
          16.930066,
          49.7454748
        ],
        [
          16.9301944,
          49.7454129
        ],
        [
          16.9303136,
          49.745516
        ],
        [
          16.9303628,
          49.7455004
        ],
        [
          16.9303178,
          49.7454577
        ],
        [
          16.9303903,
          49.7454219
        ],
        [
          16.9303382,
          49.7453752
        ],
        [
          16.9302658,
          49.7453124
        ],
        [
          16.9303306,
          49.7452814
        ],
        [
          16.9304557,
          49.7452222
        ],
        [
          16.9305295,
          49.7452874
        ],
        [
          16.9303986,
          49.745347
        ],
        [
          16.9304508,
          49.7453937
        ],
        [
          16.9305225,
          49.7453692
        ],
        [
          16.930567,
          49.7454073
        ],
        [
          16.9306921,
          49.7453462
        ],
        [
          16.930702,
          49.745175
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306193",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "21",
    "addr:housenumber": "21",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306193"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.931211,
          49.74506
        ],
        [
          16.9312101,
          49.7451418
        ],
        [
          16.931043,
          49.7451773
        ],
        [
          16.9310609,
          49.7450599
        ],
        [
          16.931211,
          49.74506
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306194",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306194"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.931369,
          49.7449154
        ],
        [
          16.9313688,
          49.7449924
        ],
        [
          16.9312638,
          49.7449923
        ],
        [
          16.9312112,
          49.7449923
        ],
        [
          16.931211,
          49.74506
        ],
        [
          16.9310609,
          49.7450599
        ],
        [
          16.9310612,
          49.7449151
        ],
        [
          16.9312639,
          49.7449153
        ],
        [
          16.931369,
          49.7449154
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306195",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306195"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9316406,
          49.7449959
        ],
        [
          16.9316961,
          49.7450454
        ],
        [
          16.9316128,
          49.7450851
        ],
        [
          16.9315985,
          49.7450919
        ],
        [
          16.9315711,
          49.7450681
        ],
        [
          16.931534,
          49.7450357
        ],
        [
          16.9316406,
          49.7449959
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306196",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306196"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.931561,
          49.7449299
        ],
        [
          16.9316406,
          49.7449959
        ],
        [
          16.931534,
          49.7450357
        ],
        [
          16.9314709,
          49.7449716
        ],
        [
          16.931561,
          49.7449299
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306197",
  "properties": {
    "building": "yes",
    "material": "wood",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306197"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9298718,
          49.7446585
        ],
        [
          16.9299085,
          49.7446492
        ],
        [
          16.9299491,
          49.7447161
        ],
        [
          16.9299124,
          49.7447254
        ],
        [
          16.9298881,
          49.7446853
        ],
        [
          16.9298718,
          49.7446585
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306198",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306198"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.929631,
          49.7446122
        ],
        [
          16.929702,
          49.7447117
        ],
        [
          16.9296229,
          49.7447356
        ],
        [
          16.9295868,
          49.7446849
        ],
        [
          16.9295517,
          49.7446358
        ],
        [
          16.929631,
          49.7446122
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306199",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306199"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.929834,
          49.7448621
        ],
        [
          16.9298651,
          49.744906
        ],
        [
          16.9297818,
          49.7449305
        ],
        [
          16.9297569,
          49.7448998
        ],
        [
          16.9297469,
          49.7448879
        ],
        [
          16.929834,
          49.7448621
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306200",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306200"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9299377,
          49.744767
        ],
        [
          16.9299744,
          49.7447577
        ],
        [
          16.9300745,
          49.7447339
        ],
        [
          16.9301075,
          49.7448115
        ],
        [
          16.9299814,
          49.7448368
        ],
        [
          16.9299699,
          49.7448173
        ],
        [
          16.9299377,
          49.744767
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306201",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306201"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9298179,
          49.7445783
        ],
        [
          16.9298718,
          49.7446585
        ],
        [
          16.9298881,
          49.7446853
        ],
        [
          16.9299124,
          49.7447254
        ],
        [
          16.9299377,
          49.744767
        ],
        [
          16.9298534,
          49.744787
        ],
        [
          16.9298267,
          49.7447406
        ],
        [
          16.9298062,
          49.744705
        ],
        [
          16.92978,
          49.7446595
        ],
        [
          16.9297278,
          49.744672
        ],
        [
          16.929686,
          49.7445955
        ],
        [
          16.9297395,
          49.7445892
        ],
        [
          16.9298179,
          49.7445783
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306202",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "10",
    "addr:housenumber": "10",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306202"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9301008,
          49.7445461
        ],
        [
          16.9301344,
          49.7446359
        ],
        [
          16.9301505,
          49.744632
        ],
        [
          16.9301899,
          49.7446842
        ],
        [
          16.9302129,
          49.744711
        ],
        [
          16.9300745,
          49.7447339
        ],
        [
          16.930048,
          49.7446847
        ],
        [
          16.930018,
          49.7446883
        ],
        [
          16.9299634,
          49.7445626
        ],
        [
          16.9301008,
          49.7445461
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306203",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306203"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9303978,
          49.744793
        ],
        [
          16.930446,
          49.7448529
        ],
        [
          16.930339,
          49.7448888
        ],
        [
          16.9302911,
          49.7448304
        ],
        [
          16.9303978,
          49.744793
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306204",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306204"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9303935,
          49.7445436
        ],
        [
          16.9304799,
          49.7446579
        ],
        [
          16.9304257,
          49.7446751
        ],
        [
          16.9303221,
          49.7447078
        ],
        [
          16.9303131,
          49.7446958
        ],
        [
          16.9302631,
          49.7447116
        ],
        [
          16.9302323,
          49.7446708
        ],
        [
          16.9301899,
          49.7446842
        ],
        [
          16.9301505,
          49.744632
        ],
        [
          16.9301434,
          49.7446226
        ],
        [
          16.9303935,
          49.7445436
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306205",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306205"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9305069,
          49.7464687
        ],
        [
          16.9306256,
          49.7465385
        ],
        [
          16.9306991,
          49.7465065
        ],
        [
          16.9307472,
          49.7465366
        ],
        [
          16.9308643,
          49.7464997
        ],
        [
          16.9309033,
          49.7465473
        ],
        [
          16.9308102,
          49.7465861
        ],
        [
          16.9307667,
          49.7465735
        ],
        [
          16.9306271,
          49.7466453
        ],
        [
          16.9304214,
          49.7465075
        ],
        [
          16.9305069,
          49.7464687
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306206",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306206"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9306642,
          49.7463764
        ],
        [
          16.9307766,
          49.7464517
        ],
        [
          16.9307258,
          49.7464834
        ],
        [
          16.9306134,
          49.746408
        ],
        [
          16.9306642,
          49.7463764
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306207",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306207"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9305083,
          49.7463135
        ],
        [
          16.9306791,
          49.7462028
        ],
        [
          16.9307721,
          49.7462597
        ],
        [
          16.9306383,
          49.746351
        ],
        [
          16.9305976,
          49.7463261
        ],
        [
          16.9305647,
          49.7463464
        ],
        [
          16.9305083,
          49.7463135
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306208",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "37",
    "addr:housenumber": "37",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306208"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9304841,
          49.7463336
        ],
        [
          16.9305514,
          49.7463953
        ],
        [
          16.9303997,
          49.7464643
        ],
        [
          16.9303325,
          49.7464025
        ],
        [
          16.9304841,
          49.7463336
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306209",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306209"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9303261,
          49.7462193
        ],
        [
          16.9304123,
          49.7462921
        ],
        [
          16.9304093,
          49.7463358
        ],
        [
          16.9303238,
          49.7463726
        ],
        [
          16.9302922,
          49.7463474
        ],
        [
          16.9303343,
          49.7463261
        ],
        [
          16.9303156,
          49.746309
        ],
        [
          16.9302352,
          49.7463474
        ],
        [
          16.9301679,
          49.7462882
        ],
        [
          16.9302507,
          49.7462494
        ],
        [
          16.9303261,
          49.7462193
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306210",
  "properties": {
    "amenity": "place_of_worship",
    "building": "church",
    "denomination": "roman_catholic",
    "name": "kostel sv. Prokopa",
    "religion": "christian",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "wikidata": "Q12030998",
    "id": "way/198306210"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9305249,
          49.7459495
        ],
        [
          16.9305624,
          49.7459283
        ],
        [
          16.9305343,
          49.7459076
        ],
        [
          16.9306164,
          49.7458611
        ],
        [
          16.9306367,
          49.745876
        ],
        [
          16.9306746,
          49.7458546
        ],
        [
          16.9309204,
          49.7460357
        ],
        [
          16.930917,
          49.7460547
        ],
        [
          16.9309884,
          49.7461108
        ],
        [
          16.9310837,
          49.7460601
        ],
        [
          16.9311355,
          49.7461008
        ],
        [
          16.9310299,
          49.7461569
        ],
        [
          16.9310672,
          49.7461862
        ],
        [
          16.931097,
          49.7461893
        ],
        [
          16.931097,
          49.7462009
        ],
        [
          16.93107,
          49.746199
        ],
        [
          16.9310039,
          49.74623
        ],
        [
          16.9309949,
          49.7462572
        ],
        [
          16.9309784,
          49.7462514
        ],
        [
          16.9309798,
          49.7462327
        ],
        [
          16.9309512,
          49.7462102
        ],
        [
          16.9308791,
          49.7462486
        ],
        [
          16.9308203,
          49.7462024
        ],
        [
          16.9308774,
          49.746172
        ],
        [
          16.9308043,
          49.7461147
        ],
        [
          16.930763,
          49.7461249
        ],
        [
          16.9305249,
          49.7459495
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306211",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306211"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9304671,
          49.7462496
        ],
        [
          16.9304023,
          49.7461724
        ],
        [
          16.9303064,
          49.7460583
        ],
        [
          16.9304508,
          49.7460076
        ],
        [
          16.9304665,
          49.7460263
        ],
        [
          16.9305373,
          49.7460015
        ],
        [
          16.9305901,
          49.7460644
        ],
        [
          16.9305193,
          49.7460892
        ],
        [
          16.930477,
          49.7461041
        ],
        [
          16.9305043,
          49.7461366
        ],
        [
          16.9305356,
          49.7461738
        ],
        [
          16.9306408,
          49.7461369
        ],
        [
          16.9306744,
          49.7461769
        ],
        [
          16.9304671,
          49.7462496
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306212",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306212"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9299501,
          49.7465639
        ],
        [
          16.9298158,
          49.7466283
        ],
        [
          16.9297667,
          49.7465855
        ],
        [
          16.9297903,
          49.7465742
        ],
        [
          16.929771,
          49.7465573
        ],
        [
          16.9298243,
          49.7465318
        ],
        [
          16.9298413,
          49.7465466
        ],
        [
          16.9298561,
          49.7465395
        ],
        [
          16.9298799,
          49.7465601
        ],
        [
          16.9299223,
          49.7465398
        ],
        [
          16.9299501,
          49.7465639
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306213",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306213"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9296494,
          49.7463916
        ],
        [
          16.9296864,
          49.7464281
        ],
        [
          16.9296393,
          49.746448
        ],
        [
          16.9296519,
          49.7464604
        ],
        [
          16.9295786,
          49.7464914
        ],
        [
          16.9295455,
          49.7464587
        ],
        [
          16.9295049,
          49.7464758
        ],
        [
          16.9294886,
          49.7464597
        ],
        [
          16.9296494,
          49.7463916
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306214",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306214"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9296125,
          49.7463553
        ],
        [
          16.9296494,
          49.7463916
        ],
        [
          16.9294886,
          49.7464597
        ],
        [
          16.9294702,
          49.7464415
        ],
        [
          16.9295169,
          49.7464217
        ],
        [
          16.9295004,
          49.7464055
        ],
        [
          16.9294783,
          49.7464148
        ],
        [
          16.92946,
          49.7463968
        ],
        [
          16.9295546,
          49.7463568
        ],
        [
          16.9295709,
          49.7463729
        ],
        [
          16.9296125,
          49.7463553
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306215",
  "properties": {
    "building": "yes",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306215"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9300259,
          49.7463785
        ],
        [
          16.9301166,
          49.7464192
        ],
        [
          16.930085,
          49.7464512
        ],
        [
          16.9299882,
          49.7463977
        ],
        [
          16.9300259,
          49.7463785
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306216",
  "properties": {
    "building": "yes",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306216"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9299365,
          49.7463091
        ],
        [
          16.9300259,
          49.7463785
        ],
        [
          16.9299882,
          49.7463977
        ],
        [
          16.9299044,
          49.7463284
        ],
        [
          16.9299365,
          49.7463091
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306217",
  "properties": {
    "building": "yes",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306217"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9298004,
          49.7462685
        ],
        [
          16.9298729,
          49.7463346
        ],
        [
          16.9298126,
          49.7463582
        ],
        [
          16.9297485,
          49.7462885
        ],
        [
          16.9298004,
          49.7462685
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306218",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "39",
    "addr:housenumber": "39",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306218"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9301914,
          49.7461964
        ],
        [
          16.9302507,
          49.7462494
        ],
        [
          16.9301679,
          49.7462882
        ],
        [
          16.930076,
          49.7463311
        ],
        [
          16.9300166,
          49.746278
        ],
        [
          16.9301914,
          49.7461964
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306219",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "40",
    "addr:housenumber": "40",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306219"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9301169,
          49.7461346
        ],
        [
          16.9301914,
          49.7461964
        ],
        [
          16.9300166,
          49.746278
        ],
        [
          16.9299354,
          49.7462183
        ],
        [
          16.9301169,
          49.7461346
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306220",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306220"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9300207,
          49.7460475
        ],
        [
          16.9301169,
          49.7461346
        ],
        [
          16.9299354,
          49.7462183
        ],
        [
          16.9298776,
          49.7462448
        ],
        [
          16.9298273,
          49.746199
        ],
        [
          16.929885,
          49.7461725
        ],
        [
          16.9299096,
          49.7461948
        ],
        [
          16.9299641,
          49.7461697
        ],
        [
          16.9298938,
          49.746106
        ],
        [
          16.9300207,
          49.7460475
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306221",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "219",
    "addr:housenumber": "219",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306221"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9294747,
          49.7461462
        ],
        [
          16.9295754,
          49.746221
        ],
        [
          16.9294845,
          49.7462722
        ],
        [
          16.9292942,
          49.7461309
        ],
        [
          16.9293537,
          49.7460974
        ],
        [
          16.9294072,
          49.7461372
        ],
        [
          16.9294432,
          49.7461639
        ],
        [
          16.9294747,
          49.7461462
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306222",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306222"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9295201,
          49.7459862
        ],
        [
          16.9296194,
          49.7460562
        ],
        [
          16.9296411,
          49.7460715
        ],
        [
          16.9295369,
          49.7461332
        ],
        [
          16.9293785,
          49.7460215
        ],
        [
          16.9293171,
          49.7459782
        ],
        [
          16.9293604,
          49.7459514
        ],
        [
          16.9294232,
          49.7459939
        ],
        [
          16.9294825,
          49.7459597
        ],
        [
          16.9295201,
          49.7459862
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306223",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "44",
    "addr:housenumber": "44",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306223"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9296032,
          49.7458934
        ],
        [
          16.929736,
          49.7459873
        ],
        [
          16.9296194,
          49.7460562
        ],
        [
          16.9295201,
          49.7459862
        ],
        [
          16.9295649,
          49.7459598
        ],
        [
          16.9295311,
          49.7459359
        ],
        [
          16.9296032,
          49.7458934
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306224",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306224"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9301505,
          49.7458461
        ],
        [
          16.9302378,
          49.7459189
        ],
        [
          16.9300051,
          49.7460352
        ],
        [
          16.9299054,
          49.7460839
        ],
        [
          16.9298058,
          49.7459998
        ],
        [
          16.9298582,
          49.7459739
        ],
        [
          16.9299076,
          49.7460156
        ],
        [
          16.929954,
          49.7459926
        ],
        [
          16.9299382,
          49.7459794
        ],
        [
          16.9300092,
          49.7459439
        ],
        [
          16.9299888,
          49.7459269
        ],
        [
          16.9301505,
          49.7458461
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306225",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306225"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.930029,
          49.7457373
        ],
        [
          16.930101,
          49.7457915
        ],
        [
          16.9299465,
          49.7458773
        ],
        [
          16.9299083,
          49.7458486
        ],
        [
          16.9298494,
          49.7458809
        ],
        [
          16.9298152,
          49.7458548
        ],
        [
          16.9298504,
          49.7458356
        ],
        [
          16.9298744,
          49.7458231
        ],
        [
          16.930029,
          49.7457373
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306226",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306226"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9299404,
          49.7456696
        ],
        [
          16.930029,
          49.7457373
        ],
        [
          16.9298744,
          49.7458231
        ],
        [
          16.9298504,
          49.7458356
        ],
        [
          16.9297647,
          49.7457708
        ],
        [
          16.9299404,
          49.7456696
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306227",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "47",
    "addr:housenumber": "47",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306227"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9297992,
          49.7456215
        ],
        [
          16.9298809,
          49.7456729
        ],
        [
          16.9297781,
          49.7457416
        ],
        [
          16.9296943,
          49.7456951
        ],
        [
          16.9297992,
          49.7456215
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306228",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306228"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9294752,
          49.7458528
        ],
        [
          16.9295205,
          49.7458824
        ],
        [
          16.9294556,
          49.7459239
        ],
        [
          16.9294103,
          49.7458943
        ],
        [
          16.9294544,
          49.7458661
        ],
        [
          16.9294752,
          49.7458528
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306229",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306229"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.929412,
          49.7458398
        ],
        [
          16.9294544,
          49.7458661
        ],
        [
          16.9294103,
          49.7458943
        ],
        [
          16.9293654,
          49.7459226
        ],
        [
          16.9293259,
          49.7458982
        ],
        [
          16.929412,
          49.7458398
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306230",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "48",
    "addr:housenumber": "48",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306230"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9297142,
          49.745577
        ],
        [
          16.9297992,
          49.7456215
        ],
        [
          16.9296943,
          49.7456951
        ],
        [
          16.9295967,
          49.7457602
        ],
        [
          16.9295668,
          49.7457819
        ],
        [
          16.9295229,
          49.7457513
        ],
        [
          16.9295791,
          49.7457161
        ],
        [
          16.9296394,
          49.7456782
        ],
        [
          16.9295924,
          49.7456474
        ],
        [
          16.9297142,
          49.745577
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306231",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "49",
    "addr:housenumber": "49",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306231"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9296226,
          49.7454975
        ],
        [
          16.9297142,
          49.745577
        ],
        [
          16.9295924,
          49.7456474
        ],
        [
          16.9295297,
          49.7456837
        ],
        [
          16.9294724,
          49.7457168
        ],
        [
          16.9293808,
          49.7456308
        ],
        [
          16.9294273,
          49.7456036
        ],
        [
          16.9295054,
          49.7456527
        ],
        [
          16.9295625,
          49.7456246
        ],
        [
          16.9294934,
          49.7455673
        ],
        [
          16.9296226,
          49.7454975
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306232",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306232"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9293838,
          49.7456154
        ],
        [
          16.9293479,
          49.7455886
        ],
        [
          16.9293958,
          49.7455618
        ],
        [
          16.9294317,
          49.7455886
        ],
        [
          16.9293838,
          49.7456154
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306233",
  "properties": {
    "building": "yes",
    "material": "wood",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306233"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9289282,
          49.7455021
        ],
        [
          16.9289878,
          49.7455662
        ],
        [
          16.9290693,
          49.7456494
        ],
        [
          16.9292251,
          49.7458121
        ],
        [
          16.9289791,
          49.7459105
        ],
        [
          16.9288969,
          49.7458218
        ],
        [
          16.9289506,
          49.7457988
        ],
        [
          16.9290802,
          49.7457478
        ],
        [
          16.9288681,
          49.7455264
        ],
        [
          16.9289282,
          49.7455021
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306234",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "170",
    "addr:housenumber": "170",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306234"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9295746,
          49.7454508
        ],
        [
          16.9296226,
          49.7454975
        ],
        [
          16.9294934,
          49.7455673
        ],
        [
          16.9294417,
          49.7455184
        ],
        [
          16.9295746,
          49.7454508
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306235",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "171",
    "addr:housenumber": "171",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306235"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9295038,
          49.7453936
        ],
        [
          16.9295746,
          49.7454508
        ],
        [
          16.9294417,
          49.7455184
        ],
        [
          16.9293679,
          49.7454598
        ],
        [
          16.9293785,
          49.7454585
        ],
        [
          16.9295038,
          49.7453936
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306236",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306236"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9293548,
          49.7452771
        ],
        [
          16.929442,
          49.7453486
        ],
        [
          16.9295038,
          49.7453936
        ],
        [
          16.9293785,
          49.7454585
        ],
        [
          16.9293203,
          49.7454134
        ],
        [
          16.9292738,
          49.7453753
        ],
        [
          16.9292309,
          49.7453402
        ],
        [
          16.9292746,
          49.745318
        ],
        [
          16.9293548,
          49.7452771
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306237",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306237"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9292461,
          49.7451951
        ],
        [
          16.9293548,
          49.7452771
        ],
        [
          16.9292746,
          49.745318
        ],
        [
          16.9291688,
          49.7452374
        ],
        [
          16.929197,
          49.745222
        ],
        [
          16.9292461,
          49.7451951
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306238",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306238"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9291546,
          49.7451167
        ],
        [
          16.9292461,
          49.7451951
        ],
        [
          16.929197,
          49.745222
        ],
        [
          16.9291688,
          49.7452374
        ],
        [
          16.929087,
          49.7451693
        ],
        [
          16.9291074,
          49.7451594
        ],
        [
          16.9290926,
          49.7451466
        ],
        [
          16.9291546,
          49.7451167
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306239",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306239"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9288121,
          49.745101
        ],
        [
          16.929018,
          49.7450139
        ],
        [
          16.9291017,
          49.7450949
        ],
        [
          16.9290438,
          49.7451199
        ],
        [
          16.9290767,
          49.7451517
        ],
        [
          16.9289979,
          49.7451858
        ],
        [
          16.9291212,
          49.7453059
        ],
        [
          16.929202,
          49.7453821
        ],
        [
          16.9292356,
          49.7454156
        ],
        [
          16.9291783,
          49.7454404
        ],
        [
          16.9291451,
          49.7454073
        ],
        [
          16.9290642,
          49.7453311
        ],
        [
          16.9289281,
          49.7452188
        ],
        [
          16.9288121,
          49.745101
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306240",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306240"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9308698,
          49.7443281
        ],
        [
          16.9309307,
          49.7444145
        ],
        [
          16.9308468,
          49.7444392
        ],
        [
          16.9307859,
          49.7443528
        ],
        [
          16.9308698,
          49.7443281
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306241",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306241"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9309604,
          49.7442895
        ],
        [
          16.9310943,
          49.7442527
        ],
        [
          16.9312111,
          49.7442206
        ],
        [
          16.9312298,
          49.7442984
        ],
        [
          16.9312487,
          49.744382
        ],
        [
          16.9312697,
          49.7444244
        ],
        [
          16.93107,
          49.7444195
        ],
        [
          16.931055,
          49.7443739
        ],
        [
          16.9311105,
          49.7443477
        ],
        [
          16.9310535,
          49.7443002
        ],
        [
          16.9309904,
          49.7443196
        ],
        [
          16.9309604,
          49.7442895
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306242",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306242"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9320826,
          49.7442302
        ],
        [
          16.9320916,
          49.7442882
        ],
        [
          16.9320011,
          49.744294
        ],
        [
          16.9319921,
          49.744236
        ],
        [
          16.9320826,
          49.7442302
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306248",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306248"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9296229,
          49.7447356
        ],
        [
          16.9296594,
          49.7447868
        ],
        [
          16.9297469,
          49.7448879
        ],
        [
          16.9297569,
          49.7448998
        ],
        [
          16.9297818,
          49.7449305
        ],
        [
          16.9298182,
          49.7449752
        ],
        [
          16.9295906,
          49.7450525
        ],
        [
          16.929519,
          49.7449809
        ],
        [
          16.9296649,
          49.7449311
        ],
        [
          16.9295595,
          49.744795
        ],
        [
          16.9293853,
          49.7448397
        ],
        [
          16.9293928,
          49.7448581
        ],
        [
          16.9292937,
          49.7448862
        ],
        [
          16.9293148,
          49.7449192
        ],
        [
          16.9291076,
          49.7449852
        ],
        [
          16.929043,
          49.7448775
        ],
        [
          16.9296229,
          49.7447356
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306249",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306249"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9289154,
          49.7446825
        ],
        [
          16.9292322,
          49.7446272
        ],
        [
          16.9292427,
          49.7446805
        ],
        [
          16.9291481,
          49.7447029
        ],
        [
          16.9292067,
          49.7447776
        ],
        [
          16.9295868,
          49.7446849
        ],
        [
          16.9296229,
          49.7447356
        ],
        [
          16.929043,
          49.7448775
        ],
        [
          16.9289154,
          49.7446825
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306250",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306250"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9316916,
          49.7438091
        ],
        [
          16.9318508,
          49.7437588
        ],
        [
          16.9319048,
          49.7438364
        ],
        [
          16.9317399,
          49.743886
        ],
        [
          16.9316916,
          49.7438091
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306251",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306251"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9315355,
          49.7439475
        ],
        [
          16.9314753,
          49.7438526
        ],
        [
          16.9316842,
          49.7437973
        ],
        [
          16.9316916,
          49.7438091
        ],
        [
          16.9317399,
          49.743886
        ],
        [
          16.9315355,
          49.7439475
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306252",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306252"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9314445,
          49.7439749
        ],
        [
          16.9313913,
          49.7438626
        ],
        [
          16.9313733,
          49.7437646
        ],
        [
          16.9313958,
          49.7437627
        ],
        [
          16.9313793,
          49.7436598
        ],
        [
          16.9314379,
          49.7436588
        ],
        [
          16.9314439,
          49.7437153
        ],
        [
          16.9314544,
          49.7438151
        ],
        [
          16.9314753,
          49.7438526
        ],
        [
          16.9315355,
          49.7439475
        ],
        [
          16.9314445,
          49.7439749
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306253",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306253"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9312885,
          49.7439337
        ],
        [
          16.9312382,
          49.7437908
        ],
        [
          16.9311901,
          49.7437966
        ],
        [
          16.9311736,
          49.743753
        ],
        [
          16.9312952,
          49.7437239
        ],
        [
          16.9313703,
          49.7438645
        ],
        [
          16.9313913,
          49.7438626
        ],
        [
          16.9314445,
          49.7439749
        ],
        [
          16.9313406,
          49.7440061
        ],
        [
          16.9312885,
          49.7439337
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306254",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306254"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9308189,
          49.7437645
        ],
        [
          16.9309182,
          49.7437347
        ],
        [
          16.9309675,
          49.7438033
        ],
        [
          16.9311017,
          49.7439898
        ],
        [
          16.9312885,
          49.7439337
        ],
        [
          16.9313406,
          49.7440061
        ],
        [
          16.9310546,
          49.7440922
        ],
        [
          16.9310157,
          49.7440381
        ],
        [
          16.9309048,
          49.7438839
        ],
        [
          16.9308189,
          49.7437645
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306256",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306256"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9308635,
          49.7440159
        ],
        [
          16.9308991,
          49.7440701
        ],
        [
          16.9310157,
          49.7440381
        ],
        [
          16.9310546,
          49.7440922
        ],
        [
          16.9308479,
          49.7441544
        ],
        [
          16.9307732,
          49.7440407
        ],
        [
          16.9308635,
          49.7440159
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306257",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306257"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9306107,
          49.743988
        ],
        [
          16.9306474,
          49.7440409
        ],
        [
          16.9307195,
          49.74402
        ],
        [
          16.9307952,
          49.7441294
        ],
        [
          16.9306253,
          49.7441785
        ],
        [
          16.930513,
          49.7440162
        ],
        [
          16.9306107,
          49.743988
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306258",
  "properties": {
    "building": "yes",
    "source:start_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "start_date": "1937",
    "id": "way/198306258"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9296875,
          49.7442689
        ],
        [
          16.9296622,
          49.7442063
        ],
        [
          16.9298679,
          49.7441591
        ],
        [
          16.929958,
          49.7441369
        ],
        [
          16.9300726,
          49.7443411
        ],
        [
          16.9299944,
          49.7443594
        ],
        [
          16.9300309,
          49.74443
        ],
        [
          16.9298063,
          49.7444784
        ],
        [
          16.9297597,
          49.7443881
        ],
        [
          16.9298845,
          49.7443612
        ],
        [
          16.9299843,
          49.7443397
        ],
        [
          16.9299078,
          49.7442173
        ],
        [
          16.929817,
          49.7442386
        ],
        [
          16.9296875,
          49.7442689
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306259",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306259"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9293613,
          49.7442244
        ],
        [
          16.9294269,
          49.7442158
        ],
        [
          16.9294451,
          49.744274
        ],
        [
          16.9294559,
          49.7443084
        ],
        [
          16.9294734,
          49.744364
        ],
        [
          16.9295324,
          49.7443563
        ],
        [
          16.929628,
          49.7443438
        ],
        [
          16.929664,
          49.7444585
        ],
        [
          16.929719,
          49.7444513
        ],
        [
          16.9297282,
          49.7444806
        ],
        [
          16.9296732,
          49.7444878
        ],
        [
          16.9294531,
          49.7445167
        ],
        [
          16.9294184,
          49.7444061
        ],
        [
          16.9294,
          49.7443475
        ],
        [
          16.9293904,
          49.744317
        ],
        [
          16.9293796,
          49.7442826
        ],
        [
          16.9293613,
          49.7442244
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306260",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306260"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9291478,
          49.744368
        ],
        [
          16.9291309,
          49.7443194
        ],
        [
          16.9291107,
          49.7442612
        ],
        [
          16.9292405,
          49.7442423
        ],
        [
          16.9293613,
          49.7442244
        ],
        [
          16.9293796,
          49.7442826
        ],
        [
          16.9293904,
          49.744317
        ],
        [
          16.9294,
          49.7443475
        ],
        [
          16.9293603,
          49.7443533
        ],
        [
          16.929338,
          49.7442894
        ],
        [
          16.9292608,
          49.7443006
        ],
        [
          16.929215,
          49.7443072
        ],
        [
          16.9292575,
          49.7444294
        ],
        [
          16.9294184,
          49.7444061
        ],
        [
          16.9294531,
          49.7445167
        ],
        [
          16.9292117,
          49.7445516
        ],
        [
          16.9291984,
          49.7445134
        ],
        [
          16.9291699,
          49.7444313
        ],
        [
          16.9291478,
          49.744368
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306261",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306261"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9290229,
          49.7444494
        ],
        [
          16.9290532,
          49.744535
        ],
        [
          16.9291646,
          49.7445184
        ],
        [
          16.9291357,
          49.7444363
        ],
        [
          16.9291699,
          49.7444313
        ],
        [
          16.9291984,
          49.7445134
        ],
        [
          16.9292117,
          49.7445516
        ],
        [
          16.9288837,
          49.7446007
        ],
        [
          16.9288397,
          49.7444765
        ],
        [
          16.9288964,
          49.7444681
        ],
        [
          16.9290229,
          49.7444494
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306262",
  "properties": {
    "building": "yes",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306262"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9289064,
          49.7441461
        ],
        [
          16.9288894,
          49.7440804
        ],
        [
          16.9290573,
          49.7440622
        ],
        [
          16.929075,
          49.7441279
        ],
        [
          16.9289064,
          49.7441461
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306263",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "120",
    "addr:housenumber": "120",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306263"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9288125,
          49.7442088
        ],
        [
          16.9289187,
          49.7441941
        ],
        [
          16.9289435,
          49.7442695
        ],
        [
          16.9289981,
          49.7442619
        ],
        [
          16.9290381,
          49.7443832
        ],
        [
          16.9291478,
          49.744368
        ],
        [
          16.9291699,
          49.7444313
        ],
        [
          16.9291357,
          49.7444363
        ],
        [
          16.9290229,
          49.7444494
        ],
        [
          16.9288964,
          49.7444681
        ],
        [
          16.9288716,
          49.7443885
        ],
        [
          16.9288125,
          49.7442088
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306264",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "119",
    "addr:housenumber": "119",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306264"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9286162,
          49.7443217
        ],
        [
          16.9286514,
          49.7443169
        ],
        [
          16.9287654,
          49.7443012
        ],
        [
          16.9287082,
          49.744127
        ],
        [
          16.9287823,
          49.7441168
        ],
        [
          16.9288125,
          49.7442088
        ],
        [
          16.9288716,
          49.7443885
        ],
        [
          16.9286482,
          49.7444191
        ],
        [
          16.9286162,
          49.7443217
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306265",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "118",
    "addr:housenumber": "118",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306265"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9285402,
          49.7440898
        ],
        [
          16.9286162,
          49.7443217
        ],
        [
          16.9286482,
          49.7444191
        ],
        [
          16.9284353,
          49.7444524
        ],
        [
          16.9283556,
          49.7442361
        ],
        [
          16.9284472,
          49.7442206
        ],
        [
          16.9284793,
          49.744304
        ],
        [
          16.9285519,
          49.7442927
        ],
        [
          16.9284803,
          49.7440988
        ],
        [
          16.9285402,
          49.7440898
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306282",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306282"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9282742,
          49.7440197
        ],
        [
          16.928443,
          49.7439945
        ],
        [
          16.9285028,
          49.7439855
        ],
        [
          16.9285327,
          49.7440688
        ],
        [
          16.9285402,
          49.7440898
        ],
        [
          16.9284803,
          49.7440988
        ],
        [
          16.9283116,
          49.744124
        ],
        [
          16.9282742,
          49.7440197
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306283",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306283"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9280475,
          49.744166
        ],
        [
          16.9279992,
          49.7440651
        ],
        [
          16.9280788,
          49.7440512
        ],
        [
          16.9282742,
          49.7440197
        ],
        [
          16.9283116,
          49.744124
        ],
        [
          16.9282315,
          49.744136
        ],
        [
          16.9281183,
          49.7441541
        ],
        [
          16.9280475,
          49.744166
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306284",
  "properties": {
    "building": "yes",
    "material": "wood",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306284"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9278388,
          49.7437017
        ],
        [
          16.9278728,
          49.7437969
        ],
        [
          16.9275942,
          49.7438385
        ],
        [
          16.9275877,
          49.7438203
        ],
        [
          16.9275602,
          49.7437433
        ],
        [
          16.9276843,
          49.7437247
        ],
        [
          16.9278388,
          49.7437017
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306285",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306285"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9277343,
          49.7435424
        ],
        [
          16.9277907,
          49.7436525
        ],
        [
          16.9276768,
          49.7436713
        ],
        [
          16.9276328,
          49.7435581
        ],
        [
          16.9277343,
          49.7435424
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306286",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306286"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9276328,
          49.7435581
        ],
        [
          16.9275952,
          49.7434562
        ],
        [
          16.9276967,
          49.7434405
        ],
        [
          16.9277343,
          49.7435424
        ],
        [
          16.9276328,
          49.7435581
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306287",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "112",
    "addr:housenumber": "112",
    "building": "house",
    "material": "brick",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306287"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9272415,
          49.7435882
        ],
        [
          16.9272283,
          49.7435273
        ],
        [
          16.9274853,
          49.743504
        ],
        [
          16.9274985,
          49.7435649
        ],
        [
          16.9274074,
          49.7435732
        ],
        [
          16.9272415,
          49.7435882
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306288",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "113",
    "addr:housenumber": "113",
    "building": "house",
    "material": "brick",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306288"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9274074,
          49.7435732
        ],
        [
          16.927423,
          49.7436384
        ],
        [
          16.9272557,
          49.7436551
        ],
        [
          16.9272415,
          49.7435882
        ],
        [
          16.9274074,
          49.7435732
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306289",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "114",
    "addr:housenumber": "114",
    "building": "house",
    "material": "brick",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306289"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9274337,
          49.743685
        ],
        [
          16.9274405,
          49.7437044
        ],
        [
          16.92754,
          49.74369
        ],
        [
          16.9275602,
          49.7437433
        ],
        [
          16.9272934,
          49.7437791
        ],
        [
          16.927269,
          49.7437089
        ],
        [
          16.9274337,
          49.743685
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306290",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306290"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9275877,
          49.7438203
        ],
        [
          16.9275942,
          49.7438385
        ],
        [
          16.9276502,
          49.7439722
        ],
        [
          16.9276894,
          49.7440529
        ],
        [
          16.9277223,
          49.744133
        ],
        [
          16.9276745,
          49.7441416
        ],
        [
          16.9276695,
          49.7441301
        ],
        [
          16.9276588,
          49.7441052
        ],
        [
          16.9275347,
          49.7441274
        ],
        [
          16.9275113,
          49.7440729
        ],
        [
          16.9275475,
          49.7440664
        ],
        [
          16.9274827,
          49.7439155
        ],
        [
          16.9274385,
          49.7439234
        ],
        [
          16.927412,
          49.7438616
        ],
        [
          16.9275522,
          49.7438365
        ],
        [
          16.9275484,
          49.7438274
        ],
        [
          16.9275877,
          49.7438203
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306291",
  "properties": {
    "building": "yes",
    "material": "brick",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306291"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9275505,
          49.7442251
        ],
        [
          16.9276247,
          49.7443361
        ],
        [
          16.9275608,
          49.7443519
        ],
        [
          16.9274922,
          49.7442369
        ],
        [
          16.9275505,
          49.7442251
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306292",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306292"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9277484,
          49.7441854
        ],
        [
          16.9276842,
          49.7441983
        ],
        [
          16.9275505,
          49.7442251
        ],
        [
          16.9274922,
          49.7442369
        ],
        [
          16.9274607,
          49.744172
        ],
        [
          16.9276695,
          49.7441301
        ],
        [
          16.9276745,
          49.7441416
        ],
        [
          16.9277223,
          49.744133
        ],
        [
          16.9277484,
          49.7441854
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306293",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306293"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9280977,
          49.7442796
        ],
        [
          16.9280051,
          49.7442967
        ],
        [
          16.9279819,
          49.7442444
        ],
        [
          16.9278912,
          49.74404
        ],
        [
          16.9279831,
          49.744023
        ],
        [
          16.9279992,
          49.7440651
        ],
        [
          16.9280475,
          49.744166
        ],
        [
          16.9280712,
          49.744224
        ],
        [
          16.9280829,
          49.7442526
        ],
        [
          16.9280977,
          49.7442796
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306294",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "117",
    "addr:housenumber": "117",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306294"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9281883,
          49.744495
        ],
        [
          16.9281351,
          49.7443642
        ],
        [
          16.9280977,
          49.7442796
        ],
        [
          16.9280829,
          49.7442526
        ],
        [
          16.928152,
          49.7442408
        ],
        [
          16.9281942,
          49.7443501
        ],
        [
          16.9283087,
          49.7443307
        ],
        [
          16.9282484,
          49.7441817
        ],
        [
          16.9283291,
          49.7441645
        ],
        [
          16.928339,
          49.7441954
        ],
        [
          16.9283556,
          49.7442361
        ],
        [
          16.9284353,
          49.7444524
        ],
        [
          16.9281883,
          49.744495
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306295",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "116",
    "addr:housenumber": "116",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "wikidata": "Q30730393",
    "id": "way/198306295"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9278154,
          49.7443336
        ],
        [
          16.9278826,
          49.744321
        ],
        [
          16.9279198,
          49.7444055
        ],
        [
          16.9281351,
          49.7443642
        ],
        [
          16.9281883,
          49.744495
        ],
        [
          16.9279132,
          49.7445461
        ],
        [
          16.9278154,
          49.7443336
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306296",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "115",
    "addr:housenumber": "115",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306296"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9276421,
          49.7446
        ],
        [
          16.9275385,
          49.744404
        ],
        [
          16.9277517,
          49.7443555
        ],
        [
          16.9276842,
          49.7441983
        ],
        [
          16.9277484,
          49.7441854
        ],
        [
          16.9277852,
          49.7442659
        ],
        [
          16.9278154,
          49.7443336
        ],
        [
          16.9279132,
          49.7445461
        ],
        [
          16.9276421,
          49.7446
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306311",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306311"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9268729,
          49.746363
        ],
        [
          16.9267632,
          49.7464092
        ],
        [
          16.9267144,
          49.7463609
        ],
        [
          16.9268241,
          49.7463146
        ],
        [
          16.9268729,
          49.746363
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306387",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "XXI",
    "addr:housenumber": "XXI",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306387"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9264361,
          49.7460342
        ],
        [
          16.9263499,
          49.74596
        ],
        [
          16.9263036,
          49.7458996
        ],
        [
          16.926235,
          49.7458156
        ],
        [
          16.9264518,
          49.7457258
        ],
        [
          16.9264871,
          49.7457623
        ],
        [
          16.9264245,
          49.7457877
        ],
        [
          16.9264453,
          49.7458092
        ],
        [
          16.9264169,
          49.7458207
        ],
        [
          16.9264399,
          49.7458444
        ],
        [
          16.926465,
          49.7458727
        ],
        [
          16.9265556,
          49.7458394
        ],
        [
          16.926636,
          49.7459403
        ],
        [
          16.9264361,
          49.7460342
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306388",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306388"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9265517,
          49.7457446
        ],
        [
          16.9265899,
          49.7457809
        ],
        [
          16.9265522,
          49.7457974
        ],
        [
          16.926514,
          49.7457612
        ],
        [
          16.9265517,
          49.7457446
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306389",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306389"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9265102,
          49.7457773
        ],
        [
          16.9265408,
          49.7458084
        ],
        [
          16.9264836,
          49.7458319
        ],
        [
          16.926453,
          49.7458008
        ],
        [
          16.9265102,
          49.7457773
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306390",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306390"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9266433,
          49.7457084
        ],
        [
          16.9266058,
          49.7456706
        ],
        [
          16.9267228,
          49.745622
        ],
        [
          16.9267604,
          49.7456598
        ],
        [
          16.9266433,
          49.7457084
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306391",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306391"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9270086,
          49.7456032
        ],
        [
          16.9269049,
          49.7456453
        ],
        [
          16.9268664,
          49.7456057
        ],
        [
          16.9269701,
          49.7455636
        ],
        [
          16.9270086,
          49.7456032
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306392",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "XVII",
    "addr:housenumber": "XVII",
    "building": "house",
    "material": "brick",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306392"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.925892,
          49.7447264
        ],
        [
          16.9258617,
          49.7446376
        ],
        [
          16.9258318,
          49.7445502
        ],
        [
          16.9259501,
          49.7445337
        ],
        [
          16.9259798,
          49.7446238
        ],
        [
          16.9261066,
          49.7446077
        ],
        [
          16.9261295,
          49.744706
        ],
        [
          16.9260101,
          49.7447153
        ],
        [
          16.925892,
          49.7447264
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306393",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "XVIIa",
    "addr:housenumber": "XVIIa",
    "building": "house",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306393"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.925892,
          49.7447264
        ],
        [
          16.9258617,
          49.7446376
        ],
        [
          16.9259798,
          49.7446238
        ],
        [
          16.9261066,
          49.7446077
        ],
        [
          16.9261295,
          49.744706
        ],
        [
          16.9260101,
          49.7447153
        ],
        [
          16.925892,
          49.7447264
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306394",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "XVIIe",
    "addr:housenumber": "XVIIe",
    "building": "house",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306394"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9261295,
          49.744706
        ],
        [
          16.9261066,
          49.7446077
        ],
        [
          16.926147,
          49.7446045
        ],
        [
          16.9261712,
          49.744705
        ],
        [
          16.9261295,
          49.744706
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306395",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "XVIIc",
    "addr:housenumber": "XVIIc",
    "building": "house",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306395"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9259939,
          49.7444566
        ],
        [
          16.9259823,
          49.7444158
        ],
        [
          16.9260363,
          49.7444094
        ],
        [
          16.9260613,
          49.7444065
        ],
        [
          16.9260729,
          49.7444473
        ],
        [
          16.9259939,
          49.7444566
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306396",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "XVIId",
    "addr:housenumber": "XVIId",
    "building": "house",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306396"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9259248,
          49.7444648
        ],
        [
          16.9259133,
          49.744424
        ],
        [
          16.9259823,
          49.7444158
        ],
        [
          16.9259939,
          49.7444566
        ],
        [
          16.9259248,
          49.7444648
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306397",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306397"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9257546,
          49.7445889
        ],
        [
          16.9257278,
          49.7445095
        ],
        [
          16.9257731,
          49.7445031
        ],
        [
          16.925814,
          49.7444973
        ],
        [
          16.9258318,
          49.7445502
        ],
        [
          16.9257922,
          49.7445558
        ],
        [
          16.9258011,
          49.7445824
        ],
        [
          16.9257546,
          49.7445889
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306398",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "XII",
    "addr:housenumber": "XII",
    "building": "house",
    "end_date": "1928",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306398"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.925423,
          49.7447997
        ],
        [
          16.9254652,
          49.7448791
        ],
        [
          16.9253659,
          49.7449045
        ],
        [
          16.9253824,
          49.7449314
        ],
        [
          16.9252825,
          49.744957
        ],
        [
          16.9252859,
          49.7449625
        ],
        [
          16.9252111,
          49.7449816
        ],
        [
          16.9251656,
          49.7449073
        ],
        [
          16.9250856,
          49.7448147
        ],
        [
          16.9253036,
          49.7448043
        ],
        [
          16.925423,
          49.7447997
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306399",
  "properties": {
    "building": "yes",
    "end_date": "1928",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306399"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9252403,
          49.7448882
        ],
        [
          16.9252825,
          49.744957
        ],
        [
          16.9252859,
          49.7449625
        ],
        [
          16.9252111,
          49.7449816
        ],
        [
          16.9251656,
          49.7449073
        ],
        [
          16.9252403,
          49.7448882
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306400",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "XIIc",
    "addr:housenumber": "XIIc",
    "building": "house",
    "end_date": "1928",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306400"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9253279,
          49.7448424
        ],
        [
          16.9253659,
          49.7449045
        ],
        [
          16.9253824,
          49.7449314
        ],
        [
          16.9252825,
          49.744957
        ],
        [
          16.9252403,
          49.7448882
        ],
        [
          16.925228,
          49.744868
        ],
        [
          16.9253279,
          49.7448424
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306401",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "XIIa",
    "addr:housenumber": "XIIa",
    "building": "house",
    "end_date": "1928",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306401"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9253036,
          49.7448043
        ],
        [
          16.925423,
          49.7447997
        ],
        [
          16.9254652,
          49.7448791
        ],
        [
          16.9253659,
          49.7449045
        ],
        [
          16.9253279,
          49.7448424
        ],
        [
          16.9253036,
          49.7448043
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306402",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "XIIb",
    "addr:housenumber": "XIIb",
    "building": "house",
    "end_date": "1928",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306402"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9250856,
          49.7448147
        ],
        [
          16.9253036,
          49.7448043
        ],
        [
          16.9253279,
          49.7448424
        ],
        [
          16.925228,
          49.744868
        ],
        [
          16.9252403,
          49.7448882
        ],
        [
          16.9251656,
          49.7449073
        ],
        [
          16.9250856,
          49.7448147
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306403",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "XI",
    "addr:housenumber": "XI",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306403"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9254843,
          49.7449164
        ],
        [
          16.9255327,
          49.7449834
        ],
        [
          16.9252795,
          49.7450597
        ],
        [
          16.9252619,
          49.7450353
        ],
        [
          16.9252039,
          49.7450527
        ],
        [
          16.925224,
          49.7450805
        ],
        [
          16.9251115,
          49.7451144
        ],
        [
          16.9250863,
          49.7450795
        ],
        [
          16.9250607,
          49.745044
        ],
        [
          16.9252302,
          49.7449929
        ],
        [
          16.9254843,
          49.7449164
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306404",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "X",
    "addr:housenumber": "X",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306404"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9255409,
          49.744997
        ],
        [
          16.9255769,
          49.7450503
        ],
        [
          16.9256202,
          49.7451275
        ],
        [
          16.9254969,
          49.7451747
        ],
        [
          16.9254765,
          49.745183
        ],
        [
          16.9254437,
          49.7451488
        ],
        [
          16.9254163,
          49.7451168
        ],
        [
          16.9253558,
          49.7450586
        ],
        [
          16.9255409,
          49.744997
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306405",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "Xb",
    "addr:housenumber": "Xb",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306405"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9255769,
          49.7450503
        ],
        [
          16.9254523,
          49.7451016
        ],
        [
          16.9254163,
          49.7451168
        ],
        [
          16.9253558,
          49.7450586
        ],
        [
          16.9255409,
          49.744997
        ],
        [
          16.9255769,
          49.7450503
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306406",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "Xa",
    "addr:housenumber": "Xa",
    "building": "house",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306406"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9256202,
          49.7451275
        ],
        [
          16.9254969,
          49.7451747
        ],
        [
          16.9254765,
          49.745183
        ],
        [
          16.9254437,
          49.7451488
        ],
        [
          16.9254163,
          49.7451168
        ],
        [
          16.9255769,
          49.7450503
        ],
        [
          16.9256202,
          49.7451275
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306407",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "IX",
    "addr:housenumber": "IX",
    "building": "house",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306407"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9256202,
          49.7451275
        ],
        [
          16.9256815,
          49.7451942
        ],
        [
          16.9255829,
          49.745232
        ],
        [
          16.9255692,
          49.7452171
        ],
        [
          16.9255445,
          49.7452266
        ],
        [
          16.9254969,
          49.7451747
        ],
        [
          16.9256202,
          49.7451275
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306408",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306408"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9254163,
          49.7451168
        ],
        [
          16.9254437,
          49.7451488
        ],
        [
          16.9253971,
          49.7451674
        ],
        [
          16.92541,
          49.7451809
        ],
        [
          16.9253605,
          49.7452007
        ],
        [
          16.9253452,
          49.7451847
        ],
        [
          16.9252896,
          49.7452069
        ],
        [
          16.9252623,
          49.7451784
        ],
        [
          16.9254163,
          49.7451168
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306409",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306409"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9253528,
          49.7452446
        ],
        [
          16.9253925,
          49.7452289
        ],
        [
          16.9254507,
          49.7452903
        ],
        [
          16.9254109,
          49.745306
        ],
        [
          16.9253528,
          49.7452446
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306410",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306410"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9256425,
          49.7453367
        ],
        [
          16.9256747,
          49.7453772
        ],
        [
          16.9256342,
          49.7453909
        ],
        [
          16.9256014,
          49.7453508
        ],
        [
          16.9256425,
          49.7453367
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306411",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "VIII",
    "addr:housenumber": "VIII",
    "building": "house",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306411"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9257189,
          49.7452658
        ],
        [
          16.9258359,
          49.7454128
        ],
        [
          16.9257308,
          49.7454477
        ],
        [
          16.9256747,
          49.7453772
        ],
        [
          16.9256425,
          49.7453367
        ],
        [
          16.9256138,
          49.7453007
        ],
        [
          16.9257189,
          49.7452658
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306412",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "VII",
    "addr:housenumber": "VII",
    "building": "house",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306412"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9258844,
          49.7454847
        ],
        [
          16.9259398,
          49.7455546
        ],
        [
          16.9258201,
          49.7455942
        ],
        [
          16.9257331,
          49.745623
        ],
        [
          16.925721,
          49.7456077
        ],
        [
          16.9257557,
          49.7455962
        ],
        [
          16.9257989,
          49.7455819
        ],
        [
          16.925779,
          49.7455568
        ],
        [
          16.9258381,
          49.7455372
        ],
        [
          16.9258147,
          49.7455078
        ],
        [
          16.9258844,
          49.7454847
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306413",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "V",
    "addr:housenumber": "V",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306413"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9259986,
          49.7456527
        ],
        [
          16.9260409,
          49.7457088
        ],
        [
          16.9260922,
          49.7457769
        ],
        [
          16.9261074,
          49.7457971
        ],
        [
          16.9261429,
          49.7458442
        ],
        [
          16.9259967,
          49.7458902
        ],
        [
          16.9259904,
          49.7458818
        ],
        [
          16.9259667,
          49.7458504
        ],
        [
          16.9259535,
          49.7458329
        ],
        [
          16.9259413,
          49.7458167
        ],
        [
          16.9259012,
          49.7457634
        ],
        [
          16.9258524,
          49.7456987
        ],
        [
          16.9259986,
          49.7456527
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306414",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306414"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9258052,
          49.7459335
        ],
        [
          16.9258422,
          49.7459157
        ],
        [
          16.9258613,
          49.7459322
        ],
        [
          16.9258242,
          49.74595
        ],
        [
          16.9258052,
          49.7459335
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306415",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "Va",
    "addr:housenumber": "Va",
    "building": "house",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306415"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9257071,
          49.7459399
        ],
        [
          16.925764,
          49.7459158
        ],
        [
          16.9257851,
          49.7459365
        ],
        [
          16.9257282,
          49.7459607
        ],
        [
          16.9257071,
          49.7459399
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306416",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "IIIb",
    "addr:housenumber": "IIIb",
    "building": "house",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306416"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.925624,
          49.746019
        ],
        [
          16.9256713,
          49.746073
        ],
        [
          16.9255948,
          49.746101
        ],
        [
          16.9255774,
          49.7460811
        ],
        [
          16.9254419,
          49.7461307
        ],
        [
          16.925412,
          49.7460965
        ],
        [
          16.9255475,
          49.746047
        ],
        [
          16.925624,
          49.746019
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306417",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306417"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9257034,
          49.7459899
        ],
        [
          16.925741,
          49.7459762
        ],
        [
          16.925773,
          49.7459645
        ],
        [
          16.9258203,
          49.7460185
        ],
        [
          16.9257507,
          49.746044
        ],
        [
          16.9257034,
          49.7459899
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306418",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306418"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9257034,
          49.7459899
        ],
        [
          16.9257507,
          49.746044
        ],
        [
          16.9256713,
          49.746073
        ],
        [
          16.925624,
          49.746019
        ],
        [
          16.9257034,
          49.7459899
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306419",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "IIIa",
    "addr:housenumber": "IIIa",
    "building": "house",
    "end_date": "1919",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306419"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9258852,
          49.7461719
        ],
        [
          16.9259474,
          49.7462298
        ],
        [
          16.9258011,
          49.7462955
        ],
        [
          16.9257368,
          49.7462357
        ],
        [
          16.9258091,
          49.7462033
        ],
        [
          16.9257903,
          49.7461857
        ],
        [
          16.9258324,
          49.7461669
        ],
        [
          16.9258532,
          49.7461862
        ],
        [
          16.9258852,
          49.7461719
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306420",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "IVb",
    "addr:housenumber": "IVb",
    "building": "house",
    "end_date": "1855",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:shape": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "source:start_date": "https://iispp.npu.cz/mis_public/documentDetail.htm?id=1140995",
    "start_date": "1834",
    "id": "way/198306420"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9259781,
          49.7459928
        ],
        [
          16.9259009,
          49.7460279
        ],
        [
          16.9258371,
          49.7459552
        ],
        [
          16.9259967,
          49.7458902
        ],
        [
          16.9261429,
          49.7458442
        ],
        [
          16.9263195,
          49.7460578
        ],
        [
          16.9262263,
          49.7461022
        ],
        [
          16.92619,
          49.746069
        ],
        [
          16.9261426,
          49.7460131
        ],
        [
          16.9261655,
          49.7460045
        ],
        [
          16.926098,
          49.7459299
        ],
        [
          16.9259962,
          49.7459683
        ],
        [
          16.9259687,
          49.7459772
        ],
        [
          16.9259781,
          49.7459928
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306421",
  "properties": {
    "building": "yes",
    "end_date": "1855",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:shape": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "source:start_date": "https://iispp.npu.cz/mis_public/documentDetail.htm?id=1140995",
    "start_date": "1834",
    "id": "way/198306421"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9260177,
          49.7460386
        ],
        [
          16.9259357,
          49.7460676
        ],
        [
          16.9259009,
          49.7460279
        ],
        [
          16.9259781,
          49.7459928
        ],
        [
          16.9260177,
          49.7460386
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306422",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306422"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9259357,
          49.7460676
        ],
        [
          16.9260177,
          49.7460386
        ],
        [
          16.9260389,
          49.7460637
        ],
        [
          16.925957,
          49.7460926
        ],
        [
          16.9259357,
          49.7460676
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306423",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306423"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9258603,
          49.7461395
        ],
        [
          16.9258356,
          49.7461126
        ],
        [
          16.9258799,
          49.7460956
        ],
        [
          16.9259046,
          49.7461225
        ],
        [
          16.9258603,
          49.7461395
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306426",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "IIb",
    "addr:housenumber": "IIb",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306426"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9259802,
          49.7464208
        ],
        [
          16.9260673,
          49.7464967
        ],
        [
          16.9259401,
          49.7465576
        ],
        [
          16.925853,
          49.7464817
        ],
        [
          16.9259802,
          49.7464208
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306428",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306428"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9265127,
          49.7463265
        ],
        [
          16.9265435,
          49.7463537
        ],
        [
          16.9265124,
          49.7463683
        ],
        [
          16.9264817,
          49.7463411
        ],
        [
          16.9265127,
          49.7463265
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306429",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "I",
    "addr:housenumber": "I",
    "building": "house",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306429"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9263736,
          49.7462325
        ],
        [
          16.92644,
          49.7462904
        ],
        [
          16.9264123,
          49.7463036
        ],
        [
          16.9264514,
          49.7463376
        ],
        [
          16.9264228,
          49.7463513
        ],
        [
          16.9264813,
          49.7464025
        ],
        [
          16.9265086,
          49.7464262
        ],
        [
          16.9264457,
          49.7464564
        ],
        [
          16.9264184,
          49.7464326
        ],
        [
          16.9263698,
          49.7463902
        ],
        [
          16.9263416,
          49.7463656
        ],
        [
          16.9262544,
          49.7462895
        ],
        [
          16.9263736,
          49.7462325
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306431",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "XIIIc",
    "addr:housenumber": "XIIIc",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306431"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9251343,
          49.7445666
        ],
        [
          16.925114,
          49.7445036
        ],
        [
          16.9252928,
          49.7444805
        ],
        [
          16.9253128,
          49.7445425
        ],
        [
          16.9253022,
          49.7445439
        ],
        [
          16.9251343,
          49.7445666
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306468",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306468"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9276756,
          49.7457201
        ],
        [
          16.9277468,
          49.7456859
        ],
        [
          16.9278599,
          49.745784
        ],
        [
          16.9277886,
          49.7458183
        ],
        [
          16.9277038,
          49.7457446
        ],
        [
          16.9276756,
          49.7457201
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306469",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306469"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9275941,
          49.7456465
        ],
        [
          16.9276756,
          49.7457201
        ],
        [
          16.9277038,
          49.7457446
        ],
        [
          16.9276202,
          49.7457835
        ],
        [
          16.9275107,
          49.7456853
        ],
        [
          16.9275941,
          49.7456465
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306470",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306470"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9270339,
          49.7461684
        ],
        [
          16.9269817,
          49.7461929
        ],
        [
          16.9269372,
          49.7461532
        ],
        [
          16.9269895,
          49.7461287
        ],
        [
          16.9270339,
          49.7461684
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306471",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306471"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9270356,
          49.7461058
        ],
        [
          16.9270482,
          49.7461176
        ],
        [
          16.9270803,
          49.7461477
        ],
        [
          16.9270339,
          49.7461684
        ],
        [
          16.9269895,
          49.7461287
        ],
        [
          16.9270356,
          49.7461058
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306472",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306472"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.92703,
          49.7460549
        ],
        [
          16.9270779,
          49.7460328
        ],
        [
          16.92713,
          49.7460798
        ],
        [
          16.9270482,
          49.7461176
        ],
        [
          16.9270356,
          49.7461058
        ],
        [
          16.9270083,
          49.7460803
        ],
        [
          16.9270413,
          49.7460651
        ],
        [
          16.92703,
          49.7460549
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306473",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306473"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9273695,
          49.7459428
        ],
        [
          16.9274045,
          49.7459737
        ],
        [
          16.9274181,
          49.7459857
        ],
        [
          16.9274325,
          49.7459984
        ],
        [
          16.9272945,
          49.7460636
        ],
        [
          16.9272665,
          49.7460389
        ],
        [
          16.9272789,
          49.7460331
        ],
        [
          16.9272439,
          49.7460022
        ],
        [
          16.9273695,
          49.7459428
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306474",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306474"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9274128,
          49.7459215
        ],
        [
          16.9274484,
          49.7459529
        ],
        [
          16.9274045,
          49.7459737
        ],
        [
          16.9273695,
          49.7459428
        ],
        [
          16.9274128,
          49.7459215
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306475",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306475"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9275207,
          49.7459392
        ],
        [
          16.9275489,
          49.7459652
        ],
        [
          16.9274447,
          49.7460125
        ],
        [
          16.9274325,
          49.7459984
        ],
        [
          16.9274181,
          49.7459857
        ],
        [
          16.9275207,
          49.7459392
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306476",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306476"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9279602,
          49.7459782
        ],
        [
          16.9277886,
          49.7458183
        ],
        [
          16.9278599,
          49.745784
        ],
        [
          16.9280338,
          49.7459451
        ],
        [
          16.9279602,
          49.7459782
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306477",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306477"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9281424,
          49.745745
        ],
        [
          16.9281782,
          49.7457862
        ],
        [
          16.9282384,
          49.7458553
        ],
        [
          16.928159,
          49.745883
        ],
        [
          16.9280656,
          49.7457711
        ],
        [
          16.9281424,
          49.745745
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306478",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306478"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9275373,
          49.745838
        ],
        [
          16.9276074,
          49.7459025
        ],
        [
          16.9277057,
          49.745858
        ],
        [
          16.9277592,
          49.7459072
        ],
        [
          16.9275761,
          49.7459903
        ],
        [
          16.9275489,
          49.7459652
        ],
        [
          16.9275207,
          49.7459392
        ],
        [
          16.9274525,
          49.7458765
        ],
        [
          16.9275373,
          49.745838
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306479",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "193",
    "addr:housenumber": "193",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306479"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9266049,
          49.7460888
        ],
        [
          16.9266706,
          49.7461593
        ],
        [
          16.9266851,
          49.7461748
        ],
        [
          16.9265681,
          49.7462204
        ],
        [
          16.9264879,
          49.7461344
        ],
        [
          16.9266049,
          49.7460888
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306480",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "59",
    "addr:housenumber": "59",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306480"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9267458,
          49.7460266
        ],
        [
          16.9269028,
          49.7461674
        ],
        [
          16.926823,
          49.7462025
        ],
        [
          16.9266668,
          49.7460616
        ],
        [
          16.9266919,
          49.746052
        ],
        [
          16.9267458,
          49.7460266
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306481",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "173",
    "addr:housenumber": "173",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306481"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.927049,
          49.7458921
        ],
        [
          16.9271476,
          49.7459822
        ],
        [
          16.9270845,
          49.7460131
        ],
        [
          16.9270342,
          49.7459689
        ],
        [
          16.9270094,
          49.7459815
        ],
        [
          16.9270422,
          49.7460149
        ],
        [
          16.9270074,
          49.7460296
        ],
        [
          16.92703,
          49.7460549
        ],
        [
          16.9270413,
          49.7460651
        ],
        [
          16.9270083,
          49.7460803
        ],
        [
          16.9268777,
          49.7459641
        ],
        [
          16.9269744,
          49.7459247
        ],
        [
          16.927049,
          49.7458921
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306482",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "58",
    "addr:housenumber": "58",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306482"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9271228,
          49.7458598
        ],
        [
          16.9272407,
          49.745962
        ],
        [
          16.9272119,
          49.7459746
        ],
        [
          16.9272439,
          49.7460022
        ],
        [
          16.9272789,
          49.7460331
        ],
        [
          16.9272665,
          49.7460389
        ],
        [
          16.927226,
          49.7460539
        ],
        [
          16.9271476,
          49.7459822
        ],
        [
          16.927049,
          49.7458921
        ],
        [
          16.9271228,
          49.7458598
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306483",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "215",
    "addr:housenumber": "215",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306483"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9273068,
          49.7457808
        ],
        [
          16.9274474,
          49.7459051
        ],
        [
          16.9274128,
          49.7459215
        ],
        [
          16.9273695,
          49.7459428
        ],
        [
          16.9272302,
          49.745817
        ],
        [
          16.9272636,
          49.7458013
        ],
        [
          16.9273068,
          49.7457808
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306484",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "57",
    "addr:housenumber": "57",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306484"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9274494,
          49.7457111
        ],
        [
          16.9275736,
          49.7458196
        ],
        [
          16.9275373,
          49.745838
        ],
        [
          16.9274525,
          49.7458765
        ],
        [
          16.9273283,
          49.7457691
        ],
        [
          16.9273812,
          49.7457437
        ],
        [
          16.9274494,
          49.7457111
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306485",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "56",
    "addr:housenumber": "56",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306485"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9279041,
          49.7454517
        ],
        [
          16.9280246,
          49.7455801
        ],
        [
          16.9281034,
          49.7457002
        ],
        [
          16.9281424,
          49.745745
        ],
        [
          16.9280656,
          49.7457711
        ],
        [
          16.9279546,
          49.7456432
        ],
        [
          16.927916,
          49.7456028
        ],
        [
          16.9278623,
          49.7456227
        ],
        [
          16.9278288,
          49.7455959
        ],
        [
          16.927723,
          49.7456348
        ],
        [
          16.9276964,
          49.7456017
        ],
        [
          16.9276786,
          49.7455794
        ],
        [
          16.9277404,
          49.7455471
        ],
        [
          16.9278311,
          49.7455124
        ],
        [
          16.9278081,
          49.7454873
        ],
        [
          16.9279041,
          49.7454517
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306486",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "34",
    "addr:housenumber": "34",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306486"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.927334,
          49.7456526
        ],
        [
          16.9272394,
          49.7456914
        ],
        [
          16.9271814,
          49.7456323
        ],
        [
          16.9272168,
          49.7456178
        ],
        [
          16.9271896,
          49.7455901
        ],
        [
          16.9272488,
          49.7455658
        ],
        [
          16.9272776,
          49.7455952
        ],
        [
          16.927334,
          49.7456526
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306487",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306487"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9270402,
          49.7453568
        ],
        [
          16.9270787,
          49.7453943
        ],
        [
          16.9269668,
          49.7454423
        ],
        [
          16.9269283,
          49.7454048
        ],
        [
          16.9270402,
          49.7453568
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306488",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306488"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9274713,
          49.7453227
        ],
        [
          16.9275145,
          49.745366
        ],
        [
          16.9273621,
          49.7454294
        ],
        [
          16.9273291,
          49.7454431
        ],
        [
          16.9271904,
          49.7455009
        ],
        [
          16.9271249,
          49.7454352
        ],
        [
          16.9272669,
          49.745376
        ],
        [
          16.9272893,
          49.7453985
        ],
        [
          16.9274713,
          49.7453227
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306489",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "62",
    "addr:housenumber": "62",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306489"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.92775,
          49.745282
        ],
        [
          16.9278619,
          49.7454014
        ],
        [
          16.9275416,
          49.7455569
        ],
        [
          16.927467,
          49.745591
        ],
        [
          16.9274153,
          49.7455378
        ],
        [
          16.927492,
          49.7455058
        ],
        [
          16.9275574,
          49.7454819
        ],
        [
          16.927581,
          49.745505
        ],
        [
          16.9276883,
          49.7454567
        ],
        [
          16.9276153,
          49.7453816
        ],
        [
          16.9273989,
          49.7454685
        ],
        [
          16.9273621,
          49.7454294
        ],
        [
          16.9275145,
          49.745366
        ],
        [
          16.9276074,
          49.745337
        ],
        [
          16.92775,
          49.745282
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306490",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306490"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9268153,
          49.7453303
        ],
        [
          16.9268651,
          49.7453841
        ],
        [
          16.9269445,
          49.7453671
        ],
        [
          16.9270303,
          49.7453437
        ],
        [
          16.9270402,
          49.7453568
        ],
        [
          16.9269283,
          49.7454048
        ],
        [
          16.9269668,
          49.7454423
        ],
        [
          16.9268526,
          49.7454716
        ],
        [
          16.9268245,
          49.7454823
        ],
        [
          16.9267367,
          49.7453588
        ],
        [
          16.9267752,
          49.7453455
        ],
        [
          16.9268153,
          49.7453303
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306491",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306491"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9273621,
          49.7454294
        ],
        [
          16.9273989,
          49.7454685
        ],
        [
          16.9272315,
          49.7455357
        ],
        [
          16.9271904,
          49.7455009
        ],
        [
          16.9273291,
          49.7454431
        ],
        [
          16.9273621,
          49.7454294
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306492",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306492"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9272776,
          49.7455952
        ],
        [
          16.9274153,
          49.7455378
        ],
        [
          16.927467,
          49.745591
        ],
        [
          16.927334,
          49.7456526
        ],
        [
          16.9272776,
          49.7455952
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306493",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306493"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9271542,
          49.7456046
        ],
        [
          16.9271896,
          49.7455901
        ],
        [
          16.9272168,
          49.7456178
        ],
        [
          16.9271814,
          49.7456323
        ],
        [
          16.9271542,
          49.7456046
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306494",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "65",
    "addr:housenumber": "65",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306494"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9272717,
          49.7450625
        ],
        [
          16.9272437,
          49.7450205
        ],
        [
          16.9273477,
          49.744987
        ],
        [
          16.9272908,
          49.7448997
        ],
        [
          16.9271171,
          49.7449362
        ],
        [
          16.9270949,
          49.7448907
        ],
        [
          16.927193,
          49.7448732
        ],
        [
          16.9274348,
          49.7448273
        ],
        [
          16.9275416,
          49.744987
        ],
        [
          16.9273138,
          49.7450463
        ],
        [
          16.9272717,
          49.7450625
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306495",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306495"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9272373,
          49.7450721
        ],
        [
          16.9272093,
          49.7450301
        ],
        [
          16.9272437,
          49.7450205
        ],
        [
          16.9272717,
          49.7450625
        ],
        [
          16.9272373,
          49.7450721
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306496",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306496"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9270199,
          49.744956
        ],
        [
          16.9270129,
          49.7449416
        ],
        [
          16.9269977,
          49.7449104
        ],
        [
          16.9270949,
          49.7448907
        ],
        [
          16.9271171,
          49.7449362
        ],
        [
          16.9270199,
          49.744956
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306497",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306497"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9266528,
          49.7449852
        ],
        [
          16.9266298,
          49.7449391
        ],
        [
          16.9266647,
          49.7449319
        ],
        [
          16.9266573,
          49.744917
        ],
        [
          16.9267146,
          49.7449051
        ],
        [
          16.926745,
          49.744966
        ],
        [
          16.9266528,
          49.7449852
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306498",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306498"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9267505,
          49.7448836
        ],
        [
          16.9267156,
          49.7448919
        ],
        [
          16.9266972,
          49.7448548
        ],
        [
          16.9267395,
          49.7448498
        ],
        [
          16.9267505,
          49.7448836
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306499",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "67",
    "addr:housenumber": "67",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306499"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9267078,
          49.7447388
        ],
        [
          16.9267395,
          49.7448498
        ],
        [
          16.9266972,
          49.7448548
        ],
        [
          16.926667,
          49.7448584
        ],
        [
          16.9266539,
          49.7448126
        ],
        [
          16.9266353,
          49.7447474
        ],
        [
          16.9267078,
          49.7447388
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306500",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "174",
    "addr:housenumber": "174",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306500"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9269282,
          49.7448577
        ],
        [
          16.9268511,
          49.7448662
        ],
        [
          16.9268402,
          49.7448253
        ],
        [
          16.9268163,
          49.7447351
        ],
        [
          16.9268935,
          49.7447265
        ],
        [
          16.9269158,
          49.7448108
        ],
        [
          16.9269282,
          49.7448577
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306501",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "66",
    "addr:housenumber": "66",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306501"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9270435,
          49.744796
        ],
        [
          16.9270177,
          49.7447148
        ],
        [
          16.9273513,
          49.744679
        ],
        [
          16.9274348,
          49.7448273
        ],
        [
          16.927193,
          49.7448732
        ],
        [
          16.9271539,
          49.7447813
        ],
        [
          16.9270435,
          49.744796
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306502",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306502"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9269282,
          49.7448577
        ],
        [
          16.9269158,
          49.7448108
        ],
        [
          16.9270052,
          49.7447999
        ],
        [
          16.9270184,
          49.7448449
        ],
        [
          16.9269282,
          49.7448577
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306526",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306526"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9282958,
          49.7462953
        ],
        [
          16.9282432,
          49.7462349
        ],
        [
          16.9285372,
          49.7461354
        ],
        [
          16.9286017,
          49.7461928
        ],
        [
          16.9282958,
          49.7462953
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306527",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306527"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9294747,
          49.7461462
        ],
        [
          16.9294432,
          49.7461639
        ],
        [
          16.9294072,
          49.7461372
        ],
        [
          16.9294386,
          49.7461195
        ],
        [
          16.9294747,
          49.7461462
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306528",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306528"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9294232,
          49.7459939
        ],
        [
          16.9293785,
          49.7460215
        ],
        [
          16.9293075,
          49.7460653
        ],
        [
          16.9292447,
          49.7460229
        ],
        [
          16.9293171,
          49.7459782
        ],
        [
          16.9293604,
          49.7459514
        ],
        [
          16.9294232,
          49.7459939
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306529",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "43",
    "addr:housenumber": "43",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306529"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9296194,
          49.7460562
        ],
        [
          16.9296411,
          49.7460715
        ],
        [
          16.9295369,
          49.7461332
        ],
        [
          16.9293785,
          49.7460215
        ],
        [
          16.9294232,
          49.7459939
        ],
        [
          16.9294825,
          49.7459597
        ],
        [
          16.9295201,
          49.7459862
        ],
        [
          16.9296194,
          49.7460562
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306530",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306530"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9299083,
          49.7458486
        ],
        [
          16.9298494,
          49.7458809
        ],
        [
          16.9298152,
          49.7458548
        ],
        [
          16.9298504,
          49.7458356
        ],
        [
          16.9298744,
          49.7458231
        ],
        [
          16.9299083,
          49.7458486
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306531",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "45",
    "addr:housenumber": "45",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306531"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.930029,
          49.7457373
        ],
        [
          16.930101,
          49.7457915
        ],
        [
          16.9299465,
          49.7458773
        ],
        [
          16.9299083,
          49.7458486
        ],
        [
          16.9298744,
          49.7458231
        ],
        [
          16.930029,
          49.7457373
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306532",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "46",
    "addr:housenumber": "46",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306532"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9299404,
          49.7456696
        ],
        [
          16.930029,
          49.7457373
        ],
        [
          16.9298744,
          49.7458231
        ],
        [
          16.9298504,
          49.7458356
        ],
        [
          16.9298152,
          49.7458548
        ],
        [
          16.9297825,
          49.745872
        ],
        [
          16.9296867,
          49.7458143
        ],
        [
          16.9297647,
          49.7457708
        ],
        [
          16.9299404,
          49.7456696
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306533",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306533"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9297825,
          49.745872
        ],
        [
          16.9298621,
          49.74592
        ],
        [
          16.9298118,
          49.7459438
        ],
        [
          16.9297382,
          49.7458955
        ],
        [
          16.9297825,
          49.745872
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306534",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306534"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9296706,
          49.7458047
        ],
        [
          16.9296867,
          49.7458143
        ],
        [
          16.9297825,
          49.745872
        ],
        [
          16.9297382,
          49.7458955
        ],
        [
          16.929635,
          49.7458267
        ],
        [
          16.9296706,
          49.7458047
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306535",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306535"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9295668,
          49.7457819
        ],
        [
          16.9295967,
          49.7457602
        ],
        [
          16.9296706,
          49.7458047
        ],
        [
          16.929635,
          49.7458267
        ],
        [
          16.9295668,
          49.7457819
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306536",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306536"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9295229,
          49.7457513
        ],
        [
          16.9294724,
          49.7457168
        ],
        [
          16.9295297,
          49.7456837
        ],
        [
          16.9295791,
          49.7457161
        ],
        [
          16.9295229,
          49.7457513
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306537",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306537"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9293229,
          49.7455347
        ],
        [
          16.9293629,
          49.7455668
        ],
        [
          16.9293315,
          49.7455832
        ],
        [
          16.9292915,
          49.7455511
        ],
        [
          16.9293229,
          49.7455347
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306538",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306538"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.929262,
          49.7455249
        ],
        [
          16.9293001,
          49.7454987
        ],
        [
          16.9293361,
          49.7455264
        ],
        [
          16.9293229,
          49.7455347
        ],
        [
          16.9292915,
          49.7455511
        ],
        [
          16.929262,
          49.7455249
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306539",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306539"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9292461,
          49.7451951
        ],
        [
          16.929442,
          49.7453486
        ],
        [
          16.9293203,
          49.7454134
        ],
        [
          16.9292738,
          49.7453753
        ],
        [
          16.9293483,
          49.7453373
        ],
        [
          16.929197,
          49.745222
        ],
        [
          16.9292461,
          49.7451951
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306540",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "172",
    "addr:housenumber": "172",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306540"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9290438,
          49.7451199
        ],
        [
          16.9291017,
          49.7450949
        ],
        [
          16.9292461,
          49.7451951
        ],
        [
          16.929197,
          49.745222
        ],
        [
          16.9291091,
          49.7452071
        ],
        [
          16.9291437,
          49.7451892
        ],
        [
          16.9290767,
          49.7451517
        ],
        [
          16.9290438,
          49.7451199
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306541",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306541"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9281753,
          49.745674
        ],
        [
          16.928333,
          49.7458553
        ],
        [
          16.9282611,
          49.7458814
        ],
        [
          16.9282384,
          49.7458553
        ],
        [
          16.9281782,
          49.7457862
        ],
        [
          16.9281424,
          49.745745
        ],
        [
          16.9281034,
          49.7457002
        ],
        [
          16.9281753,
          49.745674
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306542",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "55",
    "addr:housenumber": "55",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306542"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9281154,
          49.7453707
        ],
        [
          16.9282433,
          49.7455014
        ],
        [
          16.9282871,
          49.745545
        ],
        [
          16.9284214,
          49.7456978
        ],
        [
          16.9283586,
          49.7457206
        ],
        [
          16.9282221,
          49.7455695
        ],
        [
          16.9281808,
          49.7455247
        ],
        [
          16.9280866,
          49.7455597
        ],
        [
          16.9280961,
          49.7455735
        ],
        [
          16.9281753,
          49.745674
        ],
        [
          16.9281034,
          49.7457002
        ],
        [
          16.9280386,
          49.7455936
        ],
        [
          16.9280246,
          49.7455801
        ],
        [
          16.9279041,
          49.7454517
        ],
        [
          16.9281154,
          49.7453707
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306543",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306543"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9293616,
          49.7456098
        ],
        [
          16.9292192,
          49.7456796
        ],
        [
          16.929139,
          49.7456113
        ],
        [
          16.9291197,
          49.7455947
        ],
        [
          16.929262,
          49.7455249
        ],
        [
          16.9292915,
          49.7455511
        ],
        [
          16.9293315,
          49.7455832
        ],
        [
          16.9293616,
          49.7456098
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306544",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306544"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9289796,
          49.7454821
        ],
        [
          16.9290052,
          49.7455097
        ],
        [
          16.9290392,
          49.7455463
        ],
        [
          16.9289878,
          49.7455662
        ],
        [
          16.9289282,
          49.7455021
        ],
        [
          16.9289796,
          49.7454821
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306545",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306545"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9288964,
          49.7453925
        ],
        [
          16.9289155,
          49.7454131
        ],
        [
          16.9288641,
          49.745433
        ],
        [
          16.9288294,
          49.7454465
        ],
        [
          16.9288103,
          49.7454259
        ],
        [
          16.9288473,
          49.7454115
        ],
        [
          16.9288964,
          49.7453925
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306546",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306546"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.928502,
          49.7454366
        ],
        [
          16.928596,
          49.7455284
        ],
        [
          16.9285249,
          49.7455588
        ],
        [
          16.9284308,
          49.745467
        ],
        [
          16.928502,
          49.7454366
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306547",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306547"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9287193,
          49.7456496
        ],
        [
          16.9286472,
          49.7456802
        ],
        [
          16.9285249,
          49.7455588
        ],
        [
          16.928596,
          49.7455284
        ],
        [
          16.9287193,
          49.7456496
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306548",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306548"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9284739,
          49.7457576
        ],
        [
          16.9285412,
          49.7457278
        ],
        [
          16.9286472,
          49.7456802
        ],
        [
          16.9287193,
          49.7456496
        ],
        [
          16.9287846,
          49.7457111
        ],
        [
          16.9286806,
          49.7457571
        ],
        [
          16.9287055,
          49.7457805
        ],
        [
          16.9286399,
          49.7458095
        ],
        [
          16.9286183,
          49.7457892
        ],
        [
          16.9285429,
          49.7458226
        ],
        [
          16.9285243,
          49.7458051
        ],
        [
          16.9284739,
          49.7457576
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306549",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "54",
    "addr:housenumber": "54",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306549"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9283548,
          49.7452781
        ],
        [
          16.9284695,
          49.7454047
        ],
        [
          16.9282914,
          49.745464
        ],
        [
          16.9285412,
          49.7457278
        ],
        [
          16.9284739,
          49.7457576
        ],
        [
          16.9284214,
          49.7456978
        ],
        [
          16.9282871,
          49.745545
        ],
        [
          16.9282433,
          49.7455014
        ],
        [
          16.9281154,
          49.7453707
        ],
        [
          16.9283548,
          49.7452781
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306550",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306550"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9288895,
          49.7457392
        ],
        [
          16.9289506,
          49.7457988
        ],
        [
          16.9288969,
          49.7458218
        ],
        [
          16.9288358,
          49.7457621
        ],
        [
          16.9288895,
          49.7457392
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306551",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "52",
    "addr:housenumber": "52",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306551"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9285728,
          49.7451899
        ],
        [
          16.9286898,
          49.7453041
        ],
        [
          16.9287097,
          49.7453234
        ],
        [
          16.928567,
          49.7453844
        ],
        [
          16.9288014,
          49.7456132
        ],
        [
          16.9287193,
          49.7456496
        ],
        [
          16.928596,
          49.7455284
        ],
        [
          16.928502,
          49.7454366
        ],
        [
          16.9284695,
          49.7454047
        ],
        [
          16.9283548,
          49.7452781
        ],
        [
          16.9285728,
          49.7451899
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306552",
  "properties": {
    "building": "yes",
    "material": "wood",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306552"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9288895,
          49.7457392
        ],
        [
          16.9288358,
          49.7457621
        ],
        [
          16.9288096,
          49.7457366
        ],
        [
          16.9287846,
          49.7457111
        ],
        [
          16.9287193,
          49.7456496
        ],
        [
          16.9288014,
          49.7456132
        ],
        [
          16.9288381,
          49.7456489
        ],
        [
          16.9288095,
          49.7456611
        ],
        [
          16.9288895,
          49.7457392
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306553",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306553"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9291212,
          49.7453059
        ],
        [
          16.929202,
          49.7453821
        ],
        [
          16.9291451,
          49.7454073
        ],
        [
          16.9290642,
          49.7453311
        ],
        [
          16.9291212,
          49.7453059
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306554",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "50",
    "addr:housenumber": "50",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306554"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.929018,
          49.7450139
        ],
        [
          16.9291017,
          49.7450949
        ],
        [
          16.9290438,
          49.7451199
        ],
        [
          16.9290767,
          49.7451517
        ],
        [
          16.9289979,
          49.7451858
        ],
        [
          16.9291212,
          49.7453059
        ],
        [
          16.9290642,
          49.7453311
        ],
        [
          16.9289281,
          49.7452188
        ],
        [
          16.9288121,
          49.745101
        ],
        [
          16.929018,
          49.7450139
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306555",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "168",
    "addr:housenumber": "168",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306555"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.928382,
          49.7449235
        ],
        [
          16.9283004,
          49.7448571
        ],
        [
          16.9284167,
          49.7447973
        ],
        [
          16.9284408,
          49.7448169
        ],
        [
          16.928668,
          49.7447003
        ],
        [
          16.9286951,
          49.7447223
        ],
        [
          16.9286654,
          49.7447376
        ],
        [
          16.9286959,
          49.7447624
        ],
        [
          16.928382,
          49.7449235
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306557",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306557"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.929324,
          49.7441026
        ],
        [
          16.9293071,
          49.7440453
        ],
        [
          16.9295185,
          49.7440192
        ],
        [
          16.9295354,
          49.7440765
        ],
        [
          16.929324,
          49.7441026
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306558",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306558"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9296875,
          49.7442689
        ],
        [
          16.9296622,
          49.7442063
        ],
        [
          16.9298679,
          49.7441591
        ],
        [
          16.9299078,
          49.7442173
        ],
        [
          16.929817,
          49.7442386
        ],
        [
          16.9296875,
          49.7442689
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306559",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "124",
    "addr:housenumber": "124",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306559"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9298063,
          49.7444784
        ],
        [
          16.9297597,
          49.7443881
        ],
        [
          16.9298845,
          49.7443612
        ],
        [
          16.9299843,
          49.7443397
        ],
        [
          16.9299944,
          49.7443594
        ],
        [
          16.9300309,
          49.74443
        ],
        [
          16.9298063,
          49.7444784
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306560",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "123",
    "addr:housenumber": "123",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306560"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9293904,
          49.744317
        ],
        [
          16.9294559,
          49.7443084
        ],
        [
          16.9294734,
          49.744364
        ],
        [
          16.9294858,
          49.7444036
        ],
        [
          16.9295448,
          49.7443958
        ],
        [
          16.9295324,
          49.7443563
        ],
        [
          16.929628,
          49.7443438
        ],
        [
          16.929664,
          49.7444585
        ],
        [
          16.9296732,
          49.7444878
        ],
        [
          16.9294531,
          49.7445167
        ],
        [
          16.9294184,
          49.7444061
        ],
        [
          16.9294,
          49.7443475
        ],
        [
          16.9293904,
          49.744317
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306561",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306561"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9293796,
          49.7442826
        ],
        [
          16.9294451,
          49.744274
        ],
        [
          16.9294559,
          49.7443084
        ],
        [
          16.9293904,
          49.744317
        ],
        [
          16.9293796,
          49.7442826
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306562",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306562"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.929338,
          49.7442894
        ],
        [
          16.9293796,
          49.7442826
        ],
        [
          16.9293904,
          49.744317
        ],
        [
          16.9294,
          49.7443475
        ],
        [
          16.9293603,
          49.7443533
        ],
        [
          16.929338,
          49.7442894
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306563",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306563"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9291309,
          49.7443194
        ],
        [
          16.9291107,
          49.7442612
        ],
        [
          16.9292405,
          49.7442423
        ],
        [
          16.9292608,
          49.7443006
        ],
        [
          16.929215,
          49.7443072
        ],
        [
          16.9291309,
          49.7443194
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306564",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "122",
    "addr:housenumber": "122",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306564"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9294184,
          49.7444061
        ],
        [
          16.9294531,
          49.7445167
        ],
        [
          16.9292117,
          49.7445516
        ],
        [
          16.9291984,
          49.7445134
        ],
        [
          16.9291699,
          49.7444313
        ],
        [
          16.9291478,
          49.744368
        ],
        [
          16.9291309,
          49.7443194
        ],
        [
          16.929215,
          49.7443072
        ],
        [
          16.9292575,
          49.7444294
        ],
        [
          16.9294184,
          49.7444061
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306565",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306565"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9291984,
          49.7445134
        ],
        [
          16.9291646,
          49.7445184
        ],
        [
          16.9291357,
          49.7444363
        ],
        [
          16.9291699,
          49.7444313
        ],
        [
          16.9291984,
          49.7445134
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306566",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "121",
    "addr:housenumber": "121",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306566"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9288837,
          49.7446007
        ],
        [
          16.9288397,
          49.7444765
        ],
        [
          16.9288964,
          49.7444681
        ],
        [
          16.9290229,
          49.7444494
        ],
        [
          16.9290532,
          49.744535
        ],
        [
          16.9291646,
          49.7445184
        ],
        [
          16.9291984,
          49.7445134
        ],
        [
          16.9292117,
          49.7445516
        ],
        [
          16.9288837,
          49.7446007
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306567",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306567"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9283116,
          49.744124
        ],
        [
          16.9282742,
          49.7440197
        ],
        [
          16.928443,
          49.7439945
        ],
        [
          16.9284803,
          49.7440988
        ],
        [
          16.9283116,
          49.744124
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306568",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306568"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9283116,
          49.744124
        ],
        [
          16.9282315,
          49.744136
        ],
        [
          16.9281183,
          49.7441541
        ],
        [
          16.9280788,
          49.7440512
        ],
        [
          16.9282742,
          49.7440197
        ],
        [
          16.9283116,
          49.744124
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306569",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306569"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9286162,
          49.7443217
        ],
        [
          16.9285402,
          49.7440898
        ],
        [
          16.9285327,
          49.7440688
        ],
        [
          16.9287564,
          49.7440381
        ],
        [
          16.9287823,
          49.7441168
        ],
        [
          16.9287082,
          49.744127
        ],
        [
          16.9286477,
          49.7441353
        ],
        [
          16.9286608,
          49.7441753
        ],
        [
          16.9286073,
          49.7441826
        ],
        [
          16.9286514,
          49.7443169
        ],
        [
          16.9286162,
          49.7443217
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306570",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306570"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9284472,
          49.7442206
        ],
        [
          16.9283556,
          49.7442361
        ],
        [
          16.928339,
          49.7441954
        ],
        [
          16.9284306,
          49.7441798
        ],
        [
          16.9284472,
          49.7442206
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306571",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306571"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9283291,
          49.7441645
        ],
        [
          16.9282484,
          49.7441817
        ],
        [
          16.9282315,
          49.744136
        ],
        [
          16.9283116,
          49.744124
        ],
        [
          16.9283291,
          49.7441645
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306572",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306572"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.928152,
          49.7442408
        ],
        [
          16.9280829,
          49.7442526
        ],
        [
          16.9280712,
          49.744224
        ],
        [
          16.9280475,
          49.744166
        ],
        [
          16.9281183,
          49.7441541
        ],
        [
          16.928152,
          49.7442408
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306573",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306573"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9280712,
          49.744224
        ],
        [
          16.9279819,
          49.7442444
        ],
        [
          16.9278912,
          49.74404
        ],
        [
          16.9279831,
          49.744023
        ],
        [
          16.9279992,
          49.7440651
        ],
        [
          16.9280475,
          49.744166
        ],
        [
          16.9280712,
          49.744224
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306574",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306574"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9280051,
          49.7442967
        ],
        [
          16.9279819,
          49.7442444
        ],
        [
          16.9280712,
          49.744224
        ],
        [
          16.9280829,
          49.7442526
        ],
        [
          16.9280977,
          49.7442796
        ],
        [
          16.9280051,
          49.7442967
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306575",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306575"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9278826,
          49.744321
        ],
        [
          16.9278154,
          49.7443336
        ],
        [
          16.9277852,
          49.7442659
        ],
        [
          16.9278524,
          49.7442534
        ],
        [
          16.9278826,
          49.744321
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306576",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306576"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9273095,
          49.7442218
        ],
        [
          16.9273614,
          49.7443092
        ],
        [
          16.9273213,
          49.744319
        ],
        [
          16.9272992,
          49.7442812
        ],
        [
          16.9272606,
          49.7442906
        ],
        [
          16.9272312,
          49.7442404
        ],
        [
          16.9273095,
          49.7442218
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306577",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306577"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9272151,
          49.7443256
        ],
        [
          16.9273024,
          49.7444561
        ],
        [
          16.9273111,
          49.7444726
        ],
        [
          16.9271905,
          49.7444977
        ],
        [
          16.9270868,
          49.7443544
        ],
        [
          16.9272151,
          49.7443256
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306578",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306578"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9270409,
          49.7442855
        ],
        [
          16.9271733,
          49.7442542
        ],
        [
          16.9272151,
          49.7443256
        ],
        [
          16.9270868,
          49.7443544
        ],
        [
          16.9270409,
          49.7442855
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306579",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306579"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9272546,
          49.7441254
        ],
        [
          16.9273095,
          49.7442218
        ],
        [
          16.9272312,
          49.7442404
        ],
        [
          16.9271733,
          49.7442542
        ],
        [
          16.9270409,
          49.7442855
        ],
        [
          16.9270133,
          49.744244
        ],
        [
          16.9269782,
          49.7441912
        ],
        [
          16.9272546,
          49.7441254
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306580",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306580"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9270133,
          49.744244
        ],
        [
          16.9270409,
          49.7442855
        ],
        [
          16.9269486,
          49.7443111
        ],
        [
          16.9269211,
          49.7442691
        ],
        [
          16.9270133,
          49.744244
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306581",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306581"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9267618,
          49.7443126
        ],
        [
          16.9267418,
          49.7442818
        ],
        [
          16.9267159,
          49.7442422
        ],
        [
          16.9268722,
          49.7441996
        ],
        [
          16.9269666,
          49.7441738
        ],
        [
          16.9269782,
          49.7441912
        ],
        [
          16.9270133,
          49.744244
        ],
        [
          16.9269211,
          49.7442691
        ],
        [
          16.926869,
          49.7442834
        ],
        [
          16.9268297,
          49.7442941
        ],
        [
          16.9267618,
          49.7443126
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306582",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306582"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9268702,
          49.7444785
        ],
        [
          16.9268138,
          49.7443922
        ],
        [
          16.9267884,
          49.7443532
        ],
        [
          16.9267618,
          49.7443126
        ],
        [
          16.9268297,
          49.7442941
        ],
        [
          16.926938,
          49.74446
        ],
        [
          16.9268702,
          49.7444785
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306583",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "71",
    "addr:housenumber": "71",
    "building": "house",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306583"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9269952,
          49.7446678
        ],
        [
          16.9269877,
          49.7446523
        ],
        [
          16.926936,
          49.744566
        ],
        [
          16.9269172,
          49.7445348
        ],
        [
          16.9271137,
          49.7444856
        ],
        [
          16.9271628,
          49.7445674
        ],
        [
          16.9272064,
          49.7446344
        ],
        [
          16.9269952,
          49.7446678
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306585",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306585"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9268909,
          49.7445095
        ],
        [
          16.9269172,
          49.7445348
        ],
        [
          16.926936,
          49.744566
        ],
        [
          16.9268434,
          49.7445753
        ],
        [
          16.9268045,
          49.7445176
        ],
        [
          16.9268909,
          49.7445095
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306586",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306586"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9268138,
          49.7443922
        ],
        [
          16.9268702,
          49.7444785
        ],
        [
          16.9268909,
          49.7445095
        ],
        [
          16.9268045,
          49.7445176
        ],
        [
          16.9267278,
          49.7444038
        ],
        [
          16.9268138,
          49.7443922
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306587",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306587"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9267884,
          49.7443532
        ],
        [
          16.9268138,
          49.7443922
        ],
        [
          16.9267278,
          49.7444038
        ],
        [
          16.9267082,
          49.7443747
        ],
        [
          16.9267884,
          49.7443532
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306588",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306588"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9267082,
          49.7443747
        ],
        [
          16.9265708,
          49.744403
        ],
        [
          16.9265089,
          49.7444164
        ],
        [
          16.9264696,
          49.7443409
        ],
        [
          16.9267418,
          49.7442818
        ],
        [
          16.9267618,
          49.7443126
        ],
        [
          16.9267884,
          49.7443532
        ],
        [
          16.9267082,
          49.7443747
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306589",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "70",
    "addr:housenumber": "70",
    "building": "house",
    "material": "brick",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306589"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.926936,
          49.744566
        ],
        [
          16.9269877,
          49.7446523
        ],
        [
          16.9266613,
          49.7446744
        ],
        [
          16.9265089,
          49.7444164
        ],
        [
          16.9265708,
          49.744403
        ],
        [
          16.9266862,
          49.7445888
        ],
        [
          16.9268434,
          49.7445753
        ],
        [
          16.926936,
          49.744566
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306627",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306627"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9302911,
          49.7448304
        ],
        [
          16.9302588,
          49.7447801
        ],
        [
          16.9302435,
          49.7447563
        ],
        [
          16.9303485,
          49.7447281
        ],
        [
          16.9303666,
          49.7447563
        ],
        [
          16.9305021,
          49.74472
        ],
        [
          16.9305316,
          49.744766
        ],
        [
          16.9302911,
          49.7448304
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306628",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306628"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9299491,
          49.7447161
        ],
        [
          16.9299744,
          49.7447577
        ],
        [
          16.9299377,
          49.744767
        ],
        [
          16.9299124,
          49.7447254
        ],
        [
          16.9299491,
          49.7447161
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306629",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306629"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9299377,
          49.744767
        ],
        [
          16.9299744,
          49.7447577
        ],
        [
          16.9300745,
          49.7447339
        ],
        [
          16.9302129,
          49.744711
        ],
        [
          16.9302435,
          49.7447563
        ],
        [
          16.9302588,
          49.7447801
        ],
        [
          16.9301075,
          49.7448115
        ],
        [
          16.9299814,
          49.7448368
        ],
        [
          16.9299699,
          49.7448173
        ],
        [
          16.9299377,
          49.744767
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306630",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "9",
    "addr:housenumber": "9",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306630"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9301505,
          49.744632
        ],
        [
          16.9301434,
          49.7446226
        ],
        [
          16.9303935,
          49.7445436
        ],
        [
          16.9304799,
          49.7446579
        ],
        [
          16.9304257,
          49.7446751
        ],
        [
          16.9303757,
          49.7446256
        ],
        [
          16.9302129,
          49.744711
        ],
        [
          16.9301899,
          49.7446842
        ],
        [
          16.9301505,
          49.744632
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306631",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306631"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9297694,
          49.7447518
        ],
        [
          16.9298267,
          49.7447406
        ],
        [
          16.9298062,
          49.744705
        ],
        [
          16.9298881,
          49.7446853
        ],
        [
          16.9299124,
          49.7447254
        ],
        [
          16.9299377,
          49.744767
        ],
        [
          16.9299699,
          49.7448173
        ],
        [
          16.9298505,
          49.7448559
        ],
        [
          16.9297694,
          49.7447518
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306632",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306632"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9296594,
          49.7447868
        ],
        [
          16.9297387,
          49.7447632
        ],
        [
          16.9297694,
          49.7447518
        ],
        [
          16.9298505,
          49.7448559
        ],
        [
          16.929834,
          49.7448621
        ],
        [
          16.9297469,
          49.7448879
        ],
        [
          16.9296594,
          49.7447868
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306633",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "12",
    "addr:housenumber": "12",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306633"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.929631,
          49.7446122
        ],
        [
          16.929702,
          49.7447117
        ],
        [
          16.9297387,
          49.7447632
        ],
        [
          16.9296594,
          49.7447868
        ],
        [
          16.9296229,
          49.7447356
        ],
        [
          16.9295868,
          49.7446849
        ],
        [
          16.9295517,
          49.7446358
        ],
        [
          16.929631,
          49.7446122
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306634",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "11",
    "addr:housenumber": "11",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306634"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9298179,
          49.7445783
        ],
        [
          16.9298718,
          49.7446585
        ],
        [
          16.9298881,
          49.7446853
        ],
        [
          16.9298062,
          49.744705
        ],
        [
          16.92978,
          49.7446595
        ],
        [
          16.9297395,
          49.7445892
        ],
        [
          16.9298179,
          49.7445783
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306635",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "167",
    "addr:housenumber": "167",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306635"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9308117,
          49.7455696
        ],
        [
          16.9305869,
          49.7456678
        ],
        [
          16.9305457,
          49.7456284
        ],
        [
          16.9307704,
          49.7455302
        ],
        [
          16.9308117,
          49.7455696
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306636",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "19",
    "addr:housenumber": "19",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306636"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9306701,
          49.7457473
        ],
        [
          16.9306262,
          49.7457054
        ],
        [
          16.9307585,
          49.7456475
        ],
        [
          16.9307417,
          49.7456315
        ],
        [
          16.9308342,
          49.7455911
        ],
        [
          16.9308948,
          49.7456491
        ],
        [
          16.9306701,
          49.7457473
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306637",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306637"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9304508,
          49.7453937
        ],
        [
          16.9304853,
          49.7454246
        ],
        [
          16.9304248,
          49.7454528
        ],
        [
          16.9303903,
          49.7454219
        ],
        [
          16.9304508,
          49.7453937
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306638",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306638"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9303986,
          49.745347
        ],
        [
          16.9304508,
          49.7453937
        ],
        [
          16.9303903,
          49.7454219
        ],
        [
          16.9303382,
          49.7453752
        ],
        [
          16.9303986,
          49.745347
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306639",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306639"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9303986,
          49.745347
        ],
        [
          16.9303382,
          49.7453752
        ],
        [
          16.9303034,
          49.7453922
        ],
        [
          16.9302311,
          49.7453289
        ],
        [
          16.9302658,
          49.7453124
        ],
        [
          16.9303306,
          49.7452814
        ],
        [
          16.9303986,
          49.745347
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306640",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "20",
    "addr:housenumber": "20",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306640"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9305551,
          49.7452612
        ],
        [
          16.9306165,
          49.7452508
        ],
        [
          16.9306767,
          49.7453999
        ],
        [
          16.9306153,
          49.7454102
        ],
        [
          16.9305551,
          49.7452612
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306641",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306641"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9306068,
          49.745212
        ],
        [
          16.9305318,
          49.7452313
        ],
        [
          16.9304979,
          49.7451762
        ],
        [
          16.9305729,
          49.7451569
        ],
        [
          16.9306068,
          49.745212
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306642",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306642"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9308531,
          49.7452563
        ],
        [
          16.9307578,
          49.7452552
        ],
        [
          16.9307647,
          49.745191
        ],
        [
          16.9306068,
          49.745212
        ],
        [
          16.9305729,
          49.7451569
        ],
        [
          16.9306226,
          49.7451433
        ],
        [
          16.9308598,
          49.7451249
        ],
        [
          16.9308531,
          49.7452563
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306643",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306643"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9308486,
          49.7454089
        ],
        [
          16.9307534,
          49.7454077
        ],
        [
          16.9307578,
          49.7452552
        ],
        [
          16.9308531,
          49.7452563
        ],
        [
          16.9308486,
          49.7454089
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306644",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "18",
    "addr:housenumber": "18",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306644"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9304869,
          49.745575
        ],
        [
          16.930419,
          49.7455133
        ],
        [
          16.9306124,
          49.7454245
        ],
        [
          16.9306803,
          49.7454862
        ],
        [
          16.9304869,
          49.745575
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306645",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "17",
    "addr:housenumber": "17",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306645"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.930066,
          49.7454748
        ],
        [
          16.9301944,
          49.7454129
        ],
        [
          16.9303136,
          49.745516
        ],
        [
          16.9303421,
          49.7455406
        ],
        [
          16.9302138,
          49.7456026
        ],
        [
          16.930066,
          49.7454748
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306646",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "220",
    "addr:housenumber": "220",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306646"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9294904,
          49.7451902
        ],
        [
          16.9295333,
          49.7452214
        ],
        [
          16.9295995,
          49.7452695
        ],
        [
          16.9296634,
          49.7453161
        ],
        [
          16.9295945,
          49.7453556
        ],
        [
          16.9294215,
          49.7452297
        ],
        [
          16.9294904,
          49.7451902
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306647",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306647"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9297213,
          49.7451745
        ],
        [
          16.9297803,
          49.745224
        ],
        [
          16.9298039,
          49.7452439
        ],
        [
          16.9297188,
          49.7452862
        ],
        [
          16.9296927,
          49.7452643
        ],
        [
          16.9296695,
          49.7452759
        ],
        [
          16.9296129,
          49.7452284
        ],
        [
          16.9296592,
          49.7452054
        ],
        [
          16.9297213,
          49.7451745
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306648",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306648"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9296482,
          49.7451087
        ],
        [
          16.9297213,
          49.7451745
        ],
        [
          16.9296592,
          49.7452054
        ],
        [
          16.9296254,
          49.745175
        ],
        [
          16.9295846,
          49.7451381
        ],
        [
          16.9296482,
          49.7451087
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306649",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306649"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9297569,
          49.7448998
        ],
        [
          16.9297818,
          49.7449305
        ],
        [
          16.9298182,
          49.7449752
        ],
        [
          16.9295906,
          49.7450525
        ],
        [
          16.929519,
          49.7449809
        ],
        [
          16.9296649,
          49.7449311
        ],
        [
          16.9297569,
          49.7448998
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306650",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306650"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9295906,
          49.7450525
        ],
        [
          16.9296482,
          49.7451087
        ],
        [
          16.9295846,
          49.7451381
        ],
        [
          16.9295255,
          49.7450797
        ],
        [
          16.9295906,
          49.7450525
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306651",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306651"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9294692,
          49.7449311
        ],
        [
          16.929519,
          49.7449809
        ],
        [
          16.9295906,
          49.7450525
        ],
        [
          16.9295255,
          49.7450797
        ],
        [
          16.9293986,
          49.7449495
        ],
        [
          16.9294692,
          49.7449311
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306652",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "15",
    "addr:housenumber": "15",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306652"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9293148,
          49.7449192
        ],
        [
          16.9293778,
          49.7449066
        ],
        [
          16.9294379,
          49.7449124
        ],
        [
          16.9294692,
          49.7449311
        ],
        [
          16.9293986,
          49.7449495
        ],
        [
          16.9292727,
          49.7449823
        ],
        [
          16.9292577,
          49.7450366
        ],
        [
          16.9293921,
          49.7451375
        ],
        [
          16.9294358,
          49.7451158
        ],
        [
          16.9294842,
          49.7451507
        ],
        [
          16.9294439,
          49.7451763
        ],
        [
          16.9293853,
          49.7452132
        ],
        [
          16.9291346,
          49.7450182
        ],
        [
          16.9291076,
          49.7449852
        ],
        [
          16.9293148,
          49.7449192
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306653",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "14",
    "addr:housenumber": "14",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306653"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9291076,
          49.7449852
        ],
        [
          16.929043,
          49.7448775
        ],
        [
          16.9296229,
          49.7447356
        ],
        [
          16.9296594,
          49.7447868
        ],
        [
          16.9297469,
          49.7448879
        ],
        [
          16.9297569,
          49.7448998
        ],
        [
          16.9296649,
          49.7449311
        ],
        [
          16.9295595,
          49.744795
        ],
        [
          16.9293853,
          49.7448397
        ],
        [
          16.9293928,
          49.7448581
        ],
        [
          16.9292937,
          49.7448862
        ],
        [
          16.9293148,
          49.7449192
        ],
        [
          16.9291076,
          49.7449852
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306654",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "13",
    "addr:housenumber": "13",
    "building": "house",
    "end_date": "1951",
    "source:end_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306654"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9295517,
          49.7446358
        ],
        [
          16.9292427,
          49.7446805
        ],
        [
          16.9291481,
          49.7447029
        ],
        [
          16.9292067,
          49.7447776
        ],
        [
          16.9295868,
          49.7446849
        ],
        [
          16.9296229,
          49.7447356
        ],
        [
          16.929043,
          49.7448775
        ],
        [
          16.9289154,
          49.7446825
        ],
        [
          16.9292322,
          49.7446272
        ],
        [
          16.9294289,
          49.7446006
        ],
        [
          16.9295517,
          49.7446358
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306655",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306655"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9305043,
          49.7461366
        ],
        [
          16.9305356,
          49.7461738
        ],
        [
          16.9306408,
          49.7461369
        ],
        [
          16.9306744,
          49.7461769
        ],
        [
          16.9304671,
          49.7462496
        ],
        [
          16.9304023,
          49.7461724
        ],
        [
          16.9305043,
          49.7461366
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306656",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306656"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9304665,
          49.7460263
        ],
        [
          16.9305373,
          49.7460015
        ],
        [
          16.9305901,
          49.7460644
        ],
        [
          16.9305193,
          49.7460892
        ],
        [
          16.9304665,
          49.7460263
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306657",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "35",
    "addr:housenumber": "35",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306657"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9304508,
          49.7460076
        ],
        [
          16.9304665,
          49.7460263
        ],
        [
          16.9305193,
          49.7460892
        ],
        [
          16.930477,
          49.7461041
        ],
        [
          16.9305043,
          49.7461366
        ],
        [
          16.9304023,
          49.7461724
        ],
        [
          16.9303064,
          49.7460583
        ],
        [
          16.9304508,
          49.7460076
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306658",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "38",
    "addr:housenumber": "38",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306658"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9303261,
          49.7462193
        ],
        [
          16.9304123,
          49.7462921
        ],
        [
          16.9304093,
          49.7463358
        ],
        [
          16.9303238,
          49.7463726
        ],
        [
          16.9302922,
          49.7463474
        ],
        [
          16.9303343,
          49.7463261
        ],
        [
          16.9303156,
          49.746309
        ],
        [
          16.9302507,
          49.7462494
        ],
        [
          16.9303261,
          49.7462193
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306659",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306659"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.929885,
          49.7461725
        ],
        [
          16.9299096,
          49.7461948
        ],
        [
          16.9299354,
          49.7462183
        ],
        [
          16.9298776,
          49.7462448
        ],
        [
          16.9298273,
          49.746199
        ],
        [
          16.929885,
          49.7461725
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306660",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "41",
    "addr:housenumber": "41",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306660"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9300207,
          49.7460475
        ],
        [
          16.9301169,
          49.7461346
        ],
        [
          16.9299354,
          49.7462183
        ],
        [
          16.9299096,
          49.7461948
        ],
        [
          16.9299641,
          49.7461697
        ],
        [
          16.9298938,
          49.746106
        ],
        [
          16.9300207,
          49.7460475
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306661",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306661"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.929954,
          49.7459926
        ],
        [
          16.9300051,
          49.7460352
        ],
        [
          16.9299054,
          49.7460839
        ],
        [
          16.9298058,
          49.7459998
        ],
        [
          16.9298582,
          49.7459739
        ],
        [
          16.9299076,
          49.7460156
        ],
        [
          16.929954,
          49.7459926
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306662",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "42",
    "addr:housenumber": "42",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306662"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9301505,
          49.7458461
        ],
        [
          16.9302378,
          49.7459189
        ],
        [
          16.9300051,
          49.7460352
        ],
        [
          16.929954,
          49.7459926
        ],
        [
          16.9299382,
          49.7459794
        ],
        [
          16.9300092,
          49.7459439
        ],
        [
          16.9299888,
          49.7459269
        ],
        [
          16.9301505,
          49.7458461
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306779",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "260",
    "addr:housenumber": "260",
    "building": "house",
    "material": "brick",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306779"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.925974,
          49.7414003
        ],
        [
          16.9257505,
          49.7413853
        ],
        [
          16.9257544,
          49.7413605
        ],
        [
          16.9257225,
          49.7413584
        ],
        [
          16.9257363,
          49.7412726
        ],
        [
          16.9259918,
          49.7412897
        ],
        [
          16.925974,
          49.7414003
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306780",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306780"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9248796,
          49.7414229
        ],
        [
          16.9247141,
          49.7414369
        ],
        [
          16.9246956,
          49.7413461
        ],
        [
          16.9248612,
          49.741332
        ],
        [
          16.9248796,
          49.7414229
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306781",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306781"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9248796,
          49.7414229
        ],
        [
          16.9248612,
          49.741332
        ],
        [
          16.9250207,
          49.7413185
        ],
        [
          16.9250391,
          49.7414093
        ],
        [
          16.9248796,
          49.7414229
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306782",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "261",
    "addr:housenumber": "261",
    "building": "house",
    "material": "brick",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306782"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9245702,
          49.7414945
        ],
        [
          16.9245326,
          49.7413678
        ],
        [
          16.9246244,
          49.7413564
        ],
        [
          16.924662,
          49.7414831
        ],
        [
          16.9245702,
          49.7414945
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306783",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306783"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9255299,
          49.7411675
        ],
        [
          16.9255464,
          49.7410452
        ],
        [
          16.9256708,
          49.7410522
        ],
        [
          16.9256543,
          49.7411745
        ],
        [
          16.9255299,
          49.7411675
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306784",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306784"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9253633,
          49.7411764
        ],
        [
          16.925375,
          49.7411312
        ],
        [
          16.925453,
          49.7411396
        ],
        [
          16.9254413,
          49.7411848
        ],
        [
          16.9253633,
          49.7411764
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306785",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306785"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.924942,
          49.7412611
        ],
        [
          16.9249356,
          49.7412001
        ],
        [
          16.9252304,
          49.7411883
        ],
        [
          16.9252347,
          49.7412458
        ],
        [
          16.924942,
          49.7412611
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306786",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306786"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9244981,
          49.7412285
        ],
        [
          16.9245046,
          49.7411738
        ],
        [
          16.9246804,
          49.7411856
        ],
        [
          16.9246675,
          49.7412438
        ],
        [
          16.9244981,
          49.7412285
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306787",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306787"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9243695,
          49.7411218
        ],
        [
          16.9244081,
          49.7410588
        ],
        [
          16.9246075,
          49.7410996
        ],
        [
          16.924585,
          49.7411378
        ],
        [
          16.9244799,
          49.7411142
        ],
        [
          16.9244413,
          49.741196
        ],
        [
          16.9243459,
          49.7411807
        ],
        [
          16.9243695,
          49.7411218
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306788",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306788"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9242183,
          49.7410186
        ],
        [
          16.9243084,
          49.7410643
        ],
        [
          16.9242848,
          49.7410837
        ],
        [
          16.9243695,
          49.7411218
        ],
        [
          16.9243459,
          49.7411807
        ],
        [
          16.9241454,
          49.7410899
        ],
        [
          16.9242183,
          49.7410186
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306789",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306789"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9262844,
          49.7415829
        ],
        [
          16.9262564,
          49.7415774
        ],
        [
          16.9262153,
          49.7415694
        ],
        [
          16.9261546,
          49.7415556
        ],
        [
          16.9260421,
          49.7415285
        ],
        [
          16.9261118,
          49.7414066
        ],
        [
          16.9262254,
          49.7414288
        ],
        [
          16.9261922,
          49.7415098
        ],
        [
          16.9262766,
          49.7415232
        ],
        [
          16.9266039,
          49.7415637
        ],
        [
          16.9266071,
          49.7416061
        ],
        [
          16.9263712,
          49.7415978
        ],
        [
          16.9262844,
          49.7415829
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306790",
  "properties": {
    "building": "yes",
    "material": "wood",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306790"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9261611,
          49.7416855
        ],
        [
          16.9262153,
          49.7415694
        ],
        [
          16.9262564,
          49.7415774
        ],
        [
          16.9262844,
          49.7415829
        ],
        [
          16.926238,
          49.7416821
        ],
        [
          16.9262301,
          49.741699
        ],
        [
          16.9261611,
          49.7416855
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306791",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "82",
    "addr:housenumber": "82",
    "building": "house",
    "material": "brick",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306791"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9265867,
          49.7417418
        ],
        [
          16.926375,
          49.7417429
        ],
        [
          16.9262697,
          49.7417435
        ],
        [
          16.9262691,
          49.7416877
        ],
        [
          16.926586,
          49.741686
        ],
        [
          16.9265867,
          49.7417418
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306792",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "218",
    "addr:housenumber": "218",
    "building": "house",
    "material": "brick",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306792"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.926377,
          49.7417706
        ],
        [
          16.926375,
          49.7417429
        ],
        [
          16.9265867,
          49.7417418
        ],
        [
          16.926639,
          49.7417391
        ],
        [
          16.9266449,
          49.7418096
        ],
        [
          16.9265523,
          49.7418128
        ],
        [
          16.9265483,
          49.7417646
        ],
        [
          16.926377,
          49.7417706
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306793",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306793"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9259027,
          49.7411409
        ],
        [
          16.925989,
          49.7410349
        ],
        [
          16.9260117,
          49.7410426
        ],
        [
          16.9260399,
          49.741008
        ],
        [
          16.9261164,
          49.741034
        ],
        [
          16.9260018,
          49.7411746
        ],
        [
          16.9259027,
          49.7411409
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306794",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306794"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9263418,
          49.7411263
        ],
        [
          16.9262677,
          49.7410994
        ],
        [
          16.926146,
          49.7410553
        ],
        [
          16.9261909,
          49.7410036
        ],
        [
          16.9263867,
          49.7410746
        ],
        [
          16.9263418,
          49.7411263
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306795",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306795"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.92628,
          49.7411975
        ],
        [
          16.9262059,
          49.7411706
        ],
        [
          16.9262677,
          49.7410994
        ],
        [
          16.9263418,
          49.7411263
        ],
        [
          16.92628,
          49.7411975
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306796",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306796"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9264026,
          49.7413076
        ],
        [
          16.9262383,
          49.7412493
        ],
        [
          16.92628,
          49.7411975
        ],
        [
          16.926437,
          49.7412472
        ],
        [
          16.9264026,
          49.7413076
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306797",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "88",
    "addr:housenumber": "88",
    "building": "house",
    "material": "brick",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306797"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.926611,
          49.7413571
        ],
        [
          16.9264026,
          49.7413076
        ],
        [
          16.926437,
          49.7412472
        ],
        [
          16.9266454,
          49.7412967
        ],
        [
          16.926611,
          49.7413571
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306798",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306798"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9266382,
          49.7411863
        ],
        [
          16.9266167,
          49.7410491
        ],
        [
          16.9266897,
          49.7410491
        ],
        [
          16.9267047,
          49.7411003
        ],
        [
          16.9268676,
          49.7411267
        ],
        [
          16.9268504,
          49.7411873
        ],
        [
          16.9267983,
          49.7413984
        ],
        [
          16.9266859,
          49.7413868
        ],
        [
          16.9267381,
          49.7411757
        ],
        [
          16.9266382,
          49.7411863
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306799",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306799"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9275206,
          49.741189
        ],
        [
          16.9272772,
          49.7412001
        ],
        [
          16.9272761,
          49.7411502
        ],
        [
          16.9274273,
          49.7411412
        ],
        [
          16.9274477,
          49.7410234
        ],
        [
          16.927541,
          49.7410269
        ],
        [
          16.9275206,
          49.741189
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306802",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "96",
    "addr:housenumber": "96",
    "building": "house",
    "material": "brick",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306802"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9275557,
          49.7415939
        ],
        [
          16.9275981,
          49.7416261
        ],
        [
          16.9274487,
          49.7417084
        ],
        [
          16.9274063,
          49.7416762
        ],
        [
          16.9275557,
          49.7415939
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306803",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306803"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.927537,
          49.741486
        ],
        [
          16.9276697,
          49.7415866
        ],
        [
          16.9275981,
          49.7416261
        ],
        [
          16.9275557,
          49.7415939
        ],
        [
          16.9275108,
          49.7415599
        ],
        [
          16.9274803,
          49.7415767
        ],
        [
          16.9274348,
          49.7415423
        ],
        [
          16.9274653,
          49.7415254
        ],
        [
          16.927537,
          49.741486
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306804",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306804"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9279108,
          49.7420079
        ],
        [
          16.9278126,
          49.7420089
        ],
        [
          16.9278118,
          49.7419743
        ],
        [
          16.9277214,
          49.7419752
        ],
        [
          16.9277199,
          49.7419122
        ],
        [
          16.927719,
          49.7418098
        ],
        [
          16.9276887,
          49.7418099
        ],
        [
          16.9276883,
          49.7417809
        ],
        [
          16.9276881,
          49.7417636
        ],
        [
          16.9276878,
          49.7417376
        ],
        [
          16.9276871,
          49.7416776
        ],
        [
          16.9277342,
          49.7416774
        ],
        [
          16.9277337,
          49.7416378
        ],
        [
          16.9279336,
          49.7416368
        ],
        [
          16.9279348,
          49.7417324
        ],
        [
          16.9279352,
          49.7417636
        ],
        [
          16.9279353,
          49.741772
        ],
        [
          16.9279355,
          49.7417923
        ],
        [
          16.9279355,
          49.7418454
        ],
        [
          16.9279384,
          49.741968
        ],
        [
          16.9279099,
          49.7419683
        ],
        [
          16.9279108,
          49.7420079
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306805",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306805"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9283584,
          49.7419946
        ],
        [
          16.9282862,
          49.7417885
        ],
        [
          16.9283608,
          49.7417776
        ],
        [
          16.9284329,
          49.7419837
        ],
        [
          16.9283584,
          49.7419946
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306806",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306806"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9278808,
          49.7420808
        ],
        [
          16.9279108,
          49.7420079
        ],
        [
          16.9281778,
          49.7419595
        ],
        [
          16.9281649,
          49.7419362
        ],
        [
          16.9281132,
          49.7418436
        ],
        [
          16.9279355,
          49.7418454
        ],
        [
          16.9279355,
          49.7417923
        ],
        [
          16.9281119,
          49.7417905
        ],
        [
          16.9281928,
          49.7417821
        ],
        [
          16.9282605,
          49.7419159
        ],
        [
          16.9283065,
          49.7420066
        ],
        [
          16.9278808,
          49.7420808
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306807",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306807"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9272579,
          49.7417891
        ],
        [
          16.9275967,
          49.7418708
        ],
        [
          16.9276096,
          49.7419247
        ],
        [
          16.927646,
          49.7420773
        ],
        [
          16.9276696,
          49.7420773
        ],
        [
          16.9276996,
          49.742166
        ],
        [
          16.9275817,
          49.7421826
        ],
        [
          16.927552,
          49.7420801
        ],
        [
          16.9275131,
          49.7419457
        ],
        [
          16.9272172,
          49.7418653
        ],
        [
          16.9272579,
          49.7417891
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306808",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306808"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9288212,
          49.742172
        ],
        [
          16.9288946,
          49.7421222
        ],
        [
          16.9289842,
          49.7421775
        ],
        [
          16.928927,
          49.7422162
        ],
        [
          16.9288907,
          49.7421939
        ],
        [
          16.9288745,
          49.7422049
        ],
        [
          16.9288212,
          49.742172
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306809",
  "properties": {
    "building": "yes",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306809"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9287187,
          49.7420418
        ],
        [
          16.9288035,
          49.742033
        ],
        [
          16.9288141,
          49.7420759
        ],
        [
          16.9287294,
          49.7420847
        ],
        [
          16.9287187,
          49.7420418
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306810",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306810"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9286255,
          49.7420515
        ],
        [
          16.9286199,
          49.7420273
        ],
        [
          16.9286098,
          49.7419902
        ],
        [
          16.9288151,
          49.741967
        ],
        [
          16.9288251,
          49.7420041
        ],
        [
          16.9288312,
          49.7420302
        ],
        [
          16.9288035,
          49.742033
        ],
        [
          16.9287187,
          49.7420418
        ],
        [
          16.9286255,
          49.7420515
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306811",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306811"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9279299,
          49.7421895
        ],
        [
          16.9279088,
          49.7421384
        ],
        [
          16.9281485,
          49.742097
        ],
        [
          16.9282442,
          49.7420832
        ],
        [
          16.928263,
          49.7421321
        ],
        [
          16.9281696,
          49.7421481
        ],
        [
          16.9281916,
          49.7421985
        ],
        [
          16.9281225,
          49.7422096
        ],
        [
          16.9281033,
          49.7421596
        ],
        [
          16.9279299,
          49.7421895
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306813",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "188",
    "addr:housenumber": "188",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306813"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9286159,
          49.7421716
        ],
        [
          16.9286669,
          49.7421355
        ],
        [
          16.9287763,
          49.7422
        ],
        [
          16.9288179,
          49.7422244
        ],
        [
          16.9287669,
          49.7422606
        ],
        [
          16.9286159,
          49.7421716
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306814",
  "properties": {
    "building": "yes",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306814"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9285048,
          49.7420794
        ],
        [
          16.9285638,
          49.7420697
        ],
        [
          16.9286067,
          49.7421071
        ],
        [
          16.9285467,
          49.7421279
        ],
        [
          16.9285048,
          49.7420794
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306815",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306815"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9262835,
          49.7418298
        ],
        [
          16.926352,
          49.7418612
        ],
        [
          16.9262992,
          49.7419094
        ],
        [
          16.9262307,
          49.7418781
        ],
        [
          16.9262835,
          49.7418298
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306816",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "wikidata": "Q30730419",
    "id": "way/198306816"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9266661,
          49.7420022
        ],
        [
          16.9263637,
          49.7419882
        ],
        [
          16.9263715,
          49.7419173
        ],
        [
          16.9264335,
          49.7419202
        ],
        [
          16.9264365,
          49.7418933
        ],
        [
          16.9264405,
          49.7418567
        ],
        [
          16.9265136,
          49.74186
        ],
        [
          16.9265097,
          49.7418967
        ],
        [
          16.9266769,
          49.7419045
        ],
        [
          16.9266661,
          49.7420022
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306817",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306817"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9266931,
          49.7420907
        ],
        [
          16.9267164,
          49.7421526
        ],
        [
          16.9267379,
          49.7421992
        ],
        [
          16.9264827,
          49.7422449
        ],
        [
          16.9264585,
          49.7421884
        ],
        [
          16.9262324,
          49.7422288
        ],
        [
          16.9261467,
          49.7420288
        ],
        [
          16.9262695,
          49.7420068
        ],
        [
          16.9263322,
          49.7421532
        ],
        [
          16.9265141,
          49.7421188
        ],
        [
          16.9266931,
          49.7420907
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306818",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306818"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9270789,
          49.7428388
        ],
        [
          16.9270864,
          49.7429531
        ],
        [
          16.9267486,
          49.7429933
        ],
        [
          16.9267323,
          49.742936
        ],
        [
          16.9267228,
          49.7429026
        ],
        [
          16.9269257,
          49.7428785
        ],
        [
          16.9269202,
          49.7428568
        ],
        [
          16.9270789,
          49.7428388
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306819",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306819"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9267929,
          49.7434389
        ],
        [
          16.9267761,
          49.7433909
        ],
        [
          16.9268733,
          49.7433767
        ],
        [
          16.9268901,
          49.7434247
        ],
        [
          16.9268427,
          49.7434311
        ],
        [
          16.9267929,
          49.7434389
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306820",
  "properties": {
    "building": "yes",
    "material": "wood",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306820"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9266992,
          49.7432526
        ],
        [
          16.9265974,
          49.743269
        ],
        [
          16.9265905,
          49.7432514
        ],
        [
          16.9265666,
          49.7431898
        ],
        [
          16.9266685,
          49.7431733
        ],
        [
          16.9266992,
          49.7432526
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306821",
  "properties": {
    "building": "yes",
    "material": "wood",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306821"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9266992,
          49.7432526
        ],
        [
          16.9267339,
          49.743342
        ],
        [
          16.926632,
          49.7433585
        ],
        [
          16.9265974,
          49.743269
        ],
        [
          16.9266992,
          49.7432526
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306822",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "76",
    "addr:housenumber": "76",
    "building": "house",
    "material": "brick",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306822"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9270907,
          49.743188
        ],
        [
          16.9270896,
          49.7432482
        ],
        [
          16.9267894,
          49.7432759
        ],
        [
          16.9267819,
          49.7432171
        ],
        [
          16.9270907,
          49.743188
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306823",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "77",
    "addr:housenumber": "77",
    "building": "house",
    "material": "brick",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306823"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9270864,
          49.7430397
        ],
        [
          16.9270864,
          49.7431263
        ],
        [
          16.9268462,
          49.7431395
        ],
        [
          16.9268312,
          49.7430639
        ],
        [
          16.9270864,
          49.7430397
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306824",
  "properties": {
    "building": "yes",
    "material": "wood",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306824"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9266425,
          49.7428741
        ],
        [
          16.9266565,
          49.7429113
        ],
        [
          16.9266693,
          49.7429455
        ],
        [
          16.926501,
          49.7429719
        ],
        [
          16.9264729,
          49.7428965
        ],
        [
          16.9266425,
          49.7428741
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306825",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306825"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9269738,
          49.7426981
        ],
        [
          16.9269949,
          49.7426941
        ],
        [
          16.927031,
          49.7427732
        ],
        [
          16.9268902,
          49.7428
        ],
        [
          16.9268541,
          49.7427209
        ],
        [
          16.9269738,
          49.7426981
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306826",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306826"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9267411,
          49.7427397
        ],
        [
          16.9266607,
          49.7427542
        ],
        [
          16.9266361,
          49.7426973
        ],
        [
          16.9266107,
          49.7426387
        ],
        [
          16.9266911,
          49.7426242
        ],
        [
          16.9267162,
          49.7426822
        ],
        [
          16.9267411,
          49.7427397
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306827",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "227",
    "addr:housenumber": "227",
    "building": "house",
    "material": "brick",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306827"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9269738,
          49.7426981
        ],
        [
          16.9268541,
          49.7427209
        ],
        [
          16.9268314,
          49.7427252
        ],
        [
          16.9267767,
          49.7426054
        ],
        [
          16.9269191,
          49.7425782
        ],
        [
          16.9269738,
          49.7426981
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306828",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306828"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.926209,
          49.7425224
        ],
        [
          16.9261808,
          49.7424524
        ],
        [
          16.9264336,
          49.7424095
        ],
        [
          16.9265265,
          49.7423942
        ],
        [
          16.9265697,
          49.7423867
        ],
        [
          16.9265829,
          49.7424194
        ],
        [
          16.9266659,
          49.7424054
        ],
        [
          16.926681,
          49.7424426
        ],
        [
          16.926209,
          49.7425224
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306829",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306829"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9262627,
          49.7426553
        ],
        [
          16.926209,
          49.7425224
        ],
        [
          16.926681,
          49.7424426
        ],
        [
          16.9267011,
          49.7424922
        ],
        [
          16.9267866,
          49.742478
        ],
        [
          16.926892,
          49.7424597
        ],
        [
          16.9269266,
          49.7425425
        ],
        [
          16.9266617,
          49.7425887
        ],
        [
          16.9265991,
          49.7425986
        ],
        [
          16.9262627,
          49.7426553
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306830",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306830"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9266352,
          49.7438361
        ],
        [
          16.9266238,
          49.7438061
        ],
        [
          16.9268021,
          49.7437779
        ],
        [
          16.9268134,
          49.7438078
        ],
        [
          16.9267155,
          49.7438233
        ],
        [
          16.9266352,
          49.7438361
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306838",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306838"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9287588,
          49.742854
        ],
        [
          16.9287269,
          49.742835
        ],
        [
          16.9286067,
          49.7427632
        ],
        [
          16.9286736,
          49.7427241
        ],
        [
          16.9287403,
          49.7427597
        ],
        [
          16.9287977,
          49.7427962
        ],
        [
          16.9288493,
          49.7428291
        ],
        [
          16.9287588,
          49.742854
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306839",
  "properties": {
    "building": "yes",
    "material": "brick",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306839"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9287236,
          49.7429458
        ],
        [
          16.928671,
          49.7428782
        ],
        [
          16.9287588,
          49.742854
        ],
        [
          16.9288493,
          49.7428291
        ],
        [
          16.9289423,
          49.7428034
        ],
        [
          16.9289477,
          49.7428859
        ],
        [
          16.9287236,
          49.7429458
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306840",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "103",
    "addr:housenumber": "103",
    "building": "house",
    "material": "brick",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306840"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9286378,
          49.743146
        ],
        [
          16.928575,
          49.7429677
        ],
        [
          16.9287236,
          49.7429458
        ],
        [
          16.9287863,
          49.7431242
        ],
        [
          16.9286378,
          49.743146
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306841",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306841"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9288049,
          49.7426448
        ],
        [
          16.9288549,
          49.7426821
        ],
        [
          16.9289127,
          49.7427228
        ],
        [
          16.9288141,
          49.7427812
        ],
        [
          16.9287057,
          49.7427047
        ],
        [
          16.9288049,
          49.7426448
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306842",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306842"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9286067,
          49.7427632
        ],
        [
          16.9285552,
          49.7427244
        ],
        [
          16.9286266,
          49.7426916
        ],
        [
          16.9286085,
          49.7426791
        ],
        [
          16.9286502,
          49.7426539
        ],
        [
          16.9286194,
          49.7426326
        ],
        [
          16.9285176,
          49.7425555
        ],
        [
          16.9285944,
          49.7424925
        ],
        [
          16.928709,
          49.7425785
        ],
        [
          16.9288049,
          49.7426448
        ],
        [
          16.9287057,
          49.7427047
        ],
        [
          16.9286736,
          49.7427241
        ],
        [
          16.9286067,
          49.7427632
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306843",
  "properties": {
    "building": "yes",
    "material": "wood",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306843"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9282963,
          49.7427217
        ],
        [
          16.9283553,
          49.7426845
        ],
        [
          16.9283773,
          49.7426706
        ],
        [
          16.9285548,
          49.742788
        ],
        [
          16.9284738,
          49.7428391
        ],
        [
          16.9282963,
          49.7427217
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306846",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306846"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9275537,
          49.7429533
        ],
        [
          16.927616,
          49.7429505
        ],
        [
          16.9276248,
          49.7430306
        ],
        [
          16.9275336,
          49.7430335
        ],
        [
          16.9275216,
          49.7429548
        ],
        [
          16.9275537,
          49.7429533
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306847",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "109",
    "addr:housenumber": "109",
    "building": "house",
    "material": "brick",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306847"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9272187,
          49.7429653
        ],
        [
          16.9272113,
          49.7428862
        ],
        [
          16.9275461,
          49.7428731
        ],
        [
          16.9275537,
          49.7429533
        ],
        [
          16.9275216,
          49.7429548
        ],
        [
          16.9272737,
          49.7429631
        ],
        [
          16.9272187,
          49.7429653
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306848",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306848"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9272233,
          49.7430142
        ],
        [
          16.9272187,
          49.7429653
        ],
        [
          16.9272737,
          49.7429631
        ],
        [
          16.9272783,
          49.7430121
        ],
        [
          16.9272233,
          49.7430142
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306849",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306849"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9272128,
          49.7431706
        ],
        [
          16.9272088,
          49.743119
        ],
        [
          16.92746,
          49.7431109
        ],
        [
          16.9275393,
          49.7431083
        ],
        [
          16.9275336,
          49.7430335
        ],
        [
          16.9276248,
          49.7430306
        ],
        [
          16.9276304,
          49.7431028
        ],
        [
          16.9276346,
          49.7431571
        ],
        [
          16.9274613,
          49.7431626
        ],
        [
          16.9272128,
          49.7431706
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306850",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306850"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9272125,
          49.7432612
        ],
        [
          16.9272056,
          49.7432056
        ],
        [
          16.9273431,
          49.7431985
        ],
        [
          16.92735,
          49.7432541
        ],
        [
          16.9272125,
          49.7432612
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306851",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306851"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9275495,
          49.7433305
        ],
        [
          16.9275281,
          49.7432419
        ],
        [
          16.9275192,
          49.7432047
        ],
        [
          16.9276288,
          49.7431937
        ],
        [
          16.9276378,
          49.7432308
        ],
        [
          16.9276805,
          49.7432266
        ],
        [
          16.9276908,
          49.7432693
        ],
        [
          16.927648,
          49.7432736
        ],
        [
          16.9276591,
          49.7433195
        ],
        [
          16.9275495,
          49.7433305
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306852",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "111",
    "addr:housenumber": "111",
    "building": "house",
    "material": "brick",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306852"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9272236,
          49.7433972
        ],
        [
          16.9272193,
          49.7433328
        ],
        [
          16.9274573,
          49.7433213
        ],
        [
          16.9274681,
          49.7433799
        ],
        [
          16.9272236,
          49.7433972
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306853",
  "properties": {
    "building": "yes",
    "material": "brick",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306853"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9272239,
          49.7434755
        ],
        [
          16.9272255,
          49.7434086
        ],
        [
          16.927426,
          49.7433989
        ],
        [
          16.9274329,
          49.7434665
        ],
        [
          16.9272239,
          49.7434755
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306854",
  "properties": {
    "building": "yes",
    "material": "wood",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306854"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9279055,
          49.7429318
        ],
        [
          16.9277798,
          49.7429391
        ],
        [
          16.9277614,
          49.7428078
        ],
        [
          16.9278871,
          49.7428005
        ],
        [
          16.9279055,
          49.7429318
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306900",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306900"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9315553,
          49.7420779
        ],
        [
          16.9316356,
          49.7421283
        ],
        [
          16.9315777,
          49.7421668
        ],
        [
          16.9314974,
          49.7421165
        ],
        [
          16.9315553,
          49.7420779
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306901",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306901"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9313677,
          49.7420351
        ],
        [
          16.9314256,
          49.7419966
        ],
        [
          16.9315553,
          49.7420779
        ],
        [
          16.9314974,
          49.7421165
        ],
        [
          16.9313677,
          49.7420351
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306902",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306902"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.931133,
          49.7418523
        ],
        [
          16.9311978,
          49.7418186
        ],
        [
          16.9313059,
          49.7419054
        ],
        [
          16.931241,
          49.7419391
        ],
        [
          16.931133,
          49.7418523
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306903",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306903"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9306537,
          49.7415828
        ],
        [
          16.9306945,
          49.7415418
        ],
        [
          16.930898,
          49.7416264
        ],
        [
          16.9308572,
          49.7416674
        ],
        [
          16.9306537,
          49.7415828
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306904",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306904"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9303917,
          49.7413511
        ],
        [
          16.9305058,
          49.7414216
        ],
        [
          16.9304493,
          49.7414598
        ],
        [
          16.9303352,
          49.7413893
        ],
        [
          16.9303917,
          49.7413511
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306905",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306905"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9302172,
          49.7413166
        ],
        [
          16.9302749,
          49.7412781
        ],
        [
          16.9303917,
          49.7413511
        ],
        [
          16.9303352,
          49.7413893
        ],
        [
          16.9302172,
          49.7413166
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306906",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306906"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9299075,
          49.7412988
        ],
        [
          16.9299811,
          49.7412587
        ],
        [
          16.9300533,
          49.741314
        ],
        [
          16.9299797,
          49.7413541
        ],
        [
          16.9299075,
          49.7412988
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306907",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306907"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9298875,
          49.7414026
        ],
        [
          16.9298169,
          49.7413473
        ],
        [
          16.9299075,
          49.7412988
        ],
        [
          16.9299797,
          49.7413541
        ],
        [
          16.9298875,
          49.7414026
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306908",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306908"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9300956,
          49.7413358
        ],
        [
          16.9301856,
          49.7413821
        ],
        [
          16.9301733,
          49.7413921
        ],
        [
          16.9302379,
          49.7414254
        ],
        [
          16.9301157,
          49.7415246
        ],
        [
          16.9300358,
          49.7414836
        ],
        [
          16.9301235,
          49.7414124
        ],
        [
          16.9300487,
          49.7413739
        ],
        [
          16.9300956,
          49.7413358
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306909",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306909"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9302137,
          49.7416044
        ],
        [
          16.9301586,
          49.741561
        ],
        [
          16.9303155,
          49.7414778
        ],
        [
          16.9303705,
          49.7415212
        ],
        [
          16.9302137,
          49.7416044
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306910",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306910"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9302389,
          49.7417683
        ],
        [
          16.9301846,
          49.74172
        ],
        [
          16.9303935,
          49.741622
        ],
        [
          16.9304478,
          49.7416703
        ],
        [
          16.9302389,
          49.7417683
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306911",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306911"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9303202,
          49.7418577
        ],
        [
          16.9302719,
          49.7418133
        ],
        [
          16.93043,
          49.7417414
        ],
        [
          16.9304784,
          49.7417858
        ],
        [
          16.9303202,
          49.7418577
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306912",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306912"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9305945,
          49.7417825
        ],
        [
          16.9307074,
          49.7417024
        ],
        [
          16.930748,
          49.7417262
        ],
        [
          16.9306351,
          49.7418064
        ],
        [
          16.9305945,
          49.7417825
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306913",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306913"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9306351,
          49.7418064
        ],
        [
          16.9306859,
          49.7418416
        ],
        [
          16.9306424,
          49.741869
        ],
        [
          16.9305882,
          49.741833
        ],
        [
          16.9306351,
          49.7418064
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306914",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306914"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9307615,
          49.7418099
        ],
        [
          16.9308101,
          49.7417746
        ],
        [
          16.9308984,
          49.7418254
        ],
        [
          16.9309125,
          49.7418151
        ],
        [
          16.93095,
          49.7418367
        ],
        [
          16.9308873,
          49.7418822
        ],
        [
          16.9307615,
          49.7418099
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306915",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306915"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9309034,
          49.7420257
        ],
        [
          16.9308274,
          49.7419552
        ],
        [
          16.930878,
          49.7419324
        ],
        [
          16.9309539,
          49.7420029
        ],
        [
          16.9309034,
          49.7420257
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306916",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306916"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9309034,
          49.7420257
        ],
        [
          16.9309539,
          49.7420029
        ],
        [
          16.9310222,
          49.7420672
        ],
        [
          16.9309764,
          49.7420933
        ],
        [
          16.9309034,
          49.7420257
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306917",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306917"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9310363,
          49.741954
        ],
        [
          16.93111,
          49.7419142
        ],
        [
          16.9311606,
          49.7419534
        ],
        [
          16.9310869,
          49.7419932
        ],
        [
          16.9310363,
          49.741954
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306918",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306918"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9304558,
          49.7420861
        ],
        [
          16.930614,
          49.7420141
        ],
        [
          16.9306547,
          49.7420514
        ],
        [
          16.9304964,
          49.7421234
        ],
        [
          16.9304558,
          49.7420861
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306919",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306919"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9306045,
          49.7421448
        ],
        [
          16.9306982,
          49.742229
        ],
        [
          16.9306187,
          49.742266
        ],
        [
          16.930525,
          49.7421817
        ],
        [
          16.9306045,
          49.7421448
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306920",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306920"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9306891,
          49.7423589
        ],
        [
          16.9308541,
          49.7422894
        ],
        [
          16.9308969,
          49.7423318
        ],
        [
          16.9307318,
          49.7424013
        ],
        [
          16.9306891,
          49.7423589
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306921",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306921"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9309764,
          49.7420933
        ],
        [
          16.9310222,
          49.7420672
        ],
        [
          16.9311291,
          49.7420062
        ],
        [
          16.9312027,
          49.7420584
        ],
        [
          16.9310996,
          49.7421191
        ],
        [
          16.9312007,
          49.7421908
        ],
        [
          16.9311817,
          49.742202
        ],
        [
          16.9311317,
          49.7422314
        ],
        [
          16.9310319,
          49.7421607
        ],
        [
          16.9310696,
          49.7421385
        ],
        [
          16.9309764,
          49.7420933
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306922",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306922"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9312675,
          49.7421763
        ],
        [
          16.931351,
          49.7421228
        ],
        [
          16.9314953,
          49.7422168
        ],
        [
          16.9314118,
          49.7422703
        ],
        [
          16.9312675,
          49.7421763
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306923",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306923"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9311076,
          49.7422503
        ],
        [
          16.9311317,
          49.7422314
        ],
        [
          16.9311817,
          49.742202
        ],
        [
          16.9313523,
          49.7423071
        ],
        [
          16.9312797,
          49.7423563
        ],
        [
          16.9311076,
          49.7422503
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306924",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306924"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9309785,
          49.7426164
        ],
        [
          16.9311178,
          49.7425096
        ],
        [
          16.9311609,
          49.742533
        ],
        [
          16.9311829,
          49.7425161
        ],
        [
          16.9311177,
          49.7424807
        ],
        [
          16.9312797,
          49.7423563
        ],
        [
          16.9313523,
          49.7423071
        ],
        [
          16.9314122,
          49.7423333
        ],
        [
          16.9313142,
          49.7424084
        ],
        [
          16.9314195,
          49.7424658
        ],
        [
          16.9313609,
          49.7425107
        ],
        [
          16.9314139,
          49.7425396
        ],
        [
          16.931376,
          49.7425686
        ],
        [
          16.9313074,
          49.7426212
        ],
        [
          16.9311746,
          49.7427231
        ],
        [
          16.9310994,
          49.7426821
        ],
        [
          16.9312215,
          49.7425885
        ],
        [
          16.931272,
          49.742616
        ],
        [
          16.9313385,
          49.742565
        ],
        [
          16.9312288,
          49.7425053
        ],
        [
          16.9312005,
          49.742527
        ],
        [
          16.931231,
          49.7425436
        ],
        [
          16.9310706,
          49.7426665
        ],
        [
          16.9309785,
          49.7426164
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306925",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306925"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.930861,
          49.7425609
        ],
        [
          16.9309965,
          49.7424795
        ],
        [
          16.9309737,
          49.7424665
        ],
        [
          16.9310358,
          49.7424278
        ],
        [
          16.9311177,
          49.7424807
        ],
        [
          16.9309308,
          49.7426034
        ],
        [
          16.930861,
          49.7425609
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306926",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306926"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.931262,
          49.7427923
        ],
        [
          16.9314001,
          49.7426736
        ],
        [
          16.9313074,
          49.7426212
        ],
        [
          16.931376,
          49.7425686
        ],
        [
          16.9315208,
          49.7426372
        ],
        [
          16.9314994,
          49.7426996
        ],
        [
          16.9313358,
          49.7428287
        ],
        [
          16.931262,
          49.7427923
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306927",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306927"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9315597,
          49.7424942
        ],
        [
          16.931541,
          49.7426103
        ],
        [
          16.9314887,
          49.7425852
        ],
        [
          16.9315047,
          49.7424847
        ],
        [
          16.9315597,
          49.7424942
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306928",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306928"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9315946,
          49.7426147
        ],
        [
          16.9316107,
          49.7425618
        ],
        [
          16.931714,
          49.742548
        ],
        [
          16.9317301,
          49.7425947
        ],
        [
          16.9315946,
          49.7426147
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306929",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306929"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9316923,
          49.7422604
        ],
        [
          16.9317571,
          49.742239
        ],
        [
          16.9318375,
          49.7423409
        ],
        [
          16.9318768,
          49.742328
        ],
        [
          16.9318914,
          49.7423465
        ],
        [
          16.9319247,
          49.7423355
        ],
        [
          16.9319976,
          49.7424278
        ],
        [
          16.931875,
          49.7424799
        ],
        [
          16.9317021,
          49.7425131
        ],
        [
          16.9316903,
          49.7424975
        ],
        [
          16.9318128,
          49.7424571
        ],
        [
          16.9316646,
          49.7422695
        ],
        [
          16.9316923,
          49.7422604
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306931",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306931"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9314573,
          49.742931
        ],
        [
          16.9315047,
          49.742818
        ],
        [
          16.9316317,
          49.7428402
        ],
        [
          16.9316099,
          49.7428924
        ],
        [
          16.9317839,
          49.7429229
        ],
        [
          16.9317749,
          49.7429443
        ],
        [
          16.9318496,
          49.7429574
        ],
        [
          16.9318331,
          49.7429967
        ],
        [
          16.9314573,
          49.742931
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306932",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306932"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9320023,
          49.7432768
        ],
        [
          16.9319594,
          49.7432542
        ],
        [
          16.9320787,
          49.7432066
        ],
        [
          16.9321002,
          49.74323
        ],
        [
          16.9320023,
          49.7432768
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306933",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306933"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.932064,
          49.7429898
        ],
        [
          16.9321592,
          49.7430965
        ],
        [
          16.9321517,
          49.7431719
        ],
        [
          16.9320855,
          49.7431754
        ],
        [
          16.931942,
          49.7432456
        ],
        [
          16.9318387,
          49.7431693
        ],
        [
          16.9319513,
          49.7431
        ],
        [
          16.9319916,
          49.7431139
        ],
        [
          16.9320171,
          49.7430939
        ],
        [
          16.9319983,
          49.743061
        ],
        [
          16.9317904,
          49.7431156
        ],
        [
          16.9317569,
          49.7430645
        ],
        [
          16.932064,
          49.7429898
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307097",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198307097"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9305994,
          49.7428265
        ],
        [
          16.9306142,
          49.7428091
        ],
        [
          16.9305056,
          49.7427577
        ],
        [
          16.9305432,
          49.7427239
        ],
        [
          16.9306452,
          49.7427726
        ],
        [
          16.9307251,
          49.742801
        ],
        [
          16.9307457,
          49.7427629
        ],
        [
          16.9305713,
          49.7426935
        ],
        [
          16.9305512,
          49.7427083
        ],
        [
          16.9304614,
          49.7426745
        ],
        [
          16.9304748,
          49.7426563
        ],
        [
          16.9304225,
          49.7426476
        ],
        [
          16.9304265,
          49.7426121
        ],
        [
          16.9306236,
          49.7426415
        ],
        [
          16.9308677,
          49.7427525
        ],
        [
          16.9308062,
          49.7428298
        ],
        [
          16.9307604,
          49.7428837
        ],
        [
          16.9305994,
          49.7428265
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307098",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198307098"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9303997,
          49.742906
        ],
        [
          16.9304643,
          49.7428335
        ],
        [
          16.9305386,
          49.7428611
        ],
        [
          16.9305134,
          49.7428894
        ],
        [
          16.9307112,
          49.7429629
        ],
        [
          16.9306718,
          49.7430071
        ],
        [
          16.9306333,
          49.7429928
        ],
        [
          16.9305075,
          49.742946
        ],
        [
          16.9304698,
          49.7429321
        ],
        [
          16.9303997,
          49.742906
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307099",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198307099"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9305075,
          49.742946
        ],
        [
          16.9306333,
          49.7429928
        ],
        [
          16.9304838,
          49.7431849
        ],
        [
          16.930354,
          49.7431427
        ],
        [
          16.9305075,
          49.742946
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307100",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "131",
    "addr:housenumber": "131",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307100"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9306366,
          49.7432294
        ],
        [
          16.9305514,
          49.7432023
        ],
        [
          16.9306739,
          49.7430417
        ],
        [
          16.9307591,
          49.7430688
        ],
        [
          16.9306366,
          49.7432294
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307101",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198307101"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9305514,
          49.7432023
        ],
        [
          16.9306366,
          49.7432294
        ],
        [
          16.9305346,
          49.7433633
        ],
        [
          16.9304857,
          49.7433477
        ],
        [
          16.9305451,
          49.7432697
        ],
        [
          16.9305088,
          49.7432582
        ],
        [
          16.9305514,
          49.7432023
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307102",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198307102"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9302347,
          49.7432671
        ],
        [
          16.9303727,
          49.7432381
        ],
        [
          16.930403,
          49.7432984
        ],
        [
          16.930265,
          49.7433274
        ],
        [
          16.9302347,
          49.7432671
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307103",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198307103"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9308242,
          49.7432224
        ],
        [
          16.9307821,
          49.7432846
        ],
        [
          16.9306567,
          49.7432492
        ],
        [
          16.9306988,
          49.743187
        ],
        [
          16.9308242,
          49.7432224
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307104",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198307104"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9310432,
          49.7431571
        ],
        [
          16.9309389,
          49.7433228
        ],
        [
          16.9307821,
          49.7432846
        ],
        [
          16.9308242,
          49.7432224
        ],
        [
          16.9309044,
          49.7432448
        ],
        [
          16.9309715,
          49.7431382
        ],
        [
          16.9310432,
          49.7431571
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307105",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198307105"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9314271,
          49.7432561
        ],
        [
          16.9314571,
          49.7432184
        ],
        [
          16.9315804,
          49.7432593
        ],
        [
          16.9315504,
          49.743297
        ],
        [
          16.9314271,
          49.7432561
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307106",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198307106"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9312729,
          49.7433574
        ],
        [
          16.9312008,
          49.7433386
        ],
        [
          16.9312752,
          49.7432196
        ],
        [
          16.9313472,
          49.7432384
        ],
        [
          16.9312729,
          49.7433574
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307107",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198307107"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9314713,
          49.7434588
        ],
        [
          16.9314169,
          49.7434328
        ],
        [
          16.9312729,
          49.7433574
        ],
        [
          16.9313357,
          49.7433104
        ],
        [
          16.9315332,
          49.7434048
        ],
        [
          16.9314713,
          49.7434588
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307108",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198307108"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9316645,
          49.743402
        ],
        [
          16.9315489,
          49.7434963
        ],
        [
          16.9314713,
          49.7434588
        ],
        [
          16.9315332,
          49.7434048
        ],
        [
          16.9316242,
          49.7433322
        ],
        [
          16.9317015,
          49.7433718
        ],
        [
          16.9316645,
          49.743402
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307109",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198307109"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9317282,
          49.7433478
        ],
        [
          16.9318614,
          49.7434101
        ],
        [
          16.9317996,
          49.7434653
        ],
        [
          16.9316645,
          49.743402
        ],
        [
          16.9317015,
          49.7433718
        ],
        [
          16.9317282,
          49.7433478
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307110",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198307110"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9318733,
          49.7435555
        ],
        [
          16.9319614,
          49.7436137
        ],
        [
          16.9318782,
          49.7436662
        ],
        [
          16.9318324,
          49.7436359
        ],
        [
          16.9318692,
          49.7436127
        ],
        [
          16.931827,
          49.7435847
        ],
        [
          16.9318733,
          49.7435555
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307112",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198307112"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9320828,
          49.743782
        ],
        [
          16.9319688,
          49.743717
        ],
        [
          16.9320318,
          49.7436798
        ],
        [
          16.9321538,
          49.7437621
        ],
        [
          16.9320828,
          49.743782
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307113",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198307113"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9319352,
          49.7440984
        ],
        [
          16.9318776,
          49.7440186
        ],
        [
          16.9320104,
          49.7439779
        ],
        [
          16.9320452,
          49.7440689
        ],
        [
          16.9319352,
          49.7440984
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307127",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198307127"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9314812,
          49.7417123
        ],
        [
          16.9314856,
          49.7416136
        ],
        [
          16.9316665,
          49.741617
        ],
        [
          16.93167,
          49.7415394
        ],
        [
          16.9318264,
          49.7415423
        ],
        [
          16.9318188,
          49.7417138
        ],
        [
          16.9316785,
          49.7417112
        ],
        [
          16.9316772,
          49.7417418
        ],
        [
          16.9315926,
          49.7417403
        ],
        [
          16.9315938,
          49.7417145
        ],
        [
          16.9314812,
          49.7417123
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307143",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "95",
    "addr:housenumber": "95",
    "building": "house",
    "material": "brick",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307143"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.92697,
          49.7415096
        ],
        [
          16.9271172,
          49.7416673
        ],
        [
          16.9270568,
          49.7416909
        ],
        [
          16.9269095,
          49.7415332
        ],
        [
          16.92697,
          49.7415096
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307156",
  "properties": {
    "building": "yes",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198307156"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9284814,
          49.7422495
        ],
        [
          16.928379,
          49.7421975
        ],
        [
          16.9282952,
          49.742155
        ],
        [
          16.928325,
          49.7421306
        ],
        [
          16.9283751,
          49.7420892
        ],
        [
          16.9284914,
          49.7421482
        ],
        [
          16.9285613,
          49.7421837
        ],
        [
          16.9284814,
          49.7422495
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307158",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307158"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9305721,
          49.74312
        ],
        [
          16.9305077,
          49.7430973
        ],
        [
          16.9305464,
          49.7430514
        ],
        [
          16.9306108,
          49.7430741
        ],
        [
          16.9305721,
          49.74312
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307159",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "248",
    "addr:housenumber": "248",
    "building": "house",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307159"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9305514,
          49.7432023
        ],
        [
          16.9306366,
          49.7432294
        ],
        [
          16.9305346,
          49.7433633
        ],
        [
          16.9304857,
          49.7433477
        ],
        [
          16.9304493,
          49.7433374
        ],
        [
          16.9305088,
          49.7432582
        ],
        [
          16.9305514,
          49.7432023
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307160",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307160"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9303997,
          49.742906
        ],
        [
          16.9304643,
          49.7428335
        ],
        [
          16.9305386,
          49.7428611
        ],
        [
          16.9305134,
          49.7428894
        ],
        [
          16.9304698,
          49.7429321
        ],
        [
          16.9303997,
          49.742906
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307161",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "239",
    "addr:housenumber": "239",
    "building": "house",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307161"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9305994,
          49.7428265
        ],
        [
          16.9306142,
          49.7428091
        ],
        [
          16.9306452,
          49.7427726
        ],
        [
          16.9307251,
          49.742801
        ],
        [
          16.9308062,
          49.7428298
        ],
        [
          16.9307604,
          49.7428837
        ],
        [
          16.9305994,
          49.7428265
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307162",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "132",
    "addr:housenumber": "132",
    "building": "house",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307162"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9307112,
          49.7429629
        ],
        [
          16.9306718,
          49.7430071
        ],
        [
          16.9306333,
          49.7429928
        ],
        [
          16.9305075,
          49.742946
        ],
        [
          16.9304698,
          49.7429321
        ],
        [
          16.9305134,
          49.7428894
        ],
        [
          16.9307112,
          49.7429629
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307163",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "104",
    "addr:housenumber": "104",
    "building": "house",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307163"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9286085,
          49.7426791
        ],
        [
          16.9286502,
          49.7426539
        ],
        [
          16.9286194,
          49.7426326
        ],
        [
          16.928709,
          49.7425785
        ],
        [
          16.9288049,
          49.7426448
        ],
        [
          16.9287057,
          49.7427047
        ],
        [
          16.9286736,
          49.7427241
        ],
        [
          16.9286266,
          49.7426916
        ],
        [
          16.9286085,
          49.7426791
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307164",
  "properties": {
    "building": "yes",
    "material": "brick",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307164"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9286736,
          49.7427241
        ],
        [
          16.9287057,
          49.7427047
        ],
        [
          16.9288049,
          49.7426448
        ],
        [
          16.9288549,
          49.7426821
        ],
        [
          16.9287403,
          49.7427597
        ],
        [
          16.9286736,
          49.7427241
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307165",
  "properties": {
    "building": "yes",
    "material": "brick",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307165"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9286067,
          49.7427632
        ],
        [
          16.9286736,
          49.7427241
        ],
        [
          16.9287403,
          49.7427597
        ],
        [
          16.9287977,
          49.7427962
        ],
        [
          16.9287269,
          49.742835
        ],
        [
          16.9286067,
          49.7427632
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307166",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307166"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9279268,
          49.7424788
        ],
        [
          16.9279282,
          49.7424298
        ],
        [
          16.927967,
          49.7424303
        ],
        [
          16.9279656,
          49.7424792
        ],
        [
          16.9279268,
          49.7424788
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307167",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307167"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9283553,
          49.7426845
        ],
        [
          16.928299,
          49.7426517
        ],
        [
          16.9283648,
          49.7426006
        ],
        [
          16.9284223,
          49.7426337
        ],
        [
          16.9283773,
          49.7426706
        ],
        [
          16.9283553,
          49.7426845
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307168",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307168"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9283648,
          49.7426006
        ],
        [
          16.928448,
          49.742536
        ],
        [
          16.9284266,
          49.7425221
        ],
        [
          16.9284716,
          49.7424348
        ],
        [
          16.9286174,
          49.7424736
        ],
        [
          16.9285944,
          49.7424925
        ],
        [
          16.9285176,
          49.7425555
        ],
        [
          16.9284223,
          49.7426337
        ],
        [
          16.9283648,
          49.7426006
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307169",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307169"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9281266,
          49.7426372
        ],
        [
          16.9282071,
          49.742644
        ],
        [
          16.928299,
          49.7426517
        ],
        [
          16.9283553,
          49.7426845
        ],
        [
          16.9282963,
          49.7427217
        ],
        [
          16.9281147,
          49.7427065
        ],
        [
          16.9281266,
          49.7426372
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307170",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "105",
    "addr:housenumber": "105",
    "building": "house",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307170"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9281266,
          49.7426372
        ],
        [
          16.9282081,
          49.7423917
        ],
        [
          16.9284716,
          49.7424348
        ],
        [
          16.9284266,
          49.7425221
        ],
        [
          16.9282647,
          49.7424944
        ],
        [
          16.9282071,
          49.742644
        ],
        [
          16.9281266,
          49.7426372
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307171",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307171"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9277474,
          49.7426538
        ],
        [
          16.9278371,
          49.7426535
        ],
        [
          16.9278379,
          49.7427536
        ],
        [
          16.9277482,
          49.7427539
        ],
        [
          16.9277479,
          49.7427195
        ],
        [
          16.9277478,
          49.7427033
        ],
        [
          16.9277474,
          49.7426538
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307172",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307172"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9275835,
          49.7426853
        ],
        [
          16.9275841,
          49.7426523
        ],
        [
          16.9276129,
          49.7426525
        ],
        [
          16.9277474,
          49.7426538
        ],
        [
          16.9277478,
          49.7427033
        ],
        [
          16.9275832,
          49.742702
        ],
        [
          16.9275835,
          49.7426853
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307173",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "107",
    "addr:housenumber": "107",
    "building": "house",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307173"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9272149,
          49.7426909
        ],
        [
          16.9272153,
          49.7426328
        ],
        [
          16.92724,
          49.7426025
        ],
        [
          16.9275277,
          49.7426051
        ],
        [
          16.9275304,
          49.7425362
        ],
        [
          16.9276162,
          49.7425362
        ],
        [
          16.9276129,
          49.7426525
        ],
        [
          16.9275841,
          49.7426523
        ],
        [
          16.9275835,
          49.7426853
        ],
        [
          16.9272149,
          49.7426909
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307174",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "108",
    "addr:housenumber": "108",
    "building": "house",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307174"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9272196,
          49.742799
        ],
        [
          16.9272146,
          49.7427379
        ],
        [
          16.9277479,
          49.7427195
        ],
        [
          16.9277482,
          49.7427539
        ],
        [
          16.9277523,
          49.7427806
        ],
        [
          16.9272196,
          49.742799
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307175",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307175"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9274922,
          49.7442369
        ],
        [
          16.9274607,
          49.744172
        ],
        [
          16.9273894,
          49.744025
        ],
        [
          16.9276502,
          49.7439722
        ],
        [
          16.9276894,
          49.7440529
        ],
        [
          16.9274869,
          49.7440939
        ],
        [
          16.9275505,
          49.7442251
        ],
        [
          16.9274922,
          49.7442369
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307176",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "207",
    "addr:housenumber": "207",
    "building": "house",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307176"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9272125,
          49.7432612
        ],
        [
          16.9272056,
          49.7432056
        ],
        [
          16.9273431,
          49.7431985
        ],
        [
          16.9274053,
          49.7431953
        ],
        [
          16.9274075,
          49.7432127
        ],
        [
          16.9274428,
          49.7432109
        ],
        [
          16.927445,
          49.743229
        ],
        [
          16.9274049,
          49.7432311
        ],
        [
          16.9274074,
          49.7432512
        ],
        [
          16.92735,
          49.7432541
        ],
        [
          16.9272125,
          49.7432612
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307177",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307177"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9275495,
          49.7433305
        ],
        [
          16.9275281,
          49.7432419
        ],
        [
          16.9276378,
          49.7432308
        ],
        [
          16.927648,
          49.7432736
        ],
        [
          16.9276591,
          49.7433195
        ],
        [
          16.9275495,
          49.7433305
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307178",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "110",
    "addr:housenumber": "110",
    "building": "house",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307178"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9272128,
          49.7431706
        ],
        [
          16.9272088,
          49.743119
        ],
        [
          16.92746,
          49.7431109
        ],
        [
          16.9274613,
          49.7431626
        ],
        [
          16.9272128,
          49.7431706
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307179",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307179"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9265947,
          49.7425673
        ],
        [
          16.9265851,
          49.7425428
        ],
        [
          16.9266459,
          49.7425141
        ],
        [
          16.9266714,
          49.7425358
        ],
        [
          16.9265947,
          49.7425673
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307180",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307180"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9265947,
          49.7425673
        ],
        [
          16.9265019,
          49.7425826
        ],
        [
          16.9264336,
          49.7424095
        ],
        [
          16.9265265,
          49.7423942
        ],
        [
          16.9265851,
          49.7425428
        ],
        [
          16.9265947,
          49.7425673
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307181",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "80",
    "addr:housenumber": "80",
    "building": "house",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307181"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.926892,
          49.7424597
        ],
        [
          16.9267866,
          49.742478
        ],
        [
          16.9267541,
          49.7424001
        ],
        [
          16.926613,
          49.7424247
        ],
        [
          16.9265951,
          49.7423819
        ],
        [
          16.9268416,
          49.7423389
        ],
        [
          16.926892,
          49.7424597
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307182",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "79",
    "addr:housenumber": "79",
    "building": "house",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307182"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9269266,
          49.7425425
        ],
        [
          16.9266617,
          49.7425887
        ],
        [
          16.9266487,
          49.7425575
        ],
        [
          16.9268082,
          49.7425297
        ],
        [
          16.9267866,
          49.742478
        ],
        [
          16.926892,
          49.7424597
        ],
        [
          16.9269266,
          49.7425425
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307183",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307183"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9266361,
          49.7426973
        ],
        [
          16.9267162,
          49.7426822
        ],
        [
          16.9267411,
          49.7427397
        ],
        [
          16.9266607,
          49.7427542
        ],
        [
          16.9266361,
          49.7426973
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307184",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307184"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9266107,
          49.7426387
        ],
        [
          16.9266911,
          49.7426242
        ],
        [
          16.9267162,
          49.7426822
        ],
        [
          16.9266361,
          49.7426973
        ],
        [
          16.9266107,
          49.7426387
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307185",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "78",
    "addr:housenumber": "78",
    "building": "house",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307185"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9270789,
          49.7428388
        ],
        [
          16.9270864,
          49.7429531
        ],
        [
          16.9267486,
          49.7429933
        ],
        [
          16.9267323,
          49.742936
        ],
        [
          16.9269356,
          49.7429171
        ],
        [
          16.9269257,
          49.7428785
        ],
        [
          16.9269202,
          49.7428568
        ],
        [
          16.9270789,
          49.7428388
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307186",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307186"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.926868,
          49.7434995
        ],
        [
          16.9267603,
          49.7435162
        ],
        [
          16.926735,
          49.7434478
        ],
        [
          16.9268427,
          49.7434311
        ],
        [
          16.926868,
          49.7434995
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307187",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "75",
    "addr:housenumber": "75",
    "building": "house",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307187"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9270768,
          49.7434747
        ],
        [
          16.926868,
          49.7434995
        ],
        [
          16.9268427,
          49.7434311
        ],
        [
          16.9268901,
          49.7434247
        ],
        [
          16.9270704,
          49.7433984
        ],
        [
          16.9270768,
          49.7434747
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307188",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "74",
    "addr:housenumber": "74",
    "building": "house",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307188"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9270727,
          49.743517
        ],
        [
          16.9271127,
          49.7436605
        ],
        [
          16.9269835,
          49.7436755
        ],
        [
          16.9267398,
          49.7437081
        ],
        [
          16.9267001,
          49.7435862
        ],
        [
          16.9267818,
          49.7435767
        ],
        [
          16.9267995,
          49.7436402
        ],
        [
          16.9269728,
          49.74362
        ],
        [
          16.926956,
          49.7435597
        ],
        [
          16.9270147,
          49.7435529
        ],
        [
          16.9270069,
          49.7435247
        ],
        [
          16.9270727,
          49.743517
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307189",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307189"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.927127,
          49.7437771
        ],
        [
          16.927135,
          49.7438109
        ],
        [
          16.9270301,
          49.7438213
        ],
        [
          16.9270221,
          49.7437874
        ],
        [
          16.927127,
          49.7437771
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307190",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "175",
    "addr:housenumber": "175",
    "building": "house",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307190"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9265141,
          49.7421188
        ],
        [
          16.9266931,
          49.7420907
        ],
        [
          16.9267164,
          49.7421526
        ],
        [
          16.9265374,
          49.7421807
        ],
        [
          16.9265141,
          49.7421188
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307191",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307191"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9263715,
          49.7419173
        ],
        [
          16.9263637,
          49.7419882
        ],
        [
          16.9262695,
          49.7420068
        ],
        [
          16.9263322,
          49.7421532
        ],
        [
          16.9265141,
          49.7421188
        ],
        [
          16.9265374,
          49.7421807
        ],
        [
          16.9264585,
          49.7421884
        ],
        [
          16.9262324,
          49.7422288
        ],
        [
          16.9261467,
          49.7420288
        ],
        [
          16.9263715,
          49.7419173
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307192",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307192"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9264365,
          49.7418933
        ],
        [
          16.9264405,
          49.7418567
        ],
        [
          16.9265136,
          49.74186
        ],
        [
          16.9265097,
          49.7418967
        ],
        [
          16.9264365,
          49.7418933
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307193",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "81",
    "addr:housenumber": "81",
    "building": "house",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "wikidata": "Q30730419",
    "id": "way/198307193"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9266661,
          49.7420022
        ],
        [
          16.9263637,
          49.7419882
        ],
        [
          16.9263715,
          49.7419173
        ],
        [
          16.9264335,
          49.7419202
        ],
        [
          16.9264365,
          49.7418933
        ],
        [
          16.9265097,
          49.7418967
        ],
        [
          16.9266769,
          49.7419045
        ],
        [
          16.9266661,
          49.7420022
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307194",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307194"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9246381,
          49.7416252
        ],
        [
          16.9246873,
          49.7416259
        ],
        [
          16.9246845,
          49.7417098
        ],
        [
          16.9246354,
          49.7417091
        ],
        [
          16.9246381,
          49.7416252
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307195",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307195"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9262564,
          49.7415774
        ],
        [
          16.9262153,
          49.7415694
        ],
        [
          16.9261546,
          49.7415556
        ],
        [
          16.9260421,
          49.7415285
        ],
        [
          16.9261118,
          49.7414066
        ],
        [
          16.9262254,
          49.7414288
        ],
        [
          16.9261922,
          49.7415098
        ],
        [
          16.9262766,
          49.7415232
        ],
        [
          16.9262564,
          49.7415774
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307196",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "83",
    "addr:housenumber": "83",
    "building": "house",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307196"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9266071,
          49.7416061
        ],
        [
          16.9263712,
          49.7415978
        ],
        [
          16.9262844,
          49.7415829
        ],
        [
          16.9262564,
          49.7415774
        ],
        [
          16.9262766,
          49.7415232
        ],
        [
          16.9266039,
          49.7415637
        ],
        [
          16.9266071,
          49.7416061
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307197",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "89",
    "addr:housenumber": "89",
    "building": "house",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307197"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9266859,
          49.7413868
        ],
        [
          16.9267381,
          49.7411757
        ],
        [
          16.9268504,
          49.7411873
        ],
        [
          16.9267983,
          49.7413984
        ],
        [
          16.9266859,
          49.7413868
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307198",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "XXII",
    "addr:housenumber": "XXII",
    "building": "house",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307198"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9272097,
          49.7412479
        ],
        [
          16.9275206,
          49.741189
        ],
        [
          16.9275234,
          49.7413181
        ],
        [
          16.92746,
          49.7413225
        ],
        [
          16.9274506,
          49.7412713
        ],
        [
          16.9273923,
          49.741283
        ],
        [
          16.9273279,
          49.7412959
        ],
        [
          16.9273668,
          49.7414122
        ],
        [
          16.9273955,
          49.7414949
        ],
        [
          16.9273064,
          49.7415363
        ],
        [
          16.9272911,
          49.7414925
        ],
        [
          16.9272097,
          49.7412479
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307199",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307199"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9273668,
          49.7414122
        ],
        [
          16.9274329,
          49.741403
        ],
        [
          16.9273923,
          49.741283
        ],
        [
          16.9274506,
          49.7412713
        ],
        [
          16.92746,
          49.7413225
        ],
        [
          16.9275234,
          49.7413181
        ],
        [
          16.927526,
          49.7414343
        ],
        [
          16.9273955,
          49.7414949
        ],
        [
          16.9273668,
          49.7414122
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307200",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307200"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9275981,
          49.7416261
        ],
        [
          16.9275557,
          49.7415939
        ],
        [
          16.9275108,
          49.7415599
        ],
        [
          16.9274653,
          49.7415254
        ],
        [
          16.927537,
          49.741486
        ],
        [
          16.9276697,
          49.7415866
        ],
        [
          16.9275981,
          49.7416261
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307201",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307201"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9272734,
          49.7421006
        ],
        [
          16.9272418,
          49.7420337
        ],
        [
          16.927314,
          49.7420195
        ],
        [
          16.9273456,
          49.7420863
        ],
        [
          16.9272734,
          49.7421006
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307202",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307202"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9275131,
          49.7419457
        ],
        [
          16.9275324,
          49.7419083
        ],
        [
          16.9276096,
          49.7419247
        ],
        [
          16.927646,
          49.7420773
        ],
        [
          16.927552,
          49.7420801
        ],
        [
          16.9275131,
          49.7419457
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307203",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "101",
    "addr:housenumber": "101",
    "building": "house",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307203"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9272172,
          49.7418653
        ],
        [
          16.9272579,
          49.7417891
        ],
        [
          16.9275967,
          49.7418708
        ],
        [
          16.9276096,
          49.7419247
        ],
        [
          16.9275324,
          49.7419083
        ],
        [
          16.9275131,
          49.7419457
        ],
        [
          16.9272172,
          49.7418653
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307206",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "97",
    "addr:housenumber": "97",
    "building": "house",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307206"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9277214,
          49.7419752
        ],
        [
          16.9277199,
          49.7419122
        ],
        [
          16.9278074,
          49.7419113
        ],
        [
          16.9278059,
          49.741778
        ],
        [
          16.9278046,
          49.7417688
        ],
        [
          16.9279353,
          49.741772
        ],
        [
          16.9279355,
          49.7417923
        ],
        [
          16.9281119,
          49.7417905
        ],
        [
          16.9281132,
          49.7418436
        ],
        [
          16.9279355,
          49.7418454
        ],
        [
          16.9279384,
          49.741968
        ],
        [
          16.9279099,
          49.7419683
        ],
        [
          16.9279108,
          49.7420079
        ],
        [
          16.9278126,
          49.7420089
        ],
        [
          16.9278118,
          49.7419743
        ],
        [
          16.9277214,
          49.7419752
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307207",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307207"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9279225,
          49.7420573
        ],
        [
          16.9278744,
          49.7420323
        ],
        [
          16.9279428,
          49.7420123
        ],
        [
          16.9280013,
          49.7420349
        ],
        [
          16.9279225,
          49.7420573
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307208",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307208"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9281649,
          49.7419362
        ],
        [
          16.9282605,
          49.7419159
        ],
        [
          16.9283065,
          49.7420066
        ],
        [
          16.9279777,
          49.742086
        ],
        [
          16.9279225,
          49.7420573
        ],
        [
          16.9280013,
          49.7420349
        ],
        [
          16.9281989,
          49.7419846
        ],
        [
          16.9281778,
          49.7419595
        ],
        [
          16.9281649,
          49.7419362
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307209",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "98",
    "addr:housenumber": "98",
    "building": "house",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307209"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9288008,
          49.7419059
        ],
        [
          16.9287826,
          49.7418483
        ],
        [
          16.9284834,
          49.7418879
        ],
        [
          16.9284667,
          49.7418351
        ],
        [
          16.928828,
          49.7417873
        ],
        [
          16.928863,
          49.7418977
        ],
        [
          16.9288008,
          49.7419059
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307210",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307210"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9288151,
          49.741967
        ],
        [
          16.9288008,
          49.7419059
        ],
        [
          16.928863,
          49.7418977
        ],
        [
          16.9288803,
          49.7419639
        ],
        [
          16.9288151,
          49.741967
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307211",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "99",
    "addr:housenumber": "99",
    "building": "house",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307211"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9286098,
          49.7419902
        ],
        [
          16.9288151,
          49.741967
        ],
        [
          16.9288251,
          49.7420041
        ],
        [
          16.9286199,
          49.7420273
        ],
        [
          16.9286098,
          49.7419902
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307212",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307212"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9283751,
          49.7420892
        ],
        [
          16.9284914,
          49.7421482
        ],
        [
          16.9284413,
          49.7421896
        ],
        [
          16.928325,
          49.7421306
        ],
        [
          16.9283751,
          49.7420892
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307213",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "102",
    "addr:housenumber": "102",
    "building": "house",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307213"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9271503,
          49.7424244
        ],
        [
          16.9271038,
          49.742326
        ],
        [
          16.9271755,
          49.7423118
        ],
        [
          16.927222,
          49.7424102
        ],
        [
          16.9271503,
          49.7424244
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307214",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307214"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9281696,
          49.7421481
        ],
        [
          16.9281916,
          49.7421985
        ],
        [
          16.9281225,
          49.7422096
        ],
        [
          16.9281033,
          49.7421596
        ],
        [
          16.9281696,
          49.7421481
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307215",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "100",
    "addr:housenumber": "100",
    "building": "house",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307215"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9279299,
          49.7421895
        ],
        [
          16.9279088,
          49.7421384
        ],
        [
          16.9281485,
          49.742097
        ],
        [
          16.9281696,
          49.7421481
        ],
        [
          16.9281033,
          49.7421596
        ],
        [
          16.9279299,
          49.7421895
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307217",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307217"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9317526,
          49.7441735
        ],
        [
          16.9318465,
          49.7441731
        ],
        [
          16.931847,
          49.7442294
        ],
        [
          16.9317531,
          49.7442297
        ],
        [
          16.9317526,
          49.7441735
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307218",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307218"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9317827,
          49.7440549
        ],
        [
          16.9318734,
          49.7441402
        ],
        [
          16.9318122,
          49.7441674
        ],
        [
          16.9317215,
          49.7440821
        ],
        [
          16.9317827,
          49.7440549
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307220",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "249",
    "addr:housenumber": "249",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307220"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9312639,
          49.7449153
        ],
        [
          16.9312638,
          49.7449923
        ],
        [
          16.9312112,
          49.7449923
        ],
        [
          16.931211,
          49.74506
        ],
        [
          16.9310609,
          49.7450599
        ],
        [
          16.9310612,
          49.7449151
        ],
        [
          16.9312639,
          49.7449153
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307221",
  "properties": {
    "building": "yes",
    "end_date": "1936",
    "material": "wood",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307221"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9313688,
          49.7449924
        ],
        [
          16.9312638,
          49.7449923
        ],
        [
          16.9312639,
          49.7449153
        ],
        [
          16.931369,
          49.7449154
        ],
        [
          16.9313688,
          49.7449924
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307222",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "128",
    "addr:housenumber": "128",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307222"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9316701,
          49.7442974
        ],
        [
          16.9316693,
          49.7442302
        ],
        [
          16.9317531,
          49.7442297
        ],
        [
          16.931847,
          49.7442294
        ],
        [
          16.9318912,
          49.7442291
        ],
        [
          16.9318921,
          49.7442962
        ],
        [
          16.9316701,
          49.7442974
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307224",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "247",
    "addr:housenumber": "247",
    "building": "house",
    "end_date": "1936",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307224"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9312111,
          49.7442206
        ],
        [
          16.9312298,
          49.7442984
        ],
        [
          16.9311333,
          49.7443289
        ],
        [
          16.9310943,
          49.7442527
        ],
        [
          16.9312111,
          49.7442206
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198767294",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "XIc",
    "addr:housenumber": "XIc",
    "building": "house",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198767294"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9250607,
          49.745044
        ],
        [
          16.9250863,
          49.7450795
        ],
        [
          16.9250409,
          49.7450932
        ],
        [
          16.9250153,
          49.7450577
        ],
        [
          16.9250607,
          49.745044
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198767295",
  "properties": {
    "addr:city": "Loštice",
    "addr:conscriptionnumber": "VIIb",
    "addr:housenumber": "VIIb",
    "building": "house",
    "end_date": "1936",
    "material": "brick",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198767295"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.925721,
          49.7456077
        ],
        [
          16.9257331,
          49.745623
        ],
        [
          16.9257462,
          49.7456396
        ],
        [
          16.9257137,
          49.7456504
        ],
        [
          16.9256289,
          49.7456784
        ],
        [
          16.9256037,
          49.7456466
        ],
        [
          16.925721,
          49.7456077
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306672",
  "properties": {
    "natural": "water",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "water": "river",
    "id": "way/198306672"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9301074,
          49.744432
        ],
        [
          16.9300939,
          49.7444017
        ],
        [
          16.9301583,
          49.7443531
        ],
        [
          16.9298163,
          49.7439674
        ],
        [
          16.9295949,
          49.7437483
        ],
        [
          16.929528,
          49.7436821
        ],
        [
          16.9293228,
          49.7435073
        ],
        [
          16.9291967,
          49.7434016
        ],
        [
          16.9291082,
          49.743256
        ],
        [
          16.929076,
          49.7430983
        ],
        [
          16.9290921,
          49.7427447
        ],
        [
          16.9290546,
          49.7426025
        ],
        [
          16.9292879,
          49.7423547
        ],
        [
          16.9292595,
          49.7423145
        ],
        [
          16.9292316,
          49.7422749
        ],
        [
          16.9292467,
          49.7422345
        ],
        [
          16.9293442,
          49.7419733
        ],
        [
          16.9293285,
          49.7419147
        ],
        [
          16.929296,
          49.7417931
        ],
        [
          16.9293123,
          49.7417655
        ],
        [
          16.9293308,
          49.7417341
        ],
        [
          16.9295213,
          49.7416475
        ],
        [
          16.9289446,
          49.7411361
        ],
        [
          16.9295293,
          49.7411639
        ],
        [
          16.9300389,
          49.741722
        ],
        [
          16.9299772,
          49.7421675
        ],
        [
          16.9297975,
          49.7425505
        ],
        [
          16.9295159,
          49.7429648
        ],
        [
          16.9295132,
          49.7431624
        ],
        [
          16.9296393,
          49.7434293
        ],
        [
          16.9301526,
          49.743719
        ],
        [
          16.9306105,
          49.7442342
        ],
        [
          16.9306015,
          49.7442643
        ],
        [
          16.9301074,
          49.744432
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306864",
  "properties": {
    "natural": "water",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "water": "river",
    "id": "way/198306864"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9303793,
          49.744509
        ],
        [
          16.9305404,
          49.7444551
        ],
        [
          16.9307094,
          49.744397
        ],
        [
          16.9310126,
          49.7445646
        ],
        [
          16.9313022,
          49.7446322
        ],
        [
          16.9315758,
          49.7446339
        ],
        [
          16.9317287,
          49.744627
        ],
        [
          16.9320881,
          49.7445057
        ],
        [
          16.9324985,
          49.7443393
        ],
        [
          16.9329384,
          49.7441399
        ],
        [
          16.9332442,
          49.7439926
        ],
        [
          16.9334078,
          49.7439545
        ],
        [
          16.933845,
          49.7439562
        ],
        [
          16.9345719,
          49.7440533
        ],
        [
          16.9345722,
          49.7441505
        ],
        [
          16.9345772,
          49.7442647
        ],
        [
          16.9338664,
          49.7441746
        ],
        [
          16.9336894,
          49.7441919
        ],
        [
          16.9332656,
          49.7442526
        ],
        [
          16.9329243,
          49.7443342
        ],
        [
          16.9319574,
          49.7448096
        ],
        [
          16.9310655,
          49.7448697
        ],
        [
          16.9304537,
          49.7445633
        ],
        [
          16.9303793,
          49.744509
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307148",
  "properties": {
    "natural": "water",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "water": "river",
    "id": "way/198307148"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9270322,
          49.7413147
        ],
        [
          16.9271368,
          49.7414187
        ],
        [
          16.9272655,
          49.7415885
        ],
        [
          16.9273031,
          49.7416787
        ],
        [
          16.9272679,
          49.7416878
        ],
        [
          16.9272226,
          49.7416995
        ],
        [
          16.9269946,
          49.7414568
        ],
        [
          16.9269302,
          49.7413979
        ],
        [
          16.9269893,
          49.7413497
        ],
        [
          16.9270322,
          49.7413147
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307149",
  "properties": {
    "natural": "water",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "water": "river",
    "id": "way/198307149"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9270617,
          49.7410148
        ],
        [
          16.9270375,
          49.7411587
        ],
        [
          16.9269732,
          49.7412332
        ],
        [
          16.9269345,
          49.7412731
        ],
        [
          16.9268873,
          49.7413216
        ],
        [
          16.9268676,
          49.7411267
        ],
        [
          16.9268927,
          49.7410079
        ],
        [
          16.9269755,
          49.7410113
        ],
        [
          16.9270617,
          49.7410148
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307150",
  "properties": {
    "natural": "water",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "water": "river",
    "id": "way/198307150"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9276878,
          49.7417376
        ],
        [
          16.9276881,
          49.7417636
        ],
        [
          16.9276883,
          49.7417809
        ],
        [
          16.9273755,
          49.7417896
        ],
        [
          16.9272682,
          49.7417341
        ],
        [
          16.9273152,
          49.7417202
        ],
        [
          16.9273621,
          49.7417064
        ],
        [
          16.927413,
          49.7417376
        ],
        [
          16.9276878,
          49.7417376
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307151",
  "properties": {
    "natural": "water",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "water": "river",
    "id": "way/198307151"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.929296,
          49.7417931
        ],
        [
          16.9291109,
          49.7417133
        ],
        [
          16.9287166,
          49.7417359
        ],
        [
          16.9283608,
          49.7417776
        ],
        [
          16.9282862,
          49.7417885
        ],
        [
          16.9281928,
          49.7417821
        ],
        [
          16.9281119,
          49.7417905
        ],
        [
          16.9279355,
          49.7417923
        ],
        [
          16.9279353,
          49.741772
        ],
        [
          16.9279352,
          49.7417636
        ],
        [
          16.9279348,
          49.7417324
        ],
        [
          16.9283438,
          49.7417411
        ],
        [
          16.9285262,
          49.7417099
        ],
        [
          16.9291082,
          49.7416752
        ],
        [
          16.9293308,
          49.7417341
        ],
        [
          16.9293123,
          49.7417655
        ],
        [
          16.929296,
          49.7417931
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307155",
  "properties": {
    "natural": "water",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "water": "river",
    "id": "way/198307155"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9268323,
          49.7419274
        ],
        [
          16.9266769,
          49.7419045
        ],
        [
          16.9265136,
          49.74186
        ],
        [
          16.9264086,
          49.7418217
        ],
        [
          16.9262835,
          49.7418298
        ],
        [
          16.9262307,
          49.7418781
        ],
        [
          16.9258019,
          49.7419651
        ],
        [
          16.9254374,
          49.7419373
        ],
        [
          16.9252551,
          49.7421577
        ],
        [
          16.9249615,
          49.7422108
        ],
        [
          16.9247536,
          49.7421961
        ],
        [
          16.924523,
          49.7422871
        ],
        [
          16.9240791,
          49.7422394
        ],
        [
          16.9235681,
          49.7422749
        ],
        [
          16.9235716,
          49.742248
        ],
        [
          16.9235748,
          49.7422229
        ],
        [
          16.9241572,
          49.7421688
        ],
        [
          16.9245217,
          49.7422408
        ],
        [
          16.924764,
          49.7421466
        ],
        [
          16.9249484,
          49.7421715
        ],
        [
          16.9251607,
          49.7421286
        ],
        [
          16.9253366,
          49.7418902
        ],
        [
          16.925714,
          49.7419346
        ],
        [
          16.9261836,
          49.7418639
        ],
        [
          16.9262822,
          49.7417724
        ],
        [
          16.9263737,
          49.7417749
        ],
        [
          16.9265507,
          49.7418182
        ],
        [
          16.9268256,
          49.7418875
        ],
        [
          16.9268283,
          49.7419034
        ],
        [
          16.9268323,
          49.7419274
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307157",
  "properties": {
    "natural": "water",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "water": "river",
    "id": "way/198307157"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9292879,
          49.7423547
        ],
        [
          16.9285905,
          49.7423529
        ],
        [
          16.9277349,
          49.7422923
        ],
        [
          16.9272307,
          49.742242
        ],
        [
          16.9271475,
          49.7422021
        ],
        [
          16.9269276,
          49.7419647
        ],
        [
          16.926922,
          49.7419405
        ],
        [
          16.9269168,
          49.7419179
        ],
        [
          16.9270697,
          49.7420011
        ],
        [
          16.9272092,
          49.7421796
        ],
        [
          16.9272575,
          49.7422091
        ],
        [
          16.9277108,
          49.7422125
        ],
        [
          16.9281211,
          49.7422351
        ],
        [
          16.9284484,
          49.7422767
        ],
        [
          16.9287609,
          49.7422914
        ],
        [
          16.9288333,
          49.7422949
        ],
        [
          16.9292316,
          49.7422749
        ],
        [
          16.9292595,
          49.7423145
        ],
        [
          16.9292879,
          49.7423547
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307204",
  "properties": {
    "end_date": "1936",
    "natural": "water",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "water": "river",
    "id": "way/198307204"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9268256,
          49.7418875
        ],
        [
          16.9268688,
          49.7419019
        ],
        [
          16.9269168,
          49.7419179
        ],
        [
          16.926922,
          49.7419405
        ],
        [
          16.9269276,
          49.7419647
        ],
        [
          16.9268729,
          49.7419433
        ],
        [
          16.9268323,
          49.7419274
        ],
        [
          16.9268283,
          49.7419034
        ],
        [
          16.9268256,
          49.7418875
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307205",
  "properties": {
    "end_date": "1936",
    "natural": "water",
    "source:end_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "water": "river",
    "id": "way/198307205"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9276883,
          49.7417809
        ],
        [
          16.9276881,
          49.7417636
        ],
        [
          16.9276878,
          49.7417376
        ],
        [
          16.9279348,
          49.7417324
        ],
        [
          16.9279352,
          49.7417636
        ],
        [
          16.9279353,
          49.741772
        ],
        [
          16.9278046,
          49.7417688
        ],
        [
          16.9278059,
          49.741778
        ],
        [
          16.9276883,
          49.7417809
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306863",
  "properties": {
    "man_made": "bridge",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198306863"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9303793,
          49.744509
        ],
        [
          16.9302152,
          49.7445647
        ],
        [
          16.9301388,
          49.7444707
        ],
        [
          16.9301074,
          49.744432
        ],
        [
          16.9306015,
          49.7442643
        ],
        [
          16.9307094,
          49.744397
        ],
        [
          16.9303793,
          49.744509
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307146",
  "properties": {
    "man_made": "bridge",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307146"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9273031,
          49.7416787
        ],
        [
          16.9273317,
          49.7416921
        ],
        [
          16.9273621,
          49.7417064
        ],
        [
          16.9273152,
          49.7417202
        ],
        [
          16.9272682,
          49.7417341
        ],
        [
          16.9272456,
          49.741717
        ],
        [
          16.9272226,
          49.7416995
        ],
        [
          16.9272679,
          49.7416878
        ],
        [
          16.9273031,
          49.7416787
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307147",
  "properties": {
    "man_made": "bridge",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307147"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9268873,
          49.7413216
        ],
        [
          16.9269345,
          49.7412731
        ],
        [
          16.9269732,
          49.7412332
        ],
        [
          16.9269999,
          49.7412701
        ],
        [
          16.9270322,
          49.7413147
        ],
        [
          16.9269893,
          49.7413497
        ],
        [
          16.9269302,
          49.7413979
        ],
        [
          16.9269102,
          49.7413622
        ],
        [
          16.9268873,
          49.7413216
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307154",
  "properties": {
    "man_made": "bridge",
    "source:start_date": "https://archivnimapy.cuzk.cz/sm5/LITV/LITV71_1952.html",
    "start_date": "1952",
    "id": "way/198307154"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          16.9268323,
          49.7419274
        ],
        [
          16.9268283,
          49.7419034
        ],
        [
          16.9268256,
          49.7418875
        ],
        [
          16.9268688,
          49.7419019
        ],
        [
          16.9269168,
          49.7419179
        ],
        [
          16.926922,
          49.7419405
        ],
        [
          16.9269276,
          49.7419647
        ],
        [
          16.9268729,
          49.7419433
        ],
        [
          16.9268323,
          49.7419274
        ]
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306076",
  "properties": {
    "id": "way/198306076"
  },
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        16.92619,
        49.746069
      ],
      [
        16.9262263,
        49.7461022
      ],
      [
        16.9260617,
        49.7461759
      ],
      [
        16.9259987,
        49.7461193
      ],
      [
        16.9260996,
        49.7460736
      ],
      [
        16.9261262,
        49.746098
      ],
      [
        16.92619,
        49.746069
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306077",
  "properties": {
    "id": "way/198306077"
  },
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        16.9261429,
        49.7458442
      ],
      [
        16.9263195,
        49.7460578
      ],
      [
        16.9262263,
        49.7461022
      ],
      [
        16.92619,
        49.746069
      ],
      [
        16.9261426,
        49.7460131
      ],
      [
        16.9261655,
        49.7460045
      ],
      [
        16.926098,
        49.7459299
      ],
      [
        16.9259962,
        49.7459683
      ],
      [
        16.9260484,
        49.7460261
      ],
      [
        16.9260177,
        49.7460386
      ],
      [
        16.9259357,
        49.7460676
      ],
      [
        16.9259009,
        49.7460279
      ],
      [
        16.9258371,
        49.7459552
      ],
      [
        16.9259967,
        49.7458902
      ],
      [
        16.9261429,
        49.7458442
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306426",
  "properties": {
    "id": "way/198306426"
  },
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        16.9259802,
        49.7464208
      ],
      [
        16.9260673,
        49.7464967
      ],
      [
        16.9259401,
        49.7465576
      ],
      [
        16.925853,
        49.7464817
      ],
      [
        16.9259802,
        49.7464208
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198305985",
  "properties": {
    "id": "way/198305985"
  },
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        16.9259802,
        49.7464208
      ],
      [
        16.9262544,
        49.7462895
      ],
      [
        16.9263416,
        49.7463656
      ],
      [
        16.9262327,
        49.7464176
      ],
      [
        16.9262535,
        49.7464358
      ],
      [
        16.9262113,
        49.746456
      ],
      [
        16.9261905,
        49.7464378
      ],
      [
        16.9260673,
        49.7464967
      ],
      [
        16.9259802,
        49.7464208
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306431",
  "properties": {
    "id": "way/198306431"
  },
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        16.9251343,
        49.7445666
      ],
      [
        16.925114,
        49.7445036
      ],
      [
        16.9252928,
        49.7444805
      ],
      [
        16.9253128,
        49.7445425
      ],
      [
        16.9253022,
        49.7445439
      ],
      [
        16.9251343,
        49.7445666
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306164",
  "properties": {
    "id": "way/198306164"
  },
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        16.9253022,
        49.7445439
      ],
      [
        16.9253202,
        49.7445995
      ],
      [
        16.9251523,
        49.7446222
      ],
      [
        16.9251343,
        49.7445666
      ],
      [
        16.9253022,
        49.7445439
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306163",
  "properties": {
    "id": "way/198306163"
  },
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        16.9253202,
        49.7445995
      ],
      [
        16.925343,
        49.7445965
      ],
      [
        16.9253728,
        49.7446888
      ],
      [
        16.9251821,
        49.7447145
      ],
      [
        16.9251523,
        49.7446222
      ],
      [
        16.9253202,
        49.7445995
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306255",
  "properties": {
    "highway": "residential",
    "source:start_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "start_date": "1937",
    "id": "way/198306255"
  },
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        16.9308476,
        49.7442468
      ],
      [
        16.9308147,
        49.7441265
      ],
      [
        16.9307074,
        49.7439815
      ],
      [
        16.9306466,
        49.7438704
      ],
      [
        16.930603,
        49.7437481
      ],
      [
        16.9305775,
        49.7436162
      ],
      [
        16.9305666,
        49.7434807
      ],
      [
        16.9305656,
        49.7433726
      ],
      [
        16.9306374,
        49.743243
      ],
      [
        16.9307682,
        49.7430688
      ],
      [
        16.9308883,
        49.7429198
      ],
      [
        16.9311156,
        49.7428798
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306297",
  "properties": {
    "highway": "residential",
    "source:start_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "start_date": "1937",
    "id": "way/198306297"
  },
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        16.9313608,
        49.7461522
      ],
      [
        16.9319123,
        49.745937
      ],
      [
        16.9322547,
        49.746003
      ],
      [
        16.9323808,
        49.7459564
      ],
      [
        16.9336601,
        49.7448659
      ],
      [
        16.9337141,
        49.7446485
      ],
      [
        16.9339183,
        49.7444195
      ],
      [
        16.9349273,
        49.7445204
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306298",
  "properties": {
    "highway": "residential",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306298"
  },
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        16.9264259,
        49.7461116
      ],
      [
        16.9267352,
        49.7464338
      ],
      [
        16.9271136,
        49.7468335
      ],
      [
        16.9274379,
        49.7471207
      ],
      [
        16.9278943,
        49.7473031
      ],
      [
        16.9285009,
        49.7473962
      ],
      [
        16.9298763,
        49.7475864
      ],
      [
        16.9302787,
        49.7476717
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306299",
  "properties": {
    "highway": "residential",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306299"
  },
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        16.9279634,
        49.7453646
      ],
      [
        16.9272337,
        49.7457507
      ],
      [
        16.9264259,
        49.7461116
      ],
      [
        16.9256301,
        49.7464959
      ],
      [
        16.9251376,
        49.7474079
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306301",
  "properties": {
    "highway": "residential",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306301"
  },
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        16.9288073,
        49.7446815
      ],
      [
        16.9301388,
        49.7444707
      ],
      [
        16.9308283,
        49.7442527
      ],
      [
        16.9308476,
        49.7442468
      ],
      [
        16.9320835,
        49.7438723
      ],
      [
        16.9327721,
        49.7436565
      ],
      [
        16.932919,
        49.7436104
      ],
      [
        16.9348186,
        49.7430151
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306302",
  "properties": {
    "highway": "residential",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306302"
  },
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        16.9276166,
        49.7446883
      ],
      [
        16.9279634,
        49.7453646
      ],
      [
        16.9286024,
        49.7449629
      ],
      [
        16.9288073,
        49.7446815
      ],
      [
        16.9276166,
        49.7446883
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306303",
  "properties": {
    "highway": "residential",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306303"
  },
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        16.9239959,
        49.7410772
      ],
      [
        16.9241971,
        49.7412436
      ],
      [
        16.9244546,
        49.7413164
      ],
      [
        16.9247898,
        49.7412991
      ],
      [
        16.9252512,
        49.7412817
      ],
      [
        16.9255087,
        49.7412436
      ],
      [
        16.9260156,
        49.7412453
      ],
      [
        16.9264957,
        49.7413857
      ],
      [
        16.9267237,
        49.7415123
      ],
      [
        16.926829,
        49.7417951
      ],
      [
        16.9268688,
        49.7419019
      ],
      [
        16.9268729,
        49.7419433
      ],
      [
        16.926917,
        49.7421549
      ],
      [
        16.9269885,
        49.7422959
      ],
      [
        16.9270885,
        49.742493
      ],
      [
        16.9271314,
        49.7431277
      ],
      [
        16.9271496,
        49.7434687
      ],
      [
        16.9272442,
        49.7439994
      ],
      [
        16.9276166,
        49.7446883
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306304",
  "properties": {
    "highway": "residential",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306304"
  },
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        16.9334559,
        49.7481336
      ],
      [
        16.9322907,
        49.7474311
      ],
      [
        16.9320325,
        49.7469499
      ],
      [
        16.9317081,
        49.7464997
      ],
      [
        16.9313608,
        49.7461522
      ],
      [
        16.9311556,
        49.7459428
      ],
      [
        16.9309078,
        49.7458118
      ],
      [
        16.9303216,
        49.7457084
      ],
      [
        16.9301105,
        49.7456712
      ],
      [
        16.9296121,
        49.7454111
      ],
      [
        16.9290505,
        49.744992
      ],
      [
        16.9288073,
        49.7446815
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306305",
  "properties": {
    "highway": "residential",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306305"
  },
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        16.9216181,
        49.7449435
      ],
      [
        16.9226211,
        49.7448736
      ],
      [
        16.9254379,
        49.7447727
      ],
      [
        16.926585,
        49.7447223
      ],
      [
        16.9273628,
        49.7446524
      ],
      [
        16.9274514,
        49.744699
      ],
      [
        16.9276166,
        49.7446883
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306306",
  "properties": {
    "highway": "residential",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306306"
  },
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        16.9243989,
        49.7432358
      ],
      [
        16.9249454,
        49.7437869
      ],
      [
        16.9252727,
        49.7441809
      ],
      [
        16.9253929,
        49.7445961
      ],
      [
        16.9254379,
        49.7447727
      ],
      [
        16.9257667,
        49.7452404
      ],
      [
        16.926001,
        49.7455909
      ],
      [
        16.9262592,
        49.7459396
      ],
      [
        16.9264259,
        49.7461116
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306427",
  "properties": {
    "highway": "residential",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306427"
  },
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        16.9256301,
        49.7464959
      ],
      [
        16.9232577,
        49.747241
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306861",
  "properties": {
    "highway": "residential",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306861"
  },
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        16.9303216,
        49.7457084
      ],
      [
        16.9309053,
        49.7454258
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306862",
  "properties": {
    "highway": "residential",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198306862"
  },
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        16.9309078,
        49.7458118
      ],
      [
        16.9308972,
        49.7454971
      ],
      [
        16.9309053,
        49.7454258
      ],
      [
        16.9309509,
        49.7450256
      ],
      [
        16.9309884,
        49.7448748
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306865",
  "properties": {
    "highway": "residential",
    "source:start_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "start_date": "1937",
    "id": "way/198306865"
  },
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        16.9330162,
        49.7438852
      ],
      [
        16.9328928,
        49.7440932
      ],
      [
        16.932697,
        49.7442214
      ],
      [
        16.9324529,
        49.7443254
      ],
      [
        16.932131,
        49.7443618
      ],
      [
        16.931659,
        49.7444017
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306869",
  "properties": {
    "highway": "residential",
    "source:start_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "start_date": "1937",
    "id": "way/198306869"
  },
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        16.9316067,
        49.7422264
      ],
      [
        16.9319433,
        49.7421189
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306870",
  "properties": {
    "highway": "residential",
    "source:start_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "start_date": "1937",
    "id": "way/198306870"
  },
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        16.9312398,
        49.7429956
      ],
      [
        16.9314954,
        49.7427655
      ],
      [
        16.9315705,
        49.7426025
      ],
      [
        16.9316027,
        49.7423451
      ],
      [
        16.9316067,
        49.7422264
      ],
      [
        16.931262,
        49.7420288
      ],
      [
        16.9311333,
        49.7418936
      ],
      [
        16.9309348,
        49.7417775
      ],
      [
        16.9306827,
        49.7416423
      ],
      [
        16.9304869,
        49.7415677
      ],
      [
        16.9302508,
        49.7413857
      ],
      [
        16.9300014,
        49.7412193
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306871",
  "properties": {
    "highway": "residential",
    "source:start_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "start_date": "1937",
    "id": "way/198306871"
  },
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        16.932919,
        49.7436104
      ],
      [
        16.9327694,
        49.743126
      ],
      [
        16.9326809,
        49.7430185
      ],
      [
        16.932612,
        49.7429823
      ],
      [
        16.9324368,
        49.7428903
      ],
      [
        16.9320586,
        49.7422975
      ],
      [
        16.9319433,
        49.7421189
      ],
      [
        16.932072,
        49.7413424
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306872",
  "properties": {
    "highway": "residential",
    "source:start_date": "https://lms.cuzk.cz/lms/LMS_wms_02e.html?mapfile=WMSA08.1937.LITV71.07792&viewExtent=-571112.401,-1105278.173,-567029.586,-1101195.357&image_dir=d:/confms/lms/WMSA08/1937/LITV",
    "start_date": "1937",
    "id": "way/198306872"
  },
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        16.9344673,
        49.7440186
      ],
      [
        16.9341534,
        49.7439701
      ],
      [
        16.9338745,
        49.7439337
      ],
      [
        16.9333568,
        49.7439129
      ],
      [
        16.9330162,
        49.7438852
      ],
      [
        16.9327721,
        49.7436565
      ],
      [
        16.9324154,
        49.7435784
      ],
      [
        16.9312398,
        49.7429956
      ],
      [
        16.9311601,
        49.7429561
      ],
      [
        16.9311156,
        49.7428798
      ],
      [
        16.9310367,
        49.7427447
      ],
      [
        16.9306129,
        49.7425297
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307144",
  "properties": {
    "highway": "residential",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307144"
  },
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        16.9267237,
        49.7415123
      ],
      [
        16.9269102,
        49.7413622
      ],
      [
        16.9269999,
        49.7412701
      ],
      [
        16.9271073,
        49.7411405
      ],
      [
        16.9271408,
        49.7410243
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307145",
  "properties": {
    "highway": "residential",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307145"
  },
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        16.926829,
        49.7417951
      ],
      [
        16.9272456,
        49.741717
      ],
      [
        16.9273317,
        49.7416921
      ],
      [
        16.9273661,
        49.7416769
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307152",
  "properties": {
    "highway": "residential",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307152"
  },
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        16.9269885,
        49.7422959
      ],
      [
        16.9274586,
        49.74232
      ],
      [
        16.927987,
        49.7423339
      ],
      [
        16.92862,
        49.7424136
      ],
      [
        16.9287756,
        49.7424257
      ],
      [
        16.9290251,
        49.742554
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307153",
  "properties": {
    "highway": "residential",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "id": "way/198307153"
  },
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        16.9244546,
        49.7413164
      ],
      [
        16.923674,
        49.7415331
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/111529830",
  "properties": {
    "dibavod:id": "402640000100",
    "name": "Třebůvka",
    "source": "dibavod",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "waterway": "river",
    "id": "way/111529830"
  },
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        16.6667444,
        49.7555889
      ],
      [
        16.667041,
        49.7557553
      ],
      [
        16.6674373,
        49.7559948
      ],
      [
        16.6680156,
        49.7564918
      ],
      [
        16.6681043,
        49.7566391
      ],
      [
        16.6679553,
        49.7568849
      ],
      [
        16.6677832,
        49.757338
      ],
      [
        16.6677956,
        49.7574181
      ],
      [
        16.6679498,
        49.7576772
      ],
      [
        16.6682301,
        49.7579681
      ],
      [
        16.6683358,
        49.7582924
      ],
      [
        16.6680882,
        49.7589979
      ],
      [
        16.668103,
        49.7591269
      ],
      [
        16.6681835,
        49.7592623
      ],
      [
        16.6683477,
        49.7594124
      ],
      [
        16.6685467,
        49.75952
      ],
      [
        16.6691407,
        49.7597094
      ],
      [
        16.6699214,
        49.7600464
      ],
      [
        16.6703036,
        49.7603126
      ],
      [
        16.6704347,
        49.7605642
      ],
      [
        16.6706144,
        49.7607243
      ],
      [
        16.6713797,
        49.7610052
      ],
      [
        16.6714769,
        49.7610731
      ],
      [
        16.6716086,
        49.7612693
      ],
      [
        16.6717833,
        49.7619581
      ],
      [
        16.6718571,
        49.7621074
      ],
      [
        16.671969,
        49.7622162
      ],
      [
        16.672277,
        49.762329
      ],
      [
        16.6738728,
        49.7622272
      ],
      [
        16.6743295,
        49.7621672
      ],
      [
        16.674618,
        49.7621173
      ],
      [
        16.6751561,
        49.7618992
      ],
      [
        16.675332,
        49.7617857
      ],
      [
        16.6757954,
        49.761293
      ],
      [
        16.6763053,
        49.760683
      ],
      [
        16.6768315,
        49.76021
      ],
      [
        16.6776254,
        49.7597505
      ],
      [
        16.6783439,
        49.7594724
      ],
      [
        16.6788871,
        49.7593157
      ],
      [
        16.679315,
        49.759254
      ],
      [
        16.6806728,
        49.7592861
      ],
      [
        16.6810899,
        49.7592325
      ],
      [
        16.6838948,
        49.7584124
      ],
      [
        16.6850143,
        49.7581194
      ],
      [
        16.6856109,
        49.7579959
      ],
      [
        16.687104,
        49.7578321
      ],
      [
        16.6877847,
        49.7578329
      ],
      [
        16.6882337,
        49.7578646
      ],
      [
        16.6895431,
        49.7580837
      ],
      [
        16.6909428,
        49.7582644
      ],
      [
        16.6921434,
        49.7582666
      ],
      [
        16.6924687,
        49.7582316
      ],
      [
        16.6941463,
        49.7579693
      ],
      [
        16.694365,
        49.7579192
      ],
      [
        16.6949235,
        49.7577229
      ],
      [
        16.6955943,
        49.7573692
      ],
      [
        16.69609,
        49.7571747
      ],
      [
        16.6963528,
        49.7571104
      ],
      [
        16.6992112,
        49.7566591
      ],
      [
        16.6994687,
        49.7565836
      ],
      [
        16.7003262,
        49.7561463
      ],
      [
        16.7007748,
        49.755975
      ],
      [
        16.7018105,
        49.7558412
      ],
      [
        16.7028218,
        49.755804
      ],
      [
        16.7030013,
        49.7558283
      ],
      [
        16.704493,
        49.7563442
      ],
      [
        16.7049443,
        49.7564236
      ],
      [
        16.7055142,
        49.756452
      ],
      [
        16.706051,
        49.7564245
      ],
      [
        16.7065651,
        49.7563097
      ],
      [
        16.7067655,
        49.7562444
      ],
      [
        16.7092348,
        49.7552209
      ],
      [
        16.7098668,
        49.7549884
      ],
      [
        16.7104788,
        49.7547964
      ],
      [
        16.7141514,
        49.7535533
      ],
      [
        16.7146923,
        49.7534672
      ],
      [
        16.7149407,
        49.7534564
      ],
      [
        16.715114,
        49.7534522
      ],
      [
        16.7164391,
        49.753491
      ],
      [
        16.7181991,
        49.7534882
      ],
      [
        16.7191362,
        49.7533992
      ],
      [
        16.7216028,
        49.7530849
      ],
      [
        16.7223164,
        49.7528676
      ],
      [
        16.7231224,
        49.7523638
      ],
      [
        16.7235095,
        49.7521636
      ],
      [
        16.7236211,
        49.7520982
      ],
      [
        16.7248448,
        49.7516813
      ],
      [
        16.7284312,
        49.7506137
      ],
      [
        16.7286904,
        49.750582
      ],
      [
        16.7291321,
        49.7506579
      ],
      [
        16.7294898,
        49.7506509
      ],
      [
        16.7301567,
        49.7505139
      ],
      [
        16.7311199,
        49.7501651
      ],
      [
        16.7315101,
        49.7499427
      ],
      [
        16.7315789,
        49.7498263
      ],
      [
        16.7315359,
        49.7497118
      ],
      [
        16.7308308,
        49.7492159
      ],
      [
        16.7306166,
        49.7489161
      ],
      [
        16.7306037,
        49.7488472
      ],
      [
        16.7307407,
        49.7487172
      ],
      [
        16.7309271,
        49.7486054
      ],
      [
        16.7311819,
        49.7485114
      ],
      [
        16.7308319,
        49.7482518
      ],
      [
        16.7308599,
        49.7482206
      ],
      [
        16.7309982,
        49.7482214
      ],
      [
        16.7315052,
        49.748368
      ],
      [
        16.7316678,
        49.7483199
      ],
      [
        16.7317546,
        49.7482248
      ],
      [
        16.7316556,
        49.7480584
      ],
      [
        16.7316551,
        49.7479468
      ],
      [
        16.7313499,
        49.7478647
      ],
      [
        16.7313032,
        49.7478135
      ],
      [
        16.7312896,
        49.7476592
      ],
      [
        16.731258,
        49.7476143
      ],
      [
        16.7307451,
        49.7474132
      ],
      [
        16.73056,
        49.7472485
      ],
      [
        16.7304978,
        49.747118
      ],
      [
        16.7305329,
        49.7468964
      ],
      [
        16.7306958,
        49.7466496
      ],
      [
        16.7307689,
        49.7464663
      ],
      [
        16.7310524,
        49.74605
      ],
      [
        16.731094,
        49.7459348
      ],
      [
        16.7311075,
        49.7458524
      ],
      [
        16.7309197,
        49.7456933
      ],
      [
        16.7309039,
        49.7456247
      ],
      [
        16.7309237,
        49.7454429
      ],
      [
        16.7310358,
        49.74536
      ],
      [
        16.7317987,
        49.7452924
      ],
      [
        16.732741,
        49.7452963
      ],
      [
        16.7331704,
        49.7453574
      ],
      [
        16.7338794,
        49.7453749
      ],
      [
        16.7356934,
        49.7455776
      ],
      [
        16.7361104,
        49.7456535
      ],
      [
        16.736342,
        49.7457546
      ],
      [
        16.7364807,
        49.745779
      ],
      [
        16.7377468,
        49.7459393
      ],
      [
        16.7381106,
        49.7459653
      ],
      [
        16.738344,
        49.7459684
      ],
      [
        16.7389904,
        49.7458456
      ],
      [
        16.7397471,
        49.7456507
      ],
      [
        16.7403629,
        49.7453056
      ],
      [
        16.7408448,
        49.7447681
      ],
      [
        16.7409022,
        49.7445834
      ],
      [
        16.7410114,
        49.7444309
      ],
      [
        16.7411541,
        49.7441179
      ],
      [
        16.7409751,
        49.7438438
      ],
      [
        16.7409541,
        49.7436758
      ],
      [
        16.7408915,
        49.7435272
      ],
      [
        16.7403763,
        49.743007
      ],
      [
        16.7401708,
        49.7428596
      ],
      [
        16.7398149,
        49.7426715
      ],
      [
        16.7387207,
        49.742277
      ],
      [
        16.7384607,
        49.742148
      ],
      [
        16.7381402,
        49.7419504
      ],
      [
        16.7379933,
        49.7418136
      ],
      [
        16.7379664,
        49.741746
      ],
      [
        16.7380167,
        49.7415889
      ],
      [
        16.7385382,
        49.7412817
      ],
      [
        16.7386151,
        49.7411992
      ],
      [
        16.7384751,
        49.7407874
      ],
      [
        16.7381989,
        49.7401384
      ],
      [
        16.738192,
        49.7400208
      ],
      [
        16.7386073,
        49.7390393
      ],
      [
        16.7387707,
        49.7389246
      ],
      [
        16.7396579,
        49.7388608
      ],
      [
        16.7399263,
        49.7387027
      ],
      [
        16.7405482,
        49.7381839
      ],
      [
        16.740617,
        49.7380983
      ],
      [
        16.7408515,
        49.7376284
      ],
      [
        16.7412537,
        49.7366729
      ],
      [
        16.7412616,
        49.736551
      ],
      [
        16.7410165,
        49.7353567
      ],
      [
        16.741115,
        49.7346004
      ],
      [
        16.7410825,
        49.7339535
      ],
      [
        16.7410315,
        49.7337842
      ],
      [
        16.7401998,
        49.7327837
      ],
      [
        16.7399206,
        49.7323934
      ],
      [
        16.7396978,
        49.7319971
      ],
      [
        16.7395882,
        49.7318665
      ],
      [
        16.7393567,
        49.7317178
      ],
      [
        16.7390304,
        49.7316185
      ],
      [
        16.7388037,
        49.7316028
      ],
      [
        16.7374477,
        49.7316753
      ],
      [
        16.7367834,
        49.7316275
      ],
      [
        16.7362737,
        49.7315154
      ],
      [
        16.7357581,
        49.7313391
      ],
      [
        16.7354391,
        49.7311721
      ],
      [
        16.7350825,
        49.7308912
      ],
      [
        16.7348601,
        49.7305924
      ],
      [
        16.7347286,
        49.7303375
      ],
      [
        16.7345962,
        49.7300518
      ],
      [
        16.7342979,
        49.7293442
      ],
      [
        16.7339877,
        49.7288044
      ],
      [
        16.7333911,
        49.728147
      ],
      [
        16.7323997,
        49.7271569
      ],
      [
        16.7318187,
        49.7266331
      ],
      [
        16.7297174,
        49.7250663
      ],
      [
        16.7278168,
        49.7239402
      ],
      [
        16.7274722,
        49.7236446
      ],
      [
        16.7271455,
        49.7231413
      ],
      [
        16.7269385,
        49.7226505
      ],
      [
        16.726862,
        49.7224
      ],
      [
        16.7268589,
        49.7220472
      ],
      [
        16.7269118,
        49.7216566
      ],
      [
        16.7270178,
        49.7213602
      ],
      [
        16.727077,
        49.7211399
      ],
      [
        16.7273487,
        49.7205804
      ],
      [
        16.7274842,
        49.7200309
      ],
      [
        16.7274878,
        49.7199127
      ],
      [
        16.7276709,
        49.7194725
      ],
      [
        16.728131,
        49.7188745
      ],
      [
        16.7281836,
        49.7187471
      ],
      [
        16.7282259,
        49.7185909
      ],
      [
        16.7281993,
        49.7177613
      ],
      [
        16.7281015,
        49.7171683
      ],
      [
        16.7278221,
        49.7167072
      ],
      [
        16.7270036,
        49.7157422
      ],
      [
        16.726925,
        49.7155737
      ],
      [
        16.7268784,
        49.7151705
      ],
      [
        16.727133,
        49.714699
      ],
      [
        16.7271955,
        49.7145114
      ],
      [
        16.7271817,
        49.7142677
      ],
      [
        16.72726,
        49.7140711
      ],
      [
        16.7276851,
        49.7136169
      ],
      [
        16.7282046,
        49.7132158
      ],
      [
        16.7284007,
        49.7130994
      ],
      [
        16.7285914,
        49.7130622
      ],
      [
        16.728739,
        49.7130288
      ],
      [
        16.7290425,
        49.7130226
      ],
      [
        16.7293975,
        49.7131395
      ],
      [
        16.7296453,
        49.7133228
      ],
      [
        16.7299206,
        49.7134229
      ],
      [
        16.7304232,
        49.7134919
      ],
      [
        16.7305704,
        49.7134588
      ],
      [
        16.7311839,
        49.7129949
      ],
      [
        16.7313584,
        49.7128559
      ],
      [
        16.7316456,
        49.7125076
      ],
      [
        16.7318004,
        49.7122286
      ],
      [
        16.7320895,
        49.7118386
      ],
      [
        16.7322668,
        49.7116995
      ],
      [
        16.7326375,
        49.7115145
      ],
      [
        16.7331519,
        49.7111145
      ],
      [
        16.7334886,
        49.7109272
      ],
      [
        16.7345028,
        49.7105256
      ],
      [
        16.7349255,
        49.710434
      ],
      [
        16.7362069,
        49.7100178
      ],
      [
        16.7364642,
        49.7099834
      ],
      [
        16.7370246,
        49.7099769
      ],
      [
        16.7375083,
        49.7098349
      ],
      [
        16.7377055,
        49.7097518
      ],
      [
        16.7382046,
        49.7093135
      ],
      [
        16.7383745,
        49.7092144
      ],
      [
        16.7387953,
        49.7091697
      ],
      [
        16.739099,
        49.7090968
      ],
      [
        16.7395247,
        49.7088645
      ],
      [
        16.7400003,
        49.7087031
      ],
      [
        16.7404685,
        49.7082541
      ],
      [
        16.7406019,
        49.7080379
      ],
      [
        16.7406266,
        49.7079064
      ],
      [
        16.7406167,
        49.7077357
      ],
      [
        16.7405254,
        49.7075409
      ],
      [
        16.7401708,
        49.707037
      ],
      [
        16.7400177,
        49.7067064
      ],
      [
        16.7399882,
        49.7064191
      ],
      [
        16.7400138,
        49.7062632
      ],
      [
        16.7400588,
        49.7060877
      ],
      [
        16.7401969,
        49.7058379
      ],
      [
        16.7406059,
        49.7055824
      ],
      [
        16.741927,
        49.7050324
      ],
      [
        16.7427596,
        49.7047289
      ],
      [
        16.7442696,
        49.7042444
      ],
      [
        16.7448557,
        49.7041272
      ],
      [
        16.7458116,
        49.704158
      ],
      [
        16.746331,
        49.7042499
      ],
      [
        16.7465913,
        49.7043414
      ],
      [
        16.7475406,
        49.7048412
      ],
      [
        16.7495112,
        49.7057968
      ],
      [
        16.7499022,
        49.7060794
      ],
      [
        16.7521059,
        49.7085034
      ],
      [
        16.7524743,
        49.7087943
      ],
      [
        16.7534072,
        49.7096439
      ],
      [
        16.7537311,
        49.7100329
      ],
      [
        16.7538857,
        49.7102834
      ],
      [
        16.7546147,
        49.7112218
      ],
      [
        16.7549251,
        49.7115414
      ],
      [
        16.7556026,
        49.7121124
      ],
      [
        16.7560306,
        49.7124221
      ],
      [
        16.7564534,
        49.7127324
      ],
      [
        16.7568075,
        49.7129136
      ],
      [
        16.7573399,
        49.7130948
      ],
      [
        16.7582512,
        49.7131831
      ],
      [
        16.7590725,
        49.7131376
      ],
      [
        16.759738,
        49.7131161
      ],
      [
        16.760263,
        49.7131635
      ],
      [
        16.760753,
        49.7132768
      ],
      [
        16.7610201,
        49.713307
      ],
      [
        16.7629423,
        49.7133834
      ],
      [
        16.7641262,
        49.7134756
      ],
      [
        16.7665969,
        49.7142383
      ],
      [
        16.767117,
        49.7143621
      ],
      [
        16.7675886,
        49.7144205
      ],
      [
        16.7684017,
        49.7144023
      ],
      [
        16.7696923,
        49.7141825
      ],
      [
        16.7700987,
        49.7141494
      ],
      [
        16.7712957,
        49.7142036
      ],
      [
        16.7734692,
        49.7143969
      ],
      [
        16.7770487,
        49.7149246
      ],
      [
        16.7803542,
        49.7158048
      ],
      [
        16.7816762,
        49.7161203
      ],
      [
        16.7820984,
        49.7161796
      ],
      [
        16.7826269,
        49.7162164
      ],
      [
        16.7830924,
        49.7162037
      ],
      [
        16.7855153,
        49.7160816
      ],
      [
        16.7875885,
        49.7156455
      ],
      [
        16.7885877,
        49.7156568
      ],
      [
        16.789791,
        49.715926
      ],
      [
        16.7918674,
        49.7160636
      ],
      [
        16.7924544,
        49.7162009
      ],
      [
        16.7941326,
        49.7170623
      ],
      [
        16.7949317,
        49.7175159
      ],
      [
        16.7952,
        49.717654
      ],
      [
        16.795466,
        49.7177569
      ],
      [
        16.7959285,
        49.7178478
      ],
      [
        16.7983609,
        49.7179827
      ],
      [
        16.7999961,
        49.7178548
      ],
      [
        16.8003982,
        49.717853
      ],
      [
        16.8024846,
        49.7180063
      ],
      [
        16.8055921,
        49.7177316
      ],
      [
        16.8062035,
        49.7175837
      ],
      [
        16.8067331,
        49.7173921
      ],
      [
        16.8070755,
        49.7172238
      ],
      [
        16.8081333,
        49.716564
      ],
      [
        16.8082625,
        49.7164275
      ],
      [
        16.8083364,
        49.716295
      ],
      [
        16.8085961,
        49.7157179
      ],
      [
        16.8088675,
        49.7153742
      ],
      [
        16.8101074,
        49.7142015
      ],
      [
        16.8104041,
        49.7138682
      ],
      [
        16.8109183,
        49.7134118
      ],
      [
        16.811303,
        49.713154
      ],
      [
        16.8118608,
        49.7128676
      ],
      [
        16.8125758,
        49.7124585
      ],
      [
        16.8130405,
        49.7122414
      ],
      [
        16.8141297,
        49.7120802
      ],
      [
        16.8142665,
        49.7120962
      ],
      [
        16.8157901,
        49.7125898
      ],
      [
        16.817766,
        49.7126099
      ],
      [
        16.8204089,
        49.71308
      ],
      [
        16.8208439,
        49.7131291
      ],
      [
        16.8233272,
        49.7127424
      ],
      [
        16.8240939,
        49.71244
      ],
      [
        16.8247805,
        49.7120828
      ],
      [
        16.8255962,
        49.7118252
      ],
      [
        16.8260135,
        49.7117477
      ],
      [
        16.8269227,
        49.7117018
      ],
      [
        16.8271181,
        49.7116549
      ],
      [
        16.8277795,
        49.7114159
      ],
      [
        16.8281083,
        49.7112072
      ],
      [
        16.8284715,
        49.710725
      ],
      [
        16.8286931,
        49.710335
      ],
      [
        16.8289011,
        49.7100505
      ],
      [
        16.8293324,
        49.7097367
      ],
      [
        16.8297061,
        49.7095441
      ],
      [
        16.8305321,
        49.7092731
      ],
      [
        16.8313001,
        49.7090241
      ],
      [
        16.8316936,
        49.7088572
      ],
      [
        16.8320114,
        49.7086724
      ],
      [
        16.8322951,
        49.7084681
      ],
      [
        16.8323698,
        49.7077993
      ],
      [
        16.832421,
        49.7077147
      ],
      [
        16.8328834,
        49.7074909
      ],
      [
        16.8331808,
        49.7073896
      ],
      [
        16.8342116,
        49.7072155
      ],
      [
        16.8344405,
        49.7069131
      ],
      [
        16.834914,
        49.7064319
      ],
      [
        16.8353809,
        49.7062343
      ],
      [
        16.8357147,
        49.706143
      ],
      [
        16.8367319,
        49.7059722
      ],
      [
        16.8382416,
        49.7060137
      ],
      [
        16.8398962,
        49.7058325
      ],
      [
        16.8403502,
        49.7057369
      ],
      [
        16.8406049,
        49.70566
      ],
      [
        16.8410517,
        49.7054605
      ],
      [
        16.8413411,
        49.7052791
      ],
      [
        16.8414913,
        49.7050069
      ],
      [
        16.8418899,
        49.7047094
      ],
      [
        16.8421657,
        49.7045773
      ],
      [
        16.8426416,
        49.7044501
      ],
      [
        16.8428808,
        49.704424
      ],
      [
        16.8430496,
        49.7044537
      ],
      [
        16.843256,
        49.7045734
      ],
      [
        16.8439916,
        49.7051786
      ],
      [
        16.8445867,
        49.7053031
      ],
      [
        16.8448483,
        49.7054828
      ],
      [
        16.8449978,
        49.7056965
      ],
      [
        16.8450312,
        49.7063738
      ],
      [
        16.8450467,
        49.7064605
      ],
      [
        16.8452497,
        49.7071792
      ],
      [
        16.8456358,
        49.7079819
      ],
      [
        16.8459306,
        49.7083155
      ],
      [
        16.8463697,
        49.7086795
      ],
      [
        16.8468286,
        49.7088292
      ],
      [
        16.8475707,
        49.7089424
      ],
      [
        16.8481064,
        49.7089122
      ],
      [
        16.8483214,
        49.7088651
      ],
      [
        16.8492575,
        49.708653
      ],
      [
        16.8499344,
        49.7085053
      ],
      [
        16.8504449,
        49.7084751
      ],
      [
        16.8514456,
        49.7082791
      ],
      [
        16.8522966,
        49.7081995
      ],
      [
        16.8559376,
        49.7074042
      ],
      [
        16.8574195,
        49.7071528
      ],
      [
        16.8583211,
        49.706895
      ],
      [
        16.8591176,
        49.7064652
      ],
      [
        16.8594188,
        49.7063001
      ],
      [
        16.8597295,
        49.7061837
      ],
      [
        16.8601439,
        49.706182
      ],
      [
        16.8609543,
        49.7063839
      ],
      [
        16.8612871,
        49.7063775
      ],
      [
        16.8614898,
        49.7063378
      ],
      [
        16.8623087,
        49.7061113
      ],
      [
        16.8635147,
        49.7054231
      ],
      [
        16.8643879,
        49.7054119
      ],
      [
        16.8645593,
        49.705459
      ],
      [
        16.8646,
        49.7055363
      ],
      [
        16.8642559,
        49.7060768
      ],
      [
        16.86433,
        49.706148
      ],
      [
        16.8645235,
        49.7061739
      ],
      [
        16.864587,
        49.7061737
      ],
      [
        16.8647163,
        49.7061732
      ],
      [
        16.8655556,
        49.7059429
      ],
      [
        16.8664631,
        49.7057748
      ],
      [
        16.8669769,
        49.7057088
      ],
      [
        16.8672181,
        49.7057348
      ],
      [
        16.8676616,
        49.7058624
      ],
      [
        16.8678666,
        49.7059656
      ],
      [
        16.8683308,
        49.7062223
      ],
      [
        16.8685805,
        49.7063027
      ],
      [
        16.8693669,
        49.7064618
      ],
      [
        16.8704804,
        49.7066094
      ],
      [
        16.8707791,
        49.7066719
      ],
      [
        16.8710091,
        49.7067831
      ],
      [
        16.8718073,
        49.707691
      ],
      [
        16.8726146,
        49.7084295
      ],
      [
        16.8732345,
        49.7091684
      ],
      [
        16.8731765,
        49.7093756
      ],
      [
        16.8729932,
        49.7097712
      ],
      [
        16.8731043,
        49.7098233
      ],
      [
        16.8741323,
        49.7101054
      ],
      [
        16.8745881,
        49.7101624
      ],
      [
        16.874988,
        49.7101746
      ],
      [
        16.8761561,
        49.71042
      ],
      [
        16.8765042,
        49.7103439
      ],
      [
        16.876898,
        49.7104031
      ],
      [
        16.8778265,
        49.7104411
      ],
      [
        16.8780505,
        49.7104065
      ],
      [
        16.8786458,
        49.7103757
      ],
      [
        16.8789809,
        49.7104205
      ],
      [
        16.8790487,
        49.710475
      ],
      [
        16.87907,
        49.7107809
      ],
      [
        16.8791406,
        49.710865
      ],
      [
        16.8796156,
        49.71108
      ],
      [
        16.8800206,
        49.7114367
      ],
      [
        16.8802311,
        49.7117123
      ],
      [
        16.8806712,
        49.7124206
      ],
      [
        16.8809818,
        49.7128037
      ],
      [
        16.8813026,
        49.7131315
      ],
      [
        16.8815372,
        49.7133304
      ],
      [
        16.8817488,
        49.7134525
      ],
      [
        16.8819756,
        49.713496
      ],
      [
        16.8823887,
        49.7134901
      ],
      [
        16.8825982,
        49.7135295
      ],
      [
        16.8828369,
        49.7137936
      ],
      [
        16.8832326,
        49.7141559
      ],
      [
        16.8832935,
        49.7143941
      ],
      [
        16.8832061,
        49.7146604
      ],
      [
        16.8831958,
        49.7147866
      ],
      [
        16.883231,
        49.7148918
      ],
      [
        16.8835385,
        49.7151603
      ],
      [
        16.8836358,
        49.7152976
      ],
      [
        16.8837071,
        49.7155708
      ],
      [
        16.8836398,
        49.7159572
      ],
      [
        16.8835445,
        49.7162198
      ],
      [
        16.8834028,
        49.7164781
      ],
      [
        16.8833152,
        49.7165946
      ],
      [
        16.883127,
        49.7168645
      ],
      [
        16.8831269,
        49.7169327
      ],
      [
        16.8832022,
        49.717003
      ],
      [
        16.8839591,
        49.7172755
      ],
      [
        16.8841881,
        49.7172476
      ],
      [
        16.8844081,
        49.717083
      ],
      [
        16.8845419,
        49.7170566
      ],
      [
        16.8846519,
        49.717073
      ],
      [
        16.8852067,
        49.7174306
      ],
      [
        16.8856178,
        49.7175724
      ],
      [
        16.8858306,
        49.717604
      ],
      [
        16.8870519,
        49.7176662
      ],
      [
        16.8877853,
        49.7176507
      ],
      [
        16.8883763,
        49.7175744
      ],
      [
        16.8885641,
        49.7175045
      ],
      [
        16.8886475,
        49.7174307
      ],
      [
        16.8886893,
        49.717328
      ],
      [
        16.888683,
        49.7172209
      ],
      [
        16.8885786,
        49.7168712
      ],
      [
        16.8885906,
        49.7168177
      ],
      [
        16.8886579,
        49.7167705
      ],
      [
        16.8888368,
        49.7167037
      ],
      [
        16.8890961,
        49.7166451
      ],
      [
        16.8895915,
        49.7165821
      ],
      [
        16.890148,
        49.7165837
      ],
      [
        16.8903069,
        49.7166258
      ],
      [
        16.8904759,
        49.7167101
      ],
      [
        16.8908501,
        49.7169929
      ],
      [
        16.8912209,
        49.7171555
      ],
      [
        16.8928285,
        49.7174986
      ],
      [
        16.8933034,
        49.7176783
      ],
      [
        16.8935894,
        49.7177986
      ],
      [
        16.8937523,
        49.7179228
      ],
      [
        16.8931541,
        49.7181696
      ],
      [
        16.8931017,
        49.7182233
      ],
      [
        16.893041,
        49.7184233
      ],
      [
        16.8930552,
        49.7184815
      ],
      [
        16.8930662,
        49.7185172
      ],
      [
        16.8933012,
        49.718876
      ],
      [
        16.8935167,
        49.7191156
      ],
      [
        16.8936252,
        49.7191467
      ],
      [
        16.8943032,
        49.7190995
      ],
      [
        16.8944161,
        49.7191246
      ],
      [
        16.8951286,
        49.7196
      ],
      [
        16.8962069,
        49.7200393
      ],
      [
        16.8964005,
        49.7201901
      ],
      [
        16.8965866,
        49.7207851
      ],
      [
        16.8966603,
        49.7211327
      ],
      [
        16.8966485,
        49.7212528
      ],
      [
        16.8963666,
        49.7215256
      ],
      [
        16.8963197,
        49.7216084
      ],
      [
        16.8964351,
        49.721743
      ],
      [
        16.8966516,
        49.7218927
      ],
      [
        16.8968936,
        49.722564
      ],
      [
        16.897007,
        49.7227062
      ],
      [
        16.8972407,
        49.7227959
      ],
      [
        16.897537,
        49.7227949
      ],
      [
        16.8977067,
        49.7227439
      ],
      [
        16.897951,
        49.7225324
      ],
      [
        16.8981272,
        49.7222835
      ],
      [
        16.898351,
        49.722121
      ],
      [
        16.8985912,
        49.7220923
      ],
      [
        16.898706,
        49.7221052
      ],
      [
        16.8990697,
        49.7223229
      ],
      [
        16.8994984,
        49.7227646
      ],
      [
        16.8996565,
        49.7230525
      ],
      [
        16.8997921,
        49.7234651
      ],
      [
        16.8999324,
        49.7242826
      ],
      [
        16.8999875,
        49.7244213
      ],
      [
        16.9003369,
        49.7249632
      ],
      [
        16.9005085,
        49.7253772
      ],
      [
        16.9006155,
        49.7255227
      ],
      [
        16.9009758,
        49.7258193
      ],
      [
        16.9010528,
        49.7259421
      ],
      [
        16.9010711,
        49.7260533
      ],
      [
        16.9010385,
        49.7261828
      ],
      [
        16.9008675,
        49.7264146
      ],
      [
        16.9005343,
        49.726666
      ],
      [
        16.8996721,
        49.727137
      ],
      [
        16.8985545,
        49.7276156
      ],
      [
        16.8981357,
        49.7280439
      ],
      [
        16.8971594,
        49.7286683
      ],
      [
        16.8968687,
        49.7289226
      ],
      [
        16.8966239,
        49.7293204
      ],
      [
        16.8964132,
        49.7295893
      ],
      [
        16.8962807,
        49.7298325
      ],
      [
        16.8963369,
        49.7301107
      ],
      [
        16.8964302,
        49.7302575
      ],
      [
        16.8969636,
        49.7308331
      ],
      [
        16.8974217,
        49.7312648
      ],
      [
        16.897789,
        49.7315597
      ],
      [
        16.8983926,
        49.7320072
      ],
      [
        16.8988346,
        49.7322831
      ],
      [
        16.8991266,
        49.7324143
      ],
      [
        16.8993441,
        49.7323892
      ],
      [
        16.8997594,
        49.7322466
      ],
      [
        16.9000012,
        49.7322175
      ],
      [
        16.900311,
        49.7322356
      ],
      [
        16.9019752,
        49.732613
      ],
      [
        16.9024449,
        49.7327628
      ],
      [
        16.9034955,
        49.7333497
      ],
      [
        16.9039157,
        49.7337269
      ],
      [
        16.9043667,
        49.7342076
      ],
      [
        16.904577,
        49.7343616
      ],
      [
        16.904899,
        49.7345183
      ],
      [
        16.9061027,
        49.7347701
      ],
      [
        16.9071158,
        49.7351747
      ],
      [
        16.9073379,
        49.735214
      ],
      [
        16.907967,
        49.7353081
      ],
      [
        16.9083134,
        49.7352727
      ],
      [
        16.908595,
        49.7351841
      ],
      [
        16.909639,
        49.734712
      ],
      [
        16.9108343,
        49.7341159
      ],
      [
        16.9111305,
        49.7338961
      ],
      [
        16.9112091,
        49.7337825
      ],
      [
        16.911267,
        49.7336501
      ],
      [
        16.9112217,
        49.7332073
      ],
      [
        16.9113083,
        49.7331244
      ],
      [
        16.9116725,
        49.7330315
      ],
      [
        16.9121459,
        49.7327956
      ],
      [
        16.912477,
        49.7326812
      ],
      [
        16.9128499,
        49.7326054
      ],
      [
        16.9132222,
        49.7324347
      ],
      [
        16.9138277,
        49.7323029
      ],
      [
        16.9142375,
        49.7321676
      ],
      [
        16.915606,
        49.7315678
      ],
      [
        16.9166267,
        49.7312752
      ],
      [
        16.9170883,
        49.7312098
      ],
      [
        16.9176194,
        49.7312323
      ],
      [
        16.9188128,
        49.7314945
      ],
      [
        16.9193259,
        49.7316961
      ],
      [
        16.919502,
        49.7318485
      ],
      [
        16.9196189,
        49.7321444
      ],
      [
        16.9196646,
        49.73226
      ],
      [
        16.9200347,
        49.7325331
      ],
      [
        16.9204963,
        49.7327607
      ],
      [
        16.921087,
        49.7331241
      ],
      [
        16.9218235,
        49.7334527
      ],
      [
        16.9221645,
        49.7337196
      ],
      [
        16.9223792,
        49.7339809
      ],
      [
        16.9226341,
        49.7344489
      ],
      [
        16.923004,
        49.7348311
      ],
      [
        16.9231789,
        49.7352735
      ],
      [
        16.923176,
        49.7353991
      ],
      [
        16.9231358,
        49.7354887
      ],
      [
        16.9228221,
        49.7357241
      ],
      [
        16.9227019,
        49.7359223
      ],
      [
        16.9226626,
        49.7360329
      ],
      [
        16.9226588,
        49.7362584
      ],
      [
        16.9226884,
        49.73641
      ],
      [
        16.9228381,
        49.7366333
      ],
      [
        16.9231538,
        49.7369503
      ],
      [
        16.9239039,
        49.7376244
      ],
      [
        16.9256338,
        49.7388859
      ],
      [
        16.9259594,
        49.7390071
      ],
      [
        16.9261757,
        49.7390433
      ],
      [
        16.9265111,
        49.7391815
      ],
      [
        16.9273938,
        49.7394217
      ],
      [
        16.9276548,
        49.7395693
      ],
      [
        16.9278996,
        49.7397888
      ],
      [
        16.9284208,
        49.740439
      ],
      [
        16.9285728,
        49.7405807
      ],
      [
        16.9294204,
        49.7412124
      ],
      [
        16.9296639,
        49.7415231
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306668",
  "properties": {
    "dibavod:id": "402640000100",
    "name": "Třebůvka",
    "source": "dibavod",
    "start_date": "1990",
    "waterway": "river",
    "id": "way/198306668"
  },
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        16.9296639,
        49.7415231
      ],
      [
        16.9297942,
        49.7418807
      ],
      [
        16.9297604,
        49.7424034
      ],
      [
        16.929758,
        49.7424691
      ],
      [
        16.9296548,
        49.7431537
      ],
      [
        16.9296625,
        49.7433564
      ],
      [
        16.9297538,
        49.7435546
      ],
      [
        16.9298969,
        49.7437594
      ],
      [
        16.9303665,
        49.744267
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306669",
  "properties": {
    "end_date": "1989",
    "name": "Třebůvka",
    "source": "dibavod",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "waterway": "river",
    "id": "way/198306669"
  },
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        16.9296639,
        49.7415231
      ],
      [
        16.929658,
        49.7419265
      ],
      [
        16.9295157,
        49.7423661
      ],
      [
        16.9294649,
        49.7425228
      ],
      [
        16.929304,
        49.742866
      ],
      [
        16.9292933,
        49.7431884
      ],
      [
        16.9294113,
        49.7433894
      ],
      [
        16.9297653,
        49.7437118
      ],
      [
        16.9303665,
        49.744267
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198306670",
  "properties": {
    "dibavod:id": "402640000100",
    "name": "Třebůvka",
    "source": "dibavod",
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "waterway": "river",
    "id": "way/198306670"
  },
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        16.9303665,
        49.744267
      ],
      [
        16.9305404,
        49.7444551
      ],
      [
        16.9306443,
        49.7445674
      ],
      [
        16.9307782,
        49.7446436
      ],
      [
        16.9310777,
        49.7447429
      ],
      [
        16.9313771,
        49.7447774
      ],
      [
        16.9316088,
        49.744758
      ],
      [
        16.9320719,
        49.7446523
      ],
      [
        16.9330609,
        49.7441876
      ],
      [
        16.9333184,
        49.7441128
      ],
      [
        16.9339788,
        49.7441032
      ],
      [
        16.9345722,
        49.7441505
      ],
      [
        16.9347365,
        49.7441636
      ],
      [
        16.9350507,
        49.7442444
      ],
      [
        16.9356462,
        49.7445612
      ],
      [
        16.9371499,
        49.7447797
      ],
      [
        16.9374788,
        49.7448723
      ],
      [
        16.9383543,
        49.7452094
      ],
      [
        16.9387815,
        49.7454172
      ],
      [
        16.9391093,
        49.745502
      ],
      [
        16.9393107,
        49.7455134
      ],
      [
        16.9413417,
        49.7453394
      ],
      [
        16.9415636,
        49.7452562
      ],
      [
        16.9417706,
        49.745054
      ],
      [
        16.9421938,
        49.7448498
      ],
      [
        16.9427489,
        49.7447646
      ],
      [
        16.9432458,
        49.7447846
      ],
      [
        16.9445811,
        49.745182
      ],
      [
        16.9458515,
        49.7453488
      ],
      [
        16.9461763,
        49.7454604
      ],
      [
        16.9473222,
        49.7459645
      ],
      [
        16.9487325,
        49.7466097
      ],
      [
        16.949745,
        49.7471309
      ],
      [
        16.9504789,
        49.7474281
      ],
      [
        16.9510437,
        49.7476101
      ],
      [
        16.9515344,
        49.7476595
      ],
      [
        16.9540203,
        49.7474938
      ],
      [
        16.9544337,
        49.7475297
      ],
      [
        16.9548626,
        49.7476583
      ],
      [
        16.9555859,
        49.7481298
      ],
      [
        16.9558484,
        49.7482564
      ],
      [
        16.9560349,
        49.7482813
      ],
      [
        16.9569162,
        49.7482611
      ],
      [
        16.9573443,
        49.748295
      ],
      [
        16.9585509,
        49.7484448
      ],
      [
        16.9596293,
        49.7487218
      ],
      [
        16.9601484,
        49.7489017
      ],
      [
        16.9603388,
        49.7490215
      ],
      [
        16.9604802,
        49.7491503
      ],
      [
        16.9607763,
        49.7497331
      ],
      [
        16.9610866,
        49.7500471
      ],
      [
        16.9618039,
        49.7505524
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307141",
  "properties": {
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "waterway": "stream",
    "id": "way/198307141"
  },
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        16.9269755,
        49.7410113
      ],
      [
        16.9269345,
        49.7412731
      ],
      [
        16.9269893,
        49.7413497
      ],
      [
        16.9272679,
        49.7416878
      ],
      [
        16.9273152,
        49.7417202
      ],
      [
        16.927405,
        49.7417636
      ],
      [
        16.9276881,
        49.7417636
      ],
      [
        16.9279352,
        49.7417636
      ],
      [
        16.9283169,
        49.7417636
      ],
      [
        16.9286187,
        49.7417237
      ],
      [
        16.9291162,
        49.7416951
      ],
      [
        16.9293123,
        49.7417655
      ],
      [
        16.929658,
        49.7419265
      ]
    ]
  }
},
{
  "type": "Feature",
  "id": "way/198307142",
  "properties": {
    "source:start_date": "https://www.mza.cz/indikacniskici/index.php#show:MOR134418340",
    "start_date": "1834",
    "waterway": "stream",
    "id": "way/198307142"
  },
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        16.9235716,
        49.742248
      ],
      [
        16.9241408,
        49.7422039
      ],
      [
        16.9245243,
        49.7422663
      ],
      [
        16.9247711,
        49.7421692
      ],
      [
        16.9249602,
        49.7421952
      ],
      [
        16.9252217,
        49.7421354
      ],
      [
        16.9253732,
        49.7419187
      ],
      [
        16.9257112,
        49.7419456
      ],
      [
        16.925903,
        49.7419274
      ],
      [
        16.9262114,
        49.7418711
      ],
      [
        16.9262865,
        49.7418
      ],
      [
        16.9264394,
        49.7418087
      ],
      [
        16.926721,
        49.7418806
      ],
      [
        16.9268283,
        49.7419034
      ],
      [
        16.926922,
        49.7419405
      ],
      [
        16.9270456,
        49.742021
      ],
      [
        16.9271703,
        49.7421926
      ],
      [
        16.9272548,
        49.7422307
      ],
      [
        16.9280916,
        49.7422819
      ],
      [
        16.9287112,
        49.7423287
      ],
      [
        16.9292595,
        49.7423145
      ],
      [
        16.9295157,
        49.7423661
      ]
    ]
  }
}
]
};
var Qlabels = [
	{ q: "Q104209260", jm: "Gisela Alterová", arch: "Gisela Alterová (1886)" },
	{ q: "Q104409328", jm: "Berta Bratmann", arch: "Berta Bratmann (1876)" },
	{ q: "Q104446762", jm: "Karel Eisner", arch: "Karl Eisner (1888)" },
	{ q: "Q104448734", jm: "Heřman Ehrlich", arch: "Heřman Ehrlich (1903)" },
	{ q: "Q104448793", jm: "Růžena Ehrlichová", arch: "Rosa Ehrlich (1879)" },
	{ q: "Q104449312", jm: "Vilma Eisnerová", arch: "Wilma Eisner (1877)" },
	{ q: "Q104449337", jm: "Arnošt Eckstein", arch: "Arnošt Eckstein (1895)" },
	{ q: "Q104545017", jm: "Therese Fischer", arch: "Therese Fischer (1856)" },
	{ q: "Q104654795", jm: "Anna Freudová", arch: "Anna Freud (1877)" },
	{ q: "Q104658054", jm: "Anna Glasová", arch: "Anna Glasová (1870)" },
	{ q: "Q104707557", jm: "Ida Hirschová", arch: "Ida Hirschová (1882)" },
	{ q: "Q105464811", jm: "Emil Karell", arch: "Emil Karell (1867)" },
	{ q: "Q105504117", jm: "Moritz Siegel", arch: "Moritz Siegel (1868)" },
	{ q: "Q105517230", jm: "Olga Günstlingová", arch: "Olga Günstlingová (1884)" },
	{ q: "Q105520051", jm: "Lina Kellnerová", arch: "Lina Kellnerová (1873–1942)" },
	{ q: "Q105520830", jm: "Ella Gottliebová - Kleinová", arch: "Ella Klein (1896)" },
	{ q: "Q105520830", jm: "Ella Kleinová", arch: "Ella Klein (1896)" },
	{ q: "Q105521910", jm: "Charlotta Knöpflmacherová", arch: "Charlotta Knöpflmacherová (1884)" },
	{ q: "Q105526409", jm: "Hermína Kornblühová", arch: "Hermína Kornblühová (1881)" },
	{ q: "Q105560898", jm: "Flora Langerová", arch: "Flora Langerová (1882)" },
	{ q: "Q105560912", jm: "Greta Langerová", arch: "Greta Langerová (1913)" },
	{ q: "Q105560923", jm: "Herta Langerová", arch: "Herta Langerová (1914)" },
	{ q: "Q105560978", jm: "Růžena Langerová", arch: "Růžena Langerová (1888)" },
	{ q: "Q105606021", jm: "Julie Spitzerová", arch: "Julie Spitzerová (1901)" },
	{ q: "Q105619665", jm: "Greta Weissová", arch: "Grete Weiss (1912)" },
	{ q: "Q105619711", jm: "Ida Weissová", arch: "Ida Weiss (1878)" },
	{ q: "Q105619928", jm: "Pavla Weissová", arch: "Paula Weiss (1911)" },
	{ q: "Q105638143", jm: "Šalomoun Weisz", arch: "Salomon Weiss (1866)" },
	{ q: "Q105639503", jm: "Irma Wischnitzerová", arch: "Irma Wischnitzerová (1886)" },
	{ q: "Q105642427", jm: "Therese Weissová", arch: "Resie Weiss (1902)" },
	{ q: "Q108900721", jm: "Ernst Skopal", arch: "Ernst Skopal (1898)" },
	{ q: "Q23060822", jm: "Asriel Günzig", arch: "Israel Günzig (1868)" },
	{ q: "Q23060822", jm: "Azri'el ben Šlomo Gincig", arch: "Israel Günzig (1868)" },
	{ q: "Q23060822", jm: "Azri'el Gincig", arch: "Israel Günzig (1868)" },
	{ q: "Q23060822", jm: "Azri'el Günzig", arch: "Israel Günzig (1868)" },
	{ q: "Q23060822", jm: "Azriel Günzig", arch: "Israel Günzig (1868)" },
	{ q: "Q23060822", jm: "Ezriel Guenzig", arch: "Israel Günzig (1868)" },
	{ q: "Q23060822", jm: "Ezriel Günzig", arch: "Israel Günzig (1868)" },
	{ q: "Q23060822", jm: "J. Günzig", arch: "Israel Günzig (1868)" },
	{ q: "Q23060822", jm: "Jisra'el Gincig", arch: "Israel Günzig (1868)" },
	{ q: "Q55844336", jm: "Elias Karpeles", arch: "Elias Karpelles (1822)" },
	{ q: "Q60815329", jm: "Ludwig Karell", arch: "Ludwig Karpelles (1858)" },
];
