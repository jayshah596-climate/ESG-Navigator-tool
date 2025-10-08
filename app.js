// Global ESG & Climate Regulations Dashboard - Complete Application

// Comprehensive regulation data
const regulationsData = {
  globalStats: {
    totalRegulations: 45,
    jurisdictions: 28,
    mandatoryRegulations: 35,
    voluntaryFrameworks: 10,
    lastUpdated: "2025-09-25"
  },

  regions: {
    "european-union": {
      name: "European Union",
      flag: "🇪🇺",
      count: 7,
      regulations: [
        {
          id: "csrd",
          name: "Corporate Sustainability Reporting Directive",
          acronym: "CSRD",
          authority: "European Commission",
          status: "Mandatory",
          topics: ["Climate", "Environment", "Social", "Governance"],
          applicability: ["Large companies: >500 employees OR >€40M turnover", "All listed companies", "Non-EU companies with >€150M EU revenue"],
          timeline: "2025: Large listed companies, 2026: All large companies, 2027: Listed SMEs",
          officialLink: "https://eur-lex.europa.eu/eli/dir/2022/2464/oj",
          dataRequired: ["Double materiality assessment", "Scope 1,2,3 GHG emissions", "Energy consumption", "Water usage", "Waste generation", "Biodiversity impact", "Employee demographics", "Board diversity"],
          complianceSteps: [
            "Determine CSRD scope and applicability",
            "Conduct double materiality assessment",
            "Map current data against ESRS requirements",
            "Implement data collection systems",
            "Establish governance structure",
            "Prepare sustainability report",
            "Arrange limited assurance",
            "Apply digital taxonomy tags",
            "Submit report within 4 months",
            "Publish on company website"
          ],
          penalties: "Up to 5% of annual turnover"
        },
        {
          id: "sfdr",
          name: "Sustainable Finance Disclosure Regulation",
          acronym: "SFDR",
          authority: "European Commission",
          status: "Mandatory",
          topics: ["Climate", "Environment", "Social", "Governance"],
          applicability: ["Financial market participants", "Financial advisers", "Insurance undertakings"],
          timeline: "Level 1: March 2021, Level 2: January 2023, Ongoing compliance",
          officialLink: "https://eur-lex.europa.eu/eli/reg/2019/2088/oj",
          dataRequired: ["Principal Adverse Impact indicators", "Sustainable investment percentages", "EU Taxonomy alignment", "ESG integration policies"],
          complianceSteps: [
            "Classify financial products (Article 6, 8, 9)",
            "Implement sustainability risk policies",
            "Calculate Principal Adverse Impact statement",
            "Update pre-contractual disclosures",
            "Establish periodic reporting processes",
            "Train staff on ESG integration",
            "Align remuneration policies",
            "Set up ongoing monitoring",
            "Publish disclosures on websites",
            "Monitor regulatory updates"
          ],
          penalties: "Regulatory sanctions and fines (varies by member state)"
        },
        {
          id: "eu-taxonomy",
          name: "EU Taxonomy Regulation",
          acronym: "EU Taxonomy",
          authority: "European Commission",
          status: "Mandatory",
          topics: ["Climate", "Environment"],
          applicability: ["Large companies subject to CSRD", "Financial market participants", "Green bond issuers"],
          timeline: "Climate: 2022, All 6 objectives: 2024",
          officialLink: "https://eur-lex.europa.eu/eli/reg/2020/852/oj",
          dataRequired: ["Taxonomy-eligible activities", "Taxonomy-aligned activities", "Technical screening criteria", "Do No Significant Harm assessment"],
          complianceSteps: [
            "Map business activities against taxonomy",
            "Identify taxonomy-eligible activities",
            "Assess technical screening criteria",
            "Conduct DNSH assessment",
            "Verify minimum safeguards compliance",
            "Calculate KPIs for revenue/CapEx/OpEx",
            "Document alignment process",
            "Include in CSRD disclosures",
            "Arrange assurance",
            "Monitor criteria updates"
          ],
          penalties: "Linked to CSRD enforcement"
        },
        {
          id: "eudr",
          name: "EU Deforestation Regulation",
          acronym: "EUDR",
          authority: "European Commission",
          status: "Mandatory",
          topics: ["Environment", "Climate"],
          applicability: ["Companies placing cattle, cocoa, coffee, oil palm, rubber, soy, wood products on EU market"],
          timeline: "Large companies: December 2025, SMEs: June 2026 (delayed)",
          officialLink: "https://eur-lex.europa.eu/eli/reg/2023/1115/oj",
          dataRequired: ["Geolocation coordinates", "Production date/time", "Deforestation-free certification", "Legal compliance verification"],
          complianceSteps: [
            "Map supply chains to coordinates",
            "Collect production date/time data",
            "Verify deforestation-free status",
            "Confirm legal compliance",
            "Implement risk assessment system",
            "Establish supply chain traceability",
            "Submit due diligence statements",
            "Monitor ongoing compliance",
            "Respond to authority requests",
            "Update procedures"
          ],
          penalties: "Up to 4% of EU turnover, product confiscation"
              },
        {
          id: "ch-climate",
          name: "Swiss Climate and Environmental Reporting Ordinance",
          acronym: "CH-CLIMATE",
          authority: "Swiss Federal Council",
          status: "Mandatory",
          topics: ["Climate", "Environment", "Governance"],
          applicability: [
            "Swiss public-interest companies with >500 employees",
            "Entities with >CHF 20 million total assets or >CHF 40 million revenue",
            "Large financial institutions supervised by FINMA"
          ],
          timeline: "Applicable to reporting periods beginning on or after 1 January 2024 with first reports due in 2025",
          officialLink: "https://www.admin.ch/opc/en/classified-compilation/20212619/index.html",
          dataRequired: [
            "Governance and board oversight of climate matters",
            "Climate strategy including transition plan and interim targets",
            "Processes for identifying and managing climate and environmental risks",
            "Quantitative metrics covering Scope 1,2,3 emissions and financing exposures"
          ],
          complianceSteps: [
            "Confirm qualification as a public-interest entity under Swiss Code of Obligations",
            "Assign board-level responsibility for climate reporting and approvals",
            "Develop climate strategy aligned to net-zero commitments and Swiss targets",
            "Map key transition and physical risks impacting operations and financing",
            "Establish methodologies for Scope 1,2,3 emissions and financed emissions where relevant",
            "Integrate climate considerations into risk management frameworks and internal controls",
            "Draft disclosures covering governance, strategy, risk management, metrics and targets",
            "Coordinate with auditors to align financial statement cross-references",
            "Publish climate report alongside management report in an electronic format",
            "Monitor Federal Council guidance and prepare for assurance requirements"
          ],
          penalties: "Non-compliance subject to Swiss Code of Obligations fines up to CHF 100,000 for responsible persons"
        },
        {
          id: "no-trans",
          name: "Norwegian Transparency Act",
          acronym: "NO-TRANS",
          authority: "Norwegian Ministry of Children and Families",
          status: "Mandatory",
          topics: ["Social", "Governance"],
          applicability: [
            "Large enterprises registered in Norway meeting two of: NOK 70m revenue, NOK 35m balance sheet, 50 employees",
            "Large foreign companies offering goods or services in Norway",
            "State-owned enterprises meeting threshold criteria"
          ],
          timeline: "In force from 1 July 2022 with annual due diligence statement due by 30 June",
          officialLink: "https://lovdata.no/dokument/NLE/lov/2021-06-18-99",
          dataRequired: [
            "Policies and governance for human rights and decent working conditions",
            "Due diligence assessments covering own operations and supply chains",
            "Measures taken to cease, prevent or mitigate adverse impacts",
            "Results of due diligence and planned improvements including grievance mechanisms"
          ],
          complianceSteps: [
            "Assess whether the enterprise meets Norwegian Transparency Act thresholds",
            "Adopt governance policies covering human rights and decent work expectations",
            "Map value chain entities and prioritise salient human rights risks",
            "Conduct due diligence in accordance with OECD Guidelines and document findings",
            "Integrate mitigation actions and follow-up processes into procurement and operations",
            "Establish grievance mechanisms and stakeholder engagement channels",
            "Prepare the annual transparency statement covering actions and outcomes",
            "Publish statement in Norwegian and English on company website by 30 June",
            "Respond to information requests from the Norwegian Consumer Authority",
            "Review and update due diligence programme annually"
          ],
          penalties: "Norwegian Consumer Authority and Market Council may impose orders and coercive fines for non-compliance"
        },
        {
          id: "fr-art29",
          name: "French Article 29 Energy Transition Law Disclosure",
          acronym: "FR-ART29",
          authority: "French Ministry of the Economy, Finance and Industrial and Digital Sovereignty",
          status: "Mandatory",
          topics: ["Climate", "Environment", "Social", "Governance"],
          applicability: [
            "French asset management companies and institutional investors",
            "Financial institutions offering portfolio management services in France",
            "Insurers and pension funds governed by the French Monetary and Financial Code"
          ],
          timeline: "Effective for financial years ending on or after 31 December 2021 with annual reporting thereafter",
          officialLink: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043884874",
          dataRequired: [
            "Climate strategy alignment with Paris Agreement and low-carbon transition scenarios",
            "Exposure to physical and transition climate risks including temperature scenarios",
            "Investment policies on biodiversity, coal, fossil fuels and just transition",
            "ESG due diligence, engagement outcomes and taxonomy alignment indicators"
          ],
          complianceSteps: [
            "Determine scope of financial products and portfolios subject to Article 29",
            "Gather climate and biodiversity data for holdings across asset classes",
            "Assess portfolio alignment with 1.5°C or well-below 2°C scenarios",
            "Measure exposure to sectors with significant transition risk including fossil fuels",
            "Document strategies for biodiversity protection and phasing out coal",
            "Describe engagement, voting and stewardship actions supporting transition",
            "Report sustainable investment share and EU Taxonomy alignment metrics",
            "Publish transition plans, targets and methodologies on public website",
            "Submit annual disclosure to the Autorité des marchés financiers when requested",
            "Review data quality and update methodologies in line with French decree guidance"
          ],
          penalties: "AMF supervisory actions including formal notices, injunctions and financial penalties"
        }
      ]
    },
    "united-kingdom": {
      name: "United Kingdom",
      flag: "🇬🇧",
      count: 4,
      regulations: [
        {
          id: "uk-sdr",
          name: "Sustainability Disclosure Requirements",
          acronym: "UK SDR",
          authority: "Financial Conduct Authority",
          status: "Mandatory",
          topics: ["Climate", "Environment", "Social", "Governance"],
          applicability: ["FCA-regulated asset managers ≥£5bn AUM", "Life insurers ≥£25bn assets"],
          timeline: "Entity disclosures: January 2022, Product disclosures: January 2024",
          officialLink: "https://www.fca.org.uk/firms/environmental-social-governance-esg/sustainability-disclosure-requirements-sdr",
          dataRequired: ["Entity-level climate metrics", "Product sustainability characteristics", "Investment stewardship activities"],
          complianceSteps: [
            "Determine FCA rule application scope",
            "Establish entity-level disclosures",
            "Develop product-level reporting",
            "Implement consumer-facing disclosures",
            "Set up data collection systems",
            "Prepare for assurance requirements",
            "Submit regulatory returns",
            "Publish website disclosures",
            "Monitor FCA guidance",
            "Prepare for enhancements"
          ],
          penalties: "FCA enforcement action, unlimited fines"
             },
        {
          id: "uk-secr",
          name: "Streamlined Energy and Carbon Reporting",
          acronym: "UK SECR",
          authority: "Department for Energy Security and Net Zero",
          status: "Mandatory",
          topics: ["Climate", "Environment"],
          applicability: [
            "UK quoted companies",
            "Large unquoted companies meeting ≥2 of: £36m turnover, £18m balance sheet, 250 employees",
            "Large LLPs incorporated in the UK"
          ],
          timeline: "Effective for financial years starting on or after 1 April 2019; annual reporting in directors' report",
          officialLink: "https://www.gov.uk/guidance/streamlined-energy-and-carbon-reporting",
          dataRequired: [
            "Total UK energy consumption (electricity, gas, transport fuel)",
            "Scope 1 and Scope 2 greenhouse gas emissions",
            "Intensity ratio metrics relevant to operations",
            "Energy efficiency actions undertaken during the year"
          ],
          complianceSteps: [
            "Confirm SECR qualification based on company size and listing status",
            "Define organisational and operational boundaries for energy data",
            "Collect 12 months of electricity, gas, and transport fuel consumption",
            "Calculate Scope 1 and Scope 2 greenhouse gas emissions",
            "Select and justify appropriate intensity ratios",
            "Document energy efficiency opportunities and actions",
            "Integrate disclosures into the directors' report or energy and carbon report",
            "Obtain internal sign-off and board approval",
            "Retain supporting evidence for potential audit review",
            "Monitor policy updates from DESNZ and Companies House"
          ],
          penalties: "Late or missing filings subject to Companies Act civil penalties and potential criminal sanctions"
        },
        {
          id: "uk-esos",
          name: "Energy Savings Opportunity Scheme",
          acronym: "UK ESOS",
          authority: "Environment Agency",
          status: "Mandatory",
          topics: ["Climate", "Environment"],
          applicability: [
            "UK organisations with ≥250 employees",
            "Undertakings with >£44m turnover and >£38m balance sheet",
            "Corporate groups with an overseas parent meeting UK thresholds"
          ],
          timeline: "Phase 3 compliance deadline: 5 December 2023; Phase 4 audit and reporting deadline: 5 December 2027",
          officialLink: "https://www.gov.uk/guidance/energy-savings-opportunity-scheme-esos",
          dataRequired: [
            "Total 12-month energy consumption across buildings, industrial processes, and transport",
            "Significant energy consumption identification and sampling",
            "Energy audits with costed recommendations",
            "Evidence of board director sign-off and notification to regulator"
          ],
          complianceSteps: [
            "Assess group structure to confirm ESOS qualification",
            "Appoint a qualified ESOS lead assessor",
            "Compile energy consumption data covering a continuous 12-month period",
            "Determine significant energy consumption and select representative sites",
            "Complete compliant energy audits or alternative routes (ISO 50001, DEC, GDA)",
            "Quantify energy-saving opportunities with costs and payback",
            "Obtain director-level sign-off of the ESOS report",
            "Submit compliance notification to the Environment Agency portal",
            "Implement governance for monitoring recommendations",
            "Maintain records for at least the current and previous compliance periods"
          ],
          penalties: "Civil penalties up to £50,000 plus daily fines for ongoing non-compliance"
        },
        {
          id: "uk-srs",
          name: "Sustainability Reporting Standards",
          acronym: "UK SRS",
          authority: "Department for Business and Trade",
          status: "Proposed",
          topics: ["Climate", "Environment", "Social", "Governance"],
          applicability: [
            "UK-listed companies subject to Companies Act reporting",
            "Large UK private companies preparing strategic reports",
            "Non-UK issuers seeking UK listing with significant UK investor base"
          ],
          timeline: "Government intends to endorse IFRS S1/S2-based UK SRS by July 2024 with reporting expected for periods beginning 2025/2026",
          officialLink: "https://www.gov.uk/government/publications/developing-uk-sustainability-disclosure-standards",
          dataRequired: [
            "Material sustainability-related risks and opportunities across ESG pillars",
            "Climate resilience scenario analysis and transition plans",
            "Quantitative and qualitative metrics aligned to IFRS Sustainability Disclosure Standards",
            "Governance and risk management processes for sustainability matters"
          ],
          complianceSteps: [
            "Monitor UK Endorsement Board consultations and final standards",
            "Perform gap analysis against IFRS S1 and IFRS S2 disclosure requirements",
            "Define governance ownership for sustainability reporting",
            "Develop data architecture covering financial and non-financial metrics",
            "Enhance climate scenario analysis and transition planning",
            "Establish controls and assurance-ready documentation",
            "Integrate SRS disclosures into annual report and accounts",
            "Engage auditors on limited assurance expectations",
            "Prepare investor communications on implementation roadmap",
            "Update processes based on post-implementation reviews"
          ],
          penalties: "Expected to align with Financial Reporting Council enforcement for corporate reporting failures"   }
        
      ]
    },
    "north-america": {
      name: "North America",
      flag: "🌎",
      count: 4,
      regulations: [
        {
          id: "sec-climate",
          name: "SEC Climate-Related Disclosures Rule",
          acronym: "SEC Climate",
          authority: "U.S. Securities and Exchange Commission",
          status: "Suspended",
          topics: ["Climate"],
          applicability: ["All SEC-registered public companies", "Foreign private issuers"],
          timeline: "Implementation suspended pending review",
          officialLink: "https://www.sec.gov/newsroom/press-releases/2024-31",
          dataRequired: ["Material climate risks", "Climate impact on strategy", "Scope 1&2 emissions (if material)", "Board oversight"],
          complianceSteps: [
            "Monitor regulatory developments",
            "Assess climate risk materiality",
            "Establish climate governance",
            "Implement risk management processes",
            "Set up GHG measurement systems",
            "Develop climate targets",
            "Prepare disclosure controls",
            "Arrange attestation services",
            "Integrate into SEC filings",
            "Monitor rule changes"
          ],
          penalties: "SEC enforcement actions, civil penalties"
        },
        {
          id: "ca-sb253",
          name: "California Climate Corporate Data Accountability Act",
          acronym: "SB 253",
          authority: "California Air Resources Board",
          status: "Mandatory",
          topics: ["Climate"],
          applicability: ["US companies >$1B revenue doing business in California"],
          timeline: "Scope 1&2: 2026 reporting, Scope 3: 2027 reporting",
          officialLink: "https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202320240SB253",
          dataRequired: ["Scope 1,2,3 GHG emissions", "Third-party verification", "Methodology disclosure"],
          complianceSteps: [
            "Determine $1B revenue threshold and CA nexus",
            "Establish GHG measurement system",
            "Collect Scope 1&2 data for 2024-2025",
            "Engage value chain for Scope 3",
            "Select verification provider",
            "Undergo verification process",
            "Submit report to CARB by 2026",
            "Publish data on website",
            "Prepare for Scope 3 reporting",
            "Monitor CARB guidance"
          ],
          penalties: "Up to $500,000 per year"
            },
        {
          id: "ca-ifrs-s",
          name: "Canadian IFRS Sustainability Disclosure Standards",
          acronym: "CA-IFRS-S",
          authority: "Canadian Sustainability Standards Board",
          status: "Mandatory (pending final endorsement)",
          topics: ["Climate", "Environment", "Social", "Governance"],
          applicability: [
            "Public companies reporting under Canadian securities regulation",
            "Domestic issuers applying IFRS Accounting Standards",
            "Large private enterprises voluntarily adopting sustainability disclosure standards"
          ],
          timeline: "Exposure drafts released March 2024 with final standards targeted for 2025 reporting periods",
          officialLink: "https://www.cssb-bncdd.ca/standards/",
          dataRequired: [
            "Material sustainability-related risks and opportunities",
            "Governance structure overseeing sustainability matters",
            "Strategy resilience and scenario analysis for climate risks",
            "Metrics and targets aligned with IFRS S1 and IFRS S2 guidance"
          ],
          complianceSteps: [
            "Monitor CSSB adoption timeline and provincial securities requirements",
            "Conduct readiness assessment against IFRS S1/S2 disclosure requirements",
            "Establish governance and control systems for sustainability data",
            "Map material sustainability topics to available metrics and targets",
            "Develop climate scenario analysis and emissions inventories",
            "Integrate sustainability information with financial reporting processes",
            "Engage external auditors on assurance expectations",
            "Prepare management commentary and note disclosures",
            "Align investor communications with CSSB standards",
            "Update disclosures as CSSB issues final amendments and guidance"
          ],
          penalties: "Enforced through Canadian securities regulators including cease trade orders and monetary penalties"
        },
        {
          id: "bmv-esg",
          name: "Bolsa Mexicana de Valores ESG Disclosure Guidance",
          acronym: "BMV-ESG",
          authority: "Bolsa Mexicana de Valores",
          status: "Voluntary (Exchange guidance)",
          topics: ["Climate", "Environment", "Social", "Governance"],
          applicability: [
            "Issuers listed on the Mexican Stock Exchange",
            "Companies seeking inclusion in BMV sustainability indices",
            "Potential issuers of sustainable bonds on BMV"
          ],
          timeline: "Updated ESG disclosure guide published 2023 with ongoing annual reporting expectations",
          officialLink: "https://www.bmv.com.mx/en/empresas/esg",
          dataRequired: [
            "Governance of sustainability and board responsibilities",
            "Environmental metrics including emissions, energy and water",
            "Social performance indicators such as labour practices and diversity",
            "Economic value creation and community investment disclosures"
          ],
          complianceSteps: [
            "Review BMV ESG disclosure guide and questionnaire requirements",
            "Assign cross-functional team responsible for ESG data collection",
            "Identify material sustainability topics aligned to investor expectations",
            "Compile quantitative metrics and qualitative narratives for each ESG pillar",
            "Align reporting with international frameworks such as GRI and TCFD",
            "Validate data accuracy through internal controls or external assurance",
            "Submit ESG questionnaire to BMV sustainability platform",
            "Publish ESG report or integrated report on corporate website",
            "Engage investors and rating agencies on ESG performance",
            "Update disclosures annually reflecting progress and new targets"
          ],
          penalties: "Non-compliance may affect eligibility for BMV sustainability indices and access to sustainable financing"
        }
      ]
    },
    "asia-pacific": {
      name: "Asia-Pacific",
      flag: "🌏",
      count: 16,
      regulations: [
        {
          id: "brsr-india",
          name: "Business Responsibility and Sustainability Reporting",
          acronym: "BRSR",
          authority: "Securities and Exchange Board of India",
          status: "Mandatory",
          topics: ["Climate", "Environment", "Social", "Governance"],
          applicability: ["Top 1000 listed companies by market cap"],
          timeline: "Mandatory from FY 2022-23",
          officialLink: "https://www.sebi.gov.in/legal/circulars/may-2021/business-responsibility-and-sustainability-reporting-by-listed-entities_50096.html",
          dataRequired: ["Performance against 9 principles", "Scope 1,2,3 emissions", "Water/energy consumption", "Employee safety/diversity"],
          complianceSteps: [
            "Verify market cap eligibility",
            "Assess practices against 9 principles",
            "Establish data collection systems",
            "Conduct materiality assessment",
            "Engage stakeholders",
            "Implement governance processes",
            "Prepare BRSR report",
            "Submit as part of annual report",
            "Consider independent assurance",
            "Monitor SEBI updates"
          ],
          penalties: "SEBI enforcement, trading suspensions"
       },
        {
          id: "rbi-climate",
          name: "RBI Climate Risk and Sustainable Finance Guidelines",
          acronym: "RBI-CLIMATE",
          authority: "Reserve Bank of India",
          status: "Mandatory",
          topics: ["Climate", "Governance"],
          applicability: [
            "Scheduled commercial banks (excluding regional rural banks)",
            "Primary urban cooperative banks",
            "Systemically important NBFCs regulated by RBI"
          ],
          timeline: "Board-approved implementation plans by October 2022; integrate climate risk management from FY 2023-24",
          officialLink: "https://www.rbi.org.in/Scripts/PublicationReportDetails.aspx?UrlPage=&ID=1196",
          dataRequired: [
            "Climate risk governance structures",
            "Assessment of physical and transition risks",
            "Scenario analysis outcomes",
            "Portfolio exposure metrics",
            "Climate-related financial disclosures"
          ],
          complianceSteps: [
            "Assign board accountability for climate risk oversight",
            "Develop institution-wide climate risk strategy",
            "Integrate climate factors into credit, market and liquidity risk policies",
            "Enhance data and MIS for climate risk measurement",
            "Conduct scenario analysis and stress testing",
            "Embed climate considerations in ICAAP and risk appetite",
            "Update product governance and disclosures",
            "Train staff and build specialist capabilities",
            "Engage clients on transition planning",
            "Report progress to RBI supervisors"
          ],
          penalties: "Subject to RBI supervisory directions, corrective action plans and monetary penalties"
        },
        {
          id: "nz-crd",
          name: "Climate-related Disclosures Regime",
          acronym: "NZ-CRD",
          authority: "External Reporting Board & Financial Markets Authority",
          status: "Mandatory",
          topics: ["Climate", "Governance"],
          applicability: [
            "Listed issuers with market cap over NZ$60 million",
            "Registered banks, credit unions and building societies > NZ$1 billion total assets",
            "Licensed insurers and investment scheme managers over prescribed thresholds"
          ],
          timeline: "Applies to accounting periods on or after 1 January 2023 with first climate statements due in 2024",
          officialLink: "https://www.xrb.govt.nz/standards/climate-related-disclosures/",
          dataRequired: [
            "Governance of climate-related risks and opportunities",
            "Strategy resilience across climate scenarios",
            "Risk management processes for climate impacts",
            "Metrics and targets including Scope 1-3 emissions",
            "Assurance statement for greenhouse gas inventories"
          ],
          complianceSteps: [
            "Determine climate reporting entity status and group boundaries",
            "Assign board and management responsibilities",
            "Map climate risks and opportunities across operations",
            "Undertake scenario analysis aligned to XRB guidance",
            "Establish GHG accounting systems for Scopes 1-3",
            "Integrate climate risk into enterprise risk management",
            "Set metrics and science-aligned targets",
            "Prepare climate statements using NZ CS standards",
            "Obtain external assurance over emissions data",
            "Submit disclosures to the Companies Office and publish"
          ],
          penalties: "FMA enforcement including civil pecuniary penalties and corrective orders"
        },
        {
          id: "au-climate",
          name: "Australian Climate-related Financial Disclosure Regime",
          acronym: "AU-CLIMATE",
          authority: "Australian Treasury & Australian Securities and Investments Commission",
          status: "Mandatory (phased)",
          topics: ["Climate", "Governance"],
          applicability: [
            "Group 1 entities: consolidated revenue ≥ A$1 billion or >500 employees",
            "Group 2 entities: revenue ≥ A$500 million or >250 employees",
            "Group 3 entities: revenue ≥ A$50 million or >100 employees"
          ],
          timeline: "Reporting begins FY2024-25 for Group 1, FY2026-27 for Group 2, FY2027-28 for Group 3",
          officialLink: "https://treasury.gov.au/consultation/c2023-442647",
          dataRequired: [
            "Governance and oversight of climate risks",
            "Strategy impacts and transition planning",
            "Risk management integration with climate scenarios",
            "Metrics and targets including Scope 1-3 emissions",
            "Transition plans and financed emissions where material"
          ],
          complianceSteps: [
            "Identify reporting group and phase-in timetable",
            "Establish board-level oversight of climate disclosure",
            "Develop climate risk and opportunity register",
            "Conduct scenario analysis aligned to ISSB guidance",
            "Strengthen emissions data collection and controls",
            "Set transition plans and decarbonisation targets",
            "Align reporting to Australian Sustainability Reporting Standards",
            "Coordinate financial and sustainability reporting teams",
            "Engage assurance provider for limited assurance",
            "File climate disclosures with annual reports and ASIC"
          ],
          penalties: "Corporations Act civil penalties and ASIC enforcement for misleading or non-compliant disclosure"
        },
        {
          id: "tse-esg",
          name: "Tokyo Stock Exchange ESG Disclosure Requirements",
          acronym: "TSE-ESG",
          authority: "Tokyo Stock Exchange",
          status: "Mandatory (comply or explain)",
          topics: ["Environment", "Social", "Governance"],
          applicability: [
            "Prime Market listed companies",
            "Standard Market companies referencing Corporate Governance Code"
          ],
          timeline: "Enhanced sustainability disclosure effective from April 2022 Corporate Governance Code revisions",
          officialLink: "https://www.jpx.co.jp/english/equities/listing/co-listing/management/esg/index.html",
          dataRequired: [
            "Sustainability governance and policies",
            "Material ESG risks and opportunities",
            "TCFD-aligned climate disclosure for Prime Market",
            "Human capital and diversity metrics",
            "Supply chain due diligence approach"
          ],
          complianceSteps: [
            "Review Corporate Governance Code sustainability principles",
            "Designate board oversight for sustainability matters",
            "Identify material ESG topics and key metrics",
            "Align climate reporting with TCFD recommendations",
            "Publish sustainability policy and objectives",
            "Integrate ESG factors into mid-term management plans",
            "Enhance data collection on human capital and supply chain",
            "Engage investors through ESG disclosures",
            "Report progress within corporate governance reports",
            "Address feedback from TSE and stakeholders"
          ],
          penalties: "Potential TSE supervision, disclosure requests and listing review"
        },
        {
          id: "hkex-esg",
          name: "HKEX ESG Reporting Guide",
          acronym: "HKEX-ESG",
          authority: "Hong Kong Exchanges and Clearing Limited",
          status: "Mandatory (comply or explain)",
          topics: ["Environment", "Social", "Governance"],
          applicability: ["All companies listed on HKEX Main Board and GEM"],
          timeline: "Upgraded ESG Reporting Guide effective July 1, 2020 with climate disclosure enhancements from 2022",
          officialLink: "https://www.hkex.com.hk/Listing/Sustainability/Environmental-Social-and-Governance-Reporting?sc_lang=en",
          dataRequired: [
            "Board statement on ESG governance",
            "Materiality assessment methodology",
            "Environmental KPIs including GHG emissions and targets",
            "Social KPIs covering workforce, supply chain and community",
            "Climate-related disclosure aligned with TCFD"
          ],
          complianceSteps: [
            "Assign board responsibility for ESG strategy",
            "Conduct stakeholder engagement and materiality assessment",
            "Collect environmental and social performance data",
            "Set quantitative targets for key ESG indicators",
            "Align climate disclosures with TCFD framework",
            "Enhance internal controls for ESG data quality",
            "Prepare annual ESG report within five months of year end",
            "Publish ESG report on HKEX and company websites",
            "Consider independent assurance for key metrics",
            "Respond to HKEX regulatory feedback and queries"
          ],
          penalties: "HKEX disciplinary actions, public censure and potential trading suspensions"
        },
        {
          id: "sgx-sr",
          name: "SGX Sustainability Reporting Requirements",
          acronym: "SGX-SR",
          authority: "Singapore Exchange Regulation",
          status: "Mandatory",
          topics: ["Climate", "Environment", "Social", "Governance"],
          applicability: [
            "All issuers listed on SGX-ST",
            "REITs and business trusts with material operations in Singapore"
          ],
          timeline: "Sustainability reporting required since FY2017; climate reporting mandatory from FY2023 for priority sectors",
          officialLink: "https://www.sgx.com/regulation/sustainability-reporting",
          dataRequired: [
            "Material ESG factors and management approach",
            "Policies, practices and performance metrics",
            "Targets and progress including GHG emissions",
            "Board statement on sustainability governance",
            "Climate reporting aligned with ISSB/TCFD guidance"
          ],
          complianceSteps: [
            "Confirm SGX reporting timelines and sector requirements",
            "Appoint board and management oversight for sustainability",
            "Conduct materiality assessment covering ESG topics",
            "Establish data collection and internal controls",
            "Develop metrics and targets for material factors",
            "Align climate disclosures with ISSB and TCFD guidance",
            "Prepare sustainability report referencing SGX Practice Note 7.6",
            "Obtain external assurance where required by investors",
            "Lodge report within four months of financial year end",
            "Engage stakeholders and respond to SGX feedback"
          ],
          penalties: "SGX regulatory actions including public reprimand and potential suspension"
        },
                {
          id: "csrc-esg",
          name: "CSRC ESG Disclosure Guidance for Listed Companies",
          acronym: "CSRC-ESG",
          authority: "China Securities Regulatory Commission",
          status: "Mandatory (phased supervisory guidance)",
          topics: ["Climate", "Environment", "Social", "Governance"],
          applicability: [
            "Companies listed on Shanghai and Shenzhen stock exchanges",
            "Domestic and overseas-listed Chinese companies filing annual reports with CSRC",
            "Financial institutions with CSRC-regulated listings"
          ],
          timeline: "Guidance issued 2022-2023 with enhanced ESG disclosure requirements for 2024 annual reports",
          officialLink: "http://www.csrc.gov.cn/csrc_en/c101912/c2400844/content.shtml",
          dataRequired: [
            "Board oversight of ESG strategy and risk management",
            "Material environmental metrics including emissions, energy and resource efficiency",
            "Social responsibility indicators covering labour, supply chain and community impacts",
            "Governance practices, anti-corruption controls and stakeholder engagement outcomes"
          ],
          complianceSteps: [
            "Review CSRC guidance and relevant stock exchange self-regulatory rules",
            "Establish ESG governance structure with board committee oversight",
            "Perform materiality assessment aligned with national sustainability priorities",
            "Develop data collection systems for environmental, social and governance metrics",
            "Integrate climate risk analysis and transition planning into corporate strategy",
            "Document policies for supply chain responsibility and anti-corruption",
            "Prepare ESG narrative and quantitative disclosures for annual and interim reports",
            "Coordinate bilingual reporting and digital submission to CSRC",
            "Engage external assurance or internal audit to review key metrics",
            "Respond to CSRC and exchange feedback and update disclosures annually"
          ],
          penalties: "CSRC supervisory measures including rectification orders, public notices and potential delisting procedures"
        },
        {
          id: "k-esg",
          name: "Korea ESG Disclosure Standards",
          acronym: "K-ESG",
          authority: "Financial Services Commission & Korea Exchange",
          status: "Mandatory (phased)",
          topics: ["Climate", "Environment", "Social", "Governance"],
          applicability: [
            "KOSPI-listed companies with assets ≥ KRW 2 trillion (from 2025)",
            "KOSPI/KOSDAQ companies with assets ≥ KRW 1 trillion (from 2026)",
            "All listed companies by 2030"
          ],
          timeline: "Phased mandatory ESG disclosure starting 2025 and extending to all listed companies by 2030",
          officialLink: "https://www.fsc.go.kr/eng/pr010101/77231",
          dataRequired: [
            "Governance of sustainability and board oversight",
            "Environment metrics including emissions, energy and resource use",
            "Social indicators such as workforce diversity and safety",
            "Climate risk management and transition plans",
            "Supply chain due diligence and ethics policies"
          ],
          complianceSteps: [
            "Confirm phase-in schedule based on asset size",
            "Establish ESG governance and reporting responsibilities",
            "Identify material ESG topics and KPIs",
            "Develop data systems for environmental and social metrics",
            "Conduct climate risk assessments and scenario analysis",
            "Integrate ESG factors into corporate strategy and IR",
            "Align disclosure structure with K-ESG standards",
            "Coordinate with auditors for assurance readiness",
            "Publish annual ESG report via DART and company channels",
            "Engage with FSC and investors on feedback"
          ],
          penalties: "FSC enforcement including corrective orders, fines and potential delisting procedures"        
        }
      ]
    },
    "international": {
      name: "International Standards",
      flag: "🌍",
      count: 5,
      regulations: [
        {
          id: "ifrs-s1",
          name: "IFRS S1 General Requirements",
          acronym: "IFRS S1",
          authority: "International Sustainability Standards Board",
          status: "Voluntary (Mandatory in adopting jurisdictions)",
          topics: ["Climate", "Environment", "Social", "Governance"],
          applicability: ["Entities in adopting jurisdictions", "Listed companies", "Large enterprises"],
          timeline: "Effective January 1, 2024",
          officialLink: "https://www.ifrs.org/issued-standards/ifrs-sustainability-standards-navigator/ifrs-s1-general-requirements/",
          dataRequired: ["Material sustainability risks/opportunities", "Governance processes", "Strategy impacts", "Risk management"],
          complianceSteps: [
            "Assess jurisdictional adoption",
            "Identify material sustainability topics",
            "Establish governance framework",
            "Map risks to strategy",
            "Integrate into risk management",
            "Develop metrics and targets",
            "Prepare sustainability disclosures",
            "Link to financial statements",
            "Ensure consistency",
            "Monitor ISSB updates"
          ],
          penalties: "Varies by jurisdiction"
        },
        {
          id: "ifrs-s2",
          name: "IFRS S2 Climate-related Disclosures",
          acronym: "IFRS S2",
          authority: "International Sustainability Standards Board",
          status: "Voluntary (Mandatory in adopting jurisdictions)",
          topics: ["Climate"],
          applicability: ["Entities applying IFRS S1 with material climate risks"],
          timeline: "Effective January 1, 2024",
          officialLink: "https://www.ifrs.org/issued-standards/ifrs-sustainability-standards-navigator/ifrs-s2-climate-related-disclosures/",
          dataRequired: ["Climate risks/opportunities", "Scope 1,2,3 emissions", "Climate scenario analysis", "Climate targets"],
          complianceSteps: [
            "Implement IFRS S1 foundation",
            "Identify material climate risks",
            "Conduct scenario analysis",
            "Measure Scope 1,2,3 emissions",
            "Develop science-based targets",
            "Quantify financial impacts",
            "Integrate with strategy",
            "Prepare climate disclosures",
            "Ensure TCFD consistency",
            "Monitor climate developments"
          ],
          penalties: "Varies by jurisdiction"
             },
        {
          id: "tcfd",
          name: "Task Force on Climate-related Financial Disclosures Recommendations",
          acronym: "TCFD",
          authority: "Financial Stability Board Task Force on Climate-related Financial Disclosures",
          status: "Voluntary (Adopted as mandatory framework in multiple jurisdictions)",
          topics: ["Climate"],
          applicability: [
            "Companies with material climate-related financial risks",
            "Financial institutions and asset owners",
            "Listed issuers seeking investor-aligned reporting"
          ],
          timeline: "Initial recommendations released June 2017 with 2021 updated guidance",
          officialLink: "https://www.fsb-tcfd.org/publications/",
          dataRequired: [
            "Board and management oversight of climate topics",
            "Climate impacts on business model and strategy",
            "Processes for identifying, assessing and managing climate risks",
            "Metrics and targets including Scope 1,2,3 emissions where material"
          ],
          complianceSteps: [
            "Confirm applicability based on investor and regulatory expectations",
            "Define governance roles for climate oversight",
            "Identify material transition and physical climate risks",
            "Undertake scenario analysis aligned to TCFD guidance",
            "Integrate climate factors into enterprise risk management",
            "Quantify Scope 1,2,3 emissions and relevant metrics",
            "Set science-aligned climate targets and transition plans",
            "Embed climate considerations into strategic planning and capital allocation",
            "Prepare disclosures structured around governance, strategy, risk management, metrics and targets",
            "Review annually and update based on evolving FSB/ISSB guidance"
          ],
          penalties: "None directly; enforcement handled through adopting market regulations"
        },
        {
          id: "gri-standards",
          name: "GRI Sustainability Reporting Standards",
          acronym: "GRI",
          authority: "Global Reporting Initiative",
          status: "Voluntary (Widely adopted global disclosure framework)",
          topics: ["Climate", "Environment", "Social", "Governance"],
          applicability: [
            "Organizations reporting on sustainability impacts",
            "Large enterprises with stakeholder reporting commitments",
            "Supply chain partners responding to ESG information requests"
          ],
          timeline: "Universal Standards 2021 effective for reports published on or after 1 January 2023",
          officialLink: "https://www.globalreporting.org/how-to-use-the-gri-standards/gri-standards-english-language/",
          dataRequired: [
            "Disclosure of material topics and impact boundaries",
            "Management approach for each material topic",
            "Topic-specific metrics across economic, environmental and social themes",
            "Stakeholder engagement and due diligence processes"
          ],
          complianceSteps: [
            "Confirm organizational commitment to use GRI Standards",
            "Establish governance for sustainability reporting and assurance",
            "Conduct double materiality or impact assessments to determine topics",
            "Map operations and value chain boundaries for each material topic",
            "Gather qualitative and quantitative data aligned to Universal and Topic Standards",
            "Document management approach disclosures for each topic",
            "Integrate human rights and due diligence disclosures per GRI 2 and GRI 3",
            "Prepare the content index referencing relevant GRI disclosures",
            "Subject report to internal review and optional external assurance",
            "Publish statement of use and monitor updates from the GRI Standards Division"
          ],
          penalties: "None; credibility relies on transparency and assurance practices"
        },
        {
          id: "sasb-standards",
          name: "SASB Sustainability Accounting Standards",
          acronym: "SASB",
          authority: "International Sustainability Standards Board (formerly Value Reporting Foundation)",
          status: "Voluntary (Investor-focused standards used in capital markets)",
          topics: ["Climate", "Environment", "Social", "Governance"],
          applicability: [
            "Public and private companies seeking industry-specific ESG metrics",
            "Issuers communicating financially material sustainability topics",
            "Investors assessing ESG performance across 77 industries"
          ],
          timeline: "Industry standards issued 2018; maintained by ISSB with ongoing updates",
          officialLink: "https://www.ifrs.org/issued-standards/sasb-standards/",
          dataRequired: [
            "Industry-specific sustainability disclosure topics",
            "Quantitative metrics and accounting metrics for each topic",
            "Narrative discussion of risk management and policies",
            "Activity metrics enabling normalization of performance"
          ],
          complianceSteps: [
            "Identify applicable SASB industry or industries for the organization",
            "Determine financially material sustainability topics for investors",
            "Evaluate existing data coverage against SASB metrics and technical protocols",
            "Establish governance and internal controls for data collection",
            "Develop processes to capture quantitative and qualitative metrics",
            "Integrate SASB topics into MD&A, investor presentations, or sustainability reports",
            "Align disclosures with complementary frameworks such as TCFD and IFRS S1/S2",
            "Engage assurance providers or internal audit for data validation",
            "Solicit investor feedback on clarity and decision-usefulness",
            "Monitor ISSB updates and industry guidance for revisions"
          ],
          penalties: "None; investor expectations and exchange requirements drive adoption"
        }
      ]
    },
    "others": {
      name: "Other Regions",
      flag: "🌐",
      count: 8,
      regulations: [
        {
          id: "brazil-cvm",
          name: "Brazil CVM ESG Requirements",
          acronym: "CVM ESG",
          authority: "Comissão de Valores Mobiliários",
          status: "Mandatory",
          topics: ["Environment", "Social", "Governance"],
          applicability: ["Listed companies", "Investment funds"],
          timeline: "Effective 2023",
          officialLink: "https://www.gov.br/cvm/",
          dataRequired: ["ESG risk disclosures", "Climate-related financial risks", "Sustainability policies"],
          complianceSteps: [],
          penalties: "CVM sanctions and fines"
        }
      ]
    }
  },

  organizationTypes: {
    "large-corporation": {
      criteria: ">1000 employees OR >€450M revenue",
      applicableRegulations: ["CSRD", "TCFD", "SEC Climate", "Local Requirements"],
      priority: "High"
    },
    "listed-company": {
      criteria: "Publicly traded on any stock exchange",
      applicableRegulations: ["Stock Exchange Requirements", "Securities Law Disclosures"],
      priority: "High"
    },
    "financial-institution": {
      criteria: "Banks, insurers, asset managers, pension funds",
      applicableRegulations: ["SFDR", "UK SDR", "Central Bank Guidelines"],
      priority: "High"
    },
    "sme": {
      criteria: "<1000 employees AND <€450M revenue",
      applicableRegulations: ["CSRD (if listed)", "Local SME requirements"],
      priority: "Medium"
    }
  },

  upcomingDeadlines: {
    "2025": [
      { date: "2025-12-31", regulation: "EUDR", description: "Large companies compliance (delayed)" },
      { date: "2025-04-30", regulation: "CSRD", description: "Large companies first reporting" }
    ],
    "2026": [
      { date: "2026-06-30", regulation: "EUDR", description: "SMEs compliance" },
      { date: "2026-01-01", regulation: "California SB253", description: "Scope 1&2 reporting begins" }
    ],
    "2027": [
      { date: "2027-01-01", regulation: "California SB253", description: "Scope 3 reporting begins" },
      { date: "2027-04-30", regulation: "CSRD", description: "Listed SMEs first reporting" }
    ]
  }
};

