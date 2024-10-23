
  console.log("External script is loaded and running.");

  // List of placeholders that should be hidden (by default, empty)
  const hiddenPlaceholders = ['nupciasLocadorPF1', 'conyugeLocadorPF1'];

  // To store the previous selected value for radio button groups
  let previousRadioSelections = {};

  // Function to format placeholders automatically into the required HTML structure for clauses
  function formatPlaceholdersForClauses(placeholderString) {
    const placeholderRegex = /{{(.*?)}}/g;
    const formattedString = placeholderString.replace(placeholderRegex, (match, p1) => {
      if (hiddenPlaceholders.includes(p1)) {
        return `<span class="preview-placeholder hidden" data-placeholder="${p1}"></span>`;
      } else {
        return `<span class="preview-placeholder nestedclause" data-placeholder="${p1}">_________</span>`;
      }
    });
    return formattedString;
  }

  // Function to update placeholders
  function updateSpecificPlaceholder(placeholderKey) {
    console.log(`Updating placeholder: ${placeholderKey}`);

    const correspondingInputs = document.getElementsByName(placeholderKey);

    if (!correspondingInputs || correspondingInputs.length === 0) {
      console.warn(`No input found for placeholder: ${placeholderKey}`);
      return;
    }

    let inputValue = '';
    if (correspondingInputs[0].type === 'radio' || correspondingInputs[0].type === 'checkbox') {
      correspondingInputs.forEach(input => {
        if (input.checked) {
          inputValue = input.value;
        }
      });

      // Clear the previous selection for radio buttons
      if (previousRadioSelections[placeholderKey] && previousRadioSelections[placeholderKey] !== inputValue) {
        clearPlaceholdersForPreviousSelection(previousRadioSelections[placeholderKey]);
      }
      
      // Update the previous selection
      previousRadioSelections[placeholderKey] = inputValue;

    } else {
      inputValue = correspondingInputs[0].value || `{{${placeholderKey}}}`;
    }

    console.log(`Input value for ${placeholderKey}: ${inputValue}`);

    let clauseText = '';

    switch (placeholderKey) {
      case 'PersonasLocador':
        switch (inputValue) {
          case '1PLocador':
            clauseText = formatPlaceholdersForClauses('{{locadorPF1}}{{locadorApoderadoPF1}}{{locadorPJ1}}');
            break;
          case '2PLocador':
            clauseText = formatPlaceholdersForClauses('{{locadorPF1}}{{locadorApoderadoPF1}}{{locadorPJ1}}, y {{locadorPF2}}{{locadorApoderadoPF2}}{{locadorPJ2}}');
            break;
          case '3PLocador':
            clauseText = formatPlaceholdersForClauses('{{locadorPF1}}{{locadorApoderadoPF1}}{{locadorPJ1}}, {{locadorPF2}}{{locadorApoderadoPF2}}{{locadorPJ2}}, y {{locadorPF3}}{{locadorApoderadoPF3}}{{locadorPJ3}}');
            break;
          case '4PLocador':
            clauseText = formatPlaceholdersForClauses('{{locadorPF1}}{{locadorApoderadoPF1}}{{locadorPJ1}}, {{locadorPF2}}{{locadorApoderadoPF2}}{{locadorPJ2}}, {{locadorPF3}}{{locadorApoderadoPF3}}{{locadorPJ3}}, y {{locadorPF4}}{{locadorApoderadoPF4}}{{locadorPJ4}}');
            break;
          case '5PLocador':
            clauseText = formatPlaceholdersForClauses('{{locadorPF1}}{{locadorApoderadoPF1}}{{locadorPJ1}}, {{locadorPF2}}{{locadorApoderadoPF2}}{{locadorPJ2}}, {{locadorPF3}}{{locadorApoderadoPF3}}{{locadorPJ3}}, {{locadorPF4}}{{locadorApoderadoPF4}}{{locadorPJ4}}, y {{locadorPF5}}{{locadorApoderadoPF5}}{{locadorPJ5}}');
            break;
          default:
            clauseText = 'Número de locadores no especificado.';
        }
        break;

      case 'PersonasLocatario':
        switch (inputValue) {
          case '1PLocatario':
            clauseText = formatPlaceholdersForClauses('{{locatarioPF1}}{{locatarioApoderadoPF1}}{{locatarioPJ1}}');
            break;
          case '2PLocatario':
            clauseText = formatPlaceholdersForClauses('{{locatarioPF1}}{{locatarioApoderadoPF1}}{{locatarioPJ1}}, y {{locatarioPF2}}{{locatarioApoderadoPF2}}{{locatarioPJ2}}');
            break;
          case '3PLocatario':
            clauseText = formatPlaceholdersForClauses('{{locatarioPF1}}{{locatarioApoderadoPF1}}{{locatarioPJ1}}, {{locatarioPF2}}{{locatarioApoderadoPF2}}{{locatarioPJ2}}, y {{locatarioPF3}}{{locatarioApoderadoPF3}}{{locatarioPJ3}}');
            break;
          case '4PLocatario':
            clauseText = formatPlaceholdersForClauses('{{locatarioPF1}}{{locatarioApoderadoPF1}}{{locatarioPJ1}}, {{locatarioPF2}}{{locatarioApoderadoPF2}}{{locatarioPJ2}}, {{locatarioPF3}}{{locatarioApoderadoPF3}}{{locatarioPJ3}}, y {{locatarioPF4}}{{locatarioApoderadoPF4}}{{locatarioPJ4}}');
            break;
          case '5PLocatario':
            clauseText = formatPlaceholdersForClauses('{{locatarioPF1}}{{locatarioApoderadoPF1}}{{locatarioPJ1}}, {{locatarioPF2}}{{locatarioApoderadoPF2}}{{locatarioPJ2}}, {{locatarioPF3}}{{locatarioApoderadoPF3}}{{locatarioPJ3}}, {{locatarioPF4}}{{locatarioApoderadoPF4}}{{locatarioPJ4}}, y {{locatarioPF5}}{{locatarioApoderadoPF5}}{{locatarioPJ5}}');
            break;
          default:
            clauseText = 'Número de locadores no especificado.';
        }
        break;

      case 'PersonasGarante':
        switch (inputValue) {
          case '1PGarante':
            clauseText = formatPlaceholdersForClauses('{{garantePF1}}{{garanteApoderadoPF1}}{{garantePJ1}}');
            break;
          case '2PGarante':
            clauseText = formatPlaceholdersForClauses('{{garantePF1}}{{garanteApoderadoPF1}}{{garantePJ1}}, y {{garantePF2}}{{garanteApoderadoPF2}}{{garantePJ2}}');
            break;
          case '3PGarante':
            clauseText = formatPlaceholdersForClauses('{{garantePF1}}{{garanteApoderadoPF1}}{{garantePJ1}}, {{garantePF2}}{{garanteApoderadoPF2}}{{garantePJ2}}, y {{garantePF3}}{{garanteApoderadoPF3}}{{garantePJ3}}');
            break;
          default:
            clauseText = 'Número de locadores no especificado.';
        }
        break;

      case 'locadorPersona1':
        switch (inputValue) {
          case 'locadorPF1':
            clauseText = formatPlaceholdersForClauses(
              'Entre {{nombreLocadorPF1}}, DNI Nº {{dniLocadorPF1}}, CUIT/CUIL {{cuitLocadorPF1}}, ' +
              '{{nacionalidadLocadorPF1}}, {{estadocivilLocadorPF1}} {{nupciasLocadorPF1}} ' +
              '{{conyugeLocadorPF1}} con domicilio en {{domicilioLocadorPF1}}, ciudad de ' +
              '{{ciudadLocadorPF1}}, provincia de {{provinciaLocadorPF1}}, teléfono Nº {{telefonoLocadorPF1}} ' +
              'y correo electrónico {{emailLocadorPF1}}'
            );
            break;
          case 'locadorPJ1':
            clauseText = formatPlaceholdersForClauses(
              'Entre {{denominacionLegalLocadorPJ1}}, CUIT/CUIL {{cuitLocadorPJ1}}, con domicilio en {{domicilioLocadorPJ1}}, ciudad de {{ciudadLocadorPJ1}}, provincia de {{provinciaLocadorPJ1}}, teléfono Nº {{telefonoLocadorPJ1}} y correo electrónico {{emailLocadorPJ1}}, representado en este acto por su {{locadorRepresentantePJ1}}, {{nombreRepresentanteLocadorPJ1}}, DNI Nº {{dniRepresentanteLocadorPJ1}}, con domicilio en {{domicilioRepresentanteLocadorPJ1}}, ciudad de {{ciudadRepresentanteLocadorPJ1}}, {{provinciaRepresentanteLocadorPJ1}}{{escrituraAdjuntaLocadorApoderadoPJ1}}'
            );
            break;
          default:
            clauseText = '';
        }
        break;

      case 'locadorRepresentacionPF1':
        switch (inputValue) {
         case 'locadorApoderadoPF1':
            clauseText = formatPlaceholdersForClauses(
             ', representado en este acto por {{nombreLocadorApoderadoFisica1}}, DNI Nº {{dniLocadorApoderadoPF1}}, con domicilio en {{domicilioLocadorApoderadoPF1}}, ciudad de {{ciudadLocadorApoderadoPF1}}, provincia de {{provinciaLocadorApoderadoPF1}}, teléfono Nº {{telefonoLocadorApoderadoPF1}} y correo electrónico {{emailLocadorApoderadoPF1}}, en su carácter de apoderado, mediante Escritura Pública número {{escrituraLocadorApoderadoPF1}}{{escrituraAdjuntaLocadorApoderadoPF1}}'
            );
            break;
         default:
            clauseText = '';
        }
        break;

      case 'locadorPersona2':
        switch (inputValue) {
         case 'locadorPF2':
            clauseText = formatPlaceholdersForClauses(
             'Entre {{nombreLocadorPF2}}, DNI Nº {{dniLocadorPF2}}, CUIT/CUIL {{cuitLocadorPF2}}, ' +
             '{{nacionalidadLocadorPF2}}, {{estadocivilLocadorPF2}} {{nupciasLocadorPF2}} ' +
             '{{conyugeLocadorPF2}} con domicilio en {{domicilioLocadorPF2}}, ciudad de ' +
             '{{ciudadLocadorPF2}}, provincia de {{provinciaLocadorPF2}}, teléfono Nº {{telefonoLocadorPF2}} ' +
             'y correo electrónico {{emailLocadorPF2}}'
             );
             break;
         case 'locadorPJ2':
            clauseText = formatPlaceholdersForClauses(
             'Entre {{denominacionLegalLocadorPJ2}}, CUIT/CUIL {{cuitLocadorPJ2}}, con domicilio en {{domicilioLocadorPJ2}}, ciudad de {{ciudadLocadorPJ2}}, provincia de {{provinciaLocadorPJ2}}, teléfono Nº {{telefonoLocadorPJ2}} y correo electrónico {{emailLocadorPJ2}}, representado en este acto por su {{locadorRepresentantePJ2}}, {{nombreRepresentanteLocadorPJ2}}, DNI Nº {{dniRepresentanteLocadorPJ2}}, con domicilio en {{domicilioRepresentanteLocadorPJ2}}, ciudad de {{ciudadRepresentanteLocadorPJ2}}, {{provinciaRepresentanteLocadorPJ2}}{{escrituraAdjuntaLocadorApoderadoPJ2}}'
             );
             break;
            default:
             clauseText = '';
        }
        break;

      case 'locadorRepresentacionPF2':
        switch (inputValue) {
          case 'locadorApoderadoPF2':
            clauseText = formatPlaceholdersForClauses(
              ', representado en este acto por {{nombreLocadorApoderadoFisica2}}, DNI Nº {{dniLocadorApoderadoPF2}}, con domicilio en {{domicilioLocadorApoderadoPF2}}, ciudad de {{ciudadLocadorApoderadoPF2}}, provincia de {{provinciaLocadorApoderadoPF2}}, teléfono Nº {{telefonoLocadorApoderadoPF2}} y correo electrónico {{emailLocadorApoderadoPF2}}, en su carácter de apoderado, mediante Escritura Pública número {{escrituraLocadorApoderadoPF2}}{{escrituraAdjuntaLocadorApoderadoPF2}}'
              );
              break;
              default:
              clauseText = '';
          }
          break;

      case 'locadorPersona3':
        switch (inputValue) {
          case 'locadorPF3':
            clauseText = formatPlaceholdersForClauses(
              'Entre {{nombreLocadorPF3}}, DNI Nº {{dniLocadorPF3}}, CUIT/CUIL {{cuitLocadorPF3}}, ' +
              '{{nacionalidadLocadorPF3}}, {{estadocivilLocadorPF3}} {{nupciasLocadorPF3}} ' +
              '{{conyugeLocadorPF3}} con domicilio en {{domicilioLocadorPF3}}, ciudad de ' +
              '{{ciudadLocadorPF3}}, provincia de {{provinciaLocadorPF3}}, teléfono Nº {{telefonoLocadorPF3}} ' +
              'y correo electrónico {{emailLocadorPF3}}'
            );
          break;
          case 'locadorPJ3':
            clauseText = formatPlaceholdersForClauses(
              'Entre {{denominacionLegalLocadorPJ3}}, CUIT/CUIL {{cuitLocadorPJ3}}, con domicilio en {{domicilioLocadorPJ3}}, ciudad de {{ciudadLocadorPJ3}}, provincia de {{provinciaLocadorPJ3}}, teléfono Nº {{telefonoLocadorPJ3}} y correo electrónico {{emailLocadorPJ3}}, representado en este acto por su {{locadorRepresentantePJ3}}, {{nombreRepresentanteLocadorPJ3}}, DNI Nº {{dniRepresentanteLocadorPJ3}}, con domicilio en {{domicilioRepresentanteLocadorPJ3}}, ciudad de {{ciudadRepresentanteLocadorPJ3}}, {{provinciaRepresentanteLocadorPJ3}}{{escrituraAdjuntaLocadorApoderadoPJ3}}'
            );
            break;
          default:
            clauseText = '';
          }
          break;
                
      case 'locadorRepresentacionPF3':
        switch (inputValue) {
          case 'locadorApoderadoPF3':
            clauseText = formatPlaceholdersForClauses(
              ', representado en este acto por {{nombreLocadorApoderadoFisica3}}, DNI Nº {{dniLocadorApoderadoPF3}}, con domicilio en {{domicilioLocadorApoderadoPF3}}, ciudad de {{ciudadLocadorApoderadoPF3}}, provincia de {{provinciaLocadorApoderadoPF3}}, teléfono Nº {{telefonoLocadorApoderadoPF3}} y correo electrónico {{emailLocadorApoderadoPF3}}, en su carácter de apoderado, mediante Escritura Pública número {{escrituraLocadorApoderadoPF3}}{{escrituraAdjuntaLocadorApoderadoPF3}}'
            );
          break;
          default:
            clauseText = '';
          }
          break;   
                    
      case 'locadorPersona4':
        switch (inputValue) {
          case 'locadorPF4':
            clauseText = formatPlaceholdersForClauses(
              'Entre {{nombreLocadorPF4}}, DNI Nº {{dniLocadorPF4}}, CUIT/CUIL {{cuitLocadorPF4}}, ' +
              '{{nacionalidadLocadorPF4}}, {{estadocivilLocadorPF4}} {{nupciasLocadorPF4}} ' +
              '{{conyugeLocadorPF4}} con domicilio en {{domicilioLocadorPF4}}, ciudad de ' +
              '{{ciudadLocadorPF4}}, provincia de {{provinciaLocadorPF4}}, teléfono Nº {{telefonoLocadorPF4}} ' +
              'y correo electrónico {{emailLocadorPF4}}'
            );
          break;
          case 'locadorPJ4':
            clauseText = formatPlaceholdersForClauses(
              'Entre {{denominacionLegalLocadorPJ4}}, CUIT/CUIL {{cuitLocadorPJ4}}, con domicilio en {{domicilioLocadorPJ4}}, ciudad de {{ciudadLocadorPJ4}}, provincia de {{provinciaLocadorPJ4}}, teléfono Nº {{telefonoLocadorPJ4}} y correo electrónico {{emailLocadorPJ4}}, representado en este acto por su {{locadorRepresentantePJ4}}, {{nombreRepresentanteLocadorPJ4}}, DNI Nº {{dniRepresentanteLocadorPJ4}}, con domicilio en {{domicilioRepresentanteLocadorPJ4}}, ciudad de {{ciudadRepresentanteLocadorPJ4}}, {{provinciaRepresentanteLocadorPJ4}}{{escrituraAdjuntaLocadorApoderadoPJ4}}'
            );
            break;
          default:
            clauseText = '';
        }
        break;
                        
      case 'locadorRepresentacionPF4':
        switch (inputValue) {
          case 'locadorApoderadoPF4':
            clauseText = formatPlaceholdersForClauses(
              ', representado en este acto por {{nombreLocadorApoderadoFisica4}}, DNI Nº {{dniLocadorApoderadoPF4}}, con domicilio en {{domicilioLocadorApoderadoPF4}}, ciudad de {{ciudadLocadorApoderadoPF4}}, provincia de {{provinciaLocadorApoderadoPF4}}, teléfono Nº {{telefonoLocadorApoderadoPF4}} y correo electrónico {{emailLocadorApoderadoPF4}}, en su carácter de apoderado, mediante Escritura Pública número {{escrituraLocadorApoderadoPF4}}{{escrituraAdjuntaLocadorApoderadoPF4}}'
            );
          break;
        default:
          clauseText = '';
        }
        break;

      case 'locadorPersona5':
        switch (inputValue) {
          case 'locadorPF5':
            clauseText = formatPlaceholdersForClauses(
              'Entre {{nombreLocadorPF5}}, DNI Nº {{dniLocadorPF5}}, CUIT/CUIL {{cuitLocadorPF5}}, ' +
              '{{nacionalidadLocadorPF5}}, {{estadocivilLocadorPF5}} {{nupciasLocadorPF5}} ' +
              '{{conyugeLocadorPF5}} con domicilio en {{domicilioLocadorPF5}}, ciudad de ' +
              '{{ciudadLocadorPF5}}, provincia de {{provinciaLocadorPF5}}, teléfono Nº {{telefonoLocadorPF5}} ' +
              'y correo electrónico {{emailLocadorPF5}}'
            );
          break;
          case 'locadorPJ5':
            clauseText = formatPlaceholdersForClauses(
              'Entre {{denominacionLegalLocadorPJ5}}, CUIT/CUIL {{cuitLocadorPJ5}}, con domicilio en {{domicilioLocadorPJ5}}, ciudad de {{ciudadLocadorPJ5}}, provincia de {{provinciaLocadorPJ5}}, teléfono Nº {{telefonoLocadorPJ5}} y correo electrónico {{emailLocadorPJ5}}, representado en este acto por su {{locadorRepresentantePJ5}}, {{nombreRepresentanteLocadorPJ5}}, DNI Nº {{dniRepresentanteLocadorPJ5}}, con domicilio en {{domicilioRepresentanteLocadorPJ5}}, ciudad de {{ciudadRepresentanteLocadorPJ5}}, {{provinciaRepresentanteLocadorPJ5}}{{escrituraAdjuntaLocadorApoderadoPJ5}}'
            );
          break;
        default:
          clauseText = '';
        }
        break;
                                
      case 'locadorRepresentacionPF5':
        switch (inputValue) {
          case 'locadorApoderadoPF5':
            clauseText = formatPlaceholdersForClauses(
              ', representado en este acto por {{nombreLocadorApoderadoFisica5}}, DNI Nº {{dniLocadorApoderadoPF5}}, con domicilio en {{domicilioLocadorApoderadoPF5}}, ciudad de {{ciudadLocadorApoderadoPF5}}, provincia de {{provinciaLocadorApoderadoPF5}}, teléfono Nº {{telefonoLocadorApoderadoPF5}} y correo electrónico {{emailLocadorApoderadoPF5}}, en su carácter de apoderado, mediante Escritura Pública número {{escrituraLocadorApoderadoPF5}}{{escrituraAdjuntaLocadorApoderadoPF5}}'
            );
          break;
        default:
          clauseText = '';
        }
        break;

      case 'locatarioPersona1':
        switch (inputValue) {
          case 'locatarioPF1':
            clauseText = formatPlaceholdersForClauses(
              'Entre {{nombreLocatarioPF1}}, DNI Nº {{dniLocatarioPF1}}, CUIT/CUIL {{cuitLocatarioPF1}}, ' +
              '{{nacionalidadLocatarioPF1}}, {{estadocivilLocatarioPF1}} {{nupciasLocatarioPF1}} ' +
              '{{conyugeLocatarioPF1}} con domicilio en {{domicilioLocatarioPF1}}, ciudad de ' +
              '{{ciudadLocatarioPF1}}, provincia de {{provinciaLocatarioPF1}}, teléfono Nº {{telefonoLocatarioPF1}} ' +
              'y correo electrónico {{emailLocatarioPF1}}'
            );
          break;
          case 'locatarioPJ1':
            clauseText = formatPlaceholdersForClauses(
              'Entre {{denominacionLegalLocatarioPJ1}}, CUIT/CUIL {{cuitLocatarioPJ1}}, con domicilio en {{domicilioLocatarioPJ1}}, ciudad de {{ciudadLocatarioPJ1}}, provincia de {{provinciaLocatarioPJ1}}, teléfono Nº {{telefonoLocatarioPJ1}} y correo electrónico {{emailLocatarioPJ1}}, representado en este acto por su {{LocatarioRepresentantePJ1}}, {{nombreRepresentanteLocatarioPJ1}}, DNI Nº {{dniRepresentanteLocatarioPJ1}}, con domicilio en {{domicilioRepresentanteLocatarioPJ1}}, ciudad de {{ciudadRepresentanteLocatarioPJ1}}, {{provinciaRepresentanteLocatarioPJ1}}{{escrituraAdjuntaLocatarioApoderadoPJ1}}'
            );
          break;
        default:
          clauseText = '';
        }
        break;
                                        
      case 'locatarioRepresentacionPF1':
        switch (inputValue) {
          case 'locatarioApoderadoPF1':
            clauseText = formatPlaceholdersForClauses(
              ', representado en este acto por {{nombreLocatarioApoderadoFisica1}}, DNI Nº {{dniLocatarioApoderadoPF1}}, con domicilio en {{domicilioLocatarioApoderadoPF1}}, ciudad de {{ciudadLocatarioApoderadoPF1}}, provincia de {{provinciaLocatarioApoderadoPF1}}, teléfono Nº {{telefonoLocatarioApoderadoPF1}} y correo electrónico {{emailLocatarioApoderadoPF1}}, en su carácter de apoderado, mediante Escritura Pública número {{escrituraLocatarioApoderadoPF1}}{{escrituraAdjuntaLocatarioApoderadoPF1}}'
            );
          break;
        default:
          clauseText = '';
        }
        break;

      case 'locatarioPersona2':
        switch (inputValue) {
          case 'locatarioPF2':
            clauseText = formatPlaceholdersForClauses(
              'Entre {{nombreLocatarioPF2}}, DNI Nº {{dniLocatarioPF2}}, CUIT/CUIL {{cuitLocatarioPF2}}, ' +
              '{{nacionalidadLocatarioPF2}}, {{estadocivilLocatarioPF2}} {{nupciasLocatarioPF2}} ' +
              '{{conyugeLocatarioPF2}} con domicilio en {{domicilioLocatarioPF2}}, ciudad de ' +
              '{{ciudadLocatarioPF2}}, provincia de {{provinciaLocatarioPF2}}, teléfono Nº {{telefonoLocatarioPF2}} ' +
              'y correo electrónico {{emailLocatarioPF2}}'
            );
            break;
          case 'locatarioPJ2':
            clauseText = formatPlaceholdersForClauses(
              'Entre {{denominacionLegalLocatarioPJ2}}, CUIT/CUIL {{cuitLocatarioPJ2}}, con domicilio en {{domicilioLocatarioPJ2}}, ciudad de {{ciudadLocatarioPJ2}}, provincia de {{provinciaLocatarioPJ2}}, teléfono Nº {{telefonoLocatarioPJ2}} y correo electrónico {{emailLocatarioPJ2}}, representado en este acto por su {{LocatarioRepresentantePJ2}}, {{nombreRepresentanteLocatarioPJ2}}, DNI Nº {{dniRepresentanteLocatarioPJ2}}, con domicilio en {{domicilioRepresentanteLocatarioPJ2}}, ciudad de {{ciudadRepresentanteLocatarioPJ2}}, {{provinciaRepresentanteLocatarioPJ2}}{{escrituraAdjuntaLocatarioApoderadoPJ2}}'
            );
          break;
          default:
            clauseText = '';
        }
        break;
                                                
      case 'locatarioRepresentacionPF2':
        switch (inputValue) {
          case 'locatarioApoderadoPF2':
            clauseText = formatPlaceholdersForClauses(
              ', representado en este acto por {{nombreLocatarioApoderadoFisica2}}, DNI Nº {{dniLocatarioApoderadoPF2}}, con domicilio en {{domicilioLocatarioApoderadoPF2}}, ciudad de {{ciudadLocatarioApoderadoPF2}}, provincia de {{provinciaLocatarioApoderadoPF2}}, teléfono Nº {{telefonoLocatarioApoderadoPF2}} y correo electrónico {{emailLocatarioApoderadoPF2}}, en su carácter de apoderado, mediante Escritura Pública número {{escrituraLocatarioApoderadoPF2}}{{escrituraAdjuntaLocatarioApoderadoPF2}}'
            );
          break;
        default:
          clauseText = '';
        }
        break;

      case 'locatarioPersona3':
        switch (inputValue) {
          case 'locatarioPF3':
            clauseText = formatPlaceholdersForClauses(
              'Entre {{nombreLocatarioPF3}}, DNI Nº {{dniLocatarioPF3}}, CUIT/CUIL {{cuitLocatarioPF3}}, ' +
              '{{nacionalidadLocatarioPF3}}, {{estadocivilLocatarioPF3}} {{nupciasLocatarioPF3}} ' +
              '{{conyugeLocatarioPF3}} con domicilio en {{domicilioLocatarioPF3}}, ciudad de ' +
              '{{ciudadLocatarioPF3}}, provincia de {{provinciaLocatarioPF3}}, teléfono Nº {{telefonoLocatarioPF3}} ' +
              'y correo electrónico {{emailLocatarioPF3}}'
            );
          break;
          case 'locatarioPJ3':
            clauseText = formatPlaceholdersForClauses(
              'Entre {{denominacionLegalLocatarioPJ3}}, CUIT/CUIL {{cuitLocatarioPJ3}}, con domicilio en {{domicilioLocatarioPJ3}}, ciudad de {{ciudadLocatarioPJ3}}, provincia de {{provinciaLocatarioPJ3}}, teléfono Nº {{telefonoLocatarioPJ3}} y correo electrónico {{emailLocatarioPJ3}}, representado en este acto por su {{LocatarioRepresentantePJ3}}, {{nombreRepresentanteLocatarioPJ3}}, DNI Nº {{dniRepresentanteLocatarioPJ3}}, con domicilio en {{domicilioRepresentanteLocatarioPJ3}}, ciudad de {{ciudadRepresentanteLocatarioPJ3}}, {{provinciaRepresentanteLocatarioPJ3}}{{escrituraAdjuntaLocatarioApoderadoPJ3}}'
            );
          break;
          default:
            clauseText = '';
          }
          break;
                                                      
      case 'locatarioRepresentacionPF3':
        switch (inputValue) {
          case 'locatarioApoderadoPF3':
            clauseText = formatPlaceholdersForClauses(
              ', representado en este acto por {{nombreLocatarioApoderadoFisica3}}, DNI Nº {{dniLocatarioApoderadoPF3}}, con domicilio en {{domicilioLocatarioApoderadoPF3}}, ciudad de {{ciudadLocatarioApoderadoPF3}}, provincia de {{provinciaLocatarioApoderadoPF3}}, teléfono Nº {{telefonoLocatarioApoderadoPF3}} y correo electrónico {{emailLocatarioApoderadoPF3}}, en su carácter de apoderado, mediante Escritura Pública número {{escrituraLocatarioApoderadoPF3}}{{escrituraAdjuntaLocatarioApoderadoPF3}}'
            );
          break;
          default:
            clauseText = '';
          }
          break;

      case 'locatarioPersona4':
        switch (inputValue) {
          case 'locatarioPF4':
            clauseText = formatPlaceholdersForClauses(
              'Entre {{nombreLocatarioPF4}}, DNI Nº {{dniLocatarioPF4}}, CUIT/CUIL {{cuitLocatarioPF4}}, ' +
              '{{nacionalidadLocatarioPF4}}, {{estadocivilLocatarioPF4}} {{nupciasLocatarioPF4}} ' +
              '{{conyugeLocatarioPF4}} con domicilio en {{domicilioLocatarioPF4}}, ciudad de ' +
              '{{ciudadLocatarioPF4}}, provincia de {{provinciaLocatarioPF4}}, teléfono Nº {{telefonoLocatarioPF4}} ' +
              'y correo electrónico {{emailLocatarioPF4}}'
            );
          break;
          case 'locatarioPJ4':
            clauseText = formatPlaceholdersForClauses(
              'Entre {{denominacionLegalLocatarioPJ4}}, CUIT/CUIL {{cuitLocatarioPJ4}}, con domicilio en {{domicilioLocatarioPJ4}}, ciudad de {{ciudadLocatarioPJ4}}, provincia de {{provinciaLocatarioPJ4}}, teléfono Nº {{telefonoLocatarioPJ4}} y correo electrónico {{emailLocatarioPJ4}}, representado en este acto por su {{LocatarioRepresentantePJ4}}, {{nombreRepresentanteLocatarioPJ4}}, DNI Nº {{dniRepresentanteLocatarioPJ4}}, con domicilio en {{domicilioRepresentanteLocatarioPJ4}}, ciudad de {{ciudadRepresentanteLocatarioPJ4}}, {{provinciaRepresentanteLocatarioPJ4}}{{escrituraAdjuntaLocatarioApoderadoPJ4}}'
            );
          break;
          default:
            clauseText = '';
        }
          break;
                                                            
      case 'locatarioRepresentacionPF4':
        switch (inputValue) {
          case 'locatarioApoderadoPF4':
            clauseText = formatPlaceholdersForClauses(
              ', representado en este acto por {{nombreLocatarioApoderadoFisica4}}, DNI Nº {{dniLocatarioApoderadoPF4}}, con domicilio en {{domicilioLocatarioApoderadoPF4}}, ciudad de {{ciudadLocatarioApoderadoPF4}}, provincia de {{provinciaLocatarioApoderadoPF4}}, teléfono Nº {{telefonoLocatarioApoderadoPF4}} y correo electrónico {{emailLocatarioApoderadoPF4}}, en su carácter de apoderado, mediante Escritura Pública número {{escrituraLocatarioApoderadoPF4}}{{escrituraAdjuntaLocatarioApoderadoPF4}}'
            );
          break;
          default:
            clauseText = '';
        }
        break;
                
      case 'locatarioPersona5':
        switch (inputValue) {
          case 'locatarioPF5':
            clauseText = formatPlaceholdersForClauses(
              'Entre {{nombreLocatarioPF5}}, DNI Nº {{dniLocatarioPF5}}, CUIT/CUIL {{cuitLocatarioPF5}}, ' +
              '{{nacionalidadLocatarioPF5}}, {{estadocivilLocatarioPF5}} {{nupciasLocatarioPF5}} ' +
              '{{conyugeLocatarioPF5}} con domicilio en {{domicilioLocatarioPF5}}, ciudad de ' +
              '{{ciudadLocatarioPF5}}, provincia de {{provinciaLocatarioPF5}}, teléfono Nº {{telefonoLocatarioPF5}} ' +
              'y correo electrónico {{emailLocatarioPF5}}'
            );
          break;
          case 'locatarioPJ5':
            clauseText = formatPlaceholdersForClauses(
              'Entre {{denominacionLegalLocatarioPJ5}}, CUIT/CUIL {{cuitLocatarioPJ5}}, con domicilio en {{domicilioLocatarioPJ5}}, ciudad de {{ciudadLocatarioPJ5}}, provincia de {{provinciaLocatarioPJ5}}, teléfono Nº {{telefonoLocatarioPJ5}} y correo electrónico {{emailLocatarioPJ5}}, representado en este acto por su {{LocatarioRepresentantePJ5}}, {{nombreRepresentanteLocatarioPJ5}}, DNI Nº {{dniRepresentanteLocatarioPJ5}}, con domicilio en {{domicilioRepresentanteLocatarioPJ5}}, ciudad de {{ciudadRepresentanteLocatarioPJ5}}, {{provinciaRepresentanteLocatarioPJ5}}{{escrituraAdjuntaLocatarioApoderadoPJ5}}'
            );
          break;
          default:
            clauseText = '';
        }
        break;
                                                                  
      case 'locatarioRepresentacionPF5':
        switch (inputValue) {
          case 'locatarioApoderadoPF5':
            clauseText = formatPlaceholdersForClauses(
              ', representado en este acto por {{nombreLocatarioApoderadoFisica5}}, DNI Nº {{dniLocatarioApoderadoPF5}}, con domicilio en {{domicilioLocatarioApoderadoPF5}}, ciudad de {{ciudadLocatarioApoderadoPF5}}, provincia de {{provinciaLocatarioApoderadoPF5}}, teléfono Nº {{telefonoLocatarioApoderadoPF5}} y correo electrónico {{emailLocatarioApoderadoPF5}}, en su carácter de apoderado, mediante Escritura Pública número {{escrituraLocatarioApoderadoPF5}}{{escrituraAdjuntaLocatarioApoderadoPF5}}'
            );
          break;
          default:
            clauseText = '';
        }
        break;

      case 'garantePersona1':
        switch (inputValue) {
          case 'garantePF1':
            clauseText = formatPlaceholdersForClauses(
              'Entre {{nombreGarantePF1}}, DNI Nº {{dniGarantePF1}}, CUIT/CUIL {{cuitGarantePF1}}, {{nacionalidadGarantePF1}}, {{estadocivilGarantePF1}} {{nupciasGarantePF1}} {{conyugeGarantePF1}} con domicilio en {{domicilioGarantePF1}}, ciudad de {{ciudadGarantePF1}}, provincia de {{provinciaGarantePF1}}, teléfono Nº {{telefonoGarantePF1}} y correo electrónico {{emailGarantePF1}}'
            );
          break;
          case 'garantePJ1':
            clauseText = formatPlaceholdersForClauses(
              'Entre {{denominacionLegalGarantePJ1}}, CUIT/CUIL {{cuitGarantePJ1}}, con domicilio en {{domicilioGarantePJ1}}, ciudad de {{ciudadGarantePJ1}}, provincia de {{provinciaGarantePJ1}}, teléfono Nº {{telefonoGarantePJ1}} y correo electrónico {{emailGarantePJ1}}, representado en este acto por su {{representanteGarantePJ1}}, {{nombreRepresentanteGarantePJ1}}, DNI Nº {{dniRepresentanteGarantePJ1}}, con domicilio en {{domicilioRepresentanteGarantePJ1}}, ciudad de {{ciudadRepresentanteGarantePJ1}}, provincia de {{provinciaRepresentanteGarantePJ1}}{{escrituraAdjuntaGaranteApoderadoPJ1}}'
            );
          break;
          default:
            clauseText = '';
        }
        break;

      case 'garanteRepresentacionPF1':
        switch (inputValue) {
          case 'garanteApoderadoPF1':
            clauseText = formatPlaceholdersForClauses(
              ', representado en este acto por {{nombreGaranteApoderadoFisica1}}, DNI Nº {{dniGaranteApoderadoPF1}}, con domicilio en {{domicilioGaranteApoderadoPF1}}, ciudad de {{ciudadGaranteApoderadoPF1}}, provincia de {{provinciaGaranteApoderadoPF1}}, teléfono Nº {{telefonoGaranteApoderadoPF1}} y correo electrónico {{emailGaranteApoderadoPF1}}, en su carácter de apoderado, mediante Escritura Pública número {{escrituraGaranteApoderadoPF1}}{{escrituraAdjuntaGaranteApoderadoPF1}}'
            );
          break;
          default:
            clauseText = '';
        }
        break;

      case 'garantePersona2':
        switch (inputValue) {
          case 'garantePF2':
            clauseText = formatPlaceholdersForClauses(
              'Entre {{nombreGarantePF2}}, DNI Nº {{dniGarantePF2}}, CUIT/CUIL {{cuitGarantePF2}}, {{nacionalidadGarantePF2}}, {{estadocivilGarantePF2}} {{nupciasGarantePF2}} {{conyugeGarantePF2}} con domicilio en {{domicilioGarantePF2}}, ciudad de {{ciudadGarantePF2}}, provincia de {{provinciaGarantePF2}}, teléfono Nº {{telefonoGarantePF2}} y correo electrónico {{emailGarantePF2}}'
            );
          break;
          case 'garantePJ2':
            clauseText = formatPlaceholdersForClauses(
              'Entre {{denominacionLegalGarantePJ2}}, CUIT/CUIL {{cuitGarantePJ2}}, con domicilio en {{domicilioGarantePJ2}}, ciudad de {{ciudadGarantePJ2}}, provincia de {{provinciaGarantePJ2}}, teléfono Nº {{telefonoGarantePJ2}} y correo electrónico {{emailGarantePJ2}}, representado en este acto por su {{representanteGarantePJ2}}, {{nombreRepresentanteGarantePJ2}}, DNI Nº {{dniRepresentanteGarantePJ2}}, con domicilio en {{domicilioRepresentanteGarantePJ2}}, ciudad de {{ciudadRepresentanteGarantePJ2}}, provincia de {{provinciaRepresentanteGarantePJ2}}{{escrituraAdjuntaGaranteApoderadoPJ2}}'
            );
          break;
          default:
            clauseText = '';
        }
        break;
  
      case 'garanteRepresentacionPF2':
        switch (inputValue) {
          case 'garanteApoderadoPF2':
            clauseText = formatPlaceholdersForClauses(
              ', representado en este acto por {{nombreGaranteApoderadoFisica2}}, DNI Nº {{dniGaranteApoderadoPF2}}, con domicilio en {{domicilioGaranteApoderadoPF2}}, ciudad de {{ciudadGaranteApoderadoPF2}}, provincia de {{provinciaGaranteApoderadoPF2}}, teléfono Nº {{telefonoGaranteApoderadoPF2}} y correo electrónico {{emailGaranteApoderadoPF2}}, en su carácter de apoderado, mediante Escritura Pública número {{escrituraGaranteApoderadoPF2}}{{escrituraAdjuntaGaranteApoderadoPF2}}'
            );
          break;
          default:
            clauseText = '';
      }
      break;

      case 'garantePersona3':
        switch (inputValue) {
          case 'garantePF3':
            clauseText = formatPlaceholdersForClauses(
              'Entre {{nombreGarantePF3}}, DNI Nº {{dniGarantePF3}}, CUIT/CUIL {{cuitGarantePF3}}, {{nacionalidadGarantePF3}}, {{estadocivilGarantePF3}} {{nupciasGarantePF3}} {{conyugeGarantePF3}} con domicilio en {{domicilioGarantePF3}}, ciudad de {{ciudadGarantePF3}}, provincia de {{provinciaGarantePF3}}, teléfono Nº {{telefonoGarantePF3}} y correo electrónico {{emailGarantePF3}}'
            );
          break;
          case 'garantePJ3':
            clauseText = formatPlaceholdersForClauses(
              'Entre {{denominacionLegalGarantePJ3}}, CUIT/CUIL {{cuitGarantePJ3}}, con domicilio en {{domicilioGarantePJ3}}, ciudad de {{ciudadGarantePJ3}}, provincia de {{provinciaGarantePJ3}}, teléfono Nº {{telefonoGarantePJ3}} y correo electrónico {{emailGarantePJ3}}, representado en este acto por su {{representanteGarantePJ3}}, {{nombreRepresentanteGarantePJ3}}, DNI Nº {{dniRepresentanteGarantePJ3}}, con domicilio en {{domicilioRepresentanteGarantePJ3}}, ciudad de {{ciudadRepresentanteGarantePJ3}}, provincia de {{provinciaRepresentanteGarantePJ3}}{{escrituraAdjuntaGaranteApoderadoPJ3}}'
            );
          break;
          default:
            clauseText = '';
        }
        break;

      case 'garanteRepresentacionPF3':
        switch (inputValue) {
          case 'garanteApoderadoPF3':
            clauseText = formatPlaceholdersForClauses(
              ', representado en este acto por {{nombreGaranteApoderadoFisica3}}, DNI Nº {{dniGaranteApoderadoPF3}}, con domicilio en {{domicilioGaranteApoderadoPF3}}, ciudad de {{ciudadGaranteApoderadoPF3}}, provincia de {{provinciaGaranteApoderadoPF3}}, teléfono Nº {{telefonoGaranteApoderadoPF3}} y correo electrónico {{emailGaranteApoderadoPF3}}, en su carácter de apoderado, mediante Escritura Pública número {{escrituraGaranteApoderadoPF3}}{{escrituraAdjuntaGaranteApoderadoPF3}}'
            );
          break;
          default:
            clauseText = '';
        }
        break;

      case 'escrituraAdjuntaLocadorApoderadoPF1':
        switch (inputValue) {
          case 'true':
            clauseText = formatPlaceholdersForClauses(
              ', adjunta al presente'
            );
          break;
          default:
            clauseText = '';
        }
        break;

      case 'escrituraAdjuntaLocadorApoderadoPJ1':
        switch (inputValue) {
          case 'true':
            clauseText = formatPlaceholdersForClauses(
              ', adjunta al presente'
            );
          break;
          default:
            clauseText = '';
        }
        break;

      case 'escrituraAdjuntaLocadorApoderadoPF2':
        switch (inputValue) {
          case 'true':
            clauseText = formatPlaceholdersForClauses(
              ', adjunta al presente'
            );
          break;
          default:
            clauseText = '';
        }
        break;
  
      case 'escrituraAdjuntaLocadorApoderadoPJ2':
        switch (inputValue) {
          case 'true':
            clauseText = formatPlaceholdersForClauses(
              ', adjunta al presente'
            );
          break;
          default:
            clauseText = '';
        }
        break;

      case 'escrituraAdjuntaLocadorApoderadoPF3':
        switch (inputValue) {
          case 'true':
            clauseText = formatPlaceholdersForClauses(
              ', adjunta al presente'
            );
          break;
          default:
            clauseText = '';
        }
        break;
  
      case 'escrituraAdjuntaLocadorApoderadoPJ3':
        switch (inputValue) {
          case 'true':
            clauseText = formatPlaceholdersForClauses(
              ', adjunta al presente'
            );
          break;
          default:
            clauseText = '';
        }
        break;

      case 'escrituraAdjuntaLocadorApoderadoPF4':
        switch (inputValue) {
          case 'true':
            clauseText = formatPlaceholdersForClauses(
              ', adjunta al presente'
            );
          break;
          default:
            clauseText = '';
        }
        break;
  
      case 'escrituraAdjuntaLocadorApoderadoPJ4':
        switch (inputValue) {
          case 'true':
            clauseText = formatPlaceholdersForClauses(
              ', adjunta al presente'
            );
          break;
          default:
            clauseText = '';
        }
        break;

      case 'escrituraAdjuntaLocadorApoderadoPF5':
        switch (inputValue) {
          case 'true':
            clauseText = formatPlaceholdersForClauses(
              ', adjunta al presente'
            );
          break;
          default:
            clauseText = '';
        }
        break;
  
      case 'escrituraAdjuntaLocadorApoderadoPJ5':
        switch (inputValue) {
          case 'true':
            clauseText = formatPlaceholdersForClauses(
              ', adjunta al presente'
            );
          break;
          default:
            clauseText = '';
        }
        break;

      case 'escrituraAdjuntaLocatarioApoderadoPF1':
        switch (inputValue) {
          case 'true':
            clauseText = formatPlaceholdersForClauses(
              ', adjunta al presente'
            );
          break;
          default:
            clauseText = '';
        }
        break;
  
      case 'escrituraAdjuntaLocatarioApoderadoPJ1':
        switch (inputValue) {
          case 'true':
            clauseText = formatPlaceholdersForClauses(
              ', adjunta al presente'
            );
          break;
          default:
            clauseText = '';
        }
        break;

      case 'escrituraAdjuntaLocatarioApoderadoPF2':
        switch (inputValue) {
          case 'true':
            clauseText = formatPlaceholdersForClauses(
              ', adjunta al presente'
            );
          break;
          default:
            clauseText = '';
        }
        break;
    
      case 'escrituraAdjuntaLocatarioApoderadoPJ2':
        switch (inputValue) {
          case 'true':
            clauseText = formatPlaceholdersForClauses(
              ', adjunta al presente'
            );
          break;
          default:
            clauseText = '';
        }
        break;

      case 'escrituraAdjuntaLocatarioApoderadoPF3':
        switch (inputValue) {
          case 'true':
            clauseText = formatPlaceholdersForClauses(
              ', adjunta al presente'
            );
          break;
          default:
            clauseText = '';
        }
        break;
    
      case 'escrituraAdjuntaLocatarioApoderadoPJ3':
        switch (inputValue) {
          case 'true':
            clauseText = formatPlaceholdersForClauses(
              ', adjunta al presente'
            );
          break;
          default:
            clauseText = '';
        }
        break;

      case 'escrituraAdjuntaLocatarioApoderadoPF4':
        switch (inputValue) {
          case 'true':
            clauseText = formatPlaceholdersForClauses(
              ', adjunta al presente'
            );
          break;
          default:
            clauseText = '';
        }
        break;
    
      case 'escrituraAdjuntaLocatarioApoderadoPJ4':
        switch (inputValue) {
          case 'true':
            clauseText = formatPlaceholdersForClauses(
              ', adjunta al presente'
            );
          break;
          default:
            clauseText = '';
        }
        break;

      case 'escrituraAdjuntaLocatarioApoderadoPF5':
        switch (inputValue) {
          case 'true':
            clauseText = formatPlaceholdersForClauses(
              ', adjunta al presente'
            );
          break;
          default:
            clauseText = '';
        }
        break;
    
      case 'escrituraAdjuntaLocatarioApoderadoPJ5':
        switch (inputValue) {
          case 'true':
            clauseText = formatPlaceholdersForClauses(
              ', adjunta al presente'
            );
          break;
          default:
            clauseText = '';
        }
        break;

      case 'escrituraAdjuntaGaranteApoderadoPF1':
        switch (inputValue) {
          case 'true':
            clauseText = formatPlaceholdersForClauses(
              ', adjunta al presente'
            );
          break;
          default:
            clauseText = '';
        }
        break;
    
      case 'escrituraAdjuntaGaranteApoderadoPJ1':
        switch (inputValue) {
          case 'true':
            clauseText = formatPlaceholdersForClauses(
              ', adjunta al presente'
            );
          break;
          default:
            clauseText = '';
        }
        break;

      case 'escrituraAdjuntaGaranteApoderadoPF2':
        switch (inputValue) {
          case 'true':
            clauseText = formatPlaceholdersForClauses(
              ', adjunta al presente'
            );
          break;
          default:
            clauseText = '';
        }
        break;
      
      case 'escrituraAdjuntaGaranteApoderadoPJ2':
        switch (inputValue) {
          case 'true':
            clauseText = formatPlaceholdersForClauses(
              ', adjunta al presente'
            );
          break;
          default:
            clauseText = '';
        }
        break;

      case 'escrituraAdjuntaGaranteApoderadoPF3':
        switch (inputValue) {
          case 'true':
            clauseText = formatPlaceholdersForClauses(
              ', adjunta al presente'
            );
          break;
          default:
            clauseText = '';
        }
        break;
      
      case 'escrituraAdjuntaGaranteApoderadoPJ3':
        switch (inputValue) {
          case 'true':
            clauseText = formatPlaceholdersForClauses(
              ', adjunta al presente'
            );
          break;
          default:
            clauseText = '';
        }
        break;
        
      case 'locacionAmoblado':
        switch (inputValue) {
          case 'locacionAmoblado':
            clauseText = formatPlaceholdersForClauses(
              'El inmueble se entrega amoblado con el siguiente mobiliario: {{descripcionLocacionAmoblado}}'
            );
          break;
          default:
            clauseText = '';
        }
        break;

      case 'adjuntaFotosLocacionAmoblado':
        switch (inputValue) {
          case 'true':
            clauseText = formatPlaceholdersForClauses(
              'Se adjunta al presente contrato Anexo con fotos.'
            );
          break;
          default:
            clauseText = '';
        }
        break;

      case 'locacionCochera':
        switch (inputValue) {
          case 'locacionCochera':
            clauseText = formatPlaceholdersForClauses(
              'El inmueble incluye la siguiente/s cochera/s: {{descripcionLocacionCochera}}'
            );
          break;
          default:
            clauseText = '';
        }
        break;

      case 'locacionBaulera':
        switch (inputValue) {
          case 'locacionBaulera':
            clauseText = formatPlaceholdersForClauses(
              'El inmueble incluye la siguiente/s baulera/s: {{descripcionLocacionBaulera}}'
            );
          break;
          default:
            clauseText = '';
        }
        break;

      case 'ajusteInflacionLocacion':
        switch (inputValue) {
          case 'true':
            clauseText = formatPlaceholdersForClauses(
              'Dicho precio mensual se actualizará {{frequenciaAjusteInflacionLocacion}} de acuerdo al {{indiceAjusteInflacionLocacion}}. Para ello EL LOCADOR realizará el cálculo indexatorio con una anticipación no menor a diez días a la fecha en que EL LOCATARIO debe abonar el alquiler actualizado. El nuevo valor se le informará EL LOCATARIO por los medios electrónicos que el mismo constituye en este acto.'
            );
          break;
          default:
            clauseText = '';
        }
        break;

      case 'formaPagoLocacion':
        switch (inputValue) {
          case 'efectivo':
            clauseText = formatPlaceholdersForClauses(
              ' en el domicilio de {{domicilioPagoLocacion}}'
            );
          break;
          case 'transferencia':
            clauseText = formatPlaceholdersForClauses(
              ' mediante depósito o transferencia bancaria en la cuenta del {{bancoPagoLocacion}} a nombre de {{titularBancoPagoLocacion}} CBU/CVU {{cbuBancoPagoLocacion}} Alias {{aliasBancoPagoLocacion}}'
            );
          break;
          default:
            clauseText = '';
        }
        break;

      case 'autorizadoPagoLocacion':
        if (inputValue !== '') {
          clauseText = formatPlaceholdersForClauses(
            ', facultándose a tales efectos, al/la Sr/a. {{autorizadoPagoLocacion}} a los efectos de extender los correspondientes recibos cancelatorios del precio'
          );
        } else {
          clauseText = '';
        }
        break;

      case 'expensasOrdinariasLocacion':
        switch (inputValue) {
          case 'no':
            clauseText = formatPlaceholdersForClauses(
              'El inmueble no paga expensas'
            );
          break;
          case 'locatario':
            clauseText = formatPlaceholdersForClauses(
              'Es obligación del LOCATARIO abonar las expensas que se deriven de gastos habituales ordinarios, entendiéndose por tales aquellos que se vinculan a los servicios normales y permanentes a disposición del LOCATORIO, independientemente de que sean considerados como expensas comunes ordinarias o extraordinarias.'
            );
          break;
          case 'locadora':
            clauseText = formatPlaceholdersForClauses(
              'Es obligación del LOCADOR abonar las expensas que se deriven de gastos habituales ordinarios, entendiéndose por tales aquellos que se vinculan a los servicios normales y permanentes a disposición del LOCATORIO, independientemente de que sean considerados como expensas comunes ordinarias o extraordinarias.'
            );
          break;
          default:
            clauseText = '';
        }
        break;

      case 'locadorInmobiliario':
        switch (inputValue) {
          case 'no' :
            clauseText = formatPlaceholdersForClauses(
              ''
            );
          break;
          case 'inmobiliaria' :
            clauseText = formatPlaceholdersForClauses(
              'Se deja asentado que el corredor inmobiliario {{nombreInmobiliaria}} {{matriculaCorredor}} ha participado en el presente contrato de locación. '
            );
          break;
          default:
            clauseText = '';
        }
        break;

      case 'clausulaAdicional':
        if (inputValue !== '') {
          clauseText = formatPlaceholdersForClauses(
            'VIGÉSIMA CUARTA - CLÁUSULA ADICIONAL: {{clausulaAdicional}}'
          );
        } else {
          clauseText = '';
        }
      break;



      default:
        clauseText = null;
    }

    if (clauseText !== null) {
      let clauseElement = document.querySelector(`.preview-placeholder.clause[data-placeholder="${placeholderKey}"]`);
      if (!clauseElement) {
        clauseElement = document.querySelector(`.preview-placeholder.nestedclause[data-placeholder="${inputValue}"]`);
      }

      if (clauseElement) {
        clauseElement.innerHTML = clauseText;
        console.log(`Updated clause content for ${placeholderKey}: ${clauseText}`);
      } else {
        console.warn(`No clause element found for placeholderKey: ${placeholderKey}`);
      }
    } else {
      let simplePlaceholderElement = document.querySelector(`.preview-placeholder[data-placeholder="${placeholderKey}"]`);
      if (simplePlaceholderElement) {
        if (hiddenPlaceholders.includes(placeholderKey) && !inputValue) {
          simplePlaceholderElement.innerHTML = ''; 
        } else {
          simplePlaceholderElement.innerHTML = `<span style="font-weight: bold; color: var(--primary-400);">${inputValue}</span>`;
        }
        console.log(`Directly replaced simple placeholder content for ${placeholderKey}: ${inputValue}`);

        simplePlaceholderElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        console.warn(`No element found for simple placeholder: ${placeholderKey}`);
      }
    }
  }

  // Function to clear placeholders for the previous selection
  function clearPlaceholdersForPreviousSelection(previousValue) {
    const placeholdersToClear = document.querySelectorAll(`.preview-placeholder[data-placeholder*="${previousValue}"]`);
    placeholdersToClear.forEach(placeholder => {
      placeholder.innerHTML = '_________';
    });
    console.log(`Cleared placeholders for previous selection: ${previousValue}`);
  }

  function addEventListenersToInputs() {
    const form = document.getElementById('wf-form-Contrato-alquiler-vivienda');
    if (form) {
      const formElements = form.querySelectorAll('input[name], textarea[name], select[name]');

      formElements.forEach(element => {
        element.addEventListener('input', () => {
          console.log(`Input event on ${element.name}`);
          updateSpecificPlaceholder(element.name);
        });
      });
    } else {
      console.error('Form not found!');
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed.');
    addEventListenersToInputs();
  });
