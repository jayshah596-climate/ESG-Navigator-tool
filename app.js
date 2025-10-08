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

const regulationIndex = (() => {
  const index = {};
  Object.values(regulationsData.regions).forEach(region => {
    region.regulations.forEach(regulation => {
      index[regulation.id] = { ...regulation, region: region.name };
    });
  });
  return index;
})();

const revenueMinimums = {
  'under-40m': 0,
  '40m-150m': 40,
  '150m-450m': 150,
  'over-450m': 450
};

const employeeMinimums = {
  'under-250': 0,
  '250-500': 250,
  '500-1000': 500,
  'over-1000': 1000
};

function hasRevenueAtLeast(revenue, minimum) {
  if (!revenue || !(revenue in revenueMinimums)) return false;
  return revenueMinimums[revenue] >= minimum;
}

function hasEmployeesAtLeast(employees, minimum) {
  if (!employees || !(employees in employeeMinimums)) return false;
  return employeeMinimums[employees] >= minimum;
}

function isListedCompany(context) {
  return context.orgType === 'listed-company';
}

function isFinancialInstitution(context) {
  return ['financial-institution', 'investment-firm'].includes(context.orgType);
}

function isLargeCompany(context) {
  return (
    ['large-corporation', 'multinational', 'state-owned'].includes(context.orgType) ||
    isListedCompany(context) ||
    hasRevenueAtLeast(context.revenue, 450) ||
    hasEmployeesAtLeast(context.employees, 1000)
  );
}

function hasJurisdiction(context, codes) {
  return codes.some(code => context.jurisdictions.includes(code));
}

const matcherRules = [
  {
    id: 'csrd',
    jurisdictions: ['eu'],
    condition: context =>
      isLargeCompany(context) || hasEmployeesAtLeast(context.employees, 500) || hasRevenueAtLeast(context.revenue, 40),
    priority: 'High',
    deadline: 'Phase-in from 2025-2027',
    reason: 'CSRD captures large or listed entities operating in the EU above €40M revenue or 500 employees.'
  },
  {
    id: 'sfdr',
    jurisdictions: ['eu'],
    condition: context => isFinancialInstitution(context),
    priority: 'High',
    deadline: 'Ongoing',
    reason: 'EU financial market participants must provide SFDR disclosures.'
  },
  {
    id: 'eu-taxonomy',
    jurisdictions: ['eu'],
    condition: context => isLargeCompany(context) || isFinancialInstitution(context),
    priority: 'High',
    deadline: 'Full objectives from 2024',
    reason: 'EU Taxonomy applies to large undertakings and financial market participants in scope of CSRD/SFDR.'
  },
  {
    id: 'eudr',
    jurisdictions: ['eu'],
    condition: context =>
      ['multinational', 'large-corporation', 'state-owned'].includes(context.orgType) ||
      hasEmployeesAtLeast(context.employees, 250),
    priority: 'High',
    deadline: 'Dec 2025 (large) / Jun 2026 (SMEs)',
    reason: 'EUDR due diligence covers large or multinational operators placing covered commodities on the EU market.'
  },
  {
    id: 'ch-climate',
    jurisdictions: ['switzerland'],
    condition: context => isLargeCompany(context) || isFinancialInstitution(context),
    priority: 'High',
    deadline: 'Reports due in 2025 for FY2024',
    reason: 'Swiss public-interest entities over size thresholds must publish climate and environmental reports.'
  },
  {
    id: 'no-trans',
    jurisdictions: ['norway'],
    condition: context =>
      isLargeCompany(context) || hasEmployeesAtLeast(context.employees, 50) || hasRevenueAtLeast(context.revenue, 40),
    priority: 'High',
    deadline: 'Annual transparency statement by 30 June',
    reason: 'Norwegian Transparency Act covers large enterprises with operations or sales in Norway.'
  },
  {
    id: 'fr-art29',
    jurisdictions: ['france'],
    condition: context => isFinancialInstitution(context),
    priority: 'High',
    deadline: 'Annual reporting (FY2021 onwards)',
    reason: 'French financial institutions must deliver Article 29 energy transition disclosures.'
  },
  {
    id: 'uk-sdr',
    jurisdictions: ['uk'],
    condition: context => isFinancialInstitution(context),
    priority: 'High',
    deadline: 'Entity reports live; product labels from 2024',
    reason: 'FCA-regulated asset managers and insurers must comply with UK SDR.'
  },
  {
    id: 'uk-secr',
    jurisdictions: ['uk'],
    condition: context =>
      isListedCompany(context) || isLargeCompany(context) || hasEmployeesAtLeast(context.employees, 250) || hasRevenueAtLeast(context.revenue, 36),
    priority: 'High',
    deadline: 'Annual SECR filing with directors’ report',
    reason: 'UK quoted and large unquoted companies must report energy and carbon information.'
  },
  {
    id: 'uk-esos',
    jurisdictions: ['uk'],
    condition: context => hasEmployeesAtLeast(context.employees, 250) || hasRevenueAtLeast(context.revenue, 44) || isLargeCompany(context),
    priority: 'Medium',
    deadline: 'Phase 4 compliance by 5 Dec 2027',
    reason: 'Large UK undertakings must complete ESOS energy audits each phase.'
  },
  {
    id: 'uk-srs',
    jurisdictions: ['uk'],
    condition: context => isListedCompany(context) || isLargeCompany(context),
    priority: 'Medium',
    deadline: 'Expected adoption for FY2025/26',
    reason: 'Upcoming UK Sustainability Reporting Standards will cover large and listed UK entities.'
  },
  {
    id: 'sec-climate',
    jurisdictions: ['us'],
    condition: context => isListedCompany(context),
    priority: 'Medium',
    deadline: 'Implementation currently suspended',
    reason: 'SEC climate rules target US-listed registrants once in force.'
  },
  {
    id: 'ca-sb253',
    jurisdictions: ['california'],
    condition: context => hasRevenueAtLeast(context.revenue, 450) || isLargeCompany(context),
    priority: 'High',
    deadline: 'Scope 1&2 in 2026, Scope 3 in 2027',
    reason: 'California SB 253 applies to companies over $1B revenue doing business in the state.'
  },
  {
    id: 'ca-ifrs-s',
    jurisdictions: ['canada'],
    condition: context => isListedCompany(context) || isLargeCompany(context) || isFinancialInstitution(context),
    priority: 'High',
    deadline: 'CSSB targeting FY2025 adoption',
    reason: 'Canadian issuers are preparing for IFRS S1/S2-aligned sustainability disclosure standards.'
  },
  {
    id: 'bmv-esg',
    jurisdictions: ['mexico'],
    condition: context => isListedCompany(context) || isLargeCompany(context),
    priority: 'Medium',
    deadline: 'Annual exchange ESG questionnaire',
    reason: 'BMV guidance encourages listed Mexican issuers to provide comprehensive ESG disclosure.'
  },
  {
    id: 'brsr-india',
    jurisdictions: ['india'],
    condition: context => isListedCompany(context) || isLargeCompany(context),
    priority: 'High',
    deadline: 'Mandatory from FY2022-23',
    reason: 'India’s top listed companies must file the Business Responsibility and Sustainability Report.'
  },
  {
    id: 'rbi-climate',
    jurisdictions: ['india'],
    condition: context => isFinancialInstitution(context),
    priority: 'High',
    deadline: 'Climate risk integration from FY2023-24',
    reason: 'RBI guidance applies to regulated banks and NBFCs managing climate risk.'
  },
  {
    id: 'nz-crd',
    jurisdictions: ['new-zealand'],
    condition: context => isListedCompany(context) || isLargeCompany(context) || isFinancialInstitution(context),
    priority: 'High',
    deadline: 'Climate statements due from 2024',
    reason: 'New Zealand climate reporting entities must publish climate-related disclosures.'
  },
  {
    id: 'au-climate',
    jurisdictions: ['australia'],
    condition: context => hasRevenueAtLeast(context.revenue, 50) || hasEmployeesAtLeast(context.employees, 100) || isLargeCompany(context),
    priority: 'High',
    deadline: 'Phase-in from FY2024-25',
    reason: 'Australian climate disclosure regime covers large entities by phased thresholds.'
  },
  {
    id: 'tse-esg',
    jurisdictions: ['japan'],
    condition: context => isListedCompany(context),
    priority: 'Medium',
    deadline: 'Corporate Governance Code updates 2022',
    reason: 'Tokyo Stock Exchange requires listed issuers to provide enhanced ESG disclosure.'
  },
  {
    id: 'hkex-esg',
    jurisdictions: ['hong-kong'],
    condition: context => isListedCompany(context),
    priority: 'High',
    deadline: 'Annual ESG report within 5 months of year end',
    reason: 'HKEX ESG Reporting Guide is mandatory on a comply-or-explain basis for listed companies.'
  },
  {
    id: 'sgx-sr',
    jurisdictions: ['singapore'],
    condition: context => isListedCompany(context) || isLargeCompany(context),
    priority: 'High',
    deadline: 'Climate reporting from FY2023 for priority sectors',
    reason: 'SGX issuers must deliver sustainability reporting aligned with ISSB/TCFD guidance.'
  },
  {
    id: 'csrc-esg',
    jurisdictions: ['china'],
    condition: context => isListedCompany(context) || isLargeCompany(context),
    priority: 'Medium',
    deadline: 'Enhanced ESG disclosures for 2024 reports',
    reason: 'CSRC guidance elevates ESG disclosure expectations for Chinese listed companies.'
  },
  {
    id: 'k-esg',
    jurisdictions: ['south-korea'],
    condition: context => isListedCompany(context) || isLargeCompany(context),
    priority: 'Medium',
    deadline: 'Phased rollout beginning 2025',
    reason: 'Korean listed entities face mandatory ESG disclosure on a phased basis.'
  },
  {
    id: 'brazil-cvm',
    jurisdictions: ['brazil'],
    condition: context => isListedCompany(context) || isFinancialInstitution(context),
    priority: 'High',
    deadline: 'Effective for 2023 filings',
    reason: 'Brazilian CVM rules mandate ESG disclosures for listed issuers and funds.'
  },
  {
    id: 'ifrs-s1',
    jurisdictions: ['eu', 'uk', 'canada', 'australia', 'new-zealand', 'singapore', 'japan', 'south-korea'],
    condition: context => (isListedCompany(context) || isLargeCompany(context)) && context.jurisdictions.length > 0,
    priority: 'Medium',
    deadline: 'Effective 2024 in adopting markets',
    reason: 'Jurisdictions adopting ISSB standards expect large or listed entities to apply IFRS S1.'
  },
  {
    id: 'ifrs-s2',
    jurisdictions: ['eu', 'uk', 'canada', 'australia', 'new-zealand', 'singapore', 'japan', 'south-korea'],
    condition: context => (isListedCompany(context) || isLargeCompany(context)) && context.jurisdictions.length > 0,
    priority: 'Medium',
    deadline: 'Effective 2024 in adopting markets',
    reason: 'IFRS S2 climate disclosures accompany IFRS S1 in adopting jurisdictions for large entities.'
  },
  {
    id: 'tcfd',
    jurisdictions: ['uk', 'canada', 'new-zealand', 'japan', 'singapore', 'hong-kong', 'australia', 'eu'],
    condition: context => isLargeCompany(context) || isFinancialInstitution(context),
    priority: 'Medium',
    deadline: 'Ongoing (mandatory in several markets)',
    reason: 'TCFD-aligned reporting is expected for large and financial institutions across selected markets.'
  },
  {
    id: 'gri-standards',
    condition: context => isLargeCompany(context) || context.jurisdictions.length >= 2,
    priority: 'Low',
    deadline: 'Universal Standards effective 2023',
    reason: 'Global stakeholders expect broad-impact organizations to report using GRI Standards.'
  },
  {
    id: 'sasb-standards',
    condition: context => isListedCompany(context) || isFinancialInstitution(context),
    priority: 'Low',
    deadline: 'Investor-focused standards (ongoing)',
    reason: 'SASB industry metrics support investor reporting for listed or financially material entities.'
  }
];