// Global application state
let currentSection = 'executive-overview';
let selectedRegulations = [];
let matcherResults = null;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setupNavigation();
  populateExecutiveOverview();
  setupOrganizationMatcher();
  setupRegionalRegulations();
  setupRegulationDeepDive();
  setupComplianceRoadmap();
  setupDataRequirements();
  setupTimelineDeadlines();
  setupComparisonTool();
  setupSearchFilter();
  setupModal();
}

// Navigation Setup
function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sidebarToggle = document.getElementById('sidebarToggle');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const sectionId = this.getAttribute('data-section');
      switchSection(sectionId);
      
      navLinks.forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', function() {
      const sidebar = document.getElementById('sidebar');
      sidebar.classList.toggle('open');
    });
  }
}

function switchSection(sectionId) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => section.classList.remove('active'));
  
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
    currentSection = sectionId;
    
    // Initialize section-specific content
    if (sectionId === 'timeline-deadlines') {
      initializeTimeline();
    }
  }
}

// Executive Overview
function populateExecutiveOverview() {
  populateRegionsGrid();
  populateRecentUpdates();
}

function populateRegionsGrid() {
  const regionsGrid = document.getElementById('regionsGrid');
  if (!regionsGrid) return;
  
  const regions = Object.values(regulationsData.regions);
  
  regionsGrid.innerHTML = regions.map(region => `
    <div class="region-card" onclick="switchToRegion('${region.name.toLowerCase().replace(/\s+/g, '-')}')">
      <div class="region-header">
        <span class="region-flag">${region.flag}</span>
        <span class="region-name">${region.name}</span>
      </div>
      <div class="region-count">${region.count} regulations</div>
    </div>
  `).join('');
}

