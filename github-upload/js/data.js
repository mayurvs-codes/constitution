// ============================================================
// DATA.JS — Single Source of Truth
// Constitution, Cyber Law & Professional Ethics Study Platform
// Content based on provided syllabus structure
// ============================================================

const UNIT_META = [
  {
    "id": 1,
    "title": "Introduction to Constitution of India",
    "color": "#1e40af",
    "accent": "#3b82f6",
    "icon": "🏛️",
    "bg": "from-blue-900 to-blue-700"
  },
  {
    "id": 2,
    "title": "Federal System, Legislature, Executive & Judiciary",
    "color": "#065f46",
    "accent": "#10b981",
    "icon": "⚖️",
    "bg": "from-emerald-900 to-emerald-700"
  },
  {
    "id": 3,
    "title": "Cyber Law & Intellectual Property Regime",
    "color": "#5b21b6",
    "accent": "#8b5cf6",
    "icon": "💻",
    "bg": "from-purple-900 to-purple-700"
  },
  {
    "id": 4,
    "title": "E-Commerce & Professional Ethics",
    "color": "#92400e",
    "accent": "#f59e0b",
    "icon": "🤝",
    "bg": "from-amber-900 to-amber-700"
  }
];

// ============================================================
// SUBTOPIC SUMMARIES DATABASE
// ============================================================
const SUBTOPIC_SUMMARIES = {
  "constitutional_history@Pre-independence Background": "Demands for self-rule and a constituent assembly prior to independence.",
  "constitutional_history@Colonial Legislation": "Acts passed by British Parliament like Regulating Act and Charter Acts.",
  "constitutional_history@Path to Independence": "Historical milestones leading to the Indian Independence Act 1947.",
  "goi_act_1919@Montagu-Chelmsford Reforms": "Reforms named after Montagu and Chelmsford forming the basis of the 1919 Act.",
  "goi_act_1919@Dyarchy": "Dual governance system splitting provincial subjects into Transferred and Reserved.",
  "goi_act_1919@Communal Electorate": "Separate electoral seats reserved for specific religious and social groups.",
  "goi_act_1919@Bicameralism": "Establishment of a two-house legislature at the central government level.",
  "goi_act_1935@All India Federation": "Proposed union of British provinces and princely states (never implemented).",
  "goi_act_1935@Provincial Autonomy": "Granting of independent executive authority to provinces, replacing dyarchy.",
  "goi_act_1935@Federal Court": "Establishment of the precursor to the Supreme Court of India in Delhi.",
  "goi_act_1935@Division of Powers": "Distribution of subjects into Federal, Provincial, and Concurrent lists.",
  "goi_act_1947@Partition Plan": "The Mountbatten Plan partitioning British India into two dominions.",
  "goi_act_1947@Two Dominions": "Creation of the independent dominions of India and Pakistan on August 15, 1947.",
  "goi_act_1947@Constituent Assembly": "Transition of the assembly into a sovereign law-making body.",
  "goi_act_1947@Princely States": "Lapse of British paramountcy, allowing states to join either dominion.",
  "constituent_assembly@Formation": "Establishment of the assembly in 1946 under the Cabinet Mission Plan.",
  "constituent_assembly@Composition": "Representation of provinces and princely states in the drafting body.",
  "constituent_assembly@Debates": "Deliberations on language, fundamental rights, and governance structure.",
  "constituent_assembly@Committees": "Specialized panels like the Drafting Committee led by Dr. B. R. Ambedkar.",
  "constituent_assembly@Adoption": "Formal adoption of the Constitution on November 26, 1949.",
  "preamble@Meaning": "Introductory statement outlining the source, nature, and goals of the Constitution.",
  "preamble@Key Words": "Concepts like Sovereign, Socialist, Secular, Democratic, Republic, and Justice.",
  "preamble@Significance": "Serves as the key to the minds of the makers of the Constitution.",
  "preamble@Is Preamble justiciable?": "Held non-justiciable (cannot be enforced directly in a court of law).",
  "preamble@42nd Amendment": "1976 amendment adding the words 'Socialist', 'Secular', and 'Integrity'.",
  "federalism@Features of Federal State": "Dual government, written constitution, division of powers, supreme judiciary.",
  "federalism@Quasi-federal Character": "Unitary bias in the federal structure as defined by K.C. Wheare.",
  "federalism@Centre-State Relations": "Legislative, administrative, and financial divisions between Union and States.",
  "federalism@Cooperative Federalism": "Collaborative relationship between Centre and States to resolve national issues.",
  "secularism@Indian Secularism": "Positive concept of equal respect and support for all religious beliefs.",
  "secularism@Western Secularism": "Negative concept advocating strict, complete separation of church and state.",
  "secularism@Freedom of Religion": "Individual rights to practice and propagate faith under Articles 25-28.",
  "secularism@State and Religion": "The constitutional boundary permitting state regulation of secular religious tasks.",
  "citizenship@Acquisition": "Five modes of acquiring citizenship: Birth, Descent, Registration, Naturalization, Territory.",
  "citizenship@Termination": "Three modes of losing citizenship: Renunciation, Termination, and Deprivation.",
  "citizenship@Citizenship Amendment Act 2019": "Fast-tracked citizenship for persecuted religious minorities from neighboring nations.",
  "citizenship@Overseas Indian Citizenship": "Special registration category providing lifetime visas and certain economic rights.",
  "right_to_equality@Article 14": "Guarantees equality before the law and equal protection of the laws.",
  "right_to_equality@Article 15": "Prohibits discrimination on grounds of religion, race, caste, sex, or birth.",
  "right_to_equality@Article 16": "Ensures equal opportunity in matters of public employment.",
  "right_to_equality@Article 17": "Abolishes the practice of untouchability and makes it a punishable offense.",
  "right_to_equality@Article 18": "Abolishes titles of nobility, preserving democratic equality.",
  "right_to_freedom@Article 19": "Guarantees six basic democratic freedoms including speech and assembly.",
  "right_to_freedom@Article 20": "Protection against double jeopardy, ex-post-facto laws, and self-incrimination.",
  "right_to_freedom@Article 21": "Protection of life and personal liberty, the source of implied rights.",
  "right_to_freedom@Article 22": "Protection against arbitrary arrest and preventive detention rules.",
  "right_to_freedom@Reasonable Restrictions": "Constitutional limits on freedoms for national security, public order, and morality.",
  "right_to_privacy@Constitutional Basis": "Derived primarily from the right to personal liberty under Article 21.",
  "right_to_privacy@Puttaswamy Case": "Nine-judge bench judgment declaring privacy a fundamental right in 2017.",
  "right_to_privacy@Digital Privacy": "Protection of personal data and digital identity in the cyberspace.",
  "right_to_privacy@Surveillance Laws": "Legal frameworks and checks governing state wiretapping and monitoring.",
  "right_to_privacy@DPDPA 2023": "Statutory framework for personal data protection and privacy rights in India.",
  "freedom_of_religion@Article 25": "Guarantees individual freedom of conscience, profession, practice, and propagation.",
  "freedom_of_religion@Article 26": "Provides religious denominations the right to manage their own affairs.",
  "freedom_of_religion@Article 27": "Prohibits tax proceeds from being used to promote specific religions.",
  "freedom_of_religion@Article 28": "Restricts religious instructions in fully state-funded educational institutions.",
  "freedom_of_religion@Minority Rights": "Cultural and educational protections for minorities under Articles 29-30.",
  "freedom_of_religion@Conversion": "Laws regulating forced or fraudulent religious conversion vs. propagation.",
  "constitutional_remedies@Article 32": "Right to move the Supreme Court for enforcement of fundamental rights.",
  "constitutional_remedies@Article 226": "Writ jurisdiction of High Courts, wider than Article 32.",
  "constitutional_remedies@Five Writs": "Prerogative writs to safeguard rights against administrative excesses.",
  "constitutional_remedies@Habeas Corpus": "Writ to produce a detained person and test legality of detention.",
  "constitutional_remedies@Mandamus": "Writ commanding a public official to perform their statutory duty.",
  "constitutional_remedies@Certiorari": "Writ to quash a decision of a lower court exceeding jurisdiction.",
  "constitutional_remedies@Prohibition": "Writ preventing a lower court from continuing to exceed jurisdiction.",
  "constitutional_remedies@Quo Warranto": "Writ challenging the legality of holding a public office.",
  "dpsp@Nature": "Non-justiciable directive principles guiding state policy formulation.",
  "dpsp@Classification": "Categorized into Socialistic, Gandhian, and Liberal-Intellectual principles.",
  "dpsp@Article 44 UCC": "Directive for the state to secure a Uniform Civil Code for all citizens.",
  "dpsp@DPSP vs Fundamental Rights": "Legal status and primacy battles between justiciable rights and non-justiciable directives.",
  "dpsp@Implementation": "Key policies enacted to fulfill DPSP goals like Panchayati Raj and maternity benefits.",
  "fundamental_duties@Article 51A": "Added by 42nd Amendment to outline moral duties of citizens.",
  "fundamental_duties@List of Duties": "The eleven duties, including respecting the flag and protecting the environment.",
  "fundamental_duties@42nd Amendment": "Added Part IVA and ten original duties in 1976.",
  "fundamental_duties@86th Amendment": "Added the eleventh duty regarding education of children in 2002.",
  "judicial_review@Meaning": "Power of courts to test validity of legislative and executive actions.",
  "judicial_review@Scope": "Limits of review power, striking balance between judicial activism and restraint.",
  "judicial_review@Basic Structure Doctrine": "Constitutional limits preventing Parliament from destroying the core values.",
  "judicial_review@Constitutional Interpretation": "Principles like harmonious construction and colorable legislation used by courts.",
  "president@Election": "Elected by an electoral college of Union and State legislative members.",
  "president@Term": "Holds office for a term of five years, eligible for re-election.",
  "president@Powers": "Executive, legislative, financial, judicial, diplomatic, military, and emergency powers.",
  "president@Immunities": "Personal immunity from civil and criminal proceedings during tenure.",
  "president@Removal": "Impeachment process under Article 61 on grounds of violating the Constitution.",
  "parliament@Lok Sabha": "House of the People (Lower House) elected directly by universal franchise.",
  "parliament@Rajya Sabha": "Council of States (Upper House) representing States and Union Territories.",
  "parliament@Joint Sitting": "Article 108 mechanism to resolve deadlocks on ordinary bills between houses.",
  "parliament@Parliamentary Procedure": "Rules governing sessions, bills, motions, questions, and voting.",
  "parliament@Speaker": "Presiding officer of Lok Sabha, decides money bills and joint sittings.",
  "supreme_court@Composition": "Consists of the Chief Justice and other judges appointed by President.",
  "supreme_court@Jurisdiction": "The authority to hear and decide cases across diverse legal fields.",
  "supreme_court@Original": "Disputes between Centre and States or between different States.",
  "supreme_court@Appellate": "Hearing appeals from High Courts in constitutional, civil, and criminal matters.",
  "supreme_court@Advisory": "Article 143 advisory opinion rendered to the President upon request.",
  "supreme_court@Judicial Independence": "Safeguards like secure tenure and salaries to keep judiciary free from influence.",
  "national_emergency@National Emergency Art 352": "Declaration on grounds of war, external aggression, or armed rebellion.",
  "national_emergency@President's Rule Art 356": "Suspension of state government due to breakdown of constitutional machinery.",
  "national_emergency@Financial Emergency Art 360": "Declaration due to threat to financial stability or credit of India.",
  "national_emergency@Consequences": "Shift to unitary governance and potential suspension of certain fundamental rights.",
  "constitutional_amendments@Article 368": "Outlines Parliament's power and procedure to amend the Constitution.",
  "constitutional_amendments@Types of Amendment": "Simple majority, special majority, and special majority with state ratification.",
  "constitutional_amendments@Important Amendments": "Milestones like the 42nd, 44th, 73rd, 86th, and 103rd Amendments.",
  "constitutional_amendments@Basic Structure Limitation": "Amendments cannot alter the core, unamendable features of the Constitution.",
  "article_370@Article 370": "Temporary provision granting special autonomous status to Jammu & Kashmir.",
  "article_370@Abrogation 2019": "Presidential orders and statutory act removing the special status of J&K.",
  "article_370@Article 35A": "Empowered J&K legislature to define permanent residents and rights.",
  "article_370@J&K Reorganisation": "Bifurcation of the state into Union Territories of Jammu & Kashmir and Ladakh.",
  "article_370@SC Judgment 2023": "Supreme Court verdict upholding the validity of J&K reorganization.",
  "it_act_2000@Objectives": "Provide legal recognition to e-commerce, e-records, and digital signatures.",
  "it_act_2000@Key Provisions": "Legal frameworks for electronic governance, records, and liability rules.",
  "it_act_2000@Digital Signatures": "Asymmetric cryptosystem mechanism validating electronic record authenticity.",
  "it_act_2000@Certifying Authorities": "Licensed bodies appointed to issue and manage digital signature certificates.",
  "it_act_2000@Offences": "Penalties and prosecution for cyber crimes like hacking and data theft.",
  "it_act_2000@2008 Amendment": "Introduced intermediate liability, child pornography bans, and SPDI rules.",
  "cyber_crimes@Types of Cyber Crimes": "Offenses classified based on target: individuals, property, or nation.",
  "cyber_crimes@Hacking": "Unauthorized access to computer systems or networks under Section 66.",
  "cyber_crimes@Phishing": "Fraudulent acquisition of sensitive credentials via deceptive messages.",
  "cyber_crimes@AI Voice Clone Fraud": "Impersonation scams leveraging AI voice synthesis to deceive victims.",
  "cyber_crimes@Deepfakes": "AI-synthesized realistic video/audio media used for misinformation.",
  "cyber_crimes@Ransomware": "Malicious encryption of systems to demand payment for decryption.",
  "intermediary_liability@Section 79": "Safe harbor provision protecting platforms from liability for user content.",
  "intermediary_liability@Safe Harbour": "Immunity of intermediaries provided they observe due diligence rules.",
  "intermediary_liability@Due Diligence": "Required practices like publishing terms and taking down illegal content.",
  "intermediary_liability@Platform Duties": "Platform statutory obligations to moderate and report illegal activities.",
  "intermediary_liability@IT Rules 2021": "Enhanced compliance guidelines, grievance mechanisms, and traceability mandates.",
  "dpdpa_2023@Applicability": "Applies to digital personal data processed within or outside India.",
  "dpdpa_2023@Data Principal Rights": "Rights of data owners including access, correction, erasure, and nomination.",
  "dpdpa_2023@Data Fiduciary Duties": "Obligations of data controllers to process lawfully and secure data.",
  "dpdpa_2023@Data Protection Board": "Independent body established to adjudicate data breaches and disputes.",
  "dpdpa_2023@Exemptions": "Cases where data protection duties do not apply, such as state security.",
  "intellectual_property@Types of IPR": "Trademark, Copyright, Patent, Geographical Indication, and Industrial Design.",
  "intellectual_property@WIPO": "UN agency promoting global protection and administration of IP.",
  "intellectual_property@TRIPS Agreement": "WTO treaty setting minimum standards of IP protection globally.",
  "intellectual_property@India's IP Regime": "National acts and enforcement bodies aligned with global treaties.",
  "trademark@Trademarks Act 1999": "Governs registration, protection, and enforcement of trademarks in India.",
  "trademark@Conventional TM": "Traditional marks such as brand names, logos, slogans, and labels.",
  "trademark@Non-Conventional TM": "Unorthodox marks representing sound, color, shape, motion, or smell.",
  "trademark@Registration": "Process at Trade Marks Registry, valid for ten years and renewable.",
  "trademark@Infringement": "Unauthorized use of identical/similar mark causing consumer confusion.",
  "copyright@Copyright Act 1957": "Protects expression of ideas in literary, artistic, and musical works.",
  "copyright@Subject Matter": "Works eligible for copyright like books, movies, music, and software.",
  "copyright@Duration": "Term of protection, generally author's lifetime plus sixty years.",
  "copyright@Fair Use": "Legal exceptions allowing limited use without permission for education or news.",
  "copyright@AI and Copyright": "Emerging issues of copyright authorship and ownership in AI creations.",
  "patents@Patents Act 1970": "Governs patent criteria, processes, and licensing terms in India.",
  "patents@Patentability": "Requirements of novelty, non-obviousness, and industrial application.",
  "patents@Process vs Product Patent": "Patent protection of the method of creation vs. the end product itself.",
  "patents@Compulsory Licensing": "State authorization for third-party production of patented goods for public interest.",
  "patents@Section 3(d)": "Prevents patents for known substances unless they show enhanced efficacy.",
  "geographical_indications@GI Act 1999": "Protects signs associated with goods originating from a specific territory.",
  "geographical_indications@What is GI": "Indicates qualities or reputation attributable to geographical origin.",
  "geographical_indications@Examples": "Famous protected items like Darjeeling Tea and basmati rice.",
  "geographical_indications@WIPO and GI": "Lisbon Agreement and Geneva Act frameworks for international protection.",
  "geographical_indications@Traditional Knowledge": "Indigenous heritage protected from unauthorized patents via TKDL database.",
  "e_commerce@Definition": "Commercial transactions conducted electronically over network grids.",
  "e_commerce@Types": "Business models like B2B, B2C, C2C, and G2C transactions.",
  "e_commerce@Authentication": "Validating transactions via digital signatures, OTPs, and 2FA.",
  "e_commerce@Payment Systems": "Digital payment channels like UPI, cards, and net banking.",
  "e_commerce@Consumer Protection": "E-Commerce Rules protecting online consumers from unfair trade practices.",
  "e_contracts@Definition": "Contracts formed through digital mediums or electronic interactions.",
  "e_contracts@Types": "Agreement formats like click-wrap, shrink-wrap, and browse-wrap.",
  "e_contracts@Validity": "Legal recognition under Section 10A of the IT Act 2000.",
  "e_contracts@Indian Contract Act 1872": "Applies standard contract principles like offer, acceptance, and consent.",
  "e_contracts@IT Act 2000": "Provides legal guidelines for electronic records and contracts.",
  "professional_ethics@Personal Ethics": "Moral values guiding individual behavior like honesty and fairness.",
  "professional_ethics@Business Ethics": "Ethical principles governing corporate activities and social responsibilities.",
  "professional_ethics@Professional Code of Conduct": "Codes defined by associations like IEEE and ACM for IT professionals.",
  "professional_ethics@Conflict of Interest": "When personal interests clash with professional duties (must be disclosed).",
  "professional_ethics@Clash of Ethics": "Dilemmas where two ethical duties conflict, such as confidentiality vs. disclosure."
};

