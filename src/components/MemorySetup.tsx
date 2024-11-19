import Button from "./ui/button";
import Fieldset from "./ui/fieldset";
import Logo from "./ui/logo";

export default function MemorySetup() {
  return (
    <div className="min-h-dvh flex justify-center items-center px-6 bg-dark-blue">
      <section className="w-full max-w-[654px]">
        <Logo className="w-full max-w-[122px] md:max-w-[153px] mx-auto mb-[45px] md:mb-[78px] fill-white" />
        <div className="grid gap-8 p-6 md:p-14 rounded-[10px] md:rounded-[20px] bg-white">
          <MemorySettings />
          <Button variant="primary" size="large">
            Start Game
          </Button>
        </div>
      </section>
    </div>
  );
}

function MemorySettings() {
  return (
    <div className="grid gap-8">
      <Fieldset legend="Select Theme" gap="gap-[11px] md:gap-[30px]">
        <Button variant="secondary" size="medium">
          Numbers
        </Button>
        <Button variant="secondary" size="medium">
          Icons
        </Button>
      </Fieldset>

      <Fieldset legend="Numbers of Players" gap="gap-2.5 md:gap-[21px]">
        <Button variant="secondary" size="medium">
          1
        </Button>
        <Button variant="secondary" size="medium">
          2
        </Button>
        <Button variant="secondary" size="medium">
          3
        </Button>
        <Button variant="secondary" size="medium">
          4
        </Button>
      </Fieldset>

      <Fieldset legend="Grid Size" gap="gap-[11px] md:gap-[30px]">
        <Button variant="secondary" size="medium">
          4x4
        </Button>
        <Button variant="secondary" size="medium">
          6x6
        </Button>
      </Fieldset>
    </div>
  );
}