function populateRecentUpdates() {
  const updatesContainer = document.getElementById('recentUpdates');
  if (!updatesContainer) return;
  
  const updates = [
    {
      icon: '🇪🇺',
      title: 'EUDR Implementation Delayed',
      description: 'EU postpones deforestation regulation by 12 months for all companies',
      date: '2024-10-15'
    },
    {
      icon: '🇺🇸',
      title: 'SEC Climate Rules Remain Suspended',
      description: 'No timeline provided for reinstatement of climate disclosure requirements',
      date: '2024-10-10'
    },
    {
      icon: '🌏',
      title: 'Malaysia Adopts IFRS S1/S2',
      description: 'Bursa Malaysia mandates sustainability standards for large companies',
      date: '2024-10-05'
    },
    {
      icon: '🇬🇧',
      title: 'UK Expands TCFD Requirements',
      description: 'New requirements for medium-sized companies announced',
      date: '2024-09-28'
    }
  ];
  
  updatesContainer.innerHTML = updates.map(update => `
    <div class="update-item">
      <div class="update-icon">${update.icon}</div>
      <div class="update-content">
        <div class="update-title">${update.title}</div>
        <div class="update-description">${update.description}</div>
        <div class="update-date">${new Date(update.date).toLocaleDateString()}</div>
      </div>
    </div>
  `).join('');
}

