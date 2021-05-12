tlv_vars = {
	"version": "120421-3.0",
	"isMobile": undefined,
	"feedbackTel": "+972544584417",
	"feedbackEmail": "davidleigh1@gmail.com",
	"feedbackDefaultMsg": "Feedback on TLV place",
	"he": {
		"feedbackDefaultMsg": "משוב על המקום ב- TLV"
	}
};

tlv_template = {
	"he": {
		"name": "",
		"aka": "",
		"cross_streets": [],
		"close_streets": [],
		"approx_address": "",
		"restaurants": [],
		"hotels": [],
		"notes_access": "",
		"landmarks": [],
		"pre_nav_msg": ""
	},
	"name": "",
	"lat": "",
	"lon": "",
	"aka": "",
	"type_order": "",
	"overall_order": "",
	"cross_streets": [],
	"close_streets": [],
	"approx_address": "",
	"restaurants": [],
	"hotels": [],
	"notes_access": "",
	"landmarks": [],
	"has_lifeguard": false,
	// "has_firstaid": false,	
	"is_official": false,
	"has_gates": false,
	"motorcycle_access": false,
	"car_access": false,
	// "on_foot_only": true,
	// "parking": [],
	"pre_nav_msg": "",
	"type": "beach_unofficial"
}

tlv_data = [
     {
          he: {
               name: "צוק צפון עד הרצליה",
               aka: "חוף הפרצה",
               approx_address: "הצוק הצפוני ,תל אביב",
               notes_access: "מצפון לחוף הצוק צפון ועד לגבול הרצליה. חוף אסור לרחצה",
               pre_nav_msg:
                    "כניסה לאופנועים בלבד - להכנס לחוף הצוק צפון / חוף מנדרין ולפנות ימינה (צפונה) עד לסוף הטיילת הסלולה. מכוניות/אופנועים - לנסוע צפונה דרך החניה לאורך הצוק עד לסוף הגדר (משמאל), משם ניתן לרדת (בזהירות!) מהצוק לכיוון החוף.",
          },
          name: "HaTzuk to Hertzilya",
          lat: "32.14511531",
          lon: "34.79235336",
          aka: "HaTzuk North, Hapirza Beach",
          type_order: "",
          overall_order: "1",
          cross_streets: [],
          close_streets: [],
          approx_address: "HaTsuk HaZfoni, Israel",
          restaurants: [],
          hotels: [],
          notes_access: "North of the official HaTzuk North beach up to border with Hertzilya. Swimming is forbidden.",
          landmarks: [],
          has_lifeguard: false,
          // "has_firstaid": false,
          is_official: false,
          has_gates: false,
          motorcycle_access: false,
          car_access: false,
          // "on_foot_only": true,
          // "parking": [],
          pre_nav_msg:
               "<b>🏍️ Motorcycles ONLY</b> - Enter HaTzuk North/Mandarin Beach via the gate and go down to the beach/tayelet. Turn right (north) until the end of the paved tayelet. <br><b>🚗 Cars/Motorcycles</b> - Drive north through the parking and continue along the cliff until the end of the fence (on your left). You can then (carefully!) go down the cliffs to the sea shore.",
          type: "landmark",
     },
     {
          he: {
               name: "הצוק (צפון - מנדרין)",
               aka: "ריף, תל ברוך, הצוק, צוק",
               cross_streets: ["2170", "יוניצ'מן"],
               close_streets: ["2170", "יוניצ'מן"],
               approx_address: "הצוק הצפוני 20, תל אביב",
               restaurants: ["מעבר לקצה", "אספרסו בר (@מנדרין)"],
               hotels: ["מלון מנדרין"],
               landmarks: ["(2021 #13) סוכת מציל #26"],
               notes_access: "גישה לאמבולנס דרך שער לצד שמאל של השער הראשי להולכי רגל. אופנועים יכולים להשתמש בשער הולכי הרגל.",
               pre_nav_msg: "גישה לאמבולנס דרך שער לצד שמאל של השער הראשי להולכי רגל. אופנועים יכולים להשתמש בשער הולכי הרגל.",
          },
          name: "HaTzuk (North / Mandarin)",
          lat: "32.14366638",
          lon: "34.79220048",
          aka: "Reef, Tel Baruch, Tsuk, Tzuk, HaTsuk, HaTzuk",
          type_order: "",
          overall_order: "2",
          cross_streets: ["2170", "Yunitzman"],
          close_streets: ["Yunitsman", "Juniczman"],
          approx_address: "מקום מפגש חוף הצוק, 2170 St, Tel Aviv-Yafo",
          restaurants: ["MeEver Laktaze", "Espresso Bar (@Mandarin)"],
          hotels: ["Mandarin"],
          notes_access: "Ambulance access via a gate to the LEFT of the pedestrian gate. Motorcycles can use the pedestrian gate.",
          landmarks: ["Lifeguard Hut #26 (2021 #13)"],
          has_lifeguard: true,
          is_official: true,
          has_gates: true,
          motorcycle_access: true,
          car_access: false,
          pre_nav_msg: "<b>🏍️ Motorcycles</b> only - Enter via main gate. <br><b>🚗 Cars</b> - Enter via electric barrier to LEFT of main gate",
          type: "beach_official",
     },
     {
          he: {
               name: "הצוק דרום (סי אנד סאן)",
               aka: "חוף הצוק הדרומי",
               cross_streets: ["שמעון סאמט"],
               close_streets: ["2170", "2040", "הרצל רוזנבלום"],
               approx_address: "שמעון סאמט, תל אביב",
               restaurants: ["בננה ביץ'", "חוץ הצוק"],
               hotels: ["מלון ווסט (West)"],
               landmarks: ["סי אנד סאן", "סוכת מציל #25"],
          },
          name: "HaTzuk South (Sea & Sun)",
          lat: "32.14007574",
          lon: "34.79108065",
          aka: "Reef, Tel Baruch, Tsuk, Tzuk, HaTsuk, HaTzuk",
          type_order: "",
          overall_order: "3",
          cross_streets: ["Shim'on Samat"],
          close_streets: ["2170", "2040", "Rozenblum Hertzl", "Shimon Samat (Semet)"],
          approx_address: "Shim'on Samat, Tel Aviv, Israel",
          restaurants: ["Banana Beach Cliff Beach"],
          hotels: ["West Hotel"],
          notes_access: "",
          landmarks: ["Sea and Sun", "Lifeguard Hut #25"],
          has_lifeguard: true,
          has_firstaid: true,
          is_official: true,
          has_gates: true,
          motorcycle_access: true,
          car_access: false,
          pre_nav_msg: "",
          type: "beach_official",
     },
     {
          he: {
               name: "צוקי אביב",
               aka: "דיונת חול בין תל ברוך דרום לבין חוף הצוק הדרומי / סי אנד סאן צפון",
               close_streets: ["2040"],
               approx_address: "הצוק הדרומי 3, תל אביב",
               notes_access:
                    "שלוש דרכי הגעה: מכיוון צפון - ברגל, יש להתקדם דרומה מחוף צוק צפון / סי אנד סאן; מכיוון מרכז - ברגל, לרדת מהכביש לבסיס הצבאי 150 מ' דרומית לתחנת דלק פז 'למד' על כביש 2040; כניסה דרומית - ברגל, להתקדם צפונה מהחניה של חוף תל ברוך",
               landmarks: ["תחנת דלק פז 'למד'", "בסיס צבאי"],
               pre_nav_msg:
                    "גישה דרך הרחוב, 150 מ' מדרום לתחנת דלק פז 'למד'. אופנועים יכולים להמשיך 250 מ' במעלה הגבעה לכיוון הבסיס הצבאי. יש לעצור בעיקול הכביש ולרדת בזהירות ברגל. יש לעצור במחסום ולהקדם ברגל.",
          },
          name: "Tsukei Aviv",
          lat: "32.129484",
          lon: "34.786695",
          aka: "Sand dunes between Tel Baruch (S) and HaTzuk South / Sea & Sun (N)",
          type_order: "",
          overall_order: "4",
          cross_streets: [],
          close_streets: ["2040"],
          approx_address: "HaTzuk HaDromi 3, Tel Aviv",
          restaurants: [],
          hotels: [],
          notes_access:
               "Three accesses:<br/><b>North End: </b> By foot, head south down the beach from 'HaTzuk South / Sea & Sun'.<br/><b>Central: </b>  By foot, descend from the road to the military base 150m south of Paz Lamed Petrol Station on Road 2040. <br/><b>South End: </b> By foot or 4x4, head north up the beach from the 'Tel Baruch' car park.",
          landmarks: ["Paz Lamed Petrol Station", "Army base"],
          has_lifeguard: false,
          is_official: false,
          has_gates: false,
          motorcycle_access: false,
          car_access: false,
          on_foot_only: true,
          pre_nav_msg:
               "Access via road 150m south of Paz Lamed Petrol Station. <br><b>🏍️ Motorcycles</b> can continue 250m up the hill towards army base. Stop at bend in road and go down carefully by foot. <br><b>🚗 Cars</b> must stop at the barrier and continue on foot.",
          type: "beach_unofficial",
     },
     {
          he: {
               name: "תל ברוך",
               cross_streets: ["צבי פרופס"],
               close_streets: ["יצחק ארצי"],
               approx_address: "יצחק ארצי 34, תל אביב",
               restaurants: ["כחול"],
               notes_access: "חוף תל ברוך מחולק לשני חלקים, הצפוני והדרומי, ביניהם ישנו שובר גלים וסוכם מציל. רחצה מותרת בחוף הצפוני. בחוף הדרומי שי אזור לפיקניק וגישה לחוף הכלבים וחוף העפיפונים",
               landmarks: ["סוכת מציל #23 #11"],
          },
          name: "Tel Baruch",
          lat: "32.121111",
          lon: "34.782222",
          aka: "",
          type_order: "",
          overall_order: "5",
          cross_streets: ["Tsvi Propes"],
          close_streets: ["Itzhak Artzi"],
          approx_address: "Itzhak Artzi 1, Tel Aviv-Yafo, 6963501",
          restaurants: ["Blue"],
          hotels: [],
          notes_access:
               "Tel Baruch has a North and South beach divided by a breakwater and lifeguard station. Swimming is permitted on the North beach. South beach has a BBQ area and access to kite and dog beaches.",
          landmarks: ["Lifeguard Hut #23 #11"],
          has_lifeguard: true,
          is_official: true,
          has_gates: false,
          motorcycle_access: true,
          car_access: true,
          pre_nav_msg: "",
          type: "beach_official",
     },
     {
          he: {
               name: "תל ברוך (עפיפונים)",
          },
          name: "Tel Baruch Kite Beach",
          lat: "32.117222",
          lon: "34.781389",
          aka: "",
          type_order: "",
          overall_order: "5.5",
          cross_streets: [],
          close_streets: [],
          approx_address: "",
          restaurants: [],
          hotels: [],
          notes_access:
               "300m south of Tel Baruch car park. Access on foot or motorcycle via tayelet/cycle path.  Entrance to Kite Beach is opposite the RED GATE found on the airport-side of tayelet.",
          landmarks: ["Opposite RED GATE in Sde Dov fence", "Swimming forbidden"],
          has_lifeguard: false,
          is_official: false,
          has_gates: false,
          motorcycle_access: true,
          car_access: false,
          pre_nav_msg: "300m south of Tel Baruch car park. Access on foot or motorcycle via tayelet/cycle path.  Entrance to Kite Beach is opposite the RED GATE found on the airport-side of tayelet.",
          type: "beach_unofficial",
     },
     {
          he: {
               name: "תל ברוך (כלבים)",
               notes_access: "500 מ' דרומית לחניה של חוף תל ברוך. גישה ברגל או באופנוע  דרך הטיילת / נתיב אופניים. יש לצרף תמונה כביש הגישה הגיש לאופנועים בלבד.",
               landmarks: ["רחצה אסורה", "כלבים מורשים להסתובב ללא רצועה"],
               pre_nav_msg: "500 מ' דרומית לחניה של חוף תל ברוך. גישה ברגל או באופנוע  דרך הטיילת / נתיב אופניים ",
          },
          name: "Tel Baruch Dog Beach",
          lat: "32.115722",
          lon: "34.780925",
          aka: "",
          type_order: "",
          overall_order: "6",
          cross_streets: [],
          close_streets: [],
          approx_address: "",
          restaurants: [],
          hotels: [],
          notes_access:
               "500m south of Tel Baruch car park. Access on foot or motorcycle via tayelet/cycle path.  Entrance to Dog Beach is opposite the WATCHTOWER found on the airport-site of tayelet. Access road available to motorcycles only.",
          landmarks: ["Swimming forbidden", "Dogs allowed off leash"],
          has_lifeguard: false,
          is_official: false,
          has_gates: false,
          motorcycle_access: true,
          car_access: false,
          pre_nav_msg: "500m south of Tel Baruch car park. Access on foot or motorcycle via tayelet/cycle path.",
          type: "beach_unofficial_dogs",
     },
     {
          he: {
               name: "טיילת שדה דוב<br>(הגעה מכיוון צפון דרך תל ברוך)",
               notes_access: "להתקדם דרומה על הטייל / נתיב האופניים ולעבור את חוף הכלבים של תל ברוך",
               landmarks: ["שדה דוב"],
               pre_nav_msg: "גישה דרך חוץ הכלבים של תל ברוך",
          },
          name: "Sde Dov Promenade<br>(access from North via Tel Baruch)",
          lat: "32.11924682",
          lon: "34.78222668",
          aka: "",
          type_order: "",
          overall_order: "7",
          cross_streets: [],
          close_streets: [],
          approx_address: "",
          restaurants: [],
          hotels: [],
          notes_access: "Continue south on tayelet/cycle path past the Tel Baruch Dog Beach",
          landmarks: ["Sde Dov Airport"],
          has_lifeguard: false,
          is_official: false,
          has_gates: false,
          motorcycle_access: true,
          car_access: false,
          pre_nav_msg: "Access via Tel Baruch Dog Beach",
          type: "beach_unofficial",
     },
     {
          he: {
               name: "טיילת שדה דוב<br>(הגעה מכיוון דרום דרך הנמל)",
               close_streets: ["הטיילת"],
               landmarks: ["גשר הולכי הרגל", "שדה דוב", "המגדלור של תל ברוך"],
          },
          name: 'Sde Dov Promenade<br>(access from South via Namal T"A)',
          lat: "32.102778",
          lon: "34.7775",
          aka: "",
          type_order: "",
          overall_order: "8",
          cross_streets: [],
          close_streets: ["HaTayelet"],
          approx_address: "",
          restaurants: [],
          hotels: [],
          notes_access: "",
          landmarks: ["Sde Dov Airport Runway", "Wooden Foot Bridge", "Lighthouse", "Tel Aviv Port"],
          has_lifeguard: false,
          is_official: false,
          has_gates: false,
          motorcycle_access: true,
          car_access: false,
          pre_nav_msg: "",
          type: "beach_unofficial",
     },
     {
          he: {
               name: "תחנת הכוח רידינג / גשר הולכי רגל ברידינג",
               aka: "תחנת הכח, גשר הולכי רגל",
               cross_streets: ["רחבעם זאבי גנדי (צפון)", "יוסף יקותיאלי (דרום)"],
               close_streets: ["הטיילת"],
               approx_address: "זאבי רחבעם (גנדי) 1, תל אביב",
               restaurants: ["מקס ברנר", "בריאבה", "טראסק", "אגאדיר"],
               landmarks: ["גשר רדינג (גשר ווקופ)", "המגדלור", "נמל תל אביב"],
          },
          name: "Reading Power Station / Reading Pedestrian Bridge",
          lat: "32.10288472",
          lon: "34.77779835",
          aka: "Tachanat Koach, Foot Bridge",
          type_order: "",
          overall_order: "9",
          cross_streets: ["Rekhav'am Ze'evi Gandi (N)", "Yosef Yekuti'eli (S)"],
          close_streets: ["HaTayelet"],
          approx_address: "Rekhav'am Ze'evi Gandi 1, Tel Aviv",
          restaurants: ["Reading3", "Trask", "Max Brenner", "Bariba", "Agadir", "Rebar"],
          hotels: [],
          notes_access: "",
          landmarks: ['Wauchope Foot Bridge to Namal T"A (S)', "Lighthouse", "Hanger 26 (Max Brenner)", "Hanger 28 (Reading 3)", "Tel Aviv Port"],
          has_lifeguard: false,
          is_official: false,
          has_gates: true,
          motorcycle_access: true,
          car_access: true,
          pre_nav_msg: "",
          type: "landmark",
     },
     {
          he: {
               name: "נמל תל אביב (הטיילת הצפונית)",
               cross_streets: ["כיכר פלאמר"],
               close_streets: ["נמל תל אביב"],
               approx_address: "רח' נמל ת\"א 24, תל אביב",
               notes_access: "מ-טראסק לכיוון האנגר 11",
               landmarks: ["גשר הולכי רגל לכיוון תחנת הכח רידינג (צפון)", "האנגר 11 (דרום)"],
          },
          name: 'Namal T"A (North Promenade)',
          lat: "32.10093298",
          lon: "34.77505848",
          aka: "",
          type_order: "",
          overall_order: "10",
          cross_streets: ["Kikar Plumer"],
          close_streets: ["Nemal Tel Aviv"],
          approx_address: "Nemal Tel Aviv 23-24, Tel Aviv-Yafo, Israel",
          restaurants: ["Shalvata (Hanger 28)", "Pier 23 (Hanger 23)", "Cafe Greg (Hanger 20)", "Lechem Basar (Hanger 14)", "Kitchen Market (Hanger 12)"],
          hotels: [],
          notes_access: "From Trask (North) to Hanger 11 (South)",
          landmarks: ["Foot Bridge to Power Station (N)", "Tel Aviv Port", "Hanger 11 (S)"],
          has_lifeguard: false,
          is_official: false,
          has_gates: false,
          motorcycle_access: true,
          car_access: true,
          pre_nav_msg: "",
          type: "landmark",
     },
     {
          he: {
               name: "נמל תל אביב (מרכז)",
               aka: "",
               cross_streets: ['כ"ג יורדי הסירה'],
               close_streets: ["נמל תל אביב / הירקון"],
               approx_address: "רח' נמל ת\"א 9, תל אביב",
               restaurants: ["קיטשן מרקט (Hanger 12)", "ארומה (האנגר 9)", "קפה נימרוד (האנגר 8)", "בני הדייג (האנגר 8)"],
               notes_access: "הנמל הישן ומזרקה / שובר גלים פונה לכיוון מסעדת בני הדייג / ארומה (האנגר 8 ו- 9) וקסטרו / קפה קפה (האנגר 4 ו- 21)",
               landmarks: ["נמל תל אביב"],
          },
          name: 'Namal T"A (Central)',
          lat: "32.09824046",
          lon: "34.77387697",
          aka: "",
          type_order: "",
          overall_order: "11",
          cross_streets: ["Kaf Gimel Yordei ha-Sira"],
          close_streets: ["Nemal Tel Aviv", "HaYarkon"],
          approx_address: "Nemal Tel Aviv 9, Tel Aviv-Yafo, Israel",
          restaurants: ["Kitchen Market (Hanger 12)", "Aroma (Hanger 9)", "Cafe Nimrod (Hanger 8)", "Landwer (Hanger 8)", "Benny Ha'Dayag (Hanger 8)", "Hanger 11"],
          hotels: [],
          notes_access: "Old port and jetty/breakwater facing Benny Ha'Dayag/Aroma (Hangers 8, 9) and Castro/CafeCafe (Hangers 4, 21)",
          landmarks: ["Police Station", "Tel Aviv Port"],
          has_lifeguard: false,
          is_official: false,
          has_gates: false,
          motorcycle_access: true,
          car_access: true,
          pre_nav_msg: "",
          type: "beach_unofficial_port",
     },
     {
          he: {
               name: "נמל תל אביב (טיילת דרומית)",
               cross_streets: ["חבקוק הנביא", "נחשון"],
               close_streets: ["נמל תל אביב", "הירקון"],
               approx_address: "רח' נמל ת\"א 18, תל אביב",
               restaurants: ["יוליה (האנגר 2)", "ארקה (האנגר 3)"],
               notes_access: "קסטרו / אייס (האנגר 4) לכיוון מציצים",
               landmarks: ["נמל תל אביב", "אייס (האנגר 4)"],
          },
          name: 'Namal T"A (South Promenade)',
          lat: "32.09520248",
          lon: "34.77288321",
          aka: "",
          type_order: "",
          overall_order: "12",
          cross_streets: ["Havakuk Hanavi", "Nachshon", "Nahshon", "Havakook"],
          close_streets: ["Nemal Tel Aviv", "HaYarkon"],
          approx_address: "Nemal Tel Aviv St 18, Tel Aviv-Yafo, Israel",
          restaurants: ["Yulia (Hanger 2)", "Arca (Hanger 3)"],
          hotels: [],
          notes_access: "Castro/Ace (Hanger 4) to Metzitzim",
          landmarks: ["Tel Aviv Port", "Ace (Hanger 4)"],
          has_lifeguard: false,
          is_official: false,
          has_gates: false,
          motorcycle_access: true,
          car_access: true,
          pre_nav_msg: "",
          type: "landmark",
     },
     {
          he: {
               name: "מציצים",
               aka: "'לשעבר חוף' שרתון",
               cross_streets: ["חבקוק הנביא", "נחשון"],
               close_streets: ["נמל תל אביב", "הירקון"],
               approx_address: "רח' נמל ת\"א 1, תל אביב",
               restaurants: ["חוף מציצים"],
               hotels: ["אלכסנדר", "Havakook", "Tal"],
               notes_access: "",
               landmarks: ["תחנת עזרה ראשונה (מלבד סוכת המציל) ב <a class='' href='https://www.google.com/maps/place/32.09473,34.772405' target='_blank'>32.09473,34.772405</a>"],
               pre_nav_msg: "",
          },
          name: "Metzitzim",
          lat: "32.09387091",
          lon: "34.77124169",
          aka: "Formerly Sheraton Beach",
          type_order: "",
          overall_order: "13",
          cross_streets: ["Havakuk Hanavi", "Nachshon", "Nahshon", "Havakook"],
          close_streets: ["Nemal Tel Aviv"],
          approx_address: "Nemal Tel Aviv 1, Tel Aviv-Yafo, Israel",
          restaurants: ["מסעדת חוף מציצים"],
          restaurants: ["Metzitzim Beach Restaurant", "Cafe 9-Beach"],
          hotels: ["Alexander/Alexandre", "Havakook", "Tal"],
          notes_access: "",
          landmarks: ["First Aid Station (separate to lifeguard hut) at <a class='' href='https://www.google.com/maps/place/32.09473,34.772405' target='_blank'>32.09473,34.772405</a>"],
          has_lifeguard: true,
          has_firstaid: true,
          is_official: true,
          has_gates: false,
          motorcycle_access: true,
          car_access: true,
          pre_nav_msg: "",
          type: "beach_official",
     },
     {
          he: {
               name: "הנפרד/הדתיים (נורדאו)",
               aka: "החוף הנפרד, חוף הדתיים",
               cross_streets: ["נורדאו"],
               close_streets: ["הירקון", "2397"],
               notes_access: "גישה לרכב דרך חוף מציצים (מכיוון צפון)",
               landmarks: ["החוף הנפרד"],
               pre_nav_msg: "גישה דרך חוף מציצים (מכיוון צפון)",
          },
          name: "Religious Separate (Nordau)",
          lat: "32.09309378",
          lon: "34.77127656",
          aka: "Separated Separate Segregated Religious Beach",
          type_order: "",
          overall_order: "14",
          cross_streets: ["Nordau"],
          close_streets: ["2397", "HaYarkon"],
          approx_address: "Listed by TLV Muni: 'שרתון דתיים (נפרד) 14'",
          restaurants: [],
          hotels: [],
          notes_access: "Vehicle access via Metzitzim (from North)",
          landmarks: ["Segregated Beach"],
          has_lifeguard: true,
          is_official: true,
          has_gates: true,
          motorcycle_access: true,
          car_access: false,
          pre_nav_msg: "Access via Metzitzim (from North)",
          type: "beach_official",
     },
     {
          he: {
               name: "גן העצמאות (צפון)",
               aka: "גן העצמאות צפון",
               cross_streets: ["נורדאו"],
               close_streets: ["הירקון"],
               approx_address: "רח' הירקון 222, תל אביב",
               hotels: ["גרנד ביץ' (פינת נורדאו)", "מלודי (פינת ז'בוטינסקי)"],
               notes_access:
                    "גישה לאופנועים רק דרך הרמפה מצפון, מול רח' נודראו (<a class='' href='https://www.google.com/maps/place/32.09218712,34.77260292' target='_blank'>32.09218712,34.77260292</a>); או מכיוון דרום מול רח' ז'בוטינסקי; או מימין למלון הילטון דרך כביש הגישה של החניה (<a class='' href='https://www.google.com/maps/place/32.08995791,34.77214158' target='_blank'>32.08995791,34.77214158</a>)",
               landmarks: ["Playground (<a class='' href='https://www.google.com/maps/place/32.09045784,34.77125108' target='_blank'>32.09045784,34.77125108</a>)", "Embassy of Switzerland"],
               pre_nav_msg:
                    "Motorcycle access IS ONLY via ramps at North (opposite Nordau @ <span onclick='onclickmap(this);'>32.09218712,34.77260292</span>) and South (opposite Jabotinsky, to the right of the Hilton Parking Service Road @ <span class='onclickmap' onclick='onclickmap(this);'>32.08995791,34.77214158</span>)",
          },
          name: "Park HaAtzmaut (North)",
          lat: "32.08985111",
          lon: "34.77206647",
          aka: "Independence Park North",
          type_order: "",
          overall_order: "15",
          cross_streets: ["Nordau"],
          close_streets: ["HaYarkon"],
          approx_address: "222 HaYarkon, Tel Aviv",
          restaurants: [],
          hotels: ["Grand Beach (corner Nordau)", "Melody (corner Jabotinsky)"],
          notes_access:
               "Motorcycle access ONLY via ramps at North opposite Nordau (<a class='' href='https://www.google.com/maps/place/32.09218712,34.77260292' target='_blank'>32.09218712,34.77260292</a>) and South opposite Jabotinsky, to the right of the Hilton Parking Service Road (<a class='' href='https://www.google.com/maps/place/32.08995791,34.77214158' target='_blank'>32.08995791,34.77214158</a>)",
          landmarks: ["Playground (<a class='' href='https://www.google.com/maps/place/32.09045784,34.77125108' target='_blank'>32.09045784,34.77125108</a>)", "Embassy of Switzerland"],
          has_lifeguard: "",
          is_official: "",
          has_gates: false,
          motorcycle_access: true,
          car_access: false,
          pre_nav_msg:
               "Motorcycle access IS ONLY via ramps at North (opposite Nordau @ <span class='onclickmap' onclick='onclickmap(this);'>32.09218712,34.77260292</span>) and South (opposite Jabotinsky, to the right of the Hilton Parking Service Road @ <span class='onclickmap' onclick='onclickmap(this);'>32.08995791,34.77214158</span>)",
          type: "park",
     },
     {
          he: {
               name: "הילטון צפון (הכלבים)",
               aka: "הכלבים",
               cross_streets: ["נורדאו"],
               close_streets: ["הירקון", "2397", "טיילת שלמה להט"],
               approx_address: "הילטון צפון 2, תל אביב",
               notes_access: "גישה לכלי רכב דרך חוף מציצים (מכיוון צפון)",
               landmarks: ["חוף אסור לרחצה", "מקום מותר לשחרור כלבים"],
          },
          name: "Hilton North (HaKlavim)",
          lat: "32.09201669",
          lon: "34.77089703",
          aka: "Dogs",
          type_order: "",
          overall_order: "16",
          cross_streets: ["Nordau"],
          close_streets: ["2397", "HaYarkon", "Shlomo Lehat Promenade"],
          approx_address: "2 North Hilton Beach, Tel Aviv",
          restaurants: [],
          hotels: [],
          notes_access: "Vehicle access via Metzitzim (from North)",
          landmarks: ["South seawall of Religious Beach", "Swimming forbidden", "Dogs allowed off leash"],
          has_lifeguard: false,
          is_official: false,
          has_gates: true,
          motorcycle_access: true,
          car_access: true,
          pre_nav_msg: "",
          type: "beach_unofficial_dogs",
     },
     {
          he: {
               name: "הילטון (גיי / העצמאות)",
               aka: "העצמאות",
               cross_streets: ["נורדאו"],
               close_streets: ["הירקון", "2397", "אליעזר פרי", "טיילת שלמה להט"],
               approx_address: "חוף הילטון, טיילת שלמה להט, תל אביב",
               restaurants: ['לב ים - בי"ס לשיט וגלישה'],
               hotels: ["הילטון"],
               notes_access: "450m along promenade from either Metzitzim (to the North) or Carlton (to the South)",
               landmarks: ["Children's Play Area", "Surfboard Rental", "LevYam Sailing/Windsurf School", "Sea Center"],
               pre_nav_msg: "Same distance from both Metzitzim (to the North) and Carlton (to the South).  Take your pick!",
          },
          name: "Hilton North (Gay / HaAtzmaut)",
          lat: "32.09053283",
          lon: "34.77005213",
          aka: "Atzmaut Independence",
          type_order: "",
          overall_order: "17",
          cross_streets: ["Nordau"],
          close_streets: ["2397", "HaYarkon", "Eliezer Peri", "Shlomo Lehat Promenade"],
          approx_address: "Hilton Beach, Shlomo Lahat Promenade, Tel Aviv",
          restaurants: ["??? (at LevYam Sailing/Windsurf School)"],
          hotels: ["Hilton"],
          notes_access: "450m along promenade from either Metzitzim (to the North) or Carlton (to the South)",
          landmarks: ["Children's Play Area", "Surfboard Rental", "LevYam Sailing/Windsurf School", "Sea Center"],
          has_lifeguard: true,
          is_official: true,
          has_gates: true,
          motorcycle_access: true,
          car_access: true,
          pre_nav_msg: "Same distance from both Metzitzim (to the North) and Carlton (to the South).  Take your pick!",
          type: "beach_official",
     },
     {
          he: {
               name: "הילטון (הגולשים)",
               aka: "הגולשים, הילטון דרום, טופ-סי",
               cross_streets: ["נורדאו"],
               close_streets: ["הירקון", "2397", "אליעזר פרי", "טיילת שלמה להט"],
               approx_address: "חוף הילטון, טיילת שלמה להט, תל אביב",
               restaurants: ["גלידה אלדו", "חוף טופ-סי", "אספרנטו"],
               hotels: ["קרלטון"],
               notes_access: "צפונית למרינה, גישה דרך חניון מלון קרלטון",
               pre_nav_msg: "גישה דרך חנית רכבים מלון קרלטון",
          },
          name: "Hilton South (HaGolshim)",
          lat: "32.08714235",
          lon: "34.76933062",
          aka: "HaGolshim, Hilton South, Surfers / Hof HaGolshim, TopSea, Top See",
          type_order: "",
          overall_order: "18",
          cross_streets: ["Nordau"],
          close_streets: ["2397", "HaYarkon", "Eliezer Peri", "Shlomo Lehat Promenade"],
          approx_address: "Hilton Beach, Shlomo Lahat Promenade, Tel Aviv",
          restaurants: ["Aldo Ice Cream", "TopSea Beach", "Esperanto"],
          hotels: ["Carlton"],
          notes_access: "Immediately north of Tel Aviv Marina. Access via entrance to Carlton Hotel Car Park (to the South)",
          landmarks: [
               "Seawall with wooden promenade and sea entrance to Tel Aviv Marina (to the South)",
               "Marine Police (to the South)",
               "Yamit Rental (to the South)",
               "LevYam Sailing/Windsurf School (to the North)",
               "Sea Center (to the North)",
          ],
          has_lifeguard: false,
          is_official: false,
          has_gates: true,
          motorcycle_access: true,
          car_access: true,
          pre_nav_msg: "Access via entrance to Carlton Hotel Car Park",
          type: "beach_official",
     },
     {
          he: {
               name: "גן העצמאות (דרום)",
               aka: "גן העצמאות (דרום)",
               cross_streets: ["ארלוזרוב"],
               close_streets: ["אליעזר פרי (כניסה להילטון)", "משעול עמנואל סלע", "כניסה ראשית להילטון", "כניסה לאזור שירות של הילטון"],
               approx_address: "משעול עמנואל סלע 217, תל אביב",
               restaurants: [],
               hotels: ["הילטון", "מלודי (פינת ז'בוטינסקי)"],
               notes_access: "בנקודה זו  (חוצה את רח' ארלוזרוב בכניסה להילטון) רח' אליעזר פרי מחליף את שמו לרח' הירקון",
               landmarks: ["פסל יתוש (32.08853083, 34.77055371)", "גשר הילטון-העצמאות (מעל עמנואל סלע מעל הכניסה וכביש הגישה להילטון", "מול ז'בוטינסקי", "מול השגרירות הבריטית"],
               pre_nav_msg: "",
          },
          name: "Park HaAtzmaut (South)",
          lat: "32.08789909",
          lon: "34.77081925",
          aka: "Independence Park South",
          type_order: "",
          overall_order: "19",
          cross_streets: ["Alozorov"],
          close_streets: ["Eliezer Peri", "(Entrance to Hilton) משעול עמנואל סלע", "Mishol Emanuel Sela (Main entrance to Hilton)", "1174 (Entrance to Hilton Service Area)"],
          approx_address: "Mishol Emanuel Sela 217, Tel Aviv-Yafo",
          restaurants: [],
          hotels: ["Hilton", "Melody (corner Jabotinsky)"],
          notes_access: "At this point (as it crosses Alozorov at the entrance to the Hilton) Eliezer Peri (to the south) changes name to HaYarkon (to the North)",
          landmarks: [
               "Mosquito statue (<span class='onclickmap' onclick='onclickmap(this);'>32.08853083, 34.77055371</span>)",
               "Hilton HaAtzmaut Bridge - South (Above Emanuel Sela / Above entrance to Hilton)",
               "Hilton HaAtzmaut Bridge - North (Above 1174 / Above service entrance to Hilton / Opposite Jabotinsky)",
               "Opposite British Embassy",
          ],
          has_lifeguard: "",
          is_official: "",
          has_gates: "",
          motorcycle_access: true,
          car_access: false,
          pre_nav_msg: "",
          type: "park",
     },
     {
          he: {
               name: 'מרינה ת"א',
               cross_streets: ["שד' בן גוריון"],
               close_streets: ["הירקון", "אליעזר פרי", "טיילת שלמה להט"],
               approx_address: "אליעזר פרי 14, תל אביב",
               restaurants: ["פורטונה דל מאר", "קפה לנדוור"],
               hotels: ["קרלטון", "מרינה", "הרודס"],
               notes_access: "גישה מצפון בלבד, דרך חניון מלון קרלטון",
               landmarks: ["כיכר אתרים", "בריכת גורדון", "ימית", "סי-טייס", "לב-ים"],
               pre_nav_msg: "גישה מצפון בלבד, דרך חניון מלון קרלטון",
          },
          name: "Tel Aviv Marina",
          lat: "32.08689693",
          lon: "34.7692287",
          aka: "",
          type_order: "",
          overall_order: "20",
          cross_streets: ["Sderot Ben Gurion"],
          close_streets: ["HaYarkon", "Eliezer Peri", "Shlomo Lehat Promenade"],
          approx_address: "Eliezer Peri 14, Tel Aviv, 61061",
          restaurants: ["Fortuna Del Mar", "Landwer Cafe"],
          hotels: ["Carlton", "Marina", "Herods"],
          notes_access: "Access from North only via entrance to Carlton Hotel Car Park",
          landmarks: ["Kikar Atarim", "Gordon Swimming Pool", "Yamit Rental", "Sea Time", "Lev Yam"],
          has_lifeguard: "",
          is_official: "",
          has_gates: false,
          motorcycle_access: true,
          car_access: true,
          pre_nav_msg: "Access from North only via entrance to Carlton Hotel Car Park",
          type: "beach_unofficial_port",
     },
     {
          he: {
               name: "גורדון",
               cross_streets: ["גורדון"],
               close_streets: ["הרבט סמואל", "טיילת שלמה להט"],
               approx_address: "הרברט סמואל 111, תל אביב",
               restaurants: ["לה לה לנד", "קפה לונדון"],
               hotels: ["קראון פלאזה", "רניסנס/רנסנס", "שרתון", "לאונרדו"],
               notes_access:
                    "כניסה מכיוון צפון: כניסה לאופנועים דרך הרמפה לכיוון הטיילת מחוץ למלון רנסנס; כניסה מכיוון דרום: פנית פרסה ברח' הירקון ליד מלון שרתון, יש לעצור בכניסה לטיילת / חניון, מול שגרירות צרפת, ליד קפה לונדון",
               landmarks: ["סריכת גורדון", "שגרירות צרפת"],
               pre_nav_msg:
                    "כניסה מכיוון צפון: כניסה לאופנועים דרך הרמפה לכיוון הטיילת מחוץ למלון רנסנס; כניסה מכיוון דרום: פנית פרסה ברח' הירקון ליד מלון שרתון, יש לעצור בכניסה לטיילת / חניון, מול שגרירות צרפת, ליד קפה לונדון",
          },
          name: "Gordon",
          lat: "32.082569",
          lon: "34.767216",
          aka: "",
          type_order: "",
          overall_order: "21",
          cross_streets: ["Gordon"],
          close_streets: ["Herbert Samuel", "Shlomo Lahat Promenade"],
          approx_address: "Herbert Samuel 111, Tel Aviv",
          restaurants: ["LaLa Land", "Cafe London"],
          hotels: ["Leonardo", "Crowne Plaza", "Renaissance", "Sheraton"],
          notes_access:
               "From North only:<br>Motorbikes should take ramp down to the tayelet from outside the Renaissance Hotel.<br><br>From South:<br>U-turn on HaYarkon at Sheraton Hotel and stop at the entrance to the tayelet/car park. Opposite French Embassy. Next to Cafe London.",
          landmarks: ["Gordon Swimming Pool", "French Embassy"],
          has_lifeguard: true,
          is_official: true,
          has_gates: false,
          motorcycle_access: true,
          car_access: false,
          pre_nav_msg:
               "<b>From North <u>only</u>:</b><br><b>🏍️ Motorbikes</b> should take ramp down to the tayelet from outside the Renaissance Hotel.<br><br><b>From South:</b><br>U-turn on HaYarkon at Sheraton Hotel and stop at the entrance to the tayelet/car park. Opposite French Embassy. Next to Cafe London.",
          type: "beach_official",
     },
     {
          he: {
               name: "פרישמן",
               cross_streets: ["פרישמן"],
               close_streets: ["טיילת הרבט סמואל", "טיילת שלמה להט"],
               approx_address: "הרברט סמואל 105, תל אביב",
               restaurants: ["בננה ביץ' פרישמן"],
               hotels: ["דן תל אביב (לא טיילת דן)", "מגדל קינג דייויד"],
               notes_access: "כניסה מכיוון צפון בלבד. אם מגיעים מכיוון דרום, יש לפנות בפרישמן",
               landmarks: [],
               pre_nav_msg: "כניסה מכיוון צפון בלבד. אם מגיעים מכיוון דרום, יש לפנות בפרישמן",
          },
          name: "Frishman",
          lat: "32.08014285",
          lon: "34.76648211",
          aka: "",
          type_order: "",
          overall_order: "22",
          cross_streets: ["Frishman"],
          close_streets: ["Herbert Samuel", "Shlomo Lahat Promenade"],
          approx_address: "Herbert Samuel 105, Tel Aviv",
          restaurants: ["Banana Beach Frishman"],
          hotels: ["Dan Tel Aviv (not Dan Panorama!)", "King David Tower"],
          notes_access: "Access from North only. If approaching from South, turn on Frishman.",
          landmarks: [],
          has_lifeguard: true,
          is_official: true,
          has_gates: false,
          motorcycle_access: true,
          car_access: false,
          pre_nav_msg: "Access from North only. If approaching from South, turn on Frishman.",
          type: "beach_official",
     },
     {
          he: {
               name: "בוגרשוב",
               cross_streets: ["בוגרשוב"],
               close_streets: ["טיילת הרבט סמואל", "טיילת שלמה להט"],
               approx_address: "הרברט סמואל 91, תל אביב",
               restaurants: ["ביסטרו מצדה", "לה מאר", "מייקס פלייס", "מקדונלדס"],
               hotels: ["פארק פלזה", "אורכידאה"],
               notes_access: "כניסה מכיוון צפון בלבד. אם מגיעים מכיוון דרום, יש לפנות בפרישמן",
               landmarks: ["פארק לונדון"],
               pre_nav_msg: "כניסה מכיוון צפון בלבד. אם מגיעים מכיוון דרום, יש לפנות בפרישמן",
          },
          name: "Bograshov",
          lat: "32.07773836",
          lon: "34.76544946",
          aka: "",
          type_order: "",
          overall_order: "23",
          cross_streets: ["Bograshov"],
          close_streets: ["Herbert Samuel", "Shlomo Lahat Promenade"],
          approx_address: "Herbert Samuel 91, Tel Aviv",
          restaurants: ["La Mer", "Bistro Masada", "Mikes Place", "McDonalds"],
          hotels: ["Park Plaza Orchid"],
          notes_access: "Access from North only. If approaching from South, turn on Frishman.",
          landmarks: ["Park London"],
          has_lifeguard: true,
          is_official: true,
          has_gates: false,
          motorcycle_access: true,
          car_access: true,
          pre_nav_msg: "Access from North only. If approaching from South, turn on Frishman.",
          type: "beach_official",
     },
     {
          he: {
               name: "טרומפלדור",
               cross_streets: ["טרומפלדור"],
               close_streets: ["טיילת הרבט סמואל", "טיילת שלמה להט"],
               approx_address: "הרברט סמואל 78, תל אביב",
               restaurants: ["יוטבתה"],
               hotels: ["סי סוויטס", "ביץ'-פרונט הוסטל"],
               notes_access: "אם מגיעים מכיוון דרום, יש לפנות בטרומפלדור. יש לשים לב שיש מקום מוגבל לחניה / עצירה בצומת. לחלופין, יש להמשיך ולפנות דרומה בפרישמן",
               landmarks: ['שגרירות ארה"ב'],
               pre_nav_msg: "אם מגיעים מכיוון דרום, יש לפנות בטרומפלדור. יש לשים לב שיש מקום מוגבל לחניה / עצירה בצומת. לחלופין, יש להמשיך ולפנות דרומה בפרישמן",
          },
          name: "Trumpeldor",
          lat: "32.07602017",
          lon: "34.76562381",
          aka: "",
          type_order: "",
          overall_order: "24",
          cross_streets: ["Trumpeldor"],
          close_streets: ["Herbert Samuel", "Shlomo Lahat Promenade"],
          approx_address: "Herbert Samuel 78, Tel Aviv",
          restaurants: ["Yotvata"],
          hotels: ["Sea Suites", "Beachfront Hostel"],
          notes_access: "If approaching from South, turn on Trumpeldor. Note that there is limited space to park/stop at this junction. Alternatively, continue north and turn south on Frishman.",
          landmarks: ["US American Embassy"],
          has_lifeguard: false,
          is_official: false,
          has_gates: false,
          motorcycle_access: true,
          car_access: true,
          pre_nav_msg: "If approaching from South, turn on Trumpeldor. Note that there is limited space to park/stop at this junction. Alternatively, continue north and turn south on Frishman.",
          type: "beach_unofficial",
     },
     {
          he: {
               name: "ירושלים (אלנבי)",
               cross_streets: ["אלנבי", "הירדן", "יונה הנביא"],
               close_streets: ["טיילת הרבט סמואל", "טיילת שלמה להט", "מזרקת כיכר הכנסת"],
               approx_address: "הרברט סמואל 60, תל אביב",
               restaurants: ["ארומה (מגדל האופרה)", "חוף צפוני", "אבולעפיה תל אביב (לא יפו!)"],
               hotels: ["גולדן ביץ'"],
               landmarks: ["מגדל האופרה", "סוכת מציל #8"],
          },
          name: "Jerusalem",
          lat: "32.07384057",
          lon: "34.76409763",
          aka: "",
          type_order: "",
          overall_order: "25",
          cross_streets: ["Allenby", "HaYarden", "Yona HaNavi"],
          close_streets: ["Herbert Samuel", "Shlomo Lahat Promenade", "Kikar HaKnesset", "Fountain"],
          approx_address: "Herbert Samuel 60, Tel Aviv",
          restaurants: ["Aroma (Opera Tower)", "Tsfoni (beach)", "Abulafia (Tel Aviv not Yafo!)"],
          hotels: ["Golden Beach"],
          notes_access: "",
          landmarks: ["Opera Tower", "Lifeguard Hut #8 (???)"],
          has_lifeguard: true,
          is_official: true,
          has_gates: false,
          motorcycle_access: true,
          car_access: true,
          pre_nav_msg: "",
          type: "beach_official",
     },
     {
          he: {
               name: "גאולה",
               cross_streets: ["גאולה", "הרב קוק", "אהרונסון", "זרובבל"],
               close_streets: ["הרבט סמואל", "טיילת שלמה להט"],
               approx_address: "הרברט סמואל 39, תל אביב",
               notes_access: "אם מגיעים מכיוון דרום, יש לפנות בגאולה או באלנבי, לגישה בכלי רכב לחוף / לטיילת, יש לפנות באלנבי",
               pre_nav_msg: "אם מגיעים מכיוון דרום, יש לפנות בגאולה או באלנבי, לגישה בכלי רכב לחוף / לטיילת, יש לפנות באלנבי",
          },
          name: "Geula",
          lat: "32.07190185",
          lon: "34.76410031",
          aka: "",
          type_order: "",
          overall_order: "26",
          cross_streets: ["Geula", "HaRav Kook", "HaRav Kuk", "Aharonson", "Zerubavel", "Zrubavel"],
          close_streets: ["Herbert Samuel", "Shlomo Lahat Promenade"],
          approx_address: "Herbert Samuel 39, Tel Aviv",
          restaurants: [],
          hotels: [],
          notes_access: "If approaching from South, turn on Geula or Allenby. For vehicular access to the beach/tayelet, turn on Allenby.",
          landmarks: [],
          has_lifeguard: false,
          is_official: false,
          has_gates: false,
          motorcycle_access: true,
          car_access: true,
          pre_nav_msg: "If approaching from South, turn on Geula or Allenby. For vehicular access to the beach/tayelet, turn on Allenby.",
          type: "beach_unofficial",
     },
     {
          he: {
               name: "אביב / בננה ביץ' צפון",
               cross_streets: ["עזרא הסופר", "נחמיה"],
               close_streets: ["הרבט סמואל", "טיילת שלמה להט"],
               approx_address: "הרברט סמואל 20, תל אביב",
               restaurants: ["בננה ביץ'", "לוקה"],
               hotels: ["רויאל ביץ'"],
               notes_access: "החוף מתחיל צפונית לכניסה לחניון הדולפינריום - מול רח' דניאל. החוף ממשיך צפונה לקפה בננה ביץ'",
               landmarks: ["סוכת מציל #5", "מועדון גלישה ישראל"],
               pre_nav_msg: "אם מגיעים מכיוון דרום, יש לפנות בגאולה או באלנבי, לגישה בכלי רכב לחוף / לטיילת, יש לפנות באלנבי",
          },
          name: "Aviv / Banana North",
          lat: "32.06982898",
          lon: "34.76307034",
          aka: "",
          type_order: "",
          overall_order: "27",
          cross_streets: ["Ezra HaSofer", "Nechamia"],
          close_streets: ["Herbert Samuel", "Shlomo Lahat Promenade"],
          approx_address: "Herbert Samuel 20, Tel Aviv",
          restaurants: ["Banana Beach (???)", "Loca"],
          hotels: ["Royal Beach"],
          notes_access: "The beach starts just north of the entrance to the Dolphinarium car park - opposite Daniel Street. It continues north to the Banana Beach Restaurant/Cafe.",
          landmarks: ["Lifeguard Hut #5 (???)", "Israel Surf Club"],
          has_lifeguard: true,
          is_official: true,
          has_gates: false,
          motorcycle_access: true,
          car_access: true,
          pre_nav_msg: "If approaching from South, turn on Zerubavel or Allenby. For vehicular access to the beach/tayelet, turn on Allenby.",
          type: "beach_official",
     },
     {
          he: {
               name: "חוף המתופפים",
               aka: "המתופפים, דולפינריום, בננה ביץ' דרום",
               landmarks: ["דולפינריום"],
               pre_nav_msg: "גישה מכניסה צפונית של חניון הדולפינריום. יש לרדת לחוף עם הרמפה מימין",
               parking: ["דולפינריום"],
          },
          name: "Tupim / Dolphinarium",
          lat: "32.06831748",
          lon: "34.762896",
          aka: "Drum, Dolphinarium Beach, Banana South",
          type_order: "",
          overall_order: "28",
          cross_streets: ["Khananya", "Hananya"],
          close_streets: ["Herbert Samuel", "Shlomo Lahat Promenade"],
          approx_address: "Herbert Samuel 20, Tel Aviv",
          restaurants: ["Clara"],
          hotels: [],
          notes_access: "North side of the breakwater/seawall behind the Dolphinarium.",
          landmarks: ["Dolphinarium"],
          parking: ["Dolphinarium"],
          has_lifeguard: false,
          is_official: false,
          has_gates: true,
          motorcycle_access: true,
          car_access: true,
          pre_nav_msg: "Access via Dolphinarium Car Park North Entrance. On right side, take ramp to beach.",
          type: "beach_unofficial",
     },
     {
          he: {
               name: "גן צ'ארלס קלור (צפון)",
               aka: "גן צ'ארלס קלור דרום",
               cross_streets: ["יוסף לוי", "שנקר"],
               close_streets: ["קאופמן", "הרברט סמואל", "טיילת שלמה להט"],
               approx_address: "גן צ'רלס קלור, נחום גולמן 2, ת\"א",
               restaurants: [],
               hotels: ["דייויד אינטרקונטיננטל", "דן פנורמה"],
               notes_access: "פארק מנטה ריי, חוף אלמה מדרום עד לדולפינריום מצפון",
               landmarks: ["מסגד חסן בק", "פז גן"],
               pre_nav_msg:
                    "מכוניות / אמבולנסים - כניסה מצפון בכניסה הצפונית של החניון (32.06769015, 34.76285309). מכל הכיוונים בכניסה המרכזית לחניון (32.06290544, 34.76141542), מול רח' שנקר. מכיוון דרום במוזיאון האצ\"ל (32.05929344, 34.75937158) ברח' נחום גולדמן",
               parking: ["דולפינריום"],
          },
          name: "Charles Clore Park (North)",
          lat: "32.06290544",
          lon: "34.76141542",
          aka: "Gan Charles Klore South, Claude Clor",
          type_order: "",
          overall_order: "29",
          cross_streets: ["Yosef Levi", "Shenkar"],
          close_streets: ["Kaufmann", "Herbert Samuel", "Shlomo Lahat Promenade"],
          approx_address: "גן צ'רלס קלור, נחום גולמן 2, ת\"א",
          restaurants: [""],
          hotels: ["David Intercontinental", "Dan Panorama"],
          notes_access: "Park from Manta Ray/Alma Beach (in south) to Dolphinarium (in north).",
          landmarks: ["Hassan Bek Mosque", "Paz Gan"],
          has_lifeguard: "",
          is_official: "",
          has_gates: true,
          motorcycle_access: true,
          car_access: false,
          parking: ["Dolphinarium"],
          pre_nav_msg:
               "Cars/Ambulances - From North @ Car Park North Entrance (<span class='onclickmap' onclick='onclickmap(this);'>32.06769015, 34.76285309</span>).  From all directions @ Car Park Central Entrance (<span class='onclickmap' onclick='onclickmap(this);'>32.06290544, 34.76141542</span>) opposite Shenkar Street. From South @ Etzel Museum (<span class='onclickmap' onclick='onclickmap(this);'>32.05929344, 34.75937158</span>) on Nahum Goldmann St.",
          type: "park",
     },
     {
          he: {
               name: "מאנטה ריי",
               aka: "",
               cross_streets: ["המרד"],
               close_streets: ["קאופמן", "הרברט סמואל", "טיילת שלמה להט"],
               approx_address: "יחזקאל קויפמן 703, תל אביב",
               restaurants: ["מנטה ריי"],
               notes_access: 'הכניסה עם רכב לחניון בית האצ"ל- נחום גולדמן 4 תל אביב',
               pre_nav_msg: "מכוניות/אמבולנסים - גישה מכיוון דרום במוזיאון האצ\"ל, ברח' נחום גולדמן",
               parking: ["דולפינריום"],
          },
          name: "Manta Ray",
          lat: "32.0614112",
          lon: "34.7603334,",
          aka: "",
          type_order: "",
          overall_order: "30",
          cross_streets: ["HaMered"],
          close_streets: ["Kaufmann", "Herbert Samuel", "Shlomo Lahat Promenade"],
          approx_address: "Yechezkel Kaufmann 703, Tel Aviv-Yafo, Israel",
          restaurants: ["Manta Ray"],
          hotels: [],
          notes_access: "",
          landmarks: [],
          has_lifeguard: "",
          is_official: "",
          has_gates: "",
          motorcycle_access: true,
          car_access: true,
          parking: ["Dolphinarium"],
          pre_nav_msg: "Cars/Ambulances - Access via South @ Etzel Museum (<span class='onclickmap' onclick='onclickmap(this);'>32.05929344, 34.75937158</span>) on Nahum Goldmann St.",
          type: "restaurant",
     },
     {
          he: {
               name: "צ'ארלס קלור",
               cross_streets: ["המרד"],
               close_streets: ["קאופמן", "הרברט סמואל", "טיילת שלמה להט"],
               approx_address: "יחזקאל קויפמן 703, תל אביב",
               restaurants: ["מנטה ריי"],
               notes_access: 'הכניסה עם רכב לחניון בית האצ"ל- נחום גולדמן 4 תל אביב',
               landmarks: ["סוכת מציל #4", "תחנת עזרה ראשונה (ליד מנטה ריי) ב <a class='' href='https://www.google.com/maps/place/32.0615554,34.7599461' target='_blank'>32.0615554,34.7599461</a>"],
               pre_nav_msg: "מכוניות/אמבולנסים - גישה מכיוון דרום במוזיאון האצ\"ל, ברח' נחום גולדמן",
               parking: ["דולפינריום"],
          },
          name: "Charles Clore",
          lat: "32.06079599",
          lon: "34.75921333",
          aka: "",
          type_order: "",
          overall_order: "31",
          cross_streets: ["HaMered"],
          close_streets: ["Kaufmann", "Herbert Samuel", "Shlomo Lahat Promenade"],
          approx_address: "Yehezkel Kaufmann 703, Tel Aviv",
          restaurants: ["Manta Ray"],
          hotels: [],
          notes_access: "",
          landmarks: [
               "Lifeguard Hut #4",
               "First Aid Station (next to Manta Ray) at <a class='' href='https://www.google.com/maps/place/32.0615554,34.7599461' target='_blank'>32.0615554,34.7599461</a>",
          ],
          has_lifeguard: true,
          has_firstaid: true,
          is_official: true,
          has_gates: true,
          motorcycle_access: true,
          car_access: true,
          parking: ["Dolphinarium"],
          pre_nav_msg: "Cars/Ambulances - Access via South @ Etzel Museum (<span class='onclickmap' onclick='onclickmap(this);'>32.05929344, 34.75937158</span>) on Nahum Goldmann St.",
          type: "beach_official",
     },
     {
          he: {
               name: 'עלמה / מוזיאון האצ"ל',
               cross_streets: ["המרד"],
               close_streets: ["קאופמן", "הרברט סמואל", "טיילת שלמה להט"],
               approx_address: "גן צ'רלס קלור, נחום גולמן 2, תל אביב",
               landmarks: ['מוזיאון האצ"ל', "הרחצה אסורה", "כניסה מותרת לכלבים ללא רצועה"],
               parking: ["דולפינריום"],
          },
          name: "Alma Dog Beach / Etzel Museum",
          lat: "32.05963442",
          lon: "34.75855887",
          aka: "",
          type_order: "",
          overall_order: "32",
          cross_streets: ["HaMered"],
          close_streets: ["Homat HaYam Promenade", "Kaufmann", "Herbert Samuel"],
          approx_address: "Charles Clore Park, Nahum Goldman 2, Tel Aviv",
          restaurants: [],
          hotels: [],
          notes_access: "",
          landmarks: ["Etzel Museum", "Swimming forbidden", "Dogs allowed off leash"],
          has_lifeguard: false,
          is_official: false,
          has_gates: true,
          motorcycle_access: true,
          car_access: true,
          pre_nav_msg: "",
          parking: ["Dolphinarium"],
          type: "beach_unofficial_dogs",
     },
     {
          he: {
               name: "גן צ'רלס קלור (דרום)",
               aka: "גן צ'ארלס קלור דרום",
               cross_streets: ["נחום גולדמן"],
               close_streets: ["נחום גולדמן"],
               approx_address: "גן צ'רלס קלור, נחום גולמן 2, תל אביב",
               landmarks: ["גשר הולכי רגל כחול"],
               notes_access: "מגשר הולכי הרגל הכחול בדרום",
               parking: ["דולפינריום"],
          },
          name: "Charles Clore Park (South)",
          lat: "32.0581563",
          lon: "34.7583907",
          aka: "Gan Charles Klore South, Claude Clor",
          type_order: "",
          overall_order: "33",
          cross_streets: ["Nahum Goldman"],
          close_streets: ["Nahum Goldman"],
          approx_address: "Charles Clore Park, Nahum Goldman 2, Tel Aviv",
          restaurants: [],
          hotels: [],
          notes_access: "From blue footbridge at south",
          landmarks: ["Blue footbridge at <a class='' href='https://www.google.com/maps/place/32.0582139,34.757866' target='_blank'>32.0582139,34.757866</a>"],
          has_lifeguard: "",
          is_official: "",
          has_gates: true,
          motorcycle_access: true,
          car_access: false,
          pre_nav_msg: "",
          type: "park",
     },
     {
          he: {
               name: "תחנת שאיבה / תחנת כח משנית",
               aka: "שנאי חשמל, איגודן, תחנת שאיבה בסה",
               cross_streets: ["נחום גולדמן"],
               close_streets: ["קאופמן", "אליזבט ברגר"],
               approx_address: "נחום גולדמן 1, תל אביב",
               notes_access: "המתחם כולל תחנת חשמל (כניסה מרח' קאופמן) ותחנת שאיבת מים (כניסה מרח' נחום גולדמן)",
               landmarks: ["תחנת דלק יפו (אליזבט ברגנר 13)"],
          },
          name: "Electricity Sub-Station / Pumping Station",
          lat: "32.0584751",
          lon: "34.75979805",
          aka: "Electricity Transformer, Igudan / Bassa Pumping Station",
          type_order: "",
          overall_order: "34",
          cross_streets: ["Nahum Goldman"],
          close_streets: ["Kaufmann", "Elisabeth Bergner"],
          approx_address: "Nahum Goldman 1, Tel Aviv",
          restaurants: [],
          hotels: [],
          notes_access: "Compound includes both an electricity station (entrance @ Kaufmann) and water pumping station (entrance @ Nahum Goldman).",
          landmarks: ["Delek Yafo Gas Station (Elisabeth Bergner 13)"],
          has_lifeguard: "",
          is_official: "",
          has_gates: "",
          motorcycle_access: "",
          car_access: "",
          pre_nav_msg: "",
          type: "landmark",
     },
     {
          he: {
               name: "עלמה / טיילת חומת הים",
               aka: "מגשר הולכי הרגל הכחול (בצפון) לרציף העליה השניה (מדרום)",
               cross_streets: ["יונתן רטוש"],
               close_streets: ["נחום גולדמן", "זלדה", "שרתון", "מישובסקי"],
               approx_address: "נחום גולדמן 6, תל אביב",
               restaurants: ["חצר גולדמן", "הוני ביץ'"],
               landmarks: ["חניון יפו", "שער יפו"],
          },
          name: "Alma / Homat HaYam Promenade",
          lat: "32.057157",
          lon: "34.757125",
          aka: "From blue footbridge (at north) to Retsif ha-Aliya ha-Shniya (at south)",
          type_order: "",
          overall_order: "35",
          cross_streets: ["Yonatan Ratosh"],
          close_streets: ["Nahum Goldman", "Zelda Shneorson Mishovski"],
          approx_address: "Nahum Goldmann 6, Tel Aviv 68029",
          restaurants: ["Honey Beach", "חצר גולדמן"],
          hotels: [],
          notes_access: "",
          landmarks: ["Jaffa Car Park", "Shaar Yafo"],
          has_lifeguard: false,
          is_official: false,
          has_gates: false,
          motorcycle_access: true,
          car_access: true,
          pre_nav_msg: "",
          type: "beach_unofficial",
     },
     {
          he: {
               name: "כיכר השעון",
               aka: "מגדל השעון",
               cross_streets: ["מרזוק ועזר", "רציף העליה השניה"],
               close_streets: ["נחום גולדמן", "דוד רזיאל", "יפת"],
               approx_address: "נחום גולדמן 13, תל אביב",
               restaurants: ["חצר גולדמן", "הוני ביץ'"],
               landmarks: ["חניון יפו", "שער יפו"],
          },
          name: "Kikar HaShaon",
          lat: "32.05556309",
          lon: "34.75646675",
          aka: "Clock Square",
          type_order: "",
          overall_order: "36",
          cross_streets: ["Marzuk VeAzar", "Retsif HaAliya HaShniya"],
          close_streets: ["Nahum Goldman", "David Raziel", "Yefet"],
          approx_address: "Nahum Goldmann 13, Tel Aviv 68029",
          restaurants: [],
          hotels: [],
          notes_access: "",
          landmarks: [],
          has_lifeguard: "",
          is_official: "",
          has_gates: "",
          motorcycle_access: "",
          car_access: "",
          pre_nav_msg: "",
          type: "landmark",
     },
     {
          he: {
               name: "רציף העלייה השנייה",
               aka: "לאורך הטיילת מהחוף לכיוון צפון עד נמל יפו, כניסה צפונית (מדרום)",
               cross_streets: ["רציף העליה השניה", "רוסלן"],
               close_streets: ["זלדה", "שניאורסון", "מישובסקי", "גינת המדרון"],
               approx_address: "רוסלן 1 תל אביב",
               restaurants: ["הבית על הים", "קאסיטה"],
               landmarks: ["תצפית טיילת חומת הים", "מדרגות לחוף", "שער יפו", "גן המדרון", "מסגד אל בחר", "נמל יפו", "כניסה צפונית", "מרינה", "צופי ים יפו"],
          },
          name: "Retsif HaAliya HaShniya",
          lat: "32.05576769",
          lon: "34.7552973",
          aka: "Along promenade from beach overlook (to north) to Namal Yafo North Entrance (to south)",
          type_order: "",
          overall_order: "37",
          cross_streets: ["Retsif HaAliya HaShniya", "Russlan"],
          close_streets: ["Zelda Shneorson Mishovski", "HaMidron Garden"],
          approx_address: "Russlan 1, Tel Aviv 68038",
          restaurants: ["House on the Sea", "HaBayit Al HaYam", "Casita", "קאסיטה"],
          hotels: [],
          notes_access: "",
          landmarks: ["תצפית טיילת חומת הים", "Lookout Promenade + Beach Stairs", "Shaar Yafo", "HaMidron Garden", "AlBahr Mosque", "Namal Yafo North Entrance", "Marine Center / Sea Scouts Yafo"],
          has_lifeguard: false,
          is_official: false,
          has_gates: false,
          motorcycle_access: true,
          car_access: true,
          pre_nav_msg: "",
          type: "beach_unofficial",
     },
     {
          he: {
               name: "נמל יפו העתיקה",
               aka: "נמל יפו הישן, נמל יפו",
               cross_streets: ["רציף העליה השניה", "שמואל וסולטנה טאג'יר"],
               close_streets: ["יהודה הימית", "מגדלור"],
               approx_address: "רציף העלייה השנייה, נמל יפו",
               restaurants: ["לאביט", "הזקן וים", "קאזה נובה", "הקונטיינר", "מסעדת פרישמן", "קפה קפיש", "בלאקאוט", "הדייגים (מחסן 1)"],
               hotels: [],
               notes_access:
                    "מכוניות/אמבולנס - גישה דרך כניסה ראשית בנמל יפו / רח' יהודה הימית (<a class='' href='https://www.google.com/maps/place/32.0521581,34.7502533' target='_blank'>(32.0521581,34.7502533)</a>), בין האנגר 1 (חדש) להאנגר 2 (ישן)",
               landmarks: ["נמל יפו", "מרכז נא לגעת"],
               pre_nav_msg: "",
               parking: ["חניון נמל יפו - מדרום לנמל <a class='' href='https://www.google.com/maps/place/32.0500092,34.7486924' target='_blank'>(32.0500092,34.7486924)</a>"],
          },
          name: "Namal Yafo",
          lat: "32.0521581",
          lon: "34.7502533",
          aka: "Old Yaffo Harbour, Jaffa Port",
          type_order: "",
          overall_order: "38",
          cross_streets: ["Retsif HaAliya HaShniya", "Shmuel and Sultana Tagger"],
          close_streets: ["Yehuda Hayamit", "HaMigdalor"],
          approx_address: "Nemal Yafo, Tel Aviv",
          restaurants: ["Loveat", "The Old Man And The Sea", "Casa Nova", "The Container", "Fisherman's Restaurant 'HaDayagim' (Machsan 1)", "Cafe Kapish", "Blackout"],
          hotels: [],
          notes_access:
               "Cars/Ambulances - Access via main entrance @ Nemal Yafo St / Yehuda Hayamit St <a class='' href='https://www.google.com/maps/place/32.0521581,34.7502533' target='_blank'>(32.0521581,34.7502533)</a> between Hanger 1 (new) and Hanger 2 (old)",
          landmarks: ["Jaffa Port", "Nalaga'at Center"],
          has_lifeguard: "",
          is_official: "",
          has_gates: true,
          motorcycle_access: true,
          car_access: true,
          parking: ["Jaffa Port Parking - South of Jaffa Port <a class='' href='https://www.google.com/maps/place/32.0500092,34.7486924' target='_blank'>(32.0500092,34.7486924)</a>"],
          pre_nav_msg: "",
          type: "beach_unofficial_port",
     },
     {
          he: {
               name: "גן המדרון יפו",
               aka: "יפו, גן המדרון",
               cross_streets: [],
               close_streets: ["נמל יפו", "הארי טרומן", "קדם"],
               approx_address: "רח' קדם 51, תל אביב",
               restaurants: ["אבו עיסא", "יפו הקטנה", "הזקן והים"],
               hotels: [],
               notes_access:
                    "כניסה דרך נתיב אופניים בלבד דרך גן המדרון. כניסה: מנמל יפו (צפון) - הולכי רגל/אופנועים בלבד דרך חניון נמל יפו [<a class='' href='https://www.google.com/maps/place/32.047939,34.747746' target='_blank'>(32.047939,34.747746)</a>]. מיפו (מרכז) - הולכי רגל/אופנועים בלבד דרך בי\"ס חסן ערפה (קדם 49) או חניון צופית (קדם 73) [<a class='' href='https://www.google.com/maps/place/32.044637,34.7475555' target='_blank'>(32.044637,34.7475555)</a>]. מיפו (דרום) - חניון חול מול הזקן והים (קדם 82) [] או חניון ציבורי (קדם 94 פינת מנדס פרנס). החוף מדרום לגן המדרון נגיש למכוניות/אמבולנס מתחת לבאבי ובית סידי [<a class='' href='https://www.google.com/maps/place/32.04034915,34.74552602' target='_blank'>32.04034915,34.74552602.</a>]",
               landmarks: [
                    "גינת משחקים [<a class='' href='https://www.google.com/maps/place/32.0464514,34.74703342' target='_blank'>(32.0464514, 34.74703342)</a>]",
                    "גישה דרך נמל יפו או בי\"ס חסן ערפה (רח' קדם 49), גינת טולוז",
               ],
               parking: [
                    "נמל יפו (צפון) [<a class='' href='https://www.google.com/maps/place/32.047939,34.747746' target='_blank'>(32.047939,34.747746)</a>]",
                    "צופית (דרום) [<a class='' href='https://www.google.com/maps/place/32.044637,34.7475555' target='_blank'>(32.044637,34.7475555)</a>]",
               ],
          },
          name: "Midron Yaffo Park",
          lat: "32.0464514",
          lon: "34.74703342",
          aka: "Yafo Gan Hamidron",
          type_order: "",
          overall_order: "39",
          cross_streets: ["Harry Truman", "Mendes-France", "Tsofit", "Ibn Rushd", "Donolo HaRofe"],
          close_streets: ["Nemal Yafo", "Harry Truman", "Kedem"],
          approx_address: "Kedem St 51, Tel Aviv",
          restaurants: ["Abu Isah / Yafo HaKtana", "HaZaken Ve HaYam"],
          hotels: [],
          notes_access:
               "Access only via cycle paths through Midron Park. Entrances: From Yafo Port (North): Motorcycles/foot only via Jaffa Port Parking <a class='' href='https://www.google.com/maps/place/32.047939,34.747746' target='_blank'>(32.047939,34.747746)</a>. From Yafo (Central): Motorcycles/foot only south of Hassan Arfa School (49 Kedem St) or Tsofit Parking at 73 Kedem St <a class='' href='https://www.google.com/maps/place/32.044637,34.7475555' target='_blank'>(32.044637,34.7475555)</a>. From Yafo (South): Sand parking opposite HaZaken Ve HaYam at Kedem 82 <a class='' href='https://www.google.com/maps/place/32.043313,34.747285' target='_blank'>(32.043313,34.747285)</a> or Public Parking at Kedem 94 (corner of Mendes-France). The beach at the southern end of Midron Park can be accessed by car/ambulance below Babai and Beit Sidi at <a class='' href='https://www.google.com/maps/place/32.04034915,34.74552602' target='_blank'>32.04034915,34.74552602.</a>",
          landmarks: [
               "Playground <a class='' href='https://www.google.com/maps/place/32.0464514,34.74703342' target='_blank'>(32.0464514, 34.74703342)</a> access via Yafo Port Parking or Hassan Arfa School",
               "Hassan Arfa School (49 Kedem St)",
               "Toulouse Garden",
          ],
          has_lifeguard: "",
          is_official: "",
          has_gates: true,
          motorcycle_access: true,
          car_access: false,
          parking: [
               "Jaffa Port (North) <a class='' href='https://www.google.com/maps/place/32.047939,34.747746' target='_blank'>(32.047939,34.747746)</a>",
               "Tsofit (South) <a class='' href='https://www.google.com/maps/place/32.044637,34.7475555' target='_blank'>(32.044637,34.7475555)</a>",
          ],
          pre_nav_msg: "",
          type: "park",
     },
     {
          he: {
               name: "גבעת עלייה",
               aka: "יפו",
               cross_streets: ["שתי האחיות (צפון)", "קידרון (דרום)"],
               close_streets: ["בת גלים (צפון)", "סוף"],
               approx_address: "בת גלים 8, תל אביב יפו",
               restaurants: ["באבי (צפון)", "קסיס (דרום)"],
               hotels: ["בין סידי"],
          },
          name: "Givat Aliya",
          lat: "",
          lon: "",
          aka: "Yafo",
          type_order: "",
          overall_order: "40",
          cross_streets: ["Shtei HaAkhayot (N)", "Kidron (S)"],
          close_streets: ["Bat Galim (N)", "Yam Suf"],
          approx_address: "Bat Galim St 8, Tel Aviv-Yafo, Israel",
          restaurants: ["Babai (N)", "Cassis (S)"],
          hotels: ["Beit Sidi"],
          notes_access: "",
          landmarks: [],
          has_lifeguard: "",
          is_official: true,
          has_gates: false,
          motorcycle_access: "",
          car_access: true,
          pre_nav_msg: "",
          type: "beach_official",
     },
];

