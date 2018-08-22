import api_key from './api_key';

const basic = 'https://api.data.gov/ed/collegescorecard/v1/schools?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&_fields=';
const profile = 'school.name,school.city,school.state,school.zip,school.school_url,2015.student.size,';
const programs = 
'2015.academics.program_percentage.agriculture,' +
'2015.academics.program_percentage.resources,' +
'2015.academics.program_percentage.architecture,' +
'2015.academics.program_percentage.ethnic_cultural_gender,' +
'2015.academics.program_percentage.communication,' +
'2015.academics.program_percentage.communications_technology,' +
'2015.academics.program_percentage.computer,' +
'2015.academics.program_percentage.personal_culinary,' +
'2015.academics.program_percentage.education,' +
'2015.academics.program_percentage.engineering,' +
'2015.academics.program_percentage.engineering_technology,' +
'2015.academics.program_percentage.language,' +
'2015.academics.program_percentage.family_consumer_science,' +
'2015.academics.program_percentage.legal,' +
'2015.academics.program_percentage.english,' +
'2015.academics.program_percentage.humanities,' +
'2015.academics.program_percentage.library,' +
'2015.academics.program_percentage.biological,' +
'2015.academics.program_percentage.mathematics,' +
'2015.academics.program_percentage.military,' +
'2015.academics.program_percentage.multidiscipline,' +
'2015.academics.program_percentage.parks_recreation_fitness,' +
'2015.academics.program_percentage.philosophy_religious,' +
'2015.academics.program_percentage.theology_religious_vocation,' +
'2015.academics.program_percentage.physical_science,' +
'2015.academics.program_percentage.science_technology,' +
'2015.academics.program_percentage.psychology,' +
'2015.academics.program_percentage.security_law_enforcement,' +
'2015.academics.program_percentage.public_administration_social_service,' +
'2015.academics.program_percentage.social_science,' +
'2015.academics.program_percentage.construction,' +
'2015.academics.program_percentage.mechanic_repair_technology,' +
'2015.academics.program_percentage.precision_production,' +
'2015.academics.program_percentage.transportation,' +
'2015.academics.program_percentage.visual_performing,' +
'2015.academics.program_percentage.health,' +
'2015.academics.program_percentage.business_marketing,' +
'2015.academics.program_percentage.history,';

const race = 
'2015.student.demographics.race_ethnicity.white,' +
'2015.student.demographics.race_ethnicity.black,' +
'2015.student.demographics.race_ethnicity.hispanic,' +
'2015.student.demographics.race_ethnicity.asian,' +
'2015.student.demographics.race_ethnicity.aian,' +
'2015.student.demographics.race_ethnicity.nhpi,' +
'2015.student.demographics.race_ethnicity.two_or_more,' +
'2015.student.demographics.race_ethnicity.non_resident_alien,' +
'2015.student.demographics.race_ethnicity.unknown,' +
'2015.student.demographics.race_ethnicity.white_non_hispanic,' +
'2015.student.demographics.race_ethnicity.black_non_hispanic,' +
'2015.student.demographics.race_ethnicity.asian_pacific_islander,';

const price =
'2015.cost.net_price.public.by_income_level.0-30000,' +
'2015.cost.net_price.public.by_income_level.30001-48000,' +
'2015.cost.net_price.public.by_income_level.48001-75000,' +
'2015.cost.net_price.public.by_income_level.75001-110000,' +
'2015.cost.net_price.public.by_income_level.110001-plus,';

const sat =
'2015.admissions.sat_scores.25th_percentile.critical_reading,' +
'2015.admissions.sat_scores.75th_percentile.critical_reading,' +
'2015.admissions.sat_scores.25th_percentile.math,' +
'2015.admissions.sat_scores.75th_percentile.math,' +
'2015.admissions.sat_scores.25th_percentile.writing,' +
'2015.admissions.sat_scores.75th_percentile.writing,' +
'2015.admissions.sat_scores.midpoint.critical_reading,' +
'2015.admissions.sat_scores.midpoint.math,' +
'2015.admissions.sat_scores.midpoint.writing,';

const key = '&api_key=' + api_key;

const url = basic + profile + programs + race + price + sat + key;

export default url;