function switchToRegion(regionKey) {
  switchSection('regulatory-regions');
  document.querySelector(`[data-region="${regionKey}"]`)?.click();
}

// Organization Matcher
function setupOrganizationMatcher() {
  const analyzeBtn = document.getElementById('analyzeOrg');
  const resetBtn = document.getElementById('resetForm');
  
  if (analyzeBtn) {
    analyzeBtn.addEventListener('click', analyzeOrganization);
  }
  
  if (resetBtn) {
    resetBtn.addEventListener('click', resetMatcherForm);
  }
}

function analyzeOrganization() {
  const orgType = document.getElementById('orgType').value;
  const revenue = document.getElementById('revenue').value;
  const employees = document.getElementById('employees').value;
  const jurisdictions = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
  
  if (!orgType) {
    alert('Please select an organization type');
    return;
  }
  
  const results = determineApplicableRegulations(orgType, revenue, employees, jurisdictions);
  displayMatcherResults(results);
}

function determineApplicableRegulations(orgType, revenue, employees, jurisdictions) {
  const applicableRegs = [];
  
  // CSRD Logic
  if (jurisdictions.includes('eu')) {
    if (orgType === 'large-corporation' || 
        orgType === 'listed-company' || 
        revenue === 'over-450m' || 
        employees === 'over-1000') {
      applicableRegs.push({
        regulation: 'CSRD',
        priority: 'High',
        deadline: '2025-04-30',
        reason: 'Large company or listed in EU'
      });
    }
  }
  
  // SFDR Logic
  if (jurisdictions.includes('eu') && orgType === 'financial-institution') {
    applicableRegs.push({
      regulation: 'SFDR',
      priority: 'High',
      deadline: 'Ongoing',
      reason: 'Financial institution in EU'
    });
  }
  
  // SEC Climate Logic
  if (jurisdictions.includes('us') && orgType === 'listed-company') {
    applicableRegs.push({
      regulation: 'SEC Climate Rules',
      priority: 'Medium',
      deadline: 'Suspended',
      reason: 'US public company (currently suspended)'
    });
  }
  
  // California SB253 Logic
  if (jurisdictions.includes('california') && revenue === 'over-450m') {
    applicableRegs.push({
      regulation: 'California SB 253',
      priority: 'High',
      deadline: '2026-01-01',
      reason: '>$1B revenue company in California'
    });
  }
  
  // UK SDR Logic
  if (jurisdictions.includes('uk') && orgType === 'financial-institution') {
    applicableRegs.push({
      regulation: 'UK SDR',
      priority: 'High',
      deadline: 'Ongoing',
      reason: 'Financial institution in UK'
    });
  }
  
  // International Standards
  applicableRegs.push({
    regulation: 'TCFD',
    priority: 'Medium',
    deadline: 'Voluntary',
    reason: 'Best practice for climate disclosures'
  });
  
  if (orgType === 'large-corporation' || orgType === 'listed-company') {
    applicableRegs.push({
      regulation: 'IFRS S1/S2',
      priority: 'Medium',
      deadline: 'Varies by jurisdiction',
      reason: 'Large/listed company - international standards'
    });
  }
  
  return applicableRegs;
}