// var cookie_name = "i18n_lang";
// var default_lang = "en";

function stringToBooleanOrBoolean(string) {
     switch (string.toLowerCase()) {
          case "false":
          case "no":
               return false;
          case "true":
          case "yes":
               return true;
          default:
               return string;
     }
}

function setCookie(cname, cvalue, exdays) {
     // console.log("setCookie()", cname, cvalue, exdays);
     var d = new Date();
     d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
     var expires = "expires=" + d.toUTCString();
     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
     // console.log("getCookie()", cname);
     var name = cname + "=";
     var ca = document.cookie.split(";");
     for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == " ") {
               c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
               return stringToBooleanOrBoolean(c.substring(name.length, c.length));
          }
     }
     return "";
}

simpleSearch = function() {
    // Declare variables
    var input, filter, placeList, a, i, textContent;
    input = document.getElementById('searchfield');
    filter = input.value.toLowerCase();
    placeList = $('.place-wrapper');
    window.placeList = placeList;

    for (i = 0; i < placeList.length; i++) {
    	textContent = $( placeList[i] ).text();
        if (textContent.toLowerCase().indexOf(filter) > -1) {
            // $(placeList[i]).show();
            $(placeList[i]).fadeIn("fast", function() {});
        } else {
            // $(placeList[i]).hide();
            $(placeList[i]).fadeOut("fast", function() {});
        }
    }
}

