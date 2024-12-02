import { Spinner, Typography } from "./MaterialComponents";
export default function Loading() {
  return (
    <div className="absolute top-0 right-0 h-screen w-screen flex flex-col justify-center items-center gap-2 z-50">
      <Typography className="text-purple-500/65 text-4xl font-bold">
        MEDTech
      </Typography>
      <Spinner className="h-12 w-12 text-purple-500/65" />;
    </div>
  );
}