function displayMatcherResults(results) {
  const resultsContainer = document.getElementById('matcherResults');
  if (!resultsContainer) return;
  
  matcherResults = results;
  
  const priorityCounts = results.reduce((acc, reg) => {
    acc[reg.priority] = (acc[reg.priority] || 0) + 1;
    return acc;
  }, {});
  
  resultsContainer.innerHTML = `
    <div class="results-header">
      <h3>Analysis Results</h3>
      <div class="results-summary">
        <span class="summary-item high">High Priority: ${priorityCounts.High || 0}</span>
        <span class="summary-item medium">Medium Priority: ${priorityCounts.Medium || 0}</span>
        <span class="summary-item total">Total Applicable: ${results.length}</span>
      </div>
    </div>
    
    <div class="applicable-regulations">
      <h4>Your Applicable Regulations</h4>
      ${results.map(reg => `
        <div class="regulation-item">
          <div class="regulation-info">
            <h4>${reg.regulation}</h4>
            <p>${reg.reason}</p>
            <small>Next Deadline: ${reg.deadline}</small>
          </div>
          <div class="regulation-status ${reg.priority.toLowerCase()}">${reg.priority}</div>
        </div>
      `).join('')}
    </div>
    
    <div class="next-steps">
      <h4>Recommended Next Steps</h4>
      <ol>
        <li>Review detailed requirements for high-priority regulations</li>
        <li>Assess current data availability and gaps</li>
        <li>Develop implementation timeline and roadmap</li>
        <li>Establish governance structure and responsibilities</li>
        <li>Consider engaging external advisors for complex requirements</li>
      </ol>
      <button class="btn btn--primary" onclick="generateRoadmapFromMatcher()">Generate Compliance Roadmap</button>
    </div>
  `;
}