isMobile = function () {
	//console.log("isMobile()");
	tlv_vars.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	return tlv_vars.isMobile;
};

getIconFilename = function (iconName) {
	//console.log("getIconFilename()",iconName);
	switch( iconName ) {
		case 'navigateToIcon':
			if ( tlv_vars.isMobile == true ){
				return "waze2.png";
			} else {
				return "google-maps_48_trans.png";
			}
			break;
		default:
			placeIcon = "place.png"
	};
};

navigateTo = function (lat, lon, getIcon) {
	//console.log("navigateTo()",lat, lon);
    // Mobile devices - open Waze
    if ( tlv_vars.isMobile === true ) {
        var wazeURL = "waze://?ll=" + lat + "," + lon + "&navigate=yes";
        if (navigator.userAgent.match(/Android/i)) {
            document.location = wazeURL;
        } else {
            window.location.replace(wazeURL);
        }
    }
    // PC - open Google maps
    else {

        window.open("https://www.google.com/maps/place/" + lat + "," + lon, '_blank');
    }
};

// function share(shareThis) {
//      // alert("Share This: " + shareThis);
//      /* https://web.dev/web-share/ */
//      var shareUrl = "https://tlv.works/telaviv_beaches/?goto="+shareThis;
//      if (navigator.share) {
//           navigator
//                .share({
//                     title: "Sharing Title",
//                     text: "Check out this thing!",
//                     url: shareUrl,
//                })
//                .then(() => alert("Successful share"))
//                .catch((error) => alert("Error sharing", error));
//      } else {
//           alert("No sharing!", navigator.canShare );
//      }
// }

