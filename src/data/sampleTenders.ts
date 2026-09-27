import { SampleTender } from '../types/standards';

export const SAMPLE_TENDERS: SampleTender[] = [
  {
    id: 'tender-hdpe-water',
    title: 'Rural Water Supply Scheme (Jal Jeevan Mission)',
    shortDesc: 'Supply of HDPE pipes (PE 100 grade, PN 10 rating) for rural potable water distribution network.',
    category: 'Water & Sanitation',
    department: 'State Public Health Engineering Department (PHED) / Jal Jeevan Mission',
    suggestedStandards: ['IS 4984 : 2016', 'IS 2530 : 1963', 'IS 10500 : 2012'],
    content: `TENDER SPECIFICATION CLAUSE 4.2 - WATER DISTRIBUTION PIPELINES:
Supply, testing, and delivery of High Density Polyethylene (HDPE) pipes of outside diameter 110 mm, 90 mm, and 63 mm conforming to virgin resin grade PE 100, pressure rating PN 10.
The pipes must be manufactured using food-grade virgin raw material suitable for potable drinking water without imparting odor or toxicity.
Testing requirements:
1. Carbon black content between 2.0% to 2.5% uniformly dispersed.
2. Internal hydrostatic pressure test at 27 deg C for 100 hours and accelerated 80 deg C for 165 hours without rupture or weeping.
3. Melt Flow Rate (MFR) between 0.2 to 1.1 g/10min at 190°C.
4. Oxidation Induction Time (OIT) >= 20 minutes at 200°C.
All supplied pipes must carry valid ISI mark certification under the mandatory Quality Control Order (QCO) issued by the Ministry of Chemicals and Petrochemicals.`
  },
  {
    id: 'tender-tmt-bridge',
    title: 'Flyover & Bridge Concrete Reinforcement (NHAI / CPWD)',
    shortDesc: 'Procurement of thermo-mechanically treated (TMT) deformed steel rebars grade Fe 500D for RCC structures.',
    category: 'Civil & Infrastructure',
    department: 'National Highways Authority of India (NHAI) / CPWD Civil Works',
    suggestedStandards: ['IS 1786 : 2008', 'IS 456 : 2000', 'IS 1608 (Part 1) : 2018'],
    content: `BILL OF QUANTITIES (BOQ) - ITEM NO. 2.14 REINFORCEMENT STEEL:
Supplying, bending, placing in position and binding of Thermo-Mechanically Treated (TMT) high strength deformed steel rebar bars of Grade Fe 500D (diameters 12 mm, 16 mm, 20 mm, 25 mm, and 32 mm) for substructure and superstructure bridge piers and decks.
Technical and mechanical stipulations:
1. Minimum 0.2% Proof Stress / Yield Strength shall not be less than 500 N/mm2.
2. Tensile strength to yield stress ratio (UTS/YS) must be at least 1.12.
3. Total elongation at maximum force (Uniform Elongation) shall not be less than 5.0%, with standard percentage elongation at gauge length 5.65√A of minimum 16.0%.
4. Chemical limits: Carbon max 0.25%, Sulphur max 0.040%, Phosphorus max 0.040%, and total S+P max 0.075%.
5. Rebar shall successfully undergo 180-degree bend and reverse bend tests around mandated pin diameter without showing cracks or fractures.
6. Manufacturer must be BIS certified and rebar must bear embossed BIS Standard mark as per Ministry of Steel QCO.`
  },
  {
    id: 'tender-led-lighting',
    title: 'Smart City LED Street Lighting Procurement (EESL / Urban Local Body)',
    shortDesc: 'Outdoor LED street lighting luminaires (90W & 120W) with high IP rating and surge protection.',
    category: 'Electrical & Electronics',
    department: 'Smart City Mission / Municipal Corporation Public Works',
    suggestedStandards: ['IS 10322 (Part 5/Sec 3) : 2012', 'IS 16102 (Part 1) : 2012'],
    content: `TECHNICAL TENDER SPECIFICATION FOR OUTDOOR ROADWAY LUMINAIRES:
Procurement of energy-efficient solid state LED street lighting luminaires with high pressure die-cast aluminum housing for municipal arterial roads.
Key Specifications:
1. Luminaire system efficacy must be greater than 130 Lumens per Watt at correlated color temperature 5700K with Color Rendering Index (CRI) >= 70.
2. Ingress protection rating: Minimum IP66 for optical chamber and electrical driver compartment.
3. Integral Surge Protection Device (SPD) capable of withstanding minimum 10 kV / 5 kA surges.
4. Total Harmonic Distortion (THD) < 10% and Power Factor > 0.95 at 230V AC 50 Hz.
5. LED driver shall comply with thermal cutoff and overvoltage protection up to 320V AC.
6. Compliance with Bureau of Indian Standards luminaire safety and mandatory Electronics & IT Goods (Compulsory Registration Scheme - CRS) order is strictly mandatory.`
  },
  {
    id: 'tender-hospital-ppe',
    title: 'State Health Department Hospital Protective Equipment (N95)',
    shortDesc: 'Supply of particle filtering half masks (FFP2 / N95 class) for healthcare workers and surgical facilities.',
    category: 'Healthcare & Medical',
    department: 'Directorate General of Health Services (DGHS) / AIIMS Procurement',
    suggestedStandards: ['IS 9473 : 2002', 'IS 13422 : 1992', 'IS 1061 : 1997'],
    content: `RATE CONTRACT SPECIFICATION FOR RESPIRATORY PROTECTIVE MASKS:
Supply of particle filtering half masks (FFP2 / N95 class equivalent) with head harness for protection against airborne particulate matter and bioaerosols in government hospital quarantine wards.
Performance requirements:
1. Sodium chloride (NaCl) and paraffin oil aerosol filtration efficiency minimum 94% (penetration max 6%).
2. Inhalation breathing resistance shall not exceed 0.7 mbar at 30 liters/min and 2.4 mbar at 95 liters/min continuous flow.
3. Exhalation valve / filter exhalation resistance max 3.0 mbar at 160 liters/min.
4. Total inward leakage (TIL) arithmetic mean across test subjects not exceeding 8%.
5. Materials touching wearer skin must be non-irritant, non-sensitizing, and free from loose synthetic fibers.
6. Must carry valid ISI / BIS mark certification under relevant personal protective equipment regulations.`
  }
];