function resetMatcherForm() {
  document.getElementById('orgType').value = '';
  document.getElementById('revenue').value = '';
  document.getElementById('employees').value = '';
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
  document.getElementById('matcherResults').innerHTML = '';
}

function generateRoadmapFromMatcher() {
  if (matcherResults && matcherResults.length > 0) {
    switchSection('compliance-roadmap');
    // Pre-select regulations from matcher results
    const checkboxes = document.querySelectorAll('#roadmapRegulations input[type="checkbox"]');
    checkboxes.forEach(cb => {
      const regName = cb.value;
      if (matcherResults.some(result => result.regulation.toLowerCase().includes(regName.toLowerCase()))) {
        cb.checked = true;
      }
    });
  }
}

// Regional Regulations
function setupRegionalRegulations() {
  const regionTabs = document.querySelectorAll('.region-tab');
  
  regionTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const regionKey = this.getAttribute('data-region');
      
      regionTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      
      displayRegionalContent(regionKey);
    });
  });
  
  // Initialize with first region
  displayRegionalContent('european-union');
}

function displayRegionalContent(regionKey) {
  const regionContent = document.getElementById('regionContent');
  const regionData = regulationsData.regions[regionKey];
  
  if (!regionContent || !regionData) return;
  
  regionContent.innerHTML = `
    <div class="region-header">
      <h3>${regionData.flag} ${regionData.name}</h3>
      <p>${regionData.count} regulations</p>
    </div>
    
    <div class="regulations-list">
      ${regionData.regulations.map(reg => `
        <div class="regulation-card" onclick="showRegulationModal('${reg.id}')">
          <h4>${reg.name} (${reg.acronym})</h4>
          <div class="regulation-meta">
            <div class="meta-item">
              <span>📋</span> ${reg.status}
            </div>
            <div class="meta-item">
              <span>🏛️</span> ${reg.authority}
            </div>
            <div class="meta-item">
              <span>📅</span> ${reg.timeline.split(',')[0]}
            </div>
          </div>
          <div class="regulation-description">
            Applies to: ${reg.applicability.slice(0, 2).join(', ')}${reg.applicability.length > 2 ? '...' : ''}
          </div>
          <div class="regulation-topics">
            ${reg.topics.map(topic => `<span class="topic-tag">${topic}</span>`).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// Regulation Deep Dive
function setupRegulationDeepDive() {
  populateRegulationSelector();
  
  const viewBtn = document.getElementById('viewRegulation');
  if (viewBtn) {
    viewBtn.addEventListener('click', displayRegulationDetails);
  }
}

function populateRegulationSelector() {
  const selector = document.getElementById('regulationSelect');
  if (!selector) return;
  
  const allRegulations = [];
  Object.values(regulationsData.regions).forEach(region => {
    region.regulations.forEach(reg => {
      allRegulations.push({ id: reg.id, name: `${reg.name} (${reg.acronym})`, region: region.name });
    });
  });
  
  selector.innerHTML = '<option value="">Select a regulation to analyze</option>' +
    allRegulations.map(reg => `<option value="${reg.id}">${reg.name} - ${reg.region}</option>`).join('');
}

function displayRegulationDetails() {
  const selectedId = document.getElementById('regulationSelect').value;
  if (!selectedId) return;
  
  const regulation = findRegulationById(selectedId);
  if (!regulation) return;
  
  const detailsContainer = document.getElementById('regulationDetails');
  
  detailsContainer.innerHTML = `
    <div class="regulation-detail-content">
      <div class="detail-header">
        <div class="detail-title">
          <h3>${regulation.name}</h3>
          <div class="detail-subtitle">${regulation.acronym} • ${regulation.authority}</div>
        </div>
        <a href="${regulation.officialLink}" target="_blank" class="official-link">
          View Official Regulation
        </a>
      </div>
      
      <div class="detail-grid">
        <div class="detail-section">
          <h4>Applicability</h4>
          <ul>
            ${regulation.applicability.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
        
        <div class="detail-section">
          <h4>Timeline</h4>
          <p>${regulation.timeline}</p>
          <div class="status status--${regulation.status.toLowerCase()}">${regulation.status}</div>
        </div>
        
        <div class="detail-section">
          <h4>Data Required</h4>
          <ul>
            ${regulation.dataRequired.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
        
        <div class="detail-section">
          <h4>Topics Covered</h4>
          <div class="regulation-topics">
            ${regulation.topics.map(topic => `<span class="topic-tag">${topic}</span>`).join('')}
          </div>
          <p style="margin-top: 12px;"><strong>Penalties:</strong> ${regulation.penalties}</p>
        </div>
      </div>
      
      <div class="compliance-steps-section">
        <h4>Step-by-Step Compliance Guide</h4>
        <div class="compliance-steps">
          ${regulation.complianceSteps.map((step, index) => `
            <div class="step-item">
              <div class="step-number">${index + 1}</div>
              <div class="step-content">${step}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function findRegulationById(id) {
  for (const region of Object.values(regulationsData.regions)) {
    const regulation = region.regulations.find(reg => reg.id === id);
    if (regulation) return regulation;
  }
  return null;
}

// Compliance Roadmap
function setupComplianceRoadmap() {
  populateRoadmapRegulations();
  
  const generateBtn = document.getElementById('generateRoadmap');
  if (generateBtn) {
    generateBtn.addEventListener('click', generateComplianceRoadmap);
  }
}

function populateRoadmapRegulations() {
  const container = document.getElementById('roadmapRegulations');
  if (!container) return;
  
  const allRegulations = [];
  Object.values(regulationsData.regions).forEach(region => {
    region.regulations.forEach(reg => {
      allRegulations.push(reg);
    });
  });
  
  container.innerHTML = allRegulations.map(reg => `
    <label class="checkbox-item">
      <input type="checkbox" value="${reg.id}"> ${reg.name} (${reg.acronym})
    </label>
  `).join('');
}

function generateComplianceRoadmap() {
  const selectedRegs = Array.from(document.querySelectorAll('#roadmapRegulations input:checked')).map(cb => cb.value);
  const timeline = document.getElementById('timelineLength').value;
  const priority = document.getElementById('priorityLevel').value;
  
  if (selectedRegs.length === 0) {
    alert('Please select at least one regulation');
    return;
  }
  
  const roadmap = createRoadmap(selectedRegs, timeline, priority);
  displayRoadmap(roadmap);
}

function createRoadmap(regulationIds, timelineMonths, priority) {
  const phases = [
    {
      name: "Assessment & Planning",
      duration: Math.ceil(timelineMonths * 0.15),
      activities: [
        "Conduct regulatory scope analysis",
        "Assess current state of compliance",
        "Identify key stakeholders and responsibilities",
        "Develop project governance structure",
        "Create detailed project plan and timeline"
      ]
    },
    {
      name: "Gap Analysis & Design",
      duration: Math.ceil(timelineMonths * 0.20),
      activities: [
        "Perform comprehensive gap analysis",
        "Design data collection frameworks",
        "Define reporting processes and controls",
        "Identify technology and system requirements",
        "Develop training and change management plans"
      ]
    },
    {
      name: "System Implementation",
      duration: Math.ceil(timelineMonths * 0.25),
      activities: [
        "Implement data collection systems",
        "Configure reporting tools and dashboards",
        "Establish data governance processes",
        "Build integration with existing systems",
        "Conduct system testing and validation"
      ]
    },
    {
      name: "Data Collection & Testing",
      duration: Math.ceil(timelineMonths * 0.20),
      activities: [
        "Begin systematic data collection",
        "Engage suppliers and value chain partners",
        "Conduct data quality assessments",
        "Perform pilot reporting cycles",
        "Refine processes based on testing"
      ]
    },
    {
      name: "Reporting & Assurance",
      duration: Math.ceil(timelineMonths * 0.15),
      activities: [
        "Prepare comprehensive reports",
        "Engage external assurance providers",
        "Complete assurance procedures",
        "Submit regulatory filings",
        "Publish public disclosures"
      ]
    },
    {
      name: "Monitoring & Improvement",
      duration: Math.ceil(timelineMonths * 0.05),
      activities: [
        "Establish ongoing monitoring processes",
        "Implement continuous improvement framework",
        "Monitor regulatory developments",
        "Update procedures as needed",
        "Prepare for next reporting cycle"
      ]
    }
  ];
  
  return phases;
}

function displayRoadmap(phases) {
  const resultsContainer = document.getElementById('roadmapResults');
  
  resultsContainer.innerHTML = `
    <div class="roadmap-header">
      <h3>Your Customized Compliance Roadmap</h3>
      <p>Total Duration: ${phases.reduce((sum, phase) => sum + phase.duration, 0)} months</p>
    </div>
    
    <div class="roadmap-timeline">
      ${phases.map((phase, index) => `
        <div class="timeline-phase">
          <div class="phase-header">
            <div class="phase-title">Phase ${index + 1}: ${phase.name}</div>
            <div class="phase-duration">${phase.duration} months</div>
          </div>
          <ul class="phase-activities">
            ${phase.activities.map(activity => `<li>${activity}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
    </div>
    
    <div class="roadmap-actions">
      <button class="btn btn--primary" onclick="exportRoadmap()">Export Roadmap</button>
      <button class="btn btn--outline" onclick="scheduleRoadmapReview()">Schedule Review</button>
    </div>
  `;
}

function exportRoadmap() {
  alert('Roadmap export functionality would be implemented here');
}

function scheduleRoadmapReview() {
  alert('Roadmap review scheduling would be implemented here');
}

// Data Requirements Matrix
function setupDataRequirements() {
  const exportBtn = document.getElementById('exportDataMatrix');
  if (exportBtn) {
    exportBtn.addEventListener('click', exportDataMatrix);
  }
  
  displayDataMatrix();
}

function displayDataMatrix() {
  const matrixContainer = document.getElementById('dataMatrix');
  if (!matrixContainer) return;
  
  const sampleData = [
    {
      requirement: "Scope 1 GHG Emissions",
      csrd: "Required",
      sfdr: "Optional",
      sec: "If Material",
      tcfd: "Recommended",
      category: "climate"
    },
    {
      requirement: "Scope 2 GHG Emissions",
      csrd: "Required",
      sfdr: "Optional", 
      sec: "If Material",
      tcfd: "Recommended",
      category: "climate"
    },
    {
      requirement: "Scope 3 GHG Emissions",
      csrd: "Required",
      sfdr: "Required",
      sec: "If Material & Targets",
      tcfd: "Recommended",
      category: "climate"
    },
    {
      requirement: "Water Consumption",
      csrd: "If Material",
      sfdr: "Not Required",
      sec: "Not Required",
      tcfd: "Not Required",
      category: "environment"
    },
    {
      requirement: "Board Diversity",
      csrd: "Required",
      sfdr: "Not Required",
      sec: "Not Required", 
      tcfd: "Not Required",
      category: "governance"
    },
    {
      requirement: "Employee Safety Metrics",
      csrd: "If Material",
      sfdr: "PAI Indicator",
      sec: "Not Required",
      tcfd: "Not Required",
      category: "social"
    }
  ];
  
  matrixContainer.innerHTML = `
    <table class="matrix-table">
      <thead>
        <tr>
          <th>Data Requirement</th>
          <th>CSRD</th>
          <th>SFDR</th>
          <th>SEC</th>
          <th>TCFD</th>
        </tr>
      </thead>
      <tbody>
        ${sampleData.map(row => `
          <tr>
            <td><strong>${row.requirement}</strong></td>
            <td class="${getRequirementClass(row.csrd)}">${row.csrd}</td>
            <td class="${getRequirementClass(row.sfdr)}">${row.sfdr}</td>
            <td class="${getRequirementClass(row.sec)}">${row.sec}</td>
            <td class="${getRequirementClass(row.tcfd)}">${row.tcfd}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function getRequirementClass(requirement) {
  if (requirement.includes('Required')) return 'required';
  if (requirement.includes('Material') || requirement.includes('Optional')) return 'optional';
  return 'not-required';
}

function exportDataMatrix() {
  alert('Data matrix export functionality would be implemented here');
}

// Timeline & Deadlines
function setupTimelineDeadlines() {
  const viewBtns = document.querySelectorAll('.timeline-view');
  viewBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      viewBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      const view = this.getAttribute('data-view');
      updateTimelineView(view);
    });
  });
  
  initializeTimeline();
}

function initializeTimeline() {
  updateTimelineView('calendar');
}

function updateTimelineView(view) {
  const container = document.getElementById('timelineContainer');
  if (!container) return;
  
  if (view === 'calendar') {
    displayCalendarView(container);
  } else if (view === 'timeline') {
    displayTimelineView(container);
  } else if (view === 'gantt') {
    displayGanttView(container);
  }
}

function displayCalendarView(container) {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  let calendarHTML = `
    <div class="calendar-header-row">
      <h3>${monthNames[month]} ${year}</h3>
    </div>
    <div class="calendar-grid">
      <div class="calendar-header">Sun</div>
      <div class="calendar-header">Mon</div>
      <div class="calendar-header">Tue</div>
      <div class="calendar-header">Wed</div>
      <div class="calendar-header">Thu</div>
      <div class="calendar-header">Fri</div>
      <div class="calendar-header">Sat</div>
  `;
  
  // Empty cells for days before the first day
  for (let i = 0; i < firstDay; i++) {
    calendarHTML += '<div class="calendar-day empty"></div>';
  }
  
  // Days of the month
  const deadlineDays = [15, 30]; // Sample deadline days
  for (let day = 1; day <= daysInMonth; day++) {
    const hasDeadline = deadlineDays.includes(day);
    const isToday = day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
    const classes = `calendar-day ${hasDeadline ? 'has-deadline' : ''} ${isToday ? 'today' : ''}`;
    calendarHTML += `<div class="${classes}">${day}</div>`;
  }
  
  calendarHTML += '</div>';
  container.innerHTML = calendarHTML;
}

function displayTimelineView(container) {
  const upcomingDeadlines = [
    { date: '2025-04-30', regulation: 'CSRD', description: 'Large companies first reporting' },
    { date: '2025-12-31', regulation: 'EUDR', description: 'Large companies compliance (delayed)' },
    { date: '2026-01-01', regulation: 'California SB253', description: 'Scope 1&2 reporting begins' },
    { date: '2026-06-30', regulation: 'EUDR', description: 'SMEs compliance' },
    { date: '2027-01-01', regulation: 'California SB253', description: 'Scope 3 reporting begins' }
  ];
  
  container.innerHTML = `
    <div class="timeline-list">
      ${upcomingDeadlines.map(deadline => `
        <div class="timeline-item">
          <div class="timeline-date">${new Date(deadline.date).toLocaleDateString()}</div>
          <div class="timeline-content">
            <h4>${deadline.regulation}</h4>
            <p>${deadline.description}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function displayGanttView(container) {
  container.innerHTML = `
    <div class="gantt-placeholder">
      <h3>Gantt Chart View</h3>
      <p>Interactive Gantt chart showing regulatory timelines and dependencies would be displayed here.</p>
      <div class="gantt-sample">
        <div class="gantt-row">
          <div class="gantt-label">CSRD Implementation</div>
          <div class="gantt-bar csrd" style="width: 60%; margin-left: 10%;"></div>
        </div>
        <div class="gantt-row">
          <div class="gantt-label">EUDR Compliance</div>
          <div class="gantt-bar eudr" style="width: 40%; margin-left: 30%;"></div>
        </div>
        <div class="gantt-row">
          <div class="gantt-label">California SB253</div>
          <div class="gantt-bar ca-sb253" style="width: 50%; margin-left: 50%;"></div>
        </div>
      </div>
    </div>
  `;
}

// Comparison Tool
function setupComparisonTool() {
  populateComparisonSelectors();
  
  const compareBtn = document.getElementById('runComparison');
  if (compareBtn) {
    compareBtn.addEventListener('click', runRegulationComparison);
  }
}

function populateComparisonSelectors() {
  const selectors = ['compareReg1', 'compareReg2', 'compareReg3'];
  
  const allRegulations = [];
  Object.values(regulationsData.regions).forEach(region => {
    region.regulations.forEach(reg => {
      allRegulations.push({ id: reg.id, name: `${reg.acronym} - ${reg.name}` });
    });
  });
  
  selectors.forEach(selectorId => {
    const selector = document.getElementById(selectorId);
    if (selector) {
      selector.innerHTML = '<option value="">Select regulation</option>' +
        allRegulations.map(reg => `<option value="${reg.id}">${reg.name}</option>`).join('');
    }
  });
}

function runRegulationComparison() {
  const reg1Id = document.getElementById('compareReg1').value;
  const reg2Id = document.getElementById('compareReg2').value;
  const reg3Id = document.getElementById('compareReg3').value;
  
  const selectedRegulations = [reg1Id, reg2Id, reg3Id].filter(id => id);
  
  if (selectedRegulations.length < 2) {
    alert('Please select at least two regulations to compare');
    return;
  }
  
  const regulations = selectedRegulations.map(id => findRegulationById(id)).filter(Boolean);
  displayComparison(regulations);
}

function displayComparison(regulations) {
  const resultsContainer = document.getElementById('comparisonResults');
  
  const comparisonAspects = [
    { key: 'authority', label: 'Authority' },
    { key: 'status', label: 'Status' },
    { key: 'topics', label: 'Topics Covered' },
    { key: 'timeline', label: 'Timeline' },
    { key: 'penalties', label: 'Penalties' }
  ];
  
  resultsContainer.innerHTML = `
    <table class="comparison-table">
      <thead>
        <tr>
          <th>Aspect</th>
          ${regulations.map(reg => `<th>${reg.acronym}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        ${comparisonAspects.map(aspect => `
          <tr>
            <td><strong>${aspect.label}</strong></td>
            ${regulations.map(reg => {
              let value = reg[aspect.key];
              if (aspect.key === 'topics' && Array.isArray(value)) {
                value = value.join(', ');
              }
              return `<td>${value || 'N/A'}</td>`;
            }).join('')}
          </tr>
        `).join('')}
        
        <tr>
          <td><strong>Applicability</strong></td>
          ${regulations.map(reg => `
            <td>
              <ul style="margin: 0; padding-left: 16px;">
                ${reg.applicability.slice(0, 3).map(item => `<li>${item}</li>`).join('')}
              </ul>
            </td>
          `).join('')}
        </tr>
        
        <tr>
          <td><strong>Key Data Requirements</strong></td>
          ${regulations.map(reg => `
            <td>
              <ul style="margin: 0; padding-left: 16px;">
                ${reg.dataRequired.slice(0, 4).map(item => `<li>${item}</li>`).join('')}
              </ul>
            </td>
          `).join('')}
        </tr>
        
        <tr>
          <td><strong>Official Link</strong></td>
          ${regulations.map(reg => `
            <td><a href="${reg.officialLink}" target="_blank" class="btn btn--outline btn--sm">View Regulation</a></td>
          `).join('')}
        </tr>
      </tbody>
    </table>
  `;
}

// Search & Filter
function setupSearchFilter() {
  const searchBtn = document.getElementById('searchButton');
  const applyFiltersBtn = document.getElementById('applyFilters');
  const clearFiltersBtn = document.getElementById('clearFilters');
  const searchInput = document.getElementById('globalSearch');
  
  if (searchBtn) {
    searchBtn.addEventListener('click', performSearch);
  }
  
  if (applyFiltersBtn) {
    applyFiltersBtn.addEventListener('click', performSearch);
  }
  
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', clearAllFilters);
  }
  
  if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        performSearch();
      }
    });
  }
  
  // Initialize with all results
  performSearch();
}

function performSearch() {
  const searchTerm = document.getElementById('globalSearch').value.toLowerCase();
  const regionFilter = document.getElementById('filterRegion').value;
  const statusFilter = document.getElementById('filterStatus').value;
  const topicFilter = document.getElementById('filterTopic').value;
  const orgTypeFilter = document.getElementById('filterOrgType').value;
  
  const allRegulations = [];
  Object.entries(regulationsData.regions).forEach(([regionKey, region]) => {
    region.regulations.forEach(reg => {
      allRegulations.push({ ...reg, regionKey, regionName: region.name });
    });
  });
  
  let filteredResults = allRegulations.filter(reg => {
    // Text search
    const matchesSearch = !searchTerm || 
      reg.name.toLowerCase().includes(searchTerm) ||
      reg.acronym.toLowerCase().includes(searchTerm) ||
      reg.authority.toLowerCase().includes(searchTerm) ||
      reg.topics.some(topic => topic.toLowerCase().includes(searchTerm));
    
    // Region filter
    const matchesRegion = !regionFilter || reg.regionKey === regionFilter;
    
    // Status filter
    const matchesStatus = !statusFilter || reg.status.toLowerCase() === statusFilter;
    
    // Topic filter
    const matchesTopic = !topicFilter || reg.topics.some(topic => topic.toLowerCase() === topicFilter);
    
    return matchesSearch && matchesRegion && matchesStatus && matchesTopic;
  });
  
  displaySearchResults(filteredResults, searchTerm);
}

function displaySearchResults(results, searchTerm) {
  const summaryContainer = document.getElementById('resultsSummary');
  const resultsContainer = document.getElementById('resultsList');
  
  if (summaryContainer) {
    summaryContainer.innerHTML = `
      Found ${results.length} regulation${results.length !== 1 ? 's' : ''}
      ${searchTerm ? ` matching "${searchTerm}"` : ''}
    `;
  }
  
  if (resultsContainer) {
    resultsContainer.innerHTML = results.map(reg => `
      <div class="result-item" onclick="showRegulationModal('${reg.id}')">
        <div class="result-title">${reg.name} (${reg.acronym})</div>
        <div class="result-description">
          ${reg.authority} • ${reg.regionName} • ${reg.status}
        </div>
        <div class="result-meta">
          <span>Topics: ${reg.topics.join(', ')}</span>
          <span>Timeline: ${reg.timeline.split(',')[0]}</span>
        </div>
      </div>
    `).join('');
  }
}

function clearAllFilters() {
  document.getElementById('globalSearch').value = '';
  document.getElementById('filterRegion').value = '';
  document.getElementById('filterStatus').value = '';
  document.getElementById('filterTopic').value = '';
  document.getElementById('filterOrgType').value = '';
  
  performSearch();
}

// Modal Functionality
function setupModal() {
  const modal = document.getElementById('detailModal');
  const closeBtn = document.getElementById('modalClose');
  const closeBtnFooter = document.getElementById('modalCloseBtn');
  const actionBtn = document.getElementById('modalActionBtn');
  
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }
  
  if (closeBtnFooter) {
    closeBtnFooter.addEventListener('click', closeModal);
  }
  
  if (actionBtn) {
    actionBtn.addEventListener('click', function() {
      // Action button functionality would be implemented here
      if (this.getAttribute('data-url')) {
        window.open(this.getAttribute('data-url'), '_blank');
      }
    });
  }
  
  // Close modal when clicking backdrop
  window.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
}

function showRegulationModal(regulationId) {
  const regulation = findRegulationById(regulationId);
  if (!regulation) return;
  
  const modal = document.getElementById('detailModal');
  const title = document.getElementById('modalTitle');
  const body = document.getElementById('modalBody');
  const actionBtn = document.getElementById('modalActionBtn');
  
  title.textContent = `${regulation.name} (${regulation.acronym})`;
  
  body.innerHTML = `
    <div class="modal-regulation-content">
      <div class="regulation-overview">
        <div class="overview-item">
          <strong>Authority:</strong> ${regulation.authority}
        </div>
        <div class="overview-item">
          <strong>Status:</strong> <span class="status status--${regulation.status.toLowerCase()}">${regulation.status}</span>
        </div>
        <div class="overview-item">
          <strong>Timeline:</strong> ${regulation.timeline}
        </div>
        <div class="overview-item">
          <strong>Penalties:</strong> ${regulation.penalties}
        </div>
      </div>
      
      <div class="regulation-sections">
        <div class="modal-section">
          <h4>Applicability</h4>
          <ul>
            ${regulation.applicability.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
        
        <div class="modal-section">
          <h4>Topics Covered</h4>
          <div class="regulation-topics">
            ${regulation.topics.map(topic => `<span class="topic-tag">${topic}</span>`).join('')}
          </div>
        </div>
        
        <div class="modal-section">
          <h4>Key Data Requirements</h4>
          <ul>
            ${regulation.dataRequired.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
        
        <div class="modal-section">
          <h4>Implementation Steps</h4>
          <ol>
            ${regulation.complianceSteps.map(step => `<li>${step}</li>`).join('')}
          </ol>
        </div>
      </div>
    </div>
  `;
  
  if (actionBtn) {
    actionBtn.textContent = 'View Official Link';
    actionBtn.setAttribute('data-url', regulation.officialLink);
  }
  
  modal.classList.remove('hidden');
}

function closeModal() {
  const modal = document.getElementById('detailModal');
  modal.classList.add('hidden');
}

// Utility Functions
function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

// Add some additional CSS classes dynamically
const additionalStyles = `
  .gantt-placeholder {
    text-align: center;
    padding: 40px;
    background: var(--color-bg-1);
    border-radius: var(--radius-base);
  }
  
  .gantt-sample {
    margin-top: 24px;
  }
  
  .gantt-row {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
  }
  
  .gantt-label {
    width: 200px;
    text-align: right;
    margin-right: 16px;
    font-weight: 500;
  }
  
  .gantt-bar {
    height: 20px;
    border-radius: 4px;
  }
  
  .gantt-bar.csrd { background: var(--color-primary); }
  .gantt-bar.eudr { background: var(--color-warning); }
  .gantt-bar.ca-sb253 { background: var(--color-success); }
  
  .step-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 12px;
  }
  
  .step-number {
    background: var(--color-primary);
    color: var(--color-btn-primary-text);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    flex-shrink: 0;
  }
  
  .step-content {
    flex: 1;
    padding-top: 2px;
  }
  
  .timeline-item {
    display: flex;
    gap: 16px;
    padding: 16px;
    border-bottom: 1px solid var(--color-card-border-inner);
    margin-bottom: 16px;
  }
  
  .timeline-date {
    font-weight: 600;
    color: var(--color-primary);
    min-width: 100px;
  }
  
  .timeline-content h4 {
    margin: 0 0 4px 0;
    color: var(--color-text);
  }
  
  .timeline-content p {
    margin: 0;
    color: var(--color-text-secondary);
    font-size: 14px;
  }
  
  .modal-regulation-content {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  
  .regulation-overview {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 12px;
    padding: 16px;
    background: var(--color-bg-1);
    border-radius: var(--radius-base);
  }
  
  .overview-item {
    font-size: 14px;
    color: var(--color-text-secondary);
  }
  
  .modal-section {
    margin-bottom: 20px;
  }
  
  .modal-section h4 {
    margin: 0 0 12px 0;
    color: var(--color-text);
    font-size: 16px;
  }
  
  .results-summary .summary-item {
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 600;
    margin-right: 12px;
  }
  
  .summary-item.high { background: rgba(var(--color-error-rgb), 0.1); color: var(--color-error); }
  .summary-item.medium { background: rgba(var(--color-warning-rgb), 0.1); color: var(--color-warning); }
  .summary-item.total { background: var(--color-bg-1); color: var(--color-text); }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

console.log('Global ESG & Climate Regulations Dashboard initialized successfully');
