import Avatar from '@/components/Avatar/Avatar';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import AvatarImg from '@/images/user/user-01.png';

const Avatars = () => {
  return (
    <>
      <Breadcrumb pageName="Avatars" />
      <div className="flex flex-col gap-7 5">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-9">
            <h3 className="font-medium text-black dark:text-white">Style 1</h3>
          </div>
          <div className="px-4 py-9 sm:px-6 xl:px-8.5">
            <div className="flex items-center gap-6">
              <Avatar src={AvatarImg} alt="User" size={'xs'} />
              <Avatar src={AvatarImg} alt="User" size={'sm'} />
              <Avatar src={AvatarImg} alt="User" />
              <Avatar src={AvatarImg} alt="User" size={'lg'} />
            </div>
          </div>
        </div>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-9">
            <h3 className="font-medium text-black dark:text-white">Style 2</h3>
          </div>
          <div className="px-4 py-9 sm:px-6 xl:px-8.5">
            <div className="flex items-center gap-6">
              <Avatar src={AvatarImg} alt="User" size={'xs'} isPusle />
              <Avatar src={AvatarImg} alt="User" size={'sm'} isPusle />
              <Avatar src={AvatarImg} alt="User" isPusle />
              <Avatar src={AvatarImg} alt="User" size={'lg'} isPusle />
            </div>
          </div>
        </div>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-9">
            <h3 className="font-medium text-black dark:text-white">Style 2</h3>
          </div>
          <div className="px-4 py-9 sm:px-6 xl:px-8.5">
            <div className="flex items-center gap-6">
              <Avatar
                src={AvatarImg}
                alt="User"
                size={'xs'}
                isPusle
                color="gray"
              />
              <Avatar
                src={AvatarImg}
                alt="User"
                size={'sm'}
                isPusle
                color="gray"
              />
              <Avatar src={AvatarImg} alt="User" isPusle color="gray" />
              <Avatar
                src={AvatarImg}
                alt="User"
                size={'lg'}
                isPusle
                color="gray"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Avatars;