// ============================================================
// TOPICS DATABASE
// ============================================================
const TOPICS = [
  {
    "id": "constitutional_history",
    "title": "Constitutional History",
    "unit": 1,
    "subtopics": [
      "Pre-independence Background",
      "Colonial Legislation",
      "Path to Independence"
    ],
    "explanation": "India's constitutional history is a journey from colonial subjugation to self-governance. It traces through several colonial legislations that progressively granted limited self-rule before culminating in the Constitution of 1950.",
    "detailed": "India's constitutional development passed through several important phases:\n\n**Colonial Era Legislation:**\n- Charter Acts (1793–1853) gradually introduced legislative functions\n- Government of India Acts formed the direct precursors to the Constitution\n\n**Key Milestones:**\n1. **1858** – Transfer of power from East India Company to British Crown\n2. **1861** – Indian Councils Act introduced legislative councils\n3. **1909** – Morley-Minto Reforms introduced communal representation\n4. **1919** – Montagu-Chelmsford Reforms introduced dyarchy\n5. **1935** – Most comprehensive colonial legislation; formed the basis of the Constitution\n6. **1947** – Independence Act partitioned British India\n7. **1950** – Constitution of India came into force on January 26",
    "articles": [
      "Art. 394 – Commencement",
      "Art. 395 – Repeals"
    ],
    "amendments": [
      "N/A"
    ],
    "cases": [],
    "quickRevision": "Colonial Acts → 1919 (Dyarchy) → 1935 (Federal basis) → 1947 (Independence) → 1950 (Constitution). Jan 26 = Republic Day.",
    "mnemonics": "\"Every Good Indian Constitution Makes Progress\" = East India → Govt Acts → Independence → Constitution → Modernisation & Progress",
    "importanceScore": 6,
    "difficulty": "easy",
    "pyqIds": [
      "pyq_054"
    ],
    "flashcardIds": [
      "fc_001",
      "fc_002"
    ],
    "frequency": 1,
    "pyqYears": [
      2023
    ]
  },
  {
    "id": "goi_act_1919",
    "title": "Government of India Act 1919",
    "unit": 1,
    "subtopics": [
      "Montagu-Chelmsford Reforms",
      "Dyarchy",
      "Communal Electorate",
      "Bicameralism"
    ],
    "explanation": "The Government of India Act 1919, based on Montagu-Chelmsford Reforms, introduced the concept of 'dyarchy' in provinces and established a bicameral legislature at the centre.",
    "detailed": "**Government of India Act 1919 (Montagu-Chelmsford Reforms)**\n\n**Key Features:**\n1. **Dyarchy in Provinces** – Provincial subjects split into 'Transferred' (Indian ministers) and 'Reserved' (Governor's control)\n   - Transferred: Education, Public Health, Agriculture\n   - Reserved: Finance, Law & Order, Revenue\n\n2. **Bicameral Legislature at Centre:**\n   - Central Legislative Assembly (Lower House)\n   - Council of State (Upper House)\n\n3. **Communal Electorate** – Separate electorates for Muslims, Sikhs, Indian Christians, Anglo-Indians\n\n4. **Secretary of State for India** – Retained ultimate control\n\n5. **Franchise Extended** – Property-based limited voting rights\n\n**Significance:** First attempt at responsible government. Was considered inadequate by nationalist leaders, leading to Non-Cooperation Movement.",
    "articles": [],
    "amendments": [],
    "cases": [],
    "quickRevision": "1919: Dyarchy, Bicameralism at Centre, Communal Electorates, Montagu-Chelmsford. Dyarchy = Transferred + Reserved subjects.",
    "mnemonics": "\"DMC\" = Dyarchy, Montagu-Chelmsford, Communal electorate",
    "importanceScore": 6,
    "difficulty": "easy",
    "pyqIds": [],
    "flashcardIds": [
      "fc_003"
    ],
    "frequency": 0,
    "pyqYears": []
  },
  {
    "id": "goi_act_1935",
    "title": "Government of India Act 1935",
    "unit": 1,
    "subtopics": [
      "All India Federation",
      "Provincial Autonomy",
      "Federal Court",
      "Division of Powers"
    ],
    "explanation": "The Government of India Act 1935 was the most comprehensive constitutional document in British India. It proposed an All India Federation and granted substantial provincial autonomy. Most provisions of India's Constitution are drawn from this Act.",
    "detailed": "**Government of India Act 1935 — Key Features:**\n\n1. **All India Federation** – Proposed federal union of British India provinces + Indian states (never fully implemented)\n\n2. **Provincial Autonomy** – Dyarchy abolished in provinces. Ministers responsible to elected legislature in all matters.\n\n3. **Division of Powers (Three Lists):**\n   - Federal List: Defence, External Affairs, Currency\n   - Provincial List: Police, Agriculture, Education\n   - Concurrent List: Criminal law, Bankruptcy, Marriage\n\n4. **Federal Court** – Established at Delhi (precursor to Supreme Court)\n\n5. **Reserve Bank of India** – Established under this Act\n\n6. **Bicameral Legislature** – Proposed for provinces with large populations\n\n7. **Communal Representation** – Continued\n\n**Significance:** ~250 provisions of Indian Constitution drawn from this Act. Called 'India's Constitution Act' by critics.",
    "articles": [
      "Seventh Schedule (Three Lists inspired by 1935 Act)"
    ],
    "amendments": [],
    "cases": [],
    "quickRevision": "1935: Federal basis, 3 Lists, Provincial Autonomy, Federal Court, RBI, No Dyarchy in provinces. Maximum borrowing by Indian Constitution.",
    "mnemonics": "\"FAFCR\" = Federation, Autonomy (provincial), Federal Court, Currency (RBI), Reserved powers",
    "importanceScore": 10,
    "difficulty": "hard",
    "pyqIds": [
      "pyq_001",
      "pyq_008",
      "pyq_009",
      "pyq_043",
      "pyq_050",
      "pyq_051",
      "pyq_077",
      "pyq_079",
      "pyq_081",
      "pyq_083",
      "pyq_087",
      "pyq_103",
      "pyq_108",
      "pyq_118",
      "pyq_134",
      "pyq_135"
    ],
    "flashcardIds": [
      "fc_004",
      "fc_005"
    ],
    "frequency": 26,
    "pyqYears": [
      2023,
      2024,
      2025
    ]
  },
  {
    "id": "goi_act_1947",
    "title": "Indian Independence Act 1947",
    "unit": 1,
    "subtopics": [
      "Partition Plan",
      "Two Dominions",
      "Constituent Assembly",
      "Princely States"
    ],
    "explanation": "The Indian Independence Act 1947 was passed by British Parliament to give legal effect to the Mountbatten Plan. It created two independent dominions — India and Pakistan — and dissolved British paramountcy over princely states.",
    "detailed": "**Indian Independence Act 1947:**\n\n**Key Provisions:**\n1. **Two Independent Dominions:** India (August 15, 1947) and Pakistan created\n2. **Constituent Assemblies:** Each dominion got its own CA acting as legislature until new constitutions\n3. **Princely States:** British paramountcy lapsed — free to join either dominion or remain independent\n4. **Office of Secretary of State:** Abolished\n5. **Governor-General:** Each dominion to have its own G-G (Mountbatten for India initially)\n6. **Partition of Assets/Liabilities** between two dominions\n7. **Pakistan got separate Constituent Assembly**\n\n**Significance:** End of British rule. Provided interim constitutional framework until Constitution of 1950.",
    "articles": [],
    "amendments": [],
    "cases": [],
    "quickRevision": "1947 Act → 2 Dominions, Paramountcy lapsed, Mountbatten Plan, India independent on Aug 15, 1947.",
    "mnemonics": "\"PIMP\" = Paramountcy lapsed, Independence Act, Mountbatten Plan, Pakistan created",
    "importanceScore": 6,
    "difficulty": "easy",
    "pyqIds": [],
    "flashcardIds": [
      "fc_006"
    ],
    "frequency": 0,
    "pyqYears": []
  },
  {
    "id": "constituent_assembly",
    "title": "Constituent Assembly & Its Role",
    "unit": 1,
    "subtopics": [
      "Formation",
      "Composition",
      "Debates",
      "Committees",
      "Adoption"
    ],
    "explanation": "The Constituent Assembly was the body that framed the Constitution of India. It had 389 members initially (299 after partition) and took 2 years, 11 months and 18 days to draft the Constitution.",
    "detailed": "**Constituent Assembly:**\n\n**Formation:** Based on Cabinet Mission Plan 1946. Members elected by Provincial Legislative Assemblies.\n\n**Key Facts:**\n- Total Sessions: 11\n- Duration: Dec 9, 1946 – Nov 26, 1949\n- President: Dr. Rajendra Prasad\n- Constitutional Advisor: Sir B.N. Rau\n- Drafting Committee Chairman: Dr. B.R. Ambedkar\n\n**Important Committees:**\n1. Drafting Committee (Ambedkar)\n2. Union Constitution Committee (Nehru)\n3. Union Powers Committee (Nehru)\n4. Provincial Constitution Committee (Vallabhbhai Patel)\n5. Advisory Committee on Fundamental Rights (Patel)\n\n**Key Debates:**\n- Fundamental Rights vs. DPSP\n- Language controversy (Hindi vs English)\n- Secularism and religion in public life\n- Reservation policy\n\n**Adoption:** November 26, 1949 (Constitution Day / Law Day)\n**Enforcement:** January 26, 1950 (Republic Day)",
    "articles": [
      "Art. 394 – Commencement (Jan 26, 1950)"
    ],
    "amendments": [],
    "cases": [],
    "quickRevision": "CA: Dec 1946 – Nov 1949. Ambedkar = Drafting Committee. Adopted Nov 26, 1949. Enforced Jan 26, 1950. 395 Articles, 8 Schedules originally.",
    "mnemonics": "\"ARAN\" = Ambedkar (Drafting), Rajendra Prasad (President), 2 yr 11 mo 18 days, November 26 (Constitution Day)",
    "importanceScore": 7,
    "difficulty": "medium",
    "pyqIds": [
      "pyq_042",
      "pyq_104"
    ],
    "flashcardIds": [
      "fc_007",
      "fc_008"
    ],
    "frequency": 4,
    "pyqYears": [
      2023,
      2024,
      2025
    ]
  },
  {
    "id": "preamble",
    "title": "Preamble",
    "unit": 1,
    "subtopics": [
      "Meaning",
      "Key Words",
      "Significance",
      "Is Preamble justiciable?",
      "42nd Amendment"
    ],
    "explanation": "The Preamble is the introductory statement of the Constitution that declares the source of authority, nature of the Indian State, and objectives. It was called the 'identity card' of the Constitution.",
    "detailed": "**The Preamble:**\n\n\"WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC and to secure to all its citizens:\nJUSTICE, social, economic and political;\nLIBERTY of thought, expression, belief, faith and worship;\nEQUALITY of status and of opportunity;\nand to promote among them all\nFRATERNITY assuring the dignity of the individual and the unity and integrity of the Nation;\nIN OUR CONSTITUENT ASSEMBLY this twenty-sixth day of November, 1949, do HEREBY ADOPT, ENACT AND GIVE TO OURSELVES THIS CONSTITUTION.\"\n\n**Key Words Explained:**\n- **Sovereign** – India is not under control of any foreign power\n- **Socialist** – Added by 42nd Amendment, 1976 – state controls means of production for common good\n- **Secular** – Added by 42nd Amendment, 1976 – no state religion, equal respect for all religions\n- **Democratic** – Government derives authority from people through elections\n- **Republic** – Elected head of state (President), not hereditary monarch\n\n**Objectives:**\n- **Justice** – Social, Economic, Political\n- **Liberty** – Thought, Expression, Belief, Faith, Worship\n- **Equality** – Status and Opportunity\n- **Fraternity** – Dignity of individual + Unity & Integrity of Nation\n\n**Is Preamble a Part of Constitution?**\nIn **Berubari Union Case (1960)**: Preamble is NOT part of Constitution.\nIn **Kesavananda Bharati Case (1973)**: Preamble IS part of Constitution and can be amended under Art. 368 but cannot damage the 'basic structure'.\n\n**42nd Amendment (1976):** Added 'Socialist', 'Secular', and 'Integrity' to the Preamble.",
    "articles": [
      "Preamble",
      "Art. 368 (Amendment)"
    ],
    "amendments": [
      "42nd Amendment Act, 1976 – Added 'Socialist', 'Secular', 'Integrity'"
    ],
    "cases": [
      "Berubari Union Case (1960) – Preamble not part of Constitution",
      "Kesavananda Bharati v. State of Kerala (1973) – Preamble is part of Constitution, Basic Structure Doctrine"
    ],
    "quickRevision": "Preamble = SSDDR (Sovereign Socialist Secular Democratic Republic). JLEF = Justice Liberty Equality Fraternity. 42nd Amendment added Socialist + Secular. Kesavananda Bharati = Basic Structure.",
    "mnemonics": "\"SSDDR\" for nature; \"JLEF\" for goals. 42 = Socialist + Secular added (remember: SS-42)",
    "importanceScore": 9,
    "difficulty": "medium",
    "pyqIds": [
      "pyq_052",
      "pyq_055",
      "pyq_080",
      "pyq_105"
    ],
    "flashcardIds": [
      "fc_009",
      "fc_010",
      "fc_011"
    ],
    "frequency": 7,
    "pyqYears": [
      2023,
      2025
    ]
  },
  {
    "id": "federalism",
    "title": "Federalism",
    "unit": 1,
    "subtopics": [
      "Features of Federal State",
      "Quasi-federal Character",
      "Centre-State Relations",
      "Cooperative Federalism"
    ],
    "explanation": "Federalism refers to the division of powers between the Centre and States. India has a quasi-federal constitution — federal in structure but unitary in spirit (K.C. Wheare's characterization).",
    "detailed": "**Federalism in India:**\n\n**Federal Features:**\n1. Written Constitution\n2. Supremacy of Constitution\n3. Division of Powers (3 Lists)\n4. Independent Judiciary\n5. Bicameralism\n\n**Unitary Features (making India Quasi-Federal):**\n1. Single Citizenship\n2. Strong Centre (Union List has more subjects)\n3. Governor appointed by President\n4. All India Services\n5. Emergency Provisions give Centre overriding powers\n6. Parliament can change state boundaries\n7. Residuary powers with Centre\n\n**K.C. Wheare:** Called India a 'quasi-federal' or 'federal in form, unitary in spirit'.\n\n**Granville Austin:** Described Indian federalism as 'cooperative federalism'.\n\n**Three Lists (Seventh Schedule):**\n- List I – Union List: 97 subjects (Defence, Foreign Affairs, Banking)\n- List II – State List: 66 subjects (Police, Agriculture, Public Health)\n- List III – Concurrent List: 47 subjects (Criminal Law, Marriage, Education)\n- Residuary Powers: With Union (Article 248)",
    "articles": [
      "Art. 1 – India, that is Bharat",
      "Art. 245-263 – Centre-State Relations",
      "Art. 248 – Residuary Powers",
      "Seventh Schedule – Three Lists"
    ],
    "amendments": [
      "42nd Amendment – Moved Education, Forests from State to Concurrent List"
    ],
    "cases": [
      "State of West Bengal v. Union of India (1963)",
      "S.R. Bommai v. Union of India (1994) – Federalism is basic structure"
    ],
    "quickRevision": "India = Quasi-Federal. Federal: Written Constitution, 3 Lists. Unitary: Single Citizenship, Strong Centre, Governor appointed by President. Residuary powers with Centre (Art. 248).",
    "mnemonics": "\"WSDIB\" for Federal features: Written, Supremacy, Division, Independent judiciary, Bicameralism",
    "importanceScore": 6,
    "difficulty": "easy",
    "pyqIds": [
      "pyq_088"
    ],
    "flashcardIds": [
      "fc_012",
      "fc_013"
    ],
    "frequency": 1,
    "pyqYears": [
      2023
    ]
  },
  {
    "id": "secularism",
    "title": "Secularism",
    "unit": 1,
    "subtopics": [
      "Indian Secularism",
      "Western Secularism",
      "Freedom of Religion",
      "State and Religion"
    ],
    "explanation": "Indian secularism means the State has no religion of its own and treats all religions equally. It differs from Western secularism which advocates strict separation of church and state.",
    "detailed": "**Secularism in India:**\n\n**Added to Preamble:** 42nd Amendment, 1976\n\n**Indian Model vs Western Model:**\n| Indian Secularism | Western Secularism |\n|---|---|\n| Equal respect for all religions | Strict separation of Church & State |\n| State can regulate religious affairs | State cannot interfere in religion |\n| State can give aid to religious institutions | State gives no aid to religion |\n| Positive secularism | Negative secularism |\n\n**Constitutional Provisions:**\n- Art. 25 – Freedom of conscience and free profession, practice and propagation of religion\n- Art. 26 – Freedom to manage religious affairs\n- Art. 27 – Freedom from taxation for promotion of any religion\n- Art. 28 – Freedom from attending religious instruction in state-funded institutions\n- Art. 15 – No discrimination on grounds of religion\n- Art. 16 – No discrimination in public employment on grounds of religion\n- Art. 44 – Uniform Civil Code (DPSP)\n\n**Cases:**\n- S.R. Bommai v. Union of India (1994) – Secularism is a basic feature of Constitution\n- T.M.A. Pai Foundation v. State of Karnataka (2002) – Minority educational rights",
    "articles": [
      "Art. 15, 16 (Non-discrimination)",
      "Art. 25-28 (Freedom of Religion)",
      "Art. 44 (UCC)"
    ],
    "amendments": [
      "42nd Amendment 1976 – Added 'Secular' to Preamble"
    ],
    "cases": [
      "S.R. Bommai v. Union of India (1994)",
      "T.M.A. Pai Foundation (2002)"
    ],
    "quickRevision": "Indian Secularism = Positive (equal respect). Western = Negative (separation). Added by 42nd Amendment. Arts. 25-28 = Religious Freedom. Bommai case: Secularism = Basic Structure.",
    "mnemonics": "\"25 PRP\" = Art 25: Profess, Practice, Propagate religion",
    "importanceScore": 7,
    "difficulty": "medium",
    "pyqIds": [
      "pyq_002"
    ],
    "flashcardIds": [
      "fc_014"
    ],
    "frequency": 2,
    "pyqYears": [
      2023,
      2024
    ]
  },
  {
    "id": "citizenship",
    "title": "Citizenship",
    "unit": 1,
    "subtopics": [
      "Acquisition",
      "Termination",
      "Citizenship Amendment Act 2019",
      "Overseas Indian Citizenship"
    ],
    "explanation": "The Constitution provides for single citizenship (unlike USA's dual citizenship). Part II (Articles 5-11) deals with citizenship at commencement. The Citizenship Act 1955 governs citizenship thereafter.",
    "detailed": "**Citizenship in India:**\n\n**Constitutional Provisions:** Part II, Articles 5-11\n\n**Citizenship Act 1955 — Modes of Acquisition:**\n1. **By Birth** – Born in India on/after Jan 26, 1950\n2. **By Descent** – Born outside India, if father/mother was Indian\n3. **By Registration** – PIO, OCI, spouses of Indian citizens\n4. **By Naturalisation** – 11 years of residence (10 years in aggregate + 1 year continuous)\n5. **By Incorporation of Territory** – When new territory merges with India\n\n**Termination of Citizenship:**\n1. Renunciation (voluntary)\n2. Termination (acquires foreign citizenship)\n3. Deprivation (by Central Government on specified grounds)\n\n**Citizenship Amendment Act (CAA) 2019:**\n- Provides citizenship to **persecuted minorities** from Afghanistan, Bangladesh, Pakistan\n- Eligible: Hindus, Sikhs, Buddhists, Jains, Parsis, Christians\n- Must have entered India before December 31, 2014\n- Reduces naturalization period to 5 years (from 11)\n- **Note:** Excludes Muslims from these three countries\n- **Constitutional Challenge:** Art. 14 (Equality), Art. 15 (Non-discrimination on religion)\n- Exemptions: Tribal areas of NE India (Sixth Schedule), Inner Line Permit areas\n\n**Overseas Citizen of India (OCI):** Not true citizenship, but gives certain rights. No voting rights.",
    "articles": [
      "Art. 5-11 – Citizenship",
      "Art. 14 – Equality",
      "Art. 15 – Non-discrimination"
    ],
    "amendments": [
      "Citizenship Amendment Act 2019"
    ],
    "cases": [
      "Izhar Ahmad Khan v. Union of India (1962)"
    ],
    "quickRevision": "Part II = Art 5-11 = Citizenship. 5 ways to acquire: Birth, Descent, Registration, Naturalisation, Territory. CAA 2019 = Minorities from PAK, BAN, AFG (not Muslims) → 5 yr naturalisation.",
    "mnemonics": "\"BDRT\" = Birth, Descent, Registration, Territory, (Naturalization) - 5 acquisition modes",
    "importanceScore": 6,
    "difficulty": "easy",
    "pyqIds": [],
    "flashcardIds": [
      "fc_015",
      "fc_016"
    ],
    "frequency": 0,
    "pyqYears": []
  },
  {
    "id": "right_to_equality",
    "title": "Right to Equality",
    "unit": 1,
    "subtopics": [
      "Article 14",
      "Article 15",
      "Article 16",
      "Article 17",
      "Article 18"
    ],
    "explanation": "The Right to Equality (Articles 14-18) guarantees equality before law, prohibits discrimination, and abolishes untouchability and titles.",
    "detailed": "**Right to Equality — Articles 14 to 18:**\n\n**Article 14 – Equality Before Law & Equal Protection**\n- Equality before law = Negative concept (British origin)\n- Equal protection of laws = Positive concept (US origin)\n- Reasonable classification is permitted\n- Test: Intelligible differentia + Rational nexus with objective\n\n**Article 15 – Prohibition of Discrimination**\n- No discrimination on grounds of: Religion, Race, Caste, Sex, Place of Birth\n- Exceptions:\n  - Art. 15(3): Special provisions for women and children\n  - Art. 15(4): Socially/educationally backward classes or SC/ST\n  - Art. 15(5): Reservation in private unaided educational institutions\n  - Art. 15(6): EWS reservation (103rd Amendment, 2019)\n\n**Article 16 – Equality in Public Employment**\n- Equal opportunity in public employment\n- Art. 16(4): Reservation for backward classes\n- Art. 16(4A): Reservation in promotion for SC/ST\n- Art. 16(6): EWS reservation in appointment\n\n**Article 17 – Abolition of Untouchability**\n- Untouchability abolished and its practice is an offence\n- Protection of Civil Rights Act 1955\n- SC/ST (Prevention of Atrocities) Act 1989\n\n**Article 18 – Abolition of Titles**\n- State cannot confer titles (except military/academic distinctions)\n- Citizens cannot accept foreign titles\n- Bharat Ratna, Padma awards are NOT titles (held by Supreme Court)",
    "articles": [
      "Art. 14 – Equality Before Law",
      "Art. 15 – Non-discrimination",
      "Art. 16 – Equal Opportunity in Employment",
      "Art. 17 – Abolition of Untouchability",
      "Art. 18 – Abolition of Titles"
    ],
    "amendments": [
      "93rd Amendment – Art. 15(5) Private institutions",
      "103rd Amendment 2019 – EWS Reservation (Art. 15(6), Art. 16(6))"
    ],
    "cases": [
      "State of West Bengal v. Anwar Ali Sarkar (1952) – Art. 14",
      "Indra Sawhney v. Union of India (1992) – 50% Cap on Reservation",
      "EWS Reservation Case (Janhit Abhiyan v. UoI, 2022) – 103rd Amendment upheld"
    ],
    "quickRevision": "Art. 14=Equality before law. Art. 15=No discrimination (5 grounds). Art. 16=Public employment equality. Art. 17=Untouchability abolished. Art. 18=Titles abolished. EWS=103rd Amendment.",
    "mnemonics": "\"14 ELEN\" = Equality, Law, Equal, No discrimination; \"17 = ZERO UNTOUCHABILITY\"",
    "importanceScore": 6,
    "difficulty": "easy",
    "pyqIds": [],
    "flashcardIds": [
      "fc_017",
      "fc_018",
      "fc_019"
    ],
    "frequency": 0,
    "pyqYears": []
  },
  {
    "id": "right_to_freedom",
    "title": "Right to Freedom",
    "unit": 1,
    "subtopics": [
      "Article 19",
      "Article 20",
      "Article 21",
      "Article 22",
      "Reasonable Restrictions"
    ],
    "explanation": "Articles 19-22 guarantee fundamental freedoms including free speech, movement, profession, and protection against arbitrary arrest and detention.",
    "detailed": "**Right to Freedom — Articles 19 to 22:**\n\n**Article 19 – Six Freedoms:**\n1. Art. 19(1)(a) – Freedom of Speech and Expression\n2. Art. 19(1)(b) – Freedom of Assembly (peacefully, without arms)\n3. Art. 19(1)(c) – Freedom to form Associations/Unions\n4. Art. 19(1)(d) – Freedom of Movement (throughout India)\n5. Art. 19(1)(e) – Freedom of Residence (settle in any part of India)\n6. Art. 19(1)(g) – Freedom of Profession/Trade/Business\n\n**Note:** Art. 19(1)(f) – Right to property was deleted by 44th Amendment 1978\n\n**Reasonable Restrictions (Art. 19(2)-(6)):**\n- On Speech: Sovereignty, integrity, security, friendly relations, public order, decency, morality, contempt, defamation, incitement\n- On Movement/Residence: Interests of general public, Scheduled Tribe protection\n\n**Article 20 – Protection in Conviction:**\n- No ex-post-facto law\n- No double jeopardy\n- No self-incrimination\n\n**Article 21 – Right to Life and Personal Liberty:**\n- No deprivation except by procedure established by law\n- Expanded by courts to include: Right to privacy, livelihood, health, education, clean environment, speedy trial\n\n**Article 21A – Right to Education (86th Amendment 2002):**\n- Free and compulsory education for 6-14 year olds\n\n**Article 22 – Protection Against Arbitrary Arrest:**\n- Right to be informed of grounds of arrest\n- Right to consult legal practitioner\n- Produced before magistrate within 24 hours\n- Preventive Detention laws (special provisions)",
    "articles": [
      "Art. 19 – Six Freedoms",
      "Art. 20 – Protection in Conviction",
      "Art. 21 – Right to Life",
      "Art. 21A – Right to Education",
      "Art. 22 – Protection from Arbitrary Arrest"
    ],
    "amendments": [
      "44th Amendment 1978 – Deleted Art. 19(1)(f) Right to Property",
      "86th Amendment 2002 – Added Art. 21A Right to Education"
    ],
    "cases": [
      "Maneka Gandhi v. Union of India (1978) – Expanded Art. 21",
      "R.C. Cooper v. Union of India (1970) – Bank Nationalisation Case",
      "Shreya Singhal v. Union of India (2015) – Section 66A IT Act struck down"
    ],
    "quickRevision": "Art. 19 = 6 Freedoms (Speech, Assembly, Association, Movement, Residence, Profession). Art. 20 = No ex post facto, No double jeopardy, No self-incrimination. Art. 21 = Right to Life. Art. 21A = Education (86th Amend).",
    "mnemonics": "\"SAAMRP\" = Speech, Assembly, Association, Movement, Residence, Profession (Art. 19 freedoms)",
    "importanceScore": 6,
    "difficulty": "easy",
    "pyqIds": [
      "pyq_124"
    ],
    "flashcardIds": [
      "fc_020",
      "fc_021",
      "fc_022"
    ],
    "frequency": 1,
    "pyqYears": [
      2025
    ]
  },
  {
    "id": "right_to_privacy",
    "title": "Right to Privacy",
    "unit": 1,
    "subtopics": [
      "Constitutional Basis",
      "Puttaswamy Case",
      "Digital Privacy",
      "Surveillance Laws",
      "DPDPA 2023"
    ],
    "explanation": "The Right to Privacy was declared a fundamental right under Article 21 by the Supreme Court in the landmark Puttaswamy judgment (2017).",
    "detailed": "**Right to Privacy:**\n\n**Constitutional Basis:** Article 21 (Right to Life and Personal Liberty)\n\n**Landmark Case — Justice K.S. Puttaswamy v. Union of India (2017):**\n- 9-judge bench unanimously declared Privacy a Fundamental Right\n- Overruled M.P. Sharma (1954) and Kharak Singh (1963)\n- Privacy includes:\n  1. Bodily autonomy\n  2. Informational privacy\n  3. Privacy of choice\n  4. Decisional autonomy\n\n**Digital Privacy Concerns:**\n- Aadhaar data collection\n- Surveillance by State agencies\n- Data profiling by tech companies\n\n**Surveillance Laws in India:**\n- Section 69 IT Act 2000 – Power to intercept, monitor, decrypt information\n- Section 5 Indian Telegraph Act – Interception of messages (Public Emergency / Public Safety)\n- Pegasus spyware controversy\n\n**Digital Constitutionalism:**\n- Application of constitutional values to digital sphere\n- Free speech, privacy, equality in digital platforms\n\n**DPDPA 2023** (Digital Personal Data Protection Act):\n- Right to information about personal data\n- Right to correction/erasure\n- Right to grievance redressal\n- Right to nominate",
    "articles": [
      "Art. 21 – Right to Life (Privacy implied)",
      "Art. 19(1)(a) – Free Speech (includes digital)"
    ],
    "amendments": [],
    "cases": [
      "Justice K.S. Puttaswamy v. Union of India (2017) – Privacy is Fundamental Right",
      "M.P. Sharma v. Satish Chandra (1954) – No Right to Privacy (overruled)",
      "Kharak Singh v. State of UP (1963) – Overruled by Puttaswamy"
    ],
    "quickRevision": "Privacy = Fundamental Right under Art. 21 (Puttaswamy 2017). 9-judge bench. Includes: Bodily autonomy, Informational privacy, Privacy of choice. DPDPA 2023 = statutory protection.",
    "mnemonics": "\"BICD\" = Bodily, Informational, Choice, Decisional — 4 types of privacy",
    "importanceScore": 7,
    "difficulty": "medium",
    "pyqIds": [
      "pyq_049",
      "pyq_132",
      "pyq_136"
    ],
    "flashcardIds": [
      "fc_023",
      "fc_024"
    ],
    "frequency": 3,
    "pyqYears": [
      2023,
      2025
    ]
  },
  {
    "id": "freedom_of_religion",
    "title": "Freedom of Religion",
    "unit": 1,
    "subtopics": [
      "Article 25",
      "Article 26",
      "Article 27",
      "Article 28",
      "Minority Rights",
      "Conversion"
    ],
    "explanation": "Articles 25-28 guarantee freedom of religion to individuals and religious denominations. Art. 25 gives individuals the right to profess, practice and propagate religion.",
    "detailed": "**Freedom of Religion — Articles 25-28:**\n\n**Article 25 – Freedom of Conscience and Religion:**\n- Right to profess, practise and propagate religion\n- Subject to: Public order, Morality, Health, and other Fundamental Rights\n- State can regulate secular activities of religions\n- Exceptions:\n  - Art. 25(2)(a): State can regulate economic/financial/political activities of religious institutions\n  - Art. 25(2)(b): Social welfare laws can be enacted (e.g., throwing open Hindu temples to all)\n\n**Article 26 – Freedom to Manage Religious Affairs:**\n- Religious denominations can:\n  - Establish and maintain religious/charitable institutions\n  - Manage own affairs in matters of religion\n  - Own/acquire movable/immovable property\n  - Administer property as per law\n\n**Article 27 – Freedom from Religious Taxation:**\n- No one can be compelled to pay taxes for promotion/maintenance of any religion\n\n**Article 28 – Freedom from Religious Instruction:**\n- In state-funded institutions: No religious instruction\n- Minority educational institutions may give religious instruction\n\n**Religious Conversion:**\n- Art. 25 includes right to propagate (not to convert by force/fraud)\n- Anti-conversion laws in several states\n- Rev. Stainislaus v. State of MP (1977) – SC upheld anti-conversion law\n\n**Minority Rights (Art. 29-30):**\n- Art. 29 – Protection of interests of minorities (language, script, culture)\n- Art. 30 – Right of minorities to establish educational institutions",
    "articles": [
      "Art. 25 – Freedom of Religion",
      "Art. 26 – Religious Denomination Rights",
      "Art. 27 – No Religious Tax",
      "Art. 28 – No Religious Instruction in State Schools",
      "Art. 29 – Cultural Protection",
      "Art. 30 – Minority Educational Institutions"
    ],
    "amendments": [],
    "cases": [
      "Rev. Stainislaus v. State of MP (1977)",
      "Shirur Mutt Case (1954) – Essential Religious Practices Test",
      "Hijab Case (2022) – Karnataka High Court"
    ],
    "quickRevision": "Art. 25=Profess, Practice, Propagate. Art. 26=Manage religious affairs. Art. 27=No tax for religion. Art. 28=No religious instruction in state schools. Art. 29-30=Minority rights.",
    "mnemonics": "\"25 PRP\" = Art 25: Profess, Practice, Propagate religion",
    "importanceScore": 6,
    "difficulty": "easy",
    "pyqIds": [],
    "flashcardIds": [
      "fc_025",
      "fc_026"
    ],
    "frequency": 0,
    "pyqYears": []
  },
  {
    "id": "constitutional_remedies",
    "title": "Constitutional Remedies & Writs",
    "unit": 1,
    "subtopics": [
      "Article 32",
      "Article 226",
      "Five Writs",
      "Habeas Corpus",
      "Mandamus",
      "Certiorari",
      "Prohibition",
      "Quo Warranto"
    ],
    "explanation": "Article 32 is called the 'Heart and Soul of the Constitution' by Dr. Ambedkar. It empowers the Supreme Court to issue writs for enforcement of Fundamental Rights.",
    "detailed": "**Constitutional Remedies:**\n\n**Article 32 – Supreme Court's Writ Jurisdiction:**\n- Dr. Ambedkar: 'Heart and Soul of the Constitution'\n- Cannot be suspended except during Emergency (Art. 359)\n- Five writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo Warranto\n\n**Article 226 – High Court's Writ Jurisdiction:**\n- Wider than Art. 32 (can issue writs for any purpose, not just FR enforcement)\n- High Courts can also protect legal rights\n\n**Five Writs:**\n\n1. **Habeas Corpus** ('You shall have the body')\n   - Issued to produce a detained person before court\n   - Tests legality of detention\n   - Available against: Government, Private individuals\n   \n2. **Mandamus** ('We command')\n   - Commands public authority to perform its duty\n   - Not issued against: President/Governor, Private individuals, Subordinate courts\n   \n3. **Prohibition** ('To forbid')\n   - Prevents inferior court/tribunal from exceeding jurisdiction\n   - Issued BEFORE final order\n   \n4. **Certiorari** ('To be certified')\n   - Quashes order of inferior court exceeding jurisdiction\n   - Issued AFTER final order\n   \n5. **Quo Warranto** ('By what authority')\n   - Challenges legality of holding a public office\n   - Tests whether person is legally entitled to hold office",
    "articles": [
      "Art. 32 – Constitutional Remedies (Supreme Court)",
      "Art. 226 – High Court Writ Jurisdiction",
      "Art. 359 – Suspension of Art. 32 during Emergency"
    ],
    "amendments": [],
    "cases": [
      "ADM Jabalpur v. Shivakant Shukla (1976) – Habeas corpus during Emergency (controversial)",
      "Sunil Batra v. Delhi Administration (1978)"
    ],
    "quickRevision": "Art. 32 = Heart & Soul (Ambedkar). 5 Writs: HC (body), Mandamus (command), Prohibition (prevent before), Certiorari (quash after), Quo Warranto (public office). Art. 226 = HC wider jurisdiction.",
    "mnemonics": "\"HMPCQ\" = Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo Warranto",
    "importanceScore": 7,
    "difficulty": "medium",
    "pyqIds": [
      "pyq_007"
    ],
    "flashcardIds": [
      "fc_027",
      "fc_028",
      "fc_029"
    ],
    "frequency": 3,
    "pyqYears": [
      2023,
      2024,
      2025
    ]
  },
  {
    "id": "dpsp",
    "title": "Directive Principles of State Policy",
    "unit": 1,
    "subtopics": [
      "Nature",
      "Classification",
      "Article 44 UCC",
      "DPSP vs Fundamental Rights",
      "Implementation"
    ],
    "explanation": "DPSP (Articles 36-51) are non-justiciable guidelines for the State in policy-making, inspired by Irish Constitution. They represent socio-economic democracy.",
    "detailed": "**Directive Principles of State Policy (DPSP):**\n\n**Nature:**\n- Non-justiciable (cannot be enforced in court)\n- Fundamental in governance\n- Article 37: These principles shall not be enforceable by any court but are fundamental in governance\n- Granville Austin called them the 'Conscience of the Constitution'\n\n**Classification of DPSPs:**\n\n**Socialistic (Art. 38-43A):**\n- Art. 38 – Promote welfare state\n- Art. 39 – Equal pay, adequate livelihood, children protection\n- Art. 41 – Right to work, education, public assistance\n- Art. 42 – Just and humane working conditions\n- Art. 43 – Living wage for workers\n- Art. 43A – Participation of workers in management\n- Art. 45 – Free & compulsory education for children (now in Art. 21A)\n\n**Gandhian (Art. 40, 43, 46, 48):**\n- Art. 40 – Village Panchayats\n- Art. 46 – Promote education of SC/ST/weaker sections\n- Art. 47 – Prohibition of intoxicating drinks\n- Art. 48 – Prohibition of cow slaughter\n\n**Liberal-Intellectual (Art. 44, 45, 48A, 50, 51):**\n- Art. 44 – **Uniform Civil Code**\n- Art. 48A – Protection of environment\n- Art. 50 – Separation of judiciary from executive\n- Art. 51 – International peace\n\n**DPSP vs Fundamental Rights:**\n- Minerva Mills Case (1980): Balance between FR and DPSP; neither can destroy the other\n- Art. 31C (42nd Amendment): Laws implementing certain DPSPs cannot be challenged on FR grounds",
    "articles": [
      "Art. 36-51 – DPSP",
      "Art. 37 – Non-justiciable nature",
      "Art. 44 – Uniform Civil Code",
      "Art. 48A – Environment",
      "Art. 50 – Judiciary from Executive",
      "Art. 31C – Protection of DPSP laws"
    ],
    "amendments": [
      "42nd Amendment 1976 – Gave DPSP primacy over some FR",
      "44th Amendment 1978 – Restored balance"
    ],
    "cases": [
      "State of Madras v. Champakam Dorairajan (1951) – FR over DPSP",
      "Kesavananda Bharati (1973) – FR and DPSP must coexist",
      "Minerva Mills v. Union of India (1980) – Balance between FR and DPSP"
    ],
    "quickRevision": "DPSP = Art. 36-51, Non-justiciable, Inspired by Ireland. Types: Socialistic, Gandhian, Liberal. Art. 44 = UCC. Art. 48A = Environment. Minerva Mills = Balance FR vs DPSP.",
    "mnemonics": "\"SGL\" = Socialist, Gandhian, Liberal — 3 types of DPSP",
    "importanceScore": 9,
    "difficulty": "medium",
    "pyqIds": [
      "pyq_004",
      "pyq_053",
      "pyq_082",
      "pyq_133"
    ],
    "flashcardIds": [
      "fc_030",
      "fc_031"
    ],
    "frequency": 7,
    "pyqYears": [
      2023,
      2024,
      2025
    ]
  },
  {
    "id": "fundamental_duties",
    "title": "Fundamental Duties",
    "unit": 1,
    "subtopics": [
      "Article 51A",
      "List of Duties",
      "42nd Amendment",
      "86th Amendment"
    ],
    "explanation": "Fundamental Duties were added by the 42nd Amendment 1976 under Article 51A (Part IVA). There are 11 duties (10 original + 1 added by 86th Amendment 2002).",
    "detailed": "**Fundamental Duties — Article 51A:**\n\n**Added by:** 42nd Amendment Act, 1976 (on recommendation of Swaran Singh Committee)\n**Number:** Originally 10; 86th Amendment 2002 added the 11th\n\n**Part IVA** was added to the Constitution.\n\n**The 11 Fundamental Duties:**\n1. Abide by the Constitution and respect its ideals\n2. Cherish and follow noble ideals of national struggle\n3. Uphold and protect sovereignty, unity and integrity\n4. Defend the country and render national service\n5. Promote harmony and brotherhood\n6. Value and preserve rich heritage\n7. Protect and improve natural environment\n8. Develop scientific temper and humanism\n9. Safeguard public property and abjure violence\n10. Strive towards excellence in individual and collective activity\n11. **(86th Amend, 2002):** Parent/guardian to provide opportunities for education to children between 6-14 years\n\n**Inspired by:** Constitution of USSR (former Soviet Union)\n\n**Nature:** Non-justiciable (cannot be enforced in court)\n\n**Significance:**\n- Verma Committee (1999): Specific legislation needed to enforce duties\n- Courts use them to interpret constitutional provisions",
    "articles": [
      "Art. 51A – Fundamental Duties",
      "Part IVA"
    ],
    "amendments": [
      "42nd Amendment 1976 – Added Art. 51A with 10 duties",
      "86th Amendment 2002 – Added 11th duty (parent/guardian to send children to school)"
    ],
    "cases": [],
    "quickRevision": "Art. 51A = Part IVA = 11 Fundamental Duties. Added by 42nd Amendment. 11th added by 86th Amendment. Non-justiciable. Inspired by USSR. Swaran Singh Committee recommended them.",
    "mnemonics": "\"42 → FD born, 86 → 11th born\" (42nd Amendment created FD; 86th added the 11th)",
    "importanceScore": 9,
    "difficulty": "medium",
    "pyqIds": [
      "pyq_005",
      "pyq_006"
    ],
    "flashcardIds": [
      "fc_032",
      "fc_033"
    ],
    "frequency": 5,
    "pyqYears": [
      2023,
      2024,
      2025
    ]
  },
  {
    "id": "judicial_review",
    "title": "Judicial Review",
    "unit": 1,
    "subtopics": [
      "Meaning",
      "Scope",
      "Basic Structure Doctrine",
      "Constitutional Interpretation"
    ],
    "explanation": "Judicial review is the power of courts to examine the constitutional validity of legislative and executive actions. In India, it is narrower than in the USA.",
    "detailed": "**Judicial Review in India:**\n\n**Basis:** Articles 13, 32, 226\n- Art. 13 – Laws inconsistent with FR are void\n- Art. 32 – SC's power to enforce FR\n- Art. 226 – HC's power to issue writs\n\n**Types of Judicial Review:**\n1. Review of Legislative Action – Statutes can be struck down if violating Constitution\n2. Review of Executive Action – Government orders can be quashed\n3. Review of Judicial Decisions – Review and curative petitions\n\n**Basic Structure Doctrine (Kesavananda Bharati, 1973):**\n- Parliament cannot destroy the 'basic structure' of the Constitution\n- Basic Structure includes:\n  - Supremacy of Constitution\n  - Republican and democratic form of Government\n  - Secularism\n  - Federal character\n  - Separation of powers\n  - Rule of law\n  - Fundamental Rights\n  - Judicial Review\n  - Free and fair elections\n\n**Constitutional Interpretation:**\n- Liberal/purposive interpretation\n- Literal interpretation\n- Harmonious construction\n- Doctrine of pith and substance\n- Doctrine of colourable legislation",
    "articles": [
      "Art. 13 – Laws Inconsistent with FR are Void",
      "Art. 32 – SC Writ Jurisdiction",
      "Art. 226 – HC Writ Jurisdiction",
      "Art. 368 – Amendment Power"
    ],
    "amendments": [],
    "cases": [
      "Kesavananda Bharati v. State of Kerala (1973) – Basic Structure Doctrine",
      "Golaknath v. State of Punjab (1967) – Parliament cannot amend FR (overruled by Kesavananda)",
      "Minerva Mills v. Union of India (1980) – Judicial review is Basic Structure"
    ],
    "quickRevision": "Judicial Review = Art. 13 + Art. 32 + Art. 226. Basic Structure Doctrine from Kesavananda Bharati (1973). Parliament CANNOT destroy basic structure. Basic structure includes Secularism, Federalism, FR, Judicial Review.",
    "mnemonics": "\"SRSFJ\" = Supremacy, Republicanism, Secularism, Federalism, Judicial Review — Basic Structure elements",
    "importanceScore": 6,
    "difficulty": "easy",
    "pyqIds": [],
    "flashcardIds": [
      "fc_034",
      "fc_035"
    ],
    "frequency": 0,
    "pyqYears": []
  },
  {
    "id": "president",
    "title": "President of India",
    "unit": 2,
    "subtopics": [
      "Election",
      "Term",
      "Powers",
      "Immunities",
      "Removal"
    ],
    "explanation": "The President is the constitutional head of the Union Executive (Art. 52). Elected indirectly by elected members of both Houses of Parliament and State Legislative Assemblies.",
    "detailed": "**President of India:**\n\n**Election:** Indirect — by elected members of Lok Sabha, Rajya Sabha, and State Legislative Assemblies (not nominated members, not Vidhan Parishad members)\n\n**Qualifications (Art. 58):**\n- Indian citizen\n- 35 years of age\n- Eligible for Lok Sabha election\n- Must not hold any other office of profit\n\n**Term:** 5 years (Art. 56). Eligible for re-election.\n\n**Oath:** Administered by Chief Justice of India.\n\n**Removal (Art. 61):** Impeachment by Parliament\n- Initiated in either House (special majority)\n- Investigated by other House\n- 2/3 majority of TOTAL membership of investigating House\n\n**Executive Powers:**\n- All executive action taken in President's name\n- Appoints PM, Council of Ministers, Governors, Judges, CAG, AG, Election Commissioners\n\n**Legislative Powers:**\n- Summons, prorogues, dissolves Parliament\n- Nominates 12 members to Rajya Sabha\n- Addresses joint sitting\n- Assents to bills\n\n**Emergency Powers:**\n- National Emergency (Art. 352)\n- President's Rule (Art. 356)\n- Financial Emergency (Art. 360)\n\n**Veto Powers:**\n- Absolute veto (withholds assent)\n- Suspensive veto (returns bill for reconsideration)\n- Pocket veto (no time limit)\n- No veto for Constitutional Amendment Bills",
    "articles": [
      "Art. 52 – President of India",
      "Art. 53 – Executive Power",
      "Art. 54-55 – Election",
      "Art. 56 – Term (5 years)",
      "Art. 58 – Qualifications",
      "Art. 61 – Impeachment",
      "Art. 72 – Pardoning Power",
      "Art. 74 – Council of Ministers"
    ],
    "amendments": [],
    "cases": [
      "Rameshwar Prasad v. Union of India (2006) – Misuse of Art. 356"
    ],
    "quickRevision": "President: Indirect election, 35 yrs, 5-year term, CJI administers oath. Impeachment = 2/3 total membership. Appoints PM, Governors, Judges. 3 Emergencies. Veto: Absolute, Suspensive, Pocket.",
    "mnemonics": "\"ESTOIP\" = Election (indirect), Salary, Term (5yr), Oath (CJI), Impeachment, Powers",
    "importanceScore": 10,
    "difficulty": "hard",
    "pyqIds": [
      "pyq_003",
      "pyq_010",
      "pyq_011",
      "pyq_012",
      "pyq_013",
      "pyq_014",
      "pyq_016",
      "pyq_017",
      "pyq_018",
      "pyq_019",
      "pyq_044",
      "pyq_056",
      "pyq_057",
      "pyq_058",
      "pyq_059",
      "pyq_060",
      "pyq_084",
      "pyq_086",
      "pyq_106",
      "pyq_120",
      "pyq_121",
      "pyq_122",
      "pyq_125",
      "pyq_126"
    ],
    "flashcardIds": [
      "fc_036",
      "fc_037"
    ],
    "frequency": 47,
    "pyqYears": [
      2023,
      2024,
      2025
    ]
  },
  {
    "id": "parliament",
    "title": "Parliament",
    "unit": 2,
    "subtopics": [
      "Lok Sabha",
      "Rajya Sabha",
      "Joint Sitting",
      "Parliamentary Procedure",
      "Speaker"
    ],
    "explanation": "Parliament of India consists of the President, Lok Sabha (Lower House), and Rajya Sabha (Upper House). It is the supreme legislative body of the Union.",
    "detailed": "**Parliament of India:**\n\n**Composition:** President + Rajya Sabha + Lok Sabha\n\n**Rajya Sabha (Upper House / Council of States):**\n- Maximum: 250 (238 elected + 12 nominated by President)\n- Currently: 245 members\n- Not subject to dissolution (permanent body)\n- 1/3 members retire every 2 years\n- Elected by State Legislative Assemblies (proportional representation, single transferable vote)\n- Presided by Vice-President (Ex-officio Chairman)\n- Special Powers: Art. 249 (National interest legislation in State List), Art. 312 (All India Services)\n\n**Focus Areas:** Lok Sabha, Speaker, Parliamentary Procedure, Money Bill (Art. 110), Joint Sitting (Art. 108).",
    "articles": [
      "Art. 79 – Composition of Parliament",
      "Art. 80 – Rajya Sabha",
      "Art. 81 – Lok Sabha",
      "Art. 100 – Voting",
      "Art. 108 – Joint Sitting",
      "Art. 110 – Money Bill",
      "Art. 112 – Annual Financial Statement (Budget)"
    ],
    "amendments": [
      "104th Amendment 2019 – Extended SC/ST reservation in Parliament and states assemblies; removed Anglo-Indian nomination"
    ],
    "cases": [],
    "quickRevision": "Parliament = President + RS + LS. RS = Max 250, Permanent (1/3 retire every 2 yrs), VP presides. LS = Max 552, 5-yr term, Speaker presides. Joint Sitting = Art. 108, Speaker presides. Money Bill = Art. 110, Only LS.",
    "mnemonics": "\"RS PURE\" = Rajya Sabha Permanent, Upper, Representative, Elected by state assemblies",
    "importanceScore": 7,
    "difficulty": "medium",
    "pyqIds": [
      "pyq_085",
      "pyq_119"
    ],
    "flashcardIds": [
      "fc_038",
      "fc_039"
    ],
    "frequency": 2,
    "pyqYears": [
      2023
    ]
  },
  {
    "id": "supreme_court",
    "title": "Supreme Court of India",
    "unit": 2,
    "subtopics": [
      "Composition",
      "Jurisdiction",
      "Original",
      "Appellate",
      "Advisory",
      "Judicial Independence"
    ],
    "explanation": "The Supreme Court is the apex court of India (Art. 124). It has original, appellate and advisory jurisdiction.",
    "detailed": "**Supreme Court of India:**\n\n**Composition (Art. 124):**\n- Chief Justice of India + maximum 33 other Judges (total 34)\n- Appointed by President after consultation with judges (collegium system)\n- Retirement age: 65 years\n\n**Jurisdiction:**\n\n**1. Original Jurisdiction (Art. 131):**\n- Disputes between Centre and States\n- Disputes between States inter se\n- (NOT ordinary civil disputes)\n\n**2. Appellate Jurisdiction (Art. 132-134):**\n- Constitutional matters (Art. 132)\n- Civil matters (Art. 133)\n- Criminal matters (Art. 134)\n- Certificate from High Court required (or Special Leave Petition)\n\n**3. Special Leave Petition (Art. 136):**\n- Discretionary power to grant leave from any judgment of any court/tribunal\n- Most powerful jurisdiction\n\n**4. Advisory Jurisdiction (Art. 143):**\n- President can refer any question of law/fact to SC\n- SC opinion is NOT binding (advisory only)\n\n**5. Writ Jurisdiction (Art. 32):**\n- For enforcement of Fundamental Rights\n\n**Collegium System:**\n- 3 Cases: S.P. Gupta (1981), Supreme Court Advocates-on-Record Association (1993), NJAC Case (2015)\n- NJAC (99th Amendment) struck down — Collegium restored\n\n**Removal of Judges:**\n- Address by Parliament: 2/3 majority in each House + majority of total membership",
    "articles": [
      "Art. 124 – Establishment of SC",
      "Art. 131 – Original Jurisdiction",
      "Art. 132-134 – Appellate Jurisdiction",
      "Art. 136 – Special Leave Petition",
      "Art. 141 – SC decisions binding on all courts",
      "Art. 143 – Advisory Jurisdiction"
    ],
    "amendments": [
      "99th Amendment 2014 – NJAC (struck down by SC in 2015)"
    ],
    "cases": [
      "S.P. Gupta v. Union of India (1981) – First Judges Case",
      "Supreme Court Advocates-on-Record Association (1993) – Second Judges Case (Collegium established)",
      "NJAC Case (2015) – Third Judges Case (Collegium restored)"
    ],
    "quickRevision": "SC: 34 judges total (CJI+33), 65 yrs retirement. Original (Art. 131), Appellate (132-134), SLP (136), Advisory (143), Writs (32). Art. 141 = binding precedent. Collegium = 3 senior-most judges.",
    "mnemonics": "\"OASW-A\" = Original, Appellate, Special Leave, Writ, Advisory — SC's jurisdictions",
    "importanceScore": 9,
    "difficulty": "medium",
    "pyqIds": [
      "pyq_061",
      "pyq_076",
      "pyq_107",
      "pyq_123"
    ],
    "flashcardIds": [
      "fc_040",
      "fc_041"
    ],
    "frequency": 6,
    "pyqYears": [
      2023,
      2025
    ]
  },
  {
    "id": "national_emergency",
    "title": "Emergency Provisions",
    "unit": 2,
    "subtopics": [
      "National Emergency Art 352",
      "President's Rule Art 356",
      "Financial Emergency Art 360",
      "Consequences"
    ],
    "explanation": "The Constitution provides for three types of emergencies: National Emergency (Art. 352), State Emergency/President's Rule (Art. 356), and Financial Emergency (Art. 360).",
    "detailed": "**Emergency Provisions:**\n\n**1. National Emergency (Art. 352):**\n- Grounds: War, External Aggression, Armed Rebellion (originally 'Internal Disturbance', changed by 44th Amendment)\n- Proclamation: By President on written advice of Cabinet\n- Approved by Parliament: By 2/3 majority of members present & voting + majority of total membership in each House\n- Duration: 6 months initially; extended by parliamentary approval every 6 months\n- **Effects:**\n  - Centre can legislate on State List\n  - President directs state executives\n  - FR under Art. 19 suspended automatically\n  - Art. 20, 21 cannot be suspended even during Emergency\n  - President can modify financial provisions\n\n**2. President's Rule (Art. 356) / State Emergency:**\n- Grounds: Failure of constitutional machinery in a state\n- Proclamation: By President on Governor's report or suo motu\n- Approved by Parliament: Simple majority within 2 months\n- Duration: 6 months; max 3 years (with successive Parliamentary approval every 6 months)\n- After 1 year: 2/3 majority + national emergency\n- S.R. Bommai Case (1994): President's Rule can be challenged in court; assembly should be kept in suspended animation, not dissolved\n\n**3. Financial Emergency (Art. 360):**\n- Grounds: Threat to financial stability or credit of India\n- Approved: By simple majority within 2 months\n- Never been proclaimed\n- Effects: President can reduce salaries of government employees including judges\n\n**Key Amendments:**\n- 44th Amendment 1978: 'Internal Disturbance' replaced by 'Armed Rebellion'; Art. 20, 21 cannot be suspended",
    "articles": [
      "Art. 352 – National Emergency",
      "Art. 353 – Effect of National Emergency",
      "Art. 354 – Suspension of Art. 19",
      "Art. 355 – Duty of Union to protect States",
      "Art. 356 – President's Rule",
      "Art. 360 – Financial Emergency"
    ],
    "amendments": [
      "44th Amendment 1978 – Safeguards for Emergency proclamation"
    ],
    "cases": [
      "S.R. Bommai v. Union of India (1994) – Misuse of Art. 356",
      "A.K. Roy v. Union of India (1982)"
    ],
    "quickRevision": "3 Emergencies: Art. 352 (National-War/Rebellion), Art. 356 (President's Rule-State failure), Art. 360 (Financial). 352 = 2/3 majority + majority total. Art. 20, 21 = Cannot be suspended even during National Emergency. Bommai = Art. 356 justiciable.",
    "mnemonics": "\"352-WAR, 356-STATE, 360-FINANCE\" (3 emergencies: War/Armed Rebellion, State failure, Financial)",
    "importanceScore": 7,
    "difficulty": "medium",
    "pyqIds": [
      "pyq_015"
    ],
    "flashcardIds": [
      "fc_042",
      "fc_043"
    ],
    "frequency": 2,
    "pyqYears": [
      2023,
      2024
    ]
  },
  {
    "id": "constitutional_amendments",
    "title": "Constitutional Amendments",
    "unit": 2,
    "subtopics": [
      "Article 368",
      "Types of Amendment",
      "Important Amendments",
      "Basic Structure Limitation"
    ],
    "explanation": "Article 368 provides for the amendment of the Constitution. There are three methods: simple majority, special majority, and special majority + ratification by states.",
    "detailed": "**Constitutional Amendments (Art. 368):**\n\n**Three Methods of Amendment:**\n\n1. **By Simple Majority** (not under Art. 368 strictly):\n   - Admission of new states\n   - Alteration of areas/boundaries/names of states\n   - Abolition/creation of Legislative Councils\n   - Second Schedule (emoluments)\n\n2. **By Special Majority** (2/3 of members present & voting + majority of total membership of each House):\n   - Most constitutional amendments\n\n3. **By Special Majority + State Ratification** (ratification by at least 1/2 of states):\n   - Federal provisions: election of President, extent of executive/legislative powers of Centre and States, Seventh Schedule, representation of states in Parliament, Art. 368 itself\n\n**Important Amendments:** 42nd (Mini-Constitution), 44th, 52nd (Anti-Defection), 61st (Voting 18), 73rd & 74th (Local Self-Govt), 86th (Education), 101st (GST), 103rd (EWS).",
    "articles": [
      "Art. 368 – Constitutional Amendments"
    ],
    "amendments": [
      "42nd, 44th, 52nd, 61st, 73rd, 74th, 86th, 101st, 103rd, 104th Amendments"
    ],
    "cases": [
      "Kesavananda Bharati (1973) – Basic Structure limits amendment power"
    ],
    "quickRevision": "Art. 368 = 3 methods. 42nd = Mini-Constitution. 44th = Restored FR. 52nd = Anti-Defection. 61st = Voting age 18. 73rd/74th = Panchayat/Municipalities. 86th = RTE. 101st = GST. 103rd = EWS.",
    "mnemonics": "\"42 Mini, 44 Restored, 52 Anti, 61 Votes, 73/74 Local, 86 Education, 101 GST, 103 EWS\" — key amendments",
    "importanceScore": 6,
    "difficulty": "easy",
    "pyqIds": [],
    "flashcardIds": [
      "fc_044",
      "fc_045"
    ],
    "frequency": 0,
    "pyqYears": []
  },
  {
    "id": "article_370",
    "title": "Article 370 & Recent Developments",
    "unit": 2,
    "subtopics": [
      "Article 370",
      "Abrogation 2019",
      "Article 35A",
      "J&K Reorganisation",
      "SC Judgment 2023"
    ],
    "explanation": "Article 370 gave special status to Jammu & Kashmir. It was abrogated on August 5, 2019, by Presidential Order.",
    "detailed": "**Article 370 — Special Status of J&K:**\n\n**Original Provision:**\n- Temporary provision under Part XXI\n- J&K had its own Constitution (1956)\n- Only Art. 1 and Art. 370 applied automatically to J&K\n- Other constitutional provisions applied with modifications/exceptions\n\n**Article 35A:**\n- Added by Presidential Order 1954\n- Empowered J&K Legislature to define 'Permanent Residents'\n- Permanent residents had special rights (property, govt jobs, scholarships)\n- Non-permanent residents (including Indian citizens from other states) could not own property in J&K\n\n**Abrogation (August 5, 2019):**\n- Presidential Order under Art. 370(3)\n- Article 370 effectively abrogated\n- J&K Reorganisation Act 2019 bifurcated J&K state into:\n  1. **Union Territory of J&K** (with legislature)\n  2. **Union Territory of Ladakh** (without legislature)\n\n**Supreme Court Judgment (December 11, 2023):**\n- Constitution Bench (5 judges) upheld abrogation of Art. 370\n- Held Art. 370 was a temporary provision\n- Directed J&K statehood to be restored\n- Directed elections in J&K by September 30, 2024",
    "articles": [
      "Art. 370 – Special Status of J&K (now abrogated)",
      "Art. 35A – Special rights of permanent residents",
      "Art. 1 – Name and territory"
    ],
    "amendments": [
      "J&K Reorganisation Act 2019"
    ],
    "cases": [
      "In Re: Article 370 of the Constitution (SC, December 2023) – Abrogation upheld; statehood to be restored"
    ],
    "quickRevision": "Art. 370 = Temporary special status to J&K. Abrogated Aug 5, 2019. J&K → 2 UTs: J&K (legislature) + Ladakh (no legislature). SC 2023 = Upheld abrogation, directed statehood restoration.",
    "mnemonics": "\"370 TEMP GONE\" = 370 was Temporary, Gone in 2019, SC confirmed",
    "importanceScore": 6,
    "difficulty": "easy",
    "pyqIds": [],
    "flashcardIds": [
      "fc_046"
    ],
    "frequency": 0,
    "pyqYears": []
  },
  {
    "id": "it_act_2000",
    "title": "IT Act 2000 & Amendment 2008",
    "unit": 3,
    "subtopics": [
      "Objectives",
      "Key Provisions",
      "Digital Signatures",
      "Certifying Authorities",
      "Offences",
      "2008 Amendment"
    ],
    "explanation": "The Information Technology Act, 2000 provides legal recognition to electronic transactions, digital signatures, and addresses cyber crimes.",
    "detailed": "**Information Technology Act, 2000:**\n\n**Objectives:**\n1. Legal recognition to electronic records and digital signatures\n2. Facilitate e-commerce and e-governance\n3. Provide framework for cybercrime prosecution\n4. Enable online transactions\n\n**Key Provisions:**\n\n**Chapters 2-3: Electronic Records & Digital Signatures**\n- Sec. 3: Digital Signature authentication\n- Sec. 5: Legal recognition of electronic records\n- Sec. 7: Retention of electronic records\n- Sec. 11: Attribution of electronic records\n\n**Certifying Authorities:**\n- Controller of Certifying Authorities (CCA) – apex body\n- Issues Digital Signature Certificates\n\n**Cyber Offences:**\n- Sec. 43 – Penalty for unauthorized access (civil)\n- Sec. 65 – Tampering with computer source documents\n- Sec. 66 – Computer related offences (hacking)\n- Sec. 66A – Sending offensive messages (STRUCK DOWN by SC in Shreya Singhal, 2015)\n- Sec. 66B – Receiving stolen computer resources\n- Sec. 66C – Identity theft\n- Sec. 66D – Cheating by impersonation\n- Sec. 66E – Violation of privacy\n- Sec. 66F – Cyber terrorism\n- Sec. 67 – Publishing obscene material\n- Sec. 67A – Sexually explicit material\n- Sec. 67B – Child pornography\n- Sec. 69 – Power to intercept/monitor\n- Sec. 69A – Blocking websites\n- Sec. 72 – Breach of confidentiality\n- Sec. 79 – Intermediary liability (safe harbour)\n\n**IT Amendment Act 2008:**\n- Added: Sec. 66A-F, 66F (cyber terrorism)\n- Enhanced penalties\n- Section 43A: Compensation for failure to protect sensitive data\n- Changed definition of 'computer' to include all devices\n- Introduced SPDI (Sensitive Personal Data or Information) framework\n- Section 79 amended: Safe harbour with due diligence obligations",
    "articles": [],
    "amendments": [
      "IT Amendment Act 2008"
    ],
    "cases": [
      "Shreya Singhal v. Union of India (2015) – Section 66A struck down as unconstitutional (violates Art. 19(1)(a))"
    ],
    "quickRevision": "IT Act 2000: Legal recognition to e-records. Sec 43=Civil penalty. Sec 66=Hacking. Sec 66A=STRUCK DOWN (Shreya Singhal 2015). Sec 66F=Cyber terrorism. Sec 69=Interception. Sec 79=Intermediary safe harbour. 2008 Amendment added key offences.",
    "mnemonics": "\"66 is HACKING LINE\" = 66A(messages), 66B(stolen), 66C(identity), 66D(impersonation), 66E(privacy), 66F(terrorism)",
    "importanceScore": 10,
    "difficulty": "hard",
    "pyqIds": [
      "pyq_020",
      "pyq_021",
      "pyq_023",
      "pyq_029",
      "pyq_093",
      "pyq_096",
      "pyq_137",
      "pyq_138",
      "pyq_139"
    ],
    "flashcardIds": [
      "fc_047",
      "fc_048",
      "fc_049"
    ],
    "frequency": 16,
    "pyqYears": [
      2023,
      2024,
      2025
    ]
  },
  {
    "id": "cyber_crimes",
    "title": "Cyber Crimes & Penalties",
    "unit": 3,
    "subtopics": [
      "Types of Cyber Crimes",
      "Hacking",
      "Phishing",
      "AI Voice Clone Fraud",
      "Deepfakes",
      "Ransomware"
    ],
    "explanation": "Cyber crimes are offences committed using computers or networks. They range from hacking and phishing to emerging threats.",
    "detailed": "**Cyber Crimes:**\n\n**Categories:**\n1. **Against Individuals:** Cyberstalking, online harassment, identity theft, cyberbullying\n2. **Against Property:** Hacking, phishing, ransomware, intellectual property theft\n3. **Against Government/Society:** Cyber terrorism, espionage, spreading misinformation\n\n**Common Types:**\n\n**Hacking (Sec. 66 IT Act):**\n- Unauthorized access to computer systems\n- Penalty: Up to 3 years imprisonment and/or Rs. 5 lakh fine\n\n**Identity Theft (Sec. 66C):**\n- Fraudulent use of electronic signature, password, unique identification\n- Penalty: Up to 3 years + Rs. 1 lakh fine\n\n**Phishing:**\n- Fraudulent attempt to obtain sensitive information\n- Covered under Sec. 66D (cheating by impersonation)\n\n**Cyber Terrorism (Sec. 66F):**\n- Denial of access, unauthorized access with intent to threaten national security\n- Penalty: Life imprisonment\n\n**AI Voice Clone Fraud:**\n- Using AI to replicate a person's voice for fraudulent calls\n- Emerging threat not specifically covered under IT Act\n- Covered under fraud provisions of IPC/BNS + IT Act Sec. 66D\n\n**Deepfake Imagery:**\n- AI-generated fake images/videos of real persons\n- Legal issues: Privacy violation, defamation, non-consensual intimate images\n- Covered under Sec. 66E (privacy), Sec. 67A/67B (if sexual content)\n- Draft IT Amendment Rules 2023 addressed deepfakes\n\n**Ransomware:**\n- Encrypts victim's data, demands ransom\n- Covered under Sec. 66 + Sec. 43\n\n**SPDI (Sensitive Personal Data or Information) Rules 2011:**\n- Passwords, financial data, health data, biometrics, sexual orientation\n- Reasonable security practices required",
    "articles": [],
    "amendments": [],
    "cases": [
      "Shreya Singhal v. Union of India (2015)",
      "Avnish Bajaj v. State (2005) – Intermediary liability"
    ],
    "quickRevision": "Cyber Crimes: Hacking (66), Identity theft (66C), Impersonation (66D), Privacy violation (66E), Cyber terrorism (66F=Life). AI Voice fraud = 66D. Deepfakes = 66E + 67A. SPDI = Sensitive Personal Data.",
    "mnemonics": "\"66 C-D-E-F\" = Crime ladder: C=identity, D=impersonation, E=privacy, F=terrorism",
    "importanceScore": 10,
    "difficulty": "hard",
    "pyqIds": [
      "pyq_062",
      "pyq_089",
      "pyq_090",
      "pyq_091",
      "pyq_110",
      "pyq_127",
      "pyq_128",
      "pyq_142"
    ],
    "flashcardIds": [
      "fc_050",
      "fc_051"
    ],
    "frequency": 11,
    "pyqYears": [
      2023,
      2025
    ]
  },
  {
    "id": "intermediary_liability",
    "title": "Intermediary Liability",
    "unit": 3,
    "subtopics": [
      "Section 79",
      "Safe Harbour",
      "Due Diligence",
      "Platform Duties",
      "IT Rules 2021"
    ],
    "explanation": "Section 79 of IT Act provides 'safe harbour' protection to intermediaries (platforms like Google, Facebook, WhatsApp) from liability for third-party content.",
    "detailed": "**Intermediary Liability (Section 79 IT Act):**\n\n**Who is an Intermediary?**\nTelecom providers, internet service providers, search engines, online marketplaces, social media platforms, e-mail service providers.\n\n**Safe Harbour (Section 79):**\n- Intermediary NOT liable for third-party content IF:\n  1. It doesn't initiate the transmission\n  2. Doesn't select receiver\n  3. Doesn't modify the information\n  4. Observes due diligence\n\n**Loss of Safe Harbour if:**\n- Has actual knowledge of unlawful activity\n- Fails to expeditiously remove or disable access\n- Conspires, aids, abets, induces unlawful act\n\n**Due Diligence Requirements:**\n- Publish Terms of Service, Privacy Policy\n- Act on government removal orders within specific timeframes\n- Appoint compliance officers\n\n**IT (Intermediary Guidelines and Digital Media Ethics Code) Rules 2021:**\n\n**Classification of Intermediaries:**\n1. **Social Media Intermediary** – users > 50 lakh\n2. **Significant Social Media Intermediary (SSMI)** – users > 50 lakh (enhanced obligations)\n\n**Obligations for SSMIs:**\n- Chief Compliance Officer\n- Nodal Contact Person\n- Resident Grievance Officer (Indian resident)\n- Monthly compliance reports\n- Traceability of originator of messages\n- Content moderation\n\n**Digital Media Ethics Code:**\n- Three-tier grievance redressal\n- Publisher-level, Self-regulatory body, Government oversight",
    "articles": [],
    "amendments": [
      "IT (Intermediary Guidelines) Rules 2021"
    ],
    "cases": [
      "Shreya Singhal v. Union of India (2015) – Read down Sec. 79",
      "Avnish Bajaj v. State (2005)",
      "Google India Pvt. Ltd. v. Visakha Industries (2006)"
    ],
    "quickRevision": "Sec 79 = Safe harbour for intermediaries. Safe harbour lost if actual knowledge + failure to remove. IT Rules 2021: SSMIs (>50 lakh users) must have CCO, Nodal person, Grievance officer, Traceability. 3-tier grievance.",
    "mnemonics": "\"SAFE HARBOUR = 79, DUE DILIGENCE = key condition\"",
    "importanceScore": 9,
    "difficulty": "medium",
    "pyqIds": [
      "pyq_032",
      "pyq_095",
      "pyq_112"
    ],
    "flashcardIds": [
      "fc_052"
    ],
    "frequency": 6,
    "pyqYears": [
      2023,
      2024,
      2025
    ]
  },
  {
    "id": "dpdpa_2023",
    "title": "DPDPA 2023 — Digital Personal Data Protection Act",
    "unit": 3,
    "subtopics": [
      "Applicability",
      "Data Principal Rights",
      "Data Fiduciary Duties",
      "Data Protection Board",
      "Exemptions"
    ],
    "explanation": "The Digital Personal Data Protection Act, 2023 (DPDPA) is India's comprehensive data privacy law.",
    "detailed": "**Digital Personal Data Protection Act, 2023:**\n\n**Key Definitions:**\n- **Personal Data:** Data about an identifiable individual\n- **Data Principal:** The individual whose data is collected (DATA SUBJECT)\n- **Data Fiduciary:** Entity that determines purpose/means of processing (similar to DATA CONTROLLER)\n- **Data Processor:** Processes data on behalf of Data Fiduciary\n- **Significant Data Fiduciary (SDF):** Large/sensitive data processors notified by Central Government\n\n**Applicability:**\n- Processing of digital personal data within India\n- Processing outside India if related to offering goods/services to Indian residents\n\n**Rights of Data Principal:**\n1. Right to information about processing\n2. Right to correction/erasure of data\n3. Right to grievance redressal\n4. Right to nominate another person\n\n**Duties of Data Fiduciary:**\n1. Process data only for lawful purpose\n2. Only collect data that is necessary\n3. Ensure accuracy of data\n4. Security safeguards\n5. Delete data when no longer needed\n6. Respond to grievances\n\n**Consent Framework:**\n- Consent must be: Free, specific, informed, unconditional, unambiguous\n- Consent can be withdrawn at any time\n- Legitimate uses without consent: State subsidies/services, legal obligations, national security, employment\n\n**Children's Data:**\n- Parental consent required for children (<18 years)\n- No tracking, behavioral monitoring, or targeted advertising to children\n\n**Data Protection Board:**\n- Adjudicatory body\n- Investigate breaches, impose penalties\n- Penalties up to Rs. 250 crore (per breach), up to Rs. 200 crore for children's data\n\n**Exemptions:**\n- Personal/domestic processing\n- Research, archiving, statistical purposes\n- State security and national defence",
    "articles": [],
    "amendments": [],
    "cases": [
      "Justice K.S. Puttaswamy v. Union of India (2017) – triggered need for data protection law"
    ],
    "quickRevision": "DPDPA 2023: Data Principal = individual. Data Fiduciary = controller. SDF = Significant Data Fiduciary. 4 Rights: Information, Correction/Erasure, Grievance, Nominate. Children = parental consent. Penalties up to Rs. 250 crore.",
    "mnemonics": "\"ICGN\" = Information, Correction, Grievance, Nominate — 4 rights under DPDPA",
    "importanceScore": 7,
    "difficulty": "medium",
    "pyqIds": [
      "pyq_045",
      "pyq_141"
    ],
    "flashcardIds": [
      "fc_053",
      "fc_054"
    ],
    "frequency": 4,
    "pyqYears": [
      2023,
      2024,
      2025
    ]
  },
  {
    "id": "intellectual_property",
    "title": "Intellectual Property Rights — Overview",
    "unit": 3,
    "subtopics": [
      "Types of IPR",
      "WIPO",
      "TRIPS Agreement",
      "India's IP Regime"
    ],
    "explanation": "Intellectual Property Rights (IPR) are legal rights that protect creations of the mind. India's IP regime comprises multiple acts.",
    "detailed": "**Intellectual Property Rights:**\n\n**Types of IP:**\n1. **Trademark** – Brand names, logos (Trademarks Act 1999)\n2. **Copyright** – Literary, artistic, musical works (Copyright Act 1957)\n3. **Patent** – Inventions (Patents Act 1970)\n4. **Geographical Indication (GI)** – Product from specific region (GI Act 1999)\n5. **Industrial Design** – Aesthetic features (Designs Act 2000)\n6. **Semiconductor Layout Design** (Semiconductor IC Layout Design Act 2000)\n7. **Traditional Knowledge** (TKDL)\n\n**International Framework:**\n- **WIPO:** World Intellectual Property Organization (UN agency)\n- **TRIPS:** Trade-Related Aspects of Intellectual Property Rights (WTO agreement, 1995)\n  - Minimum standards of IP protection for WTO members\n  - India is signatory\n- **Paris Convention (1883):** Patents and Trademarks\n- **Berne Convention (1886):** Copyright\n- **PCT:** Patent Cooperation Treaty\n\n**India's IP Policy 2016:**\n- Creative India; Innovative India\n- Nodal agency: DPIIT (Department for Promotion of Industry and Internal Trade)\n\n**Key Principle — Balance:**\nIPR must balance creator's rights vs. public access to knowledge (especially in pharma patents)",
    "articles": [],
    "amendments": [],
    "cases": [
      "Novartis v. Union of India (2013) – Sec. 3(d) Patents Act; No patent for modified form of known substance"
    ],
    "quickRevision": "IPR Types: TM, Copyright, Patent, GI, Design, Semiconductor, TK. WIPO = UN agency. TRIPS = WTO agreement. Berne = Copyright (1886). Paris = Patents/TM (1883).",
    "mnemonics": "\"TCP GDS\" = Trademark, Copyright, Patent, GI, Design, Semiconductor — 6 types of IP",
    "importanceScore": 10,
    "difficulty": "hard",
    "pyqIds": [
      "pyq_028",
      "pyq_033",
      "pyq_034",
      "pyq_067",
      "pyq_068",
      "pyq_069",
      "pyq_070",
      "pyq_075",
      "pyq_094",
      "pyq_129"
    ],
    "flashcardIds": [
      "fc_055"
    ],
    "frequency": 21,
    "pyqYears": [
      2023,
      2024,
      2025
    ]
  },
  {
    "id": "trademark",
    "title": "Trademark",
    "unit": 3,
    "subtopics": [
      "Trademarks Act 1999",
      "Conventional TM",
      "Non-Conventional TM",
      "Registration",
      "Infringement"
    ],
    "explanation": "A trademark is a sign, symbol, word, or combination that distinguishes goods/services of one enterprise from another.",
    "detailed": "**Trademark Law:**\n\n**Trademarks Act, 1999** (replaced Trade and Merchandise Marks Act 1958)\n\n**Definition (Sec. 2(zb)):**\nA mark capable of being represented graphically and distinguishing goods/services of one person from those of others. May include: shape of goods, packaging, combination of colours.\n\n**Types of Trademarks:**\n\n**Conventional Trademarks:**\n- Word marks: 'Apple', 'Nike'\n- Logo/Device marks\n- Combination marks\n- Certification marks\n- Collective marks\n\n**Non-Conventional Trademarks:**\n- Sound marks (e.g., ICICI Bank jingle registered)\n- Colour marks (Cadbury purple)\n- Shape marks (Coca-Cola bottle shape)\n- Smell marks (rarely accepted)\n- Motion/hologram marks\n\n**Registration Process:**\n- Applied to: Trade Marks Registry\n- Term: 10 years (renewable indefinitely)\n- Priority: First to file (vs. first to use)\n\n**Infringement (Sec. 29):**\n- Use of identical/similar mark for identical/similar goods/services\n- Likelihood of confusion among consumers\n\n**Defences:**\n- Fair use\n- Descriptive use\n- Prior use\n\n**Passing Off:**\n- Common law remedy even without registration\n- Misrepresentation causing damage to goodwill",
    "articles": [],
    "amendments": [],
    "cases": [
      "Cadila Healthcare v. Cadila Pharmaceuticals (2001) – Deceptive similarity test",
      "Daimler Benz v. Hybo Hindustan (1994)"
    ],
    "quickRevision": "TM Act 1999. Conventional: Word, Logo. Non-Conventional: Sound, Colour, Shape, Smell. Registration: 10 yrs renewable. Infringement = Sec 29 = confusion test. Passing off = no registration needed.",
    "mnemonics": "\"SOUND SMELL SHAPE COLOUR\" = Non-conventional TM types",
    "importanceScore": 9,
    "difficulty": "medium",
    "pyqIds": [
      "pyq_027",
      "pyq_046",
      "pyq_078"
    ],
    "flashcardIds": [
      "fc_056",
      "fc_057"
    ],
    "frequency": 6,
    "pyqYears": [
      2023,
      2024,
      2025
    ]
  },
  {
    "id": "copyright",
    "title": "Copyright",
    "unit": 3,
    "subtopics": [
      "Copyright Act 1957",
      "Subject Matter",
      "Duration",
      "Fair Use",
      "AI and Copyright"
    ],
    "explanation": "Copyright protects original literary, dramatic, musical, artistic works, cinematographic films, and sound recordings.",
    "detailed": "**Copyright Law:**\n\n**Copyright Act, 1957** (amended multiple times; major amendment in 2012)\n\n**What Copyright Protects:**\n- Literary works (books, articles, computer programs)\n- Dramatic works\n- Musical works\n- Artistic works (paintings, sculptures, photographs)\n- Cinematographic films\n- Sound recordings\n\n**What Copyright Does NOT Protect:**\n- Ideas (only expression of ideas)\n- Facts/news events\n- Government documents (Section 52(q))\n\n**Duration of Copyright:**\n- Literary/dramatic/musical/artistic: Lifetime of author + 60 years\n- Posthumous work: 60 years from publication\n- Cinematographic films: 60 years from publication\n- Government works: 60 years from publication\n- Anonymous/pseudonymous: 60 years from publication\n\n**Author's Rights:**\n1. Economic rights: Reproduce, publish, adapt, translate, communicate to public\n2. Moral rights: Paternity (attribution), Integrity (protect from distortion)\n\n**Fair Use/Dealing (Sec. 52):**\n- Research, private study\n- Criticism or review\n- News reporting\n- Education\n- Libraries and archives\n\n**AI and Copyright:**\n- AI-generated works — who owns copyright?\n- India: No explicit provision for AI authorship\n- General principle: Copyright requires human authorship\n- Controversy: Can AI be an 'author' under Copyright Act?\n- DABUS Case (AI inventor) — not recognized in India\n\n**Infringement:**\n- Doing any act exclusively granted to copyright owner without authorization",
    "articles": [],
    "amendments": [
      "Copyright Amendment Act 2012 – Internet related provisions, performers' rights"
    ],
    "cases": [
      "Eastern Book Company v. D.B. Modak (2008) – Originality test for copyright",
      "R.G. Anand v. Delux Films (1978) – Idea-expression dichotomy"
    ],
    "quickRevision": "Copyright Act 1957. Protects: Literary, Dramatic, Musical, Artistic, Film, Sound. Duration: Author's life + 60 years. Fair dealing: Research, Criticism, News, Education. AI = No copyright (requires human authorship).",
    "mnemonics": "\"LDMAFS\" = Literary, Dramatic, Musical, Artistic, Film, Sound — 6 copyright subjects",
    "importanceScore": 7,
    "difficulty": "medium",
    "pyqIds": [
      "pyq_026"
    ],
    "flashcardIds": [
      "fc_058",
      "fc_059"
    ],
    "frequency": 3,
    "pyqYears": [
      2023,
      2024,
      2025
    ]
  },
  {
    "id": "patents",
    "title": "Patents",
    "unit": 3,
    "subtopics": [
      "Patents Act 1970",
      "Patentability",
      "Process vs Product Patent",
      "Compulsory Licensing",
      "Section 3(d)"
    ],
    "explanation": "A patent grants exclusive rights to an inventor for a new, useful, and non-obvious invention.",
    "detailed": "**Patent Law:**\n\n**Patents Act, 1970** (major amendment 2005 to comply with TRIPS)\n\n**Criteria for Patentability:**\n1. **Novel** – Not disclosed anywhere before filing\n2. **Inventive Step (Non-obvious)** – Not obvious to a person skilled in the art\n3. **Capable of Industrial Application** – Useful\n\n**What Cannot Be Patented (Sec. 3):**\n- Discoveries, scientific theories, mathematical methods\n- Mental acts, games, business methods\n- Computer programs per se\n- Aesthetic creations\n- **Sec. 3(d):** New form of a known substance that doesn't show enhanced efficacy (anti-evergreening)\n\n**Process Patent vs Product Patent:**\n| Process Patent | Product Patent |\n|---|---|\n| Only process of making is patented | The product itself is patented |\n| Others can make same product by different process | Nobody can make that product |\n| India had only process patents in pharma until 2005 | After TRIPS, product patents allowed |\n\n**Duration:** 20 years from filing date\n\n**Compulsory Licensing (Sec. 84):**\n- After 3 years of grant, CL can be sought if:\n  - Reasonable requirements of public not satisfied\n  - Not available at reasonable price\n  - Not worked in India\n- Example: Natco vs Bayer (Nexavar cancer drug, 2012) – First CL in India",
    "articles": [],
    "amendments": [
      "Patents (Amendment) Act 2005 – Allowed product patents; TRIPS compliance"
    ],
    "cases": [
      "Novartis AG v. Union of India (2013) – Sec. 3(d), Gleevec denied patent",
      "Natco Pharma v. Bayer (2012) – First compulsory license in India"
    ],
    "quickRevision": "Patents Act 1970. 3 criteria: Novel, Non-obvious, Industrial application. Sec 3(d) = no patent for new form of known substance. Duration = 20 years. Process vs Product patent. Compulsory License after 3 years.",
    "mnemonics": "\"NIN\" = Novel, Inventive step, Non-obvious (criteria); \"20 years protection\"",
    "importanceScore": 9,
    "difficulty": "medium",
    "pyqIds": [
      "pyq_025",
      "pyq_064"
    ],
    "flashcardIds": [
      "fc_060",
      "fc_061"
    ],
    "frequency": 5,
    "pyqYears": [
      2023,
      2024,
      2025
    ]
  },
  {
    "id": "geographical_indications",
    "title": "Geographical Indications (GI)",
    "unit": 3,
    "subtopics": [
      "GI Act 1999",
      "What is GI",
      "Examples",
      "WIPO and GI",
      "Traditional Knowledge"
    ],
    "explanation": "A Geographical Indication (GI) is a sign used on products that have a specific geographical origin and possess qualities, reputation or characteristics attributable to that origin.",
    "detailed": "**Geographical Indications:**\n\n**Geographical Indications of Goods (Registration & Protection) Act, 1999**\n\n**What is a GI?**\nA GI indicates a product originating from a particular geographical area. The product's quality, reputation, or characteristics are essentially attributable to that geographical origin.\n\n**Famous Indian GIs:**\n- Darjeeling Tea\n- Champagne (France) – protected worldwide\n- Basmati Rice (ongoing international dispute)\n- Kancheepuram Silk\n- Kolhapuri Chappal\n- Alphonso Mango (Ratnagiri)\n- Tirupati Laddu\n- Kashmir Pashmina\n- Assam Muga Silk\n- Mysore Silk\n\n**Registration:**\n- Authority: Geographical Indications Registry (Chennai)\n- Term: 10 years (renewable)\n- Who can apply: Producers, associations, statutory bodies, government\n\n**Protection:**\n- Prevents unauthorized use by those not from the region\n- No exclusive rights to any one producer (unlike TM)\n\n**WIPO and GI:**\n- Lisbon Agreement (1958) – Protected appellations of origin\n- Geneva Act of Lisbon Agreement (2015) – Extended protection to GIs\n- TRIPS Agreement – Art. 22-24 on GIs\n- India supports extension of GI protection to all products (opposed by USA, Australia)\n\n**Traditional Knowledge (TK):**\n- Knowledge of indigenous communities about plants, animals, processes\n- **TKDL (Traditional Knowledge Digital Library)** – India's database\n  - Documents Indian traditional knowledge in multiple languages\n  - Prevents biopiracy\n  - Linked to patent examination offices worldwide\n  - Example: Neem, Turmeric, Yoga poses documented",
    "articles": [],
    "amendments": [],
    "cases": [
      "Scotch Whisky Association v. Golden Bottling Ltd (2006) – GI protection"
    ],
    "quickRevision": "GI Act 1999. GI = product + geographical origin. Registration: Chennai, 10 yrs. Examples: Darjeeling Tea, Basmati, Kashmir Pashmina. TKDL = prevents biopiracy of traditional knowledge (Neem, Turmeric).",
    "mnemonics": "\"DKBT\" = Darjeeling Tea, Kashmir Pashmina, Basmati, Tirupati Laddu — famous GIs",
    "importanceScore": 10,
    "difficulty": "hard",
    "pyqIds": [
      "pyq_022",
      "pyq_024",
      "pyq_031",
      "pyq_063",
      "pyq_065",
      "pyq_066",
      "pyq_092",
      "pyq_097",
      "pyq_109",
      "pyq_130",
      "pyq_140"
    ],
    "flashcardIds": [
      "fc_062"
    ],
    "frequency": 19,
    "pyqYears": [
      2023,
      2024,
      2025
    ]
  },
  {
    "id": "e_commerce",
    "title": "E-Commerce",
    "unit": 4,
    "subtopics": [
      "Definition",
      "Types",
      "Authentication",
      "Payment Systems",
      "Consumer Protection"
    ],
    "explanation": "E-Commerce refers to buying and selling of goods/services over electronic networks, primarily the Internet.",
    "detailed": "**E-Commerce:**\n\n**Definition:**\nCommercial transactions conducted electronically over the Internet or other electronic networks.\n\n**Types of E-Commerce:**\n- **B2B (Business to Business):** Amazon Business, Alibaba (wholesale)\n- **B2C (Business to Consumer):** Amazon, Flipkart, Myntra\n- **C2C (Consumer to Consumer):** OLX, eBay\n- **G2C (Government to Consumer):** e-filing, e-services\n- **C2B (Consumer to Business):** Freelancing platforms\n\n**Authentication in E-Commerce:**\n- Digital Signatures (IT Act Sec. 5)\n- Electronic Signature (broader term under IT Act)\n- Two-factor authentication (2FA)\n- OTP-based authentication\n\n**Privacy in E-Commerce:**\n- Collection of personal data by e-commerce platforms\n- DPDPA 2023 compliance required\n- Cookie policies and consent\n- AI profiling restrictions\n\n**Payment Systems:**\n- UPI (Unified Payments Interface)\n- Net banking\n- Credit/Debit cards\n- Digital wallets (Paytm, PhonePe)\n- Cryptocurrency (not legal tender in India, regulated by PMLA)\n- Regulated by: Reserve Bank of India (Payment and Settlement Systems Act 2007)\n\n**Consumer Protection Act 2019:**\n- Covers e-commerce\n- Consumer Protection (E-Commerce) Rules 2020\n- Mandatory: Country of origin, price, return/refund policy, contact info\n- Prohibition: Unfair trade practices, fake reviews, misleading ads\n- National Consumer Disputes Redressal Commission (NCDRC)",
    "articles": [],
    "amendments": [
      "Consumer Protection (E-Commerce) Rules 2020"
    ],
    "cases": [],
    "quickRevision": "E-Commerce types: B2B, B2C, C2C, G2C. Authentication: Digital signatures, OTP, 2FA. Payment: UPI, Net banking, Wallets. CP Act 2019 + E-Commerce Rules 2020 = consumer protection. DPDPA 2023 for data privacy.",
    "mnemonics": "\"BBC-GC\" = B2B, B2C, C2C, G2C, C2B — E-commerce types",
    "importanceScore": 10,
    "difficulty": "hard",
    "pyqIds": [
      "pyq_030",
      "pyq_035",
      "pyq_036",
      "pyq_038",
      "pyq_041",
      "pyq_071",
      "pyq_102",
      "pyq_111",
      "pyq_115",
      "pyq_116"
    ],
    "flashcardIds": [
      "fc_063",
      "fc_064"
    ],
    "frequency": 21,
    "pyqYears": [
      2023,
      2024,
      2025
    ]
  },
  {
    "id": "e_contracts",
    "title": "E-Contracts",
    "unit": 4,
    "subtopics": [
      "Definition",
      "Types",
      "Validity",
      "Indian Contract Act 1872",
      "IT Act 2000"
    ],
    "explanation": "E-Contracts are contracts formed electronically, valid under IT Act 2000 read with Indian Contract Act 1872.",
    "detailed": "**E-Contracts:**\n\n**Definition:**\nA contract formed through electronic means — via email, websites, or other electronic communication.\n\n**Types of E-Contracts:**\n1. **Shrink-Wrap Contracts:** Terms inside software packaging; accepted when package opened\n2. **Click-Wrap Contracts:** Terms displayed on screen; user clicks 'I Agree' (most common)\n3. **Browse-Wrap Contracts:** Terms linked on website; browsing = acceptance (less enforceable)\n4. **Email Contracts:** Offer and acceptance via email\n5. **EDI (Electronic Data Interchange) Contracts:** B2B automated contracts\n\n**Essentials of Valid Contract (Indian Contract Act 1872):**\n1. **Offer and Acceptance** – Meeting of minds (consensus ad idem)\n2. **Consideration** – Something of value exchanged\n3. **Free Consent** – No coercion, fraud, misrepresentation, mistake, undue influence\n4. **Capacity** – Major, sound mind, not disqualified by law\n5. **Lawful Object** – Not forbidden by law\n6. **Not expressly void** – Not under Sections 24-30\n\n**IT Act Provisions:**\n- Sec. 10A: Contract formed electronically is valid\n- Sec. 11: Attribution of electronic records\n- Sec. 12: Acknowledgment of receipt\n- Sec. 13: Time and place of dispatch/receipt\n\n**When is Contract Formed?**\n- Offer + Acceptance both communicated electronically\n- Communication of acceptance = when it enters the originator's designated computer resource (Sec. 13)\n\n**Jurisdiction Issues:**\n- E-contracts may span multiple countries\n- Indian courts: Place where contract performed, or where defendant resides",
    "articles": [],
    "amendments": [],
    "cases": [],
    "quickRevision": "E-Contract Types: Shrink-wrap, Click-wrap (most common), Browse-wrap, Email, EDI. Valid if: Offer+Acceptance+Consideration+Free Consent+Capacity+Lawful object. Sec 10A IT Act = E-contract valid. Communication = enters designated computer.",
    "mnemonics": "\"SCBEE\" = Shrink-wrap, Click-wrap, Browse-wrap, Email, EDI — 5 types of e-contracts",
    "importanceScore": 6,
    "difficulty": "easy",
    "pyqIds": [],
    "flashcardIds": [
      "fc_065",
      "fc_066"
    ],
    "frequency": 0,
    "pyqYears": []
  },
  {
    "id": "professional_ethics",
    "title": "Professional Ethics",
    "unit": 4,
    "subtopics": [
      "Personal Ethics",
      "Business Ethics",
      "Professional Code of Conduct",
      "Conflict of Interest",
      "Clash of Ethics"
    ],
    "explanation": "Professional ethics refers to the personal and corporate standards of behaviour expected of professionals.",
    "detailed": "**Professional Ethics:**\n\n**Ethics:** The branch of philosophy that involves systematizing, defending, and recommending concepts of right and wrong conduct.\n\n**Personal Ethics:**\nValues and morals that guide individual behaviour:\n- Honesty and integrity\n- Accountability\n- Loyalty\n- Fairness\n- Compassion\n- Respect for others\n\n**Business Ethics:**\nApplication of ethical principles to business activities:\n- Corporate social responsibility\n- Fair trade practices\n- Consumer protection\n- Environmental responsibility\n- Anti-corruption\n- Whistleblower protection\n\n**Professional Ethics for IT Professionals:**\n1. Privacy protection of user data\n2. Security of systems\n3. Honesty in professional communication\n4. Avoiding conflicts of interest\n5. Respect for IP rights\n6. Non-maleficence (do no harm)\n\n**Professionalism:**\n- Competence in one's field\n- Adherence to professional standards\n- Continuing education\n- Professional associations (IEEE, ACM — Code of Ethics)\n\n**Conflict of Interest:**\n- When personal interests conflict with professional duties\n- Example: IT professional having stake in a vendor company they evaluate\n- Must be disclosed; recusal may be required\n\n**Clash of Ethics:**\n- Situations where two ethical principles conflict\n- Example: Duty of confidentiality vs. duty to disclose illegal activity\n- Whistleblowing dilemmas\n- Resolved by: Priority of principles, stakeholder analysis, consequence analysis\n\n**Codes of Professional Ethics:**\n- ACM (Association for Computing Machinery) Code\n- IEEE Code of Ethics\n- BCS (British Computer Society) Code of Conduct",
    "articles": [],
    "amendments": [],
    "cases": [],
    "quickRevision": "Professional Ethics = Personal + Business + Professional standards. Conflict of Interest = Personal vs Professional duties (must disclose). Clash of Ethics = 2 duties conflict. IEEE, ACM = professional ethics codes. Whistleblowing = ethical dilemma.",
    "mnemonics": "\"HALF\" = Honesty, Accountability, Loyalty, Fairness — core personal ethics",
    "importanceScore": 10,
    "difficulty": "hard",
    "pyqIds": [
      "pyq_037",
      "pyq_039",
      "pyq_040",
      "pyq_047",
      "pyq_048",
      "pyq_072",
      "pyq_073",
      "pyq_074",
      "pyq_098",
      "pyq_099",
      "pyq_100",
      "pyq_101",
      "pyq_113",
      "pyq_114",
      "pyq_117",
      "pyq_131"
    ],
    "flashcardIds": [
      "fc_067",
      "fc_068"
    ],
    "frequency": 33,
    "pyqYears": [
      2023,
      2024,
      2025
    ]
  }
];