const priorityOrder = { High: 0, Medium: 1, Low: 2 };


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
  const jurisdictions = Array.from(document.querySelectorAll('.matcher-form .jurisdiction-checkbox:checked')).map(cb => cb.value);
  
  if (!orgType) {
    alert('Please select an organization type');
    return;
  }
  
  const results = determineApplicableRegulations(orgType, revenue, employees, jurisdictions);
  displayMatcherResults(results);
}

function determineApplicableRegulations(orgType, revenue, employees, jurisdictions) {
  const context = { orgType, revenue, employees, jurisdictions };
  const applicableRegs = [];
  const seen = new Set();

  matcherRules.forEach(rule => {
    const matchesJurisdiction = !rule.jurisdictions || hasJurisdiction(context, rule.jurisdictions);
    if (!matchesJurisdiction) return;
    if (!rule.condition(context)) return;

    if (seen.has(rule.id)) return;
    seen.add(rule.id);

    const metadata = regulationIndex[rule.id] || {};
    const priority = typeof rule.priority === 'function' ? rule.priority(context, metadata) : (rule.priority || 'Medium');
    const reason = typeof rule.reason === 'function' ? rule.reason(context, metadata) : (rule.reason || `Applicable in ${metadata.region || 'selected jurisdiction'}.`);
    const deadline = typeof rule.deadline === 'function' ? rule.deadline(context, metadata) : (rule.deadline || metadata.timeline || 'See official timeline');
    const label = metadata.name ? `${metadata.name}${metadata.acronym ? ` (${metadata.acronym})` : ''}` : rule.id.toUpperCase();
 
    applicableRegs.push({
      regulationId: rule.id,
      regulation: label,
      priority,
      deadline,
      reason,
      region: metadata.region || null
    });
    });
   
  applicableRegs.sort((a, b) => {
    const priorityDiff = (priorityOrder[a.priority] ?? 3) - (priorityOrder[b.priority] ?? 3);
    if (priorityDiff !== 0) return priorityDiff;
    return a.regulation.localeCompare(b.regulation);
  });


  return applicableRegs;
}