/* ------------------------------ */
// function sleep(delay) {
//      return new Promise((resolve) => {
//           setTimeout(resolve, delay);
//      });
// }

function logText(message, isError) {
     if (isError) console.error(message);
     else console.log(message);

     // const p = document.createElement("p");
     // if (isError) p.setAttribute("class", "error");
     // document.querySelector("#output").appendChild(p);
     // p.appendChild(document.createTextNode(message));
}

function logError(message) {
     logText(message, true);
}

async function shareToWeb(gotoAnchor,name,lat,lon) {

     // console.log('shareToWeb');
     // console.log(gotoAnchor, name, lat, lon);
     // console.log(name);

     // const waze_url = "waze://?ll=" + decodeURI(lat) + "," + decodeURI(lon) + "&navigate=yes";
     const title_input = "Share '" + decodeURI(name) + "'";
     const waze_url = "waze.com/ul?ll=" + decodeURI(lat) + "%2C" + decodeURI(lon) + "&navigate=yes";
     const gmaps_url = "www.google.com/maps/place/" + decodeURI(lat) + "," + decodeURI(lon);
     const url_input = "https://tlv.works/telaviv_beaches/?goto="+gotoAnchor;
     const text_input = "*" + decodeURI(name) + "* " + decodeURI("%0D%0A") + "" + url_input + "" + decodeURI("%0D%0A%0D%0A") + "Waze: " + waze_url + "" + decodeURI("%0D%0A") + "GMap: " + gmaps_url;

     // const title = title_input.value;
     // const text = text_input.value;
     // const url = url_input.value;

     const shareObject = {
          title: text_input,
          text: text_input
     };
     // url: url_input,

     console.log(shareObject);

     // try {
     //      // await navigator.share(shareObject);
     //      await navigator.share({ 'title':title_input, 'text':text_input, 'url':url_input });
     //      // alert("Successfully sent share");
     // } catch (error) {
     //      alert("Error sharing: " + error);
     // }

     navigator
          .share(shareObject)
          .then(() => {
               console.log("Thank you for sharing!", shareObject);
          })
          .catch(console.error);
}

