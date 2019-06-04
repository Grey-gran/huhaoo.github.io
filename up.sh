road=~/blog
cl()
{
	if test -r $1;
	then
		rm -rf $1/*
	else
		mkdir $1
	fi
}
cl $road/source/md
cd $road/source/_posts/
for f1 in *
do
	if test -f $f1
    then
		true
	else
		cp $f1.md $road/source/md/$f1.txt
		printf "%s was copyed to %s\n" "$f1.md" "$road/source/md/$f1.txt"
		cl $road/source/md/$f1
		cl $f1/$f1
		cd $f1
		if [ ! -d $f1 ];
		then
			mkdir $f1
		fi
		for f2 in ./*
		do
			if test -f $f2
			then
				cp $f2 $f1/
				printf "%s was copyed to %s\n" "$f1/$f2" "$f1/$f1/$f2"
				cp $f2 $road/source/md/$f1/$f2
				printf "%s was copyed to %s\n" "$f1/$f2" "$road/source/md/$f1/$f2"
			fi
		done
		cd ..
    fi
done
cd $road
cp up.sh $road/source/up.sh
hexo clean
hexo d -g