function displayMatcherResults(results) {
  const resultsContainer = document.getElementById('matcherResults');
  if (!resultsContainer) return;
  
  matcherResults = results;
  
  if (results.length === 0) {
    resultsContainer.innerHTML = `
      <div class="results-header">
        <h3>Analysis Results</h3>
        <div class="results-summary">
          <span class="summary-item total">Total Applicable: 0</span>
        </div>
      </div>
      <div class="applicable-regulations">
        <p>No regulations matched the current profile. Adjust the operating jurisdictions or organization details to see applicable obligations.</p>
      </div>
    `;
    return;
  }

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
  document.querySelectorAll('.matcher-form .jurisdiction-checkbox').forEach(cb => (cb.checked = false));
  document.getElementById('matcherResults').innerHTML = '';
}

function generateRoadmapFromMatcher() {
  if (matcherResults && matcherResults.length > 0) {
    switchSection('compliance-roadmap');
    // Pre-select regulations from matcher results
    const checkboxes = document.querySelectorAll('#roadmapRegulations input[type="checkbox"]');
    const selectedIds = new Set(matcherResults.map(result => result.regulationId));
    checkboxes.forEach(cb => {
    cb.checked = selectedIds.has(cb.value); 
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
const dataRequirementsMatrix = [
  {
    requirement: "Scope 1 GHG emissions (metric tons CO₂e)",
    description: "Gross direct greenhouse gas emissions from owned or controlled operations reported with organisational and market/location-based boundaries.",
    category: "climate",
    dataType: "quantitative",
    csrd: "Mandatory – ESRS E1-6 requires disclosure of absolute Scope 1 emissions with base year and methodology.",
    sfdr: "Mandatory – PAI 1(a) obliges financial market participants to report investee companies' Scope 1 emissions.",
    sec: "Mandatory – SEC Climate Disclosure Rule requires large filers to disclose Scope 1 emissions when material, subject to assurance phase-in.",
    tcfdIssb: "Mandatory – IFRS S2 §21 (TCFD-aligned) requires Scope 1 emissions in CO₂e with consolidation approach disclosed."
  },
  {
    requirement: "Scope 2 GHG emissions (market & location based)",
    description: "Indirect emissions from purchased electricity, steam, heat and cooling, separated into market-based and location-based totals.",
    category: "climate",
    dataType: "quantitative",
    csrd: "Mandatory – ESRS E1-6 requires gross Scope 2 emissions for both market and location methodologies.",
    sfdr: "Mandatory – PAI 1(b) requires Scope 2 emissions for investee companies.",
    sec: "Mandatory – SEC Climate Disclosure Rule requires Scope 2 emissions disclosures for large filers when material, with assurance requirements.",
    tcfdIssb: "Mandatory – IFRS S2 §21 requires Scope 2 emissions and methodologies consistent with the GHG Protocol."
  },
  {
    requirement: "Scope 3 GHG emissions by category",
    description: "Material value chain emissions disclosed by relevant Scope 3 categories and accompanied by data quality discussion.",
    category: "climate",
    dataType: "quantitative",
    csrd: "Mandatory – ESRS E1-6 requires Scope 3 totals with category breakdown where material and explanation of exclusions.",
    sfdr: "Mandatory – PAI 1(c) requires total Scope 3 emissions and coverage percentage for investee companies.",
    sec: "Mandatory – SEC climate rule requires Scope 3 disclosure when material or when targets include Scope 3, with safe harbour provisions.",
    tcfdIssb: "Mandatory – IFRS S2 §21 requires material Scope 3 categories, methodologies and assumptions disclosed."
  },
  {
    requirement: "GHG emissions intensity (tCO₂e per net revenue)",
    description: "Greenhouse gas intensity metrics normalised by economic output (e.g., tonnes CO₂e per € million of revenue).",
    category: "climate",
    dataType: "quantitative",
    csrd: "Mandatory – ESRS E1-7 requires at least one GHG intensity metric relative to net revenue and other relevant denominators.",
    sfdr: "Mandatory – PAI 3 demands carbon footprint and GHG intensity of investee companies per revenue.",
    sec: "Mandatory – SEC climate rule requires intensity metrics whenever Scope 1 and 2 are disclosed.",
    tcfdIssb: "Mandatory – IFRS S2 §28 requires intensity metrics linked to absolute emissions for comparability."
  },
  {
    requirement: "Renewable and low-carbon energy consumption share",
    description: "Percentage of total energy consumption derived from renewable and low-carbon sources, including self-generated energy.",
    category: "climate",
    dataType: "quantitative",
    csrd: "Mandatory – ESRS E1-5 requires disclosure of energy consumption by source, highlighting renewable share.",
    sfdr: "Mandatory – PAI 7 requires reporting share of non-renewable energy consumption and production.",
    sec: "Optional – disclose when energy mix is material to climate strategy or targets under the SEC climate rule.",
    tcfdIssb: "Mandatory – IFRS S2 §32 requires energy mix metrics including proportion of low-carbon energy."
  },
  {
    requirement: "Internal carbon pricing systems",
    description: "Existence, scope and monetary value of internal carbon price(s) applied to investment or operational decisions.",
    category: "climate",
    dataType: "qualitative",
    csrd: "Mandatory when applicable – ESRS E1-4 requires disclosure of internal carbon prices used and underlying assumptions.",
    sfdr: "Optional – can support sustainability risk policies but not a core PAI indicator.",
    sec: "Mandatory when used – SEC climate rule requires registrants using carbon pricing to disclose price levels and scope.",
    tcfdIssb: "Mandatory when used – IFRS S2 §30 (TCFD) requires details on internal carbon prices applied."
  },
  {
    requirement: "Climate resilience scenario analysis",
    description: "Narrative on scenario analysis performed, time horizons, reference scenarios and implications for strategy and financial planning.",
    category: "climate",
    dataType: "qualitative",
    csrd: "Mandatory – ESRS E1-1 requires analysing business resilience to at least one 1.5°C scenario and disclosing methodologies.",
    sfdr: "Optional – supports narrative for Article 8/9 products but not prescribed as a PAI metric.",
    sec: "Mandatory when conducted – SEC climate rule requires registrants to describe material use of scenario analysis and results.",
    tcfdIssb: "Mandatory – IFRS S2 §§14-16 require disclosure of climate resilience assessments based on scenario analysis."
  },
  {
    requirement: "Water withdrawal and discharge intensity",
    description: "Volumes of water withdrawn and discharged, broken down by source and intensity per unit of production in high-risk areas.",
    category: "environment",
    dataType: "quantitative",
    csrd: "Mandatory – ESRS E3 requires water withdrawal, consumption and discharge data with intensity metrics for material locations.",
    sfdr: "Mandatory – PAI 6 covers water emissions, including metrics on water consumption intensity for investees in high-water-stress areas.",
    sec: "Optional – disclose when water risks materially affect financial statements or climate-related risks.",
    tcfdIssb: "Recommended – IFRS S1 expects material water metrics, and IFRS S2 highlights water intensity for physical risk exposure."
  },
  {
    requirement: "Waste generation and hazardous waste ratio",
    description: "Total waste generated, treatment routes and proportion classified as hazardous or diverted from landfill.",
    category: "environment",
    dataType: "quantitative",
    csrd: "Mandatory – ESRS E5 requires disclosure of waste generated, recycled and hazardous share with targets.",
    sfdr: "Mandatory – PAI 9 tracks hazardous waste ratio for investee companies.",
    sec: "Optional – provide if waste management is material to climate risk or regulatory compliance disclosures.",
    tcfdIssb: "Recommended – IFRS S1 expects waste metrics when material to resource use and circular economy strategy."
  },
  {
    requirement: "Operations in biodiversity-sensitive areas",
    description: "Share of sites or revenues located in or adjacent to protected areas and related mitigation actions.",
    category: "environment",
    dataType: "qualitative",
    csrd: "Mandatory – ESRS E4 requires identification of material impacts and metrics for assets in protected or high biodiversity areas.",
    sfdr: "Mandatory – PAI 7 indicators include share of investments in companies operating near biodiversity-sensitive areas.",
    sec: "Optional – disclose when biodiversity impacts create material risks or expenditures.",
    tcfdIssb: "Recommended – IFRS S1 calls for nature-related disclosures where material, aligned with TNFD/TCFD guidance."
  },
  {
    requirement: "Air pollutant emissions (NOx, SOx, PM)",
    description: "Quantities of key air pollutants released, including nitrogen oxides, sulphur oxides and particulate matter.",
    category: "environment",
    dataType: "quantitative",
    csrd: "Mandatory – ESRS E2 requires disclosure of significant air pollutants including NOx, SOx, NMVOC, NH₃ and PM.",
    sfdr: "Mandatory – PAI 5 demands intensity of investee emissions of air pollutants (NOx, SOx, NMVOC, NH₃, PM2.5).",
    sec: "Optional – disclose when pollutant regulation or compliance materially affects operations.",
    tcfdIssb: "Recommended – IFRS S1 requires pollutant metrics when material to sustainability-related risks."
  },
  {
    requirement: "Deforestation-free commodity traceability",
    description: "Traceability coverage, geolocation data and due diligence outcomes for forest-risk commodities in the value chain.",
    category: "environment",
    dataType: "qualitative",
    csrd: "Mandatory when material – ESRS E5/E4 require explaining sourcing policies and controls for deforestation-risk commodities.",
    sfdr: "Optional – supports disclosures for Article 8/9 products on sustainable sourcing but not a core PAI.",
    sec: "Optional – disclose if supply-chain deforestation exposure represents a material risk or expenditure.",
    tcfdIssb: "Recommended – IFRS S1 encourages nature-related disclosures consistent with TNFD for material supply-chain impacts."
  },
  {
    requirement: "Gender pay gap (unadjusted)",
    description: "Difference between average remuneration of men and women expressed as a percentage of men's pay.",
    category: "social",
    dataType: "quantitative",
    csrd: "Mandatory – ESRS S1 requires disclosure of gender pay gap metrics and remediation actions.",
    sfdr: "Mandatory – PAI 12 requires unadjusted gender pay gap for investee companies.",
    sec: "Optional – disclose under human capital reporting when pay equity is material.",
    tcfdIssb: "Recommended – IFRS S1 expects disclosure of significant workforce diversity metrics when material."
  },
  {
    requirement: "Employee turnover and retention",
    description: "Annual employee turnover rate with segmentation by region or role and description of retention strategies.",
    category: "social",
    dataType: "quantitative",
    csrd: "Mandatory – ESRS S1 requires disclosure of employee turnover rates and retention measures.",
    sfdr: "Optional – may be used in additional SFDR indicators for social performance but not core PAIs.",
    sec: "Optional – disclose when turnover materially affects human capital under Regulation S-K Item 101(c).",
    tcfdIssb: "Recommended – IFRS S1 encourages workforce stability metrics where material."
  },
  {
    requirement: "Occupational injury frequency rate",
    description: "Recordable work-related injuries per 200,000 hours worked (or local equivalent) covering employees and contractors.",
    category: "social",
    dataType: "quantitative",
    csrd: "Mandatory – ESRS S1 requires disclosure of injury rates, severity and fatalities for employees and workers in the value chain.",
    sfdr: "Optional – can be reported as additional sustainability indicator for Article 8/9 products.",
    sec: "Optional – disclose when workplace safety materially impacts operations or legal proceedings.",
    tcfdIssb: "Recommended – IFRS S1 requires material health and safety metrics for workforce resilience."
  },
  {
    requirement: "Human rights due diligence processes",
    description: "Processes for identifying, preventing, mitigating and remediating human rights impacts across operations and value chain.",
    category: "social",
    dataType: "qualitative",
    csrd: "Mandatory – ESRS S2/S3 require detailed disclosure of due diligence approach, salient issues and remediation outcomes.",
    sfdr: "Mandatory – Article 4 PAI statements must describe due diligence policies regarding principal adverse impacts on human rights.",
    sec: "Optional – disclose when human rights risks are material under human capital requirements.",
    tcfdIssb: "Recommended – IFRS S1 expects explanation of due diligence for material sustainability-related risks and opportunities."
  },
  {
    requirement: "Value chain labour rights incidents",
    description: "Number of severe human rights or labour incidents identified in the supply chain and status of remediation actions.",
    category: "social",
    dataType: "qualitative",
    csrd: "Mandatory – ESRS S2 requires metrics on severe human rights incidents in own operations and the value chain.",
    sfdr: "Mandatory – PAI 10 tracks violations of UNGC principles and OECD guidelines among investees.",
    sec: "Optional – disclose when incidents give rise to material legal or reputational risks.",
    tcfdIssb: "Recommended – IFRS S1 requires disclosure of material incidents and responses affecting sustainability performance."
  },
  {
    requirement: "Board oversight of sustainability matters",
    description: "Structure, frequency and expertise of board or committee oversight of sustainability and climate-related matters.",
    category: "governance",
    dataType: "governance",
    csrd: "Mandatory – ESRS G1 requires governance disclosures on board oversight, roles and responsibilities for sustainability matters.",
    sfdr: "Mandatory – SFDR Articles 3 and 5 require integration of sustainability risks into governance and remuneration policies.",
    sec: "Mandatory – SEC climate rule requires description of board oversight of climate-related risks and governance processes.",
    tcfdIssb: "Mandatory – IFRS S1/S2 require governance disclosures aligned with the TCFD governance pillar."
  },
  {
    requirement: "Management remuneration linked to sustainability targets",
    description: "Extent to which executive incentive plans incorporate climate or broader sustainability performance conditions.",
    category: "governance",
    dataType: "governance",
    csrd: "Mandatory – ESRS G1 requires entities to explain how remuneration policies align with sustainability targets.",
    sfdr: "Mandatory – Article 5 requires financial market participants to describe how remuneration policies are consistent with sustainability risks.",
    sec: "Mandatory when applicable – SEC climate rule requires disclosure if compensation is linked to achievement of climate-related targets.",
    tcfdIssb: "Recommended – IFRS S1 expects disclosure of incentive structures tied to sustainability outcomes when material."
  },
  {
    requirement: "Controls and assurance over sustainability data",
    description: "Internal control environment, audit trail and assurance status for sustainability information, including external assurance plans.",
    category: "governance",
    dataType: "governance",
    csrd: "Mandatory – ESRS G1 requires disclosure of internal control systems and assurance approach for sustainability information.",
    sfdr: "Optional – robust controls support PAI disclosures but are not explicitly mandated beyond general governance expectations.",
    sec: "Mandatory – SEC climate rule requires description of processes for identifying, assessing and managing climate-related risks including controls over relevant data.",
    tcfdIssb: "Mandatory – IFRS S1 expects disclosure of governance and controls ensuring reliability of sustainability reporting."
  },
  {
    requirement: "Integration of climate risk into enterprise risk management",
    description: "Processes for identifying, assessing and prioritising climate-related risks within the broader enterprise risk framework.",
    category: "governance",
    dataType: "governance",
    csrd: "Mandatory – ESRS E1 and ESRS G1 require integration of climate-related risks into risk management and internal control systems.",
    sfdr: "Mandatory – Article 3 requires disclosure of policies on the integration of sustainability risks in investment decision-making.",
    sec: "Mandatory – SEC climate rule requires registrants to describe climate risk identification, assessment and management processes.",
    tcfdIssb: "Mandatory – IFRS S2 §§18-19 require disclosure of climate risk management processes aligned with the TCFD framework."
  },
  {
    requirement: "Stakeholder engagement on sustainability topics",
    description: "Approach to engaging workers, communities, investors and other stakeholders on sustainability priorities and feedback loops.",
    category: "governance",
    dataType: "qualitative",
    csrd: "Mandatory – ESRS S1/S3/G1 require explanation of stakeholder engagement processes and integration into decision-making.",
    sfdr: "Optional – recommended to demonstrate consideration of principal adverse impacts but not prescribed.",
    sec: "Optional – disclose when stakeholder feedback materially influences strategy or risk management.",
    tcfdIssb: "Recommended – IFRS S1 encourages disclosure of stakeholder engagement informing sustainability strategy."
  }
];

const dataMatrixCategoryLabels = {
  climate: "Climate",
  environment: "Environment",
  social: "Social",
  governance: "Governance"
};

const dataMatrixTypeLabels = {
  quantitative: "Quantitative Metric",
  qualitative: "Qualitative Disclosure",
  governance: "Governance Practice"
};

function setupDataRequirements() {
  const exportBtn = document.getElementById('exportDataMatrix');
  if (exportBtn) {
    exportBtn.addEventListener('click', exportDataMatrix);
  }
  
  const categorySelect = document.getElementById('dataCategory');
  const typeSelect = document.getElementById('dataType');

  if (categorySelect) {
    categorySelect.addEventListener('change', displayDataMatrix);
  }

  if (typeSelect) {
    typeSelect.addEventListener('change', displayDataMatrix);
  }


  displayDataMatrix();
}

function displayDataMatrix() {
  const matrixContainer = document.getElementById('dataMatrix');
  if (!matrixContainer) return;
  
  const categorySelect = document.getElementById('dataCategory');
  const typeSelect = document.getElementById('dataType');

  const categoryFilter = categorySelect ? categorySelect.value : '';
  const typeFilter = typeSelect ? typeSelect.value : '';

  const filteredData = dataRequirementsMatrix.filter(item => {
    const categoryMatch = !categoryFilter || item.category === categoryFilter;
    const typeMatch = !typeFilter || item.dataType === typeFilter;
    return categoryMatch && typeMatch;
  });

  if (!filteredData.length) {
    matrixContainer.innerHTML = `
      <div class="matrix-empty">
        <p>No data requirements match the selected filters. Adjust the category or data type to view relevant metrics.</p>
      </div>
    `;
    return;
  }

  const tableRows = filteredData.map(row => `
    <tr>
      <td>
        <div class="requirement-name">${row.requirement}</div>
        <div class="requirement-description">${row.description}</div>
        <div class="requirement-tags">
          <span class="tag tag--category tag--${row.category}">${dataMatrixCategoryLabels[row.category] || row.category}</span>
          <span class="tag tag--type tag--${row.dataType}">${dataMatrixTypeLabels[row.dataType] || row.dataType}</span>
        </div>
      </td>
      <td class="${getRequirementClass(row.csrd)}">${row.csrd}</td>
      <td class="${getRequirementClass(row.sfdr)}">${row.sfdr}</td>
      <td class="${getRequirementClass(row.sec)}">${row.sec}</td>
      <td class="${getRequirementClass(row.tcfdIssb)}">${row.tcfdIssb}</td>
    </tr>
  `).join('');

  matrixContainer.innerHTML = `
    <table class="matrix-table">
      <thead>
        <tr>
          <th>Data Requirement</th>
          <th>CSRD</th>
          <th>SFDR</th>
          <th>SEC</th>
          <th>TCFD/ISSB</th>
        </tr>
      </thead>
      <tbody>
       ${tableRows}
       </tbody>
    </table>
  `;
}

function getRequirementClass(requirement) {
  if (!requirement) return 'not-required';
  const lowerReq = requirement.toLowerCase();
  if (lowerReq.includes('mandatory') || lowerReq.includes('required') || lowerReq.includes('must')) {
    return 'required';
  }
  if (lowerReq.includes('optional') || lowerReq.includes('material') || lowerReq.includes('encouraged') || lowerReq.includes('comply')) {
    return 'optional';
  }  
  return 'not-required';
}

function exportDataMatrix() {
  alert('Data matrix export functionality would be implemented here');
}

// Timeline & Deadlines
const timelineEvents = [
  {
    id: 'csrd-large-2025',
    regulation: 'Corporate Sustainability Reporting Directive (CSRD)',
    region: 'eu',
    jurisdiction: 'European Union',
    date: '2025-04-30',
    startDate: '2024-01-01',
    endDate: '2025-04-30',
    milestone: 'First CSRD sustainability statements for FY2024',
    description:
      'Large public-interest entities must publish ESRS-aligned sustainability statements alongside FY2024 annual reports.',
    organizationTypes: [
      'EU large public-interest companies (>500 employees)',
      'Non-EU parents with >€150M EU revenue and an EU branch/subsidiary'
    ],
    type: 'Reporting deadline'
  },
  {
    id: 'csrd-large-2026',
    regulation: 'Corporate Sustainability Reporting Directive (CSRD)',
    region: 'eu',
    jurisdiction: 'European Union',
    date: '2026-04-30',
    startDate: '2025-01-01',
    endDate: '2026-04-30',
    milestone: 'All other large EU companies submit first CSRD report for FY2025',
    description:
      'Large EU undertakings not previously in scope must deliver their inaugural ESRS report covering FY2025 data within four months of year-end.',
    organizationTypes: [
      'EU large undertakings meeting two of: >250 employees, >€40M turnover, >€20M total assets',
      'Non-EU subsidiaries that exceed the large undertaking thresholds'
    ],
    type: 'Reporting deadline'
  },
  {
    id: 'csrd-sme-2027',
    regulation: 'Corporate Sustainability Reporting Directive (CSRD)',
    region: 'eu',
    jurisdiction: 'European Union',
    date: '2027-04-30',
    startDate: '2026-01-01',
    endDate: '2027-04-30',
    milestone: 'Listed SMEs (that did not opt out) file first CSRD report for FY2026',
    description:
      'EU listed SMEs remaining in scope must publish ESRS disclosures for FY2026 data, unless they have used the opt-out deferral.',
    organizationTypes: [
      'EU listed SMEs exceeding two of: >10 employees, >€900K turnover, >€450K total assets',
      'SMEs from third countries listed on EU regulated markets'
    ],
    type: 'Reporting deadline'
  },
  {
    id: 'csrd-third-country-2028',
    regulation: 'Corporate Sustainability Reporting Directive (CSRD)',
    region: 'eu',
    jurisdiction: 'European Union',
    date: '2028-01-01',
    startDate: '2028-01-01',
    endDate: '2029-06-30',
    milestone: 'First reporting period begins for third-country parent groups',
    description:
      'Non-EU parent companies with significant EU turnover start the FY2028 reporting period that will require consolidated CSRD reporting in 2029.',
    organizationTypes: [
      'Non-EU parent undertakings generating >€150M EU turnover with at least one EU subsidiary or branch'
    ],
    type: 'Reporting period start'
  },
  {
    id: 'eudr-large-2025',
    regulation: 'EU Deforestation Regulation (EUDR)',
    region: 'eu',
    jurisdiction: 'European Union',
    date: '2025-12-30',
    startDate: '2024-06-29',
    endDate: '2025-12-30',
    milestone: 'Due diligence statements required for large operators and traders',
    description:
      'Large operators placing relevant commodities on the EU market must submit EUDR due diligence statements and ensure traceability back to plot of land.',
    organizationTypes: [
      'EU and non-EU companies importing or exporting cattle, cocoa, coffee, oil palm, rubber, soy or wood products at large-enterprise scale'
    ],
    type: 'Compliance deadline'
  },
  {
    id: 'eudr-sme-2026',
    regulation: 'EU Deforestation Regulation (EUDR)',
    region: 'eu',
    jurisdiction: 'European Union',
    date: '2026-06-30',
    startDate: '2025-12-31',
    endDate: '2026-06-30',
    milestone: 'SME operators transition into scope following deferral',
    description:
      'Small and medium-sized operators benefit from a short deferral but must comply with EUDR due diligence obligations from mid-2026.',
    organizationTypes: [
      'SME operators and traders of in-scope forest and agricultural commodities targeting the EU market'
    ],
    type: 'Compliance deadline'
  },
  {
    id: 'eu-taxonomy-2025',
    regulation: 'EU Taxonomy Regulation',
    region: 'eu',
    jurisdiction: 'European Union',
    date: '2025-01-01',
    startDate: '2024-01-01',
    endDate: '2025-12-31',
    milestone: 'Reporting on all six environmental objectives becomes mandatory',
    description:
      'Disclosures must cover taxonomy alignment for climate, water, circular economy, pollution prevention and biodiversity objectives for FY2024 reporting.',
    organizationTypes: [
      'Companies subject to CSRD reporting',
      'Financial market participants making SFDR product disclosures'
    ],
    type: 'Disclosure expansion'
  },
  {
    id: 'sec-climate-laf-2026',
    regulation: 'US SEC Climate Disclosure Rule',
    region: 'us',
    jurisdiction: 'United States',
    date: '2026-05-31',
    startDate: '2025-01-01',
    endDate: '2026-05-31',
    milestone: 'Large accelerated filers submit first climate disclosures (FY2025)',
    description:
      'Large accelerated filers must include climate-related disclosures, financial statement footnotes and Scope 1 & 2 emissions in 2026 Form 10-K filings.',
    organizationTypes: [
      'US registrants classified as large accelerated filers (public float ≥ $700M)',
      'Foreign private issuers meeting large accelerated filer thresholds'
    ],
    type: 'Reporting deadline'
  },
  {
    id: 'sec-climate-af-2027',
    regulation: 'US SEC Climate Disclosure Rule',
    region: 'us',
    jurisdiction: 'United States',
    date: '2027-05-31',
    startDate: '2026-01-01',
    endDate: '2027-05-31',
    milestone: 'Accelerated filers file first climate disclosures (FY2026)',
    description:
      'Accelerated filers must follow with climate-related disclosures, including Scope 1 & 2 emissions, in 2027 periodic filings.',
    organizationTypes: [
      'US registrants classified as accelerated filers (public float $75M–$700M)',
      'Foreign private issuers that are accelerated filers'
    ],
    type: 'Reporting deadline'
  },
  {
    id: 'ca-sb253-scope12-2026',
    regulation: 'California Climate Corporate Data Accountability Act (SB 253)',
    region: 'us',
    jurisdiction: 'California, United States',
    date: '2026-01-01',
    startDate: '2025-01-01',
    endDate: '2026-01-01',
    milestone: 'Scope 1 and 2 emissions reporting begins',
    description:
      'Covered entities must start reporting Scope 1 and Scope 2 emissions for FY2025 to the California Air Resources Board starting in 2026.',
    organizationTypes: [
      'Public and private companies doing business in California with >$1B global revenue'
    ],
    type: 'Reporting start'
  },
  {
    id: 'ca-sb253-scope3-2027',
    regulation: 'California Climate Corporate Data Accountability Act (SB 253)',
    region: 'us',
    jurisdiction: 'California, United States',
    date: '2027-01-01',
    startDate: '2026-01-01',
    endDate: '2027-01-01',
    milestone: 'Scope 3 emissions attestation window opens',
    description:
      'Covered entities expand reporting to include Scope 3 emissions with phased assurance requirements beginning in 2027.',
    organizationTypes: [
      'Public and private companies doing business in California with >$1B global revenue'
    ],
    type: 'Reporting expansion'
  },
  {
    id: 'ca-sb261-2026',
    regulation: 'California Climate-Related Financial Risk Act (SB 261)',
    region: 'us',
    jurisdiction: 'California, United States',
    date: '2026-01-01',
    startDate: '2025-01-01',
    endDate: '2026-01-01',
    milestone: 'First biennial climate-risk report due',
    description:
      'Large entities must publish a climate-related financial risk report aligned with TCFD recommendations and mitigation actions.',
    organizationTypes: [
      'Companies doing business in California with >$500M global revenue (excluding insurers)'
    ],
    type: 'Reporting deadline'
  },
  {
    id: 'au-climate-group1-2025',
    regulation: 'Australian Climate-related Financial Disclosure Regime',
    region: 'asia',
    jurisdiction: 'Australia',
    date: '2025-10-31',
    startDate: '2024-07-01',
    endDate: '2025-10-31',
    milestone: 'Group 1 entities publish first climate disclosures (FY2024-25)',
    description:
      'Australia’s largest listed and unlisted entities must provide climate-related financial disclosures aligned to ISSB standards for FY2024-25.',
    organizationTypes: [
      'Australian entities with >A$1B consolidated revenue or >$1B assets',
      'Large financial institutions regulated by APRA'
    ],
    type: 'Reporting deadline'
  },
  {
    id: 'au-climate-group2-2027',
    regulation: 'Australian Climate-related Financial Disclosure Regime',
    region: 'asia',
    jurisdiction: 'Australia',
    date: '2027-10-31',
    startDate: '2026-07-01',
    endDate: '2027-10-31',
    milestone: 'Group 2 entities submit first mandatory climate report',
    description:
      'The regime expands to medium-large entities preparing FY2026-27 reports with mandatory disclosure of transition plans and emissions.',
    organizationTypes: [
      'Australian entities with A$500M–A$1B revenue or 250–499 employees'
    ],
    type: 'Reporting deadline'
  },
  {
    id: 'au-climate-group3-2028',
    regulation: 'Australian Climate-related Financial Disclosure Regime',
    region: 'asia',
    jurisdiction: 'Australia',
    date: '2028-10-31',
    startDate: '2027-07-01',
    endDate: '2028-10-31',
    milestone: 'Group 3 entities come into scope for FY2027-28 reports',
    description:
      'Smaller but still significant entities must provide climate disclosures, extending coverage across the Australian economy.',
    organizationTypes: [
      'Australian entities with A$50M–A$500M revenue and 100–499 employees',
      'Commonwealth public sector entities meeting the Group 3 thresholds'
    ],
    type: 'Reporting deadline'
  },
  {
    id: 'sgx-climate-2026',
    regulation: 'Singapore SGX Climate Reporting',
    region: 'asia',
    jurisdiction: 'Singapore',
    date: '2026-05-31',
    startDate: '2025-01-01',
    endDate: '2026-05-31',
    milestone: 'Mandatory climate reporting for priority sectors',
    description:
      'SGX-listed issuers in finance, agriculture, energy, and transportation must publish climate-related disclosures aligned with TCFD for FY2025.',
    organizationTypes: [
      'SGX-listed issuers in priority industries',
      'Large Singapore-based financial institutions'
    ],
    type: 'Reporting deadline'
  },
  {
    id: 'japan-prime-2025',
    regulation: 'Japan FSA Sustainability Disclosure Guidance',
    region: 'asia',
    jurisdiction: 'Japan',
    date: '2025-06-30',
    startDate: '2024-04-01',
    endDate: '2025-06-30',
    milestone: 'Prime Market issuers deliver enhanced sustainability reporting',
    description:
      'Tokyo Stock Exchange Prime Market companies must include enhanced climate and sustainability disclosures in annual securities reports from FY2024.',
    organizationTypes: [
      'Tokyo Stock Exchange Prime Market listed companies'
    ],
    type: 'Reporting deadline'
  },
  {
    id: 'india-brsr-2027',
    regulation: 'India BRSR Core',
    region: 'asia',
    jurisdiction: 'India',
    date: '2027-07-31',
    startDate: '2026-04-01',
    endDate: '2027-07-31',
    milestone: 'Group 2 listed entities submit first reasonable-assurance BRSR Core',
    description:
      'The Securities and Exchange Board of India phases in the BRSR Core assurance requirement, extending to the next 250 listed entities by FY2026-27.',
    organizationTypes: [
      'India’s top 501-750 listed entities by market capitalisation',
      'Large Indian companies preparing sustainability filings for SEBI'
    ],
    type: 'Assurance deadline'
  }
];

const timelineRegionLabels = {
  '': 'All regions',
  eu: 'European Union',
  us: 'United States',
  asia: 'Asia-Pacific'
};

let currentTimelineView = 'calendar';

function setupTimelineDeadlines() {
  const viewBtns = document.querySelectorAll('.timeline-view');
  viewBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      viewBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      const view = this.getAttribute('data-view');
      updateTimelineView(view);
      currentTimelineView = view;
    });
  });
  
  const regionSelect = document.getElementById('timelineRegion');
  const yearSelect = document.getElementById('timelineYear');

  const handleFilterChange = () => updateTimelineView(currentTimelineView);

  if (regionSelect) {
    regionSelect.addEventListener('change', handleFilterChange);
  }

  if (yearSelect) {
    yearSelect.addEventListener('change', handleFilterChange);
  }

  const activeBtn = document.querySelector('.timeline-view.active');
  if (activeBtn) {
    currentTimelineView = activeBtn.getAttribute('data-view');
  }


  initializeTimeline();
}