// async function shareToWebDelay() {
//      await sleep(6000);
//      shareToWeb();
// }


// function clicked(params) {
//      console.log("Clicked!", $(params));
// }
// function onLoad() {
//      // // Checkboxes disable and delete textfields.
//      // document.querySelector("#title_checkbox").addEventListener("click", checkboxChanged);
//      // document.querySelector("#text_checkbox").addEventListener("click", checkboxChanged);
//      // document.querySelector("#url_checkbox").addEventListener("click", checkboxChanged);

//      // document.querySelector(".place-share-button").addEventListener("click", clicked);
//      // document.querySelector("#share-no-gesture").addEventListener("click", shareToWebDelay);
//      // $(".place-share-button").on("click", function (event) {
//      //      event.stopPropagation();
//      //      event.stopImmediatePropagation();
//      //      //(... rest of your JS code)
//      //      clicked();
//      // });
//      if (navigator.share === undefined) {
//           if (window.location.protocol === "http:") {
//                // navigator.share() is only available in secure contexts.
//                window.location.replace(window.location.href.replace(/^http:/, "https:"));
//           } else {
//                logError("Error: You need to use a browser that supports this draft " + "proposal.");
//           }
//      }
// }
/* ------------------------------ */







getString = function (thisPlaceObj, placeAttribute, lang = "en", iconHTML) {
	//console.log('getString()', thisPlaceObj, placeAttribute, lang);
	var returnString;
	if ( lang == "he" ) {
		returnString = thisPlaceObj.he[placeAttribute] || thisPlaceObj[placeAttribute]; 
	} else {
		returnString = thisPlaceObj[placeAttribute];
	}

	if (returnString && iconHTML) {
		returnString = iconHTML + " " + returnString;
	}
	return returnString;
};

