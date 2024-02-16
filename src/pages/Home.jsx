import NavBar from '../components/template/NavBar'
import BarraLateral from '../components/template/BarraLateral'
import BlockComand from '../components/BlockComand'

export default function Home() {
  return (
    <div className=''>
        <NavBar/>
        <BarraLateral/>
        <div className='w-full h-svh pt-28 pl-80 pr-11 text-yellow-50 bg-gradient-to-r from-gray-800 to-gray-900'>
            <h3 className='font-bold size-14 text-3xl'>Sfc</h3>
            <p>É usado para verificar e restaurar arquivos do sistema Windows corrompidos ou ausentes.</p>
            <p>Verificar e reparar arquivos do sistema: sfc /scannow</p>
            <p>Verificar arquivos protegidos do sistema: sfc /verifyonly</p>

            <BlockComand comando='iwconfig' resultado='lo        no wireless extensions.

enp2s0    no wireless extensions.

wlo1      IEEE 802.11  ESSID:"not this"  
          Mode:Managed  Frequency:2.462 GHz  Access Point: E0:E8:E6:F3:D1:75   
          Bit Rate=72.2 Mb/s   Tx-Power=22 dBm   
          Retry short limit:7   RTS thr:off   Fragment thr:off
          Power Management:on
          Link Quality=66/70  Signal level=-44 dBm  
          Rx invalid nwid:0  Rx invalid crypt:0  Rx invalid frag:0
          Tx excessive retries:0  Invalid misc:0   Missed beacon:0

docker0   no wireless extensions.

'/>
        </div>
    </div>
  )
}