function initializeTimeline() {
  updateTimelineView(currentTimelineView);
}

function updateTimelineView(view) {
  const container = document.getElementById('timelineContainer');
  if (!container) return;
  
  const filters = getTimelineFilters();
  const events = filterTimelineEvents(filters);


  if (view === 'calendar') {
     displayCalendarView(container, events, filters);
  } else if (view === 'timeline') {
    displayTimelineView(container, events, filters);
  } else if (view === 'gantt') {
    displayGanttView(container, events, filters);
  }
}
function displayCalendarView(container, events, filters) {
  const summary = createTimelineSummary(filters, events.length);
  const selectedYear = parseInt(filters.year, 10) || new Date().getFullYear();
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const eventsWithDates = events.filter(event => event.date && new Date(event.date).getFullYear() === selectedYear);
  const undatedEvents = events.filter(event => !event.date || new Date(event.date).getFullYear() !== selectedYear);

  if (eventsWithDates.length === 0) {
    container.innerHTML = `
      ${summary}
      <div class="timeline-empty">No dated milestones for the selected filters. Adjust the region or year to explore other timelines.</div>
    `;
    return;
  }
  
  const groupedByMonth = eventsWithDates.reduce((acc, event) => {
    const eventDate = new Date(event.date);
    const month = eventDate.getMonth();
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(event);
    return acc;
  }, {});

  const months = Object.keys(groupedByMonth)
    .map(m => parseInt(m, 10))
    .sort((a, b) => a - b);

  const today = new Date();

  const monthCalendars = months
    .map(month => {
      const daysInMonth = new Date(selectedYear, month + 1, 0).getDate();
      const firstDay = new Date(selectedYear, month, 1).getDay();
      const eventsInMonth = groupedByMonth[month];

      let monthHTML = `
        <div class="calendar-month">
          <div class="calendar-month-header">
            <h3>${monthNames[month]} ${selectedYear}</h3>
            <span>${eventsInMonth.length} milestone${eventsInMonth.length === 1 ? '' : 's'}</span>
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

      for (let i = 0; i < firstDay; i++) {
        monthHTML += '<div class="calendar-day empty"></div>';
      }

      for (let day = 1; day <= daysInMonth; day++) {
        const dayEvents = eventsInMonth.filter(event => new Date(event.date).getDate() === day);
        const hasDeadline = dayEvents.length > 0;
        const isToday =
          day === today.getDate() &&
          month === today.getMonth() &&
          selectedYear === today.getFullYear();
        const classes = `calendar-day ${hasDeadline ? 'has-deadline' : ''} ${isToday ? 'today' : ''}`;
        const eventsHTML = dayEvents
          .map(event => `
            <div class="calendar-event">
              <strong>${event.regulation}</strong>
              <span>${event.milestone}</span>
              <span class="calendar-applicability">Applicable to: ${event.organizationTypes.join('; ')}</span>
            </div>
          `)
          .join('');

        monthHTML += `
          <div class="${classes}">
            <div class="calendar-day-number">${day}</div>
            <div class="calendar-events">${eventsHTML}</div>
          </div>
        `;
      }

      monthHTML += '</div></div>';
      return monthHTML;
    })
    .join('');

  const undatedHTML = undatedEvents.length
    ? `
      <div class="timeline-undated">
        <h4>Milestones spanning ${filters.year}</h4>
        <ul>
          ${undatedEvents
            .map(event => `
              <li>
                <strong>${event.regulation}</strong>: ${event.milestone} (${event.organizationTypes.join(', ')})
              </li>
            `)
            .join('')}
        </ul>
      </div>
    `
    : '';

  container.innerHTML = `${summary}${monthCalendars}${undatedHTML}`;
}


function displayTimelineView(container, events, filters) {
  const summary = createTimelineSummary(filters, events.length);

  if (!events.length) {
    container.innerHTML = `
      ${summary}
      <div class="timeline-empty">No milestones for the selected filters. Try a different region or year.</div>
    `;
    return;
  }

  const timelineItems = events
    .map(event => {
      const eventDate = event.date ? new Date(event.date) : null;
      const formattedDate = eventDate ? formatTimelineDate(eventDate) : 'Date TBC';
      const regionLabel = event.jurisdiction || timelineRegionLabels[event.region] || 'Global';
     return `
        <div class="timeline-item">
          <div class="timeline-date">
            <span class="timeline-date-primary">${formattedDate}</span>
            <span class="timeline-region">${regionLabel}</span>
          </div>
          <div class="timeline-content">
           <h4>${event.regulation}</h4>
            <p class="timeline-milestone">${event.milestone}</p>
            <p>${event.description}</p>
            <p class="timeline-applicability"><strong>Applicability:</strong> ${event.organizationTypes.join('; ')}</p>
            <span class="timeline-chip">${event.type}</span>
          </div>
        </div>
 `;
    })
    .join('');

  container.innerHTML = `${summary}<div class="timeline-list">${timelineItems}</div>`;
}

function displayGanttView(container, events, filters) {
  const summary = createTimelineSummary(filters, events.length);

  if (!events.length) {
    container.innerHTML = `
      ${summary}
      <div class="timeline-empty">No timeline segments to plot for the selected filters.</div>
    `;
    return;
  }

  const sortedEvents = [...events].sort((a, b) => {
    const startA = new Date(a.startDate || a.date);
    const startB = new Date(b.startDate || b.date);
    return startA - startB;
  });

  const startTimes = sortedEvents.map(event => new Date(event.startDate || event.date));
  const endTimes = sortedEvents.map(event => new Date(event.endDate || event.date));
  const minStart = new Date(Math.min(...startTimes));
  const maxEnd = new Date(Math.max(...endTimes));
  const totalDuration = Math.max(maxEnd.getTime() - minStart.getTime(), 1);

  const rows = sortedEvents
    .map(event => {
      const start = new Date(event.startDate || event.date);
      const end = new Date(event.endDate || event.date);
      const startOffset = ((start.getTime() - minStart.getTime()) / totalDuration) * 100;
      const width = Math.max(((end.getTime() - start.getTime()) / totalDuration) * 100, 2);

      return `
        <div class="gantt-row">
          <div class="gantt-label">
            <strong>${event.regulation}</strong>
            <span>${event.milestone}</span>
            <span class="gantt-applicability">Applies to: ${event.organizationTypes.join('; ')}</span>
          </div>
          <div class="gantt-track">
            <div class="gantt-bar ${event.region}" style="margin-left:${startOffset}%; width:${width}%;"></div>
            <div class="gantt-dates">${formatTimelineDate(start)} – ${formatTimelineDate(end)}</div>
          </div>
        </div>
      `;
    })
    .join('');

  container.innerHTML = `${summary}<div class="gantt-chart">${rows}</div>`;
}

function getTimelineFilters() {
  const regionSelect = document.getElementById('timelineRegion');
  const yearSelect = document.getElementById('timelineYear');

  const region = regionSelect ? regionSelect.value : '';
  const year = yearSelect ? yearSelect.value : new Date().getFullYear().toString();

  return { region, year };
}

function filterTimelineEvents(filters) {
  const selectedYear = parseInt(filters.year, 10);

  return timelineEvents
    .filter(event => {
      const regionMatch = !filters.region || event.region === filters.region;

      const start = new Date(event.startDate || event.date);
      const end = new Date(event.endDate || event.date);
      const hasDate = !!event.date;
      const dateYear = hasDate ? new Date(event.date).getFullYear() : null;

      const yearMatch = Number.isNaN(selectedYear)
        ? true
        : (hasDate && dateYear === selectedYear) ||
          (selectedYear >= start.getFullYear() && selectedYear <= end.getFullYear());

      return regionMatch && yearMatch;
    })
    .sort((a, b) => {
      const dateA = new Date(a.date || a.startDate);
      const dateB = new Date(b.date || b.startDate);
      return dateA - dateB;
    });
}

function createTimelineSummary(filters, count) {
  const regionLabel = timelineRegionLabels[filters.region] || timelineRegionLabels[''];
  const summaryYear = filters.year || new Date().getFullYear();
  return `
    <div class="timeline-summary">
      Showing <strong>${count}</strong> milestone${count === 1 ? '' : 's'} for <span>${regionLabel}</span> in <span>${summaryYear}</span>
    </div>
  `;
}
function formatTimelineDate(date) {
  return date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
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