buildArray = function (thisPlaceObj, placeArrayName, lang = "en", iconHTML ,spanClass = "info-item") {
	//console.log("buildArray()", thisPlaceObj, placeArrayName, iconHTML, typeof placeArrayName != "object", placeArrayName.length <= 0);

	var placeAttrArray;

	if (lang == "he") {
		placeAttrArray = ( typeof thisPlaceObj["he"] == "object" && thisPlaceObj["he"][placeArrayName] ) ? thisPlaceObj["he"][placeArrayName] : thisPlaceObj[placeArrayName] || [];
	} else {
		placeAttrArray = thisPlaceObj[placeArrayName] || [];				
	}

	var arrayHTML = "";
	var itemPre = '<span class="' + spanClass + " " + lang + ' ">';
	var itemPost = '</span>';

	$.each( placeAttrArray, function(i,arrayElemText){
		arrayHTML += itemPre + iconHTML + " " + (arrayElemText || "---") + itemPost;
	});

	return arrayHTML;
};

buildBoolean = function (placeAttribute, iconHTML) {
	//console.log("buildBoolean()", placeAttribute, iconHTML, typeof placeAttribute != "boolean");

	if ( typeof placeAttribute == "undefined" ){
		return "";
	}

	var attrHTML = "";
	var facilitiesClass = ( placeAttribute == true ) ? 'success' : 'danger';
	var itemPre = '<span class="info-item facilities ' + facilitiesClass + '">';
	var itemPost = '</span>';
	var checkMark = ( placeAttribute == true ) ? '' : '';

	if ( typeof placeAttribute != "boolean" ) {
		checkMark = placeAttribute;
	}
	attrHTML += itemPre + iconHTML + " " + checkMark + itemPost;

	return attrHTML;
};

