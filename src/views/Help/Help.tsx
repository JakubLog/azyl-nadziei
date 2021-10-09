import React from 'react';
import HelpSection from 'components/molecules/HelpSection/HelpSection';
import { Fav } from 'components/atoms/Fav/Fav';

const Help: React.FC = () => {
  return (
    <>
      <HelpSection
        title="Wpłać darowiznę"
        subtitle="Ufunduj komuś karmę bądź nową smycz!"
        content={
          <>
            Możesz pomóc wpłacając jednorazową darowiznę lub ustaw zlecenie stałe na jedno z naszych kont. Utrzymujemy się z dobrowolnych darowizn,
            nie pobieramy wynagrodzenia za nasze działania. Nr konta <Fav>Bank PKO BP 18 1020 3668 0000 5202 0177 6103</Fav> lub{' '}
            <Fav>Bank BGŻ 10 2030 0045 1110 0000 0314 8060</Fav>
          </>
        }
      />
      <HelpSection
        title="Wolontariat"
        subtitle="Stań się jednym z wolontariuszy i pomóż nam w opiece!"
        content={
          <>
            Jeśli masz czas wolny i chciałbyś zrobić coś od siebie dla nas, zadzwoń. Przyda nam się pomoc w drobnych pracach porządkowo-remontowych,
            transporcie zwierząt.
          </>
        }
      />
      <HelpSection
        title="Przekaż nam swój 1%"
        subtitle="Pomóż nam w utrzymywaniu zwierząt potrzbujących pomocy!"
        content={
          <>
            Jako fundacja pożytku publicznego 1% jest dla nas ważnym punktem wsparcia finansowego. 1% możesz przekazać wpisując w odpowiedniej rubryce
            formularza podatkowego <Fav>KRS 0000297407</Fav>.
          </>
        }
      />
      <HelpSection
        title="Zaadoptuj wirtualnie"
        subtitle="Zaadoptuj wirtualnie jednego z naszym podopiecznych który się do tego kwalifikuje"
        content={
          <>
            Zostań opiekunem wirtualnym wybranego czworonoga, psa lub kota, który nie ma szans na zwykłą adopcję i przekaż na jego wyżywienie,
            leczenie określoną sumę każdego miesiąca poprzez przelew na konto azylu.
          </>
        }
      />
      <HelpSection
        title="Zorganizuj pomoc"
        subtitle="Samemu pozbieraj rzeczy od innych na rzecz naszych zwierząt"
        content={
          <>
            Jeśli interesuje Cię zbieranie darów i jesteś kreatywny możesz zorganizować zbiórkę karmy i innych akcesorii na rzecz czworonogów z azylu
            w miejscu swojej pracy, w fundacji do której należysz bądź po prostu w gronie swoich znajomych.
          </>
        }
      />
      <HelpSection
        title="Podaruj rzeczy"
        subtitle="Jeżeli chcesz, podaruj nam rzeczy dla naszych podopiecznych"
        content={
          <>
            Możesz pomóc dostarczając do siedziby fundacji karmę mokrą i suchą dla psów i kotów, najlepiej tę lepszej jakości, co znacznie przyspieszy
            rekonwalescencję i leczenie zwierząt. Prócz karm chętnie przyjmiemy koce, kocyki, legowiska, transportery, smycze, drapaki w dobrym stanie
            oraz suplementy i żwirek.
          </>
        }
      />
    </>
  );
};

export default Help;
