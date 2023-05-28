import Image from 'next/image';
import { StaffCardProps } from './StaffCard.types';

const StaffCard: React.FC<StaffCardProps> = ({ staff }) => {
  return (
    <div>
      <div className="w-full relative h-96 group">
        <Image
          src={staff.imageSrc}
          alt={`Profile Image for ${staff.name}`}
          fill
          className="object-cover object-center rounded-lg"
        />
      </div>
      <p className="text-base font-semibold text-slate-900 mt-6">
        {staff.name}
      </p>
      <p className="text-sm text-slate-600 mt-1">{staff.position}</p>
    </div>
  );
};

export default StaffCard;
