import { IndianStandard } from '../types/standards';

export const CURATED_STANDARDS: IndianStandard[] = [
  // 1. TMT Bars
  {
    id: 'IS 1786 : 2008',
    code: 'IS 1786',
    year: 2008,
    title: 'High Strength Deformed Steel Bars and Wires for Concrete Reinforcement - Specification (Fourth Revision)',
    hindiTitle: 'कंक्रीट पुनर्बलन के लिए उच्च सामर्थ्य विरूपित इस्पात छड़ें और तार - विशिष्टि',
    category: 'Civil & Infrastructure',
    standardType: 'Product Specification',
    reaffirmationYear: 2023,
    amendmentsCount: 3,
    latestAmendmentNote: 'Amendment No. 3 incorporated October 2021 regarding total elongation at maximum force and micro-alloying criteria.',
    scope: 'Covers requirements of deformed steel bars and wires for use as reinforcement in concrete in the strength grades Fe 415, Fe 415D, Fe 500, Fe 500D, Fe 550, Fe 550D, Fe 600, and corrosion resistant steel (CRS).',
    keyParametersTested: [
      '0.2% Proof Stress / Yield Stress (Min 500 N/mm² for Fe 500D)',
      'Tensile Strength / Proof Stress Ratio (Min 1.10 for Fe 500D)',
      'Elongation at Gauge Length 5.65√A (Min 16.0% for Fe 500D)',
      'Total Elongation at Max Force (Min 5% for D grades)',
      'Bend and Rebend Test without rupture or cracks',
      'Chemical Composition: Carbon (Max 0.25%), Sulphur (Max 0.040%), Phosphorus (Max 0.040%)'
    ],
    keywords: [
      'tmt', 'tmt bars', 'rebar', 'reinforcement', 'steel bars', 'fe 500', 'fe 500d', 'fe 550', 'fe 415',
      'concrete reinforcement', 'deformed steel', 'yield stress', 'rebend test', 'corrosion resistant', 'crs steel'
    ],
    normativeReferences: [
      {
        standardId: 'IS 1608 (Part 1) : 2018',
        title: 'Metallic Materials - Tensile Testing at Ambient Temperature',
        relationType: 'Test Method',
        description: 'Mandatory standard for conducting proof stress, tensile strength, and elongation tests on reinforcement bars.'
      },
      {
        standardId: 'IS 228 (Various Parts)',
        title: 'Methods of Chemical Analysis of Steels',
        relationType: 'Test Method',
        description: 'Referee chemical testing methods for carbon, sulfur, phosphorus, and micro-alloying elements.'
      },
      {
        standardId: 'IS 1599 : 2019',
        title: 'Metallic Materials - Bend Test',
        relationType: 'Test Method',
        description: 'Standard procedure for conducting 180-degree bend and reverse bend tests around mandated mandrels.'
      },
      {
        standardId: 'IS 456 : 2000',
        title: 'Code of Practice for Plain and Reinforced Concrete',
        relationType: 'Allied Standard',
        description: 'Governing structural design standard detailing development lengths, cover requirements, and rebar lap specifications.'
      }
    ],
    qco: {
      isMandatory: true,
      orderName: 'Steel and Steel Products (Quality Control) Order, 2020',
      gazetteRef: 'S.O. 1678(E) dated 27 May 2020',
      enforcingMinistry: 'Ministry of Steel, Government of India',
      isiMarkMandatory: true,
      effectiveDate: '2020-05-27'
    },
    officialDocUrl: 'https://www.standardsbis.in/gem/IS1786'
  },

  // 2. Concrete Code of Practice
  {
    id: 'IS 456 : 2000',
    code: 'IS 456',
    year: 2000,
    title: 'Plain and Reinforced Concrete - Code of Practice (Fourth Revision)',
    hindiTitle: 'सादा एवं प्रबलित कंक्रीट - रीति संहिता',
    category: 'Civil & Infrastructure',
    standardType: 'Test Method / Code of Practice',
    reaffirmationYear: 2021,
    amendmentsCount: 5,
    latestAmendmentNote: 'Amendment No. 5 issued June 2019 covering revised mix design stipulations and durability parameters for harsh coastal exposures.',
    scope: 'Deals with the general structural use of plain and reinforced concrete in buildings, bridges, and infrastructure works. Does not cover prestressed concrete or precast components requiring specialized codes.',
    keyParametersTested: [
      'Characteristic Compressive Strength (28-day cube test)',
      'Water-Cement Ratio by Mass (Max 0.40 to 0.55 depending on exposure)',
      'Minimum Cement Content (300 to 360 kg/m³)',
      'Nominal Concrete Cover to Reinforcement',
      'Slump and Workability Test'
    ],
    keywords: [
      'concrete', 'rcc', 'plain concrete', 'reinforced concrete', 'mix design', 'm25', 'm30', 'm40',
      'slump', 'curing', 'compressive strength', 'cover', 'cement content', 'water cement ratio'
    ],
    normativeReferences: [
      {
        standardId: 'IS 516 (Part 1/Sec 1) : 2021',
        title: 'Hardened Concrete - Methods of Test - Compressive, Flexural and Split Tensile Strength',
        relationType: 'Test Method',
        description: 'Standard procedure for cube casting, curing, and testing compressive strength.'
      },
      {
        standardId: 'IS 1199 : 1959',
        title: 'Methods of Sampling and Analysis of Concrete',
        relationType: 'Test Method',
        description: 'Procedure for fresh concrete sampling, slump test, and compaction factor testing.'
      },
      {
        standardId: 'IS 383 : 2016',
        title: 'Coarse and Fine Aggregate for Concrete - Specification',
        relationType: 'Normative Reference',
        description: 'Specification for crushed stone, gravel, and manufactured sand (M-Sand).'
      }
    ],
    qco: {
      isMandatory: false,
      isiMarkMandatory: false
    },
    officialDocUrl: 'https://www.standardsbis.in/gem/IS456'
  },

  // 3. Portland Pozzolana Cement
  {
    id: 'IS 1489 (Part 1) : 2015',
    code: 'IS 1489-1',
    year: 2015,
    title: 'Portland Pozzolana Cement - Specification - Part 1: Flyash Based (Fourth Revision)',
    hindiTitle: 'पोर्टलैंड पोज़ोलाना सीमेंट - विशिष्टि - भाग 1: फ्लाईऐश आधारित',
    category: 'Civil & Infrastructure',
    standardType: 'Product Specification',
    reaffirmationYear: 2022,
    amendmentsCount: 3,
    latestAmendmentNote: 'Amendment No. 3 regarding packaging standards and flyash constituent percentage verification (15% to 35%).',
    scope: 'Covers manufacture, chemical and physical requirements of flyash-based Portland Pozzolana Cement (PPC) suitable for general construction, hydraulic structures, and marine works.',
    keyParametersTested: [
      'Fineness by Blaine Specific Surface Area (Min 300 m²/kg)',
      'Soundness by Le-Chatelier Expansion (Max 10 mm) and Autoclave Expansion (Max 0.8%)',
      'Initial Setting Time (Min 30 minutes)',
      'Final Setting Time (Max 600 minutes)',
      'Compressive Strength at 72h (Min 16 MPa), 168h (Min 22 MPa), 672h (Min 33 MPa)',
      'Drying Shrinkage (Max 0.15%)'
    ],
    keywords: [
      'cement', 'ppc', 'portland pozzolana cement', 'flyash', 'blaine fineness', 'setting time',
      'le-chatelier', 'soundness', 'compressive strength', 'hydraulic structures', 'marine works'
    ],
    normativeReferences: [
      {
        standardId: 'IS 4031 (Parts 1 to 15)',
        title: 'Methods of Physical Tests for Hydraulic Cement',
        relationType: 'Test Method',
        description: 'Mandatory standard suite for determining fineness, soundness, setting time, and strength.'
      },
      {
        standardId: 'IS 4032 : 1985',
        title: 'Method of Chemical Analysis of Hydraulic Cement',
        relationType: 'Test Method',
        description: 'Analytical determination of insoluble residue, magnesia, and loss on ignition.'
      }
    ],
    qco: {
      isMandatory: true,
      orderName: 'Cement (Quality Control) Order, 2003',
      gazetteRef: 'S.O. 191(E) as amended',
      enforcingMinistry: 'Ministry of Commerce and Industry (DPIIT)',
      isiMarkMandatory: true,
      effectiveDate: '2003-02-17'
    },
    officialDocUrl: 'https://www.standardsbis.in/gem/IS1489P1'
  },

  // 4. Structural Steel
  {
    id: 'IS 2062 : 2011',
    code: 'IS 2062',
    year: 2011,
    title: 'Hot Rolled Medium and High Tensile Structural Steel - Specification (Seventh Revision)',
    hindiTitle: 'तप्त बेल्लित मध्यम और उच्च तनन संरचनात्मक इस्पात - विशिष्टि',
    category: 'Civil & Infrastructure',
    standardType: 'Product Specification',
    reaffirmationYear: 2021,
    amendmentsCount: 2,
    latestAmendmentNote: 'Incorporates grade harmonization for E250, E350, and E450 structural steels and sub-qualities A, BR, B0, C.',
    scope: 'Covers requirements of steel plates, sections, flats, bars, and wide flats intended for use in bolted, riveted, and welded construction of bridges, transmission towers, buildings, and industrial structures.',
    keyParametersTested: [
      'Yield Strength (Min 250 MPa for E250, 350 MPa for E350)',
      'Tensile Strength (410 MPa for E250)',
      'Charpy V-notch Impact Energy at 0°C or -20°C (Min 27 Joules for Sub-quality B0/C)',
      'Carbon Equivalent (CE) Max 0.42 for weldability',
      'Bend Test 180 degrees'
    ],
    keywords: [
      'structural steel', 'steel plates', 'girders', 'i-beam', 'channels', 'angles', 'e250', 'e350',
      'bridges', 'transmission towers', 'welded structures', 'charpy v-notch', 'tensile strength'
    ],
    normativeReferences: [
      {
        standardId: 'IS 1608 (Part 1) : 2018',
        title: 'Metallic Materials - Tensile Testing',
        relationType: 'Test Method',
        description: 'Mandatory test method for tensile and yield determination.'
      },
      {
        standardId: 'IS 1757 (Part 1) : 2020',
        title: 'Metallic Materials - Charpy Pendulum Impact Test',
        relationType: 'Test Method',
        description: 'Testing impact resistance and notch toughness at sub-ambient temperatures.'
      }
    ],
    qco: {
      isMandatory: true,
      orderName: 'Steel and Steel Products (Quality Control) Order, 2020',
      gazetteRef: 'S.O. 1678(E)',
      enforcingMinistry: 'Ministry of Steel',
      isiMarkMandatory: true,
      effectiveDate: '2020-05-27'
    },
    officialDocUrl: 'https://www.standardsbis.in/gem/IS2062'
  },

  // 5. HDPE Pipes
  {
    id: 'IS 4984 : 2016',
    code: 'IS 4984',
    year: 2016,
    title: 'Polyethylene Pipes for Water Supply - Specification (Fifth Revision)',
    hindiTitle: 'जल प्रदाय के लिए पॉलीएथिलीन पाइपें - विशिष्टि',
    category: 'Water & Sanitation',
    standardType: 'Product Specification',
    reaffirmationYear: 2021,
    amendmentsCount: 2,
    latestAmendmentNote: 'Incorporates PE 100 grade pressure ratings PN 6, PN 10, PN 16 and carbon black dispersion quality criteria.',
    scope: 'Lays down requirements for high-density polyethylene (HDPE) pipes made from PE 63, PE 80, and PE 100 virgin raw materials for potable water supply, rural water missions, and irrigation.',
    keyParametersTested: [
      'Hydrostatic Internal Pressure Resistance at 27°C for 100h and 80°C for 165h/1000h',
      'Melt Flow Rate (MFR) 0.2 to 1.1 g/10 min at 190°C/5kg load',
      'Carbon Black Content (2.0% to 2.5% by mass)',
      'Carbon Black Dispersion (Grade <= 3)',
      'Oxidation Induction Time (OIT Min 20 minutes at 200°C)',
      'Elongation at Break (Min 350%)'
    ],
    keywords: [
      'hdpe', 'hdpe pipe', 'polyethylene pipe', 'water supply', 'drinking water', 'potable water',
      'pe 100', 'pe 80', 'pn 6', 'pn 10', 'pn 16', 'hydrostatic pressure', 'carbon black', 'jal jeevan'
    ],
    normativeReferences: [
      {
        standardId: 'IS 2530 : 1963',
        title: 'Methods of Test for Polyethylene Moulding Materials and Polyethylene Compounds',
        relationType: 'Test Method',
        description: 'Mandatory procedure for density, melt flow index, and carbon black measurement.'
      },
      {
        standardId: 'IS 12235 (Part 2) : 2004',
        title: 'Thermoplastics Pipes and Fittings - Methods of Test - Measurement of Dimensions',
        relationType: 'Test Method',
        description: 'Wall thickness and ovality measurement methods.'
      },
      {
        standardId: 'IS 7634 (Part 2) : 2012',
        title: 'Laying and Jointing of Polyethylene (PE) Pipes - Code of Practice',
        relationType: 'Allied Standard',
        description: 'Butt-welding, electrofusion jointing, and trench backfilling guidelines.'
      }
    ],
    qco: {
      isMandatory: true,
      orderName: 'Pipes and Fittings (Quality Control) Order, 2023',
      gazetteRef: 'S.O. 5012(E) dated 23 Nov 2023',
      enforcingMinistry: 'Ministry of Chemicals and Petrochemicals',
      isiMarkMandatory: true,
      effectiveDate: '2024-05-23'
    },
    officialDocUrl: 'https://www.standardsbis.in/gem/IS4984'
  },

  // 6. Submersible Pumps
  {
    id: 'IS 8034 : 2018',
    code: 'IS 8034',
    year: 2018,
    title: 'Submersible Pumpsets for Clear, Cold Drinking Water - Specification (Third Revision)',
    hindiTitle: 'स्वच्छ, शीतल पेय जल के लिए निमज्ज्य पंपसैट - विशिष्टि',
    category: 'Water & Sanitation',
    standardType: 'Product Specification',
    reaffirmationYear: 2023,
    amendmentsCount: 1,
    latestAmendmentNote: 'Updated star-rating and BEE energy efficiency benchmarks for submersible pump duty points.',
    scope: 'Covers design, manufacturing, performance, and efficiency requirements of borehole submersible pumpsets driven by water-filled or canned electric motors for agricultural and rural potable water extraction.',
    keyParametersTested: [
      'Overall Efficiency at Duty Point (% match to BEE Star benchmarks)',
      'Hydrostatic Casing Pressure Test (1.5 times maximum discharge pressure for 5 mins)',
      'Insulation Resistance Test (Min 20 Megaohms cold, 5 Megaohms hot)',
      'High Voltage Dielectric Withstand Test (1500 V AC for 1 minute)',
      'Head-Discharge Performance Curve Verification'
    ],
    keywords: [
      'submersible pump', 'borewell pump', 'pumpset', 'drinking water', 'water extraction',
      'discharge', 'head', 'bee star', 'pump efficiency', 'motor winding', 'jal jeevan mission'
    ],
    normativeReferences: [
      {
        standardId: 'IS 9221 : 1979',
        title: 'Method for Acceptance Tests for Centrifugal, Mixed Flow and Axial Flow Pumps',
        relationType: 'Test Method',
        description: 'Standard flow rate and manometric head measurement tolerances.'
      },
      {
        standardId: 'IS 9283 : 2013',
        title: 'Motors for Submersible Pumpsets - Specification',
        relationType: 'Normative Reference',
        description: 'Electrical and mechanical specifications for water-lubricated submersible drive motors.'
      }
    ],
    qco: {
      isMandatory: true,
      orderName: 'Pumps (Quality Control) Order, 2020',
      gazetteRef: 'S.O. 2450(E)',
      enforcingMinistry: 'Ministry of Heavy Industries',
      isiMarkMandatory: true,
      effectiveDate: '2021-01-01'
    },
    officialDocUrl: 'https://www.standardsbis.in/gem/IS8034'
  },

  // 7. Mild Steel Tubes & Pipes
  {
    id: 'IS 1239 (Part 1) : 2004',
    code: 'IS 1239-1',
    year: 2004,
    title: 'Steel Tubes, Tubulars and Other Wrought Steel Fittings - Part 1: Steel Tubes (Sixth Revision)',
    hindiTitle: 'इस्पात नलिकाएं, ट्यूबलर और अन्य गढ़े इस्पात फिटिंग - भाग 1: इस्पात नलिकाएं',
    category: 'Water & Sanitation',
    standardType: 'Product Specification',
    reaffirmationYear: 2020,
    amendmentsCount: 4,
    latestAmendmentNote: 'Stipulates minimum zinc coating mass of 400 g/m² for hot dip galvanized (GI) pipes.',
    scope: 'Specifies requirements for welded and seamless plain end or screwed and socketed steel tubes in light, medium, and heavy series used for water, gas, steam, and compressed air lines.',
    keyParametersTested: [
      'Hydrostatic Pressure Test (5.0 MPa held for min 5 seconds without leakage)',
      'Galvanizing Coating Mass (Min 400 g/m² on both faces for GI tubes)',
      'Flattening Test or Cold Bend Test without crack opening',
      'Tensile Strength (Min 320 MPa) and Elongation (Min 12% to 20%)'
    ],
    keywords: [
      'gi pipe', 'ms pipe', 'steel tubes', 'galvanized iron', 'medium class', 'heavy class',
      'screwed and socketed', 'water pipeline', 'steam pipes', 'plumbing'
    ],
    normativeReferences: [
      {
        standardId: 'IS 4736 : 1986',
        title: 'Hot-dip Zinc Coatings on Mild Steel Tubes - Specification',
        relationType: 'Normative Reference',
        description: 'Mandatory standard for uniformity, adherence, and mass of zinc on galvanized pipes.'
      },
      {
        standardId: 'IS 1608 (Part 1) : 2018',
        title: 'Metallic Materials - Tensile Testing',
        relationType: 'Test Method',
        description: 'Determines yield point and elongation across longitudinal strip specimens.'
      }
    ],
    qco: {
      isMandatory: true,
      orderName: 'Steel Tubes (Quality Control) Order, 2020',
      gazetteRef: 'S.O. 4118(E)',
      enforcingMinistry: 'Ministry of Steel',
      isiMarkMandatory: true,
      effectiveDate: '2021-06-01'
    },
    officialDocUrl: 'https://www.standardsbis.in/gem/IS1239P1'
  },

  // 8. Drinking Water Quality Standard
  {
    id: 'IS 10500 : 2012',
    code: 'IS 10500',
    year: 2012,
    title: 'Drinking Water - Specification (Second Revision)',
    hindiTitle: 'पेय जल - विशिष्टि',
    category: 'Water & Sanitation',
    standardType: 'Product Specification',
    reaffirmationYear: 2021,
    amendmentsCount: 3,
    latestAmendmentNote: 'Amended permissible limits for total dissolved solids (TDS), pesticide residues, and arsenic (0.01 mg/l max).',
    scope: 'Prescribes the quality requirements, acceptable limits, and permissible limits in the absence of alternate sources for drinking water supplied through municipal taps, community RO plants, or packaged tankers.',
    keyParametersTested: [
      'pH Value (Acceptable 6.5 to 8.5)',
      'Total Dissolved Solids (Acceptable max 500 mg/l, Permissible max 2000 mg/l)',
      'Turbidity (Acceptable max 1 NTU, Permissible max 5 NTU)',
      'Total Hardness as CaCO3 (Acceptable max 200 mg/l)',
      'Bacteriological Quality: E. coli or thermotolerant coliform bacteria absent in any 100 ml sample',
      'Heavy Metals: Lead (Max 0.01 mg/l), Arsenic (Max 0.01 mg/l), Fluoride (Max 1.0 mg/l)'
    ],
    keywords: [
      'drinking water', 'potable water', 'water quality', 'jal jeevan', 'water treatment',
      'tds', 'turbidity', 'ph', 'hardness', 'coliform', 'heavy metals', 'fluoride', 'arsenic'
    ],
    normativeReferences: [
      {
        standardId: 'IS 3025 (Multiple Parts)',
        title: 'Methods of Sampling and Test (Physical and Chemical) for Water and Wastewater',
        relationType: 'Test Method',
        description: 'Comprehensive testing procedures for all water quality parameters.'
      },
      {
        standardId: 'IS 1622 : 1981',
        title: 'Methods of Sampling and Microbiological Examination of Water',
        relationType: 'Test Method',
        description: 'Bacteriological detection protocol for coliform and pathogens.'
      }
    ],
    qco: {
      isMandatory: false,
      isiMarkMandatory: false
    },
    officialDocUrl: 'https://www.standardsbis.in/gem/IS10500'
  },

  // 9. PVC Insulated Electric Cables
  {
    id: 'IS 694 : 2010',
    code: 'IS 694',
    year: 2010,
    title: 'Polyvinyl Chloride Insulated Unsheathed and Sheathed Cables/Cords with Rigid and Flexible Conductor for Working Voltages up to and Including 450/750 V - Specification (Fourth Revision)',
    hindiTitle: '450/750 वोल्ट तक के कार्यकारी वोल्टता के लिए पीवीसी रोधित केबल - विशिष्टि',
    category: 'Electrical & Electronics',
    standardType: 'Product Specification',
    reaffirmationYear: 2020,
    amendmentsCount: 2,
    latestAmendmentNote: 'Introduced FRLS (Flame Retardant Low Smoke) and halogen-free compounds performance criteria.',
    scope: 'Covers requirements of PVC insulated and sheathed electric cables and cords for fixed wiring in residential, commercial, industrial installations and public works tenders.',
    keyParametersTested: [
      'Conductor Resistance at 20°C (Ohm/km as per IS 8130)',
      'Insulation Resistance Constant at 70°C',
      'High Voltage Spark Test and 3 kV AC Water Immersion Withstand Test',
      'Oxygen Index (Min 29%) and Temperature Index (Min 250°C for FRLS)',
      'Smoke Density Rating (Max 60% smoke obscuration for FRLS)',
      'Acid Gas Generation (Max 20% by mass for FRLS)'
    ],
    keywords: [
      'cables', 'electric cables', 'frls', 'pvc cables', 'copper wires', 'flexible conductor',
      'building wire', 'wiring', 'spark test', 'flame retardant', 'low smoke', 'conduit wire'
    ],
    normativeReferences: [
      {
        standardId: 'IS 8130 : 2013',
        title: 'Conductors for Insulated Electric Cables and Flexible Cords - Specification',
        relationType: 'Normative Reference',
        description: 'Mandatory standard for copper/aluminum conductor purity, resistance, and stranding.'
      },
      {
        standardId: 'IS 10810 (Multiple Parts)',
        title: 'Methods of Test for Cables',
        relationType: 'Test Method',
        description: 'Official BIS test procedures for flammability, oxygen index, and insulation.'
      },
      {
        standardId: 'IS 732 : 2019',
        title: 'Code of Practice for Electrical Wiring Installations',
        relationType: 'Allied Standard',
        description: 'Installation and current carrying capacity guideline for building circuits.'
      }
    ],
    qco: {
      isMandatory: true,
      orderName: 'Electrical Wires, Cables and Appliances (Quality Control) Order, 2003',
      gazetteRef: 'S.O. 189(E) dated 17 Feb 2003',
      enforcingMinistry: 'Ministry of Commerce & Industry',
      isiMarkMandatory: true,
      effectiveDate: '2003-02-17'
    },
    officialDocUrl: 'https://www.standardsbis.in/gem/IS694'
  },

  // 10. Electrical Wiring Code of Practice
  {
    id: 'IS 732 : 2019',
    code: 'IS 732',
    year: 2019,
    title: 'Code of Practice for Electrical Wiring Installations (Fourth Revision)',
    hindiTitle: 'वैद्युत वायरिंग संस्थापनों की रीति संहिता',
    category: 'Electrical & Electronics',
    standardType: 'Safety & Installation Guide',
    reaffirmationYear: 2024,
    amendmentsCount: 1,
    latestAmendmentNote: 'Incorporates harmonic derating factors, surge protection device (SPD) integration, and EV charging conduit provisions.',
    scope: 'Prescribes design, selection of equipment, erection, inspection, and testing of electrical wiring installations operating at voltages up to 1000 V AC in residential, institutional, and commercial complexes.',
    keyParametersTested: [
      'Earthing Continuity and Earth Resistance (Max 1 to 5 Ohms depending on application)',
      'Insulation Resistance Test between conductors and earth (Min 1 Megaohm)',
      'Residual Current Device (RCD) 30 mA tripping time within 40 ms',
      'Conduit Space Factor (Max 40% fill factor)'
    ],
    keywords: [
      'electrical wiring', 'internal electrification', 'earthing', 'rcd', 'mcb', 'distribution board',
      'conduit', 'surge protection', 'safety clearance', 'building electrification', 'cpwd electrical'
    ],
    normativeReferences: [
      {
        standardId: 'IS 3043 : 2018',
        title: 'Code of Practice for Earthing',
        relationType: 'Normative Reference',
        description: 'Mandatory standard governing pipe, plate, and chemical maintenance-free earthing.'
      },
      {
        standardId: 'IS 694 : 2010',
        title: 'Polyvinyl Chloride Insulated Cables',
        relationType: 'Normative Reference',
        description: 'Mandates approved fire-retardant wiring cables in electrical circuits.'
      },
      {
        standardId: 'IS/IEC 60898-1 : 2015',
        title: 'Circuit-Breakers for Overcurrent Protection for Household and Similar Installations',
        relationType: 'Normative Reference',
        description: 'Specifies MCB breaking capacity and tripping characteristics.'
      }
    ],
    qco: {
      isMandatory: false,
      isiMarkMandatory: false
    },
    officialDocUrl: 'https://www.standardsbis.in/gem/IS732'
  },

  // 11. LED Street Lighting & Floodlighting
  {
    id: 'IS 10322 (Part 5/Sec 3) : 2012',
    code: 'IS 10322-5-3',
    year: 2012,
    title: 'Luminaires - Part 5: Particular Requirements - Section 3: Luminaires for Road and Street Lighting (First Revision)',
    hindiTitle: 'प्रदीपक - भाग 5: विशिष्ट अपेक्षाएं - खंड 3: सड़क और मार्ग प्रदीपक',
    category: 'Electrical & Electronics',
    standardType: 'Product Specification',
    reaffirmationYear: 2022,
    amendmentsCount: 2,
    latestAmendmentNote: 'Stipulates minimum IP66 ingress protection and surge protection withstand up to 10 kV for outdoor municipal tenders.',
    scope: 'Covers road, street, and public highway lighting luminaires utilizing LED and other electric light sources for supply voltages not exceeding 1000 V.',
    keyParametersTested: [
      'Ingress Protection Rating (Min IP65 / IP66 for optical and driver compartments)',
      'Surge Protection Immunity (Min 4 kV to 10 kV internal SPD)',
      'Luminous Efficacy (Min 120 to 140 Lumens per Watt for LED modules)',
      'Power Factor (Min 0.95 at rated voltage)',
      'Total Harmonic Distortion (THD Max 10%)',
      'Correlated Colour Temperature (CCT 3000K to 5700K with CRI >= 70)'
    ],
    keywords: [
      'led', 'street light', 'led luminaire', 'street lighting', 'road lighting', 'smart city',
      'ip66', 'surge protection', 'lumens', 'thd', 'power factor', 'eesl', 'gem lighting'
    ],
    normativeReferences: [
      {
        standardId: 'IS 16103 (Part 1) : 2012',
        title: 'Led Modules for General Lighting - Safety Specifications',
        relationType: 'Normative Reference',
        description: 'Mandatory safety benchmarks for solid state LED circuit modules.'
      },
      {
        standardId: 'IS 15885 (Part 2/Sec 13) : 2012',
        title: 'Lamp Controlgear - Part 2-13: Particular Requirements for D.C. or A.C. Supplied Electronic Controlgear for LED Modules',
        relationType: 'Normative Reference',
        description: 'Safety and endurance requirements for LED drivers.'
      },
      {
        standardId: 'IS 16107 (Part 2/Sec 1) : 2014',
        title: 'Luminaires Performance - Part 2-1: Particular Requirements - LED Luminaires',
        relationType: 'Test Method',
        description: 'Lumen maintenance, photometrics, and life test protocols.'
      }
    ],
    qco: {
      isMandatory: true,
      orderName: 'Electronics and Information Technology Goods (Requirement for Compulsory Registration) Order, 2012 / Luminaires QCO',
      gazetteRef: 'MeitY S.O. 2357(E)',
      enforcingMinistry: 'Ministry of Electronics and IT (MeitY) & BIS',
      isiMarkMandatory: true,
      effectiveDate: '2013-04-03'
    },
    officialDocUrl: 'https://www.standardsbis.in/gem/IS10322P5S3'
  },

  // 12. Distribution Transformers
  {
    id: 'IS 1180 (Part 1) : 2014',
    code: 'IS 1180-1',
    year: 2014,
    title: 'Outdoor Type Oil-Immersed Distribution Transformers up to and Including 2500 kVA, 33 kV - Specification - Part 1: Mineral Oil Immersed (Fourth Revision)',
    hindiTitle: '2500 केवीए, 33 केवी तक आउटडोर प्रकार के तेल-निमज्जित वितरण ट्रांसफार्मर - विशिष्टि',
    category: 'Electrical & Electronics',
    standardType: 'Product Specification',
    reaffirmationYear: 2021,
    amendmentsCount: 4,
    latestAmendmentNote: 'Aligns mandatory maximum total losses at 50% and 100% loading with BEE Star 1 to 3 energy efficiency regulations.',
    scope: 'Covers three-phase, 50 Hz, outdoor type, mineral oil-immersed distribution transformers up to and including 2500 kVA ratings for 11 kV, 22 kV, and 33 kV utility distribution networks.',
    keyParametersTested: [
      'Maximum Total Losses at 50% and 100% Loading (Watts capped as per BEE tables)',
      'Temperature Rise Limit (Max 35°C in oil, 40°C in winding above ambient)',
      'Short Circuit Withstand Dynamic and Thermal Test',
      'Lightning Impulse Voltage Test (75 kV peak for 11 kV system)',
      'Transformer Mineral Oil Breakdown Voltage (Min 60 kV for new oil)'
    ],
    keywords: [
      'transformer', 'distribution transformer', 'oil immersed', '11kv', '33kv', 'substation',
      'discom', 'bee star', 'losses', 'copper winding', 'core loss', 'kva rating'
    ],
    normativeReferences: [
      {
        standardId: 'IS 2026 (Multiple Parts)',
        title: 'Power Transformers - Specification',
        relationType: 'Normative Reference',
        description: 'Governing electrical design, tolerances, and dielectric tests for transformers.'
      },
      {
        standardId: 'IS 335 : 2018',
        title: 'New Insulating Oils - Specification',
        relationType: 'Normative Reference',
        description: 'Purity, flash point, and dielectric breakdown tests for insulating transformer oil.'
      }
    ],
    qco: {
      isMandatory: true,
      orderName: 'Distribution Transformers (Quality Control) Order, 2014',
      gazetteRef: 'S.O. 180(E)',
      enforcingMinistry: 'Ministry of Heavy Industries & Central Electricity Authority',
      isiMarkMandatory: true,
      effectiveDate: '2014-02-01'
    },
    officialDocUrl: 'https://www.standardsbis.in/gem/IS1180P1'
  },

  // 13. N95 / Particle Respirators
  {
    id: 'IS 9473 : 2002',
    code: 'IS 9473',
    year: 2002,
    title: 'Respiratory Protective Devices - Filtering Half Masks to Protect Against Particles - Specification (First Revision)',
    hindiTitle: 'श्वसन सुरक्षात्मक उपकरण - कणों से सुरक्षा के लिए फिल्टरिंग हाफ मास्क - विशिष्टि',
    category: 'Healthcare & Medical',
    standardType: 'Product Specification',
    reaffirmationYear: 2022,
    amendmentsCount: 2,
    latestAmendmentNote: 'Amended testing parameters for FFP1, FFP2 (equivalent to N95), and FFP3 particle filtration efficiency under paraffin oil and NaCl aerosols.',
    scope: 'Specifies minimum requirements for particle filtering half masks used as personal respiratory protective devices in healthcare, industrial dust environments, and public health procurement.',
    keyParametersTested: [
      'Sodium Chloride (NaCl) Aerosol Penetration (Max 6% for FFP2 / 94% efficiency)',
      'Paraffin Oil Aerosol Penetration (Max 6% for FFP2)',
      'Inhalation Breathing Resistance (Max 0.7 mbar at 30 l/min, Max 2.4 mbar at 95 l/min)',
      'Exhalation Breathing Resistance (Max 3.0 mbar at 160 l/min)',
      'Total Inward Leakage (TIL Max 8% arithmetic mean across test subjects)',
      'Head Harness Pull Test and Flammability Resistance'
    ],
    keywords: [
      'respirator', 'n95', 'ffp2', 'ffp3', 'filtering half mask', 'face mask', 'medical mask',
      'filtration efficiency', 'breathing resistance', 'protective equipment', 'hospital supplies'
    ],
    normativeReferences: [
      {
        standardId: 'IS 9623 : 2008',
        title: 'Selection, Use and Maintenance of Respiratory Protective Devices - Code of Practice',
        relationType: 'Allied Standard',
        description: 'Protocol for workplace fit testing, selection guidelines, and sanitization.'
      }
    ],
    qco: {
      isMandatory: true,
      orderName: 'Medical Devices and PPE (Quality Control) Regulations',
      gazetteRef: 'CDSCO & BIS Harmonized Schedule',
      enforcingMinistry: 'Ministry of Health and Family Welfare & BIS',
      isiMarkMandatory: true,
      effectiveDate: '2021-01-01'
    },
    officialDocUrl: 'https://www.standardsbis.in/gem/IS9473'
  },

  // 14. Disinfectant Fluids
  {
    id: 'IS 1061 : 1997',
    code: 'IS 1061',
    year: 1997,
    title: 'Disinfectant Fluids, Phenolic Type - Specification (Fourth Revision)',
    hindiTitle: 'कीटाणुनाशक तरल पदार्थ, फेनोलिक प्रकार - विशिष्टि',
    category: 'Healthcare & Medical',
    standardType: 'Product Specification',
    reaffirmationYear: 2021,
    amendmentsCount: 3,
    latestAmendmentNote: 'Reaffirmed standards for hospital black fluid, white fluid, and Rideal-Walker coefficient determination.',
    scope: 'Prescribes the requirements and methods of sampling and test for black and white phenolic disinfectant fluids for sanitation in hospitals, municipalities, and sanitation tenders.',
    keyParametersTested: [
      'Rideal-Walker (RW) Coefficient (Min 5 to 18 depending on grade)',
      'Chick-Martin (CM) Coefficient with organic matter load',
      'Stability on Dilution (No separation of oil or precipitation in artificial hard water)',
      'Total Phenols Content by Mass (Min 10% to 15%)',
      'Absence of Toxic Coal Tar Neutral Hydrocarbons beyond threshold'
    ],
    keywords: [
      'disinfectant', 'phenolic fluid', 'black fluid', 'white fluid', 'hospital sanitation',
      'rideal-walker', 'sanitizer', 'germicide', 'municipal sanitation', 'cleaning chemicals'
    ],
    normativeReferences: [
      {
        standardId: 'IS 1070 : 1992',
        title: 'Reagent Grade Water - Specification',
        relationType: 'Test Method',
        description: 'Mandatory standard for laboratory testing dilution solutions.'
      }
    ],
    qco: {
      isMandatory: false,
      isiMarkMandatory: true
    },
    officialDocUrl: 'https://www.standardsbis.in/gem/IS1061'
  },

  // 15. Industrial Safety Helmets
  {
    id: 'IS 2925 : 1984',
    code: 'IS 2925',
    year: 1984,
    title: 'Specification for Industrial Safety Helmets (Second Revision)',
    hindiTitle: 'औद्योगिक सुरक्षा शिरस्त्राण (हेलमेट) - विशिष्टि',
    category: 'Mechanical & Fire Safety',
    standardType: 'Product Specification',
    reaffirmationYear: 2022,
    amendmentsCount: 4,
    latestAmendmentNote: 'Includes high-density polyethylene (HDPE) and fiberglass shell shock absorption test tolerances.',
    scope: 'Covers physical and performance requirements for industrial safety helmets manufactured to protect the head from falling objects, electrical shock, and lateral crushing in mines, construction sites, and factories.',
    keyParametersTested: [
      'Shock Absorption / Force Transmission (Max transmitted force 5.0 kN when impacted by 5 kg striker from 1m)',
      'Penetration Resistance (Striker shall not make electrical contact with headform)',
      'Electrical Insulation Resistance (Leakage current not exceeding 3.0 mA at 2000 V AC)',
      'Flammability Resistance (Self-extinguishing within 5 seconds after flame removal)',
      'Chin Strap Anchorage Strength (Withstand 150 N to 250 N force)'
    ],
    keywords: [
      'safety helmet', 'industrial helmet', 'hard hat', 'construction safety', 'head protection',
      'shock absorption', 'chin strap', 'electrical insulation', 'ppe', 'site safety'
    ],
    normativeReferences: [
      {
        standardId: 'IS 15298 (Part 1) : 2011',
        title: 'Personal Protective Equipment - Test Methods',
        relationType: 'Allied Standard',
        description: 'General safety equipment test chamber guidelines.'
      }
    ],
    qco: {
      isMandatory: true,
      orderName: 'Personal Protective Equipment (Quality Control) Order, 2021',
      gazetteRef: 'S.O. 4344(E) dated 18 Oct 2021',
      enforcingMinistry: 'Ministry of Commerce & Industry (DPIIT)',
      isiMarkMandatory: true,
      effectiveDate: '2022-04-18'
    },
    officialDocUrl: 'https://www.standardsbis.in/gem/IS2925'
  },

  // 16. Fire Extinguishers
  {
    id: 'IS 15683 : 2018',
    code: 'IS 15683',
    year: 2018,
    title: 'Portable Fire Extinguishers - Performance and Construction - Specification (First Revision)',
    hindiTitle: 'सुवाह्य अग्निशामक - निष्पादन एवं निर्माण - विशिष्टि',
    category: 'Mechanical & Fire Safety',
    standardType: 'Product Specification',
    reaffirmationYear: 2023,
    amendmentsCount: 2,
    latestAmendmentNote: 'Standardizes rating criteria for Class A, B, C, D, and F fires and clean agent halocarbon alternatives.',
    scope: 'Specifies requirements for design, mechanical construction, gas pressure, operating mechanism, and fire extinguishing ratings of portable fire extinguishers of water, foam, powder, and clean agent types.',
    keyParametersTested: [
      'Fire Extinguishing Rating (Class A crib ratings e.g. 2A, 3A; Class B tray ratings e.g. 55B, 89B)',
      'Hydrostatic Cylinder Burst and Proof Pressure Test (Min 2.5 to 3.0 times working pressure)',
      'Effective Discharge Time and Minimum Percentage Discharge (Min 85% to 90% agent discharged)',
      'Corrosion Resistance (Salt spray fog test for 480 hours)',
      'Resistance to Temperature Extremes (-30°C to +60°C operational range)'
    ],
    keywords: [
      'fire extinguisher', 'portable fire extinguisher', 'fire safety', 'fire fighting', 'abc powder',
      'co2 extinguisher', 'foam extinguisher', 'class a fire', 'class b fire', 'cpwd fire safety'
    ],
    normativeReferences: [
      {
        standardId: 'IS 2190 : 2010',
        title: 'Selection, Installation and Maintenance of First-Aid Fire Appliances - Code of Practice',
        relationType: 'Normative Reference',
        description: 'Prescribes mandatory fire extinguisher density and layout per floor area.'
      },
      {
        standardId: 'IS 4308 : 2019',
        title: 'Dry Chemical Powder for Fire Fighting - Specification',
        relationType: 'Normative Reference',
        description: 'Quality specification for monoammonium phosphate based ABC fire powders.'
      }
    ],
    qco: {
      isMandatory: true,
      orderName: 'Fire Fighting Equipment (Quality Control) Order, 2022',
      gazetteRef: 'S.O. 1290(E)',
      enforcingMinistry: 'Ministry of Commerce & Industry',
      isiMarkMandatory: true,
      effectiveDate: '2023-01-01'
    },
    officialDocUrl: 'https://www.standardsbis.in/gem/IS15683'
  },

  // 17. Safety Footwear
  {
    id: 'IS 15298 (Part 2) : 2016',
    code: 'IS 15298-2',
    year: 2016,
    title: 'Personal Protective Equipment - Part 2: Safety Footwear (Second Revision)',
    hindiTitle: 'वैयक्तिक सुरक्षात्मक उपस्कर - भाग 2: सुरक्षात्मक पादत्राण',
    category: 'Mechanical & Fire Safety',
    standardType: 'Product Specification',
    reaffirmationYear: 2021,
    amendmentsCount: 1,
    latestAmendmentNote: 'Harmonized with ISO 20345:2011 for 200 Joules steel / composite toe-cap impact safety.',
    scope: 'Specifies basic and additional optional requirements for safety footwear used in industrial construction, mining, and military tenders.',
    keyParametersTested: [
      'Toe-cap Impact Resistance (Min 200 Joules impact energy with mandated clearance)',
      'Toe-cap Compression Resistance (Min 15 kN crushing force)',
      'Penetration Resistance of Sole (Min 1100 N puncture force for steel midsole)',
      'Slip Resistance on Ceramic Tile with SLS and Steel Floor with Glycerol',
      'Upper Leather Tear Strength and Water Vapour Permeability',
      'Sole Abrasion Resistance and Outsole Cleat Height'
    ],
    keywords: [
      'safety shoes', 'safety boots', 'safety footwear', 'toe cap', 'steel toe', 'ppe',
      'slip resistance', 'puncture resistance', 'industrial footwear', 'mining boots'
    ],
    normativeReferences: [
      {
        standardId: 'IS 15298 (Part 1) : 2011',
        title: 'Personal Protective Equipment - Test Methods for Footwear',
        relationType: 'Test Method',
        description: 'Harmonized testing methodology for mechanical footwear testing.'
      }
    ],
    qco: {
      isMandatory: true,
      orderName: 'Footwear made from Leather and other materials (Quality Control) Order, 2022',
      gazetteRef: 'S.O. 2404(E) dated 23 May 2022',
      enforcingMinistry: 'Ministry of Commerce & Industry (DPIIT)',
      isiMarkMandatory: true,
      effectiveDate: '2023-07-01'
    },
    officialDocUrl: 'https://www.standardsbis.in/gem/IS15298P2'
  },

  // 18. Cast Iron Sluice Valves
  {
    id: 'IS 14846 : 2000',
    code: 'IS 14846',
    year: 2000,
    title: 'Sluice Valves for Water Works Purposes (50 to 1200 mm Size) - Specification (First Revision)',
    hindiTitle: 'जल कार्यों के प्रयोजन हेतु स्लूस वाल्व (50 से 1200 मिमी आकार) - विशिष्टि',
    category: 'Water & Sanitation',
    standardType: 'Product Specification',
    reaffirmationYear: 2020,
    amendmentsCount: 3,
    latestAmendmentNote: 'Updated flange drilling dimensions as per IS 1538 and test pressures for PN 1.0 and PN 1.6 bar valves.',
    scope: 'Covers non-rising and rising stem cast iron sluice valves of sizes 50 mm to 1200 mm suitable for clean drinking water lines and municipal pumping installations.',
    keyParametersTested: [
      'Body Hydrostatic Test Pressure (1.5 times nominal pressure for 5 minutes)',
      'Seat Hydrostatic Tightness Test (1.0 times nominal pressure with zero drops leakage)',
      'Tensile Strength of Cast Iron Body (Grade FG 200 or FG 260 as per IS 210)',
      'Stem Torque Operating Test under maximum differential pressure'
    ],
    keywords: [
      'sluice valve', 'gate valve', 'water valves', 'cast iron valve', 'pipeline fittings',
      'pn 1.0', 'pn 1.6', 'water works', 'pumping station', 'jal jeevan'
    ],
    normativeReferences: [
      {
        standardId: 'IS 210 : 2009',
        title: 'Grey Iron Castings - Specification',
        relationType: 'Normative Reference',
        description: 'Material chemical and tensile requirements for valve bodies.'
      },
      {
        standardId: 'IS 1538 : 1993',
        title: 'Cast Iron Fittings for Pressure Pipes for Water, Gas and Sewage',
        relationType: 'Allied Standard',
        description: 'Standard dimensions for connecting flanges and drilling templates.'
      }
    ],
    qco: {
      isMandatory: true,
      orderName: 'Pipes and Fittings (Quality Control) Order, 2023',
      gazetteRef: 'S.O. 5012(E)',
      enforcingMinistry: 'Ministry of Chemicals and Petrochemicals',
      isiMarkMandatory: true,
      effectiveDate: '2024-05-23'
    },
    officialDocUrl: 'https://www.standardsbis.in/gem/IS14846'
  },

  // 19. Water Meters
  {
    id: 'IS 779 : 1994',
    code: 'IS 779',
    year: 1994,
    title: 'Water Meters (Domestic Type) - Specification (Fifth Revision)',
    hindiTitle: 'जल मापी (घरेलू प्रकार) - विशिष्टि',
    category: 'Water & Sanitation',
    standardType: 'Product Specification',
    reaffirmationYear: 2021,
    amendmentsCount: 4,
    latestAmendmentNote: 'Specifications for dry dial magnetic drive and AMR (Automatic Meter Reading) pulse compatibility.',
    scope: 'Specifies requirements for inferential (multijet/single jet) and semi-positive displacement water meters for cold potable water of nominal sizes 15 mm to 50 mm.',
    keyParametersTested: [
      'Maximum Permissible Error (±2% in upper flow zone, ±5% in lower transitional zone)',
      'Pressure Loss (Max 0.025 MPa to 0.1 MPa at maximum flow rate Qmax)',
      'Hydrostatic Pressure Test (1.6 MPa for 15 minutes)',
      'Accelerated Endurance Test (100 hours continuous flow and 100,000 intermittent cycles)'
    ],
    keywords: [
      'water meter', 'flow meter', 'amr meter', 'domestic water meter', 'multijet meter',
      'smart metering', 'jal jeevan', 'water billing', 'potable water'
    ],
    normativeReferences: [
      {
        standardId: 'IS 6784 : 1996',
        title: 'Method for Performance Testing of Water Meters',
        relationType: 'Test Method',
        description: 'Official test rig setup and error measurement protocols.'
      }
    ],
    qco: {
      isMandatory: true,
      orderName: 'Water Meters (Quality Control) Order, 2023',
      gazetteRef: 'S.O. 3120(E)',
      enforcingMinistry: 'Ministry of Jal Shakti',
      isiMarkMandatory: true,
      effectiveDate: '2024-03-01'
    },
    officialDocUrl: 'https://www.standardsbis.in/gem/IS779'
  },

  // 20. Server Racks and Cabinets
  {
    id: 'IS 14753 : 1999',
    code: 'IS 14753',
    year: 1999,
    title: 'Electronic Equipment Practice - Modular Order for the Development of Mechanical Structures for Electronic Equipment Practices (Harmonized with IEC 60917 & 60297)',
    hindiTitle: 'इलेक्ट्रॉनिक उपकरण यांत्रिकी संरचनाएँ - विनिर्देश',
    category: 'Electrical & Electronics',
    standardType: 'Product Specification',
    reaffirmationYear: 2022,
    amendmentsCount: 1,
    latestAmendmentNote: 'Incorporated 19-inch rack seismic testing criteria and thermal management ventilation ratios.',
    scope: 'Applies to 19-inch racks, subracks, server cabinets, and chassis used in data centers, telecommunications rooms, IT procurement tenders, and rail signaling installations.',
    keyParametersTested: [
      'Static Load Bearing Capacity (Min 500 kg to 1000 kg uniformly distributed)',
      'Dimensional Tolerances conforming to standard 19-inch (482.6 mm) mounting pitches',
      'Surface Finishing: Powder coating thickness min 60 to 80 microns with cross-hatch adhesion',
      'Earthing Continuity: Resistance between all metallic panels and ground busbar < 0.1 Ohm'
    ],
    keywords: [
      'server rack', '19 inch rack', 'data center rack', 'server cabinet', 'it equipment',
      'network rack', 'subrack', 'telecom rack', 'gem it hardware', 'cabinet enclosure'
    ],
    normativeReferences: [
      {
        standardId: 'IS 9000 (Multiple Parts)',
        title: 'Basic Environmental Testing Procedures for Electronic and Electrical Items',
        relationType: 'Test Method',
        description: 'Vibration, temperature cycling, and corrosion tests for IT enclosures.'
      }
    ],
    qco: {
      isMandatory: false,
      isiMarkMandatory: false
    },
    officialDocUrl: 'https://www.standardsbis.in/gem/IS14753'
  },

  // 21. Medical Gloves
  {
    id: 'IS 13422 : 1992',
    code: 'IS 13422',
    year: 1992,
    title: 'Sterile Surgical Rubber Gloves - Specification (Second Revision)',
    hindiTitle: 'रोगाणुरहित शल्य चिकित्सा रबर दस्ताने - विशिष्टि',
    category: 'Healthcare & Medical',
    standardType: 'Product Specification',
    reaffirmationYear: 2021,
    amendmentsCount: 3,
    latestAmendmentNote: 'Updated Freedom from Holes AQL (Acceptable Quality Level 1.5) water leak test.',
    scope: 'Prescribes physical, tensile, and biocompatibility requirements for sterilized rubber surgical gloves packaged individually for surgical operating theater use in government hospitals.',
    keyParametersTested: [
      'Freedom from Holes (Water leak test with AQL 1.5)',
      'Tensile Strength before aging (Min 24.0 MPa) and after accelerated aging (Min 18.0 MPa)',
      'Ultimate Elongation before aging (Min 750%) and after aging (Min 560%)',
      'Sterility Assurance Level (Conforming to pharmacopoeial sterility standards)'
    ],
    keywords: [
      'gloves', 'surgical gloves', 'medical gloves', 'latex gloves', 'sterile gloves',
      'hospital supplies', 'surgical consumables', 'aql 1.5', 'rubber gloves'
    ],
    normativeReferences: [
      {
        standardId: 'IS 3400 (Multiple Parts)',
        title: 'Methods of Test for Vulcanized Rubbers',
        relationType: 'Test Method',
        description: 'Testing of tensile strain, elongation, and accelerated heat aging.'
      }
    ],
    qco: {
      isMandatory: true,
      orderName: 'Medical Devices Rules, 2017 / QCO',
      gazetteRef: 'CDSCO Class B Device Notification',
      enforcingMinistry: 'Ministry of Health and Family Welfare & CDSCO',
      isiMarkMandatory: true,
      effectiveDate: '2020-01-01'
    },
    officialDocUrl: 'https://www.standardsbis.in/gem/IS13422'
  },

  // 22. LED Lamps
  {
    id: 'IS 16102 (Part 1) : 2012',
    code: 'IS 16102-1',
    year: 2012,
    title: 'Self-Ballasted LED Lamps for General Lighting Services - Part 1: Safety Requirements',
    hindiTitle: 'सामान्य प्रकाश व्यवस्था सेवाओं के लिए सेल्फ-बैलास्टेड एलईडी लैंप - भाग 1: सुरक्षा अपेक्षाएं',
    category: 'Electrical & Electronics',
    standardType: 'Product Specification',
    reaffirmationYear: 2022,
    amendmentsCount: 2,
    latestAmendmentNote: 'Harmonized safety insulation criteria with IEC 62560.',
    scope: 'Covers safety and interchangeability requirements for self-ballasted LED lamps with integrated driver having a rated wattage up to 60 W and voltage exceeding 50 V up to 250 V AC.',
    keyParametersTested: [
      'Insulation Resistance and Electric Strength (4 kV impulse)',
      'Cap Temperature Rise (Max 120°C)',
      'Resistance to Heat and Flame (Glow-wire test at 650°C and needle flame test)',
      'Fault Condition Protection (No fire, smoke, or electric shock risk during driver fault)'
    ],
    keywords: [
      'led bulb', 'led lamp', 'self ballasted', 'lighting', 'indoor lighting', 'b22 cap',
      'e27 cap', 'energy efficient lighting', 'ujala scheme', 'gem lighting'
    ],
    normativeReferences: [
      {
        standardId: 'IS 16102 (Part 2) : 2012',
        title: 'Self-Ballasted LED Lamps - Part 2: Performance Requirements',
        relationType: 'Test Method',
        description: 'Lumen maintenance at 6000 hours and power factor > 0.90 verification.'
      }
    ],
    qco: {
      isMandatory: true,
      orderName: 'Self-Ballasted LED Lamps (Quality Control) Order, 2019',
      gazetteRef: 'S.O. 1820(E)',
      enforcingMinistry: 'Ministry of Power & Bureau of Energy Efficiency',
      isiMarkMandatory: true,
      effectiveDate: '2020-09-01'
    },
    officialDocUrl: 'https://www.standardsbis.in/gem/IS16102P1'
  }
];