// ============================================================
// PYQ DATABASE (142 questions across 2023, 2024, 2025)
// ============================================================
const PYQS = [
  {
    "question": "No person can be employed in factories or mines unless he is above the age of",
    "options": [
      "A) 12 years.",
      "B) 14 years",
      "C) 18 years.",
      "D) 20 years."
    ],
    "answer": "B",
    "explanation": "Correct answer is B) 14 years.",
    "unit": 1,
    "year": 2024,
    "source": "PYQ 2023 Set 1A, PYQ 2023 Set 1B, PYQ 2023 Set 2, PYQ 2023 Set 4, PYQ 2023 Backlog, PYQ 2024 Set 1",
    "years": [
      2023,
      2024
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 2",
      "PYQ 2023 Set 4",
      "PYQ 2023 Backlog",
      "PYQ 2024 Set 1"
    ],
    "id": "pyq_001",
    "topic": "goi_act_1935"
  },
  {
    "question": "Which portion of the Indian Constitution reflects the mind and ideals of its framers?",
    "options": [
      "A) Preamble",
      "B) Fundamental Rights",
      "C) Directive Principles",
      "D) Emergency Provisions"
    ],
    "answer": "A",
    "explanation": "Correct answer is A) Preamble.",
    "unit": 1,
    "year": 2024,
    "source": "PYQ 2023 Set 1A, PYQ 2023 Set 1B, PYQ 2023 Set 3, PYQ 2023 Set 4, PYQ 2024 Set 1",
    "years": [
      2023,
      2024
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 3",
      "PYQ 2023 Set 4",
      "PYQ 2024 Set 1"
    ],
    "id": "pyq_002",
    "topic": "secularism"
  },
  {
    "question": "Which of the following statements is correct?",
    "options": [
      "A) The Vice-President is impeached through a motion passed by half of the state legislatures",
      "B) The Vice-President is removed through a motion passed by Council of State and approved by House of People",
      "C) The Vice-President is the Supreme Commander of the Armed Forces",
      "D) The Vice-President is the sole authority who can impose National Emergency"
    ],
    "answer": "B",
    "explanation": "Correct answer is B) The Vice-President is removed through a motion passed by Council of State and approved by House of People.",
    "unit": 2,
    "year": 2025,
    "source": "PYQ 2023 Set 1A, PYQ 2024 Set 1, PYQ 2025 Set 2",
    "years": [
      2023,
      2024,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2024 Set 1",
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_003",
    "topic": "president"
  },
  {
    "question": "Which one of the Directive Principles is Gandhian?",
    "options": [
      "A) Equal pay for equal work for both men and women",
      "B) Organization of village Panchayats as effective units of local self-government",
      "C) Protection of workers, especially children",
      "D) None of the options"
    ],
    "answer": "B",
    "explanation": "Correct answer is B) Organization of village Panchayats as effective units of local self-government.",
    "unit": 1,
    "year": 2024,
    "source": "PYQ 2023 Set 1A, PYQ 2024 Set 1",
    "years": [
      2023,
      2024
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2024 Set 1"
    ],
    "id": "pyq_004",
    "topic": "dpsp"
  },
  {
    "question": "The Fundamental Rights:",
    "options": [
      "A) Were added by 42nd amendment",
      "B) Were added by 44th amendment",
      "C) Formed a part of original Constitution",
      "D) Were added by Parliament in 1952"
    ],
    "answer": "C",
    "explanation": "Correct answer is C) Formed a part of original Constitution.",
    "unit": 1,
    "year": 2025,
    "source": "PYQ 2023 Set 1A, PYQ 2023 Set 1B, PYQ 2023 Set 2, PYQ 2023 Set 3, PYQ 2023 Set 4, PYQ 2023 Backlog, PYQ 2024 Set 1, PYQ 2025 Set 1",
    "years": [
      2023,
      2024,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 2",
      "PYQ 2023 Set 3",
      "PYQ 2023 Set 4",
      "PYQ 2023 Backlog",
      "PYQ 2024 Set 1",
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_005",
    "topic": "fundamental_duties"
  },
  {
    "question": "We borrowed the Concept of Fundamental Duties from the:",
    "options": [
      "A) American Constitution",
      "B) Irish constitution",
      "C) Canadian Constitution",
      "D) USSR Constitution"
    ],
    "answer": "D",
    "explanation": "Correct answer is D) USSR Constitution.",
    "unit": 1,
    "year": 2024,
    "source": "PYQ 2023 Set 1A, PYQ 2023 Set 2, PYQ 2023 Backlog, PYQ 2024 Set 1",
    "years": [
      2023,
      2024
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2023 Set 2",
      "PYQ 2023 Backlog",
      "PYQ 2024 Set 1"
    ],
    "id": "pyq_006",
    "topic": "fundamental_duties"
  },
  {
    "question": "Article 13(2",
    "options": [
      "A) includes law amending the Constitution",
      "B) does not include a law amending the Constitution",
      "C) states that the State shall not make any law which takes away or abridges the fundamental rights",
      "D) none of the options."
    ],
    "answer": "C",
    "explanation": "Correct answer is C) states that the State shall not make any law which takes away or abridges the fundamental rights.",
    "unit": 1,
    "year": 2025,
    "source": "PYQ 2023 Set 1A, PYQ 2023 Set 2, PYQ 2023 Set 3, PYQ 2024 Set 1, PYQ 2025 Set 1, PYQ 2025 Set 2",
    "years": [
      2023,
      2024,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2023 Set 2",
      "PYQ 2023 Set 3",
      "PYQ 2024 Set 1",
      "PYQ 2025 Set 1",
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_007",
    "topic": "constitutional_remedies"
  },
  {
    "question": "Constitution of India was adopted on:",
    "options": [
      "A) 26th January, 1950",
      "B) 24th November 1950",
      "C) 15th August, 1947",
      "D) 26th November 1949"
    ],
    "answer": "D",
    "explanation": "Correct answer is D) 26th November 1949.",
    "unit": 1,
    "year": 2024,
    "source": "PYQ 2023 Set 1A, PYQ 2023 Set 1B, PYQ 2023 Set 3, PYQ 2023 Set 4, PYQ 2024 Set 1",
    "years": [
      2023,
      2024
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 3",
      "PYQ 2023 Set 4",
      "PYQ 2024 Set 1"
    ],
    "id": "pyq_008",
    "topic": "goi_act_1935"
  },
  {
    "question": "Which of the following is correctly matched?",
    "options": [
      "A) Republic: Head of the state is hereditary monarch.",
      "B) Sovereign: Constitution rests on the people’s will.",
      "C) Democratic: Constitution does not recognize legal supremacy of another country.",
      "D) Secular: State is without religion of its own."
    ],
    "answer": "D",
    "explanation": "Correct answer is D) Secular: State is without religion of its own..",
    "unit": 1,
    "year": 2025,
    "source": "PYQ 2023 Set 1A, PYQ 2023 Set 1B, PYQ 2023 Set 4, PYQ 2024 Set 1, PYQ 2025 Set 2",
    "years": [
      2023,
      2024,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 4",
      "PYQ 2024 Set 1",
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_009",
    "topic": "goi_act_1935"
  },
  {
    "question": "The Governor of a State is appointed by:",
    "options": [
      "A) The Prime Minister",
      "B) The President",
      "C) The President on the recommendation of the Central Council of Ministers headed by Prime Minister",
      "D) The President on the advice of the Chief Minister of the State"
    ],
    "answer": "C",
    "explanation": "Correct answer is C) The President on the recommendation of the Central Council of Ministers headed by Prime Minister.",
    "unit": 2,
    "year": 2025,
    "source": "PYQ 2023 Set 1A, PYQ 2023 Set 1B, PYQ 2023 Set 2, PYQ 2023 Set 4, PYQ 2023 Backlog, PYQ 2024 Set 1, PYQ 2025 Set 1, PYQ 2025 Set 2",
    "years": [
      2023,
      2024,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 2",
      "PYQ 2023 Set 4",
      "PYQ 2023 Backlog",
      "PYQ 2024 Set 1",
      "PYQ 2025 Set 1",
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_010",
    "topic": "president"
  },
  {
    "question": "President of India can be impeached for",
    "options": [
      "A) Violation of Constitution of India",
      "B) Violation of International Obligation",
      "C) Violation of Legal Rights",
      "D) All of the options"
    ],
    "answer": "A",
    "explanation": "Correct answer is A) Violation of Constitution of India.",
    "unit": 2,
    "year": 2024,
    "source": "PYQ 2023 Set 1A, PYQ 2024 Set 1",
    "years": [
      2023,
      2024
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2024 Set 1"
    ],
    "id": "pyq_011",
    "topic": "president"
  },
  {
    "question": "Chief Minister of a State is responsible to",
    "options": [
      "A) Prime Minister",
      "B) Rajya Sabha",
      "C) Legislative Assembly",
      "D) Governor"
    ],
    "answer": "C",
    "explanation": "Correct answer is C) Legislative Assembly.",
    "unit": 2,
    "year": 2025,
    "source": "PYQ 2023 Set 1A, PYQ 2023 Set 1B, PYQ 2023 Set 2, PYQ 2023 Set 4, PYQ 2024 Set 1, PYQ 2025 Set 1",
    "years": [
      2023,
      2024,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 2",
      "PYQ 2023 Set 4",
      "PYQ 2024 Set 1",
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_012",
    "topic": "president"
  },
  {
    "question": "Formally all the executive powers of the Union Government are vested in",
    "options": [
      "A) The President of India",
      "B) The Cabinet Ministers only",
      "C) The Prime Minister of India",
      "D) The Union Council of Ministers"
    ],
    "answer": "A",
    "explanation": "Correct answer is A) The President of India.",
    "unit": 2,
    "year": 2024,
    "source": "PYQ 2023 Set 1A, PYQ 2023 Backlog, PYQ 2024 Set 1",
    "years": [
      2023,
      2024
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2023 Backlog",
      "PYQ 2024 Set 1"
    ],
    "id": "pyq_013",
    "topic": "president"
  },
  {
    "question": "Which of the following is not a qualification for being a member of Parliament?",
    "options": [
      "A) Must be a graduate with 55% of marks",
      "B) Must be an Indian citizen",
      "C) Must be minimum of 25 years of age",
      "D) Must not hold any office of profit"
    ],
    "answer": "A",
    "explanation": "Correct answer is A) Must be a graduate with 55% of marks.",
    "unit": 2,
    "year": 2025,
    "source": "PYQ 2023 Set 1A, PYQ 2024 Set 1, PYQ 2025 Set 2",
    "years": [
      2023,
      2024,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2024 Set 1",
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_014",
    "topic": "president"
  },
  {
    "question": "The final authority to interpret the constitution",
    "options": [
      "A) Parliament",
      "B) Supreme Court",
      "C) Attorney General",
      "D) High Court"
    ],
    "answer": "B",
    "explanation": "Correct answer is B) Supreme Court.",
    "unit": 2,
    "year": 2024,
    "source": "PYQ 2023 Set 1A, PYQ 2024 Set 1",
    "years": [
      2023,
      2024
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2024 Set 1"
    ],
    "id": "pyq_015",
    "topic": "national_emergency"
  },
  {
    "question": "Who administers the oath of office to the President?",
    "options": [
      "A) The Prime Minister 18",
      "B) The Vice-President",
      "C) The Chief Election Commissioner",
      "D) The Chief-Justice of India"
    ],
    "answer": "D",
    "explanation": "Correct answer is D) The Chief-Justice of India.",
    "unit": 2,
    "year": 2024,
    "source": "PYQ 2023 Set 1A, PYQ 2023 Set 3, PYQ 2024 Set 1",
    "years": [
      2023,
      2024
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2023 Set 3",
      "PYQ 2024 Set 1"
    ],
    "id": "pyq_016",
    "topic": "president"
  },
  {
    "question": "How many members of Rajya Sabha are nominated by the President of India?",
    "options": [
      "A) 2",
      "B) 12",
      "C) 10",
      "D) 15"
    ],
    "answer": "B",
    "explanation": "Correct answer is B) 12.",
    "unit": 2,
    "year": 2024,
    "source": "PYQ 2023 Set 1A, PYQ 2023 Set 1B, PYQ 2023 Set 2, PYQ 2023 Set 4, PYQ 2024 Set 1",
    "years": [
      2023,
      2024
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 2",
      "PYQ 2023 Set 4",
      "PYQ 2024 Set 1"
    ],
    "id": "pyq_017",
    "topic": "president"
  },
  {
    "question": "The ordinance may be promulgated by the President of India when",
    "options": [
      "A) The National Emergency is in force",
      "B) There is armed rebellion",
      "C) The houses of Parliament is not in session",
      "D) None of the options"
    ],
    "answer": "C",
    "explanation": "Correct answer is C) The houses of Parliament is not in session.",
    "unit": 2,
    "year": 2024,
    "source": "PYQ 2023 Set 1A, PYQ 2024 Set 1",
    "years": [
      2023,
      2024
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2024 Set 1"
    ],
    "id": "pyq_018",
    "topic": "president"
  },
  {
    "question": "Who is the ex-officio chairman of the Council of State?",
    "options": [
      "A) President of India",
      "B) Vice-President of India",
      "C) Prime Minister",
      "D) Minister for Parliamentary affairs"
    ],
    "answer": "B",
    "explanation": "Correct answer is B) Vice-President of India.",
    "unit": 2,
    "year": 2025,
    "source": "PYQ 2023 Set 1A, PYQ 2023 Set 3, PYQ 2024 Set 1, PYQ 2025 Set 1",
    "years": [
      2023,
      2024,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2023 Set 3",
      "PYQ 2024 Set 1",
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_019",
    "topic": "president"
  },
  {
    "question": "Which section of IT Act was invalidated by Supreme Court of India?",
    "options": [
      "A) Section 66F",
      "B) Section 66B",
      "C) Section 66D",
      "D) Section 66A"
    ],
    "answer": "D",
    "explanation": "Correct answer is D) Section 66A.",
    "unit": 3,
    "year": 2025,
    "source": "PYQ 2023 Set 1A, PYQ 2023 Set 3, PYQ 2023 Backlog, PYQ 2024 Set 1, PYQ 2025 Set 1",
    "years": [
      2023,
      2024,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2023 Set 3",
      "PYQ 2023 Backlog",
      "PYQ 2024 Set 1",
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_020",
    "topic": "it_act_2000"
  },
  {
    "question": "The act of attempting to acquire information such as usernames, passwords, and credit card details by masquerading as a trustworthy entity is called:",
    "options": [
      "A) Spamming",
      "B) Phishing",
      "C) Email bombing",
      "D) Cyberstalking"
    ],
    "answer": "B",
    "explanation": "Phishing is the fraudulent practice of sending emails or messages purporting to be from reputable companies in order to induce individuals to reveal personal information, such as passwords and credit card numbers.",
    "unit": 3,
    "year": 2025,
    "source": "PYQ 2023 Set 1A, PYQ 2023 Set 1B, PYQ 2023 Set 2, PYQ 2023 Set 4, PYQ 2024 Set 1, PYQ 2025 Set 2",
    "years": [
      2023,
      2024,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 2",
      "PYQ 2023 Set 4",
      "PYQ 2024 Set 1",
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_021",
    "topic": "it_act_2000"
  },
  {
    "question": "The practice of forging a return address on an e-mail so that the recipient is fooled into revealing private information is termed?",
    "options": [
      "A) hacking",
      "B) cracking",
      "C) dumpster diving",
      "D) spoofing"
    ],
    "answer": "D",
    "explanation": "Email spoofing is the creation of email messages with a forged sender address, designed to mislead the recipient into thinking the message originated from a trusted source.",
    "unit": 3,
    "year": 2024,
    "source": "PYQ 2023 Set 1A, PYQ 2023 Set 1B, PYQ 2023 Set 2, PYQ 2023 Set 4, PYQ 2024 Set 1",
    "years": [
      2023,
      2024
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 2",
      "PYQ 2023 Set 4",
      "PYQ 2024 Set 1"
    ],
    "id": "pyq_022",
    "topic": "geographical_indications"
  },
  {
    "question": "Bandwidth Theft refers to:",
    "options": [
      "A) process of ’befriending’ a young person online...",
      "B) amount of data transferred from a web site to a user’s computer. When you view a web page, you are using that site’s bandwidth to display the files",
      "C) a cyber-crime in which a target is contacted through electronic means by someone posing as a legitimate institution...",
      "D) none of the options"
    ],
    "answer": "B",
    "explanation": "Correct answer is B) amount of data transferred from a web site to a user’s computer. When you view a web page, you are using that site’s bandwidth to display the files.",
    "unit": 3,
    "year": 2024,
    "source": "PYQ 2023 Set 1A, PYQ 2024 Set 1",
    "years": [
      2023,
      2024
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2024 Set 1"
    ],
    "id": "pyq_023",
    "topic": "it_act_2000"
  },
  {
    "question": "Using others' passwords or electronic signatures etc. is punishable with up to three years imprisonment or a fine of one lakh rupees or both. This offense is a form of:",
    "options": [
      "A) Denial of Service Attack",
      "B) Cyber Stalking",
      "C) Hacking",
      "D) Identity theft"
    ],
    "answer": "D",
    "explanation": "Section 66C of the IT Act prescribes punishment for identity theft, which includes fraudulently using another person's password, digital signature, or unique identification feature.",
    "unit": 3,
    "year": 2024,
    "source": "PYQ 2023 Set 1A, PYQ 2023 Set 1B, PYQ 2023 Set 3, PYQ 2023 Set 4, PYQ 2024 Set 1",
    "years": [
      2023,
      2024
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 3",
      "PYQ 2023 Set 4",
      "PYQ 2024 Set 1"
    ],
    "id": "pyq_024",
    "topic": "geographical_indications"
  },
  {
    "question": "Patent is granted for",
    "options": [
      "A) 10 years",
      "B) 20 years",
      "C) 15 years",
      "D) Life time"
    ],
    "answer": "B",
    "explanation": "Correct answer is B) 20 years.",
    "unit": 3,
    "year": 2025,
    "source": "PYQ 2023 Set 1A, PYQ 2023 Set 2, PYQ 2024 Set 1, PYQ 2025 Set 1",
    "years": [
      2023,
      2024,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2023 Set 2",
      "PYQ 2024 Set 1",
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_025",
    "topic": "patents"
  },
  {
    "question": "Copyright is not available to which of the following work?",
    "options": [
      "A) Original Literary Work",
      "B) Original Dramatic work",
      "C) Medicine",
      "D) Cinematography films"
    ],
    "answer": "C",
    "explanation": "Correct answer is C) Medicine.",
    "unit": 3,
    "year": 2025,
    "source": "PYQ 2023 Set 1A, PYQ 2023 Set 1B, PYQ 2023 Set 3, PYQ 2023 Set 4, PYQ 2023 Backlog, PYQ 2024 Set 1, PYQ 2025 Set 2",
    "years": [
      2023,
      2024,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 3",
      "PYQ 2023 Set 4",
      "PYQ 2023 Backlog",
      "PYQ 2024 Set 1",
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_026",
    "topic": "copyright"
  },
  {
    "question": "Which of the following is a function of trademark?",
    "options": [
      "A) It identifies the goods / or services and its origin",
      "B) It guarantees its unchanged quality",
      "C) It advertises the goods/services",
      "D) All of the options."
    ],
    "answer": "D",
    "explanation": "Correct answer is D) All of the options..",
    "unit": 3,
    "year": 2024,
    "source": "PYQ 2023 Set 1A, PYQ 2024 Set 1",
    "years": [
      2023,
      2024
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2024 Set 1"
    ],
    "id": "pyq_027",
    "topic": "trademark"
  },
  {
    "question": "Intellectual Property Rights (IPR) protect the use of information and ideas that are of",
    "options": [
      "A) Ethical value",
      "B) Moral value",
      "C) Social value",
      "D) Commercial value"
    ],
    "answer": "D",
    "explanation": "Correct answer is D) Commercial value.",
    "unit": 3,
    "year": 2025,
    "source": "PYQ 2023 Set 1A, PYQ 2023 Set 1B, PYQ 2023 Set 3, PYQ 2023 Set 4, PYQ 2023 Backlog, PYQ 2024 Set 1, PYQ 2025 Set 2",
    "years": [
      2023,
      2024,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 3",
      "PYQ 2023 Set 4",
      "PYQ 2023 Backlog",
      "PYQ 2024 Set 1",
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_028",
    "topic": "intellectual_property"
  },
  {
    "question": "The objective of the Information Technology Act 2000 is to",
    "options": [
      "A) To provide legal recognition for transactions carried out by means of electronic data",
      "B) Interchange and other means of electronic communication",
      "C) To encourage alternatives to paper-based methods of communication",
      "D) All of the options"
    ],
    "answer": "D",
    "explanation": "Correct answer is D) All of the options.",
    "unit": 3,
    "year": 2024,
    "source": "PYQ 2023 Set 1A, PYQ 2024 Set 1",
    "years": [
      2023,
      2024
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2024 Set 1"
    ],
    "id": "pyq_029",
    "topic": "it_act_2000"
  },
  {
    "question": "Which type of e-commerce focuses on consumers dealing directly with each other?",
    "options": [
      "A) C2C",
      "B) B2B",
      "C) B2C",
      "D) C2B"
    ],
    "answer": "A",
    "explanation": "C2C (Consumer-to-Consumer) e-commerce platforms like eBay or OLX facilitate direct transactions between individual consumers.",
    "unit": 4,
    "year": 2024,
    "source": "PYQ 2023 Set 1A, PYQ 2023 Set 3, PYQ 2024 Set 1",
    "years": [
      2023,
      2024
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2023 Set 3",
      "PYQ 2024 Set 1"
    ],
    "id": "pyq_030",
    "topic": "e_commerce"
  },
  {
    "question": "Which is not a type of E-Contract?",
    "options": [
      "A) Click wrap",
      "B) Bubble wrap",
      "C) Shrink wrap",
      "D) Browse wrap"
    ],
    "answer": "B",
    "explanation": "Correct answer is B) Bubble wrap.",
    "unit": 3,
    "year": 2025,
    "source": "PYQ 2023 Set 1A, PYQ 2023 Set 3, PYQ 2024 Set 1, PYQ 2025 Set 1",
    "years": [
      2023,
      2024,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2023 Set 3",
      "PYQ 2024 Set 1",
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_031",
    "topic": "geographical_indications"
  },
  {
    "question": "Which of the following section gives the essentials to a contract?",
    "options": [
      "A) Section 10 of Indian Contract Act",
      "B) Section 10A of IT Act",
      "C) Section 10 of Civil Procedure Act",
      "D) Section 10 of Transfer of Property Act"
    ],
    "answer": "A",
    "explanation": "Correct answer is A) Section 10 of Indian Contract Act.",
    "unit": 3,
    "year": 2025,
    "source": "PYQ 2023 Set 1A, PYQ 2023 Set 3, PYQ 2024 Set 1, PYQ 2025 Set 1",
    "years": [
      2023,
      2024,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2023 Set 3",
      "PYQ 2024 Set 1",
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_032",
    "topic": "intermediary_liability"
  },
  {
    "question": "Which of the following is not a feature of e-commerce?",
    "options": [
      "A) Technology Mediated",
      "B) Universality",
      "C) Intercommunication",
      "D) Non- delivery of Information"
    ],
    "answer": "D",
    "explanation": "Correct answer is D) Non- delivery of Information.",
    "unit": 3,
    "year": 2025,
    "source": "PYQ 2023 Set 1A, PYQ 2023 Set 1B, PYQ 2023 Set 2, PYQ 2023 Set 3, PYQ 2023 Set 4, PYQ 2023 Backlog, PYQ 2024 Set 1, PYQ 2025 Set 1",
    "years": [
      2023,
      2024,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 2",
      "PYQ 2023 Set 3",
      "PYQ 2023 Set 4",
      "PYQ 2023 Backlog",
      "PYQ 2024 Set 1",
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_033",
    "topic": "intellectual_property"
  },
  {
    "question": "Specific Performance of the contract is dealt under:",
    "options": [
      "A) Specific Relief Act",
      "B) Indian Contract Act",
      "C) IT Act",
      "D) Civil Procedure Code"
    ],
    "answer": "A",
    "explanation": "Correct answer is A) Specific Relief Act.",
    "unit": 3,
    "year": 2025,
    "source": "PYQ 2023 Set 1A, PYQ 2023 Set 1B, PYQ 2023 Set 2, PYQ 2023 Set 4, PYQ 2023 Backlog, PYQ 2024 Set 1, PYQ 2025 Set 2",
    "years": [
      2023,
      2024,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 2",
      "PYQ 2023 Set 4",
      "PYQ 2023 Backlog",
      "PYQ 2024 Set 1",
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_034",
    "topic": "intellectual_property"
  },
  {
    "question": "What do you mean by Hazard?",
    "options": [
      "A) The probability of a substance, person, activity, or process causing harm",
      "B) The potential of a substance, person, activity, or process to cause harm",
      "C) The prospect of a substance person, activity or process causing harm",
      "D) The likelihood of a substance, person, activity, or process causing harm"
    ],
    "answer": "B",
    "explanation": "A hazard is a source or a situation with the potential for harm in terms of human injury or ill health, damage to property, or damage to the environment.",
    "unit": 4,
    "year": 2024,
    "source": "PYQ 2023 Set 1A, PYQ 2024 Set 1",
    "years": [
      2023,
      2024
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2024 Set 1"
    ],
    "id": "pyq_035",
    "topic": "e_commerce"
  },
  {
    "question": "What does e-waste stand for?",
    "options": [
      "A) Environmental waste",
      "B) Equipment waste",
      "C) Electronic waste",
      "D) Engineering waste"
    ],
    "answer": "C",
    "explanation": "Correct answer is C) Electronic waste.",
    "unit": 4,
    "year": 2024,
    "source": "PYQ 2023 Set 1A, PYQ 2023 Set 2, PYQ 2024 Set 1",
    "years": [
      2023,
      2024
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2023 Set 2",
      "PYQ 2024 Set 1"
    ],
    "id": "pyq_036",
    "topic": "e_commerce"
  },
  {
    "question": "A written statement of policies and principles that guides the behavior of all employees is called:",
    "options": [
      "A) Word of Ethics",
      "B) Company’s Code",
      "C) Code of Ethics",
      "D) Ethics and Behavior code"
    ],
    "answer": "C",
    "explanation": "Correct answer is C) Code of Ethics.",
    "unit": 4,
    "year": 2025,
    "source": "PYQ 2023 Set 1A, PYQ 2023 Set 2, PYQ 2024 Set 1, PYQ 2025 Set 1",
    "years": [
      2023,
      2024,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2023 Set 2",
      "PYQ 2024 Set 1",
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_037",
    "topic": "professional_ethics"
  },
  {
    "question": "Promoting what is good for oneself without caring societal relationships can be termed",
    "options": [
      "A) Ethical Egoism",
      "B) Self control",
      "C) Self Esteem",
      "D) Moral Authority 33"
    ],
    "answer": "A",
    "explanation": "Correct answer is A) Ethical Egoism.",
    "unit": 4,
    "year": 2025,
    "source": "PYQ 2023 Set 1A, PYQ 2023 Set 2, PYQ 2024 Set 1, PYQ 2025 Set 1",
    "years": [
      2023,
      2024,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2023 Set 2",
      "PYQ 2024 Set 1",
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_038",
    "topic": "e_commerce"
  },
  {
    "question": "An activity of a business firm that promotes philanthropic concerns is identified as part of their:",
    "options": [
      "A) Profit enhancing plan",
      "B) Employee welfare plan",
      "C) Corporate Social Responsibility",
      "D) Marketing Plan"
    ],
    "answer": "C",
    "explanation": "Corporate Social Responsibility (CSR) is a business model in which companies make a concerted effort to operate in ways that enhance rather than degrade society and the environment, including philanthropic initiatives.",
    "unit": 4,
    "year": 2025,
    "source": "PYQ 2023 Set 1A, PYQ 2023 Set 2, PYQ 2023 Backlog, PYQ 2024 Set 1, PYQ 2025 Set 1",
    "years": [
      2023,
      2024,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2023 Set 2",
      "PYQ 2023 Backlog",
      "PYQ 2024 Set 1",
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_039",
    "topic": "professional_ethics"
  },
  {
    "question": "Ethics -",
    "options": [
      "A) Are moral principles that govern a person’s behavior or the conducting of an activity.",
      "B) Any occupation/job/vocation that requires advanced expertise, self-regulation and concerned service to the public good.",
      "C) Is a the state or quality of being immoral.",
      "D) Is a system of rules which a particular country or community recognizes as regulating the actions of its members..."
    ],
    "answer": "A",
    "explanation": "Correct answer is A) Are moral principles that govern a person’s behavior or the conducting of an activity..",
    "unit": 4,
    "year": 2025,
    "source": "PYQ 2023 Set 1A, PYQ 2023 Set 1B, PYQ 2023 Set 3, PYQ 2023 Set 4, PYQ 2023 Backlog, PYQ 2024 Set 1, PYQ 2025 Set 1, PYQ 2025 Set 2",
    "years": [
      2023,
      2024,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 3",
      "PYQ 2023 Set 4",
      "PYQ 2023 Backlog",
      "PYQ 2024 Set 1",
      "PYQ 2025 Set 1",
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_040",
    "topic": "professional_ethics"
  },
  {
    "question": "Moral autonomy is defined as -",
    "options": [
      "A) Moral principles that govern a person’s behavior or the conducting of an activity.",
      "B) The status of a professional which implies certain attitudes or typical qualities that re expected of a professional.",
      "C) The situations in which moral reasons come into conflict.",
      "D) Decisions and actions exercised on the basis of moral concern for other people and recognition of good moral reasons."
    ],
    "answer": "D",
    "explanation": "Correct answer is D) Decisions and actions exercised on the basis of moral concern for other people and recognition of good moral reasons..",
    "unit": 4,
    "year": 2025,
    "source": "PYQ 2023 Set 1A, PYQ 2023 Set 3, PYQ 2023 Backlog, PYQ 2024 Set 1, PYQ 2025 Set 1",
    "years": [
      2023,
      2024,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2023 Set 3",
      "PYQ 2023 Backlog",
      "PYQ 2024 Set 1",
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_041",
    "topic": "e_commerce"
  },
  {
    "question": "How long did the Constituent Assembly take to finally pass the Constitution?",
    "options": [
      "A) About 6 months in 1949",
      "B) About 2 years since Aug 15, 1947",
      "C) Exactly a year since Nov 26, 1948",
      "D) About 3 years since Dec 9, 1946"
    ],
    "answer": "D",
    "explanation": "Correct answer is D) About 3 years since Dec 9, 1946.",
    "unit": 1,
    "year": 2025,
    "source": "PYQ 2023 Set 1A, PYQ 2023 Set 1B, PYQ 2023 Set 3, PYQ 2023 Set 4, PYQ 2024 Set 1, PYQ 2025 Set 1",
    "years": [
      2023,
      2024,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 3",
      "PYQ 2023 Set 4",
      "PYQ 2024 Set 1",
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_042",
    "topic": "constituent_assembly"
  },
  {
    "question": "Part II of the Constitution deals with:",
    "options": [
      "A) The Union and its Territory",
      "B) Citizenship",
      "C) Tribunals",
      "D) Elections"
    ],
    "answer": "B",
    "explanation": "Correct answer is B) Citizenship.",
    "unit": 1,
    "year": 2024,
    "source": "PYQ 2023 Set 1A, PYQ 2024 Set 1",
    "years": [
      2023,
      2024
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2024 Set 1"
    ],
    "id": "pyq_043",
    "topic": "goi_act_1935"
  },
  {
    "question": "The President can dissolve Lok Sabha at the advice/request of whom of the following before the completion of the tenure?",
    "options": [
      "A) At the written request of the members",
      "B) At the advice of the Prime Minister",
      "C) At the written request of the Speaker of the Lok Sabha",
      "D) At the advice of the Vice-President"
    ],
    "answer": "B",
    "explanation": "Correct answer is B) At the advice of the Prime Minister.",
    "unit": 2,
    "year": 2025,
    "source": "PYQ 2023 Set 1A, PYQ 2024 Set 1, PYQ 2025 Set 2",
    "years": [
      2023,
      2024,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2024 Set 1",
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_044",
    "topic": "president"
  },
  {
    "question": "Data theft includes:",
    "options": [
      "A) unauthorized attempts to bypass the security mechanisms of an information system or network.",
      "B) use of information and communication technologies to support hostile behaviour",
      "C) form of fraud or cheating of another persons’ identity",
      "D) without the permission of the person who is in charge of the computer, to down- load, copy or extract any data, computer data base or information from computer."
    ],
    "answer": "D",
    "explanation": "Correct answer is D) without the permission of the person who is in charge of the computer, to down- load, copy or extract any data, computer data base or information from computer..",
    "unit": 3,
    "year": 2025,
    "source": "PYQ 2023 Set 1A, PYQ 2023 Set 3, PYQ 2024 Set 1, PYQ 2025 Set 2",
    "years": [
      2023,
      2024,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2023 Set 3",
      "PYQ 2024 Set 1",
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_045",
    "topic": "dpdpa_2023"
  },
  {
    "question": "Which of the following is not a remedy for infringement of patent?",
    "options": [
      "A) Injunction",
      "B) Damages",
      "C) Asking the infringer to do community service",
      "D) Accounts of profit"
    ],
    "answer": "C",
    "explanation": "Correct answer is C) Asking the infringer to do community service.",
    "unit": 3,
    "year": 2024,
    "source": "PYQ 2023 Set 1A, PYQ 2023 Set 1B, PYQ 2023 Set 2, PYQ 2023 Set 4, PYQ 2023 Backlog, PYQ 2024 Set 1",
    "years": [
      2023,
      2024
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 2",
      "PYQ 2023 Set 4",
      "PYQ 2023 Backlog",
      "PYQ 2024 Set 1"
    ],
    "id": "pyq_046",
    "topic": "trademark"
  },
  {
    "question": "Consider the following statements:\nI) Every promise is an agreement.\nII) Every agreement is a contract.\nIII) A contract which ceases to be enforceable by law becomes void.\nIV) A minor who is supplied necessaries is personally liable to pay for them.\nWhich of the statements given above are correct?",
    "options": [
      "A) I, II and III.",
      "B) I and II only.",
      "C) II, III and IV.",
      "D) I and III only."
    ],
    "answer": "D",
    "explanation": "Under the Indian Contract Act 1872, every promise/set of promises is an agreement (I). An agreement is only a contract if enforceable by law (so II is false). A contract that ceases to be enforceable becomes void (III). A minor's estate is liable for necessaries, but the minor is not personally liable (so IV is false). Thus, I and III are correct.",
    "unit": 4,
    "year": 2025,
    "source": "PYQ 2023 Set 1A, PYQ 2023 Set 1B, PYQ 2023 Set 2, PYQ 2023 Set 4, PYQ 2024 Set 1, PYQ 2025 Set 2",
    "years": [
      2023,
      2024,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 2",
      "PYQ 2023 Set 4",
      "PYQ 2024 Set 1",
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_047",
    "topic": "professional_ethics"
  },
  {
    "question": "A situation in which an engineer's loyalty and obligations may be compromised because of self-interests or other loyalties and obligations is called:",
    "options": [
      "A) Interaction rules",
      "B) Conflict of interest",
      "C) Concern of interest",
      "D) Conceptual issue"
    ],
    "answer": "B",
    "explanation": "A conflict of interest arises when a professional's personal interest or obligations to another entity compete or conflict with their professional duty to a client or employer.",
    "unit": 4,
    "year": 2025,
    "source": "PYQ 2023 Set 1A, PYQ 2024 Set 1, PYQ 2025 Set 1",
    "years": [
      2023,
      2024,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1A",
      "PYQ 2024 Set 1",
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_048",
    "topic": "professional_ethics"
  },
  {
    "question": "The right to move the ____________ for the enforcement of Fundamental Rights is itself a guaranteed Fundamental Right.",
    "options": [
      "A) High court",
      "B) Supreme court",
      "C) Quasi-Judicial",
      "D) Subordinate court"
    ],
    "answer": "B",
    "explanation": "Article 32 of the Indian Constitution guarantees the right to move the Supreme Court by appropriate proceedings for the enforcement of Fundamental Rights, making the remedy itself a Fundamental Right.",
    "unit": 1,
    "year": 2023,
    "source": "PYQ 2023 Set 1B, PYQ 2023 Set 4",
    "years": [
      2023
    ],
    "sources": [
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 4"
    ],
    "id": "pyq_049",
    "topic": "right_to_privacy"
  },
  {
    "question": "In which among the following parts of Constitution of India are enshrined the Funda- mental Duties?",
    "options": [
      "A) Part III",
      "B) Part IIIA",
      "C) Part IVA",
      "D) Part IV"
    ],
    "answer": "C",
    "explanation": "Correct answer is C) Part IVA.",
    "unit": 1,
    "year": 2025,
    "source": "PYQ 2023 Set 1B, PYQ 2023 Set 2, PYQ 2023 Set 4, PYQ 2023 Backlog, PYQ 2025 Set 1",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 2",
      "PYQ 2023 Set 4",
      "PYQ 2023 Backlog",
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_050",
    "topic": "goi_act_1935"
  },
  {
    "question": "Which of the following statements are true?\n1) Constitution of India does not accept strict separation of power\n2) Constitution of India does accept strict separation of power\n3) Constitution of India prescribes for independent judiciary\n4) Preamble of the Indian Constitution is enforceable in the court of law",
    "options": [
      "A) 1, 3 and 4",
      "B) 1 and 3",
      "C) 1, 4 and 2",
      "D) 1, 2 and 4"
    ],
    "answer": "B",
    "explanation": "India does not accept strict separation of powers since the executive is a part of the legislature (1). However, the Constitution explicitly prescribes an independent judiciary (3). The Preamble is non-enforceable in courts. Thus, 1 and 3 are true.",
    "unit": 1,
    "year": 2023,
    "source": "PYQ 2023 Set 1B, PYQ 2023 Set 4",
    "years": [
      2023
    ],
    "sources": [
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 4"
    ],
    "id": "pyq_051",
    "topic": "goi_act_1935"
  },
  {
    "question": "Justice, social, economic and political’ is enshrined in:",
    "options": [
      "A) Fundamental Rights in the Constitution of India 4",
      "B) Writs issued by the Supreme Court of India",
      "C) Preamble to the Constitution of India",
      "D) Directive Principle of State Policy taken into account making enactments."
    ],
    "answer": "C",
    "explanation": "Correct answer is C) Preamble to the Constitution of India.",
    "unit": 1,
    "year": 2025,
    "source": "PYQ 2023 Set 1B, PYQ 2023 Set 4, PYQ 2025 Set 2",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 4",
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_052",
    "topic": "preamble"
  },
  {
    "question": "The concept of Directive Principles has been borrowed from:",
    "options": [
      "A) Irish Constitution",
      "B) Canadian Constitution",
      "C) Russian Constitution American Constitution 3"
    ],
    "answer": "A",
    "explanation": "Correct answer is A) Irish Constitution.",
    "unit": 1,
    "year": 2025,
    "source": "PYQ 2023 Set 1B, PYQ 2023 Set 4, PYQ 2025 Set 2",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 4",
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_053",
    "topic": "dpsp"
  },
  {
    "question": "A Presidential proclamation can remain in force for:",
    "options": [
      "A) Three months",
      "B) Two months",
      "C) Six months",
      "D) Till the President revokes it"
    ],
    "answer": "C",
    "explanation": "Correct answer is C) Six months.",
    "unit": 1,
    "year": 2023,
    "source": "PYQ 2023 Set 1B, PYQ 2023 Set 3, PYQ 2023 Set 4",
    "years": [
      2023
    ],
    "sources": [
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 3",
      "PYQ 2023 Set 4"
    ],
    "id": "pyq_054",
    "topic": "constitutional_history"
  },
  {
    "question": "When a financial emergency is proclaimed",
    "options": [
      "A) Union budget will not be presented",
      "B) Salaries and allowances of any class of employees may be reduced",
      "C) Repayment of government debts will stop",
      "D) Payment of salaries to public servants will be postponed"
    ],
    "answer": "B",
    "explanation": "Correct answer is B) Salaries and allowances of any class of employees may be reduced.",
    "unit": 1,
    "year": 2025,
    "source": "PYQ 2023 Set 1B, PYQ 2023 Set 4, PYQ 2025 Set 1",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 4",
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_055",
    "topic": "preamble"
  },
  {
    "question": "The Indian President is",
    "options": [
      "A) Head of the State",
      "B) Head of the Government",
      "C) De facto Head of the Parliament",
      "D) De facto Head of the Coast Guard"
    ],
    "answer": "A",
    "explanation": "Correct answer is A) Head of the State.",
    "unit": 2,
    "year": 2025,
    "source": "PYQ 2023 Set 1B, PYQ 2023 Set 3, PYQ 2023 Set 4, PYQ 2025 Set 1",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 3",
      "PYQ 2023 Set 4",
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_056",
    "topic": "president"
  },
  {
    "question": "Which of the following is not a ground for disqualifying a member of Parliament?",
    "options": [
      "A) If he is convicted and sentenced for 10 years imprisonment",
      "B) If he holds an office of profit",
      "C) If he voluntarily gives up the citizenship of India",
      "D) If he earns money from selling of any books"
    ],
    "answer": "D",
    "explanation": "Correct answer is D) If he earns money from selling of any books.",
    "unit": 2,
    "year": 2025,
    "source": "PYQ 2023 Set 1B, PYQ 2023 Set 4, PYQ 2025 Set 1",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 4",
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_057",
    "topic": "president"
  },
  {
    "question": "The Parliament of India is consisted of",
    "options": [
      "A) Lok Sabha and Rajya Sabha",
      "B) Lok Sabha, Rajya Sabha and President",
      "C) Lok Sabha, Rajya Sabha, President and Prime Minister",
      "D) Lok Sabha, Rajya Sabha and Council of Ministers"
    ],
    "answer": "B",
    "explanation": "Correct answer is B) Lok Sabha, Rajya Sabha and President.",
    "unit": 2,
    "year": 2025,
    "source": "PYQ 2023 Set 1B, PYQ 2023 Set 3, PYQ 2023 Set 4, PYQ 2025 Set 2",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 3",
      "PYQ 2023 Set 4",
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_058",
    "topic": "president"
  },
  {
    "question": "It the President wants to resign; he has to address the letter of resignation to the:",
    "options": [
      "A) Prime Minister",
      "B) Vice-President",
      "C) Speaker",
      "D) Chief Justice of India"
    ],
    "answer": "B",
    "explanation": "Correct answer is B) Vice-President.",
    "unit": 2,
    "year": 2025,
    "source": "PYQ 2023 Set 1B, PYQ 2023 Set 3, PYQ 2023 Set 4, PYQ 2025 Set 2",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 3",
      "PYQ 2023 Set 4",
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_059",
    "topic": "president"
  },
  {
    "question": "Judges of High Courts are appointed by the",
    "options": [
      "A) President.",
      "B) Governor.",
      "C) Chief Justice of India",
      "D) Prime minister on the advice of Council of ministers"
    ],
    "answer": "A",
    "explanation": "Correct answer is A) President..",
    "unit": 2,
    "year": 2025,
    "source": "PYQ 2023 Set 1B, PYQ 2023 Set 4, PYQ 2025 Set 2",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 4",
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_060",
    "topic": "president"
  },
  {
    "question": "The Chief Justice and other Judges of the High Court are appointed by the",
    "options": [
      "A) Chief Justice of the Supreme Court",
      "B) Chief Minister of the concerned state",
      "C) Governor of the concerned state",
      "D) President"
    ],
    "answer": "D",
    "explanation": "Correct answer is D) President.",
    "unit": 2,
    "year": 2023,
    "source": "PYQ 2023 Set 1B, PYQ 2023 Set 4, PYQ 2023 Backlog",
    "years": [
      2023
    ],
    "sources": [
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 4",
      "PYQ 2023 Backlog"
    ],
    "id": "pyq_061",
    "topic": "supreme_court"
  },
  {
    "question": "Which of the following is not done by cyber criminals?",
    "options": [
      "A) Unauthorized account access",
      "B) Mass attack using Trojans as botnets",
      "C) Email spoofing and spamming",
      "D) Report vulnerability in any system"
    ],
    "answer": "D",
    "explanation": "Correct answer is D) Report vulnerability in any system.",
    "unit": 3,
    "year": 2023,
    "source": "PYQ 2023 Set 1B, PYQ 2023 Set 4",
    "years": [
      2023
    ],
    "sources": [
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 4"
    ],
    "id": "pyq_062",
    "topic": "cyber_crimes"
  },
  {
    "question": "are often delivered to a PC through an email attachment and are often designed to do harm.",
    "options": [
      "A) Spam",
      "B) Email",
      "C) Portals",
      "D) Virus"
    ],
    "answer": "D",
    "explanation": "Correct answer is D) Virus.",
    "unit": 3,
    "year": 2025,
    "source": "PYQ 2023 Set 1B, PYQ 2023 Set 3, PYQ 2023 Set 4, PYQ 2023 Backlog, PYQ 2025 Set 1",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 3",
      "PYQ 2023 Set 4",
      "PYQ 2023 Backlog",
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_063",
    "topic": "geographical_indications"
  },
  {
    "question": "Exclusive right granted for an invention is called",
    "options": [
      "A) Copyright",
      "B) Geographical Indication",
      "C) Patent",
      "D) Trademark"
    ],
    "answer": "C",
    "explanation": "Correct answer is C) Patent.",
    "unit": 3,
    "year": 2025,
    "source": "PYQ 2023 Set 1B, PYQ 2023 Set 2, PYQ 2023 Set 4, PYQ 2025 Set 2",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 2",
      "PYQ 2023 Set 4",
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_064",
    "topic": "patents"
  },
  {
    "question": "Any indication which defines goods as originating in the territory of a country, or a region/locality in that territory, where a given quality, reputation or other characteristic is essentially attributable to its geographical origin is called:",
    "options": [
      "A) Industrial design",
      "B) Trademark",
      "C) Patents",
      "D) Geographical indications"
    ],
    "answer": "D",
    "explanation": "Geographical Indications (GIs) protect products whose specific quality, reputation, or other characteristics are essentially attributable to their geographical origin (e.g., Darjeeling Tea).",
    "unit": 3,
    "year": 2025,
    "source": "PYQ 2023 Set 1B, PYQ 2023 Set 3, PYQ 2023 Set 4, PYQ 2023 Backlog, PYQ 2025 Set 2",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 3",
      "PYQ 2023 Set 4",
      "PYQ 2023 Backlog",
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_065",
    "topic": "geographical_indications"
  },
  {
    "question": "A layout of transistors and other circuitry elements, including lead wires connecting them, expressed in any manner in a semiconductor integrated circuit is called:",
    "options": [
      "A) Industrial design",
      "B) Two-dimensional design",
      "C) Layout-design",
      "D) Trademark"
    ],
    "answer": "C",
    "explanation": "This is protected under the Semiconductor Integrated Circuits Layout-Design Act, 2000, which protects the layout design of transistors and circuitry in ICs.",
    "unit": 3,
    "year": 2025,
    "source": "PYQ 2023 Set 1B, PYQ 2023 Set 3, PYQ 2023 Set 4, PYQ 2023 Backlog, PYQ 2025 Set 1",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 3",
      "PYQ 2023 Set 4",
      "PYQ 2023 Backlog",
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_066",
    "topic": "geographical_indications"
  },
  {
    "question": "What does not fall under the ambit of Identity Theft?",
    "options": [
      "A) Illegally obtaining the personal or financial information of another person",
      "B) Fraudulent actions",
      "C) Making authorized transactions",
      "D) Making unauthorized transactions and purchases"
    ],
    "answer": "C",
    "explanation": "Correct answer is C) Making authorized transactions.",
    "unit": 3,
    "year": 2025,
    "source": "PYQ 2023 Set 1B, PYQ 2023 Set 4, PYQ 2025 Set 1",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 4",
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_067",
    "topic": "intellectual_property"
  },
  {
    "question": "Which of the following is not an advantage of E-Commerce?",
    "options": [
      "A) Shopping can take place anywhere",
      "B) Customer Convenience is enhanced",
      "C) Customer money can be stolen",
      "D) Shopping costs are reduced"
    ],
    "answer": "C",
    "explanation": "Correct answer is C) Customer money can be stolen.",
    "unit": 3,
    "year": 2025,
    "source": "PYQ 2023 Set 1B, PYQ 2023 Set 2, PYQ 2023 Set 4, PYQ 2025 Set 2",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 2",
      "PYQ 2023 Set 4",
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_068",
    "topic": "intellectual_property"
  },
  {
    "question": "Which of the following is not a remedy available for breach of a contract?",
    "options": [
      "A) Damages;",
      "B) specific performance of the contract; and",
      "C) injunction",
      "D) Criminal prosecution"
    ],
    "answer": "D",
    "explanation": "Correct answer is D) Criminal prosecution.",
    "unit": 3,
    "year": 2023,
    "source": "PYQ 2023 Set 1B, PYQ 2023 Set 2, PYQ 2023 Set 4, PYQ 2023 Backlog",
    "years": [
      2023
    ],
    "sources": [
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 2",
      "PYQ 2023 Set 4",
      "PYQ 2023 Backlog"
    ],
    "id": "pyq_069",
    "topic": "intellectual_property"
  },
  {
    "question": "Which one of the following elements is not necessary for a contract?",
    "options": [
      "A) Competent parties",
      "B) Reasonable terms and conditions.",
      "C) Free consent",
      "D) Lawful consideration 28"
    ],
    "answer": "B",
    "explanation": "Correct answer is B) Reasonable terms and conditions..",
    "unit": 3,
    "year": 2025,
    "source": "PYQ 2023 Set 1B, PYQ 2023 Set 3, PYQ 2023 Set 4, PYQ 2023 Backlog, PYQ 2025 Set 1",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 3",
      "PYQ 2023 Set 4",
      "PYQ 2023 Backlog",
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_070",
    "topic": "intellectual_property"
  },
  {
    "question": "Moral autonomy is also referred to as-",
    "options": [
      "A) self-determinant",
      "B) Dependent",
      "C) Conflicted",
      "D) Confused"
    ],
    "answer": "A",
    "explanation": "Correct answer is A) self-determinant.",
    "unit": 4,
    "year": 2025,
    "source": "PYQ 2023 Set 1B, PYQ 2023 Set 3, PYQ 2023 Set 4, PYQ 2023 Backlog, PYQ 2025 Set 2",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 3",
      "PYQ 2023 Set 4",
      "PYQ 2023 Backlog",
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_071",
    "topic": "e_commerce"
  },
  {
    "question": "Which of the following is true with respect to the scope of engineering?\n\ni. Ethics of the workplace which involves the co-workers and employees in an organization.\nii. Ethics related to the product or work which involves the transportation, warehousing, and use, besides the safety of the end product and the environment outside the factory.",
    "options": [
      "A) Only i",
      "B) Only ii",
      "C) Both i and ii",
      "D) Neither i nor ii"
    ],
    "answer": "C",
    "explanation": "Engineering ethics encompasses both workplace ethics (covering relationships with co-workers and employees) and product/work ethics (covering safety, transportation, and environmental impact outside the factory).",
    "unit": 4,
    "year": 2025,
    "source": "PYQ 2023 Set 1B, PYQ 2023 Set 3, PYQ 2023 Set 4, PYQ 2025 Set 2",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 3",
      "PYQ 2023 Set 4",
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_072",
    "topic": "professional_ethics"
  },
  {
    "question": "Corporate Social Responsibility is equally important to:",
    "options": [
      "A) Community",
      "B) Company",
      "C) Community and Country",
      "D) Community and society"
    ],
    "answer": "D",
    "explanation": "Correct answer is D) Community and society.",
    "unit": 4,
    "year": 2025,
    "source": "PYQ 2023 Set 1B, PYQ 2023 Set 3, PYQ 2023 Set 4, PYQ 2023 Backlog, PYQ 2025 Set 2",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 3",
      "PYQ 2023 Set 4",
      "PYQ 2023 Backlog",
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_073",
    "topic": "professional_ethics"
  },
  {
    "question": "Ethics is a science.",
    "options": [
      "A) Positive",
      "B) Negative",
      "C) Normative",
      "D) Theoretical"
    ],
    "answer": "C",
    "explanation": "Correct answer is C) Normative.",
    "unit": 4,
    "year": 2023,
    "source": "PYQ 2023 Set 1B, PYQ 2023 Set 2, PYQ 2023 Set 4, PYQ 2023 Backlog",
    "years": [
      2023
    ],
    "sources": [
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 2",
      "PYQ 2023 Set 4",
      "PYQ 2023 Backlog"
    ],
    "id": "pyq_074",
    "topic": "professional_ethics"
  },
  {
    "question": "Most individuals are familiar with which form of E-commerce.",
    "options": [
      "A) B2B",
      "B) B2C",
      "C) C2B",
      "D) C2C"
    ],
    "answer": "B",
    "explanation": "Correct answer is B) B2C.",
    "unit": 3,
    "year": 2025,
    "source": "PYQ 2023 Set 1B, PYQ 2023 Set 3, PYQ 2023 Set 4, PYQ 2025 Set 1",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 3",
      "PYQ 2023 Set 4",
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_075",
    "topic": "intellectual_property"
  },
  {
    "question": "Who appoints the Prime Minister of India?",
    "options": [
      "A) Lok Sabha",
      "B) President",
      "C) Parliament",
      "D) Citizens of India"
    ],
    "answer": "B",
    "explanation": "Correct answer is B) President.",
    "unit": 2,
    "year": 2025,
    "source": "PYQ 2023 Set 1B, PYQ 2023 Set 4, PYQ 2025 Set 2",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 4",
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_076",
    "topic": "supreme_court"
  },
  {
    "question": "Equal pay for equal work for both men and women has been laid down in the Indian Constitution as one of the",
    "options": [
      "A) Fundamental Rights",
      "B) Fundamental Duties.",
      "C) Guidelines in the Preamble.",
      "D) Directive Principles of State Policy."
    ],
    "answer": "D",
    "explanation": "Correct answer is D) Directive Principles of State Policy..",
    "unit": 1,
    "year": 2023,
    "source": "PYQ 2023 Set 1B, PYQ 2023 Set 2, PYQ 2023 Set 4, PYQ 2023 Backlog",
    "years": [
      2023
    ],
    "sources": [
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 2",
      "PYQ 2023 Set 4",
      "PYQ 2023 Backlog"
    ],
    "id": "pyq_077",
    "topic": "goi_act_1935"
  },
  {
    "question": "To gradually change, or change someone or something, from one thing to another is called?",
    "options": [
      "A) Morphing 24",
      "B) Grooming",
      "C) Phishing",
      "D) Obscenity"
    ],
    "answer": "A",
    "explanation": "Correct answer is A) Morphing 24.",
    "unit": 3,
    "year": 2025,
    "source": "PYQ 2023 Set 1B, PYQ 2023 Set 4, PYQ 2025 Set 1",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 1B",
      "PYQ 2023 Set 4",
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_078",
    "topic": "trademark"
  },
  {
    "question": "Which part of the Indian Constitution reflects the ideology of Gandhi",
    "options": [
      "A) Fundamental Rights",
      "B) Fundamental Duties",
      "C) Directive Principles",
      "D) Preamble"
    ],
    "answer": "C",
    "explanation": "Correct answer is C) Directive Principles.",
    "unit": 1,
    "year": 2023,
    "source": "PYQ 2023 Set 2",
    "years": [
      2023
    ],
    "sources": [
      "PYQ 2023 Set 2"
    ],
    "id": "pyq_079",
    "topic": "goi_act_1935"
  },
  {
    "question": "The terms: ’Secular, Socialist and Integrity’ were added to the Preamble in",
    "options": [
      "A) 1979",
      "B) 1977",
      "C) 1976",
      "D) 1975"
    ],
    "answer": "C",
    "explanation": "Correct answer is C) 1976.",
    "unit": 1,
    "year": 2025,
    "source": "PYQ 2023 Set 2, PYQ 2025 Set 1",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 2",
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_080",
    "topic": "preamble"
  },
  {
    "question": "The correct nomenclature of India according to the Preamble is:",
    "options": [
      "A) Sovereign, Secular, Democratic Republic",
      "B) Sovereign, Democratic Republic",
      "C) Sovereign Socialist Secular Democratic Republic",
      "D) Sovereign Secular Socialist Democracy 10"
    ],
    "answer": "C",
    "explanation": "Correct answer is C) Sovereign Socialist Secular Democratic Republic.",
    "unit": 1,
    "year": 2025,
    "source": "PYQ 2023 Set 2, PYQ 2023 Backlog, PYQ 2025 Set 1",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 2",
      "PYQ 2023 Backlog",
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_081",
    "topic": "goi_act_1935"
  },
  {
    "question": "Welfare State is well defined in which of the following?",
    "options": [
      "A) Indian Preamble",
      "B) Directive Principles",
      "C) Schedule VII of the Constitution",
      "D) Fundamental Rights"
    ],
    "answer": "B",
    "explanation": "Correct answer is B) Directive Principles.",
    "unit": 1,
    "year": 2025,
    "source": "PYQ 2023 Set 2, PYQ 2023 Backlog, PYQ 2025 Set 1",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 2",
      "PYQ 2023 Backlog",
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_082",
    "topic": "dpsp"
  },
  {
    "question": "Which of the following is enforceable in a court of law?",
    "options": [
      "A) Fundamental Rights",
      "B) Fundamental Duties",
      "C) Directive Principles",
      "D) Preamble"
    ],
    "answer": "A",
    "explanation": "Correct answer is A) Fundamental Rights.",
    "unit": 1,
    "year": 2025,
    "source": "PYQ 2023 Set 2, PYQ 2023 Backlog, PYQ 2025 Set 1",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 2",
      "PYQ 2023 Backlog",
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_083",
    "topic": "goi_act_1935"
  },
  {
    "question": "The tenure of the Council of Ministers lasts:",
    "options": [
      "A) As long as it enjoys the support of the electorate",
      "B) As long as it enjoys the support of the majority of the members of the Parliament",
      "C) Six years",
      "D) Five years."
    ],
    "answer": "B",
    "explanation": "Correct answer is B) As long as it enjoys the support of the majority of the members of the Parliament.",
    "unit": 2,
    "year": 2025,
    "source": "PYQ 2023 Set 2, PYQ 2025 Set 2",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 2",
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_084",
    "topic": "president"
  },
  {
    "question": "The maximum strength of the Rajya Sabha is:",
    "options": [
      "A) 250",
      "B) 245",
      "C) 240",
      "D) 200"
    ],
    "answer": "A",
    "explanation": "Correct answer is A) 250.",
    "unit": 2,
    "year": 2023,
    "source": "PYQ 2023 Set 2, PYQ 2023 Backlog",
    "years": [
      2023
    ],
    "sources": [
      "PYQ 2023 Set 2",
      "PYQ 2023 Backlog"
    ],
    "id": "pyq_085",
    "topic": "parliament"
  },
  {
    "question": "In order to be elected a member of Council of States a person must not be less than:",
    "options": [
      "A) 30 years.",
      "B) 25 years",
      "C) 21 years",
      "D) 35 years"
    ],
    "answer": "A",
    "explanation": "Correct answer is A) 30 years..",
    "unit": 2,
    "year": 2023,
    "source": "PYQ 2023 Set 2",
    "years": [
      2023
    ],
    "sources": [
      "PYQ 2023 Set 2"
    ],
    "id": "pyq_086",
    "topic": "president"
  },
  {
    "question": "The President of India can proclaim National Emergency",
    "options": [
      "A) On the advice of the Council of Ministers headed by the Prime Minister",
      "B) On the advice of the Speaker",
      "C) On the advice of the leader of the ruling party or set of parties in power",
      "D) At his own discretion 9"
    ],
    "answer": "A",
    "explanation": "Correct answer is A) On the advice of the Council of Ministers headed by the Prime Minister.",
    "unit": 1,
    "year": 2025,
    "source": "PYQ 2023 Set 2, PYQ 2025 Set 1",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 2",
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_087",
    "topic": "goi_act_1935"
  },
  {
    "question": "How many times has the President declared financial emergency in the country so far?",
    "options": [
      "A) Once",
      "B) Twice",
      "C) Thrice",
      "D) Never"
    ],
    "answer": "D",
    "explanation": "Correct answer is D) Never.",
    "unit": 1,
    "year": 2023,
    "source": "PYQ 2023 Set 2",
    "years": [
      2023
    ],
    "sources": [
      "PYQ 2023 Set 2"
    ],
    "id": "pyq_088",
    "topic": "federalism"
  },
  {
    "question": "Hacking means:",
    "options": [
      "A) unauthorized attempts to bypass the security mechanisms of an information system 22 or network.",
      "B) use of information and communication technologies to support deliberate, repeated and hostile behavior",
      "C) a form of fraud or cheating of another persons’ identity in which someone pretends to be someone else by assuming that person’s identity.",
      "D) without the permission of the owner to download computer data."
    ],
    "answer": "A",
    "explanation": "Correct answer is A) unauthorized attempts to bypass the security mechanisms of an information system 22 or network..",
    "unit": 3,
    "year": 2025,
    "source": "PYQ 2023 Set 2, PYQ 2023 Backlog, PYQ 2025 Set 1",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 2",
      "PYQ 2023 Backlog",
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_089",
    "topic": "cyber_crimes"
  },
  {
    "question": "________ are attempts by individuals to obtain confidential information from you by falsifying their identity.",
    "options": [
      "A) Computer viruses",
      "B) Spyware scams",
      "C) Phishing scams",
      "D) Phishing trips"
    ],
    "answer": "C",
    "explanation": "Phishing scams are fraudulent attempts to acquire sensitive data (passwords, card details) by masquerading as a trustworthy entity.",
    "unit": 3,
    "year": 2025,
    "source": "PYQ 2023 Set 2, PYQ 2023 Set 3, PYQ 2023 Backlog, PYQ 2025 Set 2",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 2",
      "PYQ 2023 Set 3",
      "PYQ 2023 Backlog",
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_090",
    "topic": "cyber_crimes"
  },
  {
    "question": "Which is the landmark judgment of Cyber bullying/harassment in India?",
    "options": [
      "A) Shreyas Singhal v. UOI",
      "B) State of Bihar v. Shreya Singhal",
      "C) Shreya Singhal v. UOI",
      "D) UOI v. Shreya Singhal"
    ],
    "answer": "C",
    "explanation": "Correct answer is C) Shreya Singhal v. UOI.",
    "unit": 3,
    "year": 2023,
    "source": "PYQ 2023 Set 2",
    "years": [
      2023
    ],
    "sources": [
      "PYQ 2023 Set 2"
    ],
    "id": "pyq_091",
    "topic": "cyber_crimes"
  },
  {
    "question": "Distinctive symbols, signs, and logos that help consumers distinguish between competing goods or services are called:",
    "options": [
      "A) Copyright",
      "B) Cyber crime",
      "C) Patent",
      "D) Trademark"
    ],
    "answer": "D",
    "explanation": "A trademark is a recognizable sign, design, or expression which identifies products or services of a particular source and distinguishes them from others.",
    "unit": 3,
    "year": 2025,
    "source": "PYQ 2023 Set 2, PYQ 2025 Set 2",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 2",
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_092",
    "topic": "geographical_indications"
  },
  {
    "question": "In a C2C Business model, the website",
    "options": [
      "A) wants to sell the product",
      "B) wants to buy the product",
      "C) places advertisements",
      "D) receives products"
    ],
    "answer": "C",
    "explanation": "Correct answer is C) places advertisements.",
    "unit": 3,
    "year": 2023,
    "source": "PYQ 2023 Set 2, PYQ 2023 Backlog",
    "years": [
      2023
    ],
    "sources": [
      "PYQ 2023 Set 2",
      "PYQ 2023 Backlog"
    ],
    "id": "pyq_093",
    "topic": "it_act_2000"
  },
  {
    "question": "Which of the following is a disadvantage of E-Commerce?",
    "options": [
      "A) Privacy of e-transactions is not guaranteed",
      "B) Expensive for small businesses",
      "C) Security of internet is not very good",
      "D) All of the above"
    ],
    "answer": "D",
    "explanation": "Correct answer is D) All of the above.",
    "unit": 3,
    "year": 2025,
    "source": "PYQ 2023 Set 2, PYQ 2023 Backlog, PYQ 2025 Set 2",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 2",
      "PYQ 2023 Backlog",
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_094",
    "topic": "intellectual_property"
  },
  {
    "question": "PKI stands for:",
    "options": [
      "A) Public Knowledge Interface",
      "B) Private Knowledge Interface",
      "C) Private Key Infrastructure",
      "D) Public Key Infrastructure"
    ],
    "answer": "D",
    "explanation": "Correct answer is D) Public Key Infrastructure.",
    "unit": 3,
    "year": 2023,
    "source": "PYQ 2023 Set 2, PYQ 2023 Backlog",
    "years": [
      2023
    ],
    "sources": [
      "PYQ 2023 Set 2",
      "PYQ 2023 Backlog"
    ],
    "id": "pyq_095",
    "topic": "intermediary_liability"
  },
  {
    "question": "Authentication of any electronic record by a subscriber by means of the electronic technique specified in the _______ schedule of the IT Act and includes digital signature.",
    "options": [
      "A) Second",
      "B) First",
      "C) Fourth",
      "D) Third"
    ],
    "answer": "A",
    "explanation": "Section 3 and 3A of the IT Act specify that electronic records can be authenticated using electronic signatures and techniques specified in the Second Schedule.",
    "unit": 3,
    "year": 2025,
    "source": "PYQ 2023 Set 2, PYQ 2023 Backlog, PYQ 2025 Set 2",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 2",
      "PYQ 2023 Backlog",
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_096",
    "topic": "it_act_2000"
  },
  {
    "question": "PKI is certified by",
    "options": [
      "A) Certificate Authority",
      "B) PKI Authority",
      "C) Central Government",
      "D) ISP"
    ],
    "answer": "A",
    "explanation": "Correct answer is A) Certificate Authority.",
    "unit": 3,
    "year": 2023,
    "source": "PYQ 2023 Set 2, PYQ 2023 Backlog",
    "years": [
      2023
    ],
    "sources": [
      "PYQ 2023 Set 2",
      "PYQ 2023 Backlog"
    ],
    "id": "pyq_097",
    "topic": "geographical_indications"
  },
  {
    "question": "Whistleblowing refers to the act of organization members disclosing information on illegal, illicit, or unethical practices within the organization to internal or external entities.",
    "options": [
      "A) Reporting",
      "B) Oxymoron",
      "C) Quickening",
      "D) Whistleblowing"
    ],
    "answer": "D",
    "explanation": "Whistleblowing is the act of drawing attention to illegal, unethical, or dangerous activities occurring within an organization.",
    "unit": 4,
    "year": 2025,
    "source": "PYQ 2023 Set 2, PYQ 2023 Backlog, PYQ 2025 Set 2",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 2",
      "PYQ 2023 Backlog",
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_098",
    "topic": "professional_ethics"
  },
  {
    "question": "Why should regular inspections of the workplace take place?",
    "options": [
      "A) To check whether the working environment is safe",
      "B) To check everyone is doing their job",
      "C) To prepare for a visit from concerned employer.",
      "D) To check that all staff are present and correct."
    ],
    "answer": "A",
    "explanation": "Correct answer is A) To check whether the working environment is safe.",
    "unit": 4,
    "year": 2025,
    "source": "PYQ 2023 Set 2, PYQ 2023 Backlog, PYQ 2025 Set 1",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 2",
      "PYQ 2023 Backlog",
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_099",
    "topic": "professional_ethics"
  },
  {
    "question": "Three major characteristics of a profession are:",
    "options": [
      "A) Advanced knowledge, Self-Regulation, Public Good",
      "B) Efficiency, Economic growth, Code of ethics",
      "C) Public Good, legal correctness, Personal efficiency",
      "D) Self care, Technical skill, Norms of behavior"
    ],
    "answer": "A",
    "explanation": "Correct answer is A) Advanced knowledge, Self-Regulation, Public Good.",
    "unit": 4,
    "year": 2023,
    "source": "PYQ 2023 Set 2",
    "years": [
      2023
    ],
    "sources": [
      "PYQ 2023 Set 2"
    ],
    "id": "pyq_100",
    "topic": "professional_ethics"
  },
  {
    "question": "Two approaches to environmental ethics are:",
    "options": [
      "A) Nature Centric and Human Centric 32",
      "B) Nature Centric and Industry Centric",
      "C) Human Centric and Eco Centric",
      "D) Human Centric and Environment Centric"
    ],
    "answer": "A",
    "explanation": "Correct answer is A) Nature Centric and Human Centric 32.",
    "unit": 4,
    "year": 2023,
    "source": "PYQ 2023 Set 2",
    "years": [
      2023
    ],
    "sources": [
      "PYQ 2023 Set 2"
    ],
    "id": "pyq_101",
    "topic": "professional_ethics"
  },
  {
    "question": "aims to maximize good consequences for human beings",
    "options": [
      "A) Utilitarianism",
      "B) Environmentalism",
      "C) Pollution control",
      "D) Aestheticism"
    ],
    "answer": "A",
    "explanation": "Correct answer is A) Utilitarianism.",
    "unit": 4,
    "year": 2023,
    "source": "PYQ 2023 Set 2",
    "years": [
      2023
    ],
    "sources": [
      "PYQ 2023 Set 2"
    ],
    "id": "pyq_102",
    "topic": "e_commerce"
  },
  {
    "question": "Assertion (A): The Preamble of the Constitution starts with 'We, the people of India'.\nReason (R): It implies that the Constitution is created by the entire nation.",
    "options": [
      "A) Both A and R are true but R is not the correct explanation of A",
      "B) A is false but R is true",
      "C) Both A and R are true and R is the correct explanation of A",
      "D) A is true but R is false"
    ],
    "answer": "C",
    "explanation": "The Preamble starts with 'We, the People of India' to signify that the ultimate sovereignty lies with the people and that the Constitution was enacted by the collective will of the nation.",
    "unit": 1,
    "year": 2025,
    "source": "PYQ 2023 Set 3, PYQ 2025 Set 1",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 3",
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_103",
    "topic": "goi_act_1935"
  },
  {
    "question": "To produce the Constitution, the Constituent Assembly took:",
    "options": [
      "A) 2 years 11 months and 17 days",
      "B) 3 years 10 months and 20 days",
      "C) 4 years 11 months and 17 days",
      "D) 5 years 6 months and 5 days"
    ],
    "answer": "A",
    "explanation": "Correct answer is A) 2 years 11 months and 17 days.",
    "unit": 1,
    "year": 2023,
    "source": "PYQ 2023 Set 3, PYQ 2023 Backlog",
    "years": [
      2023
    ],
    "sources": [
      "PYQ 2023 Set 3",
      "PYQ 2023 Backlog"
    ],
    "id": "pyq_104",
    "topic": "constituent_assembly"
  },
  {
    "question": "The Preamble is useful in constitutional interpretation because it:",
    "options": [
      "A) Uses value loaded words",
      "B) Contains the real objective and philosophy of the Constitution makers",
      "C) It is a source of power and limitation",
      "D) It gives an exhaustive list of basic features of the constitution."
    ],
    "answer": "B",
    "explanation": "Correct answer is B) Contains the real objective and philosophy of the Constitution makers.",
    "unit": 1,
    "year": 2023,
    "source": "PYQ 2023 Set 3",
    "years": [
      2023
    ],
    "sources": [
      "PYQ 2023 Set 3"
    ],
    "id": "pyq_105",
    "topic": "preamble"
  },
  {
    "question": "In case of disqualification of a member of Parliament, the President shall consult whom?",
    "options": [
      "A) Prime Minister",
      "B) Council of Minister",
      "C) Chief Justice of India",
      "D) Election Commission of India"
    ],
    "answer": "D",
    "explanation": "Correct answer is D) Election Commission of India.",
    "unit": 2,
    "year": 2023,
    "source": "PYQ 2023 Set 3",
    "years": [
      2023
    ],
    "sources": [
      "PYQ 2023 Set 3"
    ],
    "id": "pyq_106",
    "topic": "president"
  },
  {
    "question": "How many Presidents have been impeached in India?",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 0"
    ],
    "answer": "D",
    "explanation": "Correct answer is D) 0.",
    "unit": 2,
    "year": 2023,
    "source": "PYQ 2023 Set 3",
    "years": [
      2023
    ],
    "sources": [
      "PYQ 2023 Set 3"
    ],
    "id": "pyq_107",
    "topic": "supreme_court"
  },
  {
    "question": "How many types of Emergency have been visualized in the Constitution of India?",
    "options": [
      "A) Four",
      "B) Three",
      "C) One",
      "D) Two"
    ],
    "answer": "B",
    "explanation": "Correct answer is B) Three.",
    "unit": 1,
    "year": 2023,
    "source": "PYQ 2023 Set 3",
    "years": [
      2023
    ],
    "sources": [
      "PYQ 2023 Set 3"
    ],
    "id": "pyq_108",
    "topic": "goi_act_1935"
  },
  {
    "question": "A person is being harassed repeatedly by being followed called or be written to he/she is a target of",
    "options": [
      "A) Bullying",
      "B) Stalking",
      "C) Identity theft",
      "D) Phishing"
    ],
    "answer": "B",
    "explanation": "Correct answer is B) Stalking.",
    "unit": 3,
    "year": 2023,
    "source": "PYQ 2023 Set 3, PYQ 2023 Backlog",
    "years": [
      2023
    ],
    "sources": [
      "PYQ 2023 Set 3",
      "PYQ 2023 Backlog"
    ],
    "id": "pyq_109",
    "topic": "geographical_indications"
  },
  {
    "question": "E-Contracts are referred as:",
    "options": [
      "A) Cyber Contract",
      "B) Online Contract",
      "C) Digital Contract",
      "D) All of the options"
    ],
    "answer": "D",
    "explanation": "Correct answer is D) All of the options.",
    "unit": 3,
    "year": 2025,
    "source": "PYQ 2023 Set 3, PYQ 2025 Set 1",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 3",
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_110",
    "topic": "cyber_crimes"
  },
  {
    "question": "What is the name given to an interactive business providing a centralized market where many buyers and suppliers can come together for e-commerce or commerce-related activities?",
    "options": [
      "A) Direct market place",
      "B) Electronic marketplace",
      "C) B2B",
      "D) B2C"
    ],
    "answer": "B",
    "explanation": "An electronic marketplace (e-marketplace) is an online platform where multiple third-party sellers and buyers transact.",
    "unit": 4,
    "year": 2025,
    "source": "PYQ 2023 Set 3, PYQ 2025 Set 1",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 3",
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_111",
    "topic": "e_commerce"
  },
  {
    "question": "Which of the following section gives validity to e-contracts?",
    "options": [
      "A) Section 10 of Indian Contract Act",
      "B) Section 10A of IT Act",
      "C) Section 10 of Civil Procedure Act",
      "D) Section 10 of Transfer of Property Act"
    ],
    "answer": "B",
    "explanation": "Correct answer is B) Section 10A of IT Act.",
    "unit": 3,
    "year": 2025,
    "source": "PYQ 2023 Set 3, PYQ 2023 Backlog, PYQ 2025 Set 1",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 3",
      "PYQ 2023 Backlog",
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_112",
    "topic": "intermediary_liability"
  },
  {
    "question": "Which of the following is a characteristic feature of professionalism?",
    "options": [
      "A) Oligopoly",
      "B) No autonomy in the work place",
      "C) Expertise and knowledge",
      "D) Mediocre training"
    ],
    "answer": "C",
    "explanation": "Correct answer is C) Expertise and knowledge.",
    "unit": 4,
    "year": 2025,
    "source": "PYQ 2023 Set 3, PYQ 2023 Backlog, PYQ 2025 Set 1",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 3",
      "PYQ 2023 Backlog",
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_113",
    "topic": "professional_ethics"
  },
  {
    "question": "Which of the following is not a skill associated with moral autonomy?",
    "options": [
      "A) Proficiency in recognizing moral problems in engineering and ability to distinguish problems in law, economics, and religion.",
      "B) Skill in comprehending, clarifying, and critically-assessing arguments on different aspects of moral issues.",
      "C) Ability to form inconsistent and incomprehensive viewpoints based on facts.",
      "D) Awareness of alternate responses to the issues and creative solutions. 35"
    ],
    "answer": "C",
    "explanation": "Correct answer is C) Ability to form inconsistent and incomprehensive viewpoints based on facts..",
    "unit": 4,
    "year": 2025,
    "source": "PYQ 2023 Set 3, PYQ 2025 Set 2",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 3",
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_114",
    "topic": "professional_ethics"
  },
  {
    "question": "Pick the odd step out in solving a dilemma.",
    "options": [
      "A) Identification of the moral factors and reasons...",
      "B) Collection of all information, data, and facts relevant to the situation.",
      "C) Rank the moral options i.e., priority in application through value system.",
      "D) Not discuss with colleagues and obtain their perspectives, priorities, and sugges- tions on various alternatives."
    ],
    "answer": "D",
    "explanation": "Correct answer is D) Not discuss with colleagues and obtain their perspectives, priorities, and sugges- tions on various alternatives..",
    "unit": 4,
    "year": 2025,
    "source": "PYQ 2023 Set 3, PYQ 2025 Set 2",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 3",
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_115",
    "topic": "e_commerce"
  },
  {
    "question": "Choose the incorrect statement in relation to moral dilemma.",
    "options": [
      "A) Dilemmas are situations in which moral reasons come into conflict.",
      "B) When in a dilemma, one is not clear of the immediate choice or solution of the problems.",
      "C) Moral dilemma makes the decision making very easy.",
      "D) When in a dilemma, one is unable to distinguish between good and bad"
    ],
    "answer": "C",
    "explanation": "Correct answer is C) Moral dilemma makes the decision making very easy..",
    "unit": 4,
    "year": 2025,
    "source": "PYQ 2023 Set 3, PYQ 2025 Set 2",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 3",
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_116",
    "topic": "e_commerce"
  },
  {
    "question": "Which of the following is not a reason for poor attitude amongst employees?",
    "options": [
      "A) Low morale of the employees because of dissatisfaction and downsizing",
      "B) Absence of grievance redressal mechanism",
      "C) Absence of recognition and reward system",
      "D) Good working environments."
    ],
    "answer": "D",
    "explanation": "Correct answer is D) Good working environments..",
    "unit": 4,
    "year": 2025,
    "source": "PYQ 2023 Set 3, PYQ 2023 Backlog, PYQ 2025 Set 2",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Set 3",
      "PYQ 2023 Backlog",
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_117",
    "topic": "professional_ethics"
  },
  {
    "question": "Which among the following parts of constitution of India, includes the concept of welfare states?",
    "options": [
      "A) Preamble",
      "B) Fundamental rights",
      "C) Directive principles",
      "D) Fourth Schedule"
    ],
    "answer": "C",
    "explanation": "Correct answer is C) Directive principles.",
    "unit": 1,
    "year": 2023,
    "source": "PYQ 2023 Backlog",
    "years": [
      2023
    ],
    "sources": [
      "PYQ 2023 Backlog"
    ],
    "id": "pyq_118",
    "topic": "goi_act_1935"
  },
  {
    "question": "The seat of a Member of Parliament can be declared vacant if he absents himself from the House without permission for a period of:",
    "options": [
      "A) Two years",
      "B) 60 days",
      "C) Six months",
      "D) One year"
    ],
    "answer": "B",
    "explanation": "Under Article 101(4) of the Indian Constitution, if a member of either House of Parliament is absent for a period of 60 days without permission, the House may declare their seat vacant.",
    "unit": 2,
    "year": 2023,
    "source": "PYQ 2023 Backlog",
    "years": [
      2023
    ],
    "sources": [
      "PYQ 2023 Backlog"
    ],
    "id": "pyq_119",
    "topic": "parliament"
  },
  {
    "question": "The normal term of the Governor’s office:",
    "options": [
      "A) Depends on the tenure of the State Legislature 14",
      "B) Is 3 years",
      "C) Is 4 years",
      "D) Is 5 years"
    ],
    "answer": "D",
    "explanation": "Correct answer is D) Is 5 years.",
    "unit": 2,
    "year": 2023,
    "source": "PYQ 2023 Backlog",
    "years": [
      2023
    ],
    "sources": [
      "PYQ 2023 Backlog"
    ],
    "id": "pyq_120",
    "topic": "president"
  },
  {
    "question": "What is the age at which an Indian can become a candidate for Presidentship?",
    "options": [
      "A) 45",
      "B) 65",
      "C) 60",
      "D) 35 15"
    ],
    "answer": "D",
    "explanation": "Correct answer is D) 35 15.",
    "unit": 2,
    "year": 2023,
    "source": "PYQ 2023 Backlog",
    "years": [
      2023
    ],
    "sources": [
      "PYQ 2023 Backlog"
    ],
    "id": "pyq_121",
    "topic": "president"
  },
  {
    "question": "The Governor of a State is:",
    "options": [
      "A) Head of State of the State he is appointed as Governor",
      "B) Head of Government",
      "C) President’s agent",
      "D) Non-political figure"
    ],
    "answer": "A",
    "explanation": "Correct answer is A) Head of State of the State he is appointed as Governor.",
    "unit": 2,
    "year": 2023,
    "source": "PYQ 2023 Backlog",
    "years": [
      2023
    ],
    "sources": [
      "PYQ 2023 Backlog"
    ],
    "id": "pyq_122",
    "topic": "president"
  },
  {
    "question": "Which is the highest court of appeal in India?",
    "options": [
      "A) Supreme Court",
      "B) President",
      "C) High Court",
      "D) Privy Council 16"
    ],
    "answer": "A",
    "explanation": "Correct answer is A) Supreme Court.",
    "unit": 2,
    "year": 2025,
    "source": "PYQ 2023 Backlog, PYQ 2025 Set 2",
    "years": [
      2023,
      2025
    ],
    "sources": [
      "PYQ 2023 Backlog",
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_123",
    "topic": "supreme_court"
  },
  {
    "question": "Right to Freedom of Association is guaranteed by which of the following clauses?",
    "options": [
      "A) 19 (1) A",
      "B) 19 (1) B 7",
      "C) 19 (1) C",
      "D) 19 (1) D"
    ],
    "answer": "C",
    "explanation": "Correct answer is C) 19 (1) C.",
    "unit": 1,
    "year": 2025,
    "source": "PYQ 2025 Set 1",
    "years": [
      2025
    ],
    "sources": [
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_124",
    "topic": "right_to_freedom"
  },
  {
    "question": "Which of the following statement with respect to the office of Governor is true?",
    "options": [
      "A) The Governor is the Vice-Chancellor of all State Universities",
      "B) The Governor can impose National emergency",
      "C) The Govern can issue pardon",
      "D) None of the options"
    ],
    "answer": "D",
    "explanation": "Correct answer is D) None of the options.",
    "unit": 2,
    "year": 2025,
    "source": "PYQ 2025 Set 1",
    "years": [
      2025
    ],
    "sources": [
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_125",
    "topic": "president"
  },
  {
    "question": "Who is empowered to suspend the operation of the Fundamental Rights?",
    "options": [
      "A) Supreme Court",
      "B) President",
      "C) The Cabinet",
      "D) Parliament"
    ],
    "answer": "B",
    "explanation": "Correct answer is B) President.",
    "unit": 2,
    "year": 2025,
    "source": "PYQ 2025 Set 1",
    "years": [
      2025
    ],
    "sources": [
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_126",
    "topic": "president"
  },
  {
    "question": "Malwares, Denial of service attacks, Hacking are types of :",
    "options": [
      "A) Cyber Terrorism",
      "B) Cyber Warfare",
      "C) Phishing",
      "D) Hacking"
    ],
    "answer": "D",
    "explanation": "Correct answer is D) Hacking.",
    "unit": 3,
    "year": 2025,
    "source": "PYQ 2025 Set 1",
    "years": [
      2025
    ],
    "sources": [
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_127",
    "topic": "cyber_crimes"
  },
  {
    "question": "The practice of making a transmission appears to come from an authorized user.",
    "options": [
      "A) Hacking",
      "B) Spoofing",
      "C) Spamming",
      "D) Spamdexing"
    ],
    "answer": "B",
    "explanation": "Correct answer is B) Spoofing.",
    "unit": 3,
    "year": 2025,
    "source": "PYQ 2025 Set 1",
    "years": [
      2025
    ],
    "sources": [
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_128",
    "topic": "cyber_crimes"
  },
  {
    "question": "The diagram denotes which model of e-commerce?",
    "options": [
      "A) B2C",
      "B) B2B",
      "C) C2B",
      "D) C2C"
    ],
    "answer": "A",
    "explanation": "Correct answer is A) B2C.",
    "unit": 3,
    "year": 2025,
    "source": "PYQ 2025 Set 1, PYQ 2025 Set 2",
    "years": [
      2025
    ],
    "sources": [
      "PYQ 2025 Set 1",
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_129",
    "topic": "intellectual_property"
  },
  {
    "question": "Which is a function of E-commerce?",
    "options": [
      "A) marketing",
      "B) advertising",
      "C) supplying",
      "D) all of the options"
    ],
    "answer": "D",
    "explanation": "Correct answer is D) all of the options.",
    "unit": 3,
    "year": 2025,
    "source": "PYQ 2025 Set 1",
    "years": [
      2025
    ],
    "sources": [
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_130",
    "topic": "geographical_indications"
  },
  {
    "question": "Which of the following is an appropriate general principle with regard for ”Engineering Ethics”?",
    "options": [
      "A) The Engineer shall regard his duty to the public welfare as paramount to all other obligations.",
      "B) The Engineer shall regard his duty to the objectives of the company as paramount to all other obligations",
      "C) The Engineer shall regard his duty to the profession of engineering as paramount to other obligations.",
      "D) The Engineer shall regard his duty to his excellence as paramount to other obligations."
    ],
    "answer": "A",
    "explanation": "Correct answer is A) The Engineer shall regard his duty to the public welfare as paramount to all other obligations..",
    "unit": 4,
    "year": 2025,
    "source": "PYQ 2025 Set 1",
    "years": [
      2025
    ],
    "sources": [
      "PYQ 2025 Set 1"
    ],
    "id": "pyq_131",
    "topic": "professional_ethics"
  },
  {
    "question": "A boy, aged 11 years, has been compelled to work in a factory making match boxes. Which Fundamental Right is violated in this case?",
    "options": [
      "A) Right against Exploitation",
      "B) Right to Equality",
      "C) Right to Freedom of Religion",
      "D) Right to Freedom"
    ],
    "answer": "A",
    "explanation": "Article 24 of the Constitution prohibits the employment of children below the age of 14 years in any factory, mine, or other hazardous employment. This is part of the Right against Exploitation (Articles 23-24).",
    "unit": 1,
    "year": 2025,
    "source": "PYQ 2025 Set 2",
    "years": [
      2025
    ],
    "sources": [
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_132",
    "topic": "right_to_privacy"
  },
  {
    "question": "Directive Principles have been included in the Constitution to achieve the ideals of:",
    "options": [
      "A) Individual liberty",
      "B) Political liberty",
      "C) Democracy",
      "D) Welfare state"
    ],
    "answer": "D",
    "explanation": "Correct answer is D) Welfare state.",
    "unit": 1,
    "year": 2025,
    "source": "PYQ 2025 Set 2",
    "years": [
      2025
    ],
    "sources": [
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_133",
    "topic": "dpsp"
  },
  {
    "question": "Consider the following statements:\n1) The Indian Constitution is an unwritten Constitution.\n2) The Indian Constitution is a written Constitution.\n3) The Indian Constitution is largely based on the Government of India Act, 1935.\nWhich of the statements given above are correct?",
    "options": [
      "A) 1 and 3 are correct",
      "B) 2 and 1 are correct",
      "C) 1 and 2 are correct",
      "D) 2 and 3 are correct"
    ],
    "answer": "D",
    "explanation": "The Constitution of India is a written constitution and is largely based on the Government of India Act 1935.",
    "unit": 1,
    "year": 2025,
    "source": "PYQ 2025 Set 2",
    "years": [
      2025
    ],
    "sources": [
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_134",
    "topic": "goi_act_1935"
  },
  {
    "question": "The text of the Preamble of the Constitution of India aims to secure:",
    "options": [
      "A) fundamental rights to all individuals",
      "B) fundamental duties to citizen of India",
      "C) dignity of the individual and unity and integrity of the nation",
      "D) security of service to Government Servant."
    ],
    "answer": "C",
    "explanation": "Correct answer is C) dignity of the individual and unity and integrity of the nation.",
    "unit": 1,
    "year": 2025,
    "source": "PYQ 2025 Set 2",
    "years": [
      2025
    ],
    "sources": [
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_135",
    "topic": "goi_act_1935"
  },
  {
    "question": "Which among the following is not a Fundamental Right?",
    "options": [
      "A) Right to strike",
      "B) Right against exploitation",
      "C) Right to equality",
      "D) Right to freedom of religion"
    ],
    "answer": "A",
    "explanation": "Correct answer is A) Right to strike.",
    "unit": 1,
    "year": 2025,
    "source": "PYQ 2025 Set 2",
    "years": [
      2025
    ],
    "sources": [
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_136",
    "topic": "right_to_privacy"
  },
  {
    "question": "The age of offence of child abuse is mentioned as years under IT Act, 2000.",
    "options": [
      "A) 14 years",
      "B) 16 years",
      "C) 18 years",
      "D) 21 years"
    ],
    "answer": "C",
    "explanation": "Correct answer is C) 18 years.",
    "unit": 3,
    "year": 2025,
    "source": "PYQ 2025 Set 2",
    "years": [
      2025
    ],
    "sources": [
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_137",
    "topic": "it_act_2000"
  },
  {
    "question": "In the following case the Hon’ble Supreme Court struck down Section 66 A of I.T. Act:",
    "options": [
      "A) Kartar Singh v/s State of Punjab",
      "B) Maneka Gandhi v/s UOI",
      "C) K. A. Abbas v/s UOI",
      "D) Shreya Singhal v/s UOI"
    ],
    "answer": "D",
    "explanation": "Correct answer is D) Shreya Singhal v/s UOI.",
    "unit": 3,
    "year": 2025,
    "source": "PYQ 2025 Set 2",
    "years": [
      2025
    ],
    "sources": [
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_138",
    "topic": "it_act_2000"
  },
  {
    "question": "Online Contracts can be formed by:",
    "options": [
      "A) E-mails",
      "B) Website forms",
      "C) EULA",
      "D) All of the above"
    ],
    "answer": "D",
    "explanation": "Correct answer is D) All of the above.",
    "unit": 3,
    "year": 2025,
    "source": "PYQ 2025 Set 2",
    "years": [
      2025
    ],
    "sources": [
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_139",
    "topic": "it_act_2000"
  },
  {
    "question": "Electronic signature is defined under:",
    "options": [
      "A) Sec 2(ta) of IT Act",
      "B) Sec 28(ta) of IT Act",
      "C) Sec 2(ta) of Indian Contract Act",
      "D) none of the options"
    ],
    "answer": "A",
    "explanation": "Correct answer is A) Sec 2(ta) of IT Act.",
    "unit": 3,
    "year": 2025,
    "source": "PYQ 2025 Set 2",
    "years": [
      2025
    ],
    "sources": [
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_140",
    "topic": "geographical_indications"
  },
  {
    "question": "Electronic Data Interchange (EDI) provides:",
    "options": [
      "A) standardized system",
      "B) Coding trade transactions",
      "C) Is used by organizations that a make a large no. of regular transaction",
      "D) All the above"
    ],
    "answer": "D",
    "explanation": "Correct answer is D) All the above.",
    "unit": 3,
    "year": 2025,
    "source": "PYQ 2025 Set 2",
    "years": [
      2025
    ],
    "sources": [
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_141",
    "topic": "dpdpa_2023"
  },
  {
    "question": "Ubiquity of e-commerce refers to:",
    "options": [
      "A) removal of traditional limitation of geographical location for commerce",
      "B) removal of age restriction for commerce",
      "C) removal of legal system for commerce",
      "D) all of the options"
    ],
    "answer": "A",
    "explanation": "Correct answer is A) removal of traditional limitation of geographical location for commerce.",
    "unit": 3,
    "year": 2025,
    "source": "PYQ 2025 Set 2",
    "years": [
      2025
    ],
    "sources": [
      "PYQ 2025 Set 2"
    ],
    "id": "pyq_142",
    "topic": "cyber_crimes"
  }
];

// ============================================================
// FLASHCARDS DATABASE
// ============================================================
const FLASHCARDS = [
  {
    "id": "fc_001",
    "front": "What is 'Dyarchy'?",
    "back": "Division of provincial subjects into 'Reserved' (Governor's control) and 'Transferred' (Indian ministers). Introduced by GOI Act 1919.",
    "topic": "goi_act_1919",
    "unit": 1
  },
  {
    "id": "fc_002",
    "front": "When was the Constitution adopted and when did it come into force?",
    "back": "Adopted: November 26, 1949 (Constitution Day). Came into force: January 26, 1950 (Republic Day).",
    "topic": "constitutional_history",
    "unit": 1
  },
  {
    "id": "fc_003",
    "front": "Which Act introduced Dyarchy in India?",
    "back": "Government of India Act, 1919 (Montagu-Chelmsford Reforms).",
    "topic": "goi_act_1919",
    "unit": 1
  },
  {
    "id": "fc_004",
    "front": "How many provisions of Indian Constitution are drawn from GOI Act 1935?",
    "back": "Approximately 250 provisions.",
    "topic": "goi_act_1935",
    "unit": 1
  },
  {
    "id": "fc_005",
    "front": "What are the three lists in the Seventh Schedule?",
    "back": "List I – Union List (97 subjects), List II – State List (66 subjects), List III – Concurrent List (47 subjects).",
    "topic": "goi_act_1935",
    "unit": 1
  },
  {
    "id": "fc_006",
    "front": "What happened to Princely States under the Independence Act 1947?",
    "back": "British paramountcy over Princely States lapsed — they were free to join India, Pakistan, or remain independent.",
    "topic": "goi_act_1947",
    "unit": 1
  },
  {
    "id": "fc_007",
    "front": "Who was the Chairman of the Drafting Committee of the Indian Constitution?",
    "back": "Dr. B.R. Ambedkar.",
    "topic": "constituent_assembly",
    "unit": 1
  },
  {
    "id": "fc_008",
    "front": "How long did the Constituent Assembly take to draft the Constitution?",
    "back": "2 years, 11 months, and 18 days (December 9, 1946 to November 26, 1949).",
    "topic": "constituent_assembly",
    "unit": 1
  },
  {
    "id": "fc_009",
    "front": "What does the Preamble declare India to be?",
    "back": "Sovereign, Socialist, Secular, Democratic, Republic.",
    "topic": "preamble",
    "unit": 1
  },
  {
    "id": "fc_010",
    "front": "Which Amendment added 'Socialist' and 'Secular' to the Preamble?",
    "back": "42nd Constitutional Amendment Act, 1976.",
    "topic": "preamble",
    "unit": 1
  },
  {
    "id": "fc_011",
    "front": "Which case held that the Preamble is part of the Constitution?",
    "back": "Kesavananda Bharati v. State of Kerala (1973).",
    "topic": "preamble",
    "unit": 1
  },
  {
    "id": "fc_012",
    "front": "What is 'Quasi-Federal' nature of India?",
    "back": "India has a federal structure (division of powers, written constitution) but unitary features (single citizenship, strong centre). K.C. Wheare's characterization.",
    "topic": "federalism",
    "unit": 1
  },
  {
    "id": "fc_013",
    "front": "Who holds residuary powers under the Indian Constitution?",
    "back": "Union of India (Article 248).",
    "topic": "federalism",
    "unit": 1
  },
  {
    "id": "fc_014",
    "front": "How is Indian Secularism different from Western Secularism?",
    "back": "Indian = Positive secularism (equal respect for all religions). Western = Negative secularism (strict separation of church and state).",
    "topic": "secularism",
    "unit": 1
  },
  {
    "id": "fc_015",
    "front": "Name 5 modes of acquiring Indian citizenship.",
    "back": "1. By Birth, 2. By Descent, 3. By Registration, 4. By Naturalisation, 5. By Incorporation of Territory.",
    "topic": "citizenship",
    "unit": 1
  },
  {
    "id": "fc_016",
    "front": "What does CAA 2019 provide?",
    "back": "Citizenship to persecuted minorities (Hindus, Sikhs, Buddhists, Jains, Parsis, Christians) from Pakistan, Bangladesh, Afghanistan who entered India before Dec 31, 2014. Reduces naturalization to 5 years.",
    "topic": "citizenship",
    "unit": 1
  },
  {
    "id": "fc_017",
    "front": "What does Article 17 abolish?",
    "back": "Untouchability. Its practice is an offence punishable by law.",
    "topic": "right_to_equality",
    "unit": 1
  },
  {
    "id": "fc_018",
    "front": "What does Article 18 abolish?",
    "back": "Titles. The State cannot confer titles except military or academic distinctions.",
    "topic": "right_to_equality",
    "unit": 1
  },
  {
    "id": "fc_019",
    "front": "What are the 6 freedoms under Article 19?",
    "back": "Speech & Expression, Assembly (peacefully), Association, Movement, Residence, Profession/Trade/Business.",
    "topic": "right_to_equality",
    "unit": 1
  },
  {
    "id": "fc_020",
    "front": "What are the three protections under Article 20?",
    "back": "1. No ex-post-facto law, 2. No double jeopardy, 3. No self-incrimination.",
    "topic": "right_to_freedom",
    "unit": 1
  },
  {
    "id": "fc_021",
    "front": "Which Amendment added Article 21A (Right to Education)?",
    "back": "86th Constitutional Amendment Act, 2002.",
    "topic": "right_to_freedom",
    "unit": 1
  },
  {
    "id": "fc_022",
    "front": "Article 21A provides free and compulsory education to children aged:",
    "back": "6 to 14 years.",
    "topic": "right_to_freedom",
    "unit": 1
  },
  {
    "id": "fc_023",
    "front": "Which case declared Privacy a Fundamental Right?",
    "back": "Justice K.S. Puttaswamy v. Union of India (2017) — 9-judge constitutional bench.",
    "topic": "right_to_privacy",
    "unit": 1
  },
  {
    "id": "fc_024",
    "front": "What are the four aspects of Right to Privacy (Puttaswamy)?",
    "back": "1. Bodily autonomy, 2. Informational privacy, 3. Privacy of choice, 4. Decisional autonomy.",
    "topic": "right_to_privacy",
    "unit": 1
  },
  {
    "id": "fc_025",
    "front": "What does Article 25 guarantee?",
    "back": "Freedom of conscience and right to profess, practise, and propagate religion (subject to public order, morality, health).",
    "topic": "freedom_of_religion",
    "unit": 1
  },
  {
    "id": "fc_026",
    "front": "What do Articles 29-30 protect?",
    "back": "Art. 29: Cultural and educational rights of minorities. Art. 30: Right of minorities to establish and administer educational institutions.",
    "topic": "freedom_of_religion",
    "unit": 1
  },
  {
    "id": "fc_027",
    "front": "Who called Article 32 the 'Heart and Soul of the Constitution'?",
    "back": "Dr. B.R. Ambedkar.",
    "topic": "constitutional_remedies",
    "unit": 1
  },
  {
    "id": "fc_028",
    "front": "What is the meaning of 'Habeas Corpus'?",
    "back": "'You shall have the body' — writ to produce a detained person before court to test legality of detention.",
    "topic": "constitutional_remedies",
    "unit": 1
  },
  {
    "id": "fc_029",
    "front": "What is 'Quo Warranto'?",
    "back": "'By what authority' — challenges the legal right of a person to hold a public office.",
    "topic": "constitutional_remedies",
    "unit": 1
  },
  {
    "id": "fc_030",
    "front": "What are the three types of DPSPs?",
    "back": "1. Socialistic (Art. 38-43A), 2. Gandhian (Art. 40, 43, 46, 48), 3. Liberal-Intellectual (Art. 44, 48A, 50, 51).",
    "topic": "dpsp",
    "unit": 1
  },
  {
    "id": "fc_031",
    "front": "Article 44 (DPSP) directs the State to provide:",
    "back": "Uniform Civil Code (UCC) throughout the territory of India.",
    "topic": "dpsp",
    "unit": 1
  },
  {
    "id": "fc_032",
    "front": "How many Fundamental Duties are there?",
    "back": "11 (10 added by 42nd Amendment 1976 + 1 added by 86th Amendment 2002).",
    "topic": "fundamental_duties",
    "unit": 1
  },
  {
    "id": "fc_033",
    "front": "Fundamental Duties were inspired by the constitution of which country?",
    "back": "Former USSR (Soviet Union).",
    "topic": "fundamental_duties",
    "unit": 1
  },
  {
    "id": "fc_034",
    "front": "What is the Basic Structure Doctrine?",
    "back": "Parliament cannot destroy the 'basic structure' of the Constitution while exercising amendment power (Art. 368). Established in Kesavananda Bharati (1973).",
    "topic": "judicial_review",
    "unit": 1
  },
  {
    "id": "fc_035",
    "front": "Is Judicial Review part of the Basic Structure?",
    "back": "Yes. Minerva Mills v. Union of India (1980) held that Judicial Review is an essential feature of the basic structure.",
    "topic": "judicial_review",
    "unit": 1
  },
  {
    "id": "fc_036",
    "front": "What is the minimum age to become President of India?",
    "back": "35 years (Article 58).",
    "topic": "president",
    "unit": 2
  },
  {
    "id": "fc_037",
    "front": "Who administers the oath to the President of India?",
    "back": "Chief Justice of India (Article 60).",
    "topic": "president",
    "unit": 2
  },
  {
    "id": "fc_038",
    "front": "What is Article 108 of the Constitution?",
    "back": "Joint Sitting of both Houses of Parliament. Called by President, presided by Speaker of Lok Sabha.",
    "topic": "parliament",
    "unit": 2
  },
  {
    "id": "fc_039",
    "front": "Who is the ex-officio Chairman of the Rajya Sabha?",
    "back": "Vice President of India.",
    "topic": "parliament",
    "unit": 2
  },
  {
    "id": "fc_040",
    "front": "What is the retirement age of Supreme Court judges?",
    "back": "65 years (High Court judges retire at 62).",
    "topic": "supreme_court",
    "unit": 2
  },
  {
    "id": "fc_041",
    "front": "What does Article 143 provide?",
    "back": "Advisory jurisdiction of the Supreme Court — President can refer any question of law or fact to SC. SC opinion is advisory (not binding).",
    "topic": "supreme_court",
    "unit": 2
  },
  {
    "id": "fc_042",
    "front": "What are the three types of Emergency in India?",
    "back": "1. National Emergency (Art. 352) – War/Armed Rebellion, 2. President's Rule (Art. 356) – State failure, 3. Financial Emergency (Art. 360).",
    "topic": "national_emergency",
    "unit": 2
  },
  {
    "id": "fc_043",
    "front": "Which articles cannot be suspended even during National Emergency?",
    "back": "Article 20 (Protection in conviction) and Article 21 (Right to Life), as per 44th Amendment.",
    "topic": "national_emergency",
    "unit": 2
  },
  {
    "id": "fc_044",
    "front": "What changes did the 42nd Amendment 1976 make?",
    "back": "Added Socialist, Secular, Integrity to Preamble; Part IVA (10 Fundamental Duties); Gave DPSP primacy; Made judiciary less powerful.",
    "topic": "constitutional_amendments",
    "unit": 2
  },
  {
    "id": "fc_045",
    "front": "What did the 61st Amendment (1989) do?",
    "back": "Lowered the voting age from 21 to 18 years.",
    "topic": "constitutional_amendments",
    "unit": 2
  },
  {
    "id": "fc_046",
    "front": "What happened to Article 370 in 2019?",
    "back": "Article 370 was effectively abrogated on Aug 5, 2019. J&K was reorganized into 2 UTs: J&K (with legislature) and Ladakh (without legislature).",
    "topic": "article_370",
    "unit": 2
  },
  {
    "id": "fc_047",
    "front": "Which section of the IT Act was struck down by the Supreme Court in 2015?",
    "back": "Section 66A (Offensive Online Messages) — struck down in Shreya Singhal v. Union of India (2015) as it violated Art. 19(1)(a).",
    "topic": "it_act_2000",
    "unit": 3
  },
  {
    "id": "fc_048",
    "front": "What is Section 69A of the IT Act?",
    "back": "Power of Central Government to block websites/online content. Used for national security, public order, etc.",
    "topic": "it_act_2000",
    "unit": 3
  },
  {
    "id": "fc_049",
    "front": "What is Section 66F of the IT Act?",
    "back": "Cyber terrorism — unauthorized access with intent to threaten sovereignty/security of India. Punishment: Life imprisonment.",
    "topic": "it_act_2000",
    "unit": 3
  },
  {
    "id": "fc_050",
    "front": "What is 'Deepfake' and which law covers it?",
    "back": "AI-generated fake images/videos of real persons. Covered under: Sec. 66E (privacy violation), Sec. 67A/67B if sexual content, IT Amendment Rules 2023.",
    "topic": "cyber_crimes",
    "unit": 3
  },
  {
    "id": "fc_051",
    "front": "What is SPDI?",
    "back": "Sensitive Personal Data or Information. Includes: passwords, financial data, health data, biometrics, sexual orientation. Protected under IT Act 2008 and DPDPA 2023.",
    "topic": "cyber_crimes",
    "unit": 3
  },
  {
    "id": "fc_052",
    "front": "What are the obligations of Significant Social Media Intermediaries (SSMIs)?",
    "back": "Must appoint: Chief Compliance Officer, Nodal Contact Person, Resident Grievance Officer. Submit monthly compliance reports. Provide traceability of message originators.",
    "topic": "intermediary_liability",
    "unit": 3
  },
  {
    "id": "fc_053",
    "front": "What are the 4 rights of Data Principal under DPDPA 2023?",
    "back": "1. Right to Information, 2. Right to Correction/Erasure, 3. Right to Grievance Redressal, 4. Right to Nominate.",
    "topic": "dpdpa_2023",
    "unit": 3
  },
  {
    "id": "fc_054",
    "front": "What is a 'Data Fiduciary' under DPDPA 2023?",
    "back": "An entity that determines the purpose and means of processing personal data (similar to 'Data Controller' in GDPR).",
    "topic": "dpdpa_2023",
    "unit": 3
  },
  {
    "id": "fc_055",
    "front": "Name the 6 types of Intellectual Property Rights.",
    "back": "1. Trademark, 2. Copyright, 3. Patent, 4. Geographical Indication (GI), 5. Industrial Design, 6. Semiconductor Layout Design.",
    "topic": "intellectual_property",
    "unit": 3
  },
  {
    "id": "fc_056",
    "front": "What is a 'Non-Conventional Trademark'?",
    "back": "Trademarks that are not traditional word/logo marks. Examples: Sound marks (jingles), Colour marks (Cadbury purple), Shape marks (Coca-Cola bottle shape), Smell marks.",
    "topic": "trademark",
    "unit": 3
  },
  {
    "id": "fc_057",
    "front": "What is 'Passing Off'?",
    "back": "A common law remedy against misrepresentation that causes damage to another's goodwill/reputation. Available even without trademark registration.",
    "topic": "trademark",
    "unit": 3
  },
  {
    "id": "fc_058",
    "front": "What does copyright protect?",
    "back": "Expression of ideas in: Literary, Dramatic, Musical, Artistic works, Cinematographic films, Sound recordings. Does NOT protect ideas themselves.",
    "topic": "copyright",
    "unit": 3
  },
  {
    "id": "fc_059",
    "front": "What is the 'idea-expression dichotomy' in copyright?",
    "back": "Copyright protects the expression of ideas, not the ideas themselves. A factual or conceptual idea cannot be copyrighted — only a specific expression of it can.",
    "topic": "copyright",
    "unit": 3
  },
  {
    "id": "fc_060",
    "front": "What are the 3 criteria for patentability?",
    "back": "1. Novel (new), 2. Non-obvious (inventive step), 3. Capable of Industrial Application (useful).",
    "topic": "patents",
    "unit": 3
  },
  {
    "id": "fc_061",
    "front": "What is Section 3(d) of the Patents Act?",
    "back": "Prevents patents for new forms of known substances unless they show significantly enhanced efficacy. Prevents 'evergreening' of drug patents. Upheld in Novartis case (2013).",
    "topic": "patents",
    "unit": 3
  },
  {
    "id": "fc_062",
    "front": "What is TKDL?",
    "back": "Traditional Knowledge Digital Library — India's database documenting traditional knowledge (about plants, yoga, etc.) to prevent biopiracy by foreign entities.",
    "topic": "geographical_indications",
    "unit": 3
  },
  {
    "id": "fc_063",
    "front": "Name 4 types of E-Commerce models.",
    "back": "B2B (Business to Business), B2C (Business to Consumer), C2C (Consumer to Consumer), G2C (Government to Consumer).",
    "topic": "e_commerce",
    "unit": 4
  },
  {
    "id": "fc_064",
    "front": "What is UPI?",
    "back": "Unified Payments Interface — real-time payment system developed by NPCI (National Payments Corporation of India), regulated by RBI.",
    "topic": "e_commerce",
    "unit": 4
  },
  {
    "id": "fc_065",
    "front": "What are the 5 types of E-Contracts?",
    "back": "1. Shrink-wrap, 2. Click-wrap (most common), 3. Browse-wrap (least enforceable), 4. Email contracts, 5. EDI (Electronic Data Interchange).",
    "topic": "e_contracts",
    "unit": 4
  },
  {
    "id": "fc_066",
    "front": "What are the essentials of a valid contract under Indian Contract Act 1872?",
    "back": "1. Offer & Acceptance, 2. Consideration, 3. Free Consent, 4. Capacity, 5. Lawful Object, 6. Not expressly void.",
    "topic": "e_contracts",
    "unit": 4
  },
  {
    "id": "fc_067",
    "front": "What is 'Conflict of Interest' in professional ethics?",
    "back": "When a professional's personal interests conflict with their professional duties. Must be disclosed; recusal may be required.",
    "topic": "professional_ethics",
    "unit": 4
  },
  {
    "id": "fc_068",
    "front": "Name two major professional codes of ethics for computing professionals.",
    "back": "1. ACM (Association for Computing Machinery) Code of Ethics, 2. IEEE Code of Ethics.",
    "topic": "professional_ethics",
    "unit": 4
  }
];

// ============================================================
// COMPUTED ANALYTICS
// ============================================================
function computeTopicFrequency() {
  const freq = {};
  PYQS.forEach(q => {
    freq[q.topic] = (freq[q.topic] || 0) + 1;
  });
  return freq;
}

function computeUnitWeightage() {
  const weights = {1:0,2:0,3:0,4:0};
  PYQS.forEach(q => weights[q.unit]++);
  return weights;
}

function getTopicById(id) {
  return TOPICS.find(t => t.id === id);
}

function getPYQsByTopic(topicId) {
  return PYQS.filter(q => q.topic === topicId);
}

function getPYQsByUnit(unit) {
  return PYQS.filter(q => q.unit === unit);
}

function getPYQsByYear(year) {
  return PYQS.filter(q => q.year === year);
}

function getFlashcardsByUnit(unit) {
  return FLASHCARDS.filter(f => f.unit === unit);
}

function getTopicsByUnit(unit) {
  return TOPICS.filter(t => t.unit === unit);
}

function getImportanceLevel(score) {
  if (score >= 9) return { label: 'Very High', color: '#dc2626', emoji: '🔴' };
  if (score >= 7) return { label: 'High', color: '#ea580c', emoji: '🟠' };
  if (score >= 5) return { label: 'Medium', color: '#ca8a04', emoji: '🟡' };
  return { label: 'Low', color: '#16a34a', emoji: '🟢' };
}

function getRankedTopics() {
  const freq = computeTopicFrequency();
  return TOPICS.map(t => ({
    ...t,
    frequency: freq[t.id] || 0,
    pyqYears: [...new Set((PYQS.filter(q => q.topic === t.id)).map(q => q.year))]
  })).sort((a,b) => (b.frequency + b.importanceScore) - (a.frequency + a.importanceScore));
}

// Export
window.UNIT_META = UNIT_META;
window.SUBTOPIC_SUMMARIES = SUBTOPIC_SUMMARIES;
window.TOPICS = TOPICS;
window.PYQS = PYQS;
window.FLASHCARDS = FLASHCARDS;
window.DataUtils = {
  computeTopicFrequency,
  computeUnitWeightage,
  getTopicById,
  getPYQsByTopic,
  getPYQsByUnit,
  getPYQsByYear,
  getFlashcardsByUnit,
  getTopicsByUnit,
  getImportanceLevel,
  getRankedTopics
};
