Survey
    .StylesManager
    .applyTheme("modern");

var dateOptions = [
    "12:00 AM",
    "1:00 AM",
    "2:00 AM",
    "3:00 AM",
    "4:00 AM",
    "5:00 AM",
    "6:00 AM",
    "7:00 AM",
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
    "11:00 PM"
]

var json = {
    "title": {
			"default": "Cox COVID-19 Related Access Test Form",
			"es": "Cox COVID-19 Spanish Test Form"
		},
		"elements": [
				{
						"type": "panel",
						"name": "first_page_container_panel",
						"elements": [
								{
										"type": "text",
										"name": "first_name_textbox",
										"title": {
											"default": "First Name",
											"es": "Nombre de pila"
										},
										"inputType": "text",
										"isRequired": "true"
								}, {
										"type": "text",
										"name": "last_name_textbox",
										"title": {
											"default": "Last Name",
											"es": "Apellido"
										},
										"inputType": "text",
										"isRequired": "true"
								}, {
										"type": "radiogroup",
										"name": "how_to_contact_radiogroup",
										"title": {
											"default": "How would you like to be contacted, if needed?",
											"es": "¿Cómo le gustaría ser contactado, si es necesario?"
										},
										"choices": [
												{
														"value": "mobilePhone",
														"text": {
															"default": "Mobile Phone",
															"es": "Teléfono móvil"
														}
												}, {
														"value": "email",
														"text": {
															"default": "Email",
															"es": "Correo electrónico"
														}
												}
										],
										"isRequired": "true"
								}, {
										"type": "text",
										"name": "mobile_phone_textbox",
										"title": {
											"default": "Mobile Phone Number",
											"es": "Número de teléfono móvil",
										},
										"description": {
											"default": "Note: By selecting Mobile Phone, I verify that this is my mobile phone number and I consent to receive autodialed and pre-recorded/artificial calls, including text messages, from Cox concerning health and safety messages that, among other things, help confim my authorization to access Cox facilities.  Message and data rates apply.",
											"es": "Nota: Al seleccionar Teléfono móvil, verifico que este es mi número de teléfono móvil y doy mi consentimiento para recibir llamadas automáticas y pregrabadas / artificiales, incluidos mensajes de texto, de Cox con respecto a mensajes de salud y seguridad que, entre otras cosas, ayudan a confirmar mi autorización para acceder a las instalaciones de Cox. Se aplican tarifas de mensajes y datos."
										},
										"inputType": "text",
										"isRequired": "true",
										"visibleIf": "{how_to_contact_radiogroup} = 'mobilePhone'",
								},{
										"type": "text",
										"name": "email_textbox",
										"title": {
											"default": "Email",
											"es": "Correo electrónico"
										},
										"description": "Note: An email confirmation will be sent ot this email upon completion of this form.",
										"inputType": "email",
										"isRequired": "true",
										"visibleIf": "{how_to_contact_radiogroup} = 'email'",
								},{
										"type": "dropdown",
										"name": "state_dropdown",
										"title": "State",
										"choices": [
												{
														"value": "AZ",
														"text": "Arizona"
												},
												{
														"value": "CA",
														"text": "California"
												},
												{
														"value": "NV",
														"text": "Nevada"
												}
										],
										"isRequired": "true",
										"visibleIf": "{how_to_contact_radiogroup} notempty"
								}, {
										"type": "dropdown",
										"name": "location_dropdown",
										"title": "{state_dropdown} Location",
										"choices": [
												{
														"value": "place",
														"text": "aPlace"
												}
										],
										"isRequired": "true",
										"visibleIf": "{state_dropdown} notempty"
								}, {
										"type": "text",
										"name": "date_of_visit_date",
										"title": "Date of visit",
										"inputType": "date",
										"isRequired": "true",
										"placeHolder": "Please input date in format of M/d/yyyy",
										"visibleIf": "{location_dropdown} notempty"
								}, {
										"type": "dropdown",
										"name": "time_of_visit_dropdown",
										"title": "Time of visit",
										"choices": dateOptions,
										"isRequired": "true",
										"visibleIf": "{location_dropdown} notempty"
								}, {
										"type": "text",
										"name": "cox_poc_first_name_text",
										"title": "Cox Point of Contact First Name",
										"isRequired": "true",
										"visibleIf": "{location_dropdown} notempty"
								}, {
										"type": "text",
										"name": "cox_poc_last_name_text",
										"title": "Cox Point of Contact Last Name",
										"isRequired": "true",
										"visibleIf": "{location_dropdown} notempty"
								}, {
										"type": "comment",
										"name": "reason_for_visit_comment",
										"title": "Reason for visit",
										"isRequired": "true",
										"visibleIf": "{location_dropdown} notempty"
								}, {
										"type": "radiogroup",
										"name": "tested_positive_radiogroup",
										"title": "Have you tested positive for COVID-19?",
										"choices": [
												{
														"value": "yes",
														"text": "Yes"
												}, {
														"value": "no",
														"text": "No"
												}
										],
										"isRequired": "true",
										"visibleIf": "{location_dropdown} notempty"
								}, {
										"type": "radiogroup",
										"name": "symptoms_radiogroup",
										"title": "Are you currently experiencing a loss of taste or smell, fever, body aches, sore throat, cough, shortness of breath, or other flu-like symptoms?",
										"choices": [
												{
														"value": "yes",
														"text": "Yes"
												}, {
														"value": "no",
														"text": "No"
												}
										],
										"isRequired": "true",
										"visibleIf": "{location_dropdown} notempty"
								}, {
										"type": "radiogroup",
										"name": "temperature_radiogroup",
										"title": "Have you taken your temperature today?",
										"choices": [
												{
														"value": "yes",
														"text": "Yes"
												}, {
														"value": "no",
														"text": "No"
												}
										],
										"isRequired": "true",
										"visibleIf": "{location_dropdown} notempty"
								}, {
										"type": "radiogroup",
										"name": "fever_radiogroup",
										"title": "Do you have a fever of 100.4 (38 Celsius) degrees Fahrenheit or higher?",
										"choices": [
												{
														"value": "yes",
														"text": "Yes"
												}, {
														"value": "no",
														"text": "No"
												}
										],
										"isRequired": "true",
										"visibleIf": "{location_dropdown} notempty"
								}, {
										"type": "radiogroup",
										"name": "been_in_contact_radiogroup",
										"title": "Have you been in direct contact with anyone who is suspected or presumptive positive or confirmed to have COVID-19?",
										"choices": [
												{
														"value": "yes",
														"text": "Yes"
												}, {
														"value": "no",
														"text": "No"
												}
										],
										"isRequired": "true",
										"visibleIf": "{location_dropdown} notempty"
								}, {
										"type": "radiogroup",
										"name": "traveled_radiogroup",
										"title": "Have you traveled outside the US in the last 30 days to any international location or US city or county that is currently listed in a CDC travel advisory?",
										"description": "To view information from the CDC on travelers' health, visit [https://wwwnc.cdc.gov/travel](https://wwwnc.cdc.gov/travel/).",
										"choices": [
												{
														"value": "yes",
														"text": "Yes"
												}, {
														"value": "no",
														"text": "No"
												}
										],
										"isRequired": "true",
										"visibleIf": "{location_dropdown} notempty"
								}
						],
						"startWithNewLine": false
				}
		]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

//Create showdown mardown converter
var converter = new showdown.Converter();
survey.onTextMarkdown.add(function(survey, options){
    //convert the mardown text to html
    var str = converter.makeHtml(options.text);
    //remove root paragraphs <p></p>
    str = str.substring(3);
    str = str.substring(0, str.length - 4);
    //set html
    options.html = str;
});

// survey.locale = navigator.language || navigator.language[0];
survey.locale = "es";
console.log(survey.locale);

// $("#surveyElement").Survey({model: survey});
survey.render("surveyElement");
