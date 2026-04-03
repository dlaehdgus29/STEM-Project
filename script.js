const foodDatabase = {
    "lean_beef": {
        dog: { status: "safe", msg: "SAFE: High Bioavailability.", why: "Cooked lean beef provides essential Heme iron and complete amino acids. Ensure it is plain; salt or human seasoning triggers ion toxicosis and kidney strain." },
        cat: { status: "safe", msg: "SAFE: Essential Taurine.", why: "As obligate carnivores, cats require the Taurine in beef for retinal health and cardiac muscle function. Lack of taurine leads to irreversible DCM (dilated cardiomyopathy)." },
        rabbit: { status: "toxic", msg: "DANGER: Hindgut Failure.", why: "Rabbits are evolved for high-fiber forage. Animal protein destroys their cecal microflora, leading to fatal enterotoxemia and GI shutdown." },
        ferret: { status: "safe", msg: "SAFE: Metabolic Match.", why: "Ferrets have a 3-4 hour GI transit time and zero ability to digest plants. Animal protein is their only viable energy source." },
        all: { status: "safe", msg: "SAFE: Nutrient Dense.", why: "Safe for omnivores/carnivores if cooked and unseasoned. High iron supports red blood cell production." }
    },
    "chicken": {
        all: { status: "safe", msg: "SAFE: Lean Protein.", why: "Boiled, unseasoned chicken breast is the standard 'bland diet.' It is 98% digestible for most mammals and carries the lowest risk of gastric irritation." }
    },
    "pork_bacon": {
        dog: { status: "warning", msg: "CAUTION: Pancreatitis Risk.", why: "The high lipid (fat) density in bacon triggers an overproduction of digestive enzymes, causing the pancreas to become inflamed and potentially 'self-digest.' This is a critical medical emergency." },
        hedgehog: { status: "toxic", msg: "DANGER: Hepatic Lipidosis.", why: "Small insectivores cannot process the saturated fats in pork, leading to rapid fatty liver disease and metabolic collapse." },
        all: { status: "warning", msg: "CAUTION: Hypernatremia.", why: "High salt levels in cured pork cause osmotic imbalance, leading to brain swelling (salt poisoning) in smaller pets." }
    },
    "raw_fish": {
        cat: { status: "warning", msg: "CAUTION: Thiaminase Enzyme.", why: "Raw fish contains Thiaminase, which destroys Vitamin B1 (Thiamine). Deficiency leads to 'stargazing' (neurological circling) and seizures." },
        dog: { status: "warning", msg: "CAUTION: SPD Pathogen.", why: "Raw freshwater fish can carry Neorickettsia bacteria, causing Salmon Poisoning Disease, which is 90% fatal in dogs if untreated." },
        all: { status: "warning", msg: "CAUTION: Pathogen Risk.", why: "Salmonella and Listeria risks are high in raw seafood, impacting both animal and human handlers." }
    },
    "liver": {
        dog: { status: "warning", msg: "CAUTION: Hypervitaminosis A.", why: "Liver contains toxic levels of Vitamin A if fed regularly. This fat-soluble vitamin causes painful bone spurs (spondylosis) along the spine." },
        all: { status: "warning", msg: "CAUTION: Copper/A Toxicity.", why: "Organ meats are vital in tiny amounts (under 5%) but cause organ-shattering vitamin toxicity if used as a staple diet." }
    },
    "processed_meat": {
        all: { status: "toxic", msg: "DANGER: Nitrates & Additives.", why: "Salami and Hot Dogs contain Nitrates that interfere with oxygen transport in the blood (Methemoglobinemia). They also often contain hidden garlic/onion powder toxins." }
    },
    "cooked_bones": {
        all: { status: "toxic", msg: "DANGER: Internal Perforation.", why: "Cooking makes bones brittle and crystalline. They splinter into razor shards that can puncture the esophagus or stomach, requiring invasive surgery." }
    },
    "apple": {
        dog: { status: "safe", msg: "SAFE: Fiber & Vitamin C.", why: "Flesh is safe, but seeds contain amygdalin, which releases cyanide. Ensure the fruit is cored and deseeded." },
        ferret: { status: "toxic", msg: "DANGER: Insulinoma Risk.", why: "Ferrets cannot process complex sugars. Fructose causes pancreatic spikes that lead to fatal tumors (Insulinomas)." },
        all: { status: "safe", msg: "SAFE: Low-Calorie Snack.", why: "Generally safe for omnivores in small amounts. Always remove seeds to prevent cyanide exposure." }
    },
    "blueberries": {
        dog: { status: "safe", msg: "SAFE: Anthocyanins.", why: "High in antioxidants that protect cells from oxidative stress. Low glycemic index makes them a safe fruit choice." },
        all: { status: "safe", msg: "SAFE: Superfood.", why: "Rich in Vitamin K and Manganese, providing a healthy boost for birds and most omnivorous mammals." }
    },
    "banana": {
        rabbit: { status: "warning", msg: "CAUTION: Cecal Bloom.", why: "High starch and sugar can cause a 'bad' bacterial bloom in the rabbit's gut, leading to painful and potentially fatal gas/bloat." },
        all: { status: "safe", msg: "SAFE: Potassium Rich.", why: "Excellent source of magnesium and electrolytes, though high sugar requires strict portion control." }
    },
    "broccoli": {
        horse: { status: "toxic", msg: "DANGER: Flatulent Colic.", why: "Cruciferous veggies produce massive gas in the horse's colon. Because horses cannot belch or vomit, this gas causes life-threatening colic." },
        dog: { status: "warning", msg: "CAUTION: Isothiocyanates.", why: "Contains gastric irritants. If broccoli exceeds 10% of total diet, it can cause severe GI distress and thyroid interference." },
        all: { status: "warning", msg: "CAUTION: GI Gas.", why: "Causes significant bloating and flatulence in most small mammals." }
    },
    "carrot": {
        dog: { status: "safe", msg: "SAFE: Beta-Carotene.", why: "Excellent low-calorie treat high in fiber and beta-carotene (Vitamin A). Crunching raw carrots can also help remove plaque from teeth." },
        rabbit: { status: "warning", msg: "CAUTION: High Sugar.", why: "Despite popular media, root vegetables are high in carbohydrates and sugars. Carrots should be a rare treat, not a staple, as excess sugar disrupts their specialized gut flora." },
        horse: { status: "safe", msg: "SAFE: Traditional Forage.", why: "Highly palatable and provides excellent moisture and Vitamin A without overwhelming their digestive tract." },
        all: { status: "safe", msg: "SAFE: Root Vegetable.", why: "Generally safe and nutritious. However, small herbivores should consume them sparingly due to the relatively high sugar content compared to leafy greens." }
    },
    "cherries": {
        all: { status: "toxic", msg: "DANGER: Cyanogenic Glycosides.", why: "The pits and stems contain cyanide, which inhibits cytochrome c oxidase (cell oxygen use). Symptoms include dilated pupils and respiratory failure." }
    },
    "mushroom": {
        all: { status: "warning", msg: "CAUTION: Mycotoxins.", why: "Store-bought are safe, but wild mushrooms can contain Amatoxins that cause irreversible liver and kidney destruction within 24 hours." }
    },
    "avocado": {
        bird: { status: "toxic", msg: "FATAL: Persin Toxin.", why: "Persin causes heart muscle death (myocardial necrosis) in birds, leading to rapid respiratory failure and death." },
        all: { status: "toxic", msg: "DANGER: Pulmonary Congestion.", why: "Highly toxic to rabbits and guinea pigs; causes fluid buildup around the heart and lungs." }
    },
    "grapes": {
        dog: { status: "toxic", msg: "CRITICAL: Tartaric Acid.", why: "Grapes cause sudden, acute renal (kidney) failure. The exact toxic mechanism was recently identified as tartaric acid poisoning." },
        all: { status: "warning", msg: "CAUTION: Fermentation/Bloat.", why: "High sugar content leads to dangerous gas buildup in small hindgut fermenters." }
    },
    "citrus": {
        rat: { status: "toxic", msg: "DANGER: Renal Cancer (Males).", why: "In male rats, d-limonene binds to alpha-2u-globulin protein, causing kidney damage and cancer. Females are unaffected." },
        all: { status: "warning", msg: "CAUTION: Gastric Acid.", why: "The high citric acid content is corrosive to the stomach lining of most domestic animals." }
    },
    "onion": {
        all: { status: "toxic", msg: "FATAL: Oxidative Damage.", why: "Contains N-propyl disulfide, which causes red blood cells to burst (Heinz Body Anemia), leading to oxygen deprivation." }
    },
    "spinach": {
         reptile: { status: "warning", msg: "CAUTION: Calcium Binder.", why: "Oxalates bind to calcium, preventing absorption. This is a primary driver of Metabolic Bone Disease (MBD) in lizards." },
        all: { status: "warning", msg: "CAUTION: Bladder Stones.", why: "High oxalate levels contribute to urolithiasis (stones) in guinea pigs and rabbits." }
    },
    "chocolate": {
        all: { status: "toxic", msg: "CRITICAL: Theobromine.", why: "Animals cannot metabolize theobromine. It builds up to toxic levels, causing heart arrhythmias, seizures, and death." }
    },
    "xylitol": {
        dog: { status: "toxic", msg: "FATAL: Hypoglycemia.", why: "Triggers a massive insulin surge. Blood sugar crashes instantly, leading to seizures and total liver failure." },
        all: { status: "toxic", msg: "DANGER: Hepatic Failure.", why: "Extremely toxic even in microscopic amounts to almost all non-human mammals." }
    },
    "alcohol": {
        all: { status: "toxic", msg: "FATAL: Ethanol Toxicity.", why: "Animals have tiny livers and high metabolic rates. Alcohol causes rapid central nervous system collapse." }
    },
    "caffeine": {
        all: { status: "toxic", msg: "CRITICAL: Cardiac Stimulant.", why: "Methylxanthines cause the heart to race uncontrollably, leading to tremors and cardiac arrest." }
    },
    "dairy": {
        all: { status: "warning", msg: "CAUTION: Lactose Intolerance.", why: "Most adult mammals lack 'lactase.' Dairy causes osmotic diarrhea, drawing water into the gut and causing dehydration." }
    }
};

function checkFoodSafety() {
    const species = document.getElementById("species").value;
    const food = document.getElementById("food-select").value;
    const card = document.getElementById("result-card");
    
    if (!food) {
        alert("Please select a substance to begin the analysis.");
        return;
    }

    const data = foodDatabase[food][species] || foodDatabase[food]["all"];
    
    card.style.display = "block";
    card.className = data.status;
    
    document.getElementById("result-status-text").innerText = data.status.toUpperCase();
    document.getElementById("result-title").innerText = data.msg;
    document.getElementById("result-desc").innerText = `Toxicological Analysis for: ${species.toUpperCase()}`;
    document.getElementById("result-why").innerHTML = `<strong>Biological Explanation:</strong> ${data.why}`;
    
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