function buildAddressLink(thisPlaceObj, placeAttribute, lang = "en", iconHTML, URL) {
	// console.log('createTableFromData.buildAddressLink()', thisPlaceObj, placeAttribute, lang, URL);
	var returnString, URLprefix, URLsuffix;

	if ( lang == "he" ) {
		returnString = thisPlaceObj.he[placeAttribute] || thisPlaceObj[placeAttribute]; 
	} else {
		returnString = thisPlaceObj[placeAttribute];
	}

	URLprefix = '<a class="' + lang + '" href="' + URL + '" target="_blank">';
	URLsuffix = '</a>';

	if (returnString && iconHTML) {
		returnString = iconHTML + " " + URLprefix + returnString + URLsuffix;
	}
	return returnString;
};

buildFeedbackLink = function (thisPlaceObj, en_name, he_name) {
	var returnString = "";
	var subjectForEmail_en = ( tlv_vars.feedbackDefaultMsg + " '" + en_name + "' (" + tlv_vars.version + ")" ).replace(/ /g,"%20");
	var subjectForEmail_he = ( tlv_vars.he.feedbackDefaultMsg + " '" + he_name + "' (" + tlv_vars.version + ")" ).replace(/ /g,"%20");
	var subjectForWhatsapp_en = ( tlv_vars.feedbackDefaultMsg + " '" + en_name + "' (" + tlv_vars.version + "): " ).replace(/["]/g,"-");
	var subjectForWhatsapp_he = ( tlv_vars.he.feedbackDefaultMsg + " '" + he_name + "' (" + tlv_vars.version + "): " ).replace(/["]/g,"-");


	
	returnString += '<span class="info-feedback">' +
	// subject=look at this website&body=Hi,I found this website and thought you might like it http://www.geocities.com/wowhtml/
		'<a class="en nolink" href="mailto:'+ tlv_vars.feedbackEmail + '?subject='+ encodeURIComponent(subjectForEmail_en) + '"><i class="fa fa-fw fa-envelope"></i></a>' +
		'<a class="he nolink" href="mailto:'+ tlv_vars.feedbackEmail + '?subject='+ encodeURIComponent(subjectForEmail_he) + '"><i class="fa fa-fw fa-envelope"></i></a>' +
		'';

	if ( tlv_vars.isMobile === true ) {
		returnString += '' +
			'<a class="en nolink" href="whatsapp://send?phone='+ tlv_vars.feedbackTel + '&text='+ subjectForWhatsapp_en +'"><i class="fa fa-fw fa-whatsapp"></i>' +
			'<a class="he nolink" href="whatsapp://send?phone='+ tlv_vars.feedbackTel + '&text='+ subjectForWhatsapp_he +'"><i class="fa fa-fw fa-whatsapp"></i>' +
			'';
	}

	returnString += '' +
		'<span class="en"> Feedback</span></a>' +
 		'<span class="he"> משוב</span></a>' +
		'</span>';

	return returnString;
};

createTableFromData = function (data) {
	var tableHtml = '';
	var currentRowHtml, en_name, he_name, info_panel, i, accessInfo;
	var placeIcon = "place.png";

	for (i = 0, length = data.length; i < length; i++) {

		/* ICONS */

		switch( data[i].type ) {
		case 'beach_official':
			placeIcon = "beach.png";
			break;
		case 'beach_unofficial':
			placeIcon = "waves.png";
			break;
		case 'beach_unofficial_dogs':
			placeIcon = "dog_beach_3.png";
			break;
		case 'beach_unofficial_port':
			placeIcon = "port_2.png";
			break;
		case 'park':
			placeIcon = "park.png";
			break;
		case 'restaurant':
			placeIcon = "spoonfork.png";
			break;
		case 'landmark':
			placeIcon = "place.png";
			break;
		default:
			placeIcon = "place.png";
		};

		/* NAVIGATION ICON */

		if (data[i].lat && data[i].lon) {
			map_icon = getIconFilename('navigateToIcon') || "route2.png";
			navigateToSpan = '<img class="navigateTo route-icon pull-right" height="24px" width="24px" onclick="event.stopPropagation();navigateTo(\''+ data[i].lat  +'\', \''+ data[i].lon  +'\')" data-lat="'+ data[i].lat  +'" data-lon="'+ data[i].lon  +';" src="img/icons/' + map_icon + '">';
		} else {
			navigateToSpan = '';
		}

		/* ACCESS ICON */

		if ( data[i].pre_nav_msg && data[i].pre_nav_msg.length > 0 ){
			var txt = data[i]["he"].pre_nav_msg || data[i].pre_nav_msg;
               var title = data[i]["he"].name || data[i].name;
			// accessInfo = '<span class="pull-right pointer" onclick="event.stopPropagation();toastr[\'info\'](\'' + txt + '\',\'' + title + '\')"><i class="fa fa-2x fa-fw fa-info-circle pre_nav_msg text-warning"></i></span>';
			accessInfo = '<span class="pre_nav_msg_button en pull-right pointer" data-lang="en" data-tlv_data_id="' + i + '"><i class="fa fa-2x fa-fw fa-info-circle pre_nav_msg text-warning"></i></span>';
			accessInfo += '<span class="pre_nav_msg_button he pull-right pointer" data-lang="he" data-tlv_data_id="' + i + '"><i class="fa fa-2x fa-fw fa-info-circle pre_nav_msg text-warning"></i></span>';
		} else{
			accessInfo = '';
		}


		/* NAME */

		en_name = data[i].name;
		he_name = data[i]["he"] && data[i]["he"].name || en_name;


		/* INFO PANEL */

		info_panel = '<div id="info_panel_'+i+'" class="info_panel container collapse">' +
			/* TOP LINE */
			'<div class="top-info-row row row-eq-height place-row">' +
				'<div class="place-detail col-xs-12">' +
					'<span class="info-item approx_address en">' +
						buildAddressLink( data[i], "approx_address", "en", '<i class="fa fa-fw fa-map-o"></i>', "https://www.google.com/maps/place/"+data[i].approx_address.replace(/ /g,'+')+"/" ) +  
					'</span>' +
					'<span class="info-item approx_address he">' +
						buildAddressLink( data[i], "approx_address", "he", '<i class="fa fa-fw fa-map-o"></i>', "https://www.google.com/maps/place/"+data[i].approx_address.replace(/ /g,'+')+"/" ) +  
					'</span>' +
					'<span class="info-item cross_streets en">' + 
						buildArray( data[i], "cross_streets", "en", '<i class="fa fa-fw fa-arrows-h"></i>', 'info-list' ) + 
					'</span>' +
					'<span class="info-item cross_streets he">' + 
						buildArray( data[i], "cross_streets", "he", '<i class="fa fa-fw fa-arrows-h"></i>', 'info-list' ) + 
					'</span>' +
					'<span class="info-item close_streets en">' + 
						buildArray( data[i], "close_streets", "en", '<i class="fa fa-fw fa-arrows-v"></i>', 'info-list' ) + 
					'</span>' +
					'<span class="info-item close_streets he">' + 
						buildArray( data[i], "close_streets", "he", '<i class="fa fa-fw fa-arrows-v"></i>', 'info-list' ) + 
					'</span>' +
					'<span class="info-item aka en">' + 
						getString( data[i], "aka", "en", '<i class="fa fa-fw fa-tags"></i>' ) + 
					'</span>' +
					'<span class="info-item aka he">' + 
						getString( data[i], "aka", "he", '<i class="fa fa-fw fa-tags"></i>' ) + 
					'</span>' +
					'<span class="info-item notes_access en">' + 
						getString( data[i], "notes_access", "en", '<i class="fa fa-fw fa-pencil"></i>' ) + 
					'</span>' +
					'<span class="info-item notes_access he">' + 
						getString( data[i], "notes_access", "he", '<i class="fa fa-fw fa-pencil"></i>' ) + 
					'</span>' +

				'</div>' +
			'</div>' +
			/* SECOND LINE */
			'<div class="bottom-info-row row row-eq-height place-row">' +
				/* SECOND LINE - LEFT COLUMN */
				'<div class="place-detail left-col col-xs-8">' + 
						buildArray( data[i], "hotels", "en", '<i class="fa fa-fw fa-bed"></i>' ) + 
						buildArray( data[i], "hotels", "he", '<i class="fa fa-fw fa-bed"></i>' ) + 
						buildArray( data[i], "restaurants", "en", '<i class="fa fa-fw fa-cutlery"></i>' ) + 
						buildArray( data[i], "restaurants", "he", '<i class="fa fa-fw fa-cutlery"></i>' ) + 
						buildArray( data[i], "landmarks", "en", '<i class="fa fa-fw fa-map-marker"></i>' ) + 
						buildArray( data[i], "landmarks", "he", '<i class="fa fa-fw fa-map-marker"></i>' ) + 
						buildArray( data[i], "parking", "en", '<i class="fa fa-fw fa-product-hunt"></i>' ) + 
						buildArray( data[i], "parking", "he", '<i class="fa fa-fw fa-product-hunt"></i>' ) + 
				'</div>' +

				/* SECOND LINE - RIGHT COLUMN */
				'<div class="place-detail right-col col-xs-4 pull-right">' + 
						buildBoolean( data[i].on_foot_only, '<img class="facilities-icon" src="img/icons/by_foot_success.png">' ) + 
						buildBoolean( data[i].motorcycle_access, '<i class="fa fa-2x fa-fw fa-motorcycle"></i>' ) + 
						buildBoolean( data[i].car_access, '<i class="fa fa-2x fa-fw fa-ambulance"></i>' ) + 
						buildBoolean( data[i].has_lifeguard, '<i class="fa fa-2x fa-fw fa-life-ring"></i>' ) + 
						buildBoolean( data[i].has_firstaid, '<i class="fa fa-2x fa-fw fa-medkit"></i>' ) + 
						buildFeedbackLink ( data[i], en_name, he_name ) +
				'</div>' +
			'</div>' +
               /* SHARE LINE  */
               '<div class="share-info-row row row-eq-height place-row">' +
                    // '<button class="place-share-button en"  data-place="info_panel_'+i+'"  no_onclick="shareToWeb(\'info_panel_' + i + '\', \'' + encodeURI(en_name) + '\', \'' + data[i].lat  +'\', \'' + data[i].lon  +'\'   )">'+'<i class="fa fa-fw fa-share-alt"></i> Share' + '</button>' +
                    // '<button class="place-share-button he"  data-place="info_panel_'+i+'"  no_onclick="shareToWeb(\'info_panel_' + i + '\', \'' + encodeURI(he_name) + '\', \'' + data[i].lat + '\', \'' + data[i].lon + '\'   )">'+'<i class="fa fa-fw fa-share-alt"></i> שיתוף' + '</button>' +
                    '<button class="place-share-button en"  data-place="info_panel_' + i + '"  data-name="' + encodeURI(en_name) + '" data-lat="' + data[i].lat + '" data-lon="' + data[i].lon + '">'+'<i class="fa fa-fw fa-share-alt"></i> Share' + '</button>' +
                    '<button class="place-share-button he"  data-place="info_panel_' + i + '"  data-name="' + encodeURI(he_name) + '" data-lat="' + data[i].lat + '" data-lon="' + data[i].lon + '">'+'<i class="fa fa-fw fa-share-alt"></i> שיתוף' + '</button>' +
               '</div>' +

		'</div>';

		/* PLACE LINE + COMPLILATION */

		currentRowHtml = '<div class="place-wrapper '+ data[i].type  +'">'+
				'<div class="place-line '+ data[i].type  +'" data-target="#info_panel_'+i+'" >' +
				accessInfo +
				navigateToSpan +
				'<div class="place-name en"><img class="place-icon" width="34px" height="24px" src="img/icons/'+ placeIcon +'">' + en_name + '</div>' +
				'<div class="place-name he"><img class="place-icon" width="34px" height="24px" src="img/icons/'+ placeIcon +'">' + he_name + '</div>' +
				'<div class="place-subtitle">' + data[i].aka + '</div>' +
			'</div>'+
			info_panel +
			'</div>';
			tableHtml += currentRowHtml;
	}
     // console.log("Returning tableHtml");
	return tableHtml;
}

// isLangHe = function (argument) {
// 	console.log('isLangHe()', argument );
// 	var isHe = $('html').attr('lang') == 'he' ? true : false;
// 	return isHe;
// }

function updateLang(specifyLang) {
	// console.log('updateLang()', specifyLang );
	if (!specifyLang){
		/* Set specific language if provided */
		$('html').attr('lang', function(index, attr){
			return attr == 'en' ? 'he' : 'en';
		});
		$('html').attr('dir', function(index, attr){
			return attr == 'ltr' ? 'rtl' : 'ltr';
		});
	} else {
		/* If not, just toggle between 'he' and 'en' */
		$('html').attr('lang',specifyLang);
		$('html').attr('dir', (specifyLang != 'he')?'ltr':'rtl' );
	}
	// var currentLang = $('html').attr('lang');
	// var previousLang = currentLang == 'en' ? 'he' : 'en';
     // /* Set Cookie for next time... */
     // setCookie('lang',currentLang);

	// /* In general, we are not swapping content.  All content is added to DOM.  Simply showing and hiding based the selected lang */
	// $('.'+currentLang).show();
	// $('.'+previousLang).hide();

	/* Update placeholder for search field (to avoid having two search fields in the DOM) */
	var newText = currentLang == "en" ? "Search... for lifeguard huts, type #.. eg #25" : "חפשו... עבור סוכת מציל, הקלד #+מספר (לדוגמה #25)";
	$("#searchfield").attr("placeholder", newText);

	/* Reverse pull left and pull right */
	if ( $('html').attr('dir') == 'rtl') {
		$('.pull-right').each(function() {
				$(this).attr('style', 'float:left !important;text-align:left !important;');
		});
		$('.pull-left').each(function() {
				$(this).attr("style", "float:right !important;text-align:right !important;");
		});
	} else {
		$('.pull-right').each(function() {
			$(this).attr('style', 'float:right !important;text-align:right !important;');
		});
		$('.pull-left').each(function() {
			$(this).attr("style", "float:left !important;text-align:left !important;");
		});
	}

     /* Moved after the language direction change as the !important revealed them again */
	var currentLang = $("html").attr("lang");
     var previousLang = currentLang == "en" ? "he" : "en";
     /* Set Cookie for next time... */
     setCookie("lang", currentLang);

     /* In general, we are not swapping content.  All content is added to DOM.  Simply showing and hiding based the selected lang */
     $("." + currentLang).show();
     $("." + previousLang).hide();




}

// function showFilterbarBool(showBool) {
//      console.log("showFilterbar() isVisible before:", $(".filterbar").is(":visible"));
//      $(".filterbar").toggle("fast", function () {
//           console.log("showFilterbar() isVisible after:", $(".filterbar").is(":visible"));
//           setCookie("show_filter", $(".filterbar").is(":visible"));
//      });
//      window.scroll(0, 0);
// }

function showFilterbar(showBool) {
     // console.log("showFilterbar(", showBool, "typeof:", typeof showBool, ") isVisible before:", $(".filterbar").is(":visible"));
     if (showBool === true) {
          $(".filterbar").show("fast", function () {
               // console.log("showFilterbar() isVisible after:", $(".filterbar").is(":visible"));
               setCookie("show_filter", showBool);
          });
          window.scroll(0, 0);
          return;
     } else if (showBool === false) {
          $(".filterbar").hide("fast", function () {
               // console.log("showFilterbar() isVisible after:", $(".filterbar").is(":visible"));
               setCookie("show_filter", showBool);
          });
          // window.scroll(0, 0);
          return;
     } else {
          $(".filterbar").toggle("fast", function () {
               // console.log("showFilterbar() isVisible after:", $(".filterbar").is(":visible"));
               setCookie("show_filter", $(".filterbar").is(":visible"));
          });
          window.scroll(0, 0);
     }
}

function onclickmap(thisElem) {
     console.log(thisElem.innerHTML);
     window.open("https://www.google.com/maps/place/" + thisElem.innerHTML, "_blank", "location=0");
}


// $(window).on('beforeunload', function() {
// 	console.log('beforeunload');
// 	// window.scroll(0, 60);
// });

$( document ).ready(function() {
     // console.log('ONREADY');

     tlv_vars.isMobile = isMobile();

     /* DOM GENERATION */
     var textToAppend = createTableFromData(tlv_data);
     $("#myAccordian").replaceWith(textToAppend);

     /* Scroll to hide search */
     window.scroll(0, 60);

     /* Simulate effect of click to hide the non-selected language */

     var queryVars = Object.fromEntries([...new URLSearchParams(location.search)]);
     // console.log("queryVars:", queryVars);

     /* Set language on load */
     /* lang value taken in the following order: URL > Cookie > Default    */
     if (["en", "he"].includes(queryVars.lang)) {
          updateLang(queryVars.lang);
     } else if (["en", "he"].includes(getCookie("lang"))) {
          updateLang(getCookie("lang"));
     } else if (!$("html").attr("lang")) {
          updateLang("he");
     }

     /* EVENT HANDLERS */

     /* Open Report Forms */
     $(".openForm").click(function (e) {
          window.open("https://motid-1221.formtitan.com/Medical_journal#/", "_blank", "location=0");
     });

     /* Change Language */
     $(".toggleLang").click(function (e) {
          updateLang();
     });

     /* Close Menu */
     $(".closeOnClick").click(function (e) {
          $(".navbar-toggle").click();
     });

     /* searchButton */
     $(".searchButton").click(function (e) {
          e.stopPropagation();
          window.scroll(0, 0);
          $("#searchfield").focus();
     });

     /* Search Field Clear/Reset Button */
     $(".search-reset").click(function (e) {
          e.stopPropagation();
          $("#searchfield").val(""); // Clear the input field
          simpleSearch(); // Reset the search that were based in the cleared value
          $("#searchfield").focus(); // Restore the focus on the search field
     });

     $("button.filterButton").click(function (e) {
          e.stopPropagation();
          showFilterbar();
     });
     $(".filter-toggle").click(function (e) {
          clickEvent = e;
          //console.log(e.currentTarget.dataset.type, $( e.currentTarget ).hasClass('active') );
          $("div.place-wrapper." + e.currentTarget.dataset.type).toggle("fast", function () {});
     });

     /* Accordian */
     // $( ".place-wrapper" ).click(function(e) {
     $(".place-line").click(function (e) {
          var thisInfo = e.currentTarget.dataset.target;
          var thisWrapper = e.currentTarget.parentElement;
          if (thisInfo) {
               if ($(thisInfo).hasClass("in")) {
                    /* Hide info if open already and clicked again */
                    $(".collapse").removeClass("in");
                    $(".place-wrapper").removeClass("selected");
               } else {
                    /* Otherwise close all and open new info div */
                    $(".collapse").removeClass("in");
                    $(".place-wrapper").removeClass("selected");
                    $(thisInfo).addClass("in");
                    $(thisWrapper).addClass("selected");

                    /* Scroll to info div */
                    $("html, body").animate(
                         {
                              scrollTop: $(thisInfo).offset().top - 173,
                         },
                         100
                    );
               }
          }
     });

     /* Share Click Handler */
     $(".place-share-button").on("click", function (event) {
          event.stopPropagation();
          event.stopImmediatePropagation();
          // console.log($(this).data('place'),'\n',$(this).data('name'),'\n',$(this).data('lat'),'\n',$(this).data('lon'));
          shareToWeb($(this).data("place"), $(this).data("name"), $(this).data("lat"), $(this).data("lon"));
     });

     /* Access/pre_nav_msg Message (i) Handler */
     $("span.pre_nav_msg_button").on("click", function (event) {
          event.stopPropagation();
          event.stopImmediatePropagation();
          var thisButtonId = $(this).data("tlv_data_id");
          var thisNavMessage;
          var thisNavTitle;
          if ($(this).data("lang") == "en"){
               /* English - revert to Hebrew */
               // Set thisNavMessage
               thisNavMessage = tlv_data[$(this).data("tlv_data_id")].pre_nav_msg || tlv_data[$(this).data("tlv_data_id")].he.pre_nav_msg;
               // Set thisNavTitle
               thisNavTitle = tlv_data[$(this).data("tlv_data_id")].name || tlv_data[$(this).data("tlv_data_id")].he.name;
          } else {
               /* Assume Hebrew - revert to English */
               // Set thisNavMessage
               thisNavMessage = tlv_data[$(this).data("tlv_data_id")].he.pre_nav_msg || tlv_data[$(this).data("tlv_data_id")].pre_nav_msg;
               // Set thisNavTitle
               thisNavTitle = tlv_data[$(this).data("tlv_data_id")].he.name || tlv_data[$(this).data("tlv_data_id")].name;
          }

          console.log(
               $(this).data("lang"),
               $(this).data("tlv_data_id"),
               '\n',thisNavMessage,
               '\n',thisNavTitle
          );

          try {
               toastr["info"](thisNavMessage, thisNavTitle);
          } catch (err) {
               console.log("Toastr Error! Button ID: '" + thisButtonId + "' with attempted language: '" + $(this).data("lang") + "' Error:\n", err);
          }
     });

     /* Handle any ?goto= parameters on incoming URL */

     if (!!queryVars.goto) {
          // console.log("queryVars.goto found!", queryVars.goto);
          $('[data-target="#' + queryVars.goto + '"]').trigger("click");
     } else {
          // console.log("queryVars.goto NOT found!", queryVars);
     }

     /* Show/hide filter on load */

     /* show_filter value taken in the following order: URL > Cookie > Default */
     if (["true", "false"].includes(queryVars.show_filter)) {
          // console.log("queryVars.show_filter found!", queryVars.show_filter);
          showFilterbar(stringToBooleanOrBoolean(queryVars.show_filter));
     } else if ([true, false].includes(getCookie("show_filter"))) {
          showFilterbar(getCookie("show_filter"));
     } else {
          // console.log("URL 'queryVars.show_filter' NOT found and no 'show_filter' cookie was found!");
     }

     /* Toastr Notifications */
     toastr.options = {
          closeButton: true,
          debug: false,
          newestOnTop: false,
          progressBar: true,
          // positionClass: "toast-bottom-right",
          positionClass: "toast-bottom-full-width",
          preventDuplicates: true,
          onclick: null,
          showDuration: "300",
          hideDuration: "1000",
          timeOut: "16000",
          extendedTimeOut: "1000",
          showEasing: "swing",
          hideEasing: "linear",
          showMethod: "fadeIn",
          hideMethod: "fadeOut",
     };

     // toastr["success"]("Loaded Successfully");
});

// function loadingDone() {
//      console.log("ONLOAD!");
//           setTimeout(
//                (function countdown() {
//                     console.log("now!");
//                     $(".searchButton").trigger("click");
//                }),
//                1000
//           );
//           // $(".searchButton").trigger("click");
// }
// window.onload = loadingDone;